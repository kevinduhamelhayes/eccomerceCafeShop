import { Button } from "@/components/ui/button";
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarouselTextBaner from "@/components/CarouselTextBaner";
import FeaturedProducts from "@/components/FeaturedProducts";
import BannerDiscount from "@/components/BannerDiscount";
import ChoseCategory from "@/components/ChoseCategory";
import BannerProduct from "@/components/BannerProduct";



export default function Home() {
  return (
  <main>
    <Navbar />
    <CarouselTextBaner />
    <FeaturedProducts />
    <BannerDiscount />
    <ChoseCategory />
    <BannerProduct />
    <Button>Click me</Button>
    <Footer />
  </main>
  );
}
