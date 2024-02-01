import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetShow from "@/components/snippet-show";

interface SnippetPageProps {
    params: {
        snippetId: string;
    }
};

export default async function SnippetShowPage({ params }: SnippetPageProps) {
    const { snippetId } = params;

    const snippet = await db.snippet.findFirst({
        where: { id: Number(snippetId) }
    })

    if (!snippet) {
        notFound()
    };

    return (
        <SnippetShow snippet={snippet}/>
    )
}