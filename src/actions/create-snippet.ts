'use server';

import type { Snippet } from "@prisma/client";
import { prisma } from "@/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const SnippetSchema = z.object({
    title: z.string().min(3, { message: 'Title must be at least 3 characters in length.' }),
    code: z.object({
        value: z.string().min(1, { message: 'Code Editor must not be empty.' })
    }),
    note: z.object({
        value: z.string().min(3, { message: 'Note must be at least 3 characters in length.' })
    })
});
interface CreateSnippetFormState {
    errors: {
        message?: string[] | string;
    }
};

export async function createSnippet(
    formState: CreateSnippetFormState,
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
        const zodErrors = Object.values(result.error.flatten().fieldErrors)

        return {
            errors: {
                message: zodErrors.flat()
            }
        }
    };

    let codeSnippet: Snippet;

    try {
        codeSnippet = await prisma.snippet.create({
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
            };
        } else {
            return {
                errors: {
                    message: 'Something went wrong...'
                }
            }
        }
    }

    revalidatePath(`/snippets/${codeSnippet.id}`);
    redirect(`/snippets/${codeSnippet.id}`);

};