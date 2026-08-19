import React from 'react';

interface SectionEyebrowProps {
  label: string;
  tag?: string;
}

export default function SectionEyebrow({ label, tag }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3" id="section-eyebrow-container">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-pulse" />
        <span className="text-xs uppercase tracking-wider font-semibold text-zinc-950">{label}</span>
      </div>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-zinc-200 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
          {tag}
        </span>
      )}
    </div>
  );
}
