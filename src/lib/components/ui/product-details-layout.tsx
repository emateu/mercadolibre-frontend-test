import type { ReactNode } from 'react'
import { Container } from '~/lib/components/ui/container'

interface ProductDetailsLayoutProps {
  leftColumn: ReactNode
  rightColumn: ReactNode
  bottom: ReactNode
}

export function ProductDetailsLayout({
  rightColumn,
  leftColumn,
  bottom,
}: ProductDetailsLayoutProps) {
  return (
    <Container className="bg-white rounded-sm shadow-xl">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full order-2 md:w-3/5 md:order-1 md:px-10 md:py-8">{leftColumn}</div>
        <div className="w-full order-1 px-0 md:w-2/5 md:order-2 pt-4 md:pt-10 md:pr-10">
          {rightColumn}
        </div>
      </div>
      <div className="md:px-10 pb-10">{bottom}</div>
    </Container>
  )
}
