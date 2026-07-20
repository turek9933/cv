"use client"
import { useMessages } from "next-intl"

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

                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs bg-bg-muted text-text-secondary rounded px-2 py-0.5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 text-sm">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            Live Demo
                        </a>
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-link hover:underline"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
