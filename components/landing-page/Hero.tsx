import React from 'react'
import RotatingText from '../RotatingText'
import Link from 'next/link'
import heroImage from '@/public/landing-page/Dashboard Mockup 1.svg'
import { Play } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='pt-32 pb-40'>
        <div className='flex flex-col items-center text-center gap-6 max-w-[50%] mx-auto'>
            <div>
                <h1 className='font-black text-7xl leading-[72px] tracking-[-1.8px]'>Shorten Links.</h1>
                <h1 className='font-black text-7xl leading-[72px] tracking-[-1.8px]'>Track Performance.</h1>
                <div className='grid grid-cols-[1fr_auto_1fr] items-center justify-center w-full -ml-10'>
                    <div className='flex justify-end pr-1.5'>
                        <h1 className='font-black text-7xl bg-linear-to-r from-[#143DB8] to-[#00C2FF] bg-clip-text text-transparent leading-[100%] tracking-[0px] pt-2'>Grow</h1>
                    </div>

                    <div className='w-0 md:w-1' />

                    <div className='flex justify-start'>
                        <RotatingText 
                            texts={['Smarter.', 'Faster.', 'Better.']}
                            mainClassName="font-black text-5xl md:text-7xl leading-[100%] tracking-[0px] overflow-hidden pt-3"
                            elementLevelClassName=' bg-linear-to-r from-[#00C2FF] to-[#00C2FF] bg-clip-text text-transparent'
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>
                </div>
            </div>

            <div className='px-12'>
                <p className='font-normal text-[18px] leading-[30px] tracking-[0px] text-[#475569]'>Create branded links, track clicks in real-time, and optimize your marketing campaigns with detailed analytics built for modern growth teams.</p>
            </div>

            <div className='mt-4 flex gap-6 w-full max-w-[60%] mx-auto'>
                <button className='w-full bg-[#143DB8] shadow shadow-[#143DB8] rounded-[24px] py-2.5 text-white font-bold text-[14px] leading-6 tracking-[0px]'>
                    Create Free Account
                </button>

                <button className='w-full flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] shadow shadow-[#0000000D] rounded-[24px] py-2.5 pl-3 pr-3.5 text-[#334155] font-bold text-[14px] leading-6 tracking-[0px]'>
                    <Play className='text-[#94A3B8] w-4 h-4' />
                    <span>View Dashboard Demo</span>
                </button>
            </div>
        </div>

        <div className='hidden md:block pt-24'>
            <Image 
                src={heroImage}
                alt="Dashboard Mockup"
                width={500}
                height={500}
                className='w-full h-full object-contain'
            />
        </div>
    </section>
  )
}

export default Hero