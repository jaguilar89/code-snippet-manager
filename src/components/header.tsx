import Link from "next/link"

export default function Header() {
    return (
        <div className="z-10 top-0 mb-6 border-b-4">
            <Link href="/">
                <h1>Header</h1>
            </Link>
        </div>
    )
}