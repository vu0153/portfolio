import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import IntroSplash from "@/components/IntroSplash";
import profile from "@/data/profile";

const generalSans = localFont({
  src: [
    { path: "../fonts/general-sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/general-sans/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/general-sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${generalSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <IntroSplash />
        <PageTransition />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
