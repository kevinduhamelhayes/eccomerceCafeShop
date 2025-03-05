import { useState, useEffect } from 'react'

export type CategoryType = {
  id: number;
  attributes: {
    categoryName: string;
    categoryDescription: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export function useGetCategories() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/categories`;
  const [result, setResult] = useState<CategoryType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        
        // Transform the API response to match the expected format
        const transformedData = json.data.map((item: any) => ({
          id: item.id,
          attributes: {
            categoryName: item.categoryName,
            categoryDescription: item.categoryDescription,
            slug: item.slug,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            publishedAt: item.publishedAt,
            locale: item.locale
          }
        }));
        
        setResult(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    })();
  }, []);
  
  return { result, loading, error };
}