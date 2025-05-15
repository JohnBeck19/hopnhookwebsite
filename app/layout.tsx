import type { Metadata } from 'next'
import { VT323 } from 'next/font/google'
import './globals.css'

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HopNHook',
  description: 'Hop around and hook some fish!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vt323.className} style={{ fontSize: '22px', letterSpacing: '1px' }}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 