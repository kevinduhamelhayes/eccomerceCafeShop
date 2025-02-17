import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

const dataFooter = [  
  {
    id: 1,
    name: "sobre nosotros",
    link: "/about"
  },
  {
    id: 2,
    name: "contacto",
    link: "/contact"
  },
  {
    id: 3,
    name: "politicas de privacidad",
    link: "/privacy"
  },
  {
    id: 4,
    name: "terminos y condiciones",
    link: "/terms"
  }
]

const Footer = () => {
  return (
    <footer className=' mt-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 '>
        <div className='sm:flex sm:items-center sm:justify-between'>
      <p className='font-bold'>© 2025 Coffee Shop</p>
      <ul className=' flex flex-wrap items-center mb6 text-sm font-medium text-gray-400'>
        {dataFooter.map((data) => (
          <li key={data.id} className='mr-4'>
            <Link href={data.link} className='hover:text-gray-200'>
              {data.name}

            </Link>
          </li>
        ))}
      </ul>
      </div>
      <Separator className='my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        &copy; 2025 Coffee Shop. All rights reserved.
        <Link href='/privacy' className='hover:text-gray-200'> Privacy Policy</Link>
      </span>
      </div>
    </footer>
  )
}

export default Footer