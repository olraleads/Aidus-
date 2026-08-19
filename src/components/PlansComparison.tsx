import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

interface PlansComparisonProps {
  isDark: boolean;
  onBack: () => void;
  onBookCall: () => void;
}

export default function PlansComparison({ isDark, onBack, onBookCall }: PlansComparisonProps) {
  const cards = [
    {
      name: 'Starter Plan',
      price: '$50',
      period: '/month',
      desc: 'Perfect for Small Teams, Startups, and Growing Businesses',
      features: [
        'Basic financial analytics tools',
        'Up to 3 user accounts',
        'Real-time exchange rate monitoring',
        'Monthly financial reports',
        'Email support'
      ],
      isHighlighted: false,
    },
    {
      name: 'Professional Plan',
      price: '$80',
      period: '/month',
      desc: 'Perfect for Small Teams, Startups, and Growing Businesses',
      features: [
        'Basic financial analytics tools',
        'Up to 3 user accounts',
        'Real-time exchange rate monitoring',
        'Monthly financial reports',
        'Email support'
      ],
      isHighlighted: true,
    },
    {
      name: 'Enterprise Plan',
      price: '$120',
      period: '/month',
      desc: 'Perfect for Small Teams, Startups, and Growing Businesses',
      features: [
        'Basic financial analytics tools',
        'Up to 3 user accounts',
        'Real-time exchange rate monitoring',
        'Monthly financial reports',
        'Email support'
      ],
      isHighlighted: false,
    },
  ];

  const tableRows = [
    {
      name: 'Price',
      starter: '$50/month',
      professional: '$80/month',
      enterprise: '$120/month',
      isText: true,
    },
    {
      name: 'Basic features at no cost',
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Access to limited code outputs',
      starter: true,
      professional: 'Unlimited',
      enterprise: 'Unlimited',
    },
    {
      name: 'Community support',
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Basic AI-powered sketch',
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Limited storage processing',
      starter: '100 GB',
      professional: '500 GB',
      enterprise: '1 TB',
    },
    {
      name: 'Full access to all features',
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Embedded files',
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Real-time whiteboard collaboration',
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Updates tab',
      starter: 'Limited',
      professional: true,
      enterprise: true,
    },
    {
      name: 'Zoom connectivity',
      starter: 'Limited',
      professional: 'Limited',
      enterprise: 'Unlimited',
    },
    {
      name: 'Public forms',
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Tailored notifications',
      starter: true,
      professional: true,
      enterprise: true,
    },
  ];

  const renderCellContent = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <div className={`w-5 h-5 rounded-full flex items-center justify-center mx-auto ${
            isDark ? 'bg-white text-zinc-950' : 'bg-zinc-950 text-white'
          }`}>
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </div>
        );
      }
      return null;
    }
    return (
      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
        {val}
      </span>
    );
  };

  return (
    <div className={`min-h-screen pt-28 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto select-none ${isDark ? 'text-white' : 'text-zinc-900'}`}>
      
      {/* Top action header details */}
      <div className="flex justify-between items-center mb-10">
        <button 
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            isDark 
              ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700' 
              : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-350 shadow-sm'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Landing</span>
        </button>

        <div className="flex items-center gap-2 font-mono text-[11px] font-black tracking-widest text-[#8da315] dark:text-[#cbf33b]">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>FLEXIBLE PLANS & RATINGS</span>
        </div>
      </div>

      {/* Main Title display */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight max-w-3xl mx-auto ${
          isDark ? 'text-white' : 'text-zinc-950'
        }`}>
          Affordable plans for every budget
        </h1>
        <p className={`text-sm sm:text-base font-normal mt-4 max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
          Explore our range of pricing options designed to fit your budget, offering exceptional value and flexibility to meet your unique needs
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
        {cards.map((card, idx) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
              card.isHighlighted
                ? (isDark 
                    ? 'bg-zinc-950 text-white border-zinc-800 shadow-2xl scale-[1.02] z-10' 
                    : 'bg-zinc-950 text-white border-zinc-900 shadow-xl scale-[1.02] z-10')
                : (isDark 
                    ? 'bg-zinc-900/30 text-white border-zinc-800/80 shadow-inner' 
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]')
            }`}
          >
            {card.isHighlighted && (
              <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[9px] font-mono tracking-widest uppercase font-black rounded-full shadow-md ${
                isDark ? 'bg-white text-zinc-950' : 'bg-white text-zinc-950 border border-zinc-200'
              }`}>
                Featured Plan
              </span>
            )}

            <div>
              <p className={`text-xs font-bold tracking-tight mb-4 ${
                card.isHighlighted 
                  ? 'text-zinc-400' 
                  : (isDark ? 'text-zinc-400' : 'text-zinc-500')
              }`}>
                {card.name}
              </p>
              
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`text-4xl sm:text-5xl font-black tracking-tight ${
                  card.isHighlighted ? 'text-white' : (isDark ? 'text-white' : 'text-zinc-950')
                }`}>{card.price}</span>
                <span className={`text-xs font-semibold ${
                  card.isHighlighted 
                    ? 'text-zinc-400' 
                    : (isDark ? 'text-zinc-500' : 'text-zinc-400')
                }`}>
                  {card.period}
                </span>
              </div>

              <p className={`text-xs font-medium leading-relaxed mb-6 ${
                card.isHighlighted 
                  ? 'text-zinc-300' 
                  : (isDark ? 'text-zinc-400' : 'text-zinc-600')
              }`}>
                {card.desc}
              </p>

              <div className={`pt-6 border-t ${
                card.isHighlighted 
                  ? 'border-zinc-850' 
                  : (isDark ? 'border-zinc-800' : 'border-zinc-150')
              }`}>
                <p className={`text-[11px] font-mono tracking-wider font-extrabold mb-4 uppercase ${
                  card.isHighlighted ? 'text-zinc-500' : (isDark ? 'text-zinc-500' : 'text-zinc-400')
                }`}>
                  Features:
                </p>

                <ul className="space-y-3.5">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                        card.isHighlighted
                          ? 'bg-white text-zinc-950'
                          : (isDark ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-white')
                      }`}>
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className={`text-xs sm:text-[12.5px] font-semibold ${
                        card.isHighlighted 
                          ? 'text-zinc-200' 
                          : (isDark ? 'text-zinc-300' : 'text-zinc-800')
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onBookCall}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer text-center ${
                  card.isHighlighted
                    ? 'bg-white text-zinc-950 hover:bg-zinc-100'
                    : (isDark 
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
                        : 'bg-zinc-950 text-white hover:bg-black')
                }`}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table header / introduction block */}
      <div className="text-center mb-8 max-w-xl mx-auto pt-8">
        <h2 className={`text-xl sm:text-2xl font-black mb-2 tracking-tight ${
          isDark ? 'text-white' : 'text-zinc-950'
        }`}>Full feature breakdown</h2>
        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
          isDark ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
          Compare specifications side-by-side to discover the exact alignment for your stack.
        </p>
      </div>

      {/* Comparison Table Grid */}
      <div className={`w-full overflow-x-auto rounded-3xl border ${
        isDark ? 'bg-zinc-950/20 border-zinc-800/80' : 'bg-white border-zinc-200 shadow-md'
      } pb-6`}>
        <table className="w-full border-collapse min-w-[760px] text-left">
          <thead>
            <tr className="bg-zinc-950 text-white border-b border-zinc-800">
              <th className="p-5 md:p-6 text-xs font-bold text-zinc-400 uppercase tracking-widest w-[34%] rounded-tl-3xl">
                Specification
              </th>
              <th className="p-5 md:p-6 text-xs text-center font-bold tracking-wider uppercase w-[22%]">
                Starter Plan
              </th>
              <th className="p-5 md:p-6 text-xs text-center font-bold tracking-wider uppercase w-[22%]">
                Professional Plan
              </th>
              <th className="p-5 md:p-6 text-xs text-center font-bold tracking-wider uppercase w-[22%] rounded-tr-3xl">
                Enterprise Plan
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y text-sm ${isDark ? 'divide-zinc-800/60' : 'divide-zinc-200'}`}>
            {tableRows.map((row) => (
              <tr 
                key={row.name}
                className={`transition-colors duration-200 ${
                  row.isText 
                    ? (isDark ? 'bg-zinc-900/10 font-bold' : 'bg-zinc-100/30 font-bold') 
                    : (isDark ? 'hover:bg-zinc-900/10' : 'hover:bg-zinc-50/50')
                }`}
              >
                <td className={`p-5 md:p-6 font-semibold text-xs sm:text-[13.5px] ${
                  isDark ? 'text-zinc-200' : 'text-zinc-800'
                }`}>
                  {row.name}
                </td>
                <td className="p-5 md:p-6 text-center">
                  {renderCellContent(row.starter)}
                </td>
                <td className="p-5 md:p-6 text-center">
                  {renderCellContent(row.professional)}
                </td>
                <td className="p-5 md:p-6 text-center">
                  {renderCellContent(row.enterprise)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
