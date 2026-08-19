import React from 'react';
import { motion } from 'motion/react';

interface PricingProps {
  isDark?: boolean;
  onShowComparison?: () => void;
  onBookCall?: () => void;
}

export default function Pricing({ isDark = true, onShowComparison, onBookCall }: PricingProps) {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const handleAction = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      const el = document.getElementById('cta-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="pricing-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 pt-8 pb-6 md:pt-12 md:pb-8 ${isDark ? 'bg-black border-zinc-900/80' : 'bg-transparent border-zinc-200'} relative border-t overflow-hidden transition-all duration-500`}
    >
      {/* Decorative subtle atmospheric background glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] ${isDark ? 'bg-[#28a7e0]/5' : 'bg-[#1d5ed5]/5'} blur-[150px] rounded-full pointer-events-none`} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Row 0: Original Plans & Pricing typography */}
        <div className="text-left mb-10 md:mb-12 select-none">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-[950] tracking-tight leading-none">
            <motion.span
              className="bg-clip-text text-transparent block"
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(110deg, #71717a 0%, #71717a 32%, #cbf33b 45%, #28a7e0 55%, #71717a 68%, #71717a 100%)"
                  : "linear-gradient(110deg, #71717a 0%, #71717a 32%, #a4df12 45%, #1d5ed5 55%, #71717a 68%, #71717a 100%)",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: ["0% center", "-200% center"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Plans &
            </motion.span>
            <span className={`${isDark ? 'text-white' : 'text-zinc-900'} block mt-1`}>Pricing</span>
          </h2>
        </div>

        {/* Row 1: Designed perfectly based on reference image */}
        <div className="flex flex-col select-none relative w-full mb-14 md:mb-18">
          {/* Top Badge & CTA Link row */}
          <div className="flex justify-between items-center w-full mb-8 md:mb-10">
            {/* Left Badge: PLANS */}
            <div className={`px-3 py-1 border text-[10px] font-mono tracking-widest font-black rounded uppercase ${
              isDark 
                ? 'bg-[#121215]/60 text-zinc-400 border-zinc-800' 
                : 'bg-zinc-50/80 text-zinc-500 border-zinc-200'
            }`}>
              FLEXIBLE MONTHLY RETAINERS • NO LONG-TERM CONTRACTS
            </div>

            {/* Right CTA link */}
            <button
              onClick={handleAction}
              className={`text-sm tracking-tight flex items-center gap-1.5 transition-all duration-300 ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black'
              }`}
            >
              <span>Schedule a <span className={`font-black ${isDark ? 'text-white' : 'text-zinc-955 text-zinc-900'}`}>Call</span></span>
              <span className="text-zinc-400 pl-0.5 font-sans">→</span>
            </button>
          </div>

          {/* Core heading and description on left, CTA button elegantly aligned on the right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 w-full">
            <div className="max-w-4xl">
              {/* Large typography display headline block precisely as in attached image */}
              <h1 className={`text-4xl sm:text-6xl md:text-[80px] lg:text-[84px] font-sans font-bold tracking-[-0.04em] leading-[1.08] ${
                isDark ? 'text-zinc-505' : 'text-zinc-405'
              }`}
              style={{ color: isDark ? '#71717a' : '#a1a1aa' }}
              >
                <span className="block">Better tools</span>
                
                <span className="flex flex-wrap items-center mt-1">
                  <span className="mr-4">smooth</span>
                  
                  {/* 3 slanted overlapping branded tiles directly as in photo */}
                  <span className="inline-flex items-center -space-x-3.5 mx-2 align-middle z-20 pointer-events-none scale-[0.82] sm:scale-100 origin-left">
                    {/* Tilting Dribbble Pink tile */}
                    <span 
                      className="w-13 h-13 rounded-[15px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex items-center justify-center -rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-110"
                      style={{ transform: "rotate(-12deg) translateY(-2px)" }}
                    >
                      {/* Detailed pink basketball design */}
                      <span className="w-8 h-8 rounded-full bg-[#ea4c89] relative overflow-hidden flex items-center justify-center">
                        <span className="absolute inset-0 border border-black/10 rounded-full" />
                        <span className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-black/15 -translate-y-1/2" />
                        <span className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-black/15 -translate-x-1/2" />
                        <span className="absolute inset-1.5 border border-black/15 rounded-full" />
                      </span>
                    </span>

                    {/* Tilting Behance Blue tile */}
                    <span 
                      className="w-13 h-13 rounded-[15px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex items-center justify-center rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-110 z-10"
                      style={{ transform: "rotate(6deg) translateY(1px)" }}
                    >
                      <span className="text-[#0057ff] font-serif font-black text-xl leading-none tracking-tighter">Bē</span>
                    </span>

                    {/* Tilting Mailchimp Cursive tile */}
                    <span 
                      className="w-13 h-13 rounded-[15px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex items-center justify-center -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-110"
                      style={{ transform: "rotate(-6deg) translateY(-1px)" }}
                    >
                      {/* Beautiful black lettermark */}
                      <span className="text-[#131316] font-sans font-[950] text-xl leading-none flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
                          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                          <path d="M9 14h6" />
                          <circle cx="12" cy="7" r="3" />
                        </svg>
                      </span>
                    </span>
                  </span>

                  <span className={`ml-4 ${isDark ? 'text-white' : 'text-zinc-950'} font-extrabold`}>workflow</span>
                </span>
              </h1>

              <p className={`text-lg sm:text-xl md:text-2xl font-sans font-medium tracking-tight mt-6 max-w-2xl leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-650'
              }`}>
                Whether You Need One Process Fixed Or Your Entire Business Optimized, There's A Plan Built For You.
              </p>
            </div>

            {/* Button container shifted beautifully to the bottom-right */}
            <div className="flex shrink-0 items-center justify-start lg:justify-end lg:mb-4">
              {/* Redirect to plans comparison page */}
              <button 
                onClick={onShowComparison}
                className={`group h-13 rounded-full cursor-pointer px-7 relative flex items-center justify-center select-none transition-all duration-300 focus:outline-none hover:scale-[1.02] active:scale-[0.98] bg-black ${
                  isDark ? 'border border-zinc-800 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5)]' : 'border border-zinc-200 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.15)] bg-zinc-950 hover:bg-black'
                }`}
              >
                <span className="text-white font-black text-xs tracking-wider uppercase flex items-center gap-2">
                  <motion.span
                    className="bg-clip-text text-transparent inline-block"
                    style={{
                      backgroundImage: isDark
                        ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                        : "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #a4df12 45%, #1d5ed5 55%, #ffffff 68%, #ffffff 100%)",
                      backgroundSize: "200% auto",
                    }}
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Compare Plans & Features
                  </motion.span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-white">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Two Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: A La Carte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-[2.25rem] border ${isDark ? 'bg-[#0e0e11] border-zinc-900/90' : 'bg-white border-zinc-200 shadow-md'} flex flex-col justify-between overflow-hidden shadow-2xl ${isDark ? 'hover:border-[#cbf33b]/40' : 'hover:border-[#1d5ed5]/40'} transition-[border-color] duration-500`}
          >
            {/* Top segment */}
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`${isDark ? 'text-white' : 'text-zinc-800'} text-sm font-semibold tracking-wide`}>Automation Essentials</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wide uppercase font-bold border ${
                    isDark 
                      ? 'bg-[#cbf33b]/10 text-[#cbf33b] border-[#cbf33b]/20' 
                      : 'bg-[#1d5ed5]/10 text-[#1d5ed5] border-[#1d5ed5]/20'
                  }`}>
                    MOST POPULAR FOR SMALL BUSINESSES
                  </span>
                </div>

                {/* Core Heading Statement */}
                <div className="mt-8">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.12]">
                    <span className={`${isDark ? 'text-white' : 'text-zinc-900'} block`}>Start With The Processes</span>
                    <span className="text-zinc-500 block mt-1">That Cost You The Most Time.</span>
                  </h3>
                </div>
              </div>

              {/* Price & Action Elements */}
              <div className="mt-14">
                <div className="flex items-baseline mb-6 flex-wrap gap-2">
                  <div className="flex items-baseline">
                    <span className="text-zinc-500 text-2xl font-light mr-1.5">$</span>
                    <span className={`text-5xl sm:text-6xl font-black ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight`}>
                      7,550
                    </span>
                    <span className="text-zinc-500 text-sm font-semibold ml-1.5 uppercase font-mono">/mo</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                  {/* Button */}
                  <button
                    onClick={handleAction}
                    className={`${isDark ? 'bg-[#131315] hover:bg-[#1b1b1e] border-zinc-805 border-zinc-800' : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-250 border-zinc-200'} border rounded-full px-6 py-3.5 text-xs font-bold tracking-wide transition shadow-lg active:scale-95 flex items-center justify-center gap-1.5 shrink-0`}
                  >
                    <motion.span
                      className="bg-clip-text text-transparent inline-block"
                      style={{
                        backgroundImage: isDark
                          ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                          : "linear-gradient(110deg, #09090b 0%, #09090b 32%, #a4df12 45%, #1d5ed5 55%, #09090b 68%, #09090b 100%)",
                        backgroundSize: "200% auto",
                      }}
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Reserve for Sep
                    </motion.span>
                    <span className={`text-sm ${isDark ? 'text-white' : 'text-zinc-900'} pl-0.5`}>→</span>
                  </button>

                  {/* Minimalist modern testimonial bubble */}
                  <div className={`${isDark ? 'bg-[#131315]/40 border-zinc-900/90' : 'bg-zinc-55 bg-zinc-50 border-zinc-200'} border rounded-2xl p-3 flex flex-col justify-center flex-1 max-w-full sm:max-w-[280px]`}>
                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-1.5">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                          alt="Sarf" 
                          className="w-4 h-4 rounded-full object-cover filter grayscale contrast-125"
                        />
                        <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">Sarf @ Bloom</span>
                      </div>
                      <span className="text-zinc-700 font-mono text-base leading-none">“</span>
                    </div>
                    <p className={`text-[10px] sm:text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-650'} mt-1.5 font-normal leading-normal italic`}>
                      "That new brand is absolutely fire."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom listing element */}
            <div className={`${isDark ? 'bg-[#0b0b0e] border-zinc-900/90 text-zinc-400' : 'bg-zinc-55 bg-zinc-50 border-zinc-200 text-zinc-650'} border-t p-8 md:p-10 select-none`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Everything In Essentials</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Sales Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Customer Journey Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Finance Workflow Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Team Operations Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Advanced CRM Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Custom AI Assistants</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Priority Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Dedicated Strategy Calls</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Prix Fixe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`rounded-[2.25rem] border ${isDark ? 'bg-[#0e0e11] border-zinc-900/90' : 'bg-white border-zinc-200 shadow-md'} flex flex-col justify-between overflow-hidden shadow-2xl ${isDark ? 'hover:border-[#cbf33b]/40' : 'hover:border-[#1d5ed5]/40'} transition-[border-color] duration-500`}
          >
            {/* Top segment */}
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`${isDark ? 'text-white' : 'text-zinc-900'} text-sm font-semibold tracking-wide`}>Prix Fixe</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wide uppercase font-bold border ${
                    isDark 
                      ? 'bg-[#28a7e0]/10 text-[#28a7e0] border-[#28a7e0]/20' 
                      : 'bg-[#a4df12]/10 text-[#a4df12] border-[#a4df12]/20'
                  }`}>
                    Limited availability
                  </span>
                </div>
                
                {/* Core Heading Statement */}
                <div className="mt-8">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.12]">
                    <span className="text-zinc-500 block">For brands ready to go</span>
                    <span className={`${isDark ? 'text-white' : 'text-zinc-900'} block mt-1 font-black`}>zero to one & beyond.</span>
                  </h3>
                </div>
              </div>

              {/* Price & Action Elements */}
              <div className="mt-14">
                <div className="flex items-baseline mb-6 flex-wrap gap-2">
                  <div className="flex items-baseline">
                    <span className="text-zinc-505 text-zinc-500 text-2xl font-light mr-1.5">$</span>
                    <span className={`text-5xl sm:text-6xl font-black ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight`}>
                      18,500
                    </span>
                    <span className="text-zinc-505 text-zinc-500 text-sm font-semibold ml-1.5 uppercase font-mono">/mo</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                  {/* Button */}
                  <button
                    onClick={handleAction}
                    className={`${isDark ? 'bg-white hover:bg-zinc-100' : 'bg-zinc-900 hover:bg-zinc-800'} rounded-full px-6 py-3.5 text-xs font-extrabold tracking-wide transition shadow-lg active:scale-95 flex items-center justify-center shrink-0`}
                  >
                    <motion.span
                      className="bg-clip-text text-transparent inline-block"
                      style={{
                        backgroundImage: isDark
                          ? "linear-gradient(110deg, #000000 0%, #000000 32%, #1b5bdc 45%, #105eff 55%, #000000 68%, #000000 100%)"
                          : "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)",
                        backgroundSize: "200% auto",
                      }}
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Book an Intro Call
                    </motion.span>
                  </button>

                  {/* Minimalist modern testimonial bubble */}
                  <div className={`${isDark ? 'bg-[#131315]/40 border-zinc-900/90' : 'bg-zinc-50 border-zinc-200'} border rounded-2xl p-3 flex flex-col justify-center flex-1 max-w-full sm:max-w-[280px]`}>
                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-1.5">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                          alt="Ashley" 
                          className="w-4 h-4 rounded-full object-cover filter grayscale contrast-125"
                        />
                        <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">Ashley Wilson, COO</span>
                      </div>
                      <span className="text-zinc-700 font-mono text-base leading-none">“</span>
                    </div>
                    <p className={`text-[10px] sm:text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-650'} mt-1.5 font-normal leading-normal italic`}>
                      "I love the (ew) design and brand."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom listing element */}
            <div className={`${isDark ? 'bg-[#0b0b0e] border-zinc-900/90' : 'bg-zinc-55 bg-zinc-50 border-zinc-200'} border-t p-8 md:p-10 select-none`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Fully managed project</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Access our entire team</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Creative Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Updates every 2 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Weekly Consulting Call</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                  <span className={`text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'} font-medium`}>Everything included</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Row 3: Horizontal Sprints Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.002 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={`rounded-[2.25rem] border ${isDark ? 'bg-[#0e0e11] border-zinc-900/90' : 'bg-white border-zinc-200 shadow-md'} p-8 md:p-12 mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 ${isDark ? 'hover:border-[#cbf33b]/40' : 'hover:border-[#1d5ed5]/40'} transition-[border-color] duration-500`}
        >
          {/* Headline block */}
          <div className="text-left">
            <div className="flex items-center gap-3">
              <span className={`${isDark ? 'text-white' : 'text-zinc-900'} text-md font-bold tracking-wide`}>Sprints</span>
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wide uppercase font-bold border ${
                isDark 
                  ? 'bg-[#cbf33b]/10 text-[#cbf33b] border-[#cbf33b]/20' 
                  : 'bg-[#1d5ed5]/10 text-[#1d5ed5] border-[#1d5ed5]/20'
              }`}>
                2 week turn-around
              </span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.12] mt-6 max-w-xl">
              <span className="text-zinc-500 block sm:inline">Great for those who</span>{' '}
              <span className={`${isDark ? 'text-white' : 'text-zinc-900'} block sm:inline`}>want quality + speed.</span>
            </h3>
          </div>

          {/* Action Call block */}
          <div className="flex flex-col items-start lg:items-end justify-center gap-5 shrink-0">
            <div className="flex items-baseline">
              <span className="text-zinc-500 text-2xl font-light mr-1.5">$</span>
              <span className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight`}>10,000</span>
              <span className="text-zinc-500 text-xs font-semibold ml-2.5 uppercase tracking-wider font-mono">one-time fee</span>
            </div>

            <button
              onClick={handleAction}
              className={`${isDark ? 'bg-[#131315] hover:bg-[#1b1b1e] border-zinc-800/80' : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-250 border-zinc-200'} border rounded-full px-7 py-4 text-xs font-bold tracking-wide transition shadow-lg active:scale-95 flex items-center justify-center gap-1.5`}
            >
              <motion.span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: isDark
                    ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                    : "linear-gradient(110deg, #09090b 0%, #09090b 32%, #a4df12 45%, #1d5ed5 55%, #09090b 68%, #09090b 100%)",
                  backgroundSize: "200% auto",
                }}
                animate={{
                  backgroundPosition: ["0% center", "-200% center"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Reserve for September
              </motion.span>
              <span className={`text-sm ${isDark ? 'text-white' : 'text-zinc-900'} pl-0.5`}>→</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
