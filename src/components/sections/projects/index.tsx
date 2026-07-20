"use client"
import { useTheme } from "@/context/ThemeProvider"
import ProjectsTerminal from "./terminal"
import ProjectsSimple from "./simple"

export default function Projects() {
    const { theme } = useTheme()

    if (theme === "simple") return <ProjectsSimple />

    return <ProjectsTerminal />
}
