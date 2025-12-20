"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    const pathname = usePathname();

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/users", label: "Users" },
];

    return (
        <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tighter text-zinc-900 dark:text-white">
                    ELITE<span className="text-blue-600">NEXT</span>
                </Link>

                <div className="flex gap-6">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-600
                                    ${isActive 
                                        ? "text-blue-600" 
                                        : "text-zinc-500 dark:text-zinc-400"}`}
                            >
                                {link.label}
                            </Link>    
                        );
                    })}

                    <div className="ml-4 border-l pl-4 border-zinc-200 dark:border-zinc-800">
            <ModeToggle />
          </div>

                </div>
            </div>
       </nav>
    );
}