import { redirect } from "next/navigation";

// For production you need to configurate proxy server to rewrite / to /[locale]
export default function HomePage() {
    redirect("/en");
}