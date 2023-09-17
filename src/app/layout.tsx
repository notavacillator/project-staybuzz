import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import NextTopLoader from 'nextjs-toploader';



export const metadata: Metadata = {
  title: 'Staybuzz',
  description: 'Homestays that Warm Your Heart, Travel that Expands Your Horizons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader   
          color="#FE595E"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={100}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"/>
          {children}
      </body>
    </html>
  )
}
