"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { CardContent, Card } from './ui/card'
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTextBaner = [
  {
    id: "1",
    title: "Amplia Variedad de Productos",
    description: "Encuentra todo lo que necesitas en un solo lugar. Ofrecemos una extensa gama de productos, desde artículos de uso diario hasta las últimas novedades, ¡todo al alcance de un clic!",
    link: "#variedad"
  },
  {
    id: "2",
    title: "Comodidad y Conveniencia",
    description: "Compra desde la comodidad de tu hogar o donde estés, a cualquier hora del día. Olvídate de las filas y el tráfico, ¡tu tiempo es valioso!",
    link: "#conveniencia"
  },
  {
    id: "3",
    title: "Precios Competitivos",
    description: "Ofrecemos precios competitivos y ofertas exclusivas. Ahorra dinero en tus compras y aprovecha nuestros descuentos especiales.",
    link: "#precios"
  },
  {
    id: "4",
    title: "Envío Rápido y Seguro",
    description: "Recibe tus compras en la puerta de tu casa de forma rápida y segura. Trabajamos con los mejores servicios de mensajería para garantizar la entrega en perfectas condiciones.",
    link: "#envio"
  },
  {
    id: "5",
    title: "Atención al Cliente Personalizada",
    description: "Nuestro equipo de atención al cliente está siempre disponible para ayudarte. Resolvemos tus dudas y te brindamos el mejor soporte antes, durante y después de tu compra.",
    link: "#atencion"
  }
]

const CarouselTextBaner = () => {
  const router = useRouter()

  return (
    <div className='bg-gray-300 dark:bg-primary'>
      <Carousel
        className='w-full max-w-4xl mx-auto'
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className='flex flex-row items-center justify-center'>
          {dataCarouselTextBaner.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className='flex flex-col items-center justify-center'
            >
              <div>
                <Card className='shadow-none border-none bg-transparent'>
                  <CardContent className='flex flex-col items-center justify-center'>
                    <h2 className='sm:text-sm md:text-lg font-bold text-wrap dark:text-white'>{title}</h2>
                    <p className='text-xs sm:text-sm text-wrap'>{description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselTextBaner