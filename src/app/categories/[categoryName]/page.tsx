import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ categoryName: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: Props) {
    const { categoryName } = await params
    const query = await searchParams
    const page = typeof query.page === "string" ? query.page : "1"

    if (!categoryName.trim()) {
        notFound()
    }

    return (
        <div>
            <h1>Category: {categoryName}</h1>
            <p>Current page: {page}</p>
        </div>
    )
}
