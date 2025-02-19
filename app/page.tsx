
import CarouselTextBaner from "@/components/CarouselTextBaner";
import FeaturedProducts from "@/components/FeaturedProducts";
import BannerDiscount from "@/components/BannerDiscount";
import ChoseCategory from "@/components/ChoseCategory";
import BannerProduct from "@/components/BannerProduct";



export default function Home() {
  return (
  <main>

    <CarouselTextBaner />
    <FeaturedProducts />
    <BannerDiscount />
    <ChoseCategory />
    <BannerProduct />

  </main>
  );
}
