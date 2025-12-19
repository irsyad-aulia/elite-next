interface UserDetail {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
    address: {
        street: string;
        city: string;
    };
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function UserDetailPage({ params }: PageProps) {
    const { id } = await params;
    const res = await fetch(`https:jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
        return (
            <div style={{ padding: "50px", textAlign: "center" }}>
                <h1 style={{ color: "red" }}>404 - User Not Found</h1>
                <p>User with ID {id} not found in the database.</p>
            </div>
        );
    }
const user: UserDetail = await res.json();

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <a href="/users" style={{ color: "#888", textDecoration: "none", marginBottom: "20px", display: "inline-block" }}>
        &larr; Back to Users
      </a>

      <div style={{ 
        border: "1px solid #333", 
        padding: "30px", 
        borderRadius: "15px", 
        background: "#111", 
        color: "white",
        maxWidth: "600px"
      }}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 10px 0", color: "#0070f3" }}>
          {user.name}
        </h1>
        <p style={{ color: "#666", fontSize: "1.2rem" }}>@{user.company.name}</p>
        
        <hr style={{ borderColor: "#333", margin: "20px 0" }} />
        
        <div style={{ display: "grid", gap: "10px", color: "#ccc" }}>
          <p>📧 <strong>Email:</strong> {user.email}</p>
          <p>📞 <strong>Phone:</strong> {user.phone}</p>
          <p>🌍 <strong>Website:</strong> {user.website}</p>
          <p>🏠 <strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          <p>💡 <strong>Motto:</strong> "{user.company.catchPhrase}"</p>
        </div>
      </div>
    </div>
  );
}