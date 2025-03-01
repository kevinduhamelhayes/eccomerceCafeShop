"use client";
import { useFetch } from '@/hooks/useFetch';
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import { LoadingSpinner, ErrorMessage, EmptyState } from '@/components/ui/loading-states';
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState, useMemo } from "react";

export default function CategoryPage() {
  const params = useParams();
  const { categorySlug } = params;
  const { data, loading, error } = useFetch<ProductType[]>(`/api/products?filters[category][slug][$eq]=${categorySlug}&populate=*`);
  const [filterOrigin, setFilterOrigin] = useState("");

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    return filterOrigin === ""
      ? data
      : data.filter((product) => product.attributes.origin === filterOrigin);
  }, [data, filterOrigin]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <EmptyState message="No products found in this category" />;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-medium">
        Café {data[0].attributes.category.data.attributes.categoryName}
      </h1>
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <p>No hay productos con este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}