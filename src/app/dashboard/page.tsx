import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">Hello, {user?.name || "User"}!</p>
          <p className="mt-2 text-muted-foreground">
            Welcome to your pizza dashboard. You can view and manage your pizza orders here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
