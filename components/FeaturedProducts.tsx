"use client"
import React from 'react'
import { useFeaturedProducts } from '../api/useFeaturedProducts'
import { ResponseType } from './types/response'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import  SkeletonSchema  from './SkeletonSchema'
import Image from 'next/image'
import { ProductType, ProductCategoryType, ProductsResponse } from './types/product'
import { Card, CardContent } from './ui/card'
import { Expand, ShoppingCart } from 'lucide-react'
import { IconButton } from './IconButton'
import { useRouter } from 'next/navigation'



const FeaturedProducts = () => {
  const { result, loading, error } : ResponseType = useFeaturedProducts()
  console.log(result, loading, error)
  const Router = useRouter()
  return (
    <div className='bg-gray-300 dark:bg-primary'>
      <h3 className='text-2xl font-bold text-center'>
        Featured Products
      </h3>
      <Carousel className='w-full max-w-7xl mx-auto'>
          <CarouselContent className='-ml-2 md:-ml-4'>
            {loading && (
              <SkeletonSchema grid={3} />
            )}
            {!loading && result && result.map((product: ProductType) => {
              const { attributes, id } = product
              const { productName, price, taste,productMedia.thumbnail.url } = attributes
              return (
                <CarouselItem key={id} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4 group'>
                <div className='p-1'>
                  <Card className='py-4 border border-gray-200 shadow-none'>
                    <CardContent className='flex flex-col items-center justify-center'>
                          <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${}`} alt="image featured" />
                          <div className='flex flex-col items-center justify-center'>
                            <IconButton 
                            onClick = {() => Router.push(`/products/${id}`)}
                            icon={<Expand size={24} />}
                            className='mb-2'
                            />

                            <IconButton
                            onClick = {() => Router.push(`/cart`)}
                            icon= {<ShoppingCart size={24} />}
                            className='mb-2'
                            />
                            
                          </div>
                        </CardContent>
                        <div className='flex justify-between gap-4'>
                          <h3 className='text-lg font-bold'>{productName}</h3>
<div className='flex gap-4 items-center justify-between'>
  <p className='px-2 text-white bg-black rounded-full w-fit'>{taste}</p>
  <p className='px-2 text-white bg-yellow-900 rounded-full w-fit'></p>
</div>
                        </div>
                      </Card>
                  
                    
                </div>
                </CarouselItem>
              )
            }
            )}
            
          </CarouselContent>
          <CarouselPrevious
          className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'  
          />
          <CarouselNext
          className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
          />
      </Carousel>
    </div>
  )
}


export default FeaturedProducts