import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import LogoMark from './LogoMark.tsx';
import AppleButton from './AppleButton.tsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onScrollToSection }: MobileMenuProps) {
  const links = ['Services', 'Stack', 'Pricing', 'Audit'];

  const getSectionId = (label: string) => {
    switch (label) {
      case 'Services': return 'triage-section';
      case 'Stack': return 'email-sandbox';
      case 'Pricing': return 'pricing-section';
      case 'Audit': return 'cta-section';
      default: return 'hero-section';
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-white flex flex-col justify-between p-6 overflow-y-auto"
      id="mobile-menu-overlay"
    >
      {/* Top Bar inside mobile menu */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="w-8 h-8 text-brand animate-pulse" />
          <span className="text-xl font-bold tracking-tight text-zinc-950 font-sans">AIDUS</span>
        </div>
        <button
          id="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-55 bg-zinc-50 flex items-center justify-center text-zinc-900 hover:bg-zinc-100 transition-colors active:scale-90 cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Large navigation links in main body */}
      <div className="flex flex-col items-start gap-6 my-auto text-left">
        {links.map((link, idx) => (
          <motion.button
            key={link}
            id={`mobile-nav-link-${link.toLowerCase()}`}
            onClick={() => {
              onScrollToSection(getSectionId(link));
              onClose();
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15 + idx * 0.08,
            }}
            className="text-3xl font-semibold tracking-tight text-zinc-650 hover:text-zinc-950 transition-colors cursor-pointer select-none text-left"
          >
            {link}
          </motion.button>
        ))}
      </div>

      {/* Footer block at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full flex flex-col items-center gap-4 mt-8"
      >
        <AppleButton
          label="Request Free Audit"
          full
          onClick={() => {
            onScrollToSection('cta-section');
            onClose();
          }}
        />
        <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-mono font-medium">
          Automated Systems. Plugs Revenue Leaks.
        </span>
      </motion.div>
    </motion.div>
  );
}
