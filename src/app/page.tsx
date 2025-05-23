import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { LoginButton } from "@/components/login-button"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Pizza Dashboard</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Sign in to access your dashboard</p>
        </div>

        <div className="flex flex-col space-y-4">
          <LoginButton />
        </div>
      </div>
    </main>
  )
}
