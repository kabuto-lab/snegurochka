"use client";

import { FC } from "react";
import Image from "next/image";
import { WHATSAPP_CONTACT_HREF } from "@/lib/constants";
import { OFFER_PHOTOS } from "./constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const VIP: FC = () => {
  const { t } = useLanguage();
  const OFFERS = OFFER_PHOTOS.map(({ photo, vip }, i) => ({
    photo,
    vip,
    ...t.vip.offers[i],
  }));

  return (
  <div id="vip" className="relative scroll-mt-24 px-5 py-14 md:px-12 md:py-20">
    <Sparkles />
    <div className="mb-3.5 flex items-center justify-center gap-2.5 text-accent-light">
      <span className="h-px w-7.5 bg-linear-to-r from-transparent to-current" />
      <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-current" />
      <span className="h-px w-7.5 bg-linear-to-l from-transparent to-current" />
    </div>
    <h2 className="font-display mb-2 text-center text-[22px] font-bold md:text-[30px]">
      {t.vip.heading}
    </h2>
    <p className="mb-8 text-center text-[12px] text-foreground/42 md:mb-10">
      {t.vip.subheading}
    </p>

    <div className="mx-auto grid max-w-275 grid-cols-1 items-stretch gap-6 md:grid-cols-2">
      {OFFERS.map((offer) => (
        <div
          key={offer.title}
          className={`overflow-hidden rounded-[10px] border bg-surface ${offer.vip
              ? "border-accent/45 shadow-[0_24px_60px_-20px_rgba(139,127,238,.34)]"
              : "border-foreground/8"
            }`}
        >
          <div className="relative h-55">
            <Image
              src={offer.photo}
              alt={offer.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5 md:p-7">
            {offer.vip && (
              <span className="mb-2.5 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-wide text-ink uppercase">
                {t.vip.vipBadge}
              </span>
            )}
            <h3 className="font-display mb-1.5 text-xl font-bold">
              {offer.title}
            </h3>
            <div className="mb-4 flex items-baseline gap-2.5">
              <span className="text-xs text-foreground/45">
                {offer.duration}
              </span>
            </div>
            <p className="mb-4.5 text-[12.5px] leading-relaxed text-foreground/58">
              {offer.description}
            </p>
            <div className="mb-4.5 flex flex-col gap-1.5 text-xs text-foreground/55">
              {offer.items.map((item) => (
                <div key={item}>· {item}</div>
              ))}
            </div>
            <p className="mb-5 text-[11.5px] text-foreground/40">
              {offer.footnote}
            </p>
            <a
              href={WHATSAPP_CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-accent px-6 py-2.5 text-xs font-bold tracking-wide text-accent-light uppercase transition-colors duration-300 hover:bg-accent-wash"
            >
              {t.vip.cta}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
