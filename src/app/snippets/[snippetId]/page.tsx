import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetPageProps {
    params: {
        snippetId: string;
    }
};

export default async function ShowSnippetPage({ params }: SnippetPageProps) {
    const { snippetId } = params;

    const snippet = await db.snippet.findFirst({
        where: { id: Number(snippetId) }
    })

    if (!snippet) {
        notFound()
    };

    return (
        <div>
            <h1>{snippet.title}</h1>
            <h1>{snippet.code}</h1>
            <h1>{snippet.note}</h1>
        </div>
    )
}