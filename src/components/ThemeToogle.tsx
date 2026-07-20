"use client";
import { useTheme, THEMES } from "@/context/ThemeProvider";
import { useTranslations } from "next-intl";

function Dot({ active }: { active: boolean }) {
    return (
        <div className={`
            block w-2 h-2 rounded-full transition-all duration-200 hover:border-primary-hover
            ${active ? "border-2 border-primary" : "border-2 border-border"}
            `}
        />
    );
}

export default function ThemeToggle() {
    const { theme, setTheme, mounted } = useTheme();
    const t = useTranslations('themeToggle')
    const isSimple = theme === "simple";

    if (!mounted) {
        return (
            <div className="flex gap-2" aria-hidden>
                {THEMES.map((t) => (
                    <span
                        key={t}
                        className="block w-3 h-3 rounded-full border-1 border-border"
                    />
                ))}
            </div>
        );
    }

    if (isSimple) {
        return (
            <div
                className="flex gap-1"
                role="radiogroup"
                aria-label="Motyw"
            >
                {THEMES.map((t) => (
                    <button
                        key={t}
                        role="radio"
                        aria-checked={theme === t}
                        onClick={() => setTheme(t)}
                        className={`px-3 py-1 text-sm rounded border transition-colors cursor-pointer
                            ${theme === t
                                ? "bg-primary text-text-contrast border-primary"
                                : "bg-transparent text-text-secondary border-border hover:border-text-muted"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className="flex items-center flex-row gap-2">
            {THEMES.map((th) => (
                <button
                    key={th}
                    onClick={() => setTheme(th)}
                    className="cursor-pointer flex gap-1 items-center"
                    aria-label={th}
                    title={t(th)}
                >
                    <Dot active={theme === th} />
                    <div
                        className={`text-sm font-body hover:text-primary-hover transition-colors
                        ${theme === th ? "text-primary" : "text-text-secondary"}`}
                    >
                        {t(th)}</div>
                </button>
            ))}
        </div>
    );
}