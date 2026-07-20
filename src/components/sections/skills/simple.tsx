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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
                <div key={group.category}>
                    <h3 className="text-sm font-semibold text-text mb-3">
                        {group.category.at(0)?.toUpperCase() + group.category.slice(1)}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                            <span
                                key={skill}
                                className="text-sm text-text-secondary bg-bg-muted rounded px-2 py-1 hover:text-text-link-hover transition-colors"
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
