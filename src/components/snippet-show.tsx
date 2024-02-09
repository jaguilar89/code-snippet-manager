'use client';

import Link from "next/link";
import { Editor } from "@monaco-editor/react";
import { useFormState } from "react-dom";
import { deleteSnippet } from "@/actions";
import FormButton from "./form-button";

interface SnippetProps {
    snippet: {
        id: number;
        title: string;
        code: string;
        note: string;
    }
};

export default function SnippetShow({ snippet }: SnippetProps) {
    const id = snippet.id;
    const [formState, formAction] = useFormState(
        deleteSnippet.bind(null, { id }),
        { errors: {} })

    return (
        <div>
            <div>
                <h1>{snippet.title}</h1>
                <Link href={`/snippets/${snippet.id}/edit`}>
                    <button className="border rounded bg-cyan-300">Edit Snippet</button>
                </Link>
                <form action={formAction}>
                    <FormButton> Delete Snippet </FormButton>
                </form>
            </div>
            <Editor
                height="40vh"
                theme="vs-dark"
                value={snippet.code}
                options={
                    {
                        readOnly: true,
                        minimap: { enabled: false }
                    }}
            />
            <h1>{snippet.note}</h1>
        </div>
    )
}