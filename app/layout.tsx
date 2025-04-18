import type { Metadata } from 'next'
import { CenterLayout } from '~/_lib/components/layout/grid'
import { Nav } from '~/_lib/components/layout/nav'
import '~/_lib/global-style.css'

export const metadata: Metadata = {
  title: 'Robust Lobsters',
  description: 'Robust Lobsters',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CenterLayout>
          <Nav />
          {children}
        </CenterLayout>
      </body>
    </html>
  )
}
