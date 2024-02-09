'use server'

import { prisma } from "@/db";

export default async function Home() {
  let snippets = await prisma.snippet.findMany();

  return (
      snippets.map((snip) => (
        <div key={snip.id}>
          <h1>{snip.title}</h1>
          <h1>{snip.code}</h1>
          <h1>{snip.note}</h1>
        </div>
      ))
  )
}
