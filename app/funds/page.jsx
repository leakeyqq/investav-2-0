import Link from "next/link"
import { Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import MoneyMarketInfo from "@/components/money-market-info"

import mmfSamples from "./../../storage/sample-mmfs.json"

export default function FundsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Explore Funds</h1>
              <p className="text-muted-foreground">Discover and invest in a variety of investment funds</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              {/* Mobile search bar */}
              <div className="relative w-full sm:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search funds..." className="w-full pl-8" />
              </div>

              {/* Filter sheet for mobile */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1 sm:hidden">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filter Funds</SheetTitle>
                    <SheetDescription>Apply filters to find the perfect investment opportunity</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Fund Category</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="outline" size="sm" className="justify-start">
                          Government
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Prime
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Tax-Exempt
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Minimum Investment</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="outline" size="sm" className="justify-start">
                          Under 5 USDC
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          5 - 20 USDC
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          20 - 50 USDC
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          50+ USDC
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Performance</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="outline" size="sm" className="justify-start">
                          Top Performers
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          Consistent Returns
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          New Funds
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">Reset</Button>
                    <Button>Apply Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Desktop filter and sort buttons */}
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filter</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  <span>Sort</span>
                </Button>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search funds..."
                    className="w-full rounded-lg pl-8 md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable tabs for mobile */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="inline-flex w-auto min-w-full sm:w-full">
                <TabsTrigger value="all" className="flex-shrink-0">
                  All Money Market Funds
                </TabsTrigger>
                <TabsTrigger value="government" className="flex-shrink-0">
                  Government
                </TabsTrigger>
                <TabsTrigger value="prime" className="flex-shrink-0">
                  Prime
                </TabsTrigger>
                <TabsTrigger value="tax-exempt" className="flex-shrink-0">
                  Tax-Exempt
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {mmfSamples.map((fund) => (
                    <Link key={fund.id} href={`/funds/${fund.id}`} className="block group">
                      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02] spicy-card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {fund["fund-name"]}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                Managed by {fund["fund-manager"]} • {fund.country}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span>Subscription Rate</span>
                                <span className="font-medium">{fund["subscription-rate"]}%</span>
                              </div>
                              <Progress value={fund["subscription-rate"]} className="h-2 bg-muted overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-accent"
                                  style={{ width: `${fund["subscription-rate"]}%` }}
                                ></div>
                              </Progress>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Total Invested</p>
                                <p className="text-lg font-bold">
                                  {(fund["total-invested"] / 1000000).toFixed(1)}M USDC
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Min. Investment</p>
                                <p className="text-lg font-bold">{fund["min-amount"]} USDC</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Previous Year Yield</p>
                                <p className="text-lg font-bold text-primary">+{fund["previous-yield"]}%</p>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-1 hidden lg:block">
                              <p className="text-xs text-muted-foreground">Strategy</p>
                              <p className="text-sm">{fund["a-brief-investment-strategy"]}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hidden">
                  {/* copy Fund Card 3 - CIC Money Market Fund */}
                  <Link href="/funds/secure-income" className="block group">
                    <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02]">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              CDG Capital Money Market Fund
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">Managed by CDG Capital • Morocco</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Subscription Rate</span>
                              <span className="font-medium">65%</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Total Invested</p>
                              <p className="text-lg font-bold">12.5M USDC</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Min. Investment</p>
                              <p className="text-lg font-bold">1 USDC</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Previous Year Yield</p>
                              <p className="text-lg font-bold text-green-600">+3.8%</p>
                            </div>
                            {/* <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Risk Level</p>
                            <p className="text-lg font-medium">Low</p>
                          </div> */}
                          </div>
                          <Separator />
                          <div className="space-y-1 hidden lg:block">
                            <p className="text-xs text-muted-foreground">Strategy</p>
                            <p className="text-sm">Low-risk investments in short-term debt securities</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Fund Card 1 */}
                  <Link href="/funds/growth-opportunities" className="block group">
                    <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02]">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              Zidii money market fund
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              Managed by Standard Investment Bank (SIB) • Kenya
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pb-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Subscription Rate</span>
                              <span className="font-medium">78%</span>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Total Invested</p>
                              <p className="text-lg font-bold">4.2M USDC</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Min. Investment</p>
                              <p className="text-lg font-bold">5 USDC</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Previous Year Yield</p>
                              <p className="text-lg font-bold text-green-600">+4.2%</p>
                            </div>
                            {/* <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Risk Level</p>
                              <p className="text-lg font-medium">Medium</p>
                            </div> */}
                          </div>
                          <Separator />
                          <div className="space-y-1 hidden lg:block">
                            <p className="text-xs text-muted-foreground">Strategy</p>
                            <p className="text-sm">Long-term growth through diversified equity investments</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Fund Card 2 */}
                  <Link href="/funds/tech-ventures" className="block group">
                    <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02]">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              JPMorgan Prime Money Market Fund (JPMXX)
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              Managed by J.P. Morgan Asset Management • USA
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Subscription Rate</span>
                              <span className="font-medium">92%</span>
                            </div>
                            <Progress value={92} className="h-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Total Invested</p>
                              <p className="text-lg font-bold">7.8M USDC</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Min. Investment</p>
                              <p className="text-lg font-bold">10 USDC</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Previous Year Yield</p>
                              <p className="text-lg font-bold text-green-600">+5.7%</p>
                            </div>
                            {/* <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Risk Level</p>
                              <p className="text-lg font-medium">Medium-High</p>
                            </div> */}
                          </div>
                          <Separator />
                          <div className="space-y-1 hidden lg:block">
                            <p className="text-xs text-muted-foreground">Strategy</p>
                            <p className="text-sm">Early-stage investments in technology startups</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Fund Card 3 */}
                  <Link href="/funds/secure-income" className="block group">
                    <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02]">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              Macquarie Cash Management Trust
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">Managed by Macquarie Group • Australia</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Subscription Rate</span>
                              <span className="font-medium">65%</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Total Invested</p>
                              <p className="text-lg font-bold">12.5M USDC</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Min. Investment</p>
                              <p className="text-lg font-bold">1 USDC</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Previous Year Yield</p>
                              <p className="text-lg font-bold text-green-600">+3.8%</p>
                            </div>
                            {/* <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Risk Level</p>
                              <p className="text-lg font-medium">Low</p>
                            </div> */}
                          </div>
                          <Separator />
                          <div className="space-y-1 hidden lg:block">
                            <p className="text-xs text-muted-foreground">Strategy</p>
                            <p className="text-sm">Low-risk investments in short-term debt securities</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Additional fund cards would continue here... */}
                </div>

                {/* Load more button */}
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                    Load More Funds
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="government" className="space-y-4">
                {/* Government funds would be listed here */}
                <p className="text-center text-muted-foreground py-8">Loading government funds...</p>
              </TabsContent>
              <TabsContent value="prime" className="space-y-4">
                {/* Prime funds would be listed here */}
                <p className="text-center text-muted-foreground py-8">Loading prime funds...</p>
              </TabsContent>
              <TabsContent value="tax-exempt" className="space-y-4">
                {/* Tax-exempt funds would be listed here */}
                <p className="text-center text-muted-foreground py-8">Loading tax-exempt funds...</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Information section at the bottom of the page */}
          <div className="mx-auto w-full max-w-6xl mt-12 space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Learn More About Money Market Funds</h2>
              <p className="text-muted-foreground mt-2">Understand the fundamentals of money market funds and USDC</p>
            </div>
            {/* <div className="grid gap-6 md:grid-cols-2"> */}
            <div className="">
              <MoneyMarketInfo />
              {/* <USDCInfo /> */}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 border-t bg-background p-2 flex justify-around">
        <Link href="/" className="flex flex-col items-center p-2 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/funds" className="flex flex-col items-center p-2 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3 3v18h18"></path>
            <path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
          <span className="text-xs mt-1">Funds</span>
        </Link>
        <Link href="/dashboard" className="flex flex-col items-center p-2 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
          </svg>
          <span className="text-xs mt-1">Dashboard</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center p-2 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M20 21a8 8 0 1 0-16 0"></path>
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  )
}

