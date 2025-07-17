"use client";

import { SessionProvider } from "next-auth/react"

// import { SessionProvider } from "next-auth/react";


export default function NextAuthProvdider({ children }) {
    return <SessionProvider>{children}</SessionProvider>
}