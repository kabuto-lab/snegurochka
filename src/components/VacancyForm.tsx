"use client";

import { FC, ReactNode, useActionState, useState } from "react";
import { Check, CircleCheck } from "lucide-react";
import { submitVacancy, VacancyFormState } from "@/app/vacancies/actions";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const INITIAL_STATE: VacancyFormState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border bg-background/60 px-4 py-3 text-[14px] text-foreground placeholder:text-foreground-faint outline-none transition-colors duration-300 focus:border-accent-light/70 focus:bg-background/80";

const formatPhone = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (!digits.startsWith("7")) digits = `7${digits}`;

  const rest = digits.slice(1, 11);
  if (!rest) return "";

  let out = `+7 (${rest.slice(0, 3)}`;
  if (rest.length > 3) out += `) ${rest.slice(3, 6)}`;
  if (rest.length > 6) out += `-${rest.slice(6, 8)}`;
  if (rest.length > 8) out += `-${rest.slice(8, 10)}`;
  return out;
};

interface FieldProps {
  id: string;
  label: string;
  optional?: string;
  error?: string;
  children: ReactNode;
}

const Field: FC<FieldProps> = ({ id, label, optional, error, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[12.5px] font-semibold text-foreground/80">
      {label}
      {optional && (
        <span className="ml-1.5 font-medium text-foreground-faint">({optional})</span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-[12px] text-[#ff8f9e]">
        {error}
      </p>
    )}
  </div>
);

const Form: FC<{ onReset: () => void }> = ({ onReset }) => {
  const { t } = useLanguage();
  const v = t.vacancies;
  const [state, formAction, pending] = useActionState(submitVacancy, INITIAL_STATE);
  const [phone, setPhone] = useState("");
  const errors = state.errors ?? {};
  const values = state.values;

  const fieldError = (key: keyof typeof errors) =>
    errors[key] ? v.errors[errors[key]] : undefined;
  const borderClass = (key: keyof typeof errors) =>
    errors[key] ? "border-[#ff8f9e]/70" : "border-border";
  const a11y = (key: keyof typeof errors) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `vacancy-${key}-error` : undefined,
  });

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CircleCheck size={44} strokeWidth={1.5} className="text-accent-light" />
        <h2 className="font-display text-[28px] font-bold text-foreground">{v.successTitle}</h2>
        <p className="max-w-90 text-[14px] text-foreground-muted">{v.successBody}</p>
        <button
          type="button"
          onClick={onReset}
          className="mt-2 cursor-pointer rounded-full border border-foreground/25 px-6 py-2.5 text-[13px] font-semibold text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:text-accent-light"
        >
          {v.sendAnother}
        </button>
      </div>
    );
  }

  const hasServerError = state.status === "error" && Object.keys(errors).length === 0;

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <Field id="vacancy-name" label={v.nameLabel} error={fieldError("name")}>
        <input
          id="vacancy-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={values?.name}
          className={`${inputClass} ${borderClass("name")}`}
          {...a11y("name")}
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id="vacancy-phone" label={v.phoneLabel} error={fieldError("phone")}>
          <input
            id="vacancy-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 (900) 000-00-00"
            required
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={`${inputClass} ${borderClass("phone")}`}
            {...a11y("phone")}
          />
        </Field>

        <Field id="vacancy-email" label={v.emailLabel} error={fieldError("email")}>
          <input
            id="vacancy-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            required
            defaultValue={values?.email}
            className={`${inputClass} ${borderClass("email")}`}
            {...a11y("email")}
          />
        </Field>
      </div>

      <Field id="vacancy-role" label={v.roleLabel} optional={v.optional}>
        <input
          id="vacancy-role"
          name="role"
          type="text"
          placeholder={v.rolePlaceholder}
          defaultValue={values?.role}
          className={`${inputClass} border-border`}
        />
      </Field>

      <Field id="vacancy-message" label={v.messageLabel} optional={v.optional}>
        <textarea
          id="vacancy-message"
          name="message"
          rows={4}
          placeholder={v.messagePlaceholder}
          defaultValue={values?.message}
          className={`${inputClass} resize-y border-border`}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="group flex cursor-pointer items-start gap-3 text-[12.5px] leading-relaxed text-foreground-muted">
          <input
            name="consent"
            type="checkbox"
            required
            className="peer sr-only"
            {...a11y("consent")}
          />
          <span
            aria-hidden
            className={`mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-background/60 text-ink transition-all duration-300 group-hover:border-accent-light/70 peer-checked:border-transparent peer-checked:bg-linear-to-br peer-checked:from-accent-light peer-checked:to-accent peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-accent-light/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface ${
              errors.consent ? "border-[#ff8f9e]/70" : "border-foreground/25"
            }`}
          >
            <Check
              size={13}
              strokeWidth={3}
              className="scale-50 opacity-0 transition-all duration-200"
            />
          </span>
          <span className="transition-colors duration-300 group-hover:text-foreground/80">
            {v.consent}
          </span>
        </label>
        {errors.consent && (
          <p id="vacancy-consent-error" className="text-[12px] text-[#ff8f9e]">
            {v.errors[errors.consent]}
          </p>
        )}
      </div>

      {hasServerError && (
        <p role="alert" className="text-[13px] text-[#ff8f9e]">
          {v.errors.server}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 cursor-pointer self-start rounded-full bg-linear-to-br from-accent-light to-accent px-8 py-3.5 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? v.submitting : v.submit}
      </button>
    </form>
  );
};

export const VacancyForm: FC = () => {
  const [formKey, setFormKey] = useState(0);

  return <Form key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
};
