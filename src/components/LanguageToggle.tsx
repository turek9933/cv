"use client"
import { useLocale } from "next-intl"
import { Link, usePathname, LOCALES } from "@/i18n/routing"
import { useTheme } from "@/context/ThemeProvider"

export default function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const { theme } = useTheme()
  const isSimple = theme === "simple"

  if (isSimple) {
    return (
      <div className="flex gap-3">
        {LOCALES.map((lang) => {
          const isActive = locale === lang
          return (
            <Link
              key={lang}
              href={pathname}
              locale={lang}
              className={`px-3 py-1 text-sm rounded border-2 border-border transition-colors cursor-pointer
                ${isActive
                  ? "bg-primary text-text-contrast"
                  : "bg-transparent text-text-muted hover:border-border-hover hover:text-text-secondary"
                }`}
            >
              {lang.toUpperCase()}
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      {LOCALES.map((lang) => {
        const isActive = locale === lang
        return (
            <Link
            key={lang}
            href={pathname}
            locale={lang}
            className="flex items-center gap-2 p-1 rounded text-xs transition-all group"
            >
                <span className={`font-body transition-colors
                ${isActive ? 'text-primary' : 'text-text-muted group-hover:text-text-secondary'}`}>
                {lang.toUpperCase()}
                </span>
                <span className={`w-2 h-2 rounded-full border-2 transition-colors
                ${isActive ? 'border-primary' : 'border-border group-hover:border-border-hover'}`}
                />
            </Link>
        )
      })}
    </div>
  )
}
