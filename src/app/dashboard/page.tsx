import Counter from "../components/Counter";

export default function DashboardPage() {
    return (
        <div style={{ padding: "50px", background: "#222", color: "white" }}>
            <h1>📊 Elite Dashboard</h1>
            <p>Secret page for admin.</p>
            <Counter />
        </div>
    );
}