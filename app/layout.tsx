import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import ProviderTanTask from '@/util/peovider-TanTask';
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight:["400","700"],
  style:"normal",
  display:"swap"
})

export const metadata: Metadata = {
  title: {
    default: "Poets",
    template: "Poets | %s"
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ProviderTanTask>
          {children}
        </ProviderTanTask>
      </body>
    </html>
  )
}
