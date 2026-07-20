"use client"
import { useTranslations } from "next-intl"

export default function AboutSimple() {
    const t = useTranslations("about")

    const hobbies = t.raw("hobbies") as string[]

    return (
        <div className="text-center">
            <p className="text-text-secondary leading-relaxed mb-4">
                {t("shortBio")}
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
                {t("longBio")}
            </p>

            <div>
                <h3 className="text-md font-semibold text-text mb-2">{t("interests")}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {hobbies.map((hobby) => (
                        <span
                            key={hobby}
                            className="text-sm text-text-secondary bg-bg-muted rounded px-2 py-1 hover:text-text-link-hover transition-colors"
                        >
                            {hobby}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
