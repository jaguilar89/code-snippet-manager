import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-row justify-between z-10 top-0 mb-6 border-b-4">
            <Link href="/">
                <h1>APP NAME</h1>
            </Link>
            <Link href="/snippets/new">
                <button className="border rounded bg-cyan-300">Add New Snippet</button>
            </Link>
        </div>
    )
}