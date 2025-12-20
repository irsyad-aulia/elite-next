import Link from "next/link";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

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
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>
        👥 Elite User List (Server Side)
      </h1>
      
      <Search />
      <p style={{ marginBottom: "30px", color: "#888", fontSize: "14px" }}>
       {query
       ? `Menemukan ${filteredUsers.length} user dengan nama "${query}"`
       : `Menampilkan semua ${users.length} user`
       }
      </p>

      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "20px" ,
          minHeight: "300px"
        }}
      >
        {paginatedUsers.length > 0 ? (
        paginatedUsers.map((user) => (
          <Link 
            href={`/users/${user.id}`} 
            key={user.id} 
            style={{ textDecoration: "none" }}
          >
            <div 
              style={{ 
                padding: "20px", 
                border: "1px solid #333", 
                borderRadius: "10px",
                background: "#111",
                color: "white",
                transition: "transform 0.2s",
                cursor: "pointer"
              }}
            >
              <h3 style={{ color: "#0070f3", marginBottom: "5px" }}>{user.name}</h3>
              <p style={{ fontSize: "14px", color: "#ccc" }}>📧 {user.email}</p>
              <p style={{ fontSize: "14px", color: "#666" }}>🌐 {user.website}</p>
            </div>
          </Link>
        ))
      ) : (
      <div style={{ color: "red", gridColumn: "1 / -1", textAlign: "center", padding: "20px" }}>
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