import { BRAND_NAME } from '~/lib/constants'

const META_TITLE_SUFFIX = `${BRAND_NAME} Front-End Test`

export const getMetaTitle = (title?: string) => {
  if (!title) {
    return META_TITLE_SUFFIX
  }

  return `${title} | ${META_TITLE_SUFFIX}`
}
