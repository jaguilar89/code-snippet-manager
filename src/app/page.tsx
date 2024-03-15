'use server'

import { prisma } from "@/db";

export default async function Home() {
  let snippets = await prisma.snippet.findMany();

  return (
      snippets.map((snip) => (
        <div key={snip.id}>
          <a href={`/snippets/${snip.id}`}>{snip.title}</a>
        </div>
      ))
  )
}
