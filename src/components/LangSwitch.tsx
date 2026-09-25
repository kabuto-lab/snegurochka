import { FC } from "react";
import { LANGS } from "./constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const LangSwitch: FC = () => {
    const { lang, setLang } = useLanguage();

    return (
        <div
            role="group"
            aria-label="Язык"
            className="flex items-center gap-0.5 rounded-full border border-foreground/20 bg-background/35 p-1"
        >
            {LANGS.map((l) => (
                <button
                    key={l.code}
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[0.02em] transition-colors duration-300 ${lang === l.code
                            ? "bg-linear-to-br from-accent-light to-accent text-ink"
                            : "text-foreground/55 hover:text-foreground"
                        }`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
};
