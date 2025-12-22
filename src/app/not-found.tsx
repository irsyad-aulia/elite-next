import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="h-[80vh] flex flex-col item-center justify-center text-center px-4">
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                404
            </h1>
            
            <h2 className="text-2xl font-bold mt-4 text-zinc-900 dark:text-white">
                Oops! Missing Page.
            </h2>

            <p className="text-zinc-500 mt-2 mb-8 max-w-md mx-auto">
                It looks like you're lost in the middle of nowhere. The page you're looking for may have been removed or the link may be incorrect.
            </p>

            <Link href="/">
            <Button size="lg">
                🏠 Back to Home
            </Button>
            </Link>
        </div>
    );
}