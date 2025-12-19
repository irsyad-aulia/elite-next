"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
            type="text"
            placeholder="🔍 Search user by name..."
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
            style={{
                width: "100%",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #333",
                background: "#222",
                color: "white",
                fontSize: "16px",
                outline: "none",
            }}
            />
        </div>
    );
}