import type { NextRequest } from 'next/server'
import { getProductById } from '~/lib/services/get-product-by-id'

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id
  const product = await getProductById({ id })
  return Response.json(product)
}
