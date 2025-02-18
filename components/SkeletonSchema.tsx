import React from 'react'
import { Skeleton } from './ui/skeleton'

type SkeletonSchemaProps = {
  grid: number
}

const SkeletonSchema = (props: SkeletonSchemaProps) => {
  return (
    Array.from({ length: props.grid }).map((_, index) => (
      <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
        <Skeleton className='h-[125px] w-[250px] rounded-xl' />
        <div className='space-y-2'>
        <Skeleton className='h-[4px] w-[250px] rounded-lg' />
        <Skeleton className='h-[4px] w-[250px] rounded-lg' />
        </div>
      </div>
    ))
  )
}

export default SkeletonSchema