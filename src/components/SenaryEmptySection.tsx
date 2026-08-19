import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface SenaryEmptySectionProps {
  isDark?: boolean;
}

export default function SenaryEmptySection({ isDark = true }: SenaryEmptySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does AIDUS work?",
      answer: "AIDUS analyzes your operations, identifies bottlenecks, and designs automation systems that reduce manual work while improving efficiency, visibility, and execution speed."
    },
    {
      question: "Can AIDUS integrate with our existing software?",
      answer: "In most cases, yes. We can connect CRMs, communication tools, project management platforms, databases, forms, AI systems, and custom workflows into a unified operational ecosystem."
    },
    {
      question: "Will AI replace my team?",
      answer: "No. AIDUS is designed to enhance human performance, not replace it. We automate repetitive tasks so your team can focus on higher-value work, decision-making, and growth."
    },
    {
      question: "What happens after deployment?",
      answer: "We continue monitoring, optimizing, and improving your systems to ensure they evolve alongside your business requirements and growth objectives."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="senary-empty-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 py-24 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden transition-all duration-500 font-sans border-t ${
        isDark ? 'bg-[#09090b] border-zinc-900/80 text-white' : 'bg-[#fafafa] border-zinc-200/80 text-zinc-950'
      }`}
    >
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: TYPOGRAPHY AND HERO INFO */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 lg:sticky lg:top-28">
            
            {/* Custom high fidelity badge based on image */}
            <div className="flex items-center gap-2 select-none">
              <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center font-mono font-black text-xs ${
                isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                ?
              </div>
              <span className={`text-[11.5px] font-mono tracking-[0.14em] uppercase font-bold sm:mt-0.5 ${
                isDark ? 'text-[#cbf33b]' : 'text-[#8ab01b]'
              }`}>
                Frequently asked questions
              </span>
            </div>

            {/* Giant Elegant Display Heading */}
            <h2 className={`text-4xl sm:text-5xl lg:text-[56px] font-sans font-[950] tracking-tight leading-[1.05] ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}>
              Frequently asked <br className="hidden sm:inline" />
              <span className={isDark ? 'text-zinc-500' : 'text-zinc-450 font-extrabold'}>questions</span>
            </h2>

            {/* Paragraph exactly matching text in image */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-md ${
              isDark ? 'text-zinc-400' : 'text-zinc-650 font-medium'
            }`}>
              Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing for powerful financial management.
            </p>
          </div>

          {/* RIGHT SIDE: ACCORDIONS */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? (isDark ? 'bg-zinc-900/40 border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-white border-zinc-250 shadow-[0_12px_24px_rgba(0,0,0,0.03)]')
                      : (isDark ? 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800' : 'bg-white/80 border-gray-200/80 hover:border-gray-300')
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-6 py-6 sm:px-8 sm:py-7 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span className={`text-base sm:text-lg lg:text-[19px] font-bold tracking-tight transition-colors duration-200 ${
                      isOpen 
                        ? (isDark ? 'text-white' : 'text-zinc-950')
                        : (isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-850 hover:text-zinc-950')
                    }`}>
                      {faq.question}
                    </span>

                    {/* Toggle Circle Icon precisely matching image representation */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${
                      isOpen 
                        ? 'bg-black text-white dark:bg-white dark:text-black scale-105' 
                        : 'bg-black/90 text-white dark:bg-zinc-900 dark:text-zinc-400 hover:scale-105'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className={`px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-[15px] leading-relaxed select-text ${
                          isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'
                        }`}>
                          <div className={`border-t mb-5 pt-1 ${
                            isDark ? 'border-zinc-800/80' : 'border-zinc-100'
                          }`} />
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
