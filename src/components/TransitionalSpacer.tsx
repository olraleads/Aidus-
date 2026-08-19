import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function TransitionalSpacer({ isDark = true }: { isDark?: boolean }) {
  return (
    <section 
      id="transitional-spacer-section" 
      className={`w-full max-w-[1920px] mx-auto bg-transparent ${isDark ? 'text-white' : 'text-zinc-900'} py-20 md:py-32 relative overflow-hidden select-none transition-colors duration-500`}
    >
      {/* Structural layout guidelines for draft feel */}
      <div className={`absolute inset-y-0 left-12 w-px ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200'} hidden xl:block`} />
      <div className={`absolute inset-y-0 right-12 w-px ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200'} hidden xl:block`} />
      <div className={`absolute inset-x-0 top-0 h-px ${isDark ? 'bg-zinc-900/40' : 'bg-zinc-200'}`} />

      {/* Decorative metadata text inside margins to reinforce state */}
      <div className="absolute top-12 left-14 text-[8px] font-mono text-zinc-500 uppercase tracking-[0.25em] hidden lg:block">
        [ SYSTEM_SERVICES // CORE_OPERATIONS ]
      </div>
      <div className="absolute top-12 right-14 text-[8px] font-mono text-zinc-500 uppercase tracking-[0.25em] hidden lg:block">
        SEC_0xCA91 // SECTOR_ACTIVE
      </div>

      <div className="px-6 md:px-16 lg:px-24">
        
        {/* 1. GIGANTIC condensed logo word "SERVICES" with the wave gradient flow effect */}
        <div className="relative w-full overflow-hidden text-center -mt-8 sm:-mt-16 md:-mt-24 lg:-mt-32 -mb-4 sm:-mb-6 md:-mb-10 z-0">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[90px] sm:text-[145px] md:text-[220px] lg:text-[270px] font-sans font-[1000] tracking-[-0.07em] leading-[0.75] uppercase select-none pointer-events-none"
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

        {/* 3. Aesthetic footer coordinates details detailing our elite craft matching the spacer style */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-[0.25em] mt-16 sm:mt-24 select-none gap-4">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#ff513c] animate-pulse" />
            <span>[ SYSTEM // TRANSITIONAL_SERVICES ]</span>
          </div>
          <span>OPERATE ON AUTOPILOT // AIDUS AUTOMATION LABS</span>
        </div>

      </div>
    </section>
  );
}
