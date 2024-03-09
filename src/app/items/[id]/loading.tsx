import { Container } from '~/lib/components/ui/container'
import { Breadcrumbs } from '~/lib/components/ui/breadcrumbs'
import { ProductDetailsLayout } from '~/lib/components/ui/product-details-layout'

export default function Loading() {
  return (
    <>
      <Container className="mb-6">
        <Breadcrumbs />
      </Container>

      <ProductDetailsLayout
        leftColumn={
          <div className="animate-pulse w-full relative bg-white rounded-md mt-4 md:my-0 ">
            <div className="w-full pb-[60%] md:pb-[70%] bg-gray-300 rounded-sm" />
          </div>
        }
        rightColumn={
          <div className="animate-pulse">
            <div className="text-lg my-2 space-y-2 md:my-3 md:space-y-3">
              <div className="w-[50%] bg-gray-300 h-4 rounded-md mb-6" />
              <div className="w-[80%] bg-gray-300 h-4 rounded-md" />
              <div className="w-[65%] bg-gray-300 h-4 rounded-md" />
              <div className="hidden md:block w-[45%] bg-gray-300 h-4 rounded-md" />
            </div>
            <div className="hidden md:block text-3xl my-8">
              <div className="w-[60%] bg-gray-300 h-8 rounded-md" />
            </div>
            <div className="hidden md:block w-[100%] bg-gray-300 h-12 rounded-md" />
          </div>
        }
        bottom={
          <>
            <div className="block md:hidden mb-10">
              <div className="text-3xl mt-4 mb-6">
                <div className="w-[60%] bg-gray-300 h-8 rounded-md" />
              </div>
              <div className="w-[100%] bg-gray-300 h-12 rounded-md" />
            </div>
            <div className="animate-pulse space-y-3">
              <div className="w-[30%] bg-gray-300 h-6 rounded-md" />
              <div className="w-[70%] bg-gray-300 h-3 rounded-md" />
              <div className="w-[80%] bg-gray-300 h-3 rounded-md" />
              <div className="w-[90%] bg-gray-300 h-3 rounded-md" />
            </div>
          </>
        }
      />
    </>
  )
}
