"use server";

export type VacancyField = "name" | "phone" | "email" | "consent";
export type VacancyFieldError = "required" | "phone" | "email" | "consent";

export interface VacancyFormState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<VacancyField, VacancyFieldError>>;
  values?: Record<"name" | "phone" | "email" | "role" | "message", string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim();

export async function submitVacancy(
  _prev: VacancyFormState,
  formData: FormData,
): Promise<VacancyFormState> {
  const application = {
    name: field(formData, "name"),
    phone: field(formData, "phone"),
    email: field(formData, "email"),
    role: field(formData, "role"),
    message: field(formData, "message"),
  };
  const consent = formData.get("consent") === "on";

  const errors: VacancyFormState["errors"] = {};
  const phoneDigits = application.phone.replace(/\D/g, "");

  if (!application.name) errors.name = "required";
  if (!application.phone) errors.phone = "required";
  else if (!/^7\d{10}$/.test(phoneDigits)) errors.phone = "phone";
  if (!application.email) errors.email = "required";
  else if (!EMAIL_RE.test(application.email)) errors.email = "email";
  if (!consent) errors.consent = "consent";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values: application };
  }

  console.info("[vacancy] new application", application);

  return { status: "success" };
}
