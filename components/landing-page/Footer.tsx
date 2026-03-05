import { Github, Globe, Link2, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white py-16'>
        <div>
            <div>
                <Link2 className='w-8 h-8 md:w-9 md:h-9 bg-[#143DB8] rounded-full p-2 text-white' />
                <h1 className='text-lg md:text-xl font-bold text-[#0F172A] leading-7 tracking-[-0.5px]'>LinkSaaS</h1>
            </div>
            <p className='font-normal text-[12px] text-[#475569] leading-4 tracking-[0px]'>The complete platform for link management, analytics, and branding. Making the web more clickable since 2023.</p>
            <div>
                <Link href="">
                    <Twitter />
                </Link>

                <Link href="">
                    <Github />
                </Link>

                <Link href="">
                    <Globe />
                </Link>
            </div>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer