import { DollarSign } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function USDCInfoComponent() {
  return (
    <Card className="border-green-100">
      <CardHeader className="bg-green-50 border-b border-green-100">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-600" />
          <CardTitle className="text-green-800">About USDC</CardTitle>
        </div>
        <CardDescription className="text-green-700">
          A regulated, fully-reserved stablecoin backed by cash and short-dated U.S. treasuries
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-usdc">
            <AccordionTrigger>What is USDC?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-2">
                USDC (USD Coin) is a digital stablecoin that is pegged to the U.S. dollar, meaning 1 USDC is designed to
                maintain a value of 1 U.S. dollar.
              </p>
              <p className="text-muted-foreground">
                It's fully backed by cash and short-dated U.S. treasuries, with the reserves held in segregated accounts
                with U.S. regulated financial institutions. This makes it a transparent and stable digital currency for
                financial transactions.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="benefits">
            <AccordionTrigger>Benefits of USDC</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Stability</span>: Maintains a 1:1 peg with the U.S. dollar, providing
                  price stability.
                </li>
                <li>
                  <span className="font-medium">Transparency</span>: Reserves are regularly attested by independent
                  accounting firms.
                </li>
                <li>
                  <span className="font-medium">Fast Transactions</span>: Enables quick, low-cost transfers globally.
                </li>
                <li>
                  <span className="font-medium">Programmable</span>: Can be used in smart contracts and decentralized
                  applications.
                </li>
                <li>
                  <span className="font-medium">Widely Accepted</span>: Supported by many exchanges, wallets, and
                  financial service providers.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="usdc-in-funds">
            <AccordionTrigger>USDC in Money Market Funds</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-2">Using USDC in money market funds offers several advantages:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Global Accessibility</span>: Investors from around the world can
                  participate without currency conversion fees.
                </li>
                <li>
                  <span className="font-medium">24/7 Operations</span>: Unlike traditional banking, USDC transactions
                  can occur at any time, any day.
                </li>
                <li>
                  <span className="font-medium">Transparency</span>: All transactions are recorded on the blockchain,
                  providing an immutable audit trail.
                </li>
                <li>
                  <span className="font-medium">Efficiency</span>: Reduces administrative costs and settlement times
                  compared to traditional banking systems.
                </li>
                <li>
                  <span className="font-medium">Programmable Money</span>: Enables automated yield distribution and
                  investment operations through smart contracts.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="considerations">
            <AccordionTrigger>Important Considerations</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground mb-2">When using USDC for investments, keep these factors in mind:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium">Regulatory Landscape</span>: Stablecoin regulations continue to evolve
                  globally.
                </li>
                <li>
                  <span className="font-medium">Technical Considerations</span>: Ensure you're using compatible wallets
                  and following security best practices.
                </li>
                <li>
                  <span className="font-medium">Gas Fees</span>: Depending on the blockchain, transactions may incur
                  network fees.
                </li>
                <li>
                  <span className="font-medium">Custody Solutions</span>: Consider how your USDC will be stored and
                  secured.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default USDCInfoComponent

