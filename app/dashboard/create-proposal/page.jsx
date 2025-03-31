import Link from "next/link"
import { ArrowLeft, Calendar, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CreateProposalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
        <div className="mx-auto w-full max-w-3xl space-y-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/dashboard" className="flex items-center gap-1 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Create Investment Proposal</h1>
              <p className="text-muted-foreground">Submit a new investment proposal for fund consideration</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Proposal Details</CardTitle>
              <CardDescription>Provide information about your investment proposal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fund">Select Fund</Label>
                <Select>
                  <SelectTrigger id="fund">
                    <SelectValue placeholder="Select a fund" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="treasury-plus">Treasury Plus Fund</SelectItem>
                    <SelectItem value="government-securities">Government Securities Fund</SelectItem>
                    <SelectItem value="secure-income">Secure Income Fund</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Choose the fund you want to submit this proposal to</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Proposal Title</Label>
                <Input id="title" placeholder="Enter a clear, descriptive title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="allocation">Requested Allocation (%)</Label>
                <div className="flex items-center gap-2">
                  <Input id="allocation" type="number" min="1" max="20" placeholder="5" className="w-24" />
                  <span className="text-sm text-muted-foreground">% of fund assets</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Proposals typically request between 1-10% of fund assets
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Investment Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government Securities</SelectItem>
                    <SelectItem value="commercial">Commercial Paper</SelectItem>
                    <SelectItem value="certificates">Certificates of Deposit</SelectItem>
                    <SelectItem value="treasury">Treasury Bills</SelectItem>
                    <SelectItem value="municipal">Municipal Securities</SelectItem>
                    <SelectItem value="repurchase">Repurchase Agreements</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Proposal Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your investment proposal in detail..."
                  className="min-h-[150px]"
                />
                <p className="text-xs text-muted-foreground">
                  Include the investment thesis, target securities, expected returns, and risk assessment
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rationale">Investment Rationale</Label>
                <Textarea
                  id="rationale"
                  placeholder="Explain why this investment aligns with the fund's strategy..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Expected Timeline</Label>
                <Select>
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short-term (0-3 months)</SelectItem>
                    <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                    <SelectItem value="long">Long-term (6+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expected-yield">Expected Yield (%)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="expected-yield"
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    placeholder="2.5"
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground">% annually</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="voting-period">Voting Period</Label>
                <Select>
                  <SelectTrigger id="voting-period">
                    <SelectValue placeholder="Select voting period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-week">1 Week</SelectItem>
                    <SelectItem value="2-weeks">2 Weeks</SelectItem>
                    <SelectItem value="3-weeks">3 Weeks</SelectItem>
                    <SelectItem value="4-weeks">4 Weeks</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">How long investors can vote on your proposal</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="supporting-docs">Supporting Documents (Optional)</Label>
                <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm font-medium">Drag files here or click to upload</p>
                    <p className="text-xs text-muted-foreground">
                      Support for PDF, DOCX, XLSX, PPTX (Max 10MB per file)
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Select Files
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit Proposal</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

