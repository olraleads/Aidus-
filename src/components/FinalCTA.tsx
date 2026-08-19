import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const ShellLogo = ({ className = "w-6 h-6 text-white" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
    <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6a6 6 0 0 1 6-6z" />
    <path d="M12 10a2 2 0 0 1 2 2c0 1.105-.895 2-2 2s-2-.895-2-2a2 2 0 0 1 2-2z" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
  </svg>
);

const DarkShellLogo = ({ className = "w-9 h-9 text-black" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61" />
    <path d="M12 6c-2.76 0-5 2.24-5 5 0 1.18.41 2.26 1.09 3.11" />
    <path d="M12 10c-.55 0-1 .45-1 1" />
    <path d="M12 2a9 9 0 0 1 9 9c0 2.12-.74 4.07-1.97 5.61" />
    <path d="M12 6a5 5 0 0 1 5 5c0 1.18-.41 2.26-1.09 3.11" />
    <path d="M12 10a1 1 0 0 1 1 1" />
    <path d="m12 10-3.5 8" />
    <path d="m12 10 3.5 8" />
  </svg>
);

interface FinalCTAProps {
  isDark?: boolean;
  onAuditSuccess?: () => void;
}

export default function FinalCTA({ isDark = true, onAuditSuccess }: FinalCTAProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Suggested values from the reference image as default placeholders
  const defaultNamePlaceholder = "Ameer Ismail";
  const defaultEmailPlaceholder = "agimonopoly@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = name.trim() || defaultNamePlaceholder;
    const finalEmail = email.trim() || defaultEmailPlaceholder;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onAuditSuccess) {
        onAuditSuccess();
      } else {
        setSubmitted(true);
      }
    }, 1000);
  };

  return (
    <section 
      id="cta-section" 
      className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-transparent select-none`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ================= LEFT COLUMN: DEEP BLUE AMBIENT PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-7 ${isDark ? 'bg-[#0b0b0e] border-zinc-900/90' : 'bg-neutral-50/50 border-zinc-200'} border rounded-[2.25rem] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden min-h-[580px] shadow-2xl group transition-[border-color] duration-500`}
        >
          {/* Immersive glow spotlight from the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#1b5bdc]/20 to-[#105eff]/10 blur-[130px] rounded-full pointer-events-none opacity-90 group-hover:scale-105 transition-transform duration-[4s]" />
          
          {/* Subtle grid backdrop filter */}
          <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? '#0f0f13' : '#e4e4e7'}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? '#0f0f13' : '#e4e4e7'}_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none`} />

          {/* Top Panel bar: Logo vs Navigation */}
          <div className="flex justify-between items-center relative z-10 w-full select-none">
            {/* Logo Mark + Logo Name */}
            <div className="flex items-center gap-2.5">
              <span className={`${isDark ? 'text-white' : 'text-neutral-900'} font-sans text-lg font-black tracking-[#0.03em] uppercase`}>
                Aidus
              </span>
            </div>
          </div>

          {/* Core bottom graphics display representing "Your team's brain, always accessible" */}
          <div className="relative z-10 mt-auto select-none">
            
            {/* Avatar Pill Badge */}
            <div className={`inline-flex items-center gap-3 ${isDark ? 'bg-zinc-900/60' : 'bg-zinc-100/80'} border ${isDark ? 'border-zinc-800/50' : 'border-zinc-200'} rounded-full py-1.5 pl-2.5 pr-4 mb-6 backdrop-blur-md`}>
              {/* Stacked avatars */}
              <div className="flex -space-x-1.5 overflow-hidden filter grayscale contrast-125 saturate-150">
                <img
                  className="inline-block h-5 w-5 rounded-full ring-1 ring-black object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=60&auto=format&fit=crop"
                  alt="U1"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-5 w-5 rounded-full ring-1 ring-black object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=60&auto=format&fit=crop"
                  alt="U2"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-5 w-5 rounded-full ring-1 ring-black object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=60&auto=format&fit=crop"
                  alt="U3"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text label */}
              <span className={`text-[10.5px] ${isDark ? 'text-zinc-400' : 'text-zinc-650'} font-semibold tracking-wide`}>
                Discover Hidden Operational Bottlenecks
              </span>
            </div>

            {/* Headline statement */}
            <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-[-0.04em] ${isDark ? 'text-white' : 'text-zinc-900'} leading-[1.05] mb-5`}>
              Let's Find What's <br />
              Slowing Your <br />
              Business Down<span className="text-[#3b82f6]">.</span>
            </h3>

            {/* Description lines */}
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-650'} text-[13.5px] sm:text-[14.5px] font-normal leading-[1.55] max-w-lg`}>
              Every business has hidden inefficiencies.<br className="hidden sm:inline" />
              We'll analyze your operations, identify automation opportunities, uncover revenue leaks, and show you exactly where better systems can create measurable growth.
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: HIGH-CONTRAST FORM PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`lg:col-span-5 bg-white text-black rounded-[2.25rem] p-8 sm:p-12 flex flex-col justify-between min-h-[580px] shadow-3xl relative border ${isDark ? 'border-zinc-100' : 'border-zinc-200'} overflow-hidden transition-[border-color] duration-500`}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form-side"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-between flex-1"
              >
                {/* Form header and inputs container */}
                <div>
                  {/* Modern custom shell logo matching the sketch exactly */}
                  <div className="mb-6">
                    <DarkShellLogo className="w-10 h-10 text-neutral-900" />
                  </div>

                  {/* Get Beta Access display title */}
                  <h2 className="text-[2.2rem] sm:text-[2.6rem] font-sans font-black tracking-[-0.04em] text-neutral-950 leading-[1.05] mb-10">
                    Request Your Free <br />
                    Business Audit
                  </h2>

                  {/* Input form fields */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-neutral-400 pl-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder={defaultNamePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#f4f4f6] text-neutral-900 border border-transparent rounded-2xl px-5 py-4 text-sm font-semibold placeholder-neutral-400 focus:outline-none focus:bg-[#eeeef2] focus:border-neutral-200 transition-all shadow-inner"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-neutral-400 pl-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder={defaultEmailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#f4f4f6] text-neutral-900 border border-transparent rounded-2xl px-5 py-4 text-sm font-semibold placeholder-neutral-400 focus:outline-none focus:bg-[#eeeef2] focus:border-neutral-200 transition-all shadow-inner"
                        required
                      />
                    </div>

                    {/* Premium massive floating CTA button with exact shadow effect */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group bg-[#121214] hover:bg-neutral-850 text-white font-sans font-extrabold text-sm py-4.5 rounded-2xl transition shadow-[0_15px_30px_-5px_rgba(18,18,20,0.35)] hover:shadow-[0_20px_35px_-4px_rgba(18,18,20,0.45)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="animate-pulse">Locking in parameters...</span>
                        ) : (
                          <>
                            <span>Get My Free Report</span>
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Backed By the Best section under the form */}
                <div className="mt-12 select-none">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
                    What You'll Receive
                  </span>

                  {/* Clean row of 4 visual brand logos */}
                  <div className="flex flex-wrap items-center justify-between gap-4 opacity-75 grayscale hover:opacity-100 transition duration-300">
                    {/* Logo 1 */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                      </div>
                      <span className="text-xs font-sans font-bold tracking-tight text-neutral-900">Operational Bottleneck Analysis</span>
                    </div>

                    {/* Logo 2 */}
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-mono font-black tracking-tight italic text-neutral-900">Revenue Leak Assessment</span>
                    </div>

                    {/* Logo 3 */}
                    <div className="bg-black text-white px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider font-black rounded border border-black">
                      Automation Opportunity Report
                    </div>

                    {/* Logo 4 */}
                    <div className="flex items-center gap-0.5">
                      <span className="text-sm font-sans font-black tracking-tight text-neutral-900">Custom Growth Recommendations</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-side"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex flex-col justify-center items-center py-10 text-center flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-950 flex items-center justify-center mb-6 text-emerald-400 shadow-xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-black text-neutral-950 tracking-tight mb-3">
                  Reservation Locked!
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-sm">
                  We've initialized your beta reservation details for <span className="text-neutral-950 font-bold block mt-1">{email || defaultEmailPlaceholder}</span>
                </p>

                <div className="bg-[#f4f4f6] rounded-[1.5rem] p-5 text-left w-full border border-neutral-100 shadow-inner select-none">
                  <span className="block text-[9px] font-mono font-bold tracking-widest text-neutral-400 uppercase mb-1.5">What happens next?</span>
                  <p className="text-xs text-neutral-700 leading-relaxed mb-2">
                    Founder <span className="text-neutral-950 font-bold">Balaji Pasupathy</span> and the Aidus core team are processing your high-velocity parameters.
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Watch your inbox for a direct invitation key within 24 hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setSubmitted(false);
                  }}
                  className="mt-8 text-xs font-semibold text-neutral-400 hover:text-neutral-950 underline underline-offset-4 decoration-neutral-200 transition-colors cursor-pointer"
                >
                  Request beta access for another account
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
