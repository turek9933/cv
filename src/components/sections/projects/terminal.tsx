"use client"
import { useMessages } from "next-intl"

type Project = {
    slug: string
    title: string
    description: string
    longDescription: string
    demoNote: string
    date: string
    stack: string[]
    demoUrl: string
    repoUrl: string
}

export default function ProjectsTerminal() {
    const messages = useMessages()
    const projects = (messages as any).projects as Project[]

    return (
        <div className="space-y-6 font-mono">
            {projects.map((project) => (
                <div
                    key={project.slug}
                    className="border border-border rounded-sm p-4 hover:border-primary transition-colors"
                >
                    <p className="text-xs text-text-muted mb-1">
                        <span className="text-primary">commit</span>{" "}
                        <span className="text-text-secondary">{project.slug}</span>
                    </p>
                    <p className="text-xs text-text-muted mb-3">
                        <span className="text-primary">date:</span>{" "}
                        {project.date}
                    </p>

                    <p className="text-sm text-text-secondary mb-2 ml-4 border-l-2 border-border pl-3">
                        {project.longDescription}
                    </p>

                    <p className="text-xs text-text-muted mb-3 ml-4 border-l-2 border-border pl-3">
                        {project.demoNote}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs text-primary border border-primary/30 rounded-sm px-2 py-1 hover:text-text-contrast hover:bg-primary transision-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 text-xs">
                        {project.demoUrl && <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-link hover:text-text-link-hover hover:font-bold transition-colors underline underline-offset-2 decoration-dotted"
                        >
                            [demo]
                        </a>}
                        {project.repoUrl && <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-link hover:text-text-link-hover hover:font-bold transition-colors underline underline-offset-2 decoration-dotted"
                        >
                            [repo]
                        </a>}
                    </div>
                </div>
            ))}
        </div>
    )
}
