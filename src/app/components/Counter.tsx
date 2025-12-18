"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px dashed white" }}>
      <h3>🧮 Interactive Counter</h3>
      <p>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px", background: "blue", color: "white", borderRadius: "5px" }}
      >
        Add +1
      </button>
    </div>
  );
}