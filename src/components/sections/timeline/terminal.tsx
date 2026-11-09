"use client"
import { useMessages } from "next-intl"
import { TimelineType, TimelineItem } from "."

export default function TimelineTerminal({ type = "work" }: { type?: TimelineType }) {
    const messages = useMessages()
    const items = ((messages as any).timeline as TimelineItem[])
        .filter((item) => item.type === type)

    return (
        <div className="font-mono space-y-0">
            {items.map((item, i) => (
                <div key={i} className="relative pl-6 pr-3 pb-6 border-l border-border-2 border-primary last:pb-0">
                    {/* <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full bg-primary" /> */}

                    <p className="text-xs text-text-muted mb-0.5">
                        <span className="text-primary">*</span> {item.dateStart} - {item.dateEnd}
                    </p>

                    <p className="text-sm font-bold text-text">
                        <span className="text-xs text-primary">{">"}</span> {item.title}
                    </p>

                    <p className="text-xs text-text-secondary mb-1">
                        <span className="text-xs text-primary">{">"}</span> {item.subtitle}
                        <span className="text-text-muted text-xs ml-2">[{item.type}]</span>
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
