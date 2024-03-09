import { DocumentIcon } from '@heroicons/react/24/outline'
import { Container } from '~/lib/components/ui/container'
import { Breadcrumbs } from '~/lib/components/ui/breadcrumbs'

export function HomePage() {
  return (
    <>
      <div className="px-2">
        <Container className="mb-6">
          <Breadcrumbs />
        </Container>
      </div>

      <Container>
        <div className="rounded-sm p-10 bg-white">
          <h1 className="text-xl mb-8">
            Bienvenido al test práctico para aspirantes al área de front-end.
          </h1>
          <div className="space-y-6">
            <p>
              <a
                className="inline-flex align-middle text-link"
                href="/front-end-test-practico.pdf"
                target="_blank"
              >
                <DocumentIcon className="inline w-6 h-6 mr-1" /> Descargar el PDF con las consignas
                del test
              </a>
            </p>
            <p>La aplicación consta de tres componentes principales:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>la caja de búsqueda</li>
              <li>la visualización de resultados</li>
              <li>y la descripción del detalle del producto</li>
            </ul>

            <p>Se tuvo en cuenta:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>Usabilidad</li>
              <li>SEO</li>
              <li>Performance</li>
              <li>Escalabilidad</li>
            </ul>

            <p>Links rápidos:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>
                <a className="text-link" href="/items?search=iphone">
                  Resultados de búsqueda
                </a>
              </li>
              <li>
                <a className="text-link" href="/items/MLA1399527826">
                  Detalle de producto
                </a>
              </li>
            </ul>

            <p>Endpoints:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>
                <a className="text-link" href="/api/items?search=macbook">
                  {'/api/items?search={query}'}
                </a>
              </li>
              <li>
                <a className="text-link" href="/api/items/MLA1292492928">
                  {'/api/items/{itemId}'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
