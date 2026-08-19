import React from 'react';
import { motion } from 'motion/react';

interface AidusIntegrationsSectionProps {
  isDark?: boolean;
}

export default function AidusIntegrationsSection({ isDark = true }: AidusIntegrationsSectionProps) {
  return (
    <section 
      id="aidus-integrations-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 pt-20 pb-0 md:pt-32 md:pb-0 ${
        isDark ? 'bg-[#09090b] border-zinc-900/40' : 'bg-zinc-50 border-zinc-200'
      } relative border-t overflow-hidden transition-all duration-500 font-sans`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Visual Typographic Header exactly matching the reference layout */}
        <div className="max-w-3xl text-left select-none mb-16 md:mb-24">
          <span className={`text-[11px] font-mono tracking-[0.25em] uppercase font-bold ${
            isDark ? 'text-zinc-500' : 'text-zinc-400'
          } mb-4 block`}>
            BUSINESS OUTCOMES
          </span>
          
          <h2 className={`text-3xl sm:text-4xl md:text-[45px] font-black tracking-tight leading-[1.12] mb-5 ${
            isDark ? 'text-white' : 'text-zinc-955'
          }`}>
            What Happens When Every Important Process Starts Running On Time, Every Time.
          </h2>
          
          <p className={`text-[14px] sm:text-[15px] leading-relaxed max-w-[450px] ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>
            From customer communication and lead management to operations, reporting, and follow-ups, intelligent automation creates consistency, visibility, and momentum across the entire business.
          </p>
        </div>

        {/* Custom Visual Column Diagram Container matching the attach reference */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-end justify-center gap-12 md:gap-14 pt-10 min-h-[580px] overflow-visible select-none">
          
          {/* LEFT GRADIENT COLUMN & OVERLAPPING FLOATING CARD */}
          <div className="relative flex-shrink-0 w-full sm:w-[320px] flex flex-col items-center justify-end self-stretch h-[510px] md:h-auto">
            
            {/* Left Bar (Vertical blue/cyan gradient bar rising up) */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 490 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-t-[28px] overflow-hidden shadow-lg shadow-blue-500/5 flex flex-col items-start justify-start mt-auto"
              style={{
                background: "linear-gradient(180deg, #0266fe 0%, #3b82f6 30%, rgba(59, 130, 246, 0.1) 85%, rgba(59, 130, 246, 0) 100%)",
              }}
            >
              {/* Abstract micro grid lines inside column */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                <svg width="100%" height="100%">
                  <pattern id="bar-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#bar-grid-1)" />
                </svg>
              </div>

              {/* Text elements at the top of the bar */}
              <div className="relative z-10 p-8 pt-9 text-left">
                <h3 className="text-white text-lg sm:text-[20px] font-extrabold tracking-tight leading-[1.3] text-left">
                  Increased<br />
                  Workflow<br />
                  Completion Rate
                </h3>
              </div>
            </motion.div>

            {/* Overlapping Floating Card on the Left of Bar 1 */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`absolute top-[210px] md:left-[-110px] z-20 w-[275px] p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-[#0c0c10] border-zinc-800 shadow-[0_20px_40px_rgba(0,0,0,0.65)]' 
                  : 'bg-white border-zinc-100 shadow-[0_15px_35px_rgba(0,0,0,0.06)]'
              } transition-colors duration-300`}
            >
              <div className="text-left select-none">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <motion.span 
                    className="text-[13.5px] font-black tracking-tight bg-clip-text text-transparent inline-block"
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
                    Manual Bottleneck Reduction
                  </motion.span>
                </div>
                <p className={`text-[12px] leading-relaxed font-medium ${
                  isDark ? 'text-zinc-400' : 'text-zinc-550 text-zinc-500'
                }`}>
                  Eliminating repetitive human tasks to achieve maximum team focus on strategic metrics.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT GRADIENT COLUMN & OVERLAPPING FLOATING CARD */}
          <div className="relative flex-shrink-0 w-full sm:w-[320px] flex flex-col items-center justify-end self-stretch h-[460px] md:h-auto">
            
            {/* Right Bar (Vertical blue/cyan gradient bar rising up, slightly offset height to look symmetric) */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 440 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-t-[28px] overflow-hidden shadow-lg shadow-blue-500/5 flex flex-col items-start justify-start mt-auto"
              style={{
                background: "linear-gradient(180deg, #015df6 0%, #3b82f6 30%, rgba(59, 130, 246, 0.1) 85%, rgba(59, 130, 246, 0) 100%)",
              }}
            >
              {/* Abstract micro grid lines inside column */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                <svg width="100%" height="100%">
                  <pattern id="bar-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#bar-grid-2)" />
                </svg>
              </div>

              {/* Text elements at the top of the bar */}
              <div className="relative z-10 p-8 pt-9 text-left">
                <h3 className="text-white text-lg sm:text-[20px] font-extrabold tracking-tight leading-[1.3] text-left">
                  Increased<br />
                  Process Velocity<br />
                  and CTR
                </h3>
              </div>
            </motion.div>

            {/* Overlapping Floating Card on the Right of Bar 2 */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`absolute top-[245px] md:right-[-110px] z-20 w-[275px] p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-[#0c0c10] border-zinc-800 shadow-[0_20px_40px_rgba(0,0,0,0.65)]' 
                  : 'bg-white border-zinc-100 shadow-[0_15px_35px_rgba(0,0,0,0.06)]'
              } transition-colors duration-300`}
            >
              <div className="text-left select-none">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <motion.span 
                    className="text-[13.5px] font-black tracking-tight bg-clip-text text-transparent inline-block"
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
                    Autonomous Orchestration
                  </motion.span>
                </div>
                <p className={`text-[12px] leading-relaxed font-medium ${
                  isDark ? 'text-zinc-400' : 'text-zinc-550 text-zinc-500'
                }`}>
                  Piping continuous data payloads and triggering smart background loops with absolute safety.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Elegant ambient glow background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
        </div>

      </div>
    </section>
  );
}
