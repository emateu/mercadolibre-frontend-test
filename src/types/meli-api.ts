export interface ApiSearchResults {
  results?: ApiResultItem[]
  filters?: ApiFilterItem[]
}

export interface ApiFilterItem {
  id: string
  name: string
  type: string
  values?: Array<{
    id: string
    name: string
    path_from_root?: Array<{
      id: string
      name: string
    }>
  }>
}

export interface ApiProductDescription {
  text: string
  plain_text: string
  last_updated: string
  date_created: string
  snapshot: {
    url: string
    width: number
    height: number
    status: string
  }
}

export interface ApiProductData {
  id: string
  site_id: string
  title: string
  seller_id: number
  category_id: string
  official_store_id: number
  price: number
  base_price: number
  original_price: number
  currency_id: string
  initial_quantity: number
  sale_terms: Array<{
    id: string
    name: string
    value_id: null
    value_name: string
    value_struct: unknown
    values: Array<{
      id: null
      name: string
      struct: unknown
    }>
    value_type: string
  }>
  buying_mode: string
  listing_type_id: string
  condition: string
  permalink: string
  thumbnail_id: string
  thumbnail: string
  pictures: Array<{
    id: string
    url: string
    secure_url: string
    size: string
    max_size: string
    quality: string
  }>
  video_id: null
  descriptions: []
  accepts_mercadopago: boolean
  non_mercado_pago_payment_methods: []
  shipping: {
    mode: string
    methods: []
    tags: string[]
    dimensions: null
    local_pick_up: boolean
    free_shipping: boolean
    logistic_type: string
    store_pick_up: boolean
  }
  international_delivery_mode: string
  seller_address: {
    city: {
      id: string
      name: string
    }
    state: {
      id: string
      name: string
    }
    country: {
      id: string
      name: string
    }
    search_location: {
      city: {
        id: string
        name: string
      }
      state: {
        id: string
        name: string
      }
    }
    id: number
  }
  seller_contact: null
  location: {}
  coverage_areas: []
  attributes: Array<{
    id: string
    name: string
    value_id: null
    value_name: string
    values: Array<{
      id: string
      name: string
      struct: null | unknown
    }>
    value_type: string
  }>
  listing_source: string
  variations: []
  status: string
  sub_status: []
  tags: string[]
  warranty: string
  catalog_product_id: string
  domain_id: string
  parent_item_id: null
  deal_ids: string[]
  automatic_relist: boolean
  date_created: string
  last_updated: string
  health: null
  catalog_listing: boolean
}

export interface ApiResultItem {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: string
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price: number
  sale_price: null
  available_quantity: number
  official_store_id: null
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  shipping: {
    store_pick_up: boolean
    free_shipping: boolean
    logistic_type: string
    mode: string
    tags: string[]
    benefits: null
    promise: null
  }
  stop_time: string
  seller: {
    id: number
    nickname: string
  }
  attributes: Array<{
    id: string
    name: string
    value_id: null
    value_name: string
    attribute_group_id: string
    attribute_group_name: string
    value_struct: null
    values: [
      {
        id: null
        name: string
        struct: null
        source: number
      },
    ]
    source: number
    value_type: string
  }>

  installments: null | {
    quantity: number
    amount: number
    rate: number
    currency_id: string
  }
  winner_item_id: null
  catalog_listing: boolean
  discounts: null
  promotions: []
  inventory_id: string
}

export interface ApiCategoryDetails {
  id: string
  name: string
  picture: string
  permalink: null | string
  total_items_in_this_category: number
  path_from_root?: Array<{
    id: string
    name: string
  }>
}
