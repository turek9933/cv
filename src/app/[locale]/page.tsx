import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

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
        <>
            <section id="hero" className="py-4 lg:py-12 container">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <p className="text-sm font-mono text-primary mb-2">
                        {t("hero.prompt")}
                    </p>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-title font-bold mb-4 text-text">
                        {t("hero.greeting")}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl">
                        {t("hero.role")}
                    </p>
                </div>
            </section>

            <section id="about" className="py-6 lg:py-8 container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-xl lg:text-2xl font-title font-bold mb-6 text-text">
                        {t("sections.about")}
                    </h2>
                    <p className="text-base lg:text-lg text-text-secondary leading-relaxed mb-4">
                        {t("about.shortBio")}
                    </p>
                    <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                        {t("about.longBio")}
                    </p>
                </div>
            </section>

            <section id="projects" className="py-8 lg:py-10 container">
                <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                    {t("sections.projects")}
                </h2>
            </section>

            <section id="timeline" className="py-8 lg:py-10 container">
                <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                    {t("sections.timeline")}
                </h2>
            </section>

            <section id="skills" className="py-8 lg:py-10 container">
                <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                    {t("sections.skills")}
                </h2>
            </section>

            <section id="contact" className="py-8 lg:py-10 container">
                <h2 className="text-xl lg:text-2xl font-title font-bold mb-8 text-center text-text">
                    {t("sections.contact")}
                </h2>
            </section>

            <footer className="border-t border-border mt-16 w-full">
                <div className="container py-4">
                    <p className="text-sm text-text-muted text-center">
                        {t("footer.copyright")}
                    </p>
                </div>
            </footer>
        </>
    );
}
