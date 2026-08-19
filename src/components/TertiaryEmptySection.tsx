import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, ShieldCheck, Clock, Workflow, LineChart } from 'lucide-react';

interface TertiaryEmptySectionProps {
  isDark?: boolean;
}

export default function TertiaryEmptySection({ isDark = true }: TertiaryEmptySectionProps) {
  // Years data for the horizontal interactive bar chart exactly mirroring the reference's layout
  const chartData = [
    { year: "2020", value: "$482B", width: "54%", highlighted: false },
    { year: "2022", value: "$597B", width: "66%", highlighted: false },
    { year: "2024", value: "$720B", width: "80%", highlighted: false },
    { year: "2026", value: "$860B", width: "95%", highlighted: true }
  ];

  // Grid values of the X axis layout
  const axisTicks = [
    "$100B", "$300B", "$500B", "$700B", "$900B"
  ];

  // User feedback bubbles floating around the core motivational question, mirroring the conversational bubbles in the reference image
  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      role: "Sales Team",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80",
      text: "We were generating leads every week, but half of them never received follow-up."
    },
    {
      id: 2,
      name: "Ralph Edwards",
      role: "Operations Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80",
      text: "Our staff spent more time updating spreadsheets than serving customers."
    },
    {
      id: 3,
      name: "Cameron Williamson",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&fit=crop&q=80",
      text: "We had tools for everything, but nothing actually worked together."
    },
    {
      id: 4,
      name: "Wade Warren",
      role: "Founder",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80",
      text: "Growth exposed every weakness in our workflow."
    },
    {
      id: 5,
      name: "Floyd Miles",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&fit=crop&q=80",
      text: "We didn't need more employees. We needed better systems."
    }
  ];

  return (
    <section 
      id="aidus-performance-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[110px] py-24 md:py-32 relative overflow-hidden transition-all duration-500 font-sans border-t ${
        isDark ? 'bg-[#09090b] border-zinc-900/40 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION 1: DESIGN VISION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 mb-28 text-left">
          
          {/* Main goal on the left */}
          <div className="lg:col-span-5 flex flex-col justify-start select-none">
            <span className={`text-[11px] font-mono tracking-[0.25em] uppercase font-bold ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            } mb-3 block`}>
              Project overview
            </span>
            
            <h3 className={`text-base font-bold uppercase tracking-wider mb-4 ${
              isDark ? 'text-zinc-300' : 'text-zinc-800'
            }`}>
              WHY BUSINESSES COME TO US
            </h3>
            <p className={`text-[13.5px] leading-relaxed font-medium ${
              isDark ? 'text-zinc-400' : 'text-zinc-550 text-zinc-500'
            } max-w-[380px]`}>
              Most business owners don't come to us because they want AI.
              They come to us because their team is overwhelmed, processes are inconsistent, customers wait too long for responses, and growth starts creating more problems than opportunities.
            </p>
          </div>

          {/* Design Concept on the right */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <h2 className="text-4xl md:text-[52px] font-black tracking-tight leading-[1.05] mb-6">
              <motion.span 
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: isDark
                    ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                    : "linear-gradient(110deg, #18181b 0%, #18181b 32%, #a4df12 45%, #1d5ed5 55%, #18181b 68%, #18181b 100%)",
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
                The Hidden Cost
              </motion.span>
              <br />
              <span className="text-[#0266fe]">Of Manual Operations</span>
            </h2>
            
            <p className={`text-[14px] sm:text-[15px] leading-relaxed font-normal ${
              isDark ? 'text-zinc-450 text-zinc-400' : 'text-zinc-500'
            } max-w-[560px]`}>
              The biggest threat to growth is rarely competition.
              It's the invisible operational friction that accumulates every day—missed follow-ups, delayed approvals, repetitive administrative work, disconnected systems, and decisions trapped inside spreadsheets. AIDUS removes these bottlenecks by turning business operations into intelligent, self-executing systems.
            </p>
          </div>
        </div>


        {/* SECTION 2: DYNAMIC GROWTH MARKET VALUE TIMELINE */}
        <div className="w-full text-center select-none mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-[1.1]">
            Automation <span className={isDark ? 'text-white' : 'text-black'}>market</span> will<br className="sm:hidden" /> surge by{' '}
            <motion.span 
              className="bg-clip-text text-transparent inline-block font-black"
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
              2026
            </motion.span>
          </h2>

          {/* Value Graph Container */}
          <div className="mt-14 max-w-4xl mx-auto relative">
            <div className={`p-8 rounded-[24px] border ${
              isDark ? 'bg-[#0c0c10]/40 border-zinc-900' : 'bg-[#fafafa] border-zinc-200/60'
            } relative overflow-hidden`}>
              
              {/* Backgrid Lines */}
              <div className="absolute inset-0 flex justify-between pointer-events-none px-20">
                {axisTicks.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-px h-full ${
                      isDark ? 'bg-zinc-900/40' : 'bg-zinc-200/40'
                    }`} 
                  />
                ))}
              </div>

              {/* Dynamic Horizontal Bars */}
              <div className="relative z-10 flex flex-col gap-5 pt-4 pb-8">
                {chartData.map((bar, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    {/* Year Label */}
                    <span className={`w-12 text-left text-xs font-semibold font-mono ${
                      isDark ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>
                      {bar.year}
                    </span>

                    {/* Bar Line Container */}
                    <div className="flex-1 text-left relative">
                      <motion.div
                        className="h-10 rounded-full flex items-center justify-end px-5 relative select-none"
                        initial={{ width: 0 }}
                        whileInView={{ width: bar.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          background: bar.highlighted
                            ? 'linear-gradient(90deg, #0266fe 0%, #3b82f6 100%)'
                            : isDark ? 'linear-gradient(90deg, #18181b 0%, #202025 100%)' : 'linear-gradient(90deg, #e4e4e7 0%, #f4f4f5 100%)'
                        }}
                      >
                        <span className={`text-[11px] font-bold font-mono ${
                          bar.highlighted ? 'text-white' : isDark ? 'text-zinc-400' : 'text-zinc-650'
                        }`}>
                          {bar.value}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Custom Axis Marks */}
              <div className="relative border-t border-zinc-200/10 dark:border-zinc-800/20 pt-4 flex justify-between px-[70px]">
                {axisTicks.map((tick, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-zinc-450 text-zinc-500 font-bold">
                    {tick}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
        {/* SECTION 3: MULTI-DIRECTIONAL FLOATING WORKSPACE MOTIVATORS */}
        <div className="mt-28 md:mt-44 w-full max-w-6xl mx-auto relative min-h-[960px] md:min-h-[880px] flex flex-col md:block items-center justify-center overflow-visible select-none z-10">
          
          {/* Subtle decorative dot grids at sides */}
          <div className={`absolute -top-10 -left-6 w-24 h-24 opacity-25 select-none pointer-events-none hidden lg:block ${isDark ? 'text-zinc-800' : 'text-zinc-300'}`}>
            <svg width="100" height="100" fill="currentColor">
              <defs>
                <pattern id="dot-pattern-3" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dot-pattern-3)" />
            </svg>
          </div>
          <div className={`absolute bottom-20 -right-6 w-24 h-24 opacity-25 select-none pointer-events-none hidden lg:block ${isDark ? 'text-zinc-800' : 'text-zinc-300'}`}>
            <svg width="100" height="100" fill="currentColor">
              <defs>
                <pattern id="dot-pattern-4" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dot-pattern-4)" />
            </svg>
          </div>

          {/* Orbit rings & decorative dots as in the reference image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <div className={`w-[580px] h-[580px] rounded-full border border-dashed relative ${
              isDark ? 'border-zinc-800/60' : 'border-zinc-200/80'
            }`}>
              {/* Some floating small accent blue/zinc dots on the perimeter */}
              <div className="absolute top-[8%] left-[18%] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse" />
              <div className="absolute top-[78%] left-[12%] w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-650" />
              <div className="absolute top-[34%] right-[4%] w-2 h-2 rounded-full bg-blue-400/80 shadow-[0_0_8px_rgba(96,165,250,0.5)] animate-pulse" />
              <div className="absolute bottom-[24%] right-[10%] w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-650" />
              
              {/* Delicate blue plus symbols along the orbit */}
              <span className="absolute top-[48%] -left-1 text-blue-500 font-mono text-sm font-light select-none">+</span>
              <span className="absolute top-[18%] -right-1 text-blue-400 font-mono text-sm font-light select-none">+</span>
              <span className="absolute bottom-[4%] right-[40%] text-blue-500 font-mono text-sm font-light select-none">+</span>
            </div>
          </div>

          {/* Centered Motivational block, mimicking the design image perfectly */}
          <div className="max-w-[480px] text-center my-12 md:my-0 z-10 md:absolute md:left-1/2 md:top-[44%] md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-auto flex flex-col items-center justify-center">
            
            {/* Pill Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border text-[11px] font-semibold mb-6 select-none shadow-sm ${
              isDark 
                ? 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400' 
                : 'bg-blue-50/50 border-blue-100/60 text-blue-600'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 text-[#0266fe]" />
              <span>Trusted by business leaders</span>
            </div>

            {/* Headline statement */}
            <h2 className={`text-3xl md:text-[35px] font-black tracking-[-0.03em] leading-[1.12] ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              What finally makes <br />
              <span className="text-[#0266fe] dark:text-[#3b82f6]">business owners</span> realize <br className="hidden sm:inline" />
              they need <span className="text-[#0266fe] dark:text-[#3b82f6]">better systems</span>?
            </h2>

            {/* Subtext below */}
            <span className={`text-[12px] font-mono tracking-wider uppercase font-bold mt-5 block ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Real people. Real results.
            </span>
          </div>

          {/* Testimonial Cards */}
          {/* Card 1: Leslie Alexander (Top Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.05 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className="w-full md:w-[330px] self-start mb-10 md:mb-0 md:absolute md:top-0 md:left-0 z-20"
          >
            <div className={`p-8 rounded-[1.75rem] text-left transition-all duration-300 relative border ${
              isDark 
                ? 'bg-[#0b0b10]/95 border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:border-zinc-800' 
                : 'bg-white border-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:border-zinc-200'
            }`}>
              {/* Double Quote icon */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-500 mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.017-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v9.999h-11v-.001zm-11 0v-7.391c0-5.704 3.748-9.57 10.016-10.609l.996 2.154c-2.434.914-4.01 3.638-4.01 5.849h3.996v9.999h-11v-.001z" />
              </svg>

              <p className={`text-[13.2px] leading-relaxed mb-6 font-medium tracking-tight ${isDark ? 'text-zinc-300' : 'text-zinc-650'}`}>
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center gap-3.5">
                <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-11 h-11 rounded-full object-cover shadow-sm bg-neutral-100 dark:bg-zinc-800" />
                <div>
                  <h4 className={`text-[13.5px] font-bold tracking-tight leading-none mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{testimonials[0].name}</h4>
                  <span className={`text-[10px] font-bold font-mono tracking-tight ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{testimonials[0].role}</span>
                </div>
              </div>

              {/* Overlapping Floating badge at the bottom edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-35">
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border shadow-md transition-shadow hover:shadow-lg ${
                  isDark ? 'bg-[#0f0f16] border-zinc-800 text-blue-400' : 'bg-white border-zinc-100 text-blue-600'
                }`}>
                  <TrendingUp className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Ralph Edwards (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className="w-full md:w-[330px] self-start mb-10 md:mb-0 md:absolute md:top-0 md:right-0 z-20"
          >
            <div className={`p-8 rounded-[1.75rem] text-left transition-all duration-300 relative border ${
              isDark 
                ? 'bg-[#0b0b10]/95 border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:border-zinc-800' 
                : 'bg-white border-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:border-zinc-200'
            }`}>
              {/* Double Quote icon */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-500 mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.017-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v9.999h-11v-.001zm-11 0v-7.391c0-5.704 3.748-9.57 10.016-10.609l.996 2.154c-2.434.914-4.01 3.638-4.01 5.849h3.996v9.999h-11v-.001z" />
              </svg>

              <p className={`text-[13px] leading-relaxed mb-6 font-medium tracking-tight ${isDark ? 'text-zinc-300' : 'text-zinc-650'}`}>
                "{testimonials[1].text}"
              </p>
              <div className="flex items-center gap-3.5">
                <img src={testimonials[1].avatar} alt={testimonials[1].name} className="w-11 h-11 rounded-full object-cover shadow-sm bg-neutral-100 dark:bg-zinc-800" />
                <div>
                  <h4 className={`text-[13.5px] font-bold tracking-tight leading-none mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{testimonials[1].name}</h4>
                  <span className={`text-[10px] font-bold font-mono tracking-tight ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{testimonials[1].role}</span>
                </div>
              </div>

              {/* Overlapping Floating badge at the bottom edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-35">
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border shadow-md transition-shadow hover:shadow-lg ${
                  isDark ? 'bg-[#0f0f16] border-zinc-800 text-blue-400' : 'bg-white border-zinc-100 text-blue-600'
                }`}>
                  <Clock className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Cameron Williamson (Middle Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.25 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className="w-full md:w-[330px] mb-10 md:mb-0 md:absolute md:top-[380px] md:left-[-6%] z-20"
          >
            <div className={`p-8 rounded-[1.75rem] text-left transition-all duration-300 relative border ${
              isDark 
                ? 'bg-[#0b0b10]/95 border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:border-zinc-800' 
                : 'bg-white border-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:border-zinc-200'
            }`}>
              {/* Double Quote icon */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-500 mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.017-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v9.999h-11v-.001zm-11 0v-7.391c0-5.704 3.748-9.57 10.016-10.609l.996 2.154c-2.434.914-4.01 3.638-4.01 5.849h3.996v9.999h-11v-.001z" />
              </svg>

              <p className={`text-[13px] leading-relaxed mb-6 font-medium tracking-tight ${isDark ? 'text-zinc-300' : 'text-zinc-650'}`}>
                "{testimonials[2].text}"
              </p>
              <div className="flex items-center gap-3.5">
                <img src={testimonials[2].avatar} alt={testimonials[2].name} className="w-11 h-11 rounded-full object-cover shadow-sm bg-neutral-100 dark:bg-zinc-800" />
                <div>
                  <h4 className={`text-[13.5px] font-bold tracking-tight leading-none mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{testimonials[2].name}</h4>
                  <span className={`text-[10px] font-bold font-mono tracking-tight ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{testimonials[2].role}</span>
                </div>
              </div>

              {/* Overlapping Floating badge at the bottom edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-35">
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border shadow-md transition-shadow hover:shadow-lg ${
                  isDark ? 'bg-[#0f0f16] border-zinc-800 text-blue-400' : 'bg-white border-zinc-100 text-blue-600'
                }`}>
                  <Workflow className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Wade Warren (Middle Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className="w-full md:w-[330px] mb-10 md:mb-0 md:absolute md:top-[380px] md:right-[-6%] z-20"
          >
            <div className={`p-8 rounded-[1.75rem] text-left transition-all duration-300 relative border ${
              isDark 
                ? 'bg-[#0b0b10]/95 border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:border-zinc-800' 
                : 'bg-white border-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:border-zinc-200'
            }`}>
              {/* Double Quote icon */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-500 mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.017-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v9.999h-11v-.001zm-11 0v-7.391c0-5.704 3.748-9.57 10.016-10.609l.996 2.154c-2.434.914-4.01 3.638-4.01 5.849h3.996v9.999h-11v-.001z" />
              </svg>

              <p className={`text-[13px] leading-relaxed mb-6 font-medium tracking-tight ${isDark ? 'text-zinc-300' : 'text-zinc-650'}`}>
                "{testimonials[3].text}"
              </p>
              <div className="flex items-center gap-3.5">
                <img src={testimonials[3].avatar} alt={testimonials[3].name} className="w-11 h-11 rounded-full object-cover shadow-sm bg-neutral-100 dark:bg-zinc-800" />
                <div>
                  <h4 className={`text-[13.5px] font-bold tracking-tight leading-none mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{testimonials[3].name}</h4>
                  <span className={`text-[10px] font-bold font-mono tracking-tight ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{testimonials[3].role}</span>
                </div>
              </div>

              {/* Overlapping Floating badge at the bottom edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-35">
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border shadow-md transition-shadow hover:shadow-lg ${
                  isDark ? 'bg-[#0f0f16] border-zinc-800 text-blue-400' : 'bg-white border-zinc-100 text-blue-600'
                }`}>
                  <LineChart className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Floyd Miles (Bottom Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.45 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className="w-full md:w-[330px] md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 z-20 mt-10 md:mt-0"
          >
            <div className={`p-8 rounded-[1.75rem] text-left transition-all duration-300 relative border ${
              isDark 
                ? 'bg-[#0b0b10]/95 border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.65)] hover:border-zinc-800' 
                : 'bg-white border-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:border-zinc-200'
            }`}>
              {/* Double Quote icon */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-500 mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.017-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v9.999h-11v-.001zm-11 0v-7.391c0-5.704 3.748-9.57 10.016-10.609l.996 2.154c-2.434.914-4.01 3.638-4.01 5.849h3.996v9.999h-11v-.001z" />
              </svg>

              <p className={`text-[13px] leading-relaxed mb-6 font-medium tracking-tight ${isDark ? 'text-zinc-300' : 'text-zinc-650'}`}>
                "{testimonials[4].text}"
              </p>
              <div className="flex items-center gap-3.5">
                <img src={testimonials[4].avatar} alt={testimonials[4].name} className="w-11 h-11 rounded-full object-cover shadow-sm bg-neutral-100 dark:bg-zinc-800" />
                <div>
                  <h4 className={`text-[13.5px] font-bold tracking-tight leading-none mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{testimonials[4].name}</h4>
                  <span className={`text-[10px] font-bold font-mono tracking-tight ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{testimonials[4].role}</span>
                </div>
              </div>

              {/* Overlapping Floating badge at the bottom edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-35">
                <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center border shadow-md transition-shadow hover:shadow-lg ${
                  isDark ? 'bg-[#0f0f16] border-zinc-800 text-blue-400' : 'bg-white border-zinc-100 text-blue-600'
                }`}>
                  <Users className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
