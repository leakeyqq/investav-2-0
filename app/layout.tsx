import type { Metadata } from 'next'
import './globals.css'
import Navbar from "@/components/navbar"


export const metadata: Metadata = {
  title: 'Hui Finance',
  description: 'Tokenized money market funds',
  generator: 'LEE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
        </body>
    </html>
  )
}
