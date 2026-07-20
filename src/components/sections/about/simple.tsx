"use client"
import { useTranslations } from "next-intl"

export default function AboutSimple() {
    const t = useTranslations()

    const hobbies = t.raw("about.hobbies") as string[]

    return (
        <div>
            <p className="text-text-secondary leading-relaxed mb-4">
                {t("about.shortBio")}
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
                {t("about.longBio")}
            </p>

            <div>
                <h3 className="text-sm font-semibold text-text mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby) => (
                        <span
                            key={hobby}
                            className="text-sm text-text-secondary bg-bg-muted rounded px-2.5 py-1"
                        >
                            {hobby}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
