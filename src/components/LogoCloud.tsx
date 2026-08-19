import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function LogoCloud({ isDark = true }: { isDark?: boolean }) {
  const customLogos = [
    {
      id: 'cooty',
      render: () => (
        <div className="flex items-center gap-2.5">
          <div className="flex items-center -space-x-1 shrink-0">
            <div className={`w-3.5 h-3.5 rounded-full ${isDark ? 'bg-zinc-650' : 'bg-zinc-350'}`} />
            <div className={`w-3.5 h-3.5 rounded-full ${isDark ? 'bg-white' : 'bg-zinc-900'}`} />
          </div>
          <span className={`text-[9px] font-sans font-black tracking-[0.2em] ${isDark ? 'text-white' : 'text-zinc-900'} uppercase`}>COOTY</span>
        </div>
      )
    },
    {
      id: 'nokti',
      render: () => (
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <span className={`text-[11px] font-sans font-light tracking-[0.25em] ${isDark ? 'text-white/95' : 'text-zinc-900/95 font-medium'}`}>NOKTI</span>
          <span className="text-[7px] tracking-widest text-[#88888b] uppercase mt-1 block">nail beauty bar</span>
        </div>
      )
    },
    {
      id: 'obsidian',
      render: () => (
        <div className="flex items-center gap-2 shrink-0">
          <svg className={`w-3.5 h-3.5 fill-none ${isDark ? 'stroke-zinc-400' : 'stroke-zinc-650'}`} viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 20V12m0 0L2 7m10 5l10-5" />
          </svg>
          <span className={`text-[9px] font-mono font-bold tracking-[0.16em] ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>OBSIDIAN</span>
        </div>
      )
    },
    {
      id: 'mamey',
      render: () => (
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="font-serif text-[13px] italic font-light text-zinc-400">M</span>
          <span className="font-serif text-[10px] font-light text-zinc-500 italic pb-0.5">mamey</span>
        </div>
      )
    },
    {
      id: 'prana',
      render: () => (
        <div className="flex items-center gap-2 shrink-0">
          <svg className={`w-3 h-3 ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3l9 9-9 9-9-9 9-9zM12 8v8M8 12h8" />
          </svg>
          <span className={`text-[9px] font-semibold tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>PRANA</span>
        </div>
      )
    },
    {
      id: 'discoverbali',
      render: () => (
        <div className="flex items-center gap-2 shrink-0">
          <div className={`border ${isDark ? 'border-zinc-800' : 'border-zinc-300'} px-1 py-0.5 rounded text-[7px] tracking-wide text-zinc-500 font-mono flex items-center gap-0.5`}>
            <span>🌊</span>
            <span>DB</span>
          </div>
          <span className={`text-[7px] tracking-[0.15em] uppercase font-sans ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>Discover Bali</span>
        </div>
      )
    },
    {
      id: 'alphawave',
      render: () => (
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col gap-0.5">
            <div className="w-3 h-0.5 bg-zinc-500 rounded-full" />
            <div className="w-3 h-0.5 bg-white rounded-full" />
            <div className="w-1.5 h-0.5 bg-zinc-500 rounded-full" />
          </div>
          <span className={`text-[9px] font-semibold tracking-[0.2em] ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>ALPHAWAVE</span>
        </div>
      )
    },
    {
      id: 'boltshift',
      render: () => (
        <div className="flex items-center gap-1.5 shrink-0">
          <svg className="w-3 h-3.5 text-[#8da315] fill-current" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className={`text-[9px] font-bold tracking-[0.12em] ${isDark ? 'text-zinc-300' : 'text-zinc-805 text-zinc-800'}`}>BOLTSHIFT</span>
        </div>
      )
    }
  ];

  return (
    <section 
      id="logo-cloud-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 pt-4 md:pt-6 pb-24 md:pb-36 bg-transparent ${isDark ? 'text-white' : 'text-zinc-900'} overflow-hidden relative transition-colors duration-500`}
    >
      {/* 1. Top Mini Logo Scroller/Bar */}
      <div className="w-full flex flex-col items-start pb-12 overflow-hidden select-none">
        <span className={`text-[11px] font-mono tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'} uppercase block mb-10 text-left`}>
          [ Trusted by our customers & partners ]
        </span>
        
        <div className="w-full flex overflow-hidden relative">
          <motion.div 
            className="flex gap-6 shrink-0 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }}
          >
            {[...customLogos, ...customLogos].map((logo, idx) => (
              <div 
                key={`${logo.id}-${idx}`} 
                className={`flex items-center justify-center shrink-0 h-16 min-w-[210px] px-8 rounded-2xl border ${isDark ? 'bg-zinc-900/40 border-zinc-900/90 hover:border-zinc-800' : 'bg-zinc-100/60 border-zinc-200/60 hover:border-zinc-300'} transition-all duration-300`}
              >
                {logo.render()}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. Headline Block */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-2 select-none">
          <span className={`text-[11px] font-mono tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'} uppercase block mt-2`}>
            [Our Approach]
          </span>
        </div>
        <div className="lg:col-span-10">
          <h2 className={`text-3xl sm:text-4xl md:text-[54px] font-sans font-medium tracking-tight ${isDark ? 'text-zinc-400' : 'text-zinc-500'} leading-[1.12]`}>
            Traditional agencies perfected <span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>the art of the pitch.</span>{' '}
            <motion.span 
              className={`font-semibold md:font-bold bg-clip-text text-transparent inline-block`}
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                  : "linear-gradient(110deg, #000000 0%, #000000 32%, #a4df12 45%, #1d5ed5 55%, #000000 68%, #000000 100%)",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: ["0% center", "-200% center"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              We perfected the art of the automation.
            </motion.span>{' '}
            When you need systems that move at the{' '}
            <motion.span 
              className={`font-semibold md:font-bold bg-clip-text text-transparent inline-block`}
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                  : "linear-gradient(110deg, #000000 0%, #000000 32%, #a4df12 45%, #1d5ed5 55%, #000000 68%, #000000 100%)",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: ["0% center", "-200% center"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
            >
              speed of your ambition,
            </motion.span>{' '}
            you need passing code{' '}
            <span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>instead of presentations.</span>
          </h2>
        </div>
      </div>

      {/* 3. Team Bio & Detailed Essay Info Grid (exactly like image) */}
      <div className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column (1/3 width): Profile Card */}
        <div className="lg:col-span-4 flex flex-col">
          <div className={`border ${isDark ? 'border-zinc-800 bg-[#121214] shadow-2xl' : 'border-zinc-200 bg-white shadow-md'} rounded-2xl p-4 flex flex-col relative group overflow-hidden transition-all duration-500`}>
            <div className="aspect-[3/4] w-full rounded-xl overflow-hidden relative">
              <img
                src="https://res.cloudinary.com/duxxogx4v/image/upload/v1780567023/file_00000000f77c71fabb1d51e415d14d0b_uvftyr.png"
                alt="Balaji Pasupathy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            </div>
            
            <div className="mt-5 text-left font-manrope">
              <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight leading-none`}>
                Balaji Pasupathy
              </h4>
              <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-600'} mt-1.5 font-medium uppercase tracking-wider`}>
                Founder & Systems Architect
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (2/3 width): Large Quote & Descriptive Copy columns */}
        <div className="lg:col-span-8 flex flex-col text-left">
          
          {/* Heart of the Statement */}
          <blockquote className={`text-xl md:text-3xl font-normal ${isDark ? 'text-zinc-200' : 'text-zinc-800 font-[450]'} leading-snug tracking-tight font-sans max-w-2xl`}>
            "After working with businesses across different industries, I kept seeing the same pattern. Owners were working harder than ever, yet growth remained unpredictable. Opportunities were being lost between enquiries, follow-ups, scheduling, reporting, and everyday operations. The issue wasn't effort. The issue was that too much depended on people remembering what a system should have been handling automatically."
          </blockquote>

          {/* Sub Paragraph Layout (two clean columns in white/gray text) */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-[14px] leading-relaxed font-manrope ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <div>
              <p className={`hover:${isDark ? 'text-white' : 'text-zinc-950'} transition-colors duration-300`}>
                That's why AIDUS was built differently. We don't sell automation as a trend or a buzzword. We study how a business operates, identify where friction exists, and engineer systems that remove repetitive work while improving speed, consistency, and visibility.
              </p>
            </div>
            <div>
              <p className={`hover:${isDark ? 'text-white' : 'text-zinc-950'} transition-colors duration-300`}>
                Every workflow we build is designed around measurable outcomes. Faster response times. Better lead conversion. Improved customer experience. Stronger operational control. The goal isn't simply to automate tasks — it's to create a business that performs better because the right systems are doing the right work.
              </p>
            </div>
          </div>

          {/* Elegant Outlined Link matching 'The studio' */}
          <div className="mt-12 flex justify-start">
            <a
              href="#triage-section"
              className={`inline-flex items-center gap-2 group text-sm font-bold tracking-wider uppercase ${isDark ? 'text-white border-zinc-850 border-zinc-800 hover:text-[#8da315]' : 'text-zinc-900 border-zinc-200 hover:text-[#7e940e]'} transition-colors duration-300 font-mono border-b pb-1`}
            >
              The Studio
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
