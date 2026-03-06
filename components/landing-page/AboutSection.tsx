"use client"
import { ChartNoAxesCombined, ShieldCheck, Zap } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className='bg-[#0A0A0B] relative flex flex-col items-center gap-16 py-32 overflow-hidden'>
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2513ec]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#143db8]/15 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='flex flex-col items-center text-center max-w-3xl mx-auto px-6 space-y-6 relative z-10'
      >
        <h2 className='font-bold text-5xl md:text-6xl text-white leading-tight tracking-tight'>
          Everything you need <br className="hidden md:block" />
          <span className=" bg-clip-text text-[#143DB8]">to grow</span>
        </h2>
        <p className='font-normal text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl'>
          Unlock your links' full potential with our premium suite of tools designed for scale and performance.
        </p>
      </motion.div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-6 px-6 relative z-10">
        
        {/* Card 1: Powerful Analytics (Spans 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-2 md:row-span-1 min-h-[300px] relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-end group hover:bg-white/[0.07] transition-colors duration-500"
        >
          {/* Abstract Graph Visual Background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
            <svg viewBox="0 0 400 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              <path d="M0,150 Q100,200 200,100 T400,50" fill="none" stroke="url(#gradient-line)" strokeWidth="3" className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <path d="M0,150 Q100,200 200,100 T400,50 L400,200 L0,200 Z" fill="url(#gradient-fill)" />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 space-y-4 max-w-md">
            <div className="bg-blue-500/20 w-fit p-3 rounded-2xl border border-blue-500/30">
              <ChartNoAxesCombined className='text-blue-400 w-6 h-6' />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Powerful Analytics
            </h3>
            <p className="text-slate-400 font-normal text-base leading-relaxed">
              Track clicks, referrers, and audience demographics with real-time, high-fidelity data visualizations.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Secure & Scalable */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-1 md:row-span-2 min-h-[300px] relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-end group hover:bg-white/[0.07] transition-colors duration-500"
        >
          {/* Hexagon visual background */}
          <div className="absolute inset-x-0 -top-10 h-2/3 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden flex justify-center items-start pt-10">
            <div className="w-32 h-32 border border-emerald-500/50 rotate-45 rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] absolute" />
            <div className="w-24 h-24 border border-emerald-400/40 rotate-45 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.2)] absolute top-[3.5rem]" />
            <div className="w-16 h-16 border border-emerald-300/30 rotate-45 rounded-lg shadow-[0_0_10px_rgba(16,185,129,0.1)] absolute top-[4.5rem]" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="bg-emerald-500/20 w-fit p-3 rounded-2xl border border-emerald-500/30">
              <ShieldCheck className='text-emerald-400 w-6 h-6' />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Secure & Scalable
            </h3>
            <p className="text-slate-400 font-normal text-base leading-relaxed">
              Enterprise-grade encryption and maximum uptime during massive traffic spikes to keep your data safe.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Lightning Fast Redirects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="md:col-span-2 md:row-span-1 min-h-[300px] relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-end group hover:bg-white/[0.07] transition-colors duration-500"
        >
          {/* Motion Blur / Speed Lines visual background */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none flex items-center justify-end pr-10">
            <div className="w-full h-full relative">
                <div className="absolute top-1/4 right-0 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                <div className="absolute top-2/4 right-10 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                <div className="absolute top-3/4 right-5 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                {/* Simulated edge nodes */}
                <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-2/4 right-10 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-3/4 right-5 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)] translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="relative z-10 space-y-4 max-w-md">
            <div className="bg-purple-500/20 w-fit p-3 rounded-2xl border border-purple-500/30">
              <Zap className='text-purple-400 w-6 h-6' />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Lightning Fast
            </h3>
            <p className="text-slate-400 font-normal text-base leading-relaxed">
              Global edge networks ensuring low latency. Your links resolve in milliseconds everywhere.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection