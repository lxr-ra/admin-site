"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Blog = {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
}

export const columns: ColumnDef<Blog>[] = [
    {
        accessorKey: "title",
        header: () => <div className="text-right">Title</div>,
    },
    {
        accessorKey: "author",
        header: "Author",
    }
]