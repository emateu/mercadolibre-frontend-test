import type { Metadata } from 'next'
import { getProductById } from '~/lib/services/get-product-by-id'
import { getMetaTitle } from '~/lib/utils/get-meta-title'
import { ProductDetailsPage } from '~/app/components/product-details-page'

export const revalidate = 600 // 10 minutes
export const fetchCache = 'force-cache'

type Props = {
  params: { id: string }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const product = await getProductById({ id: props.params.id })

  return {
    title: getMetaTitle(product?.item.title),
    description: product?.item.description,
    openGraph: {
      images: [product?.item.picture ?? ''],
    },
  }
}

export default async function Page(props: Props) {
  return <ProductDetailsPage id={props.params.id} />
}
