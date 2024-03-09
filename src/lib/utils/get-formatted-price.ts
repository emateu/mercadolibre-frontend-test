import { DEFAULT_LOCALE, DEFAULT_CURRENCY_CODE } from '~/lib/constants'

export function getFormattedPrice(params: { amount: number; currency?: string }) {
  const { currency, amount } = params
  const formatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: 'currency',
    currency: currency || DEFAULT_CURRENCY_CODE,
  })

  return formatter.format(amount)
}
