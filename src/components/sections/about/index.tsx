"use client"
import { useTheme } from "@/context/ThemeProvider"
import AboutTerminal from "./terminal"
import AboutSimple from "./simple"

export default function About() {
    const { theme } = useTheme()

    if (theme === "simple") return <AboutSimple />

    return <AboutTerminal />
}
