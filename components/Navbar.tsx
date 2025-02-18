"use client"
import { Heart, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Menulist from './Menulist';
import ItemsMenuMobile from './ItemsMenuMobile';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className='flex items-center justify-between p-4 mx-auto  cursor-pointer sm:max-w-4xl md:max-w-6xl' >
      <Link href='/'>
        <h1 className='text-2xl font-bold' onClick={() => router.push("/")}>Coffee Shop</h1>
      </Link>
      <div className='items-center justify-between hidden space-x-4 text-lg sm:flex'>
        <Menulist />
      </div>
      <div className='flex sm:hidden'>
        <ItemsMenuMobile />
      </div>
      <div className='flex items-center justify-between gap-2 sm:gap-4'>
      <ShoppingCart strokeWidth={1.5} size={24} className='cursor-pointer' onClick={()=> router.push ("/cart")} />
        <Heart strokeWidth={1.5} size={24} className='cursor-pointer' onClick={()=> router.push ("/wishlist")} />
          <User strokeWidth={1.5} size={24} className='cursor-pointer' onClick={()=> router.push ("/account")} />
            
            <ToggleTheme />
      </div>
    </nav>
  );
}
export default Navbar ;