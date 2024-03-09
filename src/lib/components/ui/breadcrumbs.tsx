import NextLink from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export interface BreadcrumbsProps {
  items?: Array<{
    title: string
    href?: string
  }>
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="w-full overflow-auto">
      <nav className="flex py-1 px-2" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-1">
          <li>
            <div className="flex items-center">
              <NextLink href="/" className="text-sm font-medium text-gray-600 focus-style">
                Home
              </NextLink>
            </div>
          </li>
          {items?.map((el) => {
            return (
              <li key={el.title}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <NextLink
                    className="ml-1 text-sm font-medium text-gray-600 whitespace-nowrap focus-style"
                    href={el.href || '/items?search=' + encodeURIComponent(el.title)}
                  >
                    {el.title}
                  </NextLink>
                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
