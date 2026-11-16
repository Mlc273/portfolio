import { Roboto } from "next/font/google";
import "./globals.css";
import SiteFooter from "../components/SiteFooter.jsx";
import SiteHeader from "../components/SiteHeader.jsx";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Jane Doe — Software Engineer",
    template: "%s | Jane Doe",
  },
  description: "The portfolio of Jane Doe, a software engineer in New York City.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} min-h-screen bg-white text-zinc-900 antialiased transition-colors duration-300 dark:bg-[#151515] dark:text-zinc-100`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
