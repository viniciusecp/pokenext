import '../styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'PokeNext',
  description: 'Pokedex criada em Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>

      <body>
        <Navbar />

        <main className="main-container">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
