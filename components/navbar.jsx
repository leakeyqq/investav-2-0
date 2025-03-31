"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Settings, Shield, TrendingUp, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MainNavbar({ showNotifications = true, showUserProfile = true, isLicensed = true }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Define navigation links
  const navLinks = [
    { href: "/funds", label: "Explore Funds" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/manager-dashboard", label: "Manager Dashboard" },
    { href: "/about", label: "About" },
  ]

  // Check if a link is active
  const isActive = (path) => pathname === path

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-background z-50 shadow-sm">
      {/* Logo */}
      <Link className="flex items-center gap-2 font-semibold" href="/">
        <TrendingUp className="h-6 w-6 text-primary" />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">FundHub</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={`text-sm font-medium hover:text-primary hover:underline underline-offset-4 ${
              isActive(link.href) ? "text-primary font-semibold" : ""
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* User Profile & Notifications (Desktop) */}
      {(showNotifications || showUserProfile) && (
        <div className="ml-4 hidden md:flex items-center gap-2">
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              <span className="sr-only">Notifications</span>
            </Button>
          )}

          {showNotifications && (
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          )}

          {showUserProfile && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/profile" className="flex items-center gap-2 group relative">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                      JD
                    </div>
                    {isLicensed && (
                      <div className="absolute -top-1 -right-1 bg-green-100 border border-green-200 rounded-full p-0.5">
                        <Shield className="h-3 w-3 text-green-600" />
                      </div>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex items-center gap-2">
                    <span>John Doe</span>
                    {isLicensed && (
                      <div className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                        <Shield className="h-3 w-3" />
                        <span>Licensed</span>
                      </div>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden flex items-center gap-2">
        {showUserProfile && (
          <Link href="/profile" className="flex items-center mr-2 relative">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
              JD
            </div>
            {isLicensed && (
              <div className="absolute -top-1 -right-1 bg-green-100 border border-green-200 rounded-full p-0.5">
                <Shield className="h-3 w-3 text-green-600" />
              </div>
            )}
          </Link>
        )}

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <TrendingUp className="h-6 w-6" />
                  <span>FundHub</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={`text-sm font-medium py-2 hover:text-primary ${
                      isActive(link.href) ? "text-primary font-semibold" : ""
                    }`}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile User Controls */}
              {(showNotifications || showUserProfile) && (
                <div className="mt-auto pt-6 border-t flex flex-col gap-4">
                  {showUserProfile && (
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium relative">
                        JD
                        {isLicensed && (
                          <div className="absolute -top-1 -right-1 bg-green-100 border border-green-200 rounded-full p-0.5">
                            <Shield className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span>Profile</span>
                        {isLicensed && (
                          <span className="text-xs flex items-center gap-1 text-green-600">
                            <Shield className="h-3 w-3" />
                            Licensed Fund Manager
                          </span>
                        )}
                      </div>
                    </Link>
                  )}

                  {showNotifications && (
                    <>
                      <Link
                        href="/notifications"
                        className="flex items-center gap-2 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Bell className="h-5 w-5" />
                        <span>Notifications</span>
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default MainNavbar

