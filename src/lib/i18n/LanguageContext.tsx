"use client";

import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import { LangCode, Translation, TRANSLATIONS } from "./translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<LangCode>("ru");

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: TRANSLATIONS[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
