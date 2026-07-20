"use client"
import { useTheme } from "@/context/ThemeProvider"
import HeroTerminal from "./terminal"
import HeroSimple from "./simple"

export default function Hero() {
    const { theme } = useTheme()

    if (theme === "simple") return <HeroSimple />

    return <HeroTerminal />
}
