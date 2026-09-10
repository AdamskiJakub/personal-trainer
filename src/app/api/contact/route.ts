import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Nieprawidłowe dane formularza." },
      { status: 400 },
    );
  }

  const { name, email, phone, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  const fromEmail =
    process.env.CONTACT_FROM ?? "Jakub Adamski <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error("Brak konfiguracji RESEND_API_KEY lub CONTACT_EMAIL.");
    return NextResponse.json(
      { error: "Serwer nie jest skonfigurowany." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const phoneLine = phone ? `\nTelefon: ${phone}` : "";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Jakub Adamski — nowa wiadomość ze strony`,
      text: `Imię: ${name}\nE-mail: ${email}${phoneLine}\n\nWiadomość:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości." },
      { status: 500 },
    );
  }
}
