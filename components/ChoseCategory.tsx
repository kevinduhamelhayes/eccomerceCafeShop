"use client"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const ChoseCategory = () => {
  return (
    <div className='p-5 sm:p-20 text-center'>
      <h2 className='uppercase font-black text-2xl text-primary'>elige tu categoria favorita</h2>
      <h3 className='mt-3 font-semibold '>elige entre una gran variedad de categorias</h3>
      <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5 '>
        <Link href='#' className={buttonVariants()}> comprar ahora</Link>
        <Link href='#' className={buttonVariants({variant: "outline"})}> ver mas ofertas</Link>
      </div>
      </div>
  )
}
export default ChoseCategory