import { catalogSearch } from '~/lib/services/catalog-search'
import { Container } from '~/lib/components/ui/container'
import { Breadcrumbs } from '~/lib/components/ui/breadcrumbs'
import { SearchResultsItem } from './search-results-item'
import { SearchEmptyState } from './search-empty-state'

export async function SearchResultsPage(props: { query: string }) {
  const searchResults = await catalogSearch({ query: props.query })

  if (!searchResults.items.length) {
    return <SearchEmptyState />
  }

  return (
    <>
      <Container className="mb-6">
        <Breadcrumbs
          items={searchResults.categories.map((categoryName) => ({ title: categoryName }))}
        />
      </Container>

      <Container className="space-y-4">
        {searchResults.items.map((item) => {
          return <SearchResultsItem item={item} key={item.id} />
        })}
      </Container>
    </>
  )
}
