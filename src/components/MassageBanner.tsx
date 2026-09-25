"use client";

import { FC } from "react";
import Image from "next/image";
import { WHATSAPP_HREF } from "@/lib/constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HERO_EDGE = "max(56px, calc(50% - 668px))";

export const MassageBanner: FC = () => {
  const { t } = useLanguage();

  return (
  <div className="pt-14 md:pt-20">
    <div className="relative h-125 w-full overflow-hidden md:h-105">
      <Image
        src="/banner-massage/massage-img.avif"
        alt={t.massageBanner.title}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <Sparkles count={10} />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,9,20,.9) 0%, rgba(10,9,20,.55) 40%, rgba(10,9,20,.15) 68%, rgba(10,9,20,.4) 100%)",
        }}
      />

      <div
        className="relative flex h-full items-center pr-6 md:pr-14"
        style={{ paddingLeft: HERO_EDGE }}
      >
        <div className="max-w-90 rounded-2xl border border-foreground/16 bg-background/55 p-6 backdrop-blur-md shadow-[0_30px_70px_-24px_rgba(0,0,0,.65)] md:max-w-110 md:p-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-accent-light uppercase">
            {t.massageBanner.eyebrow}
          </span>
          <h3 className="font-display mt-3 mb-2.5 text-[22px] font-bold text-foreground md:text-[28px]">
            {t.massageBanner.title}
          </h3>
          <p className="mb-5.5 text-[13px] text-foreground/62">
            {t.massageBanner.textBefore}
            <span className="font-bold text-accent-light">{t.massageBanner.codeword}</span>
            {t.massageBanner.textAfter}
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-linear-to-br from-accent-light to-accent px-7 py-3 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark"
          >
            {t.massageBanner.cta}
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};
