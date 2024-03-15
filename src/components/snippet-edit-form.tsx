'use client';

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { editSnippet } from "@/actions";
import FormButton from "./form-button";
import FormError from "./form-error";

interface SnippetProps {
    snippet: {
        id: number;
        title: string;
        code: string;
        note: string;
    }
};

export default function SnippetEditForm({ snippet }: SnippetProps) {
    const id = snippet.id;
    const [formState, formAction] = useFormState(
        editSnippet.bind(null, { id }),
        { errors: { message: "" } }
    );

    const [code, setCode] = useState<string>(snippet.code);
    const handleEditorChange = (value: string = "") => {
        setCode(value)
    };

    return (
        <form action={formAction}>
            <div>
                <div>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        className="border rounded"
                        defaultValue={snippet.title}
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
                        defaultValue={code}
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
                        defaultValue={snippet.note}
                    />
                </div>
                <FormButton> Submit </FormButton>
            </div>

            <FormError errors={formState.errors.message} />
        </form>
    )
};