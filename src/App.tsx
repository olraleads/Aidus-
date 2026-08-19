import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import Hls from 'hls.js';
import Hero from './components/Hero.tsx';
import MacOSMenuBar from './components/macOSMenuBar.tsx';
import FeatureTriage from './components/FeatureTriage.tsx';
import LogoCloud from './components/LogoCloud.tsx';
import Testimonials from './components/Testimonials.tsx';
import TransitionalSpacer from './components/TransitionalSpacer.tsx';
import Pricing from './components/Pricing.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import EndSection from './components/EndSection.tsx';
import MobileMenu from './components/MobileMenu.tsx';
import EmptySection from './components/EmptySection.tsx';
import SecondaryEmptySection from './components/SecondaryEmptySection.tsx';
import AidusIntegrationsSection from './components/AidusIntegrationsSection.tsx';
import TertiaryEmptySection from './components/TertiaryEmptySection.tsx';
import QuaternaryEmptySection from './components/QuaternaryEmptySection.tsx';
import QuinaryEmptySection from './components/QuinaryEmptySection.tsx';
import SenaryEmptySection from './components/SenaryEmptySection.tsx';

// Interactive detailed Pages requested by the user
import PlansComparison from './components/PlansComparison.tsx';
import ScheduleMeeting from './components/ScheduleMeeting.tsx';
import ThankYouPage from './components/ThankYouPage.tsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'comparison' | 'schedule' | 'thank-you'>('landing');
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://v1.pinimg.com/videos/mc/hls/65/58/5c/65585c079fb2f6429135494141ef8dc6.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.log("Autoplay blocked or play interrupted:", err);
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari / iOS)
      video.src = hlsUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((err) => {
          console.log("Autoplay blocked or play interrupted:", err);
        });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [hlsUrl]);

  const scrollIntoId = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateLanding = (sectionId: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleBookCallNavigate = () => {
    setCurrentView('schedule');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAuditSuccessNavigate = () => {
    setCurrentView('thank-you');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main className={`min-h-screen overflow-x-hidden font-manrope ${isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'} relative select-none transition-colors duration-500`} id="app-root-container">
      
      {/* Dynamic macOS Menu Bar with Theme Switching Slider inside */}
      <MacOSMenuBar isDark={isDark} setIsDark={setIsDark} onNavigateLanding={handleNavigateLanding} />

      {/* Global SVG noise filters (One at root level, id "c3-noise") */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" id="root-noise-svg">
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Vertical guidelines */}
      <div className={`hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+60rem)] w-px ${isDark ? 'bg-zinc-800/20' : 'bg-zinc-200/40'} z-[5]`} />
      <div className={`hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+60rem)] w-px ${isDark ? 'bg-zinc-800/20' : 'bg-zinc-200/40'} z-[5]`} />

      {currentView === 'landing' ? (
        <>
          {/* Hero Section (occupies full screen on load, z-10) */}
          <Hero isDark={isDark} onScrollToPricing={() => scrollIntoId('pricing-section')} />

          {/* Rest of the website: wrapped in logic-wrapper to preserve visual layout of downstream components */}
          <div className={`transition-all duration-500 ${isDark ? 'bg-[#09090b] text-white selection:bg-[#8da315]/20' : 'bg-zinc-50 text-zinc-900 selection:bg-[#8da315]/10'} relative z-20 font-sans overflow-hidden`}>
            
            {/* Continuous ambient background video */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 overflow-hidden mix-blend-screen">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-full h-full object-cover"
              />
              {/* Top and bottom ambient vignettes for flawless text contrast */}
              <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${isDark ? 'from-[#09090b]' : 'from-zinc-50'} to-transparent pointer-events-none`} />
              <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${isDark ? 'from-[#09090b]' : 'from-zinc-50'} to-transparent pointer-events-none`} />
            </div>

            {/* Relative content wrapper to sit on top of background video */}
            <div className="relative z-10 w-full pt-10">
              {/* Feature focus columns */}
              <FeatureTriage isDark={isDark} />

              {/* Logo cloud brands */}
              <LogoCloud isDark={isDark} />

              {/* Empty customized space */}
              <EmptySection isDark={isDark} />

              {/* User testimonial blocks */}
              <Testimonials isDark={isDark} />

              {/* User added secondary empty spacer section */}
              <SecondaryEmptySection isDark={isDark} />

              {/* Aidus Ecosystem Integrations section */}
              <AidusIntegrationsSection isDark={isDark} />

              {/* Tertiary high fidelity empty metrics section */}
              <TertiaryEmptySection isDark={isDark} />

              {/* User added quinary empty section */}
              <QuinaryEmptySection isDark={isDark} />

              {/* Subscription prices */}
              <Pricing 
                isDark={isDark} 
                onShowComparison={() => { setCurrentView('comparison'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                onBookCall={handleBookCallNavigate}
              />

              {/* Last action pitch card */}
              <FinalCTA isDark={isDark} onAuditSuccess={handleAuditSuccessNavigate} />

              {/* Senary dynamic empty section */}
              <SenaryEmptySection isDark={isDark} />

              {/* Quaternary interactive pipeline empty section */}
              <QuaternaryEmptySection isDark={isDark} />

              {/* New End Section with Sora aesthetic */}
              <EndSection isDark={isDark} onBookCall={handleBookCallNavigate} />
            </div>

          </div>
        </>
      ) : currentView === 'comparison' ? (
        <PlansComparison 
          isDark={isDark} 
          onBack={() => { setCurrentView('landing'); window.scrollTo({ top: 0, behavior: 'instant' }); }} 
          onBookCall={handleBookCallNavigate} 
        />
      ) : currentView === 'schedule' ? (
        <ScheduleMeeting 
          isDark={isDark} 
          onBack={() => { setCurrentView('landing'); window.scrollTo({ top: 0, behavior: 'instant' }); }} 
          onBookSuccess={() => {}} 
        />
      ) : (
        <ThankYouPage 
          isDark={isDark} 
          onBack={() => { setCurrentView('landing'); window.scrollTo({ top: 0, behavior: 'instant' }); }} 
        />
      )}

      {/* Animated mobile overlays */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onScrollToSection={scrollIntoId}
          />
        )}
      </AnimatePresence>

    </main>
  );
}
