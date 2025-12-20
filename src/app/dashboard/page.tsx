import Counter from "../components/Counter";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
    return (
    <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">
            📊 Elite Dashboard
            </h1>
            <p className="mb-10 text-zinc-500">Secret page for admin.</p>
            
            <Card className="border-zinc-200 dark:border-zinc-800">
        <CardHeader>
          <CardTitle>🧮 Interactive Counter</CardTitle>
        </CardHeader>
        <CardContent>
            <Counter />
        </CardContent>
            </Card>
        </div>
    );
}