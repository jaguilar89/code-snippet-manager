'use client';

import { createSnippet } from "@/actions/create-snippet";
import { useFormState } from "react-dom";
import { useState } from "react";
import Editor from "@monaco-editor/react"

export default function CreateSnippetPage() {
    const [formState, formAction] = useFormState(createSnippet, { errors: {} })
    const [code, setCode] = useState("")
    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

    return (
        <form action={formAction}>
            <h1>Create a new Snippet</h1>
            <div className="border rounded border-slate-500">
                <div>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        className="border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="code">
                        Code
                    </label>
                    <Editor
                        height="40vh"
                        theme="vs-dark"
                        defaultLanguage="javascript"
                        defaultValue="// type code here"
                        onChange={handleEditorChange}
                    />
                    <input
                        id="snippet" 
                        type="hidden" // hidden in order to grab state value and pass to action since Editor is not a form element
                        name="snippet"
                        value={code}
                    />
                </div>
                <div>
                    <label htmlFor="snippet-note">
                        Note
                    </label>
                    <textarea
                        id="snippet-note"
                        name="snippet-note"
                        className="border rounded"
                    />
                </div>

                <button type="submit" className="border rounded p-2 w-1/2">
                    Create
                </button>

            </div>
        </form>
    )
};