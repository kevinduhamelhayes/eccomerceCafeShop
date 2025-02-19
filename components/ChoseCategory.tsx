"use client"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { useGetCategories } from "@/api/useGetCategories"
import { CategoryType } from "@/types/category"
import { ResponseType } from "@/types/response"

const ChoseCategory = () => {
  const { result, loading, error }: ResponseType = useGetCategories()
  console.log(result, loading, error)

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
    <h3 className="px-6 pb-4 text-3xl sm:pb-8">
      Elige tu categoría favorita
    </h3>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {!loading && result !== null && result?.map((category: CategoryType) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
         className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
        >
          <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.categoryMedia.url}`}
        alt="category.attributes.categoryName"
        className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
          />
          <p className="absolute w-full py-2 text-lg font-bold text-center text-black bottom-5 backdrop-blur-lg">
                {category.categoryName}
              </p>
        </Link>
      ))}
      </div>
      <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5 '>
        <Link href='#' className={buttonVariants()}> comprar ahora</Link>
        <Link href='#' className={buttonVariants({variant: "outline"})}> ver mas ofertas</Link>
      </div>

    </div>
  )
}

export default ChoseCategory