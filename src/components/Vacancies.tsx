"use client";

import { FC } from "react";
import { Sparkles } from "./Sparkles";
import { VacancyForm } from "./VacancyForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Vacancies: FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden px-5 pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-130"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, var(--accent-wash-strong) 0%, transparent 70%)",
        }}
      />
      <Sparkles count={10} />

      <div className="relative mx-auto flex max-w-170 flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-accent-light uppercase">
            {t.vacancies.eyebrow}
          </span>
          <h1 className="font-display text-[36px] font-bold text-foreground md:text-[48px]">
            {t.vacancies.heading}
          </h1>
          <p className="mx-auto max-w-120 text-[14px] text-foreground-muted">
            {t.vacancies.subheading}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface/80 p-6 shadow-[0_30px_70px_-24px_rgba(0,0,0,.65)] backdrop-blur-md md:p-10">
          <VacancyForm />
        </div>
      </div>
    </div>
  );
};
