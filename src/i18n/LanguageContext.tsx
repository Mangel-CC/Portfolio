import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Lang, type Translation } from "./translations";

interface LanguageContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
    toggleLang: () => void;
    t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-lang";

function detectInitialLang(): Lang {
    if (typeof window === "undefined") return "es";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
    const browser = window.navigator.language?.toLowerCase() ?? "";
    return browser.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(detectInitialLang);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            lang,
            setLang: setLangState,
            toggleLang: () => setLangState((prev) => (prev === "es" ? "en" : "es")),
            t: translations[lang],
        }),
        [lang]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}
