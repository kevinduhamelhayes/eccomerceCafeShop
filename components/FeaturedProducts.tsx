"use client"
import React from 'react'
import { useFeaturedProducts } from '../api/useFeaturedProducts'
import { ResponseType } from './types/response'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import  SkeletonSchema  from './SkeletonSchema'



const FeaturedProducts = () => {
  const { result, loading, error } : ResponseType = useFeaturedProducts()
  console.log(result, loading, error)
  return (
    <div>
      <h3 className='text-2xl font-bold text-center'>
        Featured Products
      </h3>
      <Carousel
      >
<CarouselContent className='-ml-2 md:-ml-4'>
  {loading && (
    <SkeletonSchema grid={3} />
  )}
  <CarouselItem>

  </CarouselItem>
</CarouselContent>

      </Carousel>
    </div>
  )
}

export default FeaturedProducts