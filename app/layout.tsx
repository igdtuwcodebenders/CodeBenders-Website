import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Manrope } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CodeBenders - Tech Society",
  description: "Futuristic Tech Society at IGDTUW",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${manrope.variable} dark`}>
      
      <body className="cyber-grid">{children}</body>
    </html>
  )
}
