"use client"
import { useMessages, useTranslations } from "next-intl"

type Project = {
    slug: string
    title: string
    description: string
    longDescription: string
    demoNote: string
    stack: string[]
    demoUrl: string
    repoUrl: string
}

export default function ProjectsSimple() {
    const t = useTranslations("common")
    const messages = useMessages()
    const projects = (messages as any).projects as Project[]

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <div
                    key={project.slug}
                    className="border border-border rounded-lg p-5 hover:shadow-sm transition-shadow"
                >
                    <h3 className="text-lg font-bold text-text mb-1">
                        {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                        {project.description}
                    </p>
                    <p className="text-sm text-text-muted mb-2 leading-relaxed">
                        {project.longDescription}
                    </p>

                    <p className="text-xs text-text-muted mb-3 italic">
                        {project.demoNote}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs bg-bg-muted text-text-secondary rounded px-2 py-1 hover:text-text-contrast hover:bg-primary transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 text-sm">
                        {project.demoUrl && <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium hover:text-text-link-hover transition-colors"
                        >
                            {t("demo")}
                        </a>}
                        {project.repoUrl && <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-link hover:underline font-medium hover:text-text-link-hover transition-colors"
                        >
                            {t("source")}
                        </a>}
                    </div>
                </div>
            ))}
        </div>
    )
}
