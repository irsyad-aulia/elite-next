import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elite-next-mu.vercel.app'),
  title: {
    template: "%s | EliteNext",
    default: "EliteNext -  The Ultimate User Dashboard",
  },

  description: "Modern user management platform with Next.js 15, Shadcn UI, and Tailwind CSS technologies.",
  openGraph: {
    title: {
      template: "%s | EliteNext",
      default: "EliteNext Dashboard",
    },
    description: "Modern user management platform with Next.js 15 technology.",
    url: "/",
    siteName: "EliteNext",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "EliteNext Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "EliteNext Dashboard",
    description: "A modern user management platform made by Elite Developers.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <Navbar />
        <main className="min-h-screen bg-white dark:bg-zinc-950">
          {children}
        </main>
        </ThemeProvider>

      </body>
    </html>
  );
}