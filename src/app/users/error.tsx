"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { idgest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{ padding: "50px", textAlign: "center", color: "red" }}>
            <h1>💔 Oops! An error occurred.</h1>
            <p style={{ marginBottom: "20px" }}>Failed to retrieve user data from Server.</p>

            <button 
            onClick={
                () => reset()
            }
            style={{
                padding: "10px 20px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
            >
                Try Again
                </button>
        </div>
    );
}