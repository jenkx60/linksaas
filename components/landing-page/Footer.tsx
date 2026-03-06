import { Github, Globe, Link2, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white p-16 flex flex-col gap-8'>
        <div className='flex justify-between gap-8'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex gap-2 items-center shrink-0'>
                    <Link2 className='w-8 h-8 md:w-9 md:h-9 bg-[#143DB8] rounded-full p-2 text-white' />
                    <h1 className='text-lg md:text-xl font-bold text-[#0F172A] leading-7 tracking-[-0.5px]'>LinkSaaS</h1>
                </div>
                <p className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px] max-w-xs'>The complete platform for link management, analytics, and branding. Making the web more clickable since 2023.</p>
                <div className='flex gap-4'>
                    <Link href="">
                        <Twitter className='text-[#94A3B8] w-4 h-4' />
                    </Link>

                    <Link href="">
                        <Github className='text-[#94A3B8] w-4 h-4' />
                    </Link>

                    <Link href="">
                        <Globe className='text-[#94A3B8] w-4 h-4' />
                    </Link>
                </div>
            </div>
            <div className='flex justify-evenly w-full'>
                <nav className='flex flex-col gap-4' aria-label='Footer Navigation - Products'>
                    <h3 className='font-bold text-[14px] text-[#0F172A] leading-6 tracking-[0px]'>Product</h3>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Features</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Pricing</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Integrations</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">API Documentation</Link></li>
                    </ul>
                </nav>
                <nav className='flex flex-col gap-4' aria-label='Footer Navigation - Company'>
                    <h3 className='font-bold text-[14px] text-[#0F172A] leading-6 tracking-[0px]'>Company</h3>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">About</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Blog</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Careers</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Contact</Link></li>
                    </ul>
                </nav>
                <nav className='flex flex-col gap-4' aria-label='Footer Navigation - Resources'>
                    <h3 className='font-bold text-[14px] text-[#0F172A] leading-6 tracking-[0px]'>Resources</h3>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Documentation</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Support</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">API</Link></li>
                        <li className='font-normal text-[14px] text-[#475569] leading-6 tracking-[0px]'><Link href="">Help Center</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <hr className='border-[#E2E8F0] my-5' />
            <div>
                <p className='font-normal text-[12px] text-[#475569] leading-4 tracking-[0px]'>© 2026 LinkSaaS. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer