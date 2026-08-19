import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Code2, Kanban } from 'lucide-react';

export default function Testimonials({ isDark = true }: { isDark?: boolean }) {
  const [tickerTime, setTickerTime] = useState('14:00:23 UTC');

  // Real-time ticking indicator to match the raw physical details
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toISOString().split('T')[1].substring(0, 8) + ' UTC';
      setTickerTime(timeStr);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Capabilities with details for micro-capsules and descriptions
  const services = [
    {
      num: "01",
      title: "AI Communication Systems",
      pills: ["CALLS", "EMAILS", "SMS", "WHATSAPP"],
      desc: "Never miss another enquiry, lead, booking, or customer follow-up. We build AI communication systems that answer, qualify, route, and respond automatically across every customer touchpoint."
    },
    {
      num: "02",
      title: "Workflow Automation",
      pills: ["MAKE", "N8N", "ZAPIER", "API FLOWS"],
      desc: "Replace repetitive administrative tasks with automated workflows that move information, trigger actions, and keep your business running without constant manual intervention."
    },
    {
      num: "03",
      title: "CRM & Business Systems",
      pills: ["GHL", "HUBSPOT", "SALES", "PIPELINES"],
      desc: "Centralize customer interactions, sales activity, team workflows, and operational data into one organized system that improves visibility and execution."
    },
    {
      num: "04",
      title: "Growth Automation",
      pills: ["LEAD NURTURE", "REVIEWS", "REACTIVATION"],
      desc: "Automate lead nurturing, customer retention, review generation, follow-ups, and growth processes that help businesses increase revenue without increasing workload."
    }
  ];

  return (
    <section
      id="testimonials-section"
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-36 bg-transparent ${isDark ? 'text-white' : 'text-zinc-900'} relative overflow-hidden font-sans select-none transition-colors duration-500`}
    >
      {/* 1. Raw Aesthetic Metadata Tick Line */}
      <div className={`w-full flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-8 border-b ${isDark ? 'border-zinc-900' : 'border-zinc-200'} pb-4 select-none`}>
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff513c] animate-pulse" />
          <span>[ AIDUS // COGNITIVE LABS ]</span>
        </div>
        <div className="md:flex items-center gap-6 hidden">
          <span>COORDINATES // 37.7749° N, 122.4194° W</span>
          <span>SYSTEM // OK</span>
        </div>
        <span className="tabular-nums text-zinc-400">{tickerTime}</span>
      </div>

      {/* 2. Giant Brutalist Display Logo Header */}
      <div className="relative w-full flex flex-col lg:flex-row items-start lg:items-end justify-between select-none mb-16 md:mb-24 overflow-visible">
        <div className="flex flex-col">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.8rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-sans font-[950] tracking-[-0.05em] leading-[0.78] uppercase"
          >
            <motion.span
              className="bg-clip-text text-transparent block"
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                  : "linear-gradient(110deg, #09090b 0%, #09090b 32%, #a2df14 45%, #1b5bdc 55%, #09090b 68%, #09090b 100%)",
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
              BY.AIDUS®
            </motion.span>
          </motion.h2>
          <div className="flex items-center mt-1 md:mt-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-2.5 bg-[#ff513c] mr-4 hidden md:block"
            />
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.8rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-sans font-[950] tracking-[-0.05em] leading-[0.78] uppercase"
            >
              <motion.span
                className="bg-clip-text text-transparent block"
                style={{
                  backgroundImage: "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)",
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
                _STUDIO
              </motion.span>
            </motion.h2>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 shrink-0 select-none pointer-events-none self-end">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.08, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-[950] tracking-[-0.05em] leading-[0.8] ${isDark ? 'text-zinc-500' : 'text-zinc-300'} uppercase select-none text-right`}
          >
            / FROM SV
          </motion.h2>
        </div>
      </div>

      {/* 3. Main Brand Showcase & Capsule Container */}
      <div className={`border ${isDark ? 'border-zinc-900/60 bg-[#08080a]/90' : 'border-zinc-200 bg-white shadow-xl'} rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch overflow-hidden relative mb-12 md:mb-16 duration-500`}>
        {/* Subtle grid accent background */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? '#0c0c0e' : '#f4f4f5'}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? '#0c0c0e' : '#f4f4f5'}_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none`} />

        {/* Row 1: Smarter & Adaptive Header Display (Sits elegantly within the container) */}
        <div className="col-span-1 lg:col-span-12 flex flex-col items-center justify-center text-center select-none pt-2 pb-6 sm:pb-10 relative z-10">
          <h3 className={`text-[1.35rem] sm:text-[1.85rem] md:text-[2.25rem] lg:text-[4.2rem] font-sans font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'} leading-tight sm:leading-snug lg:leading-[1.12] max-w-4xl`}>
            A global automation partner <br className="hidden lg:inline" />
            dedicated to building {' '}
            <span className="inline-flex items-center justify-center bg-[#28a7e0] text-black w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full mx-1 sm:mx-1.5 shadow-[0_5px_15px_rgba(40,167,224,0.35)] shrink-0 align-middle">
              <span className="w-3 h-3 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-black flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="w-full h-full">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
            </span>
            {' '}smarter <br className="hidden lg:inline" />
            and {' '}
            <span className="inline-flex items-center justify-center bg-[#a2df14] text-black w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full mx-1 sm:mx-1.5 shadow-[0_5px_15px_rgba(162,223,20,0.35)] shrink-0 align-middle">
              <span className="w-3 h-3 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-black flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="w-full h-full">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="10" y1="22" x2="14" y2="22" />
                </svg>
              </span>
            </span>
            {' '}more adaptive
          </h3>
        </div>

        {/* Row 2: Bento Grid Panels */}
        
        {/* Card 1: Blue Corporate/Systems Partner Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="col-span-1 lg:col-span-4 bg-gradient-to-b from-[#1b43bc] via-[#102a7a] to-[#0a1b52] rounded-[2rem] p-5 xs:p-6 lg:p-7 flex flex-col justify-between overflow-hidden shadow-2xl relative min-h-[380px] xs:min-h-[420px] sm:min-h-[440px] md:min-h-[460px] border border-blue-900/30 group"
        >
          {/* Subtle light stream effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)] pointer-events-none" />

          {/* Top Row bar details */}
          <div className="flex justify-between items-center relative z-10 w-full mb-6">
            <span className="text-white font-sans text-sm font-black tracking-widest uppercase">
              AIDUS™
            </span>
            <div className="bg-white text-black p-2 rounded-xl shadow-lg w-9 h-9 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-black">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
          </div>

          {/* Designer Portrait element */}
          <div className="absolute inset-x-0 top-14 bottom-32 xs:top-15 bottom-34 sm:top-16 sm:bottom-36 flex justify-center items-center pointer-events-none overflow-hidden select-none opacity-85 group-hover:scale-105 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=350&auto=format&fit=crop"
              alt="Aidus Partner"
              className="w-[90%] h-[90%] object-cover object-top rounded-2xl filter grayscale contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
            {/* Visual bottom vignetting inside the picture */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0a1b52] to-transparent" />
          </div>

          {/* White Bottom Badge overlay card */}
          <div className="bg-white text-black rounded-[1.75rem] p-4 xs:p-5 shadow-2xl relative z-10 mt-auto select-none border border-white/20">
            <h4 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight text-black leading-none mb-2">
              120+
            </h4>
            <p className="text-[11px] xs:text-[12px] sm:text-[13px] text-zinc-600 font-medium leading-relaxed">
              Collaborating with leading AI models and sovereign high-throughput cloud networks.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Neutral High-Contrast Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          whileHover={{ y: -4 }}
          className={`col-span-1 lg:col-span-4 ${isDark ? 'bg-[#0e0e11] border-zinc-900/90' : 'bg-zinc-50 border-zinc-200'} rounded-[2rem] p-5 xs:p-7 lg:p-8 border flex flex-col justify-between shadow-2xl relative min-h-[380px] xs:min-h-[420px] sm:min-h-[440px] md:min-h-[460px] group transition-[border-color] duration-500`}
        >
          <div>
            <span className={`text-[10px] xs:text-[11px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-500'} tracking-wider uppercase block font-medium`}>
              Commitment to measurable
            </span>
            <h4 className={`text-5xl xs:text-6xl sm:text-7xl font-black ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tighter mt-4 xs:mt-6 mb-2 leading-none`}>
              100%
            </h4>
          </div>

          <div className="mt-auto">
            {/* Overlay avatar clustering */}
            <div className="flex -space-x-2.5 overflow-hidden mb-4 xs:mb-6 filter grayscale contrast-125 saturate-150">
              <img
                className={`inline-block h-8 w-8 rounded-full ring-2 ${isDark ? 'ring-[#0e0e11]' : 'ring-white'} object-cover`}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop"
                alt="Partner Avatar 1"
                referrerPolicy="no-referrer"
              />
              <img
                className={`inline-block h-8 w-8 rounded-full ring-2 ${isDark ? 'ring-[#0e0e11]' : 'ring-white'} object-cover`}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop"
                alt="Partner Avatar 2"
                referrerPolicy="no-referrer"
              />
              <img
                className={`inline-block h-8 w-8 rounded-full ring-2 ${isDark ? 'ring-[#0e0e11]' : 'ring-white'} object-cover`}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80&auto=format&fit=crop"
                alt="Partner Avatar 3"
                referrerPolicy="no-referrer"
              />
              <img
                className={`inline-block h-8 w-8 rounded-full ring-2 ${isDark ? 'ring-[#0e0e11]' : 'ring-white'} object-cover`}
                src="https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=80&auto=format&fit=crop"
                alt="Partner Avatar 4"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quote details */}
            <blockquote className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'} font-medium text-[12px] xs:text-[13.5px] sm:text-[14.5px] leading-relaxed italic border-l-2 border-[#ff513c]/30 pl-3`}>
              "Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless."
            </blockquote>
          </div>
        </motion.div>

        {/* Card 3: Stacked Micro-Grid panel */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 justify-between min-h-0 sm:min-h-[440px] md:min-h-[460px]">
          {/* Card 3A: Giant lime-green metrics indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="flex-1 bg-[#cbf33b] text-black rounded-[2rem] p-5 xs:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group select-none cursor-pointer min-h-[170px] xs:min-h-[200px] sm:min-h-0"
          >
            <div>
              <span className="text-[9px] xs:text-[10px] font-mono text-black/60 tracking-wider uppercase block font-bold">
                Data Points
              </span>
              <h4 className="text-4xl xs:text-5xl sm:text-6xl font-black text-black tracking-tight mt-3 xs:mt-4 leading-none">
                520k+
              </h4>
            </div>

            <p className="text-[11px] xs:text-[12.5px] sm:text-[13.5px] text-black/85 font-semibold leading-relaxed mt-4 xs:mt-6">
              Analyzed monthly to power smarter system-wide automation & conversions.
            </p>
          </motion.div>

          {/* Card 3B: Minimalist Continents panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            whileHover={{ y: -3 }}
            className={`rounded-[1.75rem] p-5 xs:p-6 flex items-center justify-between border ${isDark ? 'bg-[#0e0e11] border-zinc-900/90' : 'bg-zinc-50 border-zinc-200'} shadow-xl select-none transition-colors duration-500`}
          >
            <span className={`text-[10px] xs:text-[11px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-500'} tracking-wider uppercase block font-semibold`}>
              Continents
            </span>
            <h4 className={`text-3xl xs:text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tighter leading-none`}>
              20+
            </h4>
          </motion.div>
        </div>

      </div>

      {/* 3.5 GIGANTIC condensed logo word "SERVICES" with the wave gradient flow effect */}
      <div className="relative w-full overflow-hidden text-center mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-8 sm:mb-12 md:mb-16 lg:mb-20 z-0">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] xs:text-[68px] sm:text-[100px] md:text-[130px] lg:text-[190px] xl:text-[270px] font-sans font-[1000] tracking-[-0.07em] leading-[0.75] uppercase select-none pointer-events-none whitespace-nowrap break-keep"
        >
          <motion.span
            className="bg-clip-text text-transparent block"
            style={{
              backgroundImage: isDark
                ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                : "linear-gradient(110deg, #1c1917 0%, #1c1917 32%, #a4df12 45%, #1d5ed5 55%, #1c1917 68%, #1c1917 100%)",
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
            services
          </motion.span>
        </motion.h2>
      </div>

      {/* 4. Elegant Services & Capabilities Accent Header */}
      <div className="w-full text-left relative z-10 mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-14 select-none">
        <span className={`text-[12px] font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'} font-bold tracking-widest uppercase block mb-3 pl-1`}>
          ( Our capability )
        </span>
        <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-sans font-medium tracking-tight leading-tight max-w-[55rem] select-none text-left ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          We Build Intelligent Systems That <br className="hidden sm:inline" /> Eliminate (<span className={`font-editorial italic font-normal pl-1 pr-1 ${isDark ? 'text-[#cbf33b]' : 'text-[#1d5ed5]'}`}>manual work</span>), Automate <br className="hidden sm:inline" /> Critical Operations, And Create <br className="hidden sm:inline" /> Businesses That Scale (<span className={`font-editorial italic font-normal pl-1 pr-1 ${isDark ? 'text-[#cbf33b]' : 'text-[#1d5ed5]'}`}>without chaos</span>).
        </h3>
      </div>

      {/* 5. Fine Styled Services Accordion / Accord list */}
      <div className={`w-full flex flex-col relative z-10 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`} id="services-stacked">
        {services.map((item, index) => (
          <div
            key={item.num}
            className={`border-b ${isDark ? 'border-zinc-900/70' : 'border-zinc-200'} py-8 lg:py-10 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-baseline relative group cursor-pointer transition-all duration-300`}
          >
            {/* Number & Header Group (cols 4) */}
            <div className="lg:col-span-5 flex items-baseline select-none">
              <motion.span 
                className="text-3xl sm:text-4xl lg:text-5xl font-sans font-[950] tracking-normal leading-none shrink-0 cursor-all-scroll select-all select-none bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: isDark
                    ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                    : "linear-gradient(110deg, #1c1917 0%, #1c1917 32%, #a4df12 45%, #1d5ed5 55%, #1c1917 68%, #1c1917 100%)",
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
                {item.num}
              </motion.span>
              <div className="ml-4 sm:ml-6 text-left">
                <motion.h4 
                  className="text-2xl sm:text-3xl font-sans font-medium transition-colors duration-300 tracking-tight leading-snug bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                      : "linear-gradient(110deg, #1c1917 0%, #1c1917 32%, #a4df12 45%, #1d5ed5 55%, #1c1917 68%, #1c1917 100%)",
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
                  {item.title}
                </motion.h4>
                
                {/* Horizontal capsules matching screenshot */}
                <div className="flex flex-wrap gap-1.5 mt-3 select-none">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className={`border ${isDark ? 'border-zinc-900 bg-[#070709] text-zinc-400 font-bold hover:border-zinc-800 hover:text-white' : 'border-zinc-200 bg-zinc-50 text-zinc-650 font-medium hover:border-zinc-300 hover:text-zinc-900'} rounded-full px-2.5 py-0.5 text-[8.5px] font-mono uppercase tracking-wider transition-all duration-300`}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro details panel & interactive descriptor (cols 6) */}
            <div className={`lg:col-span-6 text-left ${isDark ? 'text-zinc-400' : 'text-zinc-650'} text-sm sm:text-[14.5px] leading-relaxed font-manrope`}>
              {item.desc}
            </div>

            {/* Subtle alignment target point / absolute plus line (cols 1) */}
            <div className={`lg:col-span-1 justify-self-end hidden lg:block opacity-40 group-hover:opacity-100 transition-opacity duration-300 border ${isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'} p-2 rounded-full shadow-md`}>
              <span className="text-zinc-500 font-bold text-xs select-none block">
                +
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
