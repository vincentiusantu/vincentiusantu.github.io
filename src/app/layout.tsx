import type { Metadata } from 'next'
import './globals.css'  
import { arimo } from './ui/fonts'

export const metadata: Metadata = {
  title: 'CEN\'s Website',
  description: "Generated by create next app",
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
        {/* <div className={`${arimo.className} text-sm pb-1 flex justify-center`}>
                Copyright © 2023 Vincentius Adisurya Fransisco Antu, All Rights Reserved
        </div> */}
      </body>
    </html>
  )
}
