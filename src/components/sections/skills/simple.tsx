"use client"
import { useMessages } from "next-intl"

type SkillCategory = {
    category: string
    items: string[]
}

export default function SkillsSimple() {
    const messages = useMessages()
    const skills = (messages as any).skills as SkillCategory[]

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {skills.map((group) => (
                <div key={group.category}>
                    <h3 className="text-sm font-semibold text-text mb-3">
                        {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                            <span
                                key={skill}
                                className="text-sm text-text-secondary bg-bg-muted rounded px-2.5 py-1"
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
