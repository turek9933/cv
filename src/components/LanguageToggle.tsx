"use client"
import { useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/routing"

const LOCALES = ["en", "pl"] as const

export default function LanguageToggle() {
    const locale = useLocale()
    const pathname = usePathname()

    return (
        <div className="flex items-center gap-1">
            {LOCALES.map((lang) => {
                const isActive = locale === lang
                return (
                    <Link
                        key={lang}
                        href={pathname}
                        locale={lang}
                        className={`text-xs font-mono px-1.5 py-0.5 rounded transition-colors ${
                            isActive
                                ? "text-primary font-bold"
                                : "text-text-muted hover:text-text-secondary"
                        }`}
                        aria-label={`Switch language to ${lang}`}
                    >
                        {lang.toUpperCase()}
                    </Link>
                )
            })}
        </div>
    )
}
