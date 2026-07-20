"use client"
import { useTranslations } from "next-intl"

export default function ContactSimple() {
    const t = useTranslations()

    const contact = t.raw("contact") as {
        email: string
        github: string
        linkedin: string
        cvFile: string
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-link hover:text-text-link-hover transition-colors underline underline-offset-3"                >
                    GitHub
                </a>
                <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-text-link hover:text-text-link-hover transition-colors underline underline-offset-3"
                >
                    {contact.email}
                </a>
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-sm text-text-link hover:text-text-link-hover transition-colors underline underline-offset-3"                >
                    LinkedIn
                </a>
            </div>

            <a
                href={contact.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 text-sm font-medium text-text-contrast bg-primary rounded hover:bg-primary-hover transition-colors"
            >
                {t("contact.download")}
            </a>
        </div>
    )
}
