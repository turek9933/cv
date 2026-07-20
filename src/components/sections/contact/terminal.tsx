"use client"
import { useTranslations } from "next-intl"

export default function ContactTerminal() {
    const t = useTranslations()

    const contact = t.raw("contact") as {
        email: string
        github: string
        linkedin: string
        cvFile: string
    }

    const links: { cmd: string; label: string; href: string }[] = [
        { cmd: "mail", label: contact.email, href: `mailto:${contact.email}` },
        { cmd: "github", label: contact.github, href: contact.github },
        { cmd: "linkedin", label: contact.linkedin, href: contact.linkedin },
    ]

    return (
        <div className="font-mono space-y-2">
            {links.map((link) => (
                <p key={link.cmd} className="text-sm">
                    <span className="text-primary">$</span> echo{" "}
                    <span className="text-text-muted">~/.contact/{link.cmd}</span>
                    <br />
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-link hover:text-text-link-hover transition-colors ml-4 underline underline-offset-3 decoration-dotted"
                    >
                        {link.label}
                    </a>
                </p>
            ))}

            <div className="mt-4 pt-2 border-t border-border">
                <p className="text-sm">
                    <span className="text-primary">$</span> cat cv.pdf
                    <br />
                    <a
                        href={contact.cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-primary hover:underline hover:text-primary-hover decoration-dotted underline-offset-3 transition-colors"
                    >
                        [download]
                    </a>
                </p>
            </div>
        </div>
    )
}
