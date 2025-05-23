'use client'
import { signOut } from "next-auth/react"

export default async function DashboardPage(){

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" })
    }

    return (
        <div>
             <h1>Welcome to dashboard</h1>
            <button className="border-blue-500 border-1 text-black" onClick={handleSignOut}>Sign out</button>
        </div>
    )
}