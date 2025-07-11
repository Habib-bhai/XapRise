import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
       {children}
       <Toaster />
      </body>
    </html>
  )
}

