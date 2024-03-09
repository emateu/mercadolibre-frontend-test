import type { ApiSearchResults } from '~/types/meli-api'
import type { SearchResults } from '~/types/catalog'

const CATEGORY_FILTER_ID = 'category'
const LIMIT = 4

export interface CatalogSearchParams {
  query: string
  limit?: number
}

export async function catalogSearch({
  query,
  limit = LIMIT,
}: CatalogSearchParams): Promise<SearchResults> {
  const req = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`)
  const data: ApiSearchResults = await req.json()
  const categoryFilter = data.filters?.find((filter) => filter.id === CATEGORY_FILTER_ID)

  const categories =
    categoryFilter?.values?.[0]?.path_from_root?.map((category) => category.name) || []

  const items =
    data.results?.map((item) => {
      return {
        author: {
          name: item.seller.nickname,
        },
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      }
    }) || []

  return {
    categories,
    items,
  }
}
