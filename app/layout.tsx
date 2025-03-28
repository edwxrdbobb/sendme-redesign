import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SendMe SL',
  description: 'Created by Edward Bobb-Kamara',
  generator: 'null',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
