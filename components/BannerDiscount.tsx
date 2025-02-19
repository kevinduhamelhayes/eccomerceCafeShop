import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const BanerDiscount = () => {
  return (
    <div className='p-5 sm:p-20 text-center'>
      <h2 className='uppercase font-black text-2xl text-primary'>consigue hasta un 20 % de descuento</h2>
      <h3 className='mt-3 font-semibold '>-20% al gastar mas de 100 euros usa mi codigo de descuento kevinduhamel</h3>
      <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5 '>
        <Link href='#' className={buttonVariants()}> comprar ahora</Link>
        <Link href='#' className={buttonVariants({variant: "outline"})}> ver mas ofertas</Link>
      </div>
      </div>
  )
}

export default BanerDiscount