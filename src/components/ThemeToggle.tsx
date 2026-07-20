"use client"
import { useTheme, THEMES } from "@/context/ThemeProvider"
import { useTranslations } from "next-intl"

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()
  const t = useTranslations('themeToggle')
  const isSimple = theme === "simple"

  if (!mounted) return <div className="flex gap-2 h-5" aria-hidden />

  if (isSimple) {
    return (
      <div className="flex gap-1" role="radiogroup" aria-label={t('label')}>
        {THEMES.map((th) => (
          <button
          key={th}
          role="radio"
          aria-checked={theme === th}
          onClick={() => setTheme(th)}
          className={`px-3 py-1 text-sm rounded border-2 border-border transition-colors cursor-pointer
            ${theme === th
              ? "bg-primary text-text-contrast"
              : "bg-transparent text-text-muted hover:border-border-hover hover:text-text-secondary"
            }`}
          >
            {t(th)}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3" role="radiogroup" aria-label={t('label')}>
      {THEMES.map((th) => (
        <button
        key={th}
        role="radio"
        aria-checked={theme === th}
        onClick={() => setTheme(th)}
        className="flex items-center gap-1 py-1 rounded text-xs transition-all cursor-pointer group"
        >
          <span className={`w-2 h-2 rounded-full border-2 transition-colors
            ${theme === th ? 'border-primary' : 'border-border group-hover:border-border-hover'}`}
          />
          <span className={`font-body transition-colors
            ${theme === th ? 'text-primary' : 'text-text-muted group-hover:text-text-secondary'}`}>
            {t(th)}
          </span>
        </button>
      ))}
    </div>
  )
}
