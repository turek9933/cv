import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const LOCALES = ["en", "pl"] as const

export const routing = defineRouting({
    locales: LOCALES,
    defaultLocale: 'en',
    localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export type Locale = (typeof routing.locales)[number];