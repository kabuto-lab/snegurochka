"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, MapPin, X } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/constants";
import { SALON_PHOTOS } from "./constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Salons: FC = () => {
  const { t } = useLanguage();
  const SALONS = SALON_PHOTOS.map((photos, i) => ({ photos, ...t.salons.salons[i] }));
  const [active, setActive] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const salon = SALONS[active];

  const selectSalon = (i: number) => {
    setActive(i);
    setActivePhoto(0);
  }

  const prevPhoto = () => {
    setActivePhoto((p) => (p - 1 + salon.photos.length) % salon.photos.length);
  }

  const nextPhoto = () => {
    setActivePhoto((p) => (p + 1) % salon.photos.length);
  }

  useEffect(() => {
    if (!isLightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <div id="programs" className="relative scroll-mt-24 px-5 py-14 md:px-12 md:py-20">
      <Sparkles />
      <div className="mb-3.5 flex items-center justify-center gap-2.5 text-accent-light">
        <span className="h-px w-7.5 bg-linear-to-r from-transparent to-current" />
        <span className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-current" />
        <span className="h-px w-7.5 bg-linear-to-l from-transparent to-current" />
      </div>
      <h2 className="font-display mb-9 text-center text-[24px] font-bold md:text-[30px]">
        {t.salons.heading}
      </h2>

      <div className="mx-auto mb-10 flex max-w-225 items-center justify-center gap-4 border-b border-foreground/10 sm:gap-6 md:gap-8">
        {SALONS.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => selectSalon(i)}
            className={`relative cursor-pointer border-none bg-transparent py-2.5 text-[13px] font-bold tracking-wide uppercase transition-colors duration-300 ${active === i
                ? "text-accent-light"
                : "text-foreground/50 hover:text-foreground"
              }`}
          >
            {s.label}
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 origin-center bg-current transition-transform duration-300 ${active === i ? "scale-x-100" : "scale-x-0"
                }`}
            />
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="font-display mb-3.5 text-xl font-bold text-accent-light md:text-2xl">
            {salon.name}
          </h3>
          <p className="mb-5.5 text-[13px] leading-relaxed text-foreground/60">
            {salon.body}
          </p>
          <div className="flex flex-col gap-7">
            <div className="mb-6 w-fit inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent-wash px-4 py-2 text-[12.5px] font-semibold text-accent-light">
              <MapPin className="size-4 shrink-0" strokeWidth={1.8} />
              {salon.address}
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-fit rounded-full bg-linear-to-br from-accent-light to-accent px-7 py-3 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark"
            >
              {t.salons.cta}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setLightboxOpen(true);
            }}
            aria-label="Открыть фото на весь экран"
            className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              key={salon.photos[activePhoto]}
              src={salon.photos[activePhoto]}
              alt={`${salon.name} — главное фото`}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
            <span className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-accent-light/60 group-hover:text-accent-light">
              <Expand size={16} strokeWidth={1.8} />
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              aria-label="Предыдущее фото"
              className="absolute top-1/2 left-3 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              aria-label="Следующее фото"
              className="absolute top-1/2 right-3 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light"
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>
          </div>

          <div className="scrollbar-hidden flex gap-2 overflow-x-auto">
            {salon.photos.map((photo, i) => (
              <button
                key={photo}
                type="button"
                onClick={() => setActivePhoto(i)}
                aria-label={`Фото ${i + 1}`}
                className={`relative aspect-square w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-colors duration-300 ${i === activePhoto
                    ? "border-accent-light"
                    : "border-transparent opacity-70 hover:opacity-100"
                  }`}
              >
                <Image
                  src={photo}
                  alt={`${salon.name} — фото ${i + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-6 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Закрыть"
            className="absolute top-6 right-6 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light"
          >
            <X size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Предыдущее фото"
            className="absolute top-1/2 left-4 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light md:left-8"
          >
            <ChevronLeft size={22} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Следующее фото"
            className="absolute top-1/2 right-4 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light md:right-8"
          >
            <ChevronRight size={22} strokeWidth={1.8} />
          </button>

          <div
            className="relative h-full max-h-175 w-full max-w-275"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={salon.photos[activePhoto]}
              src={salon.photos[activePhoto]}
              alt={`${salon.name} — фото ${activePhoto + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
