import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ThemeToggle from "@/components/ThemeToogle";

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
    const t = await getTranslations("landing");

    return (
        <>
            <section className="py-4 lg:py-12 container">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-title font-bold mb-6 text-text">
                        {t("heroTitle")}
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl">
                        {t("heroSubtitle")}
                    </p>
                </div>
            </section>

            <div id="about" className="h-6"></div>

            <section className="py-6 lg:py-8 container">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-xl lg:text-2xl font-title font-bold mb-4 text-text">
                        {t("aboutTitle")}
                    </h3>
                    <p className="text-base lg:text-lg  text-text-secondary leading-relaxed">
                        {t("aboutDescription")}
                        NO FONT
                    </p>
                    <p className="text-base lg:text-lg font-serif text-text-secondary leading-relaxed">
                        {t("aboutDescription")}
                        FONT SERIF
                    </p>
                    <p className="text-base lg:text-lg font-mono text-text-secondary leading-relaxed">
                        {t("aboutDescription")}
                        FONT MONO
                    </p>
                    <p className="text-base lg:text-lg font-body text-text-secondary leading-relaxed">
                        {t("aboutDescription")}
                        FONT BODY
                    </p>
                </div>
            </section>

            <ThemeToggle />

            <section id="features" className="py-8 lg:py-10 container">
                <div className="text-center mb-8">
                    <h3 className="text-xl lg:text-2xl font-title font-bold mb-4 text-text">
                        {t("featuresTitle")}
                    </h3>
                </div>
            </section>

            <footer className="border-t border-border mt-16 w-full">
                <div className="container py-4">
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="text-sm text-text-muted text-center">
                            {t("copyright")}
                        </p>
                        <div className="flex gap-4">
                            <a href="/privacy-policy" className="text-xs text-text-link hover:text-text-linkHover">
                                {t("privacyPolicy")}
                            </a>
                            <a href="/terms" className="text-xs text-text-link hover:text-text-linkHover">
                                {t("terms")}
                            </a>
                            <a href="/contact" className="text-xs text-text-link hover:text-text-linkHover">
                                {t("contact")}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}