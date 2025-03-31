import AppLayout from "@/components/layout"

export default function ExamplePage() {
  return (
    <AppLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Example Page</h1>
        <p>This page uses the shared layout component with navbar and footer.</p>
      </div>
    </AppLayout>
  )
}

