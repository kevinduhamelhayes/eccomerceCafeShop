import { useEffect, useState } from "react"
import { ProductType } from "@/types/product"

export function useFeaturedProducts() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[featured][$eq]=true`;
  const [result, setResult] = useState<ProductType[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        
        // Transform the API response to match the expected format
        const transformedData = json.data.map((item: any) => ({
          id: item.id,
          attributes: {
            productName: item.productName,
            slug: item.slug,
            productDescription: item.productDescription,
            featured: item.featured,
            price: item.price,
            taste: item.taste,
            origin: item.origin,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            publishedAt: item.publishedAt,
            locale: item.locale,
            // Since there's no images in the API response, create a placeholder
            productMedia: {
              data: [{
                id: 1,
                attributes: {
                  url: `/placeholder-coffee.jpg`,
                  formats: {
                    thumbnail: {
                      url: `/placeholder-coffee.jpg`
                    }
                  }
                }
              }]
            }
          }
        }));
        
        setResult(transformedData)
        setLoading(false)
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error))
        setLoading(false)
      }
    })()
  }, [url])

  return { result, loading, error }
}