'use client';

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function HeaderAuth() {
    const { data: session, status } = useSession();
    const handleSignIn = () => signIn();
    const handleSignOut = () => signOut();

    let authContent: React.ReactNode;

    if (status === 'loading') {
        authContent = null
    };

    if (session?.user) {
        authContent = (
            <div>
                Signed in as {session?.user.email}
                <form action={handleSignOut}>
                    <button type="submit">Sign Out</button>
                </form>
            </div>
        )
    } else {
        authContent = (
            <div>
                <form action={handleSignIn}>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }

    return authContent;
}