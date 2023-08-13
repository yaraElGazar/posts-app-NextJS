import '../Styles/globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Navbar from '@/Components/Navbar'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Posts App',
  description: 'Simple Posts App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
