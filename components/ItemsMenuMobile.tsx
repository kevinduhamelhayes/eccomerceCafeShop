
import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import {  MenuIcon } from 'lucide-react'
import Link from 'next/link'

const ItemsMenuMobile = () => {
  return (
    <Popover>
    <PopoverTrigger>
      <MenuIcon size={24} />
    </PopoverTrigger>
    <PopoverContent>
      <Link href="/categories/cafe-grano" className='block'>
        cafe molido
      </Link>
      <Link href="/categories/cafe-molido" className='block'>
        cafe en Granos
      </Link>
      <Link href="/categories/cafe-capsula" className='block'>
        cafe en capsulas
      </Link>
    </PopoverContent>
  </Popover>
    
  )
}

export default ItemsMenuMobile