import React from 'react'
import Link from 'next/link'
 
const Navbar = () => 
{
    return (
        <nav className="flex flex-row gap-4 text-black text-right w-full absolute left-[50%] font-serif font-medium">
                
                <Link href='#about' className='p-6 text-xl navbar-elements'>
                    ABOUT US
                </Link>
                <Link href='/blog' className='p-6 text-xl'>
                    VOLUNTEER
                </Link>
                <Link href='/contact' className='p-6 text-xl'>
                    DONATE
                </Link>
                <Link href='/contact' className='p-6 text-xl'>
                    GET HELP
                </Link>
        </nav>
    )
}
 
export default Navbar
