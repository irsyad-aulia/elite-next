import Link from "next/link";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

interface PageProps {
  searchParams: Promise<{ query?: string;  page?: string }>;
}

export default async function UsersPage(props: PageProps) {
  const params = await props.searchParams;
  const query = params.query || "";
  const currentPage = Number(params.page) || 1;
  const ITEMS_PER_PAGE = 4;

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch data");

  const users: User[] = await res.json();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-10 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">
        👥 Elite User List
      </h1>
      
      <Search />
      <p className="mb-8 text-zinc-500 text-sm">
       {query
       ? `Menemukan ${filteredUsers.length} user dengan nama "${query}"`
       : `Show all ${users.length} user`
       }
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedUsers.length > 0 ? (
        paginatedUsers.map((user) => (
          <Link 
            href={`/users/${user.id}`} 
            key={user.id} 
            className="no-underline"
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="text-blue-600">{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">
                <p>📧 {user.email}</p>
                <p>🌐 {user.website}</p>
              </CardContent>
            </Card>
          </Link>
        ))
      ) : (
      <div className="col-span-full text-center text-red-500 py-10 bg-red-50 rounded-lg">
        ❌ No user found with the name "<strong>{query}</strong>"
     </div>
     )}
      </div>
      
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} />
      )}
    </div>
  );
}