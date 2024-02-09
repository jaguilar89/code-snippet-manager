import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetPageProps {
    params: {
        snippetId: string;
    }
};

export default async function SnippetEditPage({ params }: SnippetPageProps) {
    const { snippetId } = params

    const snippet = await db.snippet.findFirst({
        where: { id: Number(snippetId) }
    })

    if (!snippet) {
        notFound();
    }

    return (
        <SnippetEditForm snippet={snippet}/>
    )
}