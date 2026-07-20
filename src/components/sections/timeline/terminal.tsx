"use client"
import { useMessages } from "next-intl"

type TimelineItem = {
    date: string
    title: string
    subtitle: string
    description?: string
    type: "education" | "work" | "milestone"
}

export default function TimelineTerminal() {
    const messages = useMessages()
    const items = (messages as any).timeline as TimelineItem[]

    return (
        <div className="font-mono space-y-0">
            {items.map((item, i) => (
                <div key={i} className="relative pl-6 pb-6 border-l border-border last:pb-0">
                    <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full bg-primary" />

                    <p className="text-xs text-text-muted mb-0.5">
                        <span className="text-primary">*</span> {item.date}
                    </p>

                    <p className="text-sm font-bold text-text">
                        {item.title}
                    </p>

                    <p className="text-xs text-text-secondary mb-1">
                        {item.subtitle}
                        <span className="text-text-muted ml-2">[{item.type}]</span>
                    </p>

                    {item.description && (
                        <p className="text-xs text-text-muted">
                            {item.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}
