import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users List", 
  description: "Daftar pengguna elit dari seluruh dunia.",
};

export default function Home() {
  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>🚀 Hello World, Next.js!</h1>
      <p>Now my Navbar has moved to Global Layout.</p>

    </div>
  );
}