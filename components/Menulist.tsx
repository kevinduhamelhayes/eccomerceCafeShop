"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cafe en granos",
    href: "/category/grano",
    description: "Granos de cafe de la mejor calidad, variedades y sabores",
  },
  {
    title: "Cafe molido",
    href: "/category/molido",
    description: "El mejor cafe molido, variedades y sabores",
  },
  {
    title: "Cafe en capsulas",
    href: "/category/capsulas",
    description: "Nuestra infinita variedad de cafe en capsulas",
  },
]

const Menulist = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenu>
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Nuestra cafeteria
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sumergete en el mundo del cafe con nosotros y descubre la mejor calidad y variedad de cafe con 60 años de experiencia en el mercado de cafe
                    </p>
                  </div>
                </NavigationMenu>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, pedidos, favoritos y mas
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Descubre las mejores ofertas y promociones
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios, tazas, remeras y mas
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default Menulist

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
