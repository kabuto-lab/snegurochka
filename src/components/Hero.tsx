"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/constants";
import { HERO_PHOTOS } from "./constants";
import { Sparkles } from "./Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SNOWFLAKES = Array.from({ length: 34 }, (_, i) => ({
  left: (i * 2.97) % 100,
  top: -((i * 23) % 100),
  size: 3 + (i % 4),
  peak: (0.5 + (i % 4) * 0.12).toFixed(2),
  duration: 7 + (i % 6) * 1.8,
  delay: i * 0.28,
}));

const HERO_EDGE = "max(56px, calc(50% - 668px))";

export const Hero: FC = () => {
  const { t } = useLanguage();
  const SLIDES = HERO_PHOTOS.map((photo, i) => ({ photo, ...t.hero.slides[i] }));
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setTransitioning] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = (index: number) => {
    if (index === current || isTransitioning) return;
    const incoming = slideRefs.current[index];
    const outgoing = slideRefs.current[current];
    
    if (incoming && outgoing) {
      setTransitioning(true);

      incoming.style.zIndex = "3";
      incoming.style.transition = "none";
      incoming.style.clipPath = "circle(0% at 92% 88%)";
      incoming.getBoundingClientRect();
      incoming.style.transition = "";
      
      requestAnimationFrame(() => {
        incoming.style.clipPath = "circle(150% at 92% 88%)";
      });

      window.setTimeout(() => {
        outgoing.style.zIndex = "1";
        incoming.style.zIndex = "2";
        setCurrent(index);
        setTransitioning(false);
      }, 1200);

    } else {
      setCurrent(index);
    }
  }

  useEffect(() => {
    const id = window.setTimeout(() => {
      goTo((current + 1) % SLIDES.length);
    }, 6000);

    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="relative h-[620px] w-full overflow-hidden md:h-[720px]">
      <div>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="absolute inset-0 [clip-path:circle(150%_at_92%_88%)] transition-[clip-path] duration-1150 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ zIndex: current === i ? 2 : 1 }}
          >
            <div className="absolute inset-[-4%] animate-[kenburns_20s_ease-in-out_infinite_alternate]">
              <Image
                src={slide.photo}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 400px at 75% 40%, rgba(201,195,255,.14), transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,9,20,.92) 0%, rgba(10,9,20,.35) 55%, rgba(10,9,20,.15) 100%)",
              }}
            />
            <div
              className="absolute top-0 bottom-0 left-0 box-border flex w-[min(980px,90%)] flex-col justify-center pr-5 pl-5 md:w-[min(980px,74%)] md:pr-6 md:pl-[var(--hero-edge)]"
              style={{ ["--hero-edge" as string]: HERO_EDGE }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-foreground uppercase md:text-[11px]">
                {slide.eyebrow}
              </span>
              <h1 className="font-display mt-4.5 mb-1.5 text-[34px] leading-[1.05] font-bold text-foreground italic sm:text-[44px] md:text-[60px]">
                {slide.title}
              </h1>
              <p className="font-display mb-5.5 text-lg font-semibold text-accent-light md:text-2xl">
                {slide.sub}
              </p>
              <p className="mb-6.5 text-[12.5px] text-foreground/58 md:text-[13.5px]">
                {slide.note}
              </p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit cursor-pointer rounded-full bg-linear-to-br from-accent-light to-accent px-7 py-3.5 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {SNOWFLAKES.map((flake, i) => (
          <span
            key={i}
            className="absolute z-4 rounded-full bg-foreground animate-[fall_linear_infinite]"
            style={
              {
                left: `${flake.left}%`,
                top: flake.top,
                width: flake.size,
                height: flake.size,
                animationDuration: `${flake.duration}s`,
                animationDelay: `${flake.delay}s`,
                "--peak": flake.peak,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <Sparkles count={16} />

      <div
        className="absolute right-5 bottom-11 z-6 flex items-end gap-2.5 md:right-[var(--hero-edge)]"
        style={{ ["--hero-edge" as string]: HERO_EDGE }}
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-1 cursor-pointer rounded-b-xs border-0 p-0 transition-[height,background,box-shadow] duration-500 ease-out ${current === i
                ? "bg-linear-to-b from-accent to-accent-light shadow-[0_0_12px_var(--accent)]"
                : "bg-linear-to-b from-foreground/25 to-foreground/50 hover:from-foreground/40 hover:to-foreground/70"
              }`}
            style={{ height: current === i ? 30 : 16 }}
          />
        ))}
      </div>

      <div
        className="absolute right-5 bottom-25 z-6 flex gap-2.5 md:right-[var(--hero-edge)]"
        style={{ ["--hero-edge" as string]: HERO_EDGE }}
      >
        <button
          type="button"
          aria-label="Предыдущий слайд"
          onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
          className="flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light"
        >
          <ChevronLeft size={16} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label="Следующий слайд"
          onClick={() => goTo((current + 1) % SLIDES.length)}
          className="flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light"
        >
          <ChevronRight size={16} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
};
