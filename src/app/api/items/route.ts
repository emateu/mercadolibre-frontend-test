import { type NextRequest } from 'next/server'
import { catalogSearch } from '~/lib/services/catalog-search'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('search') || ''
  const searchResults = await catalogSearch({ query })
  return Response.json(searchResults)
}
