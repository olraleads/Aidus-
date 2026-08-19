import React from 'react';
import { ChevronRight } from 'lucide-react';
import AppleLogo from './AppleLogo.tsx';

interface AppleButtonProps {
  label?: string;
  full?: boolean;
  onClick?: () => void;
}

export default function AppleButton({ label = 'Request Free Audit', full = false, onClick }: AppleButtonProps) {
  return (
    <button
      id="apple-download-button"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 text-white font-medium text-sm px-5 py-3 transition-all hover:bg-zinc-850 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      <AppleLogo className="w-4 h-4 text-white" />
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}
