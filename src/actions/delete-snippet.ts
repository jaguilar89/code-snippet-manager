'use server';

import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface DeleteSnippetFormState {
    errors: {
        message?: string;
    }
};

export async function deleteSnippet(
    { id }: { id: number },
    formState: DeleteSnippetFormState
) {

    try {
        await prisma.snippet.delete({
            where: { id }
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

    revalidatePath("/");
    redirect("/")
};