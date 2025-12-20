"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {  Button } from "@/components/ui/button";

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
        <div className="flex gap-4 justify-center mt-10 items-center">
            <Button
            variant="outline"
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(currentPage - 1)}
            >

                &larr; Previous
            </Button>

            <span className="text-zinc-400 text-sm">
                page {currentPage} of {totalPages}
            </span>

            <Button
            variant="outline"
            disabled={currentPage >= totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            >
                Next &rarr;
            </Button>
        </div>
    );
}