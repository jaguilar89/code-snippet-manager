'use client';

import Link from "next/link";
import { Editor } from "@monaco-editor/react";

interface SnippetProps {
    snippet: {
        id: number;
        title: string;
        code: string;
        note: string;
    }
};

export default function SnippetShow({ snippet }: SnippetProps) {
    return (
        <div>
            <div>
                <h1>{snippet.title}</h1>
                <Link href={`/snippets/${snippet.id}/edit`}>
                    <button className="border rounded bg-cyan-300">Edit Snippet</button>
                </Link>
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