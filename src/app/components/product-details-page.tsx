import NextImage from 'next/image'
import { notFound } from 'next/navigation'
import { clsx } from 'clsx'
import { DEFAULT_LOCALE } from '~/lib/constants'
import { getProductById } from '~/lib/services/get-product-by-id'
import { getFormattedPrice } from '~/lib/utils/get-formatted-price'
import { Container } from '~/lib/components/ui/container'
import { Breadcrumbs } from '~/lib/components/ui/breadcrumbs'
import { ProductDetailsLayout } from '~/lib/components/ui/product-details-layout'

export async function ProductDetailsPage(props: { id: string }) {
  const product = await getProductById({ id: props.id })

  if (!product) {
    notFound()
  }

  return (
    <>
      <Container className="mb-6">
        <Breadcrumbs items={product.categories.map((categoryName) => ({ title: categoryName }))} />
      </Container>

      <ProductDetailsLayout
        leftColumn={
          <div className="w-full pb-[70%] relative">
            <NextImage
              fill
              alt={product.item.title}
              src={product.item.picture}
              objectFit="contain"
              sizes="(max-width: 768px) 50vw, 80vw"
              className="rounded-md"
            />
          </div>
        }
        rightColumn={
          <>
            <div className="text-sm my-3 text-gray-600">
              <span>{product.item.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
              {product.item.stock_quantity && (
                <>
                  <span className="mx-2">-</span>
                  <span>
                    {new Intl.NumberFormat(DEFAULT_LOCALE).format(product.item.stock_quantity)}
                    {product.item.stock_quantity > 1 ? ' disponibles' : ' disponible'}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-md md:text-lg">{product.item.title}</h1>
            <div className="hidden md:block text-3xl my-8">
              {getFormattedPrice(product.item.price)}
            </div>
            <BuyNowButton className="hidden md:block" />
          </>
        }
        bottom={
          <>
            <div className="block md:hidden mb-10">
              <div className="text-xl my-6">{getFormattedPrice(product.item.price)}</div>
              <BuyNowButton />
            </div>
            {product.item.description && (
              <div>
                <div className="text-lg mb-5 leading-5">Descripción del producto</div>
                <p className="text-gray-600">{product.item.description}</p>
              </div>
            )}
          </>
        }
      />
    </>
  )
}

function BuyNowButton(props: { className?: string }) {
  return (
    <button
      className={clsx(
        'w-full bg-blue-600 text-white rounded-md px-6 py-3 text-md font-medium transition',
        'focus-style focus:ring-offset-2 focus:bg-blue-700',
        props.className
      )}
    >
      Comprar
    </button>
  )
}
