'use client';

import { useFormStatus } from "react-dom";

interface FormButtonProps {
    children: React.ReactNode;
};

export default function FormButton({ children }: FormButtonProps) {
    const { pending } = useFormStatus(); //TODO: use next-ui button?

    return (
        <button 
        type="submit" 
        className="border rounded p-2 w-1/2 bg-cyan-300"
        >
            {children}
        </button>
    )
}