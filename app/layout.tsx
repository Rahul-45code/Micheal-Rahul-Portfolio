import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AnimatedNavbar from '@/components/animated-navbar'
import AnimatedFooter from '@/components/animated-footer'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Micheal Rahul | Data Analyst & Full-Stack Developer',
  description: 'Premium portfolio showcasing data analysis and Python full-stack development expertise with AI integration',
  generator: 'v0.app',
  keywords: ['Data Analyst', 'Python Developer', 'Full-Stack', 'Portfolio', 'AI'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#00ff88',
  },
 icons: {
  icon: '/favicon.ico',
},

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
   
        <AnimatedNavbar />
        <main className="pt-16">
          {children}
        </main>
        <AnimatedFooter />
        <Analytics />
      </body>
    </html>
  )
}
