'use server';

import type { Snippet } from "@prisma/client";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface CreateSnippetFormState {
    errors: {
        message?: string;
    }
}

export async function createSnippet(
    formState: CreateSnippetFormState,
    formData: FormData
) {

    const title = formData.get('title') as string;
    const code = formData.get('snippet') as string;
    const note = formData.get('snippet-note') as string;

    let codeSnippet: Snippet;

    try {
        codeSnippet = await db.snippet.create({
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
            };
        } else {
            return {
                errors: {} //TODO: handle this section
            }
        }
    }

    revalidatePath(`/snippets/${codeSnippet.id}`)
    redirect(`/snippets/${codeSnippet.id}`)

};