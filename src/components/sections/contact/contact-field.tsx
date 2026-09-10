import type React from "react";
import { useId } from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  sanitize?: (value: string) => string;
}

export function Field({
  label,
  error,
  textarea,
  sanitize,
  className,
  id,
  ...props
}: FieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  const inputClass =
    "w-full border-0 bg-transparent py-4 text-base text-paper placeholder:text-muted/80 focus:outline-none transition-colors";

  function handleInput(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (sanitize) {
      const el = e.currentTarget;
      const cleaned = sanitize(el.value);
      if (cleaned !== el.value) el.value = cleaned;
    }
  }

  const errorId = `${fieldId}-error`;

  return (
    <div className="border-b border-line">
      <label
        htmlFor={fieldId}
        className="block pt-6 text-xs font-medium uppercase tracking-[0.3em] text-muted"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={fieldId}
          rows={4}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${inputClass} resize-none ${className ?? ""}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${inputClass} ${className ?? ""}`}
          onInput={handleInput}
          {...props}
        />
      )}
      {error && (
        <p id={errorId} className="pb-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
