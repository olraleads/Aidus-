import React from 'react';
import { motion } from 'motion/react';

interface QuaternaryEmptySectionProps {
  isDark?: boolean;
}

export default function QuaternaryEmptySection({ isDark = true }: QuaternaryEmptySectionProps) {
  const handleScrollToCTA = () => {
    const el = document.getElementById('cta-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="quaternary-empty-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 pt-24 md:pt-32 pb-2 sm:pb-4 relative overflow-hidden transition-all duration-500 font-sans border-t ${
        isDark ? 'bg-[#09090b] border-zinc-900 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-950'
      }`}
    >
      {/* Soft elegant vignette / grid pattern */}
      <div className={`absolute inset-0 bg-[radial-gradient(#80808012_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none opacity-80`} />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* 2. Gigantic Premium Swiss Headings */}
        <div className="select-text mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-[52px] sm:text-[76px] md:text-[92px] font-sans font-[900] tracking-[-0.035em] leading-[1.04] ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Ready To Build A
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`text-[52px] sm:text-[76px] md:text-[92px] font-sans font-[900] tracking-[-0.035em] leading-[1.12] mt-1 bg-clip-text text-transparent py-3 px-1`}
            style={{
              backgroundImage: isDark
                ? "linear-gradient(to bottom, #ffffff 40%, rgba(255,255,255,0.48) 100%)"
                : "linear-gradient(to bottom, #09090b 40%, rgba(9,9,11,0.42) 100%)"
            }}
          >
            Business That Runs Smarter?
          </motion.h1>
        </div>

        {/* 3. The Portrait & Profile Match Swap Illustration (OVERLAPPING CARDS) */}
        <div className="relative w-full max-w-[500px] h-[280px] sm:h-[300px] flex items-center justify-center mt-10 mb-2 select-none">
          
          {/* Left card: Actual Photo Squircle */}
          <motion.div 
            initial={{ opacity: 0, x: -40, rotate: -15 }}
            whileInView={{ opacity: 1, x: -35, rotate: -11 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="absolute left-[8%] sm:left-[12%] w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-[36px] bg-black border border-black/30 overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.35)] z-10 hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="w-full h-full relative flex items-center justify-center bg-black">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" 
                alt="Mark Vassilevskiy portrait" 
                className="w-full h-full object-cover grayscale brightness-105 contrast-[1.05] object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Sync arrows in between */}
          <div className="absolute z-30 flex items-center justify-center w-14 h-14 translate-x-[-12px] sm:translate-x-[-15px]">
            <motion.div 
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.35 }}
              className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/12 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white scale-110">
                <path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* Right card: Stylized Avatar Empty profile card */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 15 }}
            whileInView={{ opacity: 1, x: 35, rotate: 11 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={`absolute right-[8%] right-[12%] w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-[36px] overflow-hidden flex flex-col items-center justify-center border hover:scale-[1.03] transition-transform duration-300 ${
              isDark 
                ? 'bg-gradient-to-br from-zinc-800 to-zinc-950 border-zinc-700/50 shadow-[0_16px_50px_rgba(0,0,0,0.4)]' 
                : 'bg-gradient-to-br from-[#e2e2e5] to-[#f4f4f7] border-zinc-300 shadow-[0_16px_50px_rgba(0,0,0,0.06)]'
            }`}
          >
            {/* Minimal glossy circular head & broad curved shoulders */}
            <div className="flex flex-col items-center justify-center w-full h-full relative">
              <div className={`w-[72px] h-[72px] rounded-full mb-3.5 ${
                isDark ? 'bg-zinc-700' : 'bg-[#404047]'
              }`} />
              <div className={`w-[124px] h-[52px] rounded-[24px] absolute bottom-1 ${
                isDark ? 'bg-zinc-900' : 'bg-zinc-950/85'
              }`} />
            </div>
          </motion.div>

        </div>



      </div>
    </section>
  );
}
