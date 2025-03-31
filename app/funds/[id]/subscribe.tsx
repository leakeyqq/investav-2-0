"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Wallet } from "lucide-react"
import { ConnectWallet, useAddress, useContract, useContractWrite } from "@thirdweb-dev/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

export function FundSubscribePage({ params }) {
  const router = useRouter()
  const { toast } = useToast()
  const address = useAddress()
  const [amount, setAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // This would be the actual contract address for the specific fund
  const contractAddress = "0x1234567890123456789012345678901234567890"

  const { contract } = useContract(contractAddress)
  const { mutateAsync: invest } = useContractWrite(contract, "invest")

  const handleSubscribe = async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue",
        variant: "destructive",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid investment amount",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // This would call the smart contract function to invest
      await invest({ args: [Number.parseFloat(amount)] })

      toast({
        title: "Investment successful!",
        description: `You have successfully invested $${amount} in this fund.`,
      })

      // Redirect to dashboard after successful investment
      router.push("/dashboard")
    } catch (error) {
      console.error("Investment failed:", error)
      toast({
        title: "Investment failed",
        description: "There was an error processing your investment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // In a real app, we would fetch the fund details based on the ID
  const fundId = params.id
  const fundName = "Growth Opportunities Fund"
  const minInvestment = "5"
  const managementFee = "2.0%"

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
        </nav>
      </header>
      <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href={`/funds/${fundId}`} className="flex items-center gap-1 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Fund Details</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Subscribe to Fund</h1>
              <p className="text-muted-foreground">Invest in {fundName}</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
              <CardDescription>Enter the amount you wish to invest</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fund-name">Fund</Label>
                  <div className="p-3 bg-muted rounded-md">{fundName}</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investment-amount">Investment Amount</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">$</span>
                    <Input
                      id="investment-amount"
                      type="number"
                      placeholder={minInvestment}
                      min={minInvestment}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Minimum investment: ${minInvestment}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Investment Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Investment Amount</span>
                    <span className="font-medium">${amount || "0.00"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Management Fee</span>
                    <span className="text-sm text-muted-foreground">{managementFee} annually</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Connect Your Wallet</Label>
                <div className="flex justify-center py-4">
                  {!address ? (
                    <ConnectWallet theme="light" btnTitle="Connect Wallet" />
                  ) : (
                    <div className="flex items-center gap-2 p-2 border rounded-md">
                      <Wallet className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">
                        Wallet Connected: {address.slice(0, 6)}...{address.slice(-4)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleSubscribe} disabled={isSubmitting || !address || !amount}>
                {isSubmitting ? "Processing..." : "Confirm Investment"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default FundSubscribePage

