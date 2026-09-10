"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { site } from "@/lib/site";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { sanitizeName, sanitizePhone } from "@/lib/contact-utils";
import { Field } from "./contact-field";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { form } = site.contact;
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
      website: "",
    },
  });

  const privacyChecked = watch("privacy");

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Wysłanie nie powiodło się.");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-surface p-8 sm:p-12">
        <p className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
          Dziękuję za wiadomość.
        </p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {form.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border-t border-line"
    >
      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Nie wypełniaj tego pola</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <Field
        label={form.nameLabel}
        placeholder={form.namePlaceholder}
        autoComplete="name"
        error={errors.name?.message}
        sanitize={sanitizeName}
        {...register("name")}
      />
      <Field
        label={form.emailLabel}
        placeholder={form.emailPlaceholder}
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Field
        label={form.phoneLabel}
        placeholder={form.phonePlaceholder}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        error={errors.phone?.message}
        sanitize={sanitizePhone}
        {...register("phone")}
      />
      <Field
        label={form.messageLabel}
        placeholder={form.messagePlaceholder}
        textarea
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="pt-6 pb-8 sm:pb-6">
        <label className="group flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="peer sr-only"
            {...register("privacy")}
          />
          <span
            aria-hidden="true"
            className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center border transition-colors peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-paper ${
              privacyChecked
                ? "border-paper bg-paper"
                : "border-line bg-transparent"
            }`}
          >
            {privacyChecked && (
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-ink"
              >
                <path d="M3 8.5l3.5 3.5L13 5" />
              </svg>
            )}
          </span>
          <span className="text-sm leading-relaxed text-muted">
            {form.privacyLabel.split("Polityką prywatności")[0]}
            <a
              href={form.privacyHref}
              className="text-paper underline decoration-line underline-offset-4 transition-colors hover:text-muted"
            >
              Polityką prywatności
            </a>
            {form.privacyLabel.split("Polityką prywatności")[1]}
          </span>
        </label>
        {errors.privacy?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.privacy.message}</p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mb-6 border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-muted"
        >
          {form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-paper px-7 text-sm font-medium text-ink transition-colors duration-200 select-none hover:bg-white hover:shadow-[0_0_0_1px_rgba(244,242,237,0.5)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Wysyłanie…" : form.submit}
      </button>
    </form>
  );
}
