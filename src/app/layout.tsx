import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | EliteNext",
    default: "EliteNext -  Dashboard & User Management",
  },

  description: "A modern user management app built with Next.js, Tailwind, and Shadcn UI.",
  keywords: ["Next.js", "React", "Dashboard", "User Management"],
  authors: [{ name: "Muhammad_Irsyad_Aulia", url: "https://elite-next-mu.vercel.app" }],
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