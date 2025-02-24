"use client"
import { useFeaturedProducts } from '../api/useFeaturedProducts'
import { ResponseType } from '@/types/response'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import SkeletonSchema from './SkeletonSchema'
import Image from 'next/image'
import { ProductType, ProductCategoryType, ProductsResponse } from '@/types/product'
import { Card, CardContent } from './ui/card'
import { Expand, ShoppingCart } from 'lucide-react'
import IconButton from './IconButton'
import { useRouter } from 'next/navigation'

const FeaturedProducts = () => {
  const { result, loading, error }: ResponseType = useFeaturedProducts()
  console.log(result, loading, error)
  const Router = useRouter()

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16'>
      <h3 className='text-3xl px-6 font-bold text-center'>Featured Products</h3>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {loading && (
            <SkeletonSchema grid={3} />
          )}
          {result !== null && 
            result.map((product: ProductType) => {
              const { attributes, id } = product
              const { productName, images, price, origin, taste, productMedia } = attributes
              return (
                <CarouselItem key={id}
                 className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4 group'
                 >
                  <div className='p-1'>
                    <Card className='py-4 border border-gray-200 shadow-none'>
                      <CardContent className='flex flex-col items-center justify-center'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                          width={200}
                          height={200}
                          alt={productName}
                        />
                        <div className='absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5'>
                          <div className='flex justify-center gap-x-6'>
                            <IconButton
                              onClick={() => Router.push(`/products/${id}`)}
                              icon={<Expand size={24} />}
                              className='mb-2'
                            />
                            <IconButton
                              onClick={() => Router.push(`/cart`)}
                              icon={<ShoppingCart size={24} />}
                              className='mb-2'
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className='flex flex-col gap-2 px-8'>
                        <div className='flex justify-between items-center'>
                          <h3 className='text-lg font-bold'>{productName}</h3>
                          <span className='font-semibold'>${price}</span>
                        </div>
                        <div className='flex gap-4 items-center'>
                          <p className='px-2 text-white bg-black rounded-full w-fit'>{taste}</p>
                          <p className='px-2 text-white bg-yellow-900 rounded-full w-fit'>{origin}</p>
                        </div> 
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        <CarouselPrevious className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700' />
        <CarouselNext className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700' />
      </Carousel>
    </div>
  )
}

export default FeaturedProducts
