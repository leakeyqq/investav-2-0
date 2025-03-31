import AppLayout from "@/components/layout"

export default function LoginPage() {
  return (
    <AppLayout showNotifications={false} showUserProfile={false}>
      <div className="container mx-auto py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {/* Login form would go here */}
      </div>
    </AppLayout>
  )
}

