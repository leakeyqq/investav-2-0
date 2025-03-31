"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronRight, DollarSign, Download, Upload, Users } from "lucide-react"
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

export function FundManagePage({ params }) {
  const { toast } = useToast()
  const address = useAddress()
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [yieldAmount, setYieldAmount] = useState("")
  const [refundAddress, setRefundAddress] = useState("")
  const [refundAmount, setRefundAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // This would be the actual contract address for the specific fund
  const contractAddress = "0x1234567890123456789012345678901234567890"

  const { contract } = useContract(contractAddress)
  const { mutateAsync: withdraw } = useContractWrite(contract, "withdraw")
  const { mutateAsync: distributeYield } = useContractWrite(contract, "distributeYield")
  const { mutateAsync: refundInvestor } = useContractWrite(contract, "refundInvestor")

  const handleWithdraw = async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue",
        variant: "destructive",
      })
      return
    }

    if (!withdrawAmount || Number.parseFloat(withdrawAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid withdrawal amount",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // This would call the smart contract function to withdraw
      await withdraw({ args: [Number.parseFloat(withdrawAmount)] })

      toast({
        title: "Withdrawal successful!",
        description: `You have successfully withdrawn $${withdrawAmount} to your wallet.`,
      })

      setWithdrawAmount("")
    } catch (error) {
      console.error("Withdrawal failed:", error)
      toast({
        title: "Withdrawal failed",
        description: "There was an error processing your withdrawal. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDistributeYield = async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue",
        variant: "destructive",
      })
      return
    }

    if (!yieldAmount || Number.parseFloat(yieldAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid yield amount",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // This would call the smart contract function to distribute yield
      await distributeYield({ args: [Number.parseFloat(yieldAmount)] })

      toast({
        title: "Yield distribution successful!",
        description: `You have successfully distributed $${yieldAmount} to all investors.`,
      })

      setYieldAmount("")
    } catch (error) {
      console.error("Yield distribution failed:", error)
      toast({
        title: "Yield distribution failed",
        description: "There was an error distributing the yield. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRefundInvestor = async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue",
        variant: "destructive",
      })
      return
    }

    if (!refundAddress || !refundAmount || Number.parseFloat(refundAmount) <= 0) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid wallet address and refund amount",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // This would call the smart contract function to refund an investor
      await refundInvestor({ args: [refundAddress, Number.parseFloat(refundAmount)] })

      toast({
        title: "Refund successful!",
        description: `You have successfully refunded $${refundAmount} to ${refundAddress.slice(0, 6)}...${refundAddress.slice(-4)}.`,
      })

      setRefundAddress("")
      setRefundAmount("")
    } catch (error) {
      console.error("Refund failed:", error)
      toast({
        title: "Refund failed",
        description: "There was an error processing the refund. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // In a real app, we would fetch the fund details based on the ID
  const fundId = params.id
  const fundName = "Growth Opportunities Fund"

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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/manager-dashboard">
            Manager Dashboard
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
              <Link href="/manager-dashboard" className="flex items-center gap-1 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Manager Dashboard</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Manage Fund</span>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{fundName}</h1>
              <p className="text-muted-foreground">Manage your fund's operations and investor relations</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Total Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <span className="text-3xl font-bold">4.2M $</span>
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
                  <span className="text-3xl font-bold">127</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">YTD Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-green-500">+4.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="investors">Investors</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="manage">Manage Funds</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fund Overview</CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Subscription Rate</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-muted-foreground">Target: 5.5M $</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Fund Type</p>
                      <p>Money Market Fund</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Minimum Investment</p>
                      <p>5 $</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Management Fee</p>
                      <p>2.0% annually</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Inception Date</p>
                      <p>January 15, 2023</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Liquidity</p>
                      <p>Daily redemptions</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Jurisdiction</p>
                      <p>Kenya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="investors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investor List</CardTitle>
                  <CardDescription>All investors in your fund</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                      <div>Investor</div>
                      <div>Amount Invested</div>
                      <div>Date Joined</div>
                      <div>Status</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>0x1a2b...3c4d</div>
                      <div>25,000 $</div>
                      <div>Jan 20, 2023</div>
                      <div className="text-green-600">Active</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>0x5e6f...7g8h</div>
                      <div>15,000 $</div>
                      <div>Feb 15, 2023</div>
                      <div className="text-green-600">Active</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>0x9i0j...1k2l</div>
                      <div>50,000 $</div>
                      <div>Mar 5, 2023</div>
                      <div className="text-green-600">Active</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>0x3m4n...5o6p</div>
                      <div>10,000 $</div>
                      <div>Apr 12, 2023</div>
                      <div className="text-green-600">Active</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>0x7q8r...9s0t</div>
                      <div>30,000 $</div>
                      <div>May 8, 2023</div>
                      <div className="text-green-600">Active</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Investors
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="transactions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Recent fund activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                      <div>Transaction</div>
                      <div>Amount</div>
                      <div>Date</div>
                      <div>Status</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>Investor Deposit</div>
                      <div>5,000 $</div>
                      <div>Jun 15, 2023</div>
                      <div className="text-green-600">Completed</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>Yield Distribution</div>
                      <div>12,500 $</div>
                      <div>Jun 1, 2023</div>
                      <div className="text-green-600">Completed</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>Manager Withdrawal</div>
                      <div>50,000 $</div>
                      <div>May 28, 2023</div>
                      <div className="text-green-600">Completed</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>Investor Deposit</div>
                      <div>10,000 $</div>
                      <div>May 20, 2023</div>
                      <div className="text-green-600">Completed</div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div>Investor Refund</div>
                      <div>7,500 $</div>
                      <div>May 15, 2023</div>
                      <div className="text-green-600">Completed</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="manage" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Withdraw Funds</CardTitle>
                    <CardDescription>Withdraw funds to your wallet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="withdraw-amount">Amount to Withdraw</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">$</span>
                        <Input
                          id="withdraw-amount"
                          type="number"
                          placeholder="0.00"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Available to withdraw: 250,000 $</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full gap-2"
                      onClick={handleWithdraw}
                      disabled={isSubmitting || !withdrawAmount}
                    >
                      <Download className="h-4 w-4" />
                      {isSubmitting ? "Processing..." : "Withdraw to Wallet"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Distribute Yield</CardTitle>
                    <CardDescription>Distribute yield to all investors</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="yield-amount">Yield Amount</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">$</span>
                        <Input
                          id="yield-amount"
                          type="number"
                          placeholder="0.00"
                          value={yieldAmount}
                          onChange={(e) => setYieldAmount(e.target.value)}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This amount will be distributed proportionally to all investors based on their investment
                        amount.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full gap-2"
                      onClick={handleDistributeYield}
                      disabled={isSubmitting || !yieldAmount}
                    >
                      <Upload className="h-4 w-4" />
                      {isSubmitting ? "Processing..." : "Distribute Yield"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Refund Investor</CardTitle>
                    <CardDescription>Return funds to a specific investor</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-address">Investor Wallet Address</Label>
                      <Input
                        id="investor-address"
                        placeholder="0x..."
                        value={refundAddress}
                        onChange={(e) => setRefundAddress(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refund-amount">Refund Amount</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">$</span>
                        <Input
                          id="refund-amount"
                          type="number"
                          placeholder="0.00"
                          value={refundAmount}
                          onChange={(e) => setRefundAmount(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={handleRefundInvestor}
                      disabled={isSubmitting || !refundAddress || !refundAmount}
                    >
                      {isSubmitting ? "Processing..." : "Process Refund"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default FundManagePage

