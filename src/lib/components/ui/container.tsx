import { type ReactNode } from 'react'
import { clsx } from 'clsx'

export interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={clsx('max-w-4xl w-full mx-auto px-3 md:px-0', className)}>{children}</div>
}
