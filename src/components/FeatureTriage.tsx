import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Compass, Eye, DollarSign, Check, ArrowDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.012,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FeatureTriage({ isDark = true }: { isDark?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  
  const renderAnimatedText = (text: string, baseKey: string) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={`${baseKey}-${index}`}
        variants={letterVariants}
        className={char === ' ' ? 'inline' : 'inline-block'}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };
  
  // Create beautiful offset-interactive scrolls for the background elements and images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgYLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imgYRight = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const titleY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section
      ref={containerRef}
      id="triage-section"
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-10 lg:px-24 pt-28 md:pt-40 pb-0 bg-transparent ${isDark ? 'text-white' : 'text-zinc-900'} relative overflow-hidden font-sans transition-colors duration-500`}
    >
      {/* Aesthetic Drafting gridlines & crosshairs for layout alignment */}
      <div className={`absolute inset-x-0 top-0 h-px ${isDark ? 'bg-zinc-800/40' : 'bg-zinc-300'}`} />
      <div className={`absolute inset-y-0 left-12 w-px ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200/50'} hidden xl:block`} />
      <div className={`absolute inset-y-0 right-12 w-px ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200/50'} hidden xl:block`} />

      {/* Decorative architectural layout details inside margins */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] select-none hidden lg:block">
        [ SYSTEM_FLOW // TRIAGE_NODES ]
      </div>
      <div className="absolute top-10 right-10 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] select-none hidden lg:block">
        LAT_47.6062 / LNG_-122.3321
      </div>

      {/* Header Area: The span elements are completely removed here per user criteria */}
      <div className="h-4" />

      {/* Collage of ultra-aesthetic images framing the lower bold text */}
      <div className="relative w-full max-w-4xl mx-auto mt-6 mb-6 select-none">
        
        {/* Floating image 1 (Left hand side) - Animates smoothly with scroll */}
        <motion.div
          style={{ y: imgYLeft }}
          className={`absolute left-[2%] -top-[10px] md:left-[8%] md:-top-[60px] w-28 h-36 md:w-44 md:h-56 rounded-2xl overflow-hidden border ${isDark ? 'border-zinc-800' : 'border-zinc-200'} shadow-lg transform -rotate-[5deg] z-10 hover:rotate-0 transition-transform duration-500 hover:shadow-2xl bg-zinc-900`}
        >
          <img
            src="https://i.pinimg.com/736x/82/19/b9/8219b9d35b3c30d69c7a1e076179a6f4.jpg"
            alt="Office session"
            className="w-full h-full object-cover filter grayscale contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute bottom-2 left-2 ${isDark ? 'bg-zinc-950/95 text-zinc-300 border-zinc-800' : 'bg-white/95 text-zinc-700 border-zinc-200 shadow-sm'} backdrop-blur-sm rounded px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-widest leading-none border`}>
            ANLS_NODE_01
          </div>
        </motion.div>

        {/* Tall portrait center image - The exact new image requested by the user */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`w-[210px] h-[280px] md:w-[310px] md:h-[410px] mx-auto rounded-3xl overflow-hidden border ${isDark ? 'border-zinc-800/85' : 'border-zinc-200'} shadow-2xl relative z-0 group cursor-pointer`}
        >
          <img
            src="https://i.pinimg.com/736x/53/d7/81/53d7812589113aec3f669b203c686c07.jpg"
            alt="Aesthetic workspace collaboration"
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Subtle architectural design layer over center picture */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className={`absolute bottom-4 left-4 right-4 ${isDark ? 'bg-zinc-950/90 text-white border-zinc-800' : 'bg-white/95 text-zinc-900 border-zinc-200 shadow-xl'} backdrop-blur-md rounded-xl p-3 border shadow-lg translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
            <p className="text-[10px] font-bold tracking-wider uppercase font-manrope">Aidus HQ Design Studio</p>
            <p className={`text-[9px] ${isDark ? 'text-zinc-400' : 'text-zinc-500'} font-mono mt-0.5`}>EST. 2026 // ALL SYSTEM NODES ENGAGED</p>
          </div>
        </motion.div>

        {/* Floating image 3 (Right hand side) */}
        <motion.div
          style={{ y: imgYRight }}
          className={`absolute right-[2%] bottom-[20px] md:right-[10%] md:bottom-[40px] w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border ${isDark ? 'border-zinc-800' : 'border-zinc-200'} shadow-xl transform rotate-[7deg] z-10 hover:rotate-0 transition-transform duration-500 hover:shadow-2xl bg-zinc-900`}
        >
          <img
            src="https://i.pinimg.com/736x/c6/78/0b/c6780bd17de0231a2b9d08c95fa62927.jpg"
            alt="Minimalist abstract design"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute bottom-2 right-2 ${isDark ? 'bg-zinc-950/95 text-zinc-300 border-zinc-800' : 'bg-white/95 text-zinc-700 border-zinc-200'} backdrop-blur-sm rounded px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-widest leading-none border`}>
            CNCPT_02
          </div>
        </motion.div>
      </div>

      {/* 3. Breathtaking Bold LOWERCASE "about us" with high-contrast text rendering */}
      <div className="w-full text-center relative pointer-events-none mt-4 md:-mt-12 select-none z-10 overflow-visible">
        <motion.h2 
          style={{ y: titleY }}
          className="text-[64px] sm:text-[100px] md:text-[180px] lg:text-[230px] font-sans font-black tracking-[-0.05em] leading-none select-none"
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
            about us
          </motion.span>
        </motion.h2>
      </div>

      {/* 4. Tiny Plus Decorator and Tagline */}
      <div className="flex flex-col items-center justify-center text-center mt-8 md:mt-10 select-none z-10">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 90 }}
          className={`w-8 h-8 rounded-lg border ${isDark ? 'border-zinc-800 bg-zinc-900 text-white' : 'border-zinc-200 bg-white text-zinc-800'} shadow-lg flex items-center justify-center font-bold text-sm cursor-help`}
        >
          +
        </motion.div>
        
        <p className={`mt-4 text-[11px] font-bold tracking-[0.25em] ${isDark ? 'text-zinc-400' : 'text-zinc-500'} uppercase font-manrope`}>
          DESIGNED FOR MODERN BUSINESSES // BUILT TO ELIMINATE OPERATIONAL FRICTION
        </p>

        {/* Thin vertical connector line that scales in */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`w-px ${isDark ? 'bg-zinc-800/80' : 'bg-zinc-300'} mt-4 mb-3`} 
        />
      </div>

      {/* 5. Manifesto Paragraph Blocks - clean, highly readable display spacing shifted upwards */}
      <div className="w-full max-w-4xl mx-auto text-center px-4 md:px-0 z-10 relative -mt-4 md:-mt-6">
        <h3 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-medium tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'} leading-[1.2] max-w-3xl mx-auto`}>
          Most Businesses Don't Need More Hustle. They Need Better Systems. Because Growth Doesn't Break When People Rest. It Breaks When Processes Do.
        </h3>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-left ${isDark ? 'text-zinc-400' : 'text-zinc-650'} text-base md:text-lg leading-relaxed font-manrope`}>
          <p className={`border-l-2 ${isDark ? 'border-zinc-800' : 'border-zinc-200'} pl-5 py-1 hover:border-[#8da315] transition-colors duration-300`}>
            Every business develops friction as it grows. Tasks pile up, processes become inconsistent, and valuable time gets consumed by work that should never require human attention. We identify those operational bottlenecks and replace them with intelligent systems that work continuously in the background.
          </p>
          <p className={`border-l-2 ${isDark ? 'border-zinc-800' : 'border-zinc-200'} pl-5 py-1 hover:border-[#8da315] transition-colors duration-300`}>
            From customer communication and lead management to appointment scheduling, reporting, internal workflows, and CRM automation, we build interconnected systems that keep information moving without delays, manual intervention, or costly inefficiencies.
          </p>
          <p className={`border-l-2 ${isDark ? 'border-zinc-800' : 'border-zinc-200'} pl-5 py-1 hover:border-[#8da315] transition-colors duration-300`}>
            When repetitive work disappears, businesses gain something far more valuable than efficiency — focus. Teams respond faster, owners make better decisions, customers receive a better experience, and growth becomes easier to sustain at scale.
          </p>
        </div>
      </div>

      {/* 6. Editorial Section: Redesigned 'Intersection' Layout replicating the beautiful image */}
      <div className="mt-28 md:mt-40 w-full max-w-7xl mx-auto relative px-4 md:px-5 lg:px-8 overflow-visible" id="system-intersection-container">
        
        {/* Giant header title with custom swash character styling */}
        <div className="w-full text-left relative overflow-visible mb-16 md:mb-24 select-none" id="intersection-header">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={containerVariants}
            className={`text-[26px] xs:text-[32px] sm:text-[44px] md:text-[52px] lg:text-[95px] font-sans font-[900] tracking-[-0.04em] ${isDark ? 'text-white' : 'text-zinc-900'} leading-[1.05] sm:leading-[1.02] md:leading-[0.98] uppercase max-w-6xl text-left`}
          >
            {renderAnimatedText("we exist at", "l1")} <br />
            {renderAnimatedText("the inte", "l2")}
            <motion.span
              variants={letterVariants}
              className="font-editorial italic font-light lowercase text-[#8da315] inline-block transform skew-y-3 -rotate-3 pl-1 pr-1.5 select-text"
            >
              r
            </motion.span>
            {renderAnimatedText("section", "l3")} <br />
            {renderAnimatedText("of human int", "l4")}
            <motion.span
              variants={letterVariants}
              className="font-editorial italic font-light lowercase text-[#8da315] inline-block transform -skew-x-6 scale-y-110 pr-1 px-1 select-text"
            >
              e
            </motion.span>
            {renderAnimatedText("lligence", "l5")} <br />
            {renderAnimatedText("an", "l6")}
            <motion.span
              variants={letterVariants}
              className="font-editorial italic font-light lowercase text-[#8da315] inline-block transform -rotate-6 select-text pl-1 pr-1"
            >
              d
            </motion.span>
            {renderAnimatedText(" business", "l7")} <br />
            {renderAnimatedText("autom", "l8")}
            <motion.span
              variants={letterVariants}
              className="font-editorial italic font-light lowercase text-[#8da315] inline-block transform -skew-x-12 select-text pl-1"
            >
              a
            </motion.span>
            {renderAnimatedText("tion", "l9")}
          </motion.h2>

          {/* Absolute decorative star node coordinate target */}
          <div className={`absolute top-0 right-4 w-10 h-10 border ${isDark ? 'border-zinc-800' : 'border-zinc-200'} rounded-full flex items-center justify-center text-zinc-500 hidden md:flex animate-spin-slow`} id="header-plus-decorator">
            <span className={`text-[9px] font-mono font-bold ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>+</span>
          </div>
        </div>

         {/* Informational grid section replicating the paragraph list */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 border-t ${isDark ? 'border-zinc-900/60' : 'border-zinc-200'} pt-10 pb-4 items-start`} id="info-grid">
          
          {/* Left flank column: Brand info / Metadata coordinates */}
          <div className={`md:col-span-4 flex flex-col space-y-1.5 text-left md:border-r ${isDark ? 'border-r border-zinc-900/60' : 'border-r border-zinc-200'} pr-5 lg:pr-8`} id="left-metadata">
            <motion.span 
              className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] bg-clip-text text-transparent inline-block"
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
              03 // BUILT FOR MODERN BUSINESSES
            </motion.span>
            <h4 className={`text-lg font-serif ${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>
              AI-Powered Operational Systems
            </h4>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider mt-1 block">
              ©2026 AIDUS AUTOMATION STUDIO
            </span>
          </div>

          {/* Central and right columns: The elegant dual paragraph descriptive blocks */}
          <div className="md:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left" id="right-narratives">
            <div className="flex flex-col">
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-650'} text-xs sm:text-[13px] leading-[1.65] font-manrope`}>
                Growth creates complexity. More enquiries, more customers, more conversations, more follow-ups, more scheduling, more decisions. Most businesses try to solve that complexity with additional effort, but effort does not scale. Systems do. The businesses that grow consistently are the ones that transform repetitive operations into reliable automated processes.
              </p>
            </div>
            
            <div className="flex flex-col justify-between items-start h-full gap-8">
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-650'} text-xs sm:text-[13px] leading-[1.65] font-manrope`}>
                AIDUS builds interconnected automation systems that unify communication, CRM workflows, lead management, appointment scheduling, reporting, finance operations, and customer experience. By removing friction between people, processes, and technology, we help businesses operate faster, serve customers better, and scale with greater confidence.
              </p>
              
              {/* Beautiful custom line-and-arrow link exactly corresponding to 'ABOUT AGENCY -->' in the image */}
              <motion.a 
                href="#pricing-section"
                whileHover={{ y: 4 }}
                transition={{ duration: 0.35 }}
                className={`group flex items-center justify-between w-full max-w-[280px] border-b ${isDark ? 'border-zinc-700/80' : 'border-zinc-300'} pb-2.5 mt-4 cursor-pointer`}
                id="cta-anchor-link"
              >
                <span className={`text-xs font-mono font-bold tracking-[0.2em] ${isDark ? 'text-white' : 'text-zinc-900'} group-hover:text-[#8da315] transition-colors duration-300`}>
                  EXPLORE PLATFORM PLANS
                </span>
                <ArrowDown className="w-4 h-4 text-[#8da315] group-hover:translate-y-1.5 transition-transform duration-300 stroke-[2.5]" />
              </motion.a>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
}
