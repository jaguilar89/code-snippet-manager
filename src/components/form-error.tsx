interface FormErrorProps {
    errors: string[] | string;
};

export default function FormError({ errors }: FormErrorProps) {
    const errorMap = Array.isArray(errors) ? errors.map((err) => (
        <div key={err}>
            <p>{err}</p>
        </div>
    ))
        : <p>{errors}</p>

    return errorMap;
};