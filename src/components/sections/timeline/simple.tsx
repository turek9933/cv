"use client"
import { useMessages } from "next-intl"

type TimelineItem = {
    date: string
    title: string
    subtitle: string
    description?: string
    type: "education" | "work" | "milestone"
}

export default function TimelineSimple() {
    const messages = useMessages()
    const items = (messages as any).timeline as TimelineItem[]

    return (
        <div className="space-y-6">
            {items.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-border last:pb-0">
                    <div className="absolute -left-2 top-0.5 w-3.5 h-3.5 rounded-full bg-primary" />

                    <p className="text-xs text-text-muted mb-0.5">
                        {item.date}
                    </p>

                    <h3 className="text-base font-semibold text-text">
                        {item.title}
                    </h3>

                    <p className="text-sm text-text-secondary mb-1">
                        {item.subtitle}
                    </p>

                    {item.description && (
                        <p className="text-sm text-text-muted leading-relaxed">
                            {item.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}
