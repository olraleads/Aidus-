import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollToPricing: () => void;
  isDark?: boolean;
}

export default function Hero({ onScrollToPricing, isDark = true }: HeroProps) {
  // To keep the hero section in its original dark layout regardless of light mode, we force its dark theme styling
  const forceDark = true;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Hero background video autoplay blocked or paused:", err);
          
          // Fallback listeners to activate play on initial screen activity
          const forcePlay = () => {
            video.play().then(() => {
              cleanup();
            }).catch(() => {});
          };
          
          const cleanup = () => {
            document.removeEventListener('click', forcePlay);
            document.removeEventListener('touchstart', forcePlay);
          };
          
          document.addEventListener('click', forcePlay);
          document.addEventListener('touchstart', forcePlay);
        });
      }
    }
  }, []);

  return (
    <section id="hero-section" className="relative h-screen w-full flex-shrink-0 overflow-hidden bg-[#050507]">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-10 bg-[#050507]">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dhpisrlby/video/upload/v1780826901/baby-track-video_e968wn_mgb11r.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        />
      </div>

      {/* Light theme adaptive overlay over the video layer to make the light layout completely flawless */}
      <div className={`absolute inset-0 z-20 transition-all duration-700 pointer-events-none ${forceDark ? 'bg-transparent' : 'bg-zinc-50/85 backdrop-blur-[2px]'}`} />

      {/* 2. Content Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        
        {/* Top-Left: Logo + Tagline + Desktop Paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-[24px] left-[20px] md:top-[64px] md:left-[64px] pointer-events-auto max-w-[calc(100vw-140px)] md:max-w-none"
        >
          {/* Logo & Tagline Flex Row */}
          <div className="flex items-center gap-[16px] md:gap-[24px]">
            {/* Logo */}
            <div className="flex-shrink-0 w-[48px] h-[48px] md:w-[64px] md:h-[64px]">
              <svg viewBox="0 0 120 120" className={`w-full h-full ${forceDark ? 'fill-white' : 'fill-zinc-900'} transition-all duration-500`} aria-hidden="true">
                <path d="M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z" />
              </svg>
            </div>
            {/* Tagline */}
            <div className={`text-[11px] md:text-[16px] w-[112px] md:w-auto leading-[1.2] font-semibold tracking-[0.02em] font-manrope ${forceDark ? 'text-white' : 'text-zinc-900'} transition-colors duration-500`}>
              <span className="hidden md:block">
                Complete Business<br />Automation. We Handle All Tasks.<br />You Relax.
              </span>
              <span className="block md:hidden">
                Complete Business<br />Automation. We Handle All<br />Tasks. You Relax.
              </span>
            </div>
          </div>

          {/* Left Description Paragraphs (Desktop only) */}
          <div className="hidden md:flex mt-[200px] flex-col gap-[24px] w-full max-w-[320px] text-[14px] font-normal leading-relaxed font-manrope">
            {[
              "Most business owners never see where revenue is actually slipping away. It disappears in missed opportunities, delayed responses, inconsistent follow-ups, manual workflows, and everyday operational friction. Small inefficiencies compound over time, quietly limiting growth long before they become obvious problems.",
              "The challenge isn't a lack of effort. Teams work hard, owners stay busy, and customers keep coming. The real issue is that modern businesses generate more conversations, tasks, data, and decisions than humans can consistently manage. Without intelligent systems, valuable opportunities are often lost between intention and execution.",
              "AIDUS builds complete AI-powered automation ecosystems tailored to your business. From customer communication, CRM management, lead nurturing, appointment scheduling, and operational workflows to finance, reporting, internal processes, and marketing automation — we design systems that work continuously behind the scenes so your business can scale with greater speed, consistency, and control."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + idx * 0.18
                }}
                className={forceDark ? 'text-zinc-300' : 'text-zinc-655'}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Top-Right: CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-[24px] right-[20px] md:top-[64px] md:right-[64px] pointer-events-auto"
        >
          <button
            onClick={onScrollToPricing}
            className={`px-5 py-3 md:px-10 md:py-7 border rounded-[100%] text-[12px] md:text-[18px] font-italiana uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              forceDark 
                ? 'border-white text-white hover:bg-white/10 bg-black/10 backdrop-blur-sm' 
                : 'border-zinc-905 border-zinc-900 text-zinc-900 hover:bg-black/5 bg-white/20 backdrop-blur-sm'
            }`}
          >
            Get started
          </button>
        </motion.div>

        {/* Bottom: Large Heading Area */}
        <div className="absolute bottom-[32px] left-[20px] right-[20px] md:left-auto md:bottom-[64px] md:right-[64px] md:max-w-[1200px] text-left md:text-right pointer-events-auto flex flex-col md:block">
          {/* Mobile description paragraphs (Mobile only) */}
          <div className="md:hidden flex flex-col gap-[16px] w-full max-w-[280px] text-[12px] font-normal mb-[32px] text-left font-manrope leading-[16px]">
            {[
              "Most business owners never see where revenue is actually slipping away. It disappears in missed opportunities, delayed responses, inconsistent follow-ups, manual workflows, and everyday operational friction. Small inefficiencies compound over time, quietly limiting growth long before they become obvious problems.",
              "The challenge isn't a lack of effort. Teams work hard, owners stay busy, and customers keep coming. The real issue is that modern businesses generate more conversations, tasks, data, and decisions than humans can consistently manage. Without intelligent systems, valuable opportunities are often lost between intention and execution.",
              "AIDUS builds complete AI-powered automation ecosystems tailored to your business. From customer communication, CRM management, lead nurturing, appointment scheduling, and operational workflows to finance, reporting, internal processes, and marketing automation — we design systems that work continuously behind the scenes so your business can scale with greater speed, consistency, and control."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + idx * 0.15
                }}
                className={forceDark ? 'text-zinc-300' : 'text-zinc-650'}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Heading */}
          <h1 className={`text-[36px] leading-[1.1] md:text-[96px] font-italiana md:leading-[88px] ${forceDark ? 'text-white' : 'text-zinc-900'} transition-colors duration-500`}>
            <span className="hidden md:block">
              {[
                "Your Business",
                "Is Leaking Revenue",
                "While You’re Busy",
                "Running It."
              ].map((line, idx) => (
                <motion.span
                  key={idx}
                  className="block"
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3 + idx * 0.12
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </span>
            <span className="block md:hidden text-[32px]">
              {[
                "Your Business Is",
                "Leaking Revenue While",
                "You’re Busy Running It."
              ].map((line, idx) => (
                <motion.span
                  key={idx}
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3 + idx * 0.1
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
