"use client"
import { useFetch } from '@/hooks/useFetch';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { LoadingSpinner, ErrorMessage, EmptyState } from './ui/loading-states';
import Image from 'next/image';
import { ProductType } from '@/types/product';
import { Card, CardContent } from './ui/card';
import { Expand, ShoppingCart } from 'lucide-react';
import IconButton from './IconButton';
import { useRouter } from 'next/navigation';
import { memo, useCallback } from 'react';

const ProductCard = memo(({ product }: { product: ProductType }) => {
  const Router = useRouter();
  const { attributes, id } = product;
  const { productName, images } = attributes;

  const handleProductClick = useCallback(() => {
    Router.push(`/products/${id}`);
  }, [Router, id]);

  const handleCartClick = useCallback(() => {
    Router.push(`/cart`);
  }, [Router]);

  return (
    <CarouselItem className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4 group'>
      <div className='p-1'>
        <Card className='py-4 border border-gray-200 shadow-none'>
          <CardContent className='flex flex-col items-center justify-center'>
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
              width={200}
              height={200}
              alt={productName}
            />
            <div className='absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5'>
              <div className='flex justify-center gap-x-6'>
                <IconButton
                  onClick={handleProductClick}
                  icon={<Expand size={24} />}
                  className='mb-2'
                />
                <IconButton
                  onClick={handleCartClick}
                  icon={<ShoppingCart size={24} />}
                  className='mb-2'
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
});

ProductCard.displayName = 'ProductCard';

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch<ProductType[]>('/api/products?filters[featured][$eq]=true&populate=*');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <EmptyState message="No featured products found" />;

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16'>
      <h3 className='text-3xl px-6 font-bold text-center'>Featured Products</h3>
      <Carousel>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
