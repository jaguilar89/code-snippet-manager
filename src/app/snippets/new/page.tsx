'use client';

import { createSnippet } from "@/actions/create-snippet";
import { useFormState } from "react-dom";

export default function CreateSnippetPage() {
    const [formState, formAction] = useFormState(createSnippet, { errors: {} })

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
                    <textarea
                        id="snippet"
                        name="snippet"
                        className="border rounded"
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
}