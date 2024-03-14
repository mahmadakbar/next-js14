import '@assets/styles/globals.scss'

import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Container from '@components/organisms/Container'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Home | Javan Test',
    template: '%s | Javan Test',
  },
  description: 'Javan Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
