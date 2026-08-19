import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Layers, Workflow, Cpu, RefreshCw, Zap } from 'lucide-react';

export default function EmptySection({ isDark = true }: { isDark?: boolean }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Custom fanned cards mimicking the Walsh 3D stacked deck visual
  const cardsData = [
    {
      id: 1,
      title: 'Aidus Core',
      category: 'Workflow Router',
      year: '2026',
      bg: isDark ? 'bg-[#18181b]' : 'bg-white',
      border: isDark ? 'border-zinc-800' : 'border-zinc-300',
      textColor: isDark ? 'text-zinc-100' : 'text-zinc-900',
      image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=600',
      accent: 'bg-[#ff513c]',
      rotation: '-12deg',
      translateX: '-40px',
      translateY: '25px',
      zIndex: 10,
    },
    {
      id: 2,
      title: 'Optima-AI',
      category: 'Cognitive Engine',
      year: '2026',
      bg: isDark ? 'bg-zinc-900' : 'bg-[#fffbeb]',
      border: isDark ? 'border-zinc-700' : 'border-amber-200',
      textColor: isDark ? 'text-zinc-100' : 'text-[#78350f]',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600',
      accent: 'bg-[#ffc72c]',
      rotation: '8deg',
      translateX: '45px',
      translateY: '15px',
      zIndex: 20,
    },
    {
      id: 3,
      title: 'Aidus Autopilot',
      category: 'Systems Automation',
      year: '2026',
      bg: isDark ? 'bg-[#0a0a0d]' : 'bg-[#f4f2eb]',
      border: isDark ? 'border-[#ff513c]/30' : 'border-[#1b5bdc]/30',
      textColor: isDark ? 'text-white' : 'text-zinc-900',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600',
      accent: 'bg-[#1b5bdc]',
      rotation: '1deg',
      translateX: '0px',
      translateY: '0px',
      zIndex: 30,
    }
  ];

  return (
    <section 
      id="custom-empty-section" 
      className={`w-full max-w-[1920px] mx-auto relative overflow-hidden select-none transition-colors duration-500 pt-6 pb-6 md:pt-8 md:pb-8 ${
        isDark ? 'bg-[#09090b] text-white' : 'bg-zinc-50 text-neutral-900'
      }`}
    >
      {/* Structural layout grid lines */}
      <div className={`absolute inset-y-0 left-12 w-px ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200'} hidden xl:block`} />
      <div className={`absolute inset-y-0 right-12 w-px ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200'} hidden xl:block`} />
      <div className={`absolute inset-x-0 top-0 h-px ${isDark ? 'bg-zinc-900/40' : 'bg-zinc-200'}`} />
      <div className={`absolute inset-x-0 bottom-0 h-px ${isDark ? 'bg-zinc-900/40' : 'bg-zinc-200'}`} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col relative z-10 pt-0">

        {/* 3. COLOSSAL EDITORIAL TYPOGRAPHIC STATEMENT */}
        <div className="w-full text-left mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-sans font-black tracking-[-0.04em] leading-[1.08] ${
              isDark ? 'text-white' : 'text-[#1c1917]'
            }`}
          >
            We are a{' '}
            <span className="relative inline-block mx-1.5 sm:mx-2.5 px-3 sm:px-5 py-0.5 sm:py-1 bg-[#105eff] rounded-[0.5rem] sm:rounded-[0.75rem] text-white italic font-normal tracking-wide shadow-md transform -rotate-[1deg]">
              cognitive
            </span>{' '}
            autopilot engine specializing in business{' '}
            <span className="relative inline-block px-4 sm:px-6 py-0.5 sm:py-1 mx-1">
              <span className="relative z-10">automation,</span>
              {/* Absolute hand-drawn circular SVG stroke around the highlight word mimicking Walsh signature styling */}
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className={`absolute inset-x-0 -inset-y-1.5 w-full h-[150%] pointer-events-none fill-none ${
                  isDark ? 'stroke-[#cbf33b]' : 'stroke-[#a4df12]'
                } stroke-[2.5] stroke-linecap-round stroke-dasharray-custom animate-pulse`}
              >
                <path d="M5,50 C15,10 85,15 95,50 C90,85 10,90 5,50 Z" />
              </svg>
            </span>{' '}
            continuous systems{' '}
            <span className={`relative inline-block px-3 sm:px-4 py-0 sm:py-0.5 border rounded-[0.5rem] font-black uppercase text-[0.85em] tracking-tight transform rotate-[1.5deg] ${
              isDark ? 'border-[#cbf33b] text-[#cbf33b]' : 'border-[#1d5ed5] text-[#1d5ed5]'
            }`}>
              optimization,
            </span>{' '}
            and AI-powered intelligence across every area of your business.
          </motion.h2>
        </div>

        {/* 4. MIDSECTION: NARROW PARAGRAPH, GRAPH BACKDROP & DUO-GALLERY CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative min-h-[400px] mb-6 md:mb-8">
          
          {/* Subtle wave oscillator backdrop pattern overlay crossing behind layout */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-48 pointer-events-none select-none z-0 opacity-40">
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full fill-none">
              <path 
                d="M0,100 C150,150 200,50 350,100 C500,150 550,50 700,100 C800,140 900,80 1000,100" 
                className={`${isDark ? 'stroke-zinc-800' : 'stroke-zinc-200'}`} 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
              />
              <path 
                d="M0,110 C150,160 200,60 350,110 C500,160 550,60 700,110 C800,150 900,90 1000,110" 
                className={`${isDark ? 'stroke-zinc-800/50' : 'stroke-zinc-200/50'}`} 
                strokeWidth="1" 
              />
            </svg>
          </div>

          {/* Left Description Column (4 spans) */}
          <div className="lg:col-span-4 flex flex-col pt-4 z-10">
            <p className={`text-base sm:text-lg font-sans font-medium leading-relaxed tracking-tight ${
              isDark ? 'text-zinc-400' : 'text-[#3c3830]'
            } mb-8`}>
              Most automation projects fail because they focus on individual tasks instead of the entire system. A booking workflow, chatbot, CRM, or reporting dashboard may solve one problem, but disconnected tools often create new ones. Real efficiency comes from connecting every process into a unified operational ecosystem.
            </p>

            <a 
              href="#features-triage"
              className={`inline-flex items-center gap-2 font-mono text-[11px] font-black uppercase tracking-[0.2em] group transition-colors ${
                isDark ? 'text-white hover:text-[#ff513c]' : 'text-neutral-900 hover:text-[#1b5bdc]'
              }`}
            >
              <span>↳ EXPLORE OUR FRAMEWORK</span>
            </a>
          </div>

          {/* Right Dual-Image Collage Column (8 spans) */}
          <div className="lg:col-span-8 grid grid-cols-12 gap-6 relative items-center z-10 select-none">
            
            {/* Primary Portrait Card - taller */}
            <div className="col-span-7 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl relative group">
              <img 
                src="https://i.pinimg.com/1200x/8b/1b/de/8b1bde7a5a6be93d93dd72006bc89761.jpg" 
                alt="Chrome sculptural abstract glass artwork"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white text-left select-none">
                <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                  isDark ? 'text-[#cbf33b]' : 'text-[#1d5ed5]'
                }`}>AIDUS OPERATING SYSTEM</span>
                <p className="font-serif text-lg md:text-xl font-medium tracking-tight mt-1">Systemized Execution</p>
              </div>
            </div>

            {/* Secondary Shifted Studio Canvas Card - smaller print */}
            <div className="col-span-5 aspect-square rounded-[1.5rem] overflow-hidden border border-zinc-200 shadow-xl relative group mt-10 md:mt-16">
              <img 
                src="https://res.cloudinary.com/dhpisrlby/image/upload/v1780244233/ChatGPT_Image_May_31_2026_at_09_46_44_PM_dh6nox.png" 
                alt="Elegant high impact typography setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>

          </div>

        </div>


      </div>
    </section>
  );
}
