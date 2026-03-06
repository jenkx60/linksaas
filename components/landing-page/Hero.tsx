"use client"
import React from 'react'
import RotatingText from '../RotatingText'
import Link from 'next/link'
import heroImage from '@/public/landing-page/app dashboarrd.svg'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { ContainerScroll } from '../ui/container-scroll-animation'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='bg-[#0A0A0B] pb-32 relative overflow-hidden'>
        
        {/* Animated Digital Pulse Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
            {/* Deep Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#143DB8]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00C2FF]/15 rounded-full blur-[150px]" />
            
            {/* SVG Network Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#143DB8" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#143DB8" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                
                {/* Horizontal Grid Lines */}
                {[...Array(10)].map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={`${i * 10 + 5}%`} x2="100%" y2={`${i * 10 + 5}%`} stroke="#ffffff" strokeWidth="1" strokeOpacity="0.03" />
                ))}
                
                {/* Vertical Grid Lines */}
                {[...Array(20)].map((_, i) => (
                    <line key={`v-${i}`} x1={`${i * 5 + 2.5}%`} y1="0" x2={`${i * 5 + 2.5}%`} y2="100%" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.03" />
                ))}

                {/* Abstract Data Paths */}
                <motion.path 
                    d="M-100 200 Q 300 150 600 300 T 1200 200 T 1800 400" 
                    fill="none" stroke="url(#line-gradient)" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path 
                    d="M-100 600 Q 200 400 500 500 T 1000 600 T 1800 300" 
                    fill="none" stroke="url(#line-gradient)" strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, delay: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>

            {/* Glowing Nodes */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[300px] left-[30%] w-3 h-3 bg-[#00C2FF] rounded-full shadow-[0_0_20px_#00C2FF]"
            />
            <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[200px] right-[25%] w-4 h-4 bg-[#143DB8] rounded-full shadow-[0_0_25px_#143DB8]"
            />
            <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[500px] left-[60%] w-2 h-2 bg-[#00C2FF] rounded-full shadow-[0_0_15px_#00C2FF]"
            />
        </div>

        <div className="relative z-10">
            <ContainerScroll
                titleComponent={
                    <>
                        <div className='flex flex-col items-center text-center gap-6 max-w-full mx-auto'>
                            <div>
                                <h1 className='font-black text-7xl leading-[72px] tracking-[-1.8px] text-white'>Shorten Links.</h1>
                                <h1 className='font-black text-7xl leading-[72px] tracking-[-1.8px] text-white'>Track Performance.</h1>
                                <div className='grid grid-cols-[1fr_auto_1fr] items-center justify-center w-full -ml-10'>
                                    <div className='flex justify-end pr-1.5'>
                                        <h1 className='font-black text-7xl bg-linear-to-r from-[#143DB8] to-[#00C2FF] bg-clip-text text-transparent leading-[100%] tracking-[0px] pt-2'>Grow</h1>
                                    </div>

                                    <div className='w-0 md:w-1' />

                                    <div className='flex justify-start'>
                                        <RotatingText 
                                            texts={['Smarter.', 'Faster.', 'Better.']}
                                            mainClassName="font-black text-5xl md:text-7xl leading-[100%] tracking-[0px] overflow-hidden pt-3 text-white"
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

                            <div className='px-12 max-w-2xl mx-auto'>
                                <p className='font-normal text-[18px] leading-[30px] tracking-[0px] text-slate-400'>Create branded links, track clicks in real-time, and optimize your marketing campaigns with detailed analytics built for modern growth teams.</p>
                            </div>

                            <div className='mb-6 flex gap-6 w-full max-w-[60%] mx-auto'>
                                <button className='w-full bg-[#143DB8] hover:bg-[#143DB8]/90 transition-colors shadow-[0_0_20px_rgba(20,61,184,0.4)] rounded-[24px] py-2.5 text-white font-bold text-[14px] leading-6 tracking-[0px] cursor-pointer'>
                                    Create Free Account
                                </button>

                                <button className='w-full flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors shadow shadow-[#0000000D] rounded-[24px] py-2.5 pl-3 pr-3.5 text-white font-bold text-[14px] leading-6 tracking-[0px] cursor-pointer'>
                                    <Play className='text-[#94A3B8] w-4 h-4' />
                                    <span>View Dashboard Demo</span>
                                </button>
                            </div>
                        </div>
                    </>
                }
            >
                <Image
                    src={heroImage}
                    alt="hero"
                    height={500}
                    width={500}
                    className="rounded-2xl object-fill w-full object-top transition-all duration-500"
                    draggable={false}
                    priority
                />
            </ContainerScroll>
        </div>
    </section>
  )
}

export default Hero