'use server'

import { db } from "@/db";

export default async function Home() {
  let snippets = await db.snippet.findMany()

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
