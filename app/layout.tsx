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
          {/* Report a Bug Button - Top Right */}
          <a
            href="/report-bug"
            className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-[#e9e7d1] border-2 border-black shadow-lg px-5 py-2 rounded-xl hover:bg-[#ffe680] transition-all font-bold text-[#2d3e1c] text-lg"
            style={{ textShadow: '1px 1px 0 #fff' }}
            title="Report a Bug"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
              <path d="M13 2.05V4.06c.32.04.65.1.96.18l.41-1.02a1 1 0 1 1 1.86.72l-.41 1.02c.6.32 1.16.73 1.65 1.22l.72-.72a1 1 0 1 1 1.41 1.41l-.72.72c.49.49.9 1.05 1.22 1.65l1.02-.41a1 1 0 1 1 .72 1.86l-1.02.41c.08.31.14.64.18.96h2.01a1 1 0 1 1 0 2h-2.01a7.01 7.01 0 0 1-13.92 0H2.05a1 1 0 1 1 0-2h2.01c.04-.32.1-.65.18-.96l-1.02-.41a1 1 0 1 1 .72-1.86l1.02.41c.32-.6.73-1.16 1.22-1.65l-.72-.72A1 1 0 0 1 6.34 4.7l.72.72c.49-.49 1.05-.9 1.65-1.22l-.41-1.02a1 1 0 1 1 1.86-.72l.41 1.02c.31-.08.64-.14.96-.18V2.05a1 1 0 1 1 2 0ZM12 6a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0v-2a5 5 0 0 0-5-5Z" />
            </svg>
            Report a Bug
          </a>
          {children}
        </main>
      </body>
    </html>
  )
} 