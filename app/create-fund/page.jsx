"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle, HelpCircle, Info, Shield, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Add the MoneyMarketInfo component to the fund creation page
import MoneyMarketInfoComponent from "@/components/money-market-info"

export default function CreateFundPage() {
  const [activeTab, setActiveTab] = useState("details")

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  const navigateToTab = (tab) => {
    setActiveTab(tab)
  }

  // List of countries for jurisdiction dropdown
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]

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
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Create new fund</h1>
              <p className="text-muted-foreground">Set up a new investment fund for investors to join</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details" id="details-tab">
                Fund details
              </TabsTrigger>
              <TabsTrigger value="compliance" id="compliance-tab">
                Compliance
              </TabsTrigger>
              <TabsTrigger value="review" id="review-tab">
                Review
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Fund details</CardTitle>
                  <CardDescription>Provide the basic information about your fund</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fund-name">Fund Name</Label>
                    <Input id="fund-name" placeholder="Enter fund name" />
                  </div>

                  <div className="space-y-2">
                    <Label>Fund Type</Label>
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-md border border-primary/20">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="font-medium">Money Market Fund</span>
                      </div>
                      <p className="text-sm text-primary/80 ml-2">
                        This platform is specialized for money market funds only
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-size">Target Fund Size</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">USDC</span>
                      <Input id="target-size" type="number" placeholder="5000000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="min-investment">Minimum Investment</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">USDC</span>
                      <Input id="min-investment" type="number" placeholder="5" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Set a low minimum to make your fund more accessible (1-50 $ recommended)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="management-fee">Management Fee (%)</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="management-fee"
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        placeholder="2.0"
                        className="w-24"
                      />
                      <span className="text-sm text-muted-foreground">% annually</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="liquidity">Yield distribution</Label>
                    <Select>
                      <SelectTrigger id="liquidity">
                        <SelectValue placeholder="Select distribution dates" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="strategy">Investment Strategy</Label>
                    <Textarea
                      id="strategy"
                      placeholder="Describe your fund's investment strategy..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fund-logo">Fund Logo (Optional)</Label>
                    <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6">
                      <div className="flex flex-col items-center gap-1 text-center">
                        <Calendar className="h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Drag image here or click to upload</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, or SVG (Max 2MB)</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Select Image
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save as Draft</Button>
                  <Button onClick={() => navigateToTab("compliance")} className="spicy-button border-0">
                    Continue to Compliance
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle>Compliance & Licensing</CardTitle>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <HelpCircle className="h-4 w-4" />
                            <span className="sr-only">More information</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm">
                          <p>
                            Licensed fund managers receive a verification badge that builds trust with investors and may
                            attract more capital.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <CardDescription>Complete compliance checks to receive a licensed badge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Benefits of Licensing</h3>
                        <p className="text-sm text-muted-foreground">
                          Licensed fund managers receive a verification badge visible to all investors. This builds
                          trust, may attract more capital, and shows your commitment to regulatory compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="compliance-check" className="text-base">
                          Opt into Compliance Verification
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Enable this to start the compliance verification process
                        </p>
                      </div>
                      <Switch id="compliance-check" />
                    </div>
                  </div>

                  <div className="space-y-4 border rounded-lg p-4">
                    <h3 className="font-medium">Verification Process</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent-600 text-xs">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Submit Documentation</p>
                          <p className="text-sm text-muted-foreground">
                            Upload required regulatory documents and licenses
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent-600 text-xs">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Verification Review</p>
                          <p className="text-sm text-muted-foreground">
                            Our team reviews your documentation (typically 2-3 business days)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent-600 text-xs">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Receive Licensed Badge</p>
                          <p className="text-sm text-muted-foreground">
                            Once approved, the badge appears next to your name
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regulatory-jurisdiction">Regulatory Jurisdiction</Label>
                    <Select>
                      <SelectTrigger id="regulatory-jurisdiction">
                        <SelectValue placeholder="Select your jurisdiction" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase()}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license-number">License Number (if applicable)</Label>
                    <Input id="license-number" placeholder="Enter your license number" />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Regulatory Documents</Label>
                    <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6">
                      <div className="flex flex-col items-center gap-1 text-center">
                        <Info className="h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Drag documents here or click to upload</p>
                        <p className="text-xs text-muted-foreground">PDF, DOCX (Max 10MB)</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Select Files
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      All documents are securely stored and only accessed by our compliance team
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => navigateToTab("details")}>
                    Back to Details
                  </Button>
                  <Button onClick={() => navigateToTab("review")}>Continue to Review</Button>
                </CardFooter>
              </Card>
            </TabsContent>



            <TabsContent value="review">
              <Card>
                <CardHeader>
                  <CardTitle>Review & Create Fund</CardTitle>
                  <CardDescription>Review your fund details before creating</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Fund Details Summary</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Fund Name</p>
                        <p className="text-muted-foreground">Growth Opportunities Fund</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Fund Type</p>
                        <p className="text-muted-foreground">Money Market Fund</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Target Size</p>
                        <p className="text-muted-foreground">5,000,000 USDC</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Minimum Investment</p>
                        <p className="text-muted-foreground">5 USDC</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Management Fee</p>
                        <p className="text-muted-foreground">2.0% annually</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Jurisdiction</p>
                        <p className="text-muted-foreground">Kenya</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Compliance Status</h3>
                    <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-md border border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Compliance verification in progress</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your fund will be created immediately, and the licensed badge will be added once verification is
                      complete.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="terms">Terms & Conditions</Label>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="font-normal text-sm">
                        I confirm that all information provided is accurate and I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => navigateToTab("compliance")}>
                    Back to Compliance
                  </Button>
                  <Link href="/manager-dashboard">
                    <Button>Create Fund</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            <div className="mt-6">
              <MoneyMarketInfoComponent />
            </div>

          </Tabs>
        </div>
      </main>
    </div>
  )
}

