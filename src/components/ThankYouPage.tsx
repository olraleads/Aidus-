import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  FileText, 
  Mail, 
  Sparkles
} from 'lucide-react';

interface ThankYouPageProps {
  isDark: boolean;
  onBack: () => void;
}

// Custom Scanner Focus Icon to perfectly match Step 1 from the image
const ScannerIcon = () => (
  <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <rect x="9" y="9" width="6" height="6" rx="1.5" strokeWidth="1.8" />
  </svg>
);

export default function ThankYouPage({ isDark, onBack }: ThankYouPageProps) {
  
  // Custom High-Fidelity steps corresponding exactly to the uploaded dashboard design
  const timelineSteps = [
    {
      title: "REQUEST RECEIVED",
      time: "JUST NOW",
      desc: "Your audit request has been successfully received.",
      icon: ScannerIcon,
    },
    {
      title: "ANALYSIS IN PROGRESS",
      time: "0 - 24 HOURS",
      desc: "We're analyzing your inputs and gathering key insights.",
      icon: Search,
    },
    {
      title: "REPORT GENERATION",
      time: "24 - 48 HOURS",
      desc: "Our experts will compile a tailored audit report for you.",
      icon: FileText,
    },
    {
      title: "REPORT DELIVERY",
      time: "WITHIN 48 HOURS",
      desc: "Your audit report will be delivered to your inbox.",
      icon: Mail,
    }
  ];

  return (
    <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col justify-center select-none font-sans transition-colors duration-500 ${
      isDark ? 'bg-[#09090b] text-[#fafafa]' : 'bg-[#fafbfa] text-zinc-900'
    }`}>
      
      {/* Outer grid matching split columns in the user design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-6">
        
        {/* ========= LEFT COLUMN: THE DIGITAL TICKET CARD ========= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex"
        >
          <div className={`w-full rounded-[32px] border p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-[#0f1013] border-zinc-900 shadow-[0_30px_70px_rgba(0,0,0,0.8)]' 
              : 'bg-white border-zinc-200 shadow-[0_25px_60px_rgba(0,0,0,0.04)]'
          }`}>
            
            {/* Subtle high tech ambient glow background inside ticket */}
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[110px] pointer-events-none ${
              isDark ? 'bg-[#cbf33b]/[0.03]' : 'bg-emerald-500/[0.04]'
            }`} />

            {/* Top row of Ticket */}
            <div className="flex justify-between items-start z-10">
              <div>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-mono block ${
                  isDark ? 'text-[#cbf33b]' : 'text-emerald-600 font-bold'
                }`}>
                  REQUEST STATUS
                </span>
                <h3 className={`text-xl font-bold uppercase tracking-wide mt-1 flex items-center gap-1.5 ${
                  isDark ? 'text-white' : 'text-zinc-950 font-black'
                }`}>
                  CONFIRMED
                  <span className="inline-block w-2 h-2 rounded-full bg-[#cbf33b] animate-ping" />
                  <span className="inline-block w-2 h-2 rounded-full bg-[#cbf33b] -ml-3.5" />
                </h3>
              </div>
            </div>

            {/* Center Grid: Glowing Dotted LED Circle with Checkmark & trails exactly like the image */}
            <div className="my-10 flex flex-col items-center justify-center relative min-h-[220px] z-10">
              
              {/* Matrix display container */}
              <div className="relative w-56 h-56 flex items-center justify-center">
                
                {/* Holographic glowing backdrops */}
                <span className={`absolute w-36 h-36 rounded-full blur-[35px] pointer-events-none transition-all ${
                  isDark ? 'bg-[#cbf33b]/10' : 'bg-[#e0fb73]/40'
                }`} />

                {/* SVG matrix display */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200">
                  <defs>
                    <filter id="matrix-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Matrix codes/pixel drop shadows running downwards from bottom of circle, precisely matched */}
                  <g opacity={isDark ? "0.35" : "0.5"} stroke={isDark ? "#cbf33b" : "#8ab01b"}>
                    <line x1="60" y1="165" x2="60" y2="195" strokeWidth="2" strokeDasharray="2 4" />
                    <line x1="80" y1="172" x2="80" y2="210" strokeWidth="2" strokeDasharray="3 5" />
                    <line x1="100" y1="175" x2="100" y2="225" strokeWidth="2.5" strokeDasharray="1 6" strokeLinecap="round" />
                    <line x1="120" y1="172" x2="120" y2="210" strokeWidth="2" strokeDasharray="2 5" />
                    <line x1="140" y1="165" x2="140" y2="195" strokeWidth="2" strokeDasharray="3 4" />
                  </g>

                  {/* Outer Primary Glowing LED Circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="68" 
                    stroke={isDark ? "#cbf33b" : "#8ab01b"} 
                    strokeWidth="3.2" 
                    strokeDasharray="2 5.5" 
                    strokeLinecap="round" 
                    fill="none" 
                    filter="url(#matrix-neon-glow)" 
                  />

                  {/* Thin outer target ring */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="73" 
                    stroke={isDark ? "#cbf33b" : "#829f28"} 
                    strokeWidth="1" 
                    strokeDasharray="1 9" 
                    fill="none" 
                    opacity="0.5"
                  />

                  {/* Inner secondary ring of LED light dots */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="63" 
                    stroke={isDark ? "#cbf33b" : "#8ab01b"} 
                    strokeWidth="1.5" 
                    strokeDasharray="1 6.5" 
                    strokeLinecap="round" 
                    fill="none" 
                    opacity="0.75"
                  />

                  {/* Dotted glowing checkmark centered */}
                  <path 
                    d="M68,103 L89,124 L132,77" 
                    stroke={isDark ? "#cbf33b" : "#86aa19"} 
                    strokeWidth="5.5" 
                    strokeDasharray="2 5.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                    filter="url(#matrix-neon-glow)" 
                  />

                  {/* Soft Solid highlight path below dots to increase definition */}
                  <path 
                    d="M68,103 L89,124 L132,77" 
                    stroke={isDark ? "#cbf33b" : "#8ab01b"} 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                    opacity="0.3" 
                  />
                </svg>

              </div>
            </div>

            {/* Bottom section of Ticket */}
            <div className="space-y-6 z-10 text-left">
              <div>
                <span className={`text-[10px] tracking-[0.26em] uppercase font-mono block mb-2 ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400 font-extrabold'
                }`}>
                  THANK YOU _
                </span>
                
                {/* Heavy display typography formatted exactly like the image attachment */}
                <h1 className={`text-3.5xl sm:text-[2.65rem] font-sans font-[950] tracking-tight leading-[1.05] uppercase ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}>
                  AUDIT <br />
                  REQUEST <br />
                  CONFIRMED
                </h1>
              </div>

              <p className={`text-xs sm:text-[13px] leading-relaxed max-w-sm ${
                isDark ? 'text-zinc-400' : 'text-zinc-650'
              }`}>
                We've received your request and our team will get to work.
              </p>

              {/* Dotted border split */}
              <div className={`border-t border-dashed my-2 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`} />

              {/* Tiny footer label coords */}
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1.5">
                  AUDIT REQUEST <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-500" /> CONFIRMED
                </span>
                <span>2026</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ========= RIGHT COLUMN: WHAT HAPPENS NEXT ========= */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-between space-y-10"
        >
          {/* Sub navigation exactly matching upper-right zone of image */}
          <div className="flex justify-end items-center gap-6 sm:gap-8 pb-2">
            {['OVERVIEW', 'PROCESS', 'BENEFITS', 'SUPPORT'].map((nav, index) => {
              const isActive = index === 0;
              return (
                <button
                  key={nav}
                  type="button"
                  onClick={onBack}
                  className={`text-[10.5px] font-mono uppercase tracking-[0.16em] transition-all cursor-pointer relative pb-1.5 ${
                    isActive
                      ? (isDark ? 'text-[#cbf33b]' : 'text-[#8ab01b] font-black')
                      : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-450 hover:text-zinc-900')
                  }`}
                >
                  {nav}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isDark ? 'bg-[#cbf33b]' : 'bg-[#8ab01b]'
                    }`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Timeline Process Group */}
          <div className="text-left space-y-8">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono uppercase tracking-[0.2em] ${
                isDark ? 'text-zinc-400' : 'text-zinc-500 font-extrabold'
              }`}>
                WHAT HAPPENS NEXT _
              </span>
            </div>

            {/* Seamless high-fidelity timeline */}
            <div className="relative pl-2.5 space-y-6">
              
              {/* Connecting vertical timeline wire */}
              <div className={`absolute left-5 sm:left-5.5 top-6 bottom-6 w-0.5 ${
                isDark ? 'bg-zinc-900' : 'bg-zinc-150'
              }`} />

              {timelineSteps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className="flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Circle badge for the step icon */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${
                      isDark 
                        ? 'bg-[#121215] border-zinc-900 text-zinc-400 group-hover:text-[#cbf33b] group-hover:border-[#cbf33b]/40 shadow-md' 
                        : 'bg-white border-zinc-200 text-zinc-550 group-hover:text-emerald-600 group-hover:border-emerald-500/40 shadow-sm'
                    }`}>
                      <IconComp />
                    </div>

                    {/* Text Details Area */}
                    <div className="flex-1 min-w-0 pt-1 sm:pt-1.5 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="space-y-1 pr-4 text-left">
                        <h4 className={`text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] ${
                          isDark ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-xs sm:text-[12.5px] leading-relaxed ${
                          isDark ? 'text-zinc-400' : 'text-zinc-550 font-medium'
                        }`}>
                          {step.desc}
                        </p>
                      </div>

                      {/* Floating Timing Badge */}
                      <span className={`text-[10px] font-mono uppercase tracking-[0.12em] font-extrabold px-3 py-1 rounded-md border shrink-0 transition-all ${
                        isDark
                          ? 'text-[#cbf33b] border-[#cbf33b]/15 bg-[#cbf33b]/5'
                          : 'text-[#64840e] border-[#add33d]/30 bg-[#f9fde9]'
                      }`}>
                        {step.time}
                      </span>
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* expectation box matching bottom highlighted banner */}
          <div className="text-left">
            <div className={`p-5 rounded-[18px] border transition-all duration-300 relative overflow-hidden ${
              isDark 
                ? 'bg-zinc-950/40 border-[#cbf33b]/15' 
                : 'bg-[#fafdf2] border-[#cbf33b]/30 shadow-inner'
            }`}>
              
              {/* Highlight accent left border marker */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#cbf33b]" />

              <div className="flex items-center gap-2 mb-2 pl-2">
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-[#cbf33b]' : 'text-emerald-600'}`} />
                <h5 className={`text-[11px] font-mono uppercase tracking-[0.16em] font-extrabold ${
                  isDark ? 'text-[#cbf33b]' : 'text-[#64840e]'
                }`}>
                  WHAT YOU CAN EXPECT
                </h5>
              </div>

              <p className={`text-xs sm:text-[13px] leading-relaxed pl-2 ${
                isDark ? 'text-zinc-400' : 'text-zinc-650 font-medium'
              }`}>
                A comprehensive audit report with actionable insights to help you optimize, scale, and grow with confidence.
              </p>
            </div>
          </div>

          {/* Action Row buttons exactly matching bottom style */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            
            {/* The primary bright block button */}
            <button
              onClick={onBack}
              type="button"
              className={`w-full sm:w-auto px-8 py-4 h-13 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 shadow-md cursor-pointer ${
                isDark 
                  ? 'bg-[#cbf33b] hover:bg-[#d8fc4a] text-black hover:shadow-[0_12px_24px_rgba(203,243,59,0.15)]' 
                  : 'bg-[#cbf33b] hover:bg-[#b0d820] text-zinc-950 hover:shadow-lg'
              }`}
            >
              <ArrowLeft className="w-4 h-4 shrink-0" strokeWidth={3} />
              <span>BACK TO DASHBOARD</span>
            </button>

            {/* Need Help link exact representation */}
            <div className="text-left self-start sm:self-center">
              <span className={`text-[10px] font-mono uppercase tracking-widest block mb-0.5 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400 font-bold'
              }`}>
                NEED HELP?
              </span>
              <a 
                href="mailto:balaji.pasupathy.2000@gmail.com" 
                className={`text-xs font-medium cursor-pointer transition-colors relative group border-b py-0.5 ${
                  isDark 
                    ? 'text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-300' 
                    : 'text-zinc-600 hover:text-zinc-900 border-zinc-200 hover:border-zinc-500'
                }`}
              >
                Contact our support team
              </a>
            </div>

          </div>

        </motion.div>

      </div>
      
    </div>
  );
}
