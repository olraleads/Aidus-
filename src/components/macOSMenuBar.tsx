import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface MacOSMenuBarProps {
  isDark?: boolean;
  setIsDark?: (dark: boolean) => void;
  onNavigateLanding?: (sectionId: string) => void;
}

export default function MacOSMenuBar({ isDark = false, setIsDark, onNavigateLanding }: MacOSMenuBarProps) {
  const menuItems = [
    { label: 'Home', id: 'hero-section' },
    { label: 'About', id: 'triage-section' },
    { label: 'Services', id: 'testimonials-section' },
    { label: 'Portfolio', id: 'aidus-performance-section' },
    { label: 'Contact', id: 'empty-end-section' }
  ];

  const [activeTab, setActiveTab] = useState('Home');

  // Interactive scroll spy to track user viewport on the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for triggers

      // Special case: at the top of the page
      if (window.scrollY < 100) {
        setActiveTab('Home');
        return;
      }

      // Check which section is in view
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const item = menuItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(item.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, label: string) => {
    setActiveTab(label);
    if (onNavigateLanding) {
      onNavigateLanding(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Offset slightly to account for the floating navbar size
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="fixed top-5 left-0 right-0 w-full flex justify-center items-center z-50 px-4 md:px-0 select-none">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between h-[54px] md:h-[58px] px-3 md:px-[18px] rounded-full transition-all duration-500 backdrop-blur-lg border ${
          isDark 
            ? 'bg-zinc-950/40 border-zinc-900/40 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.06)]' 
            : 'bg-[#fafafc]/50 border-zinc-200/40 shadow-[0_12px_36px_rgba(0,0,0,0.03),0_2px_8px_rgba(0,0,0,0.01),inset_0_1px_1px_rgba(255,255,255,0.8)]'
        } w-full max-w-xl md:max-w-2xl lg:max-w-3xl`}
        id="macos-menu-bar"
      >
        {/* Left side: Premium 3D glass blue sphere + Brand Name */}
        <div 
          onClick={() => handleNavClick('hero-section', 'Home')}
          className="flex items-center gap-2.5 cursor-pointer group"
          id="brand-container"
        >
          {/* Authentic 3D Glass Blue Sphere reflection as requested in image */}
          <div className="relative w-5.5 h-5.5 md:w-6.2 md:h-6.2 rounded-full shrink-0 shadow-[0_3px_10px_rgba(59,130,246,0.45)] overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:rotate-12">
            {/* Ambient sphere gradient base */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-500 to-sky-300" />
            {/* Crisp 3D reflection highlight cap */}
            <div className="absolute top-[1.5px] left-[1.5px] right-[1.5px] h-[40%] bg-gradient-to-b from-white/70 to-transparent rounded-full" />
            {/* Extra glowing center reflection */}
            <div className="absolute top-[1px] left-1.5 w-1.5 h-1 bg-white rounded-full opacity-85 filter blur-[0.2px]" />
            {/* Bottom-right internal refraction glow */}
            <div className="absolute bottom-1 right-1 w-3.5 h-2 bg-sky-200/30 rounded-full filter blur-[1px] transform rotate-[15deg]" />
          </div>
          
          <span className={`text-[15px] sm:text-[16px] font-bold tracking-tight font-sans transition-colors duration-300 ${
            isDark ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-zinc-950'
          }`}>
            AIDUS
          </span>
        </div>

        {/* Center: List of beautiful floating navigation links */}
        <div className="flex items-center gap-1.5 md:gap-2 text-[12.5px] sm:text-[13px] font-medium font-sans">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id, item.label)}
              className="relative px-3.5 sm:px-[18px] py-[7px] md:py-[8px] rounded-full transition-colors duration-300 pointer-events-auto"
            >
              {/* Dynamic Sliding Recessed background with hardware acceleration */}
              <AnimatePresence initial={false}>
                {activeTab === item.label && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className={`absolute inset-0 rounded-full border ${
                      isDark 
                        ? 'bg-zinc-800/85 border-zinc-700/30 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),inset_-1px_-1px_1px_rgba(255,255,255,0.06)]' 
                        : 'bg-white border-zinc-200/20 shadow-[0_2px_5px_rgba(0,0,0,0.03),inset_1px_1px_2px_rgba(0,0,0,0.02),inset_-1px_-1px_2px_rgba(255,255,255,0.9)]'
                    }`}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </AnimatePresence>

              {/* Link label with active style tracking */}
              <span className={`relative z-10 block transition-all duration-300 ${
                activeTab === item.label
                  ? (isDark ? 'text-white font-semibold' : 'text-zinc-800 font-semiboldScale')
                  : (isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-500 hover:text-zinc-800')
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Right side: Dark Mode / Light Mode sun toggle pill inside container */}
        <div className="flex items-center">
          {setIsDark && (
            <motion.button
              onClick={() => setIsDark(!isDark)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-all duration-300 border ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-yellow-400/90 shadow-md' 
                  : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200/60 text-slate-600 shadow-sm'
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -40, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 40, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-4 h-4" strokeWidth={2.4} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 40, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -40, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-4 h-4" strokeWidth={2.4} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
