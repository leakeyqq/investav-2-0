import Link from "next/link"
import { ArrowUpRight, Plus, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Navbar from "@/components/navbar"

export default function ManagerDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Fund Manager Dashboard</h1>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-center h-6 w-6 bg-green-100 rounded-full border border-green-200">
                        <Shield className="h-4 w-4 text-green-600" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">Licensed Fund Manager</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-muted-foreground">Manage your investment funds and review proposals</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/create-fund">
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Create New Fund</span>
                </Button>
              </Link>
            </div>
          </div>

          <Tabs defaultValue="funds">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="funds">My Funds</TabsTrigger>
              <TabsTrigger value="proposals">Pending Proposals</TabsTrigger>
              <TabsTrigger value="investors">Investors</TabsTrigger>
            </TabsList>
            <TabsContent value="funds" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total AUM</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">24.5M USDC</div>
                    <p className="text-xs text-muted-foreground">Across 3 funds</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Total Investors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">247</div>
                    <p className="text-xs text-green-500">+12 this month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Pending Proposals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">2 require review</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>My Funds</CardTitle>
                      <CardDescription>Investment funds you manage</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100">
                      <Shield className="h-4 w-4" />
                      <span className="text-xs font-medium">Licensed Manager</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>Treasury Plus Fund</CardTitle>
                            <CardDescription>Money Market Fund • Created Jan 15, 2023</CardDescription>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Assets Under Management</p>
                            <p className="text-lg font-bold">4.2M / 5.5M USDC Target</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Investors</p>
                            <p className="text-lg font-bold">127</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">YTD Performance</p>
                            <p className="text-lg font-bold text-green-500">+12.4%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Min. Investment</p>
                            <p className="text-lg font-bold">5 USDC</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/funds/growth-opportunities/manage" className="w-full">
                          <Button variant="outline" className="w-full gap-1">
                            Manage Fund
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>Government Securities Fund</CardTitle>
                            <CardDescription>Money Market Fund • Created Mar 22, 2023</CardDescription>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Assets Under Management</p>
                            <p className="text-lg font-bold">7.8M / 10M USDC Target</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Investors</p>
                            <p className="text-lg font-bold">84</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">YTD Performance</p>
                            <p className="text-lg font-bold text-green-500">+22.8%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Min. Investment</p>
                            <p className="text-lg font-bold">1 USDC</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/funds/tech-ventures/manage" className="w-full">
                          <Button variant="outline" className="w-full gap-1">
                            Manage Fund
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>Secure Income Fund</CardTitle>
                            <CardDescription>Money Market Fund • Created Jun 10, 2023</CardDescription>
                          </div>
                          <Badge className="bg-green-500">Active</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Assets Under Management</p>
                            <p className="text-lg font-bold">12.5M / 15M USDC Target</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Investors</p>
                            <p className="text-lg font-bold">36</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">YTD Performance</p>
                            <p className="text-lg font-bold text-green-500">+3.9%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Min. Investment</p>
                            <p className="text-lg font-bold">10 USDC</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/funds/secure-income/manage" className="w-full">
                          <Button variant="outline" className="w-full gap-1">
                            Manage Fund
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="proposals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Proposals</CardTitle>
                  <CardDescription>Investment proposals requiring your review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>Renewable Energy Investment</CardTitle>
                            <CardDescription>
                              Growth Opportunities Fund • Proposed by John D. • 3 days ago
                            </CardDescription>
                          </div>
                          <Badge className="bg-amber-500">Voting Passed</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Proposal to allocate 5% of the fund to emerging renewable energy companies focusing on solar
                            and wind technologies.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Final Vote (Passed threshold)</span>
                              <span className="font-medium">78%</span>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>Metaverse Startups</CardTitle>
                            <CardDescription>Tech Ventures Fund • Proposed by Emily R. • 1 week ago</CardDescription>
                          </div>
                          <Badge className="bg-amber-500">Voting Passed</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Proposal to invest 7% of the fund in startups developing metaverse technologies and
                            platforms.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Final Vote (Passed threshold)</span>
                              <span className="font-medium">82%</span>
                            </div>
                            <Progress value={82} className="h-2" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>Sustainable Agriculture</CardTitle>
                            <CardDescription>
                              Growth Opportunities Fund • Proposed by Sarah M. • 5 days ago
                            </CardDescription>
                          </div>
                          <Badge>Voting Active</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Proposal to allocate 4% of the fund to companies developing sustainable agriculture
                            technologies.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Voting Progress (68% of 75% threshold)</span>
                              <span className="font-medium">68%</span>
                            </div>
                            <Progress value={68} className="h-2" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="investors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investor Analytics</CardTitle>
                  <CardDescription>Overview of investor activity across your funds</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Total Investors</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">247</div>
                          <p className="text-xs text-green-500">+12 this month</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Avg. Investment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">99,200 USDC</div>
                          <p className="text-xs text-green-500">+5.2% from last quarter</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Investor Retention</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">94%</div>
                          <p className="text-xs text-green-500">+2% from last year</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Top Investors</h3>
                      <div className="rounded-md border">
                        <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                          <div>Investor</div>
                          <div>Total Invested</div>
                          <div>Funds</div>
                          <div>Last Activity</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>Robert K.</div>
                          <div>1,250,000 USDC</div>
                          <div>3</div>
                          <div>2 days ago</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>Jennifer T.</div>
                          <div>875,000 USDC</div>
                          <div>2</div>
                          <div>1 week ago</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>Michael B.</div>
                          <div>750,000 USDC</div>
                          <div>3</div>
                          <div>3 days ago</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>Sarah L.</div>
                          <div>625,000 USDC</div>
                          <div>1</div>
                          <div>Today</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>David W.</div>
                          <div>500,000 USDC</div>
                          <div>2</div>
                          <div>5 days ago</div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Button variant="outline">View All Investors</Button>
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

