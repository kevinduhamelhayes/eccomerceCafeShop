import { Button } from "@/components/ui/button";
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarouselTextBaner from "@/components/CarouselTextBaner";
import FeaturedProducts from "@/components/FeaturedProducts";


export default function Home() {
  return (
  <main>
    <Navbar />
    <CarouselTextBaner />
    <FeaturedProducts />
    <Button>Click me</Button>
    <Footer />
  </main>
  );
}
