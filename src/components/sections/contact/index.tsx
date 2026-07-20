"use client"
import { useTheme } from "@/context/ThemeProvider"
import ContactTerminal from "./terminal"
import ContactSimple from "./simple"

export default function Contact() {
    const { theme } = useTheme()

    if (theme === "simple") return <ContactSimple />

    return <ContactTerminal />
}
