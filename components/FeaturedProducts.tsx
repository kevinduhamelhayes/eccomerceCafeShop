"use client"
import React from 'react'
import { useFeaturedProducts } from '../api/useFeaturedProducts'
import { ResponseType } from './types/response'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import  SkeletonSchema  from './SkeletonSchema'
import Image from 'next/image'
import { ProductType, ProductCategoryType, ProductsResponse } from './types/product'
import { Card, CardContent } from './ui/card'
import { Expand, ShoppingCart } from 'lucide-react'



const FeaturedProducts = () => {
  const { result, loading, error } : ResponseType = useFeaturedProducts()
  console.log(result, loading, error)
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
                            <Expand size={24} />
                            <ShoppingCart size={24} />
                          </div>
                        </CardContent>
                      </Card>
                  
                    
                </div>
                </CarouselItem>
              )
            }
            )}

          </CarouselContent>
      </Carousel>
    </div>
  )
}


export default FeaturedProducts