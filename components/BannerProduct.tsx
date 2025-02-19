import { Link } from 'lucide-react'
import React from 'react'
import { buttonVariants } from './ui/button'

const BannerProduct = () => {
  return (
    <>
      <div className='mt-4 text-center'>
        <p>sumergete en una experiencia unica</p>
        <h4 className='mt-2 text-5xl font-extrabold uppercase'>
          cafe exquisito
        </h4>
        <p className='mt-2 text-lg font-semibold'>
          despierta tus sentidos
        </p>
        <Link href='/shop' className="px-4 py-2 shadow-lg text-black">comprar ahora</Link>
        <div className='h-[350px] md:h-[600px] bg-[url("/slider-image.jpg")] bg-center mt-5'></div>
      </div>
    </>
  )
}

export default BannerProduct
