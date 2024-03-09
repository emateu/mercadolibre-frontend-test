export interface SearchResults {
  categories: string[]
  items: SearchResultItem[]
}

export interface SearchResultItem {
  author: {
    name: string
  }
  id: string
  title: string
  price: {
    currency: string
    amount: number
  }
  picture: string
  condition: string
  free_shipping: boolean
}

export interface ProductDetails {
  author: {
    name: string
  }
  categories: string[]
  item: {
    id: string
    title: string
    price: {
      currency: string
      amount: number
    }
    picture: string
    condition: string
    free_shipping: boolean
    stock_quantity: number
    description: string
  }
}
