import { ChartNoAxesCombined, ShieldCheck, Zap } from 'lucide-react'
import React from 'react'
import SpotlightCard from '../SpotlightCard'
import PixelCard from '../PixelCard'

const AboutSection = () => {
  return (
    <section className='bg-white flex flex-col items-center gap-12 py-20'>
        <div className='flex flex-col items-center text-center max-w-6xl mx-auto px-6 space-y-4'>
            <h2 className='font-bold text-4xl text-[#0F172A] leading-10 tracking-[-0.9px]'>Everything you need to grow</h2>
            <p className='font-normal text-[18px] text-[#475569] leading-7 tracking-[0px]'>Powering your links with enterprise-grade features simplified for everyone.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">
            <PixelCard variant='blue'>
                <div className="absolute p-8 bg-transparent rounded-[32px] space-y-4 cursor-pointer">
                    <ChartNoAxesCombined className='text-[#0F172A] bg-white p-2 rounded-full w-10 h-10' />
                    <h3 className="text-xl font-bold leading-7 tracking-[0px]">
                        Powerful Analytics
                    </h3>
                    <p className="text-[#475569] font-normal text-[16px] leading-6 tracking-[0px]">
                        Gain actionable insights into who is clicking your links with detailed location, device, and referrer data in real-time.
                    </p>
                </div>
            </PixelCard>

            <PixelCard variant='blue'>
                <div className="absolute p-8 bg-transparent rounded-[32px] space-y-4 cursor-pointer">
                    <ShieldCheck className='text-[#0F172A] bg-white p-2 rounded-full w-10 h-10' />
                    <h3 className="text-xl font-bold leading-7 tracking-[0px]">
                    Secure & Scalable
                    </h3>
                    <p className="text-[#475569] font-normal text-[16px] leading-6 tracking-[0px]">
                    Enterprise-grade security with 99.99% uptime SLA. Your links are encrypted, safe, and always online when you need them.
                    </p>
                </div>
            </PixelCard>

            <PixelCard variant='blue'>
                <div className="absolute p-8 bg-transparent rounded-[32px] space-y-4 cursor-pointer">
                    <Zap className='text-[#0F172A] bg-white p-2 rounded-full w-10 h-10' />
                    <h3 className="text-xl font-bold leading-7 tracking-[0px]">
                    Lightning Fast Redirects
                    </h3>
                    <p className="text-[#475569] font-normal text-[16px] leading-6 tracking-[0px]">
                    Lightning fast redirect speeds via our global edge network ensure you never lose a potential customer due to latency.
                    </p>
                </div>
            </PixelCard>

        </div>
    </section>
  )
}

export default AboutSection