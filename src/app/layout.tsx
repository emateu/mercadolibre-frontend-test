import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getMetaTitle } from '~/lib/utils/get-meta-title'
import { Container } from '~/lib/components/ui/container'
import { Logo } from '~/lib/components/ui/logo'
import { SearchForm } from './components/search-form'
import '~/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: getMetaTitle(),
  description: `Test práctico para aspirantes al área de front-end`,
  icons: {
    icon: '/logo-small.svg',
    shortcut: '/logo-small.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex 100 flex-col h-lvh">
          <header className="bg-ml">
            <Container className="flex justify-between items-center space-x-3 md:space-x-10 py-1">
              <Logo />
              <div className="grow">
                <Suspense>
                  <SearchForm />
                </Suspense>
              </div>
            </Container>
          </header>
          <main className="grow bg-[#ebebeb] py-6">{children}</main>
          <footer className="hidden md:block p-3 text-center text-gray-500">
            Lorem ipsum dolor © 2024
          </footer>
        </div>
      </body>
    </html>
  )
}
