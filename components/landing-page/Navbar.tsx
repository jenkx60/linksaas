"use client";

import { Link2, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    }
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 md:px-8 my-4 mx-auto max-w-[95%] bg-white/80 backdrop-blur-md border-b border-[#E2E8F099] rounded-2xl md:rounded-4xl'>
        <div className='flex gap-2 items-center shrink-0'>
            <Link2 className='w-8 h-8 md:w-9 md:h-9 bg-[#143DB8] rounded-full p-2 text-white' />
            <h1 className='text-lg md:text-xl font-bold text-[#0F172A] leading-7 tracking-[-0.5px]'>LinkSaaS</h1>
        </div>

        <ul className='hidden md:flex gap-6 font-medium text-[14px] leading-5 tracking-[0px] items-center'>
            <li><Link href="#" className='hover:text-[#143DB8] transition-colors'>Features</Link></li>
            <li><Link href="#" className='hover:text-[#143DB8] transition-colors'>Pricing</Link></li>
            <li><Link href="#" className='hover:text-[#143DB8] transition-colors'>Enterprise</Link></li>
        </ul>

        <div className='hidden md:flex gap-3 items-center'>
            <Link href='/auth/login' className='text-[#475569] font-semibold text-[14px] leading-5 tracking-[0px]'>
                Login
            </Link>
            <Link href='/auth/signup' className='bg-[#143DB8] shadow shadow-[#143DB8] rounded-[16px] text-white px-4 pt-[7.5px] pb-[8.5px] font-semibold text-[14px] leading-5 tracking-[0px]'>
                Get Started
            </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
            className='md:hidden p-2 text-[#0F172A]' 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
        >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className='absolute top-full left-0 right-0 mt-2 p-6 bg-white border border-[#E2E8F099] rounded-2xl shadow-xl flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200'>
          <ul className='flex flex-col gap-4 font-medium text-[16px]'>
            <li><Link href="#" onClick={() => setIsMobileOpen(false)} className="block py-2">Features</Link></li>
            <li><Link href="#" onClick={() => setIsMobileOpen(false)} className="block py-2">Pricing</Link></li>
            <li><Link href="#" onClick={() => setIsMobileOpen(false)} className="block py-2">Enterprise</Link></li>
          </ul>
          
          <hr className="border-[#E2E8F099]" />
          
          <div className='flex flex-col gap-3'>
            <Link 
              href='/auth/login' 
              onClick={() => setIsMobileOpen(false)}
              className='text-[#475569] font-semibold text-center py-3'
            >
              Login
            </Link>
            <Link 
              href='/auth/signup' 
              onClick={() => setIsMobileOpen(false)}
              className='bg-[#143DB8] rounded-[12px] text-white py-3 font-semibold text-center shadow-md'
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar