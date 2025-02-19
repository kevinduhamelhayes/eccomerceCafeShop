"use client"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { useGetCategories } from "@/api/getProducts"
import { CategoryType } from "@/types/category"
import { ResponseType } from "./types/response"

const ChoseCategory = () => {
  const { result, loading, error }: ResponseType = useGetCategories()
  console.log(result, loading, error)

  return (
  <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-4'>
      <h3 className='uppercase font-black text-2xl text-primary'>elige tu categoria favorita</h3>
      {!loading && result !== null &&( result.map((category: CategoryType) => {
        <Link
          key={category.id}
          href={`/category/${category.attributes.slug}`}
          className=" relative max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
        >
          <img src="`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.attributes.mainImage}"
           alt="category.attributes.categoryName"
           className=" max-w-[270px] transition duration-300 transform hover:scale-105 ease-in-out rounded-lg"
           />
           <p className="absolute w-full py-2 text-lg font-bold text-center">{category.attributes.categoryName}</p>
        </Link>
        )
      })}
      <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5 '>
        <Link href='#' className={buttonVariants()}> comprar ahora</Link>
        <Link href='#' className={buttonVariants({variant: "outline"})}> ver mas ofertas</Link>
    </div>
  )
}
export default ChoseCategory