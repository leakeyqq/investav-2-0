"use client"
import Link from "next/link"
import { ArrowRight, BarChart3, Building, LineChart, Users, Globe, DollarSign, Clock, Vote } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 spicy-gradient text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Your entry to money market funds
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    A platform where fund managers can create investment funds and investors can invest and earn stable
                    yields.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/create-fund">
                    <Button size="lg" className="gap-1 spicy-button border-0">
                      Create a Fund
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/funds">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                    >
                      Explore Funds
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-accent/30 rounded-lg transform rotate-3 scale-105"></div>
                  <div className="absolute inset-0 bg-white/90 rounded-lg border shadow-lg flex items-center justify-center">
                    <BarChart3 className="h-32 w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects fund managers with investors in a collaborative and efficient way.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 spicy-card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fund Creation</h3>
                <p className="text-center text-muted-foreground">
                  Fund managers can create money market funds with customized parameters and strategies focused on
                  liquidity and stability.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 spicy-card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Users className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold">Investor participation</h3>
                <p className="text-center text-muted-foreground">
                  Investors put their money into the fund and wait to earn stable yields. All transactions are done in
                  stablecoins like USDC.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 spicy-card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Yield sharing</h3>
                <p className="text-center text-muted-foreground">
                  Fund managers are able to share earnings back to investors in a smooth manner which is cheaper than
                  traditional finance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section - Fixed */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative border">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 z-0"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent-600 mb-2">
                Why choose FundHub
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-[800px]">
                Benefits for everyone in the Ecosystem
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our platform offers unique advantages for both fund managers and investors
              </p>
            </div>

            <div className="grid gap-10 lg:gap-16">
              {/* Fund Manager Benefits - Fixed */}
              <div className="relative pt-10">
                <div className="text-4xl font-bold text-primary/30 md:text-6xl lg:text-7xl mb-4">FUND MANAGERS</div>
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-primary/10">
                  <div className="grid md:grid-cols-3 gap-2">
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Users className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Access to more capital</h3>
                        <p className="text-muted-foreground">
                          Reach a global pool of investors to grow your fund beyond traditional boundaries. Tokenized
                          money market funds have attracted over $1 billion in assets under management.
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <LineChart className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Compliance and Regulation</h3>
                        <p className="text-muted-foreground">
                          {/* Manage proposals, voting, and investor communications all in one platform */}
                          We do compliance checks for all the fund managers on our platform making sure they are legal
                          and licensed. That's why investors trust in our platform.
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <BarChart3 className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Transparent performance</h3>
                        <p className="text-muted-foreground">
                          Build trust with investors through real-time reporting and transparent fund metrics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investor Benefits - Fixed */}
              <div className="relative pt-10">
                <div className="text-4xl font-bold text-primary/30 md:text-6xl lg:text-7xl mb-4 text-right">
                  INVESTORS
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-primary/10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Cross-border investments</h3>
                        <p className="text-muted-foreground">
                          Invest in opportunities worldwide without geographical limitations. An investor from US can
                          invest in Kenya treasuries and corporate debt through a money market fund in Kenya. The
                          opposite is true for an investor in Kenya.
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Vote className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Hedge against inflation</h3>
                        <p className="text-muted-foreground">
                          For investors in volatile currency countries they can put their money in USD denominated
                          investment funds and also earn interest in USD.
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <DollarSign className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Upto 2X more earnings</h3>
                        <p className="text-muted-foreground">
                          When you do an investment into a fund you shall receive shares equivalent to the amount you
                          have invested. You can restake back this shares and earn more rewards.
                          {/* No bank fees or hidden charges, maximizing your investment returns */}
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Cashout anytime</h3>
                        <p className="text-muted-foreground">
                          Convert your investment to cash anytime before the redemption date by selling your shares to
                          other investors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/funds">
                <Button size="lg" className="rounded-full px-8 spicy-button border-0">
                  Start Exploring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

