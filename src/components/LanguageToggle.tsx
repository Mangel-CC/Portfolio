import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageToggle() {
    const { lang, toggleLang } = useLanguage();
    const next = lang === "es" ? "EN" : "ES";

    return (
        <button
            onClick={toggleLang}
            aria-label={`Switch language to ${next}`}
            title={`Switch to ${next}`}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full
                cursor-pointer transition-colors duration-200 text-muted-foreground
                hover:text-foreground/80 font-sans font-semibold text-xs tracking-wider"
        >
            <span className="relative z-10">{lang.toUpperCase()}</span>
        </button>
    );
}
