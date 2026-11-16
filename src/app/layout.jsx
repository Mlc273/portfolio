import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import { profile } from "../data/profile.js";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-display" });

export const metadata = {
  title: {
    default: `${profile.name} — Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: `The portfolio of ${profile.name}, a computer science student at Ensign College.`,
};

// Runs before the page paints so dark-mode visitors never see a flash of the light theme.
const themeScript = `try{var t=localStorage.getItem("portfolio-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${fraunces.variable}`} lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased transition-colors duration-300 dark:bg-ink dark:text-stone-100">
        <Script id="theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-white"
          href="#main"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1" id="main">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
