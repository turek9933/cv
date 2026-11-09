"use client"
import { useTheme } from "@/context/ThemeProvider"
import TimelineTerminal from "./terminal"
import TimelineSimple from "./simple"

export type TimelineType = "education" | "work" | "milestone"

export type TimelineItem = {
    dateStart: string
    dateEnd: string
    title: string
    subtitle: string
    description?: string
    type: TimelineType
}


export default function Timeline({ type = "work" }: { type?: TimelineType }) {
    const { theme } = useTheme()

    if (theme === "simple") return <TimelineSimple type={type}/>

    return <TimelineTerminal type={type} />
}
