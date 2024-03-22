import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/db"

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error('Missing Github OAuth Credentials')
};

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            /* ?? operator works here because it satisfies Typescripts type safety requirement by providing a fallback
            if the variable is initially undefined at compile time or runtime. I really hate Typescript sometimes.
            */
            clientId: GITHUB_CLIENT_ID ?? process.env.GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET ?? process.env.GITHUB_CLIENT_SECRET
        })
    ]
})

export { handler as GET, handler as POST }
