"use client"
import { useTheme } from "@/context/ThemeProvider"
import SkillsTerminal from "./terminal"
import SkillsSimple from "./simple"

export default function Skills() {
    const { theme } = useTheme()

    if (theme === "simple") return <SkillsSimple />

    return <SkillsTerminal />
}
