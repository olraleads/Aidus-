import React from 'react';
import { motion } from 'motion/react';

interface QuinaryEmptySectionProps {
  isDark?: boolean;
}

export default function QuinaryEmptySection({ isDark = true }: QuinaryEmptySectionProps) {
  return (
    <section 
      id="quinary-empty-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[110px] py-24 md:py-32 relative overflow-hidden transition-all duration-500 font-sans border-t ${
        isDark ? 'bg-[#09090b] border-zinc-900/60 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
      }`}
    >
      {/* Decorative subtle gradient background overlays */}
      <div className={`absolute top-1/4 left-1/4 w-[450px] h-[450px] ${isDark ? 'bg-blue-500/5' : 'bg-blue-500/2'} blur-[140px] rounded-full pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ${isDark ? 'bg-indigo-500/5' : 'bg-indigo-500/2'} blur-[120px] rounded-full pointer-events-none`} />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top Header Section */}
        <div className="text-center select-none mb-12">
          {/* Centered Pill Badge */}
          <div className="inline-block mb-5">
            <span className={`text-[12px] px-4 py-1.5 rounded-full border ${
              isDark 
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400' 
                : 'bg-white border-zinc-200 text-zinc-600'
            } font-medium tracking-tight font-sans`}>
              Human Control • AI Execution
            </span>
          </div>

          {/* Core Title */}
          <h2 className={`text-4xl sm:text-[45px] md:text-[50px] font-bold tracking-tight leading-[1.12] mb-6 ${
            isDark ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            AI + Human: <span className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Better Together</span>
          </h2>

          {/* Subtitle Details */}
          <div className={`text-[14.5px] sm:text-[16px] leading-relaxed max-w-[620px] mx-auto font-normal space-y-1 ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>
            <p>AIDUS isn't designed to replace your team.</p>
            <p>It's designed to remove repetitive work, eliminate operational friction, and give your people more time to focus on decisions, customers, and growth.</p>
          </div>
        </div>

        {/* Middle Interactive Vector Connection Area */}
        <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 my-14 py-10">
          
          {/* Background Radiating Radar Beams */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
            <svg className="w-[110%] h-[110%] opacity-75 dark:opacity-40" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="beam-center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.14" />
                  <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="500" cy="300" r="320" fill="url(#beam-center-glow)" />
              
              {/* Radiating Line Beams */}
              {Array.from({ length: 28 }).map((_, i) => {
                const angle = (i * 360) / 28;
                const rad = (angle * Math.PI) / 180;
                const x2 = 500 + Math.cos(rad) * 450;
                const y2 = 300 + Math.sin(rad) * 450;
                return (
                  <line
                    key={i}
                    x1="500"
                    y1="300"
                    x2={x2}
                    y2={y2}
                    stroke={isDark ? "rgba(255, 255, 255, 0.045)" : "rgba(59, 130, 246, 0.05)"}
                    strokeWidth="1.1"
                    strokeDasharray="4 6"
                  />
                );
              })}
            </svg>
          </div>

          {/* Central Connecting Dashed Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-[26%] right-[26%] top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 z-0" />

          {/* Interactive Connector Badge Overlaid in Midst */}
          <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
            <div className={`px-5 py-2.5 rounded-full border shadow-xl ${
              isDark 
                ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-black/80' 
                : 'bg-white border-zinc-200/90 text-zinc-800'
            } flex items-center gap-1.5 text-[12.5px] font-sans font-medium whitespace-nowrap`}>
              <span className="text-[#3b82f6] font-extrabold tracking-tight">Operator</span>
              <span className="text-zinc-400 dark:text-zinc-650 font-normal">+</span>
              <motion.span
                className="font-semibold bg-clip-text text-transparent inline-block"
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
                AIDUS Coordinator
              </motion.span>
            </div>
          </div>

          {/* Left Entity Card: Team Portrait */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-[2.5rem] p-4 border relative ${
              isDark ? 'bg-zinc-900/30 border-zinc-800/80 shadow-2xl shadow-black/50' : 'bg-white border-zinc-200/80 shadow-xl'
            } flex items-center justify-center`}>
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-100 relative shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=80" 
                  alt="Operations Leader Portrait"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                {/* Visual Glass shine over the photograph */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Entity Card: Blue Glowing App Icon/Logo */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-[2.5rem] p-4 border relative ${
              isDark ? 'bg-zinc-900/30 border-zinc-800/80 shadow-2xl shadow-black/50' : 'bg-white border-zinc-200/80 shadow-xl'
            } flex items-center justify-center`}>
              {/* Premium Blue Rounded Icon */}
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#2B7FFF] via-[#1A6CFF] to-[#0147E6] shadow-[inset_0_2px_12px_rgba(255,255,255,0.4),0_15px_35px_rgba(26,108,255,0.35)] flex items-center justify-center relative overflow-hidden group">
                {/* Specular Radial Overlays */}
                <div className="absolute inset-0 bg-radial-gradient from-white/20 via-transparent to-transparent opacity-90" />
                <div className="absolute -inset-10 bg-linear-to-tr from-transparent via-white/10 to-transparent rotate-45 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
                
                {/* 6-Petal Beautiful AI Loop Network SVG (Intersecting rotated capsules) */}
                <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105 select-none">
                  <svg 
                    className="w-20 h-20 sm:w-24 sm:h-24 text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.9)]" 
                    viewBox="0 0 120 120" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Loop 1: Horizontal */}
                    <rect x="25" y="46" width="70" height="28" rx="14" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(0 60 60)" />
                    {/* Loop 2: Rotated 120 degrees */}
                    <rect x="25" y="46" width="70" height="28" rx="14" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(120 60 60)" />
                    {/* Loop 3: Rotated 240 degrees */}
                    <rect x="25" y="46" width="70" height="28" rx="14" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(240 60 60)" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Grid Details precisely matching the user's reference */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-11 mt-20 select-none">
          
          {/* Card 1: Control & Decisions */}
          <div className="flex flex-col items-start text-left">
            {/* Custom Icon: Mind with Plus inside */}
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${
              isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-[0_4px_12px_rgba(0,0,0,0.02)]'
            }`}>
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a9.5 9.5 0 0 0 8.35-4.85c1.1-1.9.95-4.4-.35-6.15L18 8.5V6a4 4 0 0 0-8 0v1H8a4 4 0 0 0-4 4c0 1.95 1.1 3.75 2.85 4.65A9.5 9.5 0 0 0 12 22z" />
                <path d="M12 11v4M10 13h4" />
              </svg>
            </div>
            <p className={`text-[13.5px] leading-relaxed font-normal ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              You stay in control while AIDUS handles the busywork — AI never overrides your core business decisions
            </p>
          </div>

          {/* Card 2: Smarter Workflows */}
          <div className="flex flex-col items-start text-left">
            {/* Custom Icon: Sheet/Doc with Clock */}
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${
              isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-[0_4px_12px_rgba(0,0,0,0.02)]'
            }`}>
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="11" cy="15" r="3" />
                <path d="M11 13v2l1.5 1" />
              </svg>
            </div>
            <p className={`text-[13.5px] leading-relaxed font-normal ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Automate repetitive tasks without disrupting the workflows your team already uses every day.
            </p>
          </div>

          {/* Card 3: Operation-critical surfaces */}
          <div className="flex flex-col items-start text-left">
            {/* Custom Icon: Circular Info (i) */}
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${
              isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-[0_4px_12px_rgba(0,0,0,0.02)]'
            }`}>
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <p className={`text-[13.5px] leading-relaxed font-normal ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Receive instant visibility into tasks, bottlenecks, approvals, and customer activity from one unified system.
            </p>
          </div>

          {/* Card 4: Enterprise Relevance */}
          <div className="flex flex-col items-start text-left">
            {/* Custom Icon: Microchip/Neuro node */}
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${
              isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-[0_4px_12px_rgba(0,0,0,0.02)]'
            }`}>
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 6H12.01M12 10H12.01M12 14H12.01M12 18H12.01" />
                <path d="M16 8h-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1" />
                <path d="M8 8h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8" />
              </svg>
            </div>
            <p className={`text-[13.5px] leading-relaxed font-normal ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Every automation is tailored to your business processes, ensuring reliable execution without sacrificing flexibility.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
