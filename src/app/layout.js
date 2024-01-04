import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// set a proper seo header here
// refer to the documentation here: [ https://nextjs.org/docs/app/building-your-application/optimizing/metadata ]
// please set opengraph and 'default', 'template', 'absolute' attributes for each metadata attribute.

export const metadata = {
  title: 'To Do List NextJS',
  description: 'Simple To Do List with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
