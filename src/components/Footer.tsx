"use client";

import { FC } from "react";
import { NAV_HREFS, VACANCIES_HREF } from "./constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Footer: FC = () => {
    const { t } = useLanguage();
    const footerLinks = [
        ...NAV_HREFS.map((href, i) => ({ href, label: t.footer.links[i] })),
        { href: VACANCIES_HREF, label: t.nav.vacancies },
    ];
    const [col1, col2] = [footerLinks.slice(0, 3), footerLinks.slice(3)];

    return (
        <footer className="max-w-325 w-full mx-auto py-8 px-5 flex flex-col gap-7 border-t border-solid border-[rgba(236,233,247,.08)] md:py-10 md:px-12 md:gap-9">
            <div className="flex w-full flex-col items-start gap-8 md:flex-row md:items-start md:justify-between md:gap-0">
                <div className="flex flex-col gap-3 max-w-[320px]">
                    <span className="font-display text-2xl font-bold italic text-foreground md:text-[26px]">Снегурочка</span>
                    <p className="text-[12px] text-foreground-faint">
                        {t.footer.copyright}
                    </p>
                </div>
                <div className="flex gap-8 md:gap-14">
                    <div className="flex flex-col gap-2.5">
                        {col1.map((link) => (
                            <a key={link.label} href={link.href} className="cursor-pointer text-[12px] text-foreground-faint transition-colors duration-300 hover:text-accent-light">{link.label}</a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2.5">
                        {col2.map((link) => (
                            <a key={link.label} href={link.href} className="cursor-pointer text-[12px] text-foreground-faint transition-colors duration-300 hover:text-accent-light">{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-7.5 border-t border-solid border-[rgba(236,233,247,.06)]">
                <span className="border border-solid border-[rgba(236,233,247,.25)] rounded-sm px-1.5 py-0.5 text-[10px] font-bold">{t.footer.ageBadge}</span>
                <span className="text-[10px] text-[rgba(236,233,247,.6)] tracking-[.04rem]">{t.footer.disclaimer}</span>
            </div>
        </footer>
    );
};
