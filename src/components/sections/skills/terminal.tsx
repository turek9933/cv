"use client"
import { useMessages } from "next-intl"

type SkillCategory = {
    category: string
    items: string[]
}

export default function SkillsTerminal() {
    const messages = useMessages()
    const skills = (messages as any).skills as SkillCategory[]

    return (
        <div className="font-mono space-y-4">
            {skills.map((group) => (
                <div key={group.category}>
                    <p className="text-xs text-text-muted mb-1">
                        <span className="text-primary">$</span> ls ~/skills/
                        <span className="text-text-secondary">{group.category}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3 ml-4">
                        {group.items.map((skill) => (
                            <span
                                key={skill}
                                className="text-sm text-text-secondary border border-border rounded-sm px-2 py-1 hover:text-text-link-hover hover:border-border-hover transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
