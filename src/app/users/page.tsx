// 1. Definisikan tipe data (TypeScript Elite Standard)
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

// 2. Perhatikan kata "async" di depan function!
// Ini yang bikin komponen ini bisa "menunggu" data sebelum ditampilkan.
export default async function UsersPage() {
  
  // 3. Fetching langsung di body component (Server Side)
  // Next.js otomatis nge-cache data ini. Super cepat.
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
  // Kalau error, throw error biar ditangani Error Boundary (Next.js feature)
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const users: User[] = await res.json();

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>
        👥 Elite User List (Server Side)
      </h1>
      <p style={{ marginBottom: "30px", color: "#888" }}>
        Data ini diambil di Server, bukan di Browser Anda. Cek View Source!
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {users.map((user) => (
          <div 
            key={user.id} 
            style={{ 
              padding: "20px", 
              border: "1px solid #333", 
              borderRadius: "10px",
              background: "#111",
              color: "white"
            }}
          >
            <h3 style={{ color: "#0070f3", marginBottom: "5px" }}>{user.name}</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>📧 {user.email}</p>
            <p style={{ fontSize: "14px", color: "#666" }}>🌐 {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}