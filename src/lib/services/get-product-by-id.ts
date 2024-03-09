import { type ProductDetails } from '~/types/catalog'
import {
  ApiCategoryDetails,
  type ApiProductData,
  type ApiProductDescription,
} from '~/types/meli-api'

export interface GetProductByIdParams {
  id: string
}

export async function getProductById({ id }: GetProductByIdParams): Promise<ProductDetails | null> {
  const [product, description] = await Promise.all([
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return null
        }
        return data as ApiProductData
      }),
    fetch(`https://api.mercadolibre.com/items/${id}/description`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return null
        }
        return data as ApiProductDescription
      }),
  ])

  if (!product) {
    return null
  }

  const categoryRequest = await fetch(
    `https://api.mercadolibre.com/categories/${product.category_id}`
  )
  const categoryData = (await categoryRequest.json()) as ApiCategoryDetails | null

  const productDetails: ProductDetails = {
    author: {
      name: product?.seller_id.toString(),
    },
    categories: categoryData?.path_from_root?.map((category) => category.name) || [],
    item: {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
      },
      picture: product.pictures?.[0]?.url,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      stock_quantity: product.initial_quantity,
      description: description?.plain_text || '',
    },
  }

  return productDetails
}
