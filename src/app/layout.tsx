import type { Metadata } from 'next'
import './globals.css'  
import { arimo } from './ui/fonts'

export const metadata: Metadata = {
  title: "CEN's Website",
  description: 'Portfolio of Vincentius Adisurya Fransisco Antu — IoT Engineer, Embedded Systems, Computer Vision',
  icons: {
    icon: '/CEN-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        {children}
      </body>
    </html>
  )
}