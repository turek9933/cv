"use client"
import { useTranslations } from "next-intl"

export default function HeroSimple() {
    const t = useTranslations("hero")

    return (
        <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text mb-3 tracking-tight">
                {t("greeting")}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary">
                {t("role")}
            </p>
        </div>
    )
}
