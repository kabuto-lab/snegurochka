"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { GIFT_PHOTOS } from "./constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Lottery: FC = () => {
  const { t } = useLanguage();
  const GIFTS = GIFT_PHOTOS.map((photo, i) => ({ photo, ...t.lottery.gifts[i] }));
  const [open, setOpen] = useState<boolean[]>(GIFTS.map(() => false));

  const toggle = (index: number) => {
    setOpen((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  return (
    <div id="certificates" className="relative scroll-mt-24 px-5 py-14 md:px-12 md:py-20">
      <Sparkles />
      <p className="mb-1.5 text-center text-[13px] text-[rgba(236,233,247,.5)] md:text-[14px]">
        {t.lottery.eyebrow}
      </p>
      <h2 className="font-display mb-2.5 text-center text-[26px] font-bold md:text-[32px]">
        {t.lottery.heading}
      </h2>
      <p className="mb-8 text-center text-[13px] text-[rgba(236,233,247,.45)] md:mb-10 md:text-[14px]">
        {t.lottery.subheading}
      </p>

      <div className="mx-auto my-0 grid w-full max-w-225 grid-cols-1 gap-6 md:grid-cols-2">
        {GIFTS.map((gift, i) => {
          const isOpen = open[i];

          return (
            <button
              key={gift.title}
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="group relative h-90 cursor-pointer overflow-hidden rounded-[14px] border border-solid border-[rgba(236,233,247,.14)] text-left transition-colors duration-300 hover:border-accent-light/50 md:h-110"
            >
              <Image
                src={gift.photo}
                alt={gift.title}
                fill
                sizes="(min-width: 768px) 438px, 90vw"
                className="scale-105 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/35 to-background/10" />

              {gift.badge && (
                <span className="absolute top-4 right-4 z-10 rounded-full bg-linear-to-br from-accent-light to-accent px-2.5 py-1 text-[10px] font-bold tracking-wide text-ink uppercase">
                  {gift.badge}
                </span>
              )}

              <span
                className={`font-display pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-58%] text-[48px] font-bold text-foreground/50 transition-opacity duration-400 md:text-[64px] ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                ?
              </span>

              <div
                className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-400 md:p-7.5 ${
                  isOpen
                    ? "pointer-events-none -translate-y-3.5 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <span className="text-[11px] font-bold tracking-[0.2em] text-accent-light uppercase">
                  {t.lottery.revealLabel}
                </span>
                <p className="font-display mt-2 text-xl font-bold text-foreground md:text-2xl">
                  {gift.price}
                </p>
              </div>

              <div
                className={`absolute inset-0 flex flex-col justify-center bg-background/85 p-5 backdrop-blur-md transition-all duration-400 md:p-7.5 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3.5 opacity-0"
                }`}
              >
                <span className="text-[11px] font-bold tracking-[0.2em] text-accent-light uppercase">
                  {t.lottery.revealBackLabel}
                </span>
                <p className="font-display mt-2.5 mb-3.5 text-xl font-bold text-foreground">
                  {gift.title}
                </p>
                <ul className="mb-5 flex flex-col gap-2 text-[12.5px] text-foreground/65">
                  {gift.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
                <span className="w-fit cursor-pointer rounded-full bg-linear-to-br from-accent-light to-accent px-5.5 py-2.5 text-[12px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark">
                  {t.lottery.cta}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
