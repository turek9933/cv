import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const allMessages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={allMessages}>
            <div className="flex flex-col min-h-screen">
                <main className="flex-1 flex">
                    {children}
                </main>
            </div>
        </NextIntlClientProvider>
    );
}