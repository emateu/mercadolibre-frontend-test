import type { Metadata } from 'next'
import { getMetaTitle } from '~/lib/utils/get-meta-title'
import { SearchResultsPage } from '~/app/components/search-results-page'

export const revalidate = 600 // 10 minutes
export const fetchCache = 'force-cache'

type Props = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/page
  searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata(props: Props): Metadata {
  const search = `${props?.searchParams.search || ''}`

  const prettifySearch = search
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')

  return {
    title: getMetaTitle(prettifySearch),
    description: `Resultados de búsqueda para ${prettifySearch}.`,
  }
}

export default async function Page(props: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const search = `${props?.searchParams.search || ''}`

  return <SearchResultsPage query={search} />
}
