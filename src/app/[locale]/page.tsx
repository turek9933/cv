import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Timeline from "@/components/sections/timeline";
import Contact from "@/components/sections/contact";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LandingPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    return (
        <div className="px-4">
            <header className="sticky top-0 z-50 border-b border-border bg-bg/10 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between gap-4 p-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </header>

            <main>
                <section id="hero" className="py-8 lg:py-12 mx-auto container">
                    <div className="max-w-4xl mx-auto text-center">
                        <Hero />
                    </div>
                </section>

                <section id="about" className="py-8 lg:py-10 mx-auto container">
                    <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                        {t("sections.about")}
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <About />
                    </div>
                </section>

                <section id="projects" className="py-8 lg:py-10 mx-auto container">
                    <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                        {t("sections.projects")}
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <Projects />
                    </div>
                </section>

                <section id="timeline" className="py-8 lg:py-10 mx-auto container">
                    <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                        {t("sections.timeline")}
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <Timeline />
                    </div>
                </section>

                <section id="skills" className="py-8 lg:py-10 mx-auto container">
                    <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                        {t("sections.skills")}
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <Skills />
                    </div>
                </section>

                <section id="contact" className="py-8 lg:py-10 mx-auto container">
                    <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                        {t("sections.contact")}
                    </h2>
                    <div className="max-w-xl mx-auto">
                        <Contact />
                    </div>
                </section>
            </main>

            <footer className="border-t border-border mt-12">
                <div className="mx-auto container py-4 text-center">
                    <p className="text-sm font-body text-text-secondary">
                        {t("footer.copyright")}
                    </p>
                    <div className="flex gap-3 justify-center font-body text-xs mt-1">
                        <a
                            href={t("footer.sourceCodeUrl")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-link hover:text-text-link-hover hover:underline transition-colors"
                        >
                            {t("footer.sourceCode")}
                        </a>
                    </div>
                    <p className="text-xs font-body  text-text-muted mt-1">
                        {t("footer.privacy")}
                    </p>
                </div>
            </footer>
        </div>
    );
}
