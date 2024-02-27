'use server';

import type { Snippet } from "@prisma/client";
import { prisma } from "@/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const SnippetSchema = z.object({
    title: z.string().min(3),
    code: z.object({
        value: z.string()
    }),
    note: z.object({
        value: z.string().min(3)
    })
});
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
    const result = SnippetSchema.safeParse({
        title: formData.get('title'),
        code: {
            value: formData.get('snippet')
        },
        note: {
            value: formData.get('snippet-note')
        }
    });

    if (!result.success) {
        return {
            errors: {
                message: 'Title and/or Note must be at least 3 characters in length'
            }
        }
    };

    let codeSnippet: Snippet;

    try {
        codeSnippet = await prisma.snippet.update({
            where: { id },
            data: {
                title: result.data.title,
                code: result.data.code.value,
                note: result.data.note.value
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
                errors: {
                    message: 'Something went wrong...'
                }
            }
        }
    };

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
};