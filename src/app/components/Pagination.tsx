"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface PaginationProps {
totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentPage = Number(searchParams.get("page")) || 1;

    const handlePageChange = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "40px" }}>
            <button
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{
                padding: "10px 20px",
                background: currentPage <= 1 ? "#333" : "#0070f3",
                color: currentPage <= 1 ? "#666" : "white",
                border: "none",
                borderRadius: "5px",
                cursor: currentPage <= 1 ? "not-allowed" : "pointer",
            }}
            >
                &larr; Previous
            </button>

            <span style={{ color: "#ccc", alignSelf: "center" }}>
                page {currentPage} of {totalPages}
            </span>

            <button
            disabled={currentPage >= totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            style={{
                padding: "10px 20px",
                background: currentPage >= totalPages ? "#333" : "#0070f3",
                color: currentPage >= totalPages ? "#666" : "white",
                border: "none",
                borderRadius: "5px",
                cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
            }}
            >
                Next &rarr;
            </button>
        </div>
    );
}