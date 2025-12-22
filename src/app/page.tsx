import Image from "next/image"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 space-y-8">
      
      <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
          alt="Futuristic Dashboard"
          fill 
          className="object-cover hover:scale-105 transition-transform duration-700"
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
        Welcome to EliteNext
      </h1>
      
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
        Kelola data user dengan performa tinggi, desain elegan, dan teknologi terkini.
      </p>

      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg">🚀 Go to Dashboard</Button>
        </Link>
        <Link href="/users">
          <Button variant="outline" size="lg">👥 View Users</Button>
        </Link>
      </div>
    </div>
  );
}