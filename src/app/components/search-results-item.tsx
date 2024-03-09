import NextLink from 'next/link'
import NextImage from 'next/image'
import { SearchResultItem } from '~/types/catalog'
import { getFormattedPrice } from '~/lib/utils/get-formatted-price'

interface ProductListItemProps {
  item: SearchResultItem
}

export function SearchResultsItem({ item }: ProductListItemProps) {
  return (
    <NextLink
      href={`/items/${item.id}`}
      className="flex rounded-sm p-6 space-x-6 items-center bg-white shadow focus-style"
    >
      <div className="flex-shrink-0 w-24 h-24 relative">
        <NextImage
          fill
          className="object-contain"
          sizes="200px"
          src={item.picture}
          alt={item.title}
        />
      </div>
      <div className="flex-grow space-y-2">
        <div className="flex space-x-3 items-center">
          <span className="text-lg">{getFormattedPrice(item.price)}</span>

          {item.free_shipping && (
            <div className="bg-green-400 rounded-full p-1 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
          )}
        </div>
        <div>{item.title}</div>
        <div className="text-xs text-gray-500">{item.author.name}</div>
      </div>
    </NextLink>
  )
}
