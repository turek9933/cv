import type { Metadata } from "next";
import '@/global.css';
import { ThemeProvider } from "@/context/ThemeProvider";
import { JetBrains_Mono, Inter } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Tomek's CV",
    template: "%s | Tomek's CV",
  },
  description:
    "CV page, where you can find information about me, my projects and my skills.",
  keywords: [
    "Tomasz Turek",
    "Tomek Turek",
    "CV Tomka",
    "Tomek's CV",
    "Tomek's Curriculum Vitae",
    "Curriculum Vitae Tomka",
    "Tomek's resume",
    "Życiorys Tomka",
    "Tomek Turek CV",
    "Tomek Turek resume",
    "Tomek Turek Życiorys",
    "Tomek Turek Curriculum Vitae",
    "Tomek Turek's CV",
    "Tomek Turek's Portfolio",
  ],
  authors: [{ name: "Tomasz Turek" }],
  creator: "Tomasz Turek",

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pl_PL"],
    title: "Tomek's CV",
    description:
      "CV page, where you can find information about me, my projects and my skills.",
    siteName: "Tomek's CV",
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable}`}
    >
      <head>
        <meta name="theme-color" content="#128C20" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}