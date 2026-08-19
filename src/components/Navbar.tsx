import React from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import LogoMark from './LogoMark.tsx';
import AppleButton from './AppleButton.tsx';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenMobileMenu, onScrollToSection }: NavbarProps) {
  const links = ['Services', 'Operational Stack', 'Target Niches', 'Pricing'];

  const getSectionId = (link: string) => {
    switch (link) {
      case 'Services': return 'triage-section';
      case 'Operational Stack': return 'inbox-section';
      case 'Target Niches': return 'testimonials-section';
      case 'Pricing': return 'pricing-section';
      default: return 'hero-section';
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 w-full max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 h-20 flex items-center justify-between"
      id="main-navbar"
    >
      {/* Left: just the LogoMark */}
      <div className="flex items-center cursor-pointer" onClick={() => onScrollToSection('hero-section')}>
        <LogoMark className="w-8 h-8 hover:opacity-80 transition-opacity" />
      </div>

      {/* Center: Desktop links with staggered animation */}
      <div className="hidden md:flex items-center gap-10 lg:gap-16 xl:gap-24">
        {links.map((link, i) => (
          <motion.button
            key={link}
            id={`nav-link-${link.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => onScrollToSection(getSectionId(link))}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 + i * 0.05,
            }}
            className="text-zinc-650 text-sm font-medium hover:text-zinc-950 hover:underline decoration-brand decoration-2 underline-offset-4 transition-all duration-200 cursor-pointer"
          >
            {link}
          </motion.button>
        ))}
      </div>

      {/* Right Desktop: AppleButton */}
      <div className="hidden md:block">
        <AppleButton label="Request Free Audit" onClick={() => onScrollToSection('cta-section')} />
      </div>

      {/* Mobile Right: Menu button */}
      <button
        id="mobile-menu-trigger"
        onClick={onOpenMobileMenu}
        aria-label="Open Menu"
        className="md:hidden w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 active:scale-95 flex items-center justify-center transition-all cursor-pointer"
      >
        <Menu className="w-5 h-5 text-zinc-900" />
      </button>
    </motion.nav>
  );
}
