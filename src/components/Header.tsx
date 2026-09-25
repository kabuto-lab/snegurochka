"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_HREFS } from "./constants";
import { LangSwitch } from "./LangSwitch";
import { WHATSAPP_HREF } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navLinks = NAV_HREFS.map((href, i) => ({ href, label: t.nav.links[i] }));

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-linear-to-b from-background/60 via-background/25 to-transparent">
      <div className="relative flex items-center justify-between gap-4 px-5 py-4 lg:px-12 lg:py-6">
        <div className="flex items-baseline gap-2">
          <Link
            href="/"
            className="font-display cursor-pointer text-2xl font-bold text-foreground italic transition-colors duration-300 hover:text-accent-light lg:text-[26px]"
          >
            Снегурочка
          </Link>
        </div>

        <nav
          className="absolute hidden items-center gap-6 lg:flex xl:gap-8"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="cursor-pointer text-[12.5px] font-semibold text-foreground/80 transition-colors duration-300 hover:text-accent-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch />
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-linear-to-br from-accent-light to-accent px-7 py-3 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light lg:hidden"
        >
          {isMenuOpen ? (
            <X size={18} strokeWidth={1.8} />
          ) : (
            <Menu size={18} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-3 bg-background/92 backdrop-blur-xl transition-opacity duration-400 ease-out lg:hidden ${
          isMenuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label={t.nav.closeMenu}
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground/25 bg-background/40 text-foreground transition-colors duration-300 hover:border-accent-light/60 hover:bg-background/70 hover:text-accent-light"
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer py-2 text-2xl font-semibold text-foreground/85 transition-colors duration-300 hover:text-accent-light"
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+79160073259"
          className="cursor-pointer pt-4 text-lg font-semibold tabular-nums text-foreground/85 transition-colors duration-300 hover:text-accent-light"
        >
          {t.nav.phone}
        </a>
        <div className="mt-3.5">
          <LangSwitch />
        </div>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-3.5 cursor-pointer rounded-full bg-linear-to-br from-accent-light to-accent px-8 py-3.5 text-[13.5px] font-bold text-ink transition-colors duration-300 hover:from-accent hover:to-accent-dark"
        >
          {t.nav.cta}
        </a>
      </div>
    </header>
  );
};
