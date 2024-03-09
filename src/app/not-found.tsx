import NextLink from 'next/link'
import { Container } from '~/lib/components/ui/container'
import { EmptyStateIllustration } from '~/lib/components/ui/empty-state-illustration'

export default function NotFoundPage() {
  return (
    <Container className="flex flex-col items-center space-y-10 bg-white rounded-md shadow-2xl px-10 py-12">
      <EmptyStateIllustration />
      <h1 className="text-2xl">Parece que esta página no existe</h1>
      <p>
        <NextLink className="text-link" href="/">
          Ir a la página principal
        </NextLink>
      </p>
    </Container>
  )
}
