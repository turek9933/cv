"use client"
import { useTheme } from "@/context/ThemeProvider"
import TimelineTerminal from "./terminal"
import TimelineSimple from "./simple"

export default function Timeline() {
    const { theme } = useTheme()

    if (theme === "simple") return <TimelineSimple />

    return <TimelineTerminal />
}
