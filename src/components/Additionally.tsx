"use client";

import { FC } from "react";
import Image from "next/image";
import { ADDON_PHOTOS, ADDON_PRICES } from "./constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Additionally: FC = () => {
  const { t } = useLanguage();
  const addons = ADDON_PHOTOS.map((photo, i) => ({
    photo,
    price: ADDON_PRICES[i],
    name: t.additionally.addons[i].name,
  }));

  return (
    <div className="relative flex flex-col gap-6 px-5 md:gap-10 md:px-12">
      <Sparkles />
      <h2 className="font-display text-center text-[22px] font-bold md:text-[28px]">
        {t.additionally.heading}
      </h2>

      <div className="mx-auto grid w-full max-w-325 grid-cols-2 gap-4 md:grid-cols-4 md:gap-4.5">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="overflow-hidden rounded-[10px] border border-foreground/8 bg-surface text-center transition-colors duration-300 hover:border-accent-light/40"
          >
            <div className="relative h-32.5">
              <Image
                src={addon.photo}
                alt={addon.name}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="mb-1.5 text-[13px] font-bold">{addon.name}</div>
              <div className="text-xs text-accent-light">
                {t.additionally.fromLabel} {addon.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
