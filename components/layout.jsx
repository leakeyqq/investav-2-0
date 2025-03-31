import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export function AppLayout({
  children,
  showNavbar = true,
  showFooter = true,
  showNotifications = true,
  showUserProfile = true,
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar showNotifications={showNotifications} showUserProfile={showUserProfile} />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}

export default AppLayout

