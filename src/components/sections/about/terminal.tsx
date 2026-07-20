"use client"
import { useTranslations } from "next-intl"

export default function AboutTerminal() {
    const t = useTranslations("about")

    const hobbies = t.raw("hobbies") as string[]

    return (
        <div className="font-mono">
            <p className="text-xs text-text-muted mb-2">
                <span className="text-primary">$</span> cat about.md
            </p>

            <div className="border-l-2 border-border pl-4 space-y-3">
                <p className="text-sm text-text-secondary leading-relaxed">
                    {t("shortBio")}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                    {t("longBio")}
                </p>
            </div>

            <p className="text-xs text-text-muted mt-4 mb-2">
                <span className="text-primary">$</span> ls ~/hobbies/
            </p>

            <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                    <span
                        key={hobby}
                        className="text-xs text-text-secondary border border-border rounded-sm px-2 py-0.5"
                    >
                        {hobby}
                    </span>
                ))}
            </div>
        </div>
    )
}
