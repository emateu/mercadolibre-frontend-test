import Image from 'next/image'
import NextLink from 'next/link'
import { BRAND_NAME } from '~/lib/constants'

export function Logo() {
  return (
    <NextLink
      className="w-[60px] h-[50px] md:w-[150px] md:h-[60px] block relative focus-style"
      href="/"
    >
      <Image
        src="/logo-small.svg"
        alt={`Logo de ${BRAND_NAME}`}
        fill
        className="bg-contain block md:hidden"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src="/logo.svg"
        alt={`Logo de ${BRAND_NAME}`}
        fill
        className="bg-contain hidden md:block"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </NextLink>
  )
}
