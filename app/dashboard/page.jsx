import Link from "next/link"
import { Bell, Plus, Settings, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
              <p className="text-muted-foreground">Manage your investments</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/funds">
                <Button variant="outline" className="gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Explore Funds</span>
                </Button>
              </Link>
            </div>
          </div>

          <Tabs defaultValue="investments">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="investments">My Investments</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="investments" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Invested</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">45 $</div>
                    <p className="text-xs text-muted-foreground">Across 3 funds</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Current Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">52.38 $</div>
                    <p className="text-xs text-primary">+16.4% overall return</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Last Deposit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">15 $</div>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>My Investment Portfolio</CardTitle>
                  <CardDescription>Your current fund investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Link href="/funds/growth-opportunities" className="block group">
                      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02] spicy-card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="group-hover:text-primary transition-colors">
                                Treasury Plus Fund
                              </CardTitle>
                              <CardDescription>Money Market Fund • Stability Finance</CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-accent/10 text-accent-600 border-accent/20">
                              +3.9% YTD
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Investment Amount</p>
                              <p className="text-lg font-bold">25 $</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Current Value</p>
                              <p className="text-lg font-bold">28.1 $</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>

                    <Link href="/funds/tech-ventures" className="block group">
                      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02] spicy-card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="group-hover:text-primary transition-colors">
                                Government Securities Fund
                              </CardTitle>
                              <CardDescription>Money Market Fund • SafeHaven Investments</CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-accent/10 text-accent-600 border-accent/20">
                              +3.2% YTD
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Investment Amount</p>
                              <p className="text-lg font-bold">15 $</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Current Value</p>
                              <p className="text-lg font-bold">18.42 $</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>

                    <Link href="/funds/secure-income" className="block group">
                      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:bg-black/[0.02] spicy-card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="group-hover:text-primary transition-colors">
                                Secure Income Fund
                              </CardTitle>
                              <CardDescription>Money Market Fund • Capital Reserve</CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-accent/10 text-accent-600 border-accent/20">
                              +2.8% YTD
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Investment Amount</p>
                              <p className="text-lg font-bold">5 $</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground">Current Value</p>
                              <p className="text-lg font-bold">5.19 $</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent investment activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="space-y-1">
                        <p className="font-medium">Invested in Secure Income Fund</p>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">15 $</p>
                        <p className="text-sm text-muted-foreground">Transaction</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="space-y-1">
                        <p className="font-medium">Dividend Payment</p>
                        <p className="text-sm text-muted-foreground">1 week ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+0.42 $</p>
                        <p className="text-sm text-muted-foreground">Treasury Plus Fund</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="space-y-1">
                        <p className="font-medium">Invested in Government Securities Fund</p>
                        <p className="text-sm text-muted-foreground">2 weeks ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">15 $</p>
                        <p className="text-sm text-muted-foreground">Transaction</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">Invested in Treasury Plus Fund</p>
                        <p className="text-sm text-muted-foreground">1 month ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">25 $</p>
                        <p className="text-sm text-muted-foreground">Transaction</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

