"use client"
import { useTranslations } from "next-intl"

export default function HeroTerminal() {
    const t = useTranslations("hero")

    return (
        <div className="font-mono">
            <p className="text-sm md:text-base text-primary mb-6">
                <span className="animate-pulse">$</span>{" "}
                <span>{t("prompt")}</span>
                <span className="inline-block w-2 h-5 bg-primary ml-1 animate-[blink_1s_step-end_infinite]" />
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text mb-3 tracking-tight">
                {t("greeting")}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary">
                {t("role")}
            </p>
        </div>
    )
}