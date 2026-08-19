import React, { useRef } from 'react';
import { motion } from 'motion/react';

export default function EndSection({ isDark = false, onBookCall }: { isDark?: boolean; onBookCall?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionBg = isDark ? "bg-[#09090b]" : "bg-[#fafafa]";

  return (
    <section 
      ref={containerRef}
      id="empty-end-section" 
      className={`w-full ${sectionBg} relative overflow-hidden flex flex-col justify-between pt-6 md:pt-10 pb-8 transition-colors duration-500 select-none`}
    >
      
      {/* Top and middle content wrap */}
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center z-10">
        
        {/* Redone editorial heading matching image perfectly */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-[56px] lg:text-[62px] font-medium tracking-tight leading-[1.12] max-w-5xl text-center select-none"
        >
          <span className={isDark ? "text-zinc-500" : "text-zinc-400"}>
            Work with a team that builds systems designed to remove
          </span>
          <br />
          <span className={`${isDark ? "text-white" : "text-zinc-950"} font-bold`}>
            bottlenecks, increase efficiency, and support your growth.
          </span>
        </motion.h2>

        {/* Beautiful high quality pill button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16"
        >
          <a
            href="#pricing-section"
            onClick={(e) => {
              e.preventDefault();
              if (onBookCall) {
                onBookCall();
              } else {
                const el = document.getElementById('pricing-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-3.5 bg-zinc-950 hover:bg-black dark:bg-zinc-900 dark:hover:bg-zinc-850 text-white pl-3.5 pr-8 py-2 md:pl-4 md:pr-10 md:py-2.5 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border border-zinc-800/20"
          >
            {/* Avatar circle */}
            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-zinc-800/40 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" 
                alt="Representative photo of team member" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Vertical text details */}
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1">
                Book a Call <span className="text-base font-normal">→</span>
              </span>
              <span className="text-[11px] text-zinc-400 font-medium">
                Let's talk about your business.
              </span>
            </div>
          </a>
        </motion.div>

      </div>

      {/* Giant fading "A I D U S - YOUR AI COMPANION" watermark background with infinite marquee */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-20 md:mt-24 h-32 sm:h-52 md:h-72 flex items-end">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          <span className={`text-[17vw] sm:text-[18vw] font-black tracking-tighter leading-none select-none uppercase shrink-0 transform scale-y-[1.15] bg-gradient-to-b ${
            isDark 
              ? "from-white/[0.035] via-white/[0.012] to-transparent" 
              : "from-zinc-200/80 via-zinc-300/40 to-transparent"
          } bg-clip-text text-transparent pr-12`}>
            A I D U S — YOUR AI COMPANION{"\u00A0\u00A0\u00A0\u00A0"}
          </span>
          <span className={`text-[17vw] sm:text-[18vw] font-black tracking-tighter leading-none select-none uppercase shrink-0 transform scale-y-[1.15] bg-gradient-to-b ${
            isDark 
              ? "from-white/[0.035] via-white/[0.012] to-transparent" 
              : "from-zinc-200/80 via-zinc-300/40 to-transparent"
          } bg-clip-text text-transparent pr-12`}>
            A I D U S — YOUR AI COMPANION{"\u00A0\u00A0\u00A0\u00A0"}
          </span>
        </motion.div>
      </div>

      {/* Bottom social/legal wrapper */}
      <div className="w-full relative z-20 pt-4 px-6 md:px-12 select-text">
        <div className={`max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t ${
          isDark ? 'border-zinc-900/60' : 'border-zinc-200/60'
        } gap-4 text-xs font-semibold text-zinc-400`}>
          
          <span className="text-zinc-400 dark:text-zinc-500">
            © 2025 AIDUS. All rights reserved.
          </span>

          <div className="flex items-center gap-6 md:gap-8">
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="hover:text-zinc-950 dark:hover:text-white transition duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="hover:text-zinc-950 dark:hover:text-white transition duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="hover:text-zinc-950 dark:hover:text-white transition duration-200"
            >
              Cookie Policy
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
