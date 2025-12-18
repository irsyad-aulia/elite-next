export default function loading() {
    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ marginBottom: "20px" }}>🔄 Loading Elite Data...</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                {[...Array(6)].map((_, i) => (
                    <div
                    key={i}
                    style={{
                        height: "150px",
                        background: "#333",
                        borderRadius: "10px",
                        animation: "pulse 10s infinite"
                    }}
                    />
                ))}
                </div>
            </div>
    )
}