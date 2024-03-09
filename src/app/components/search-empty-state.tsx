import { Container } from '~/lib/components/ui/container'
import { Breadcrumbs } from '~/lib/components/ui/breadcrumbs'
import { EmptyStateIllustration } from '~/lib/components/ui/empty-state-illustration'

export function SearchEmptyState() {
  return (
    <>
      <Container className="mb-6">
        <Breadcrumbs />
      </Container>

      <Container>
        <div className="flex flex-col rounded-sm p-10 bg-white shadow items-center space-y-6">
          <div className="text-gray-600 font-medium">No hay resultados para tu búsqueda.</div>
          <div>
            <EmptyStateIllustration />
          </div>
          <div className="text-gray-500 font-medium">Por favor, intentá con otro término.</div>
        </div>
      </Container>
    </>
  )
}
