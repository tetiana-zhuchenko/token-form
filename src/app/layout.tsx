import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import './globals.css'

export const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Create your own crypto token',
  description: 'Test Task',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${robotoFont.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
