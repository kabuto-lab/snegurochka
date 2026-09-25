"use client";

import { FC } from "react";
import Image from "next/image";
import { WHATSAPP_HREF } from "@/lib/constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const NewYear: FC = () => {
  const { t } = useLanguage();
  const RATES = t.newYear.rates;

  return (
  <div id="lounge" className="relative mx-5 scroll-mt-24 overflow-hidden rounded-xl border border-[rgba(236,233,247,.1)] bg-linear-to-br from-[rgba(30,24,52,.6)] to-[rgba(11,10,20,.9)] px-6 pt-12 pb-10 md:mx-12 md:px-14 md:pt-20 md:pb-16">
    <Sparkles />
    <div className="mb-3.5 flex items-center justify-center gap-2.5 text-accent-light">
      <span className="h-px w-7.5 bg-linear-to-r from-transparent to-current" />
      <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-current" />
      <span className="h-px w-7.5 bg-linear-to-l from-transparent to-current" />
    </div>
    <h2 className="font-display mb-2 text-center text-[24px] font-bold md:text-[30px]">
      {t.newYear.heading}
    </h2>
    <p className="mb-8 text-center text-[13px] text-foreground/55 md:mb-12">
      {t.newYear.subheading}
    </p>

    <div className="mx-auto grid max-w-275 grid-cols-1 items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
      <div className="relative mx-auto w-full max-w-90 pr-7 pb-7 md:mx-0 md:max-w-none">
        <div className="relative aspect-4/5 overflow-hidden rounded-[10px] shadow-[0_24px_60px_-20px_rgba(0,0,0,.6)]">
          <Image
            src="/new-year/maxresdefault.avif"
            alt={t.newYear.heading}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="absolute right-0 bottom-0 aspect-4/3 w-[58%] overflow-hidden rounded-lg border-[3px] border-background shadow-[0_16px_40px_-14px_rgba(0,0,0,.65)]">
          <Image
            src="/new-year/maxresdefault-1.avif"
            alt={t.newYear.heading}
            fill
            sizes="(min-width: 768px) 24vw, 60vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-7.5 items-center justify-center rounded-full border border-accent/50 bg-accent/15 text-xs font-bold text-accent-light">
              1
            </span>
            <h3 className="text-base font-bold">{t.newYear.step1Title}</h3>
          </div>
          <p className="text-[13px] leading-relaxed text-foreground/60">
            {t.newYear.step1Body}
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-7.5 items-center justify-center rounded-full border border-accent/50 bg-accent/15 text-xs font-bold text-accent-light">
              2
            </span>
            <h3 className="text-base font-bold">
              {t.newYear.step2Title}
            </h3>
          </div>
          <div className="flex flex-col gap-2 text-[13px] text-foreground/60">
            {RATES.map((rate, i) => (
              <div
                key={rate.label}
                className={`flex justify-between ${i < RATES.length - 1
                    ? "border-b border-foreground/8 pb-2"
                    : ""
                  }`}
              >
                <span>{rate.label}</span>
                <strong className="text-accent-light">{rate.price}</strong>
              </div>
            ))}
          </div>
        </div>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit cursor-pointer rounded-full bg-linear-to-br from-accent-light to-accent px-7 py-3.5 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark"
        >
          {t.newYear.cta}
        </a>
      </div>
    </div>
  </div>
  );
};
