import { Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MoneyMarketInfoComponent() {
  return (
    <Card className="border-blue-100">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-blue-800">About Money Market Funds</CardTitle>
        </div>
        <CardDescription className="text-blue-700">
          Low-risk investment vehicles focused on liquidity, stability, and preservation of capital
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-are-mmf">
            <AccordionTrigger>What are Money Market Funds?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-2">
                Money market funds are a type of mutual fund that invests in high-quality, short-term debt instruments,
                cash, and cash equivalents denominated in USDC.
              </p>
              <p className="text-muted-foreground">
                They aim to provide investors with high liquidity, preservation of capital, and moderate returns. These
                funds are considered one of the safest investment options.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="types">
            <AccordionTrigger>Types of Money Market Funds</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Government Money Market Funds</span>: Invest primarily in government
                  securities and repurchase agreements collateralized by government securities.
                </li>
                <li>
                  <span className="font-medium">Prime Money Market Funds</span>: Invest in a wider range of
                  high-quality, short-term debt instruments, including commercial paper and certificates of deposit.
                </li>
                <li>
                  <span className="font-medium">Tax-Exempt Money Market Funds</span>: Invest in municipal securities,
                  offering income that is exempt from federal income tax.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="benefits">
            <AccordionTrigger>Benefits of Money Market Funds</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Liquidity</span>: Investors can typically redeem shares at any time
                  without penalties.
                </li>
                <li>
                  <span className="font-medium">Stability</span>: Designed to maintain a stable net asset value (NAV),
                  usually 1 USDC per share.
                </li>
                <li>
                  <span className="font-medium">Accessibility</span>: Low minimum investments (as little as 1 USDC) make
                  these funds available to all investors.
                </li>
                <li>
                  <span className="font-medium">Diversification</span>: Spread risk across multiple high-quality,
                  short-term investments.
                </li>
                <li>
                  <span className="font-medium">Professional Management</span>: Managed by experienced professionals who
                  monitor credit quality and maturity.
                </li>
                <li>
                  <span className="font-medium">Low Costs</span>: Generally have lower expense ratios compared to other
                  mutual funds.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="risks">
            <AccordionTrigger>Risks to Consider</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-2">
                While money market funds are considered low-risk investments, they are not without risks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Interest Rate Risk</span>: When interest rates rise, the value of
                  existing fixed-income securities may decline.
                </li>
                <li>
                  <span className="font-medium">Credit Risk</span>: The possibility that an issuer of a security might
                  fail to make interest and principal payments.
                </li>
                <li>
                  <span className="font-medium">Inflation Risk</span>: The risk that the returns won't keep pace with
                  inflation, eroding purchasing power.
                </li>
                <li>
                  <span className="font-medium">Regulatory Risk</span>: Changes in regulations can affect the operations
                  and returns of money market funds.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default MoneyMarketInfoComponent

