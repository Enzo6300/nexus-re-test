import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AuthProvider } from "../components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NexusAI Labs — Secure Intelligence for a Connected World",
    template: "%s — NexusAI Labs",
  },
  description:
    "NexusAI Labs conçoit des solutions d’IA et de cybersécurité de nouvelle génération pour protéger et faire évoluer les entreprises digitales.",
  keywords: [
    "IA",
    "cybersécurité",
    "startup",
    "SaaS",
    "threat intelligence",
    "LLM",
    "Next.js",
  ],
  metadataBase: new URL("https://nexusai.example.com"),
  openGraph: {
    title: "NexusAI Labs",
    description:
      "Solutions d’IA et de cybersécurité pour un monde connecté, sécurisé et intelligent.",
    url: "https://nexusai.example.com",
    siteName: "NexusAI Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI Labs",
    description:
      "Solutions d’IA et de cybersécurité pour un monde connecté, sécurisé et intelligent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <AuthProvider>
            <div className="min-h-dvh flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
