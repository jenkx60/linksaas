import { MoveRight } from 'lucide-react'
import React from 'react'

const CallToAction = () => {
  return (
    <section className='bg-[#F8FAFC] flex flex-col items-center gap-12 py-20'>
        <div className='flex flex-col items-center space-y-4 max-w-[45%]'>
            <h2 className='font-bold text-4xl text-[#0F172A] leading-10 tracking-[-0.9px]'>Ready to build smarter links?</h2>
            <p className='font-normal text-[18px] text-[#475569] leading-7 tracking-[0px] text-center'>Join 50,000+ marketers and developers using LinkSaaS to control their traffic and understand their audience.</p>
        </div>

        <div className='flex flex-col items-center gap-4 w-full'>
            <div className='flex w-full max-w-[25%]'>
                <button className='w-full bg-[#143DB8] shadow shadow-[#143DB8] rounded-[24px] py-2 text-white font-bold text-[14px] leading-6 tracking-[0px]'>
                    Start Free Today
                </button>

                <button className='w-full flex items-center justify-center gap-2 rounded-[24px] text-[#334155] font-bold text-[14px] leading-6 tracking-[0px]'>
                    <span>Contact Sales</span>
                    <MoveRight className='text-[#94A3B8] w-4 h-4' />
                </button>
            </div>

            <p className='font-normal text-[12px] text-[#475569] leading-4 tracking-[0px]'>No credit card required · 14-day free trial · Cancel anytime</p>
        </div>

    </section>
  )
}

export default CallToAction