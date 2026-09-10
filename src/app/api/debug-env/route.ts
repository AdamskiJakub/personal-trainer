import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * TYMCZASOWY endpoint diagnostyczny — do usunięcia po rozwiązaniu problemu.
 * Pokazuje, czy runtime widzi zmienne środowiskowe (bez ujawniania wartości).
 */
export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM;

  return NextResponse.json({
    hasResendKey: Boolean(apiKey),
    resendKeyPrefix: apiKey ? apiKey.slice(0, 6) : null,
    resendKeyLength: apiKey ? apiKey.length : 0,
    hasContactEmail: Boolean(toEmail),
    contactEmail: toEmail ?? null,
    hasContactFrom: Boolean(fromEmail),
    contactFrom: fromEmail ?? null,
    vercelEnv: process.env.VERCEL_ENV ?? null,
    vercelUrl: process.env.VERCEL_URL ?? null,
    vercelGitCommitRef: process.env.VERCEL_GIT_COMMIT_REF ?? null,
    vercelGitCommitSha: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
    nodeEnv: process.env.NODE_ENV ?? null,
  });
}
