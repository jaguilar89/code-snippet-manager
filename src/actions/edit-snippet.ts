'use server';

import type { Snippet } from "@prisma/client";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface EditSnippetFormState {
    errors: {
        message?: string;
    }
};

export async function editSnippet(
    { id }: { id: number },
    formState: EditSnippetFormState,
    formData: FormData
) {
    const title = formData.get('title') as string;
    const code = formData.get('snippet') as string;
    const note = formData.get('snippet-note') as string;

    let codeSnippet: Snippet;
    
    try {
        codeSnippet = await db.snippet.update({
            where: { id },
            data: {
                title,
                code,
                note
            }
        })
    } catch (err) {
        if (err instanceof Error) {
            return {
                errors: {
                    message: err.message
                }
            }
        } else {
            return {
                errors: {}
            }
        }
    };

    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)
}