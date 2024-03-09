import { Container } from '~/lib/components/ui/container'
import { Breadcrumbs } from '~/lib/components/ui/breadcrumbs'

export default function Loading() {
  return (
    <>
      <Container className="mb-6">
        <Breadcrumbs />
      </Container>
      <Container className="space-y-4">
        {new Array(4).fill(null).map((_, index) => {
          return (
            <div key={index} className="rounded-sm p-6 bg-white shadow">
              <div className="w-full h-24">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                  <div className="w-20 bg-gray-300 h-20 rounded-sm" />
                  <div className="flex grow flex-col space-y-3">
                    <div className="w-[20%] bg-gray-300 h-6 rounded-md" />
                    <div className="hidden md:block w-[70%] bg-gray-300 h-6 rounded-md" />
                    <div className="md:hidden w-[70%] bg-gray-300 h-5 rounded-md" />
                    <div className="md:hidden w-[70%] bg-gray-300 h-5 rounded-md" />
                    <div className="w-[15%] bg-gray-300 h-3 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </>
  )
}
