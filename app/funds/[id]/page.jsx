"use client"
import Link from "next/link"
import { ArrowLeft, ChevronRight, DollarSign, LineChart, Users } from "lucide-react"

import InvestButton from "@/components/investButton";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import mmfSamples from './../../../storage/sample-mmfs.json'

export default function FundDetailsPage({ params }) {
  const fundId = parseInt(params.id)
  const fund = mmfSamples.find(f => f.id === fundId)

  if (!fund) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 grid place-items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Fund Not Found</h1>
            <p className="text-muted-foreground mt-2">
              The fund you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/funds" className="mt-4 inline-block">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Funds
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  // Calculate additional metrics
  const subscriptionPercentage = Math.min(
    Math.round((fund["total-invested"] / fund.target) * 100),
    100
  );  

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <span>Hui Finance</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/funds">
            Explore Funds
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/profile">
            Profile
          </Link>
        </nav>
      </header>
      <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/funds" className="flex items-center gap-1 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Funds</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Fund Details</span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{fund["fund-name"]}</h1>
                  <Badge className="bg-green-100 text-green-800">Licensed</Badge>
                </div>
                <p className="text-muted-foreground">
                  Managed by {fund["fund-manager"]} • {fund.country}
                </p>
              </div>
              {/* <Link href={`/funds/${fundId}/subscribe`}>
                <Button size="lg">Invest now</Button>
              </Link> */}
              <InvestButton fundId={fundId} />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Subscription Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{fund["subscription-rate"]}%</span>
                    <span className="text-sm text-muted-foreground">
                      Target: {(fund.target / 1000000).toFixed(1)}M USDC
                    </span>
                  </div>
                  <Progress value={fund["subscription-rate"]} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Total Invested</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <span className="text-3xl font-bold">
                    {(fund["total-invested"] / 1000000).toFixed(1)}M USDC
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-3xl font-bold">{fund["total-investors"]}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fund Information</CardTitle>
                  <CardDescription>Key details about {fund["fund-name"]}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Fund Type</p>
                      <p>Money Market Fund</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Minimum Investment</p>
                      <p>{fund["min-amount"]} USDC</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Management Fee</p>
                      <p>1.5% annually</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Jurisdiction</p>
                      <p>{fund.country}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Subscription Date</p>
                      <p>{fund["subscription-date"]}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Liquidity</p>
                      <p>Daily redemptions</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Investment Strategy</p>
                    <p className="text-sm text-muted-foreground">
                      {fund["full-details-investment-strategy"]}
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Fund Manager</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium">
                          {fund["fund-manager"]
                            .split(" ")
                            .map(word => word[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{fund["fund-manager"]}</p>
                        <p className="text-sm text-muted-foreground">
                          {fund["fund-manager-info"]}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="portfolio" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                  <CardDescription>Current investment distribution across assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Asset Allocation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* These allocations could also be moved to your JSON if they vary by fund */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Treasury Bills</span>
                              <span className="text-sm font-medium">45%</span>
                            </div>
                            <Progress value={45} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Commercial Paper</span>
                              <span className="text-sm font-medium">25%</span>
                            </div>
                            <Progress value={25} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Certificates of Deposit</span>
                              <span className="text-sm font-medium">15%</span>
                            </div>
                            <Progress value={15} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Repurchase Agreements</span>
                              <span className="text-sm font-medium">10%</span>
                            </div>
                            <Progress value={10} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Cash & Equivalents</span>
                              <span className="text-sm font-medium">5%</span>
                            </div>
                            <Progress value={5} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Maturity Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium">1-7 Days</p>
                                <p className="text-xs text-muted-foreground">Short-term liquidity</p>
                              </div>
                              <p className="font-medium">15%</p>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium">8-30 Days</p>
                                <p className="text-xs text-muted-foreground">Near-term maturities</p>
                              </div>
                              <p className="font-medium">25%</p>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium">31-60 Days</p>
                                <p className="text-xs text-muted-foreground">Medium-term maturities</p>
                              </div>
                              <p className="font-medium">30%</p>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium">61-90 Days</p>
                                <p className="text-xs text-muted-foreground">Longer-term maturities</p>
                              </div>
                              <p className="font-medium">20%</p>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium">91-120 Days</p>
                                <p className="text-xs text-muted-foreground">Extended maturities</p>
                              </div>
                              <p className="font-medium">10%</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fund Performance</CardTitle>
                  <CardDescription>Historical returns and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-center p-4 border rounded-lg">
                      <LineChart className="h-40 w-full text-primary/20" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">YTD Return</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold text-green-500">
                            +{fund["previous-yield"].toFixed(1)}%
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">1-Year Return</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold text-green-500">
                            +{(fund["previous-yield"] * 1.05).toFixed(1)}%
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Since Inception</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold text-green-500">
                            +{(fund["previous-yield"] * 1.1).toFixed(1)}%
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Annual Returns</h3>
                      <div className="rounded-md border">
                        <div className="grid grid-cols-2 gap-4 p-4 font-medium">
                          <div>Year</div>
                          <div>Return</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 gap-4 p-4">
                          <div>2023</div>
                          <div className="text-green-500">+{fund["previous-yield"].toFixed(1)}%</div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 gap-4 p-4">
                          <div>2022</div>
                          <div className="text-green-500">
                            +{(fund["previous-yield"] * 0.95).toFixed(1)}%
                          </div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 gap-4 p-4">
                          <div>2021</div>
                          <div className="text-green-500">
                            +{(fund["previous-yield"] * 0.9).toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Performance Metrics</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Weighted Average Maturity</p>
                          <p>45 days</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Weighted Average Life</p>
                          <p>65 days</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">7-Day Yield</p>
                          <p>{fund["previous-yield"].toFixed(2)}%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">30-Day Yield</p>
                          <p>{(fund["previous-yield"] * 1.02).toFixed(2)}%</p>
                        </div>
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

