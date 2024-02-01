'use client';

import { Editor } from "@monaco-editor/react";

interface SnippetProps {
    snippet: {
        title: string;
        code: string;
        note: string;
    }
};

export default function SnippetShow({ snippet }: SnippetProps) {
    return (
        <div>
            <h1>{snippet.title}</h1>
            <Editor
                height="40vh"
                theme="vs-dark"
                value={snippet.code}
                options={{ readOnly: true }}
            />
            <h1>{snippet.note}</h1>
        </div>
    )
}