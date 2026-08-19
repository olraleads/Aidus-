import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Clock, 
  AlertTriangle, 
  Zap, 
  Paperclip, 
  Smile, 
  Cpu, 
  Database,
  ArrowRight,
  Sparkles,
  Play,
  Mail,
  MoreHorizontal,
  Plus,
  Send,
  DollarSign,
  Users,
  ShoppingCart,
  Star,
  ChevronDown,
  TrendingUp,
  ArrowDown,
  Apple,
  X,
  Cloud
} from 'lucide-react';

export default function SecondaryEmptySection({ isDark = true }: { isDark?: boolean }) {
  // Column 1 (Left): AI Summary Card States
  const [activeTab, setActiveTab] = useState<'summary' | 'tasks' | 'comment'>('summary');
  const [summarized, setSummarized] = useState(false);
  const [summarizeText, setSummarizeText] = useState(
    "Aidus evaluated the pipeline diagnostic trace. The failed webhook was triggered by an invalid secret format in node #229. Immediate workspace token refresh recommended in server configuration."
  );

  // Column 2 (Center): AI Auto-Drafting States
  const [draftTone, setDraftTone] = useState<'reply' | 'professional' | 'short' | 'detailed'>('reply');
  const [payloadText, setPayloadText] = useState(''); // Keeps task synchronization intact
  const [isGenerating, setIsGenerating] = useState(false);
  const [customReplyText, setCustomReplyText] = useState('');

  // Automated mouse clicking simulation for the email drafting demo
  const [virtualCursorPos, setVirtualCursorPos] = useState({ x: '15%', y: '42%', clicked: false });
  const [isHoveredByRealUser, setIsHoveredByRealUser] = useState(false);
  const [isIcloudActive, setIsIcloudActive] = useState(true);

  // High-fidelity pre-authored drafts matching the styles perfectly
  const draftsByTone = {
    reply: `Dear John,

Thanks for sharing the documents. I'll review everything and make sure to send over my feedback by Thursday EOD.

Best,
Sarah`,
    professional: `Dear John,

Thank you for forwarding the budget materials. I will conduct a comprehensive evaluation of the Q4 financial plans and ensure my structured feedback is delivered to the team by Thursday afternoon.

Sincerely,
Sarah`,
    short: `Hi John,

Got it! I will review the attached documents and ping you back with feedback by Thursday EOD.

Thanks,
Sarah`,
    detailed: `Hi John,

Thank you for the update on the budget process. I understand the urgency of finalizing the Q4 allocation by Friday. I am queuing up a thorough review of the attached deliverables today. Specifically, I'll cross-reference the projections with our operational margins and send over all feedback comments by Thursday evening.

Kind regards,
Sarah`
  };

  const currentDraftText = draftTone === 'reply' && customReplyText ? customReplyText : draftsByTone[draftTone];

  React.useEffect(() => {
    if (isHoveredByRealUser) return;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep === 0) {
        // Glide to Professional tab
        setVirtualCursorPos({ x: '38%', y: '42%', clicked: false });
        setTimeout(() => {
          setVirtualCursorPos({ x: '38%', y: '42%', clicked: true });
          setDraftTone('professional');
          setTimeout(() => {
            setVirtualCursorPos({ x: '38%', y: '42%', clicked: false });
          }, 350);
        }, 1200);
      } else if (currentStep === 1) {
        // Glide to Short tab
        setVirtualCursorPos({ x: '62%', y: '42%', clicked: false });
        setTimeout(() => {
          setVirtualCursorPos({ x: '62%', y: '42%', clicked: true });
          setDraftTone('short');
          setTimeout(() => {
            setVirtualCursorPos({ x: '62%', y: '42%', clicked: false });
          }, 350);
        }, 1200);
      } else if (currentStep === 2) {
        // Glide to Detailed tab
        setVirtualCursorPos({ x: '82%', y: '42%', clicked: false });
        setTimeout(() => {
          setVirtualCursorPos({ x: '82%', y: '42%', clicked: true });
          setDraftTone('detailed');
          setTimeout(() => {
            setVirtualCursorPos({ x: '82%', y: '42%', clicked: false });
          }, 350);
        }, 1200);
      } else if (currentStep === 3) {
        // Glide to Input / Composer text
        setVirtualCursorPos({ x: '40%', y: '94%', clicked: false });
        setTimeout(() => {
          setPayloadText("make it warmer :)");
        }, 1500);
      } else if (currentStep === 4) {
        // Glide to Generate button and click it
        setVirtualCursorPos({ x: '85%', y: '94%', clicked: false });
        setTimeout(() => {
          setVirtualCursorPos({ x: '85%', y: '94%', clicked: true });
          setIsGenerating(true);
          setTimeout(() => {
            setVirtualCursorPos({ x: '85%', y: '94%', clicked: false });
            setIsGenerating(false);
            setCustomReplyText(`Dear John,

I hope you're doing great! Thanks so much for sending those documents over. I am excited to look through the budget numbers and will make sure to share my thoughts by Thursday EOD. Have a wonderful rest of your day!

Best,
Sarah`);
            setDraftTone('reply');
            setPayloadText('');
          }, 1500);
        }, 1200);
      }

      currentStep = (currentStep + 1) % 5;
    }, 4500);

    return () => clearInterval(interval);
  }, [isHoveredByRealUser]);

  // Bottom Row: Task Creation States
  const [actionCount, setActionCount] = useState(4);
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Validate Stripe webhook payload signatures', checked: true },
    { id: '2', text: 'Re-dispatch missing invoice deliveries', checked: true },
    { id: '3', text: 'Sync workspace tokens to Cloud Run env', checked: false },
    { id: '4', text: 'Deploy automatic health diagnostic pingers', checked: false }
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  };

  const handleCreateTask = () => {
    const newTaskText = payloadText.trim() || 'Aidus Scheduled Task #' + (tasks.length + 1);
    setTasks([
      ...tasks,
      { id: Date.now().toString(), text: newTaskText, checked: false }
    ]);
    setPayloadText('');
  };

  return (
    <section 
      id="secondary-empty-section" 
      className={`w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 pt-4 pb-20 md:pt-8 md:pb-32 ${
        isDark ? 'bg-[#09090b]' : 'bg-zinc-50'
      } relative overflow-hidden transition-colors duration-500 font-sans`}
    >
      {/* Structural background coordinate lines & grid nodes mimicking the blueprint look */}
      <div className={`absolute inset-y-0 left-12 w-px ${isDark ? 'bg-zinc-900/40' : 'bg-zinc-200/50'} pointer-events-none hidden xl:block`} />
      <div className={`absolute inset-y-0 right-12 w-px ${isDark ? 'bg-zinc-900/40' : 'bg-zinc-200/50'} pointer-events-none hidden xl:block`} />
      
      {/* Top Header matching typography, visual alignment and custom spacing of the source image perfectly */}
      <div className="w-full text-center max-w-4xl mx-auto mb-16 md:mb-24 select-none">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          type="title"
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-black tracking-tighter ${
            isDark ? 'text-white' : 'text-[#18181b]'
          } leading-[1.08] mb-6`}
        >
          Your Business Shouldn't <br />
          Depend On Constant <br className="hidden md:inline" />
          Human Effort.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className={`text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          } max-w-2xl mx-auto whitespace-pre-line`}
        >
          Most businesses don't lose momentum because of bad ideas.
          They lose momentum because work gets stuck between people,
          processes, inboxes, spreadsheets, and follow-ups.

          AIDUS connects everything into one intelligent system.
        </motion.p>
      </div>

      {/* Main Grid matching the exact layout structure, spacing, cards and elements coordinates */}
      <div className="w-full flex flex-col lg:flex-row gap-6 relative z-10">
        
        {/* ================= COLUMN 1 (34% width) ================= */}
        <div id="col-left-cluster" className="w-full lg:w-[34%] flex flex-col gap-6">
          
          {/* Redesigned Card A: Control centre panel matching the exact layout structure, overlay grids, curves, and labels of the source image */}
          <div className={`rounded-[2.5rem] ${
            isDark 
              ? 'bg-zinc-950/25' 
              : 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.012)]'
          } p-8 lg:-ml-12 lg:w-[calc(100%+3rem)] lg:max-w-none relative overflow-hidden flex flex-col justify-between min-h-[400px] group transition-all duration-300`}>
            
            {/* Upper offset card system showing beautiful peeking and shifting layers with automatic infinite sliding loops */}
            <div className="relative w-full h-[175px] mb-2 overflow-hidden select-none flex flex-col justify-center gap-3">
              
              {/* Upper Loop: Rightwards slide */}
              <div className="w-full overflow-hidden relative pointer-events-none py-1.5">
                
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ['-50%', '0%'] }}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity
                  }}
                >
                  {[
                    {
                      id: 'u1',
                      title: "New trial",
                      desc: <>Create agents up to <span className="text-purple-650 dark:text-purple-400 font-semibold">enterprise</span></>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#f43f5e] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5.5 h-5.5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'u2',
                      title: "Upgraded",
                      desc: <>Fuel <span className="text-indigo-600 dark:text-indigo-400 font-semibold">unlimited</span> workspace</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M16 2.01C15 2 9 3 9 7.5c0 3 2.5 4.5 4.5 4.5 4.5 0 5-6 5-7C18.5 3 17 2.02 16 2.01zm-5.69 8.21C9.64 11.23 8.32 12 7 12c-2.4 0-4.5-1.5-5-4h4.5M12 12c.55 0 1-.45 1-1V8.5H10V11c0 .55.45 1 1 1z" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'u3',
                      title: "New host",
                      desc: <>Provisioned <span className="text-emerald-600 dark:text-emerald-450 font-semibold">premium</span> node</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#06b6d4] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'u4',
                      title: "Shield On",
                      desc: <>IP firewall and waf <span className="text-amber-600 dark:text-amber-500 font-semibold">active</span></>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5 h-5 text-white fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                      )
                    }
                  ].concat([
                    {
                      id: 'u1_dup',
                      title: "New trial",
                      desc: <>Create agents up to <span className="text-purple-650 dark:text-purple-400 font-semibold">enterprise</span></>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#f43f5e] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5.5 h-5.5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'u2_dup',
                      title: "Upgraded",
                      desc: <>Fuel <span className="text-indigo-600 dark:text-indigo-400 font-semibold">unlimited</span> workspace</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M16 2.01C15 2 9 3 9 7.5c0 3 2.5 4.5 4.5 4.5 4.5 0 5-6 5-7C18.5 3 17 2.02 16 2.01zm-5.69 8.21C9.64 11.23 8.32 12 7 12c-2.4 0-4.5-1.5-5-4h4.5M12 12c.55 0 1-.45 1-1V8.5H10V11c0 .55.45 1 1 1z" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'u3_dup',
                      title: "New host",
                      desc: <>Provisioned <span className="text-emerald-600 dark:text-emerald-450 font-semibold">premium</span> node</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#06b6d4] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'u4_dup',
                      title: "Shield On",
                      desc: <>IP firewall and waf <span className="text-amber-600 dark:text-amber-500 font-semibold">active</span></>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5 h-5 text-white fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                      )
                    }
                  ]).map((card, idx) => (
                    <div 
                      key={`upper-${card.id}-${idx}`}
                      className={`w-[245px] shrink-0 rounded-2xl p-2.5 flex items-center gap-3 transition-all duration-300 pointer-events-auto ${
                        isDark 
                          ? 'bg-[#18181b] border border-zinc-800/30 shadow-[0_4px_20px_rgba(0,0,0,0.12)]' 
                          : 'bg-white border border-zinc-100/40 shadow-[0_4px_16px_rgba(0,0,0,0.02)]'
                      }`}
                    >
                      {card.icon}
                      <div className="min-w-0 text-left">
                        <span className={`text-[12px] font-bold block leading-tight ${
                          isDark ? 'text-zinc-100' : 'text-zinc-900'
                        }`}>{card.title}</span>
                        <span className={`text-[10px] block truncate leading-tight mt-0.5 ${
                          isDark ? 'text-zinc-400' : 'text-zinc-500'
                        }`}>
                          {card.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Lower Loop: Leftwards slide */}
              <div className="w-full overflow-hidden relative pointer-events-none py-1.5">

                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity
                  }}
                >
                  {[
                    {
                      id: 'l1',
                      title: "Cancellation",
                      desc: <><span className="text-indigo-600 dark:text-[#818cf8] font-semibold">Facebook</span> cancellation start-up</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0 shadow-sm animate-pulse-subtle">
                          <span className="text-white text-[19px] font-black leading-none -mb-0.5 select-none font-sans">f</span>
                        </div>
                      )
                    },
                    {
                      id: 'l2',
                      title: "Payment",
                      desc: <><span className="text-indigo-600 dark:text-[#818cf8] font-semibold">Slackseat</span> for $59.00</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#003087] to-[#0079C1] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-4.5 h-4.5 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M20.06 7.62a3.86 3.86 0 00-3.32-1.74h-6.8a1.32 1.32 0 00-1.31 1.15L6.16 20.3a.62.62 0 00.61.7h3.9c.35 0 .66-.25.71-.6L13 10.6a.62.62 0 01.61-.53h1.83c1.9 0 3.32-.82 3.73-3.23.18-.94.04-1.68-.34-2.22zm-7 1.81l-.38 1.62h-1.37l.38-1.62c.03-.13.14-.23.27-.23h.85c.18 0 .3.18.25.35c0-.04 0-.08 0-.12z" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'l3',
                      title: "Refunded",
                      desc: <><span className="text-emerald-600 dark:text-emerald-400 font-semibold animate-pulse">Stripe</span> reversed $123.00</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5.5 h-5.5 text-white stroke-current fill-none animate-bounce-subtle" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'l4',
                      title: "Resolved",
                      desc: <>Dispute <span className="text-[#a855f7] font-semibold">settled</span> in favor</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5.2 h-5.2 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                      )
                    }
                  ].concat([
                    {
                      id: 'l1_dup',
                      title: "Cancellation",
                      desc: <><span className="text-indigo-600 dark:text-[#818cf8] font-semibold">Facebook</span> cancellation start-up</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0 shadow-sm">
                          <span className="text-white text-[19px] font-black leading-none -mb-0.5 select-none font-sans">f</span>
                        </div>
                      )
                    },
                    {
                      id: 'l2_dup',
                      title: "Payment",
                      desc: <><span className="text-indigo-600 dark:text-[#818cf8] font-semibold">Slackseat</span> for $59.00</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#003087] to-[#0079C1] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-4.5 h-4.5 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M20.06 7.62a3.86 3.86 0 00-3.32-1.74h-6.8a1.32 1.32 0 00-1.31 1.15L6.16 20.3a.62.62 0 00.61.7h3.9c.35 0 .66-.25.71-.6L13 10.6a.62.62 0 01.61-.53h1.83c1.9 0 3.32-.82 3.73-3.23.18-.94.04-1.68-.34-2.22zm-7 1.81l-.38 1.62h-1.37l.38-1.62c.03-.13.14-.23.27-.23h.85c.18 0 .3.18.25.35c0-.04 0-.08 0-.12z" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'l3_dup',
                      title: "Refunded",
                      desc: <><span className="text-emerald-600 dark:text-emerald-400 font-semibold">Stripe</span> reversed $123.00</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5.5 h-5.5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                          </svg>
                        </div>
                      )
                    },
                    {
                      id: 'l4_dup',
                      title: "Resolved",
                      desc: <>Dispute <span className="text-[#a855f7] font-semibold">settled</span> in favor</>,
                      icon: (
                        <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-5.2 h-5.2 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                      )
                    }
                  ]).map((card, idx) => (
                    <div 
                      key={`lower-${card.id}-${idx}`}
                      className={`w-[245px] shrink-0 rounded-2xl p-2.5 flex items-center gap-3 transition-all duration-300 pointer-events-auto ${
                        isDark 
                          ? 'bg-[#18181b] border border-zinc-800/30 shadow-[0_4px_20px_rgba(0,0,0,0.12)]' 
                          : 'bg-white border border-zinc-100/40 shadow-[0_4px_16px_rgba(0,0,0,0.02)]'
                      }`}
                    >
                      {card.icon}
                      <div className="min-w-0 text-left">
                        <span className={`text-[12px] font-bold block leading-tight ${
                          isDark ? 'text-zinc-100' : 'text-zinc-900'
                        }`}>{card.title}</span>
                        <span className={`text-[9.5px] block truncate leading-tight mt-1 font-normal ${
                          isDark ? 'text-zinc-400' : 'text-zinc-500'
                        }`}>
                          {card.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>

            {/* Bottom Section: Typography precisely matching the custom fonts & margins */}
            <div className="text-left select-none mt-4 px-1">
              <h3 className={`text-[32px] sm:text-[34px] md:text-[36px] font-black tracking-tight leading-tight mb-2.5 font-sans`}>
                <motion.span
                  className="bg-clip-text text-transparent inline-block text-left"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                      : "linear-gradient(110deg, #18181b 0%, #18181b 32%, #a4df12 45%, #1d5ed5 55%, #18181b 68%, #18181b 100%)",
                    backgroundSize: "200% auto",
                  }}
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Business Command Center
                </motion.span>
              </h3>
              <p className={`text-[15px] sm:text-[16px] leading-[1.4] ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              } max-w-[340px]`}>
                See leads, conversations, tasks, opportunities, customer activity, and team performance from one place. No more scattered systems or blind spots.
              </p>
            </div>

          </div>

          {/* Card B: Redesigned exactly like the new uploaded reference image */}
          <div className={`rounded-[2.5rem] ${
            isDark 
              ? 'bg-[#121215]/85' 
              : 'bg-white shadow-[0_12px_40px_rgba(0,0,0,0.015)]'
          } p-8 lg:ml-12 lg:w-[calc(100%-3rem)] relative overflow-hidden flex flex-col justify-between min-h-[485px] group transition-all duration-300`}>
            
            {/* Soft, beautiful radial mesh background highlight */}
            <div className={`absolute top-0 inset-x-0 h-44 bg-[radial-gradient(circle_at_top,${isDark ? 'rgba(129,140,248,0.05)' : 'rgba(129,140,248,0.03)'},transparent_70%)] pointer-events-none rounded-t-[2.5rem] z-0`} />

            {/* Top Text Header */}
            <div className="relative z-10 text-center pt-3 px-2 select-none">
              <h3 className={`text-base sm:text-lg md:text-[20px] font-medium tracking-tight leading-[1.35] max-w-[325px] mx-auto`}>
                <span className={`${isDark ? 'text-indigo-400' : 'text-[#8b91db]'} font-normal`}>The Next Competitive Advantage,</span>{' '}
                <span className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>
                  We built AIDUS to help you use the power of artificial intelligence.
                </span>
              </h3>
            </div>

            {/* The Center Siri/AI-Style Glowing Orb (Very smooth and slowly pulsing) */}
            <div className="flex-1 flex items-center justify-center relative my-6">
              {/* Outer massive blurry atmospheric blue haze */}
              <div className="absolute w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.4)_0%,rgba(59,130,246,0.2)_35%,rgba(99,102,241,0.08)_65%,transparent_90%)] blur-[38px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
              
              {/* Deep vivid neon turquoise core */}
              <motion.div 
                animate={{
                  scale: [1, 1.07, 1],
                  opacity: [0.85, 0.95, 0.85]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.7)_0%,rgba(56,189,248,0.45)_45%,rgba(59,130,246,0.15)_80%,transparent_100%)] blur-[20px] pointer-events-none" 
              />
              
              {/* Bright ultra-focused sapphire core */}
              <div className="absolute w-14 h-14 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,1)_0%,rgba(37,99,235,0.7)_60%,transparent_100%)] blur-[8px] opacity-80 pointer-events-none" />
              
              {/* Micro-sparkle floating indicator representing the active logic */}
              <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(34,211,238,1)] top-12 left-18 animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
            </div>

            {/* Lower indicator / Footer */}
            <div className="relative z-10 flex items-center justify-center w-full px-2 select-none">
              <div className={`text-[12px] sm:text-xs font-normal tracking-wide ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              } text-center font-sans`}>
                Scroll down to see more
              </div>
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE STACK (66% width) ================= */}
        <div id="col-right-stack" className="w-full lg:w-[66%] flex flex-col gap-6">
          
          {/* Top Row inside Right Panel (Grid of Column 2 and Column 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* COLUMN 2 (Card C - Redesigned as an Premium File Folder) */}
            <div 
              className="flex flex-col relative font-sans lg:col-span-1 min-h-[730px] xs:min-h-[690px] sm:min-h-[680px]"
              onMouseEnter={() => setIsHoveredByRealUser(true)}
              onMouseLeave={() => setIsHoveredByRealUser(false)}
            >
              
              <div 
                className={`flex-1 rounded-[2.5rem] border ${
                  isDark 
                    ? 'bg-[#121215] border-zinc-800/80 shadow-[0_16px_45px_rgba(0,0,0,0.5)]' 
                    : 'bg-white border-zinc-200 shadow-[0_16px_45px_rgba(0,0,0,0.035)]'
                } p-4 xs:p-5 sm:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 z-10`}
                style={{ borderRadius: '42px' }}
              >
                
                {/* Visual grid blueprint background lines */}
                <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? 'rgba(255,255,255,0.012)' : 'rgba(0,0,0,0.015)'}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? 'rgba(255,255,255,0.012)' : 'rgba(0,0,0,0.015)'}_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col flex-1 justify-between">
                  {/* Title Header precisely matching typography of image */}
                  <div>
                    <h3 className={`text-xl xs:text-2xl sm:text-[27px] font-normal tracking-tight leading-[1.2] ${isDark ? 'text-zinc-100' : 'text-zinc-900'} text-left mb-3 xs:mb-4 sm:mb-6 font-sans`}>
                      <span className="font-bold text-zinc-950 dark:text-zinc-950">Never Leave A Lead Waiting</span>, Every enquiry receives an immediate, personalized response while your team focuses on higher-value work.
                    </h3>

                    {/* John's incoming email block */}
                    <div className="flex gap-3 text-left mb-3 xs:mb-4 sm:mb-5">
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80" 
                          alt="John" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs truncate">
                            <span className={`font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>John</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span className={`font-bold truncate max-w-[120px] xs:max-w-[180px] sm:max-w-none ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>
                              Budget Review - Urgent Action
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-450 shrink-0 font-mono">Now</span>
                        </div>
                        <div className={`mt-1.5 text-[11px] sm:text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed relative`}>
                          <p>Hi team,</p>
                          <p>We need to finalize the Q4 budget</p>
                          <p>by Friday. Please review the attached...</p>
                          <span className="absolute bottom-0 right-0 text-[10px] text-zinc-450 font-medium">2 more</span>
                        </div>
                      </div>
                    </div>

                    {/* Tone selector pill buttons */}
                    <div className={`grid grid-cols-4 gap-1 p-1 ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-100/30'} rounded-2xl border border-zinc-200/8 mb-3 xs:mb-4 sm:mb-5 relative z-10 select-none`}>
                      {(['reply', 'professional', 'short', 'detailed'] as const).map((tone) => (
                        <button
                           key={tone}
                           onClick={() => setDraftTone(tone)}
                           className={`py-2 text-[10.5px] font-bold rounded-xl text-center capitalize transition-all duration-200 cursor-pointer ${
                             draftTone === tone
                               ? (isDark ? 'bg-zinc-800 text-white shadow-sm' : 'bg-white text-zinc-900 shadow-sm')
                               : (isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-500 hover:text-zinc-800')
                           }`}
                        >
                          {tone}
                        </button>
                      ))}
                    </div>

                    {/* Draft Box wrapper with flowing animated gradient border */}
                    <div className="relative rounded-[2.5rem] p-[2px] bg-[linear-gradient(135deg,#10b981_0%,rgba(16,185,129,0.15)_35%,rgba(16,185,129,0.05)_50%,rgba(16,185,129,0.15)_65%,#10b981_100%)] animate-border-flow shadow-lg mb-3 xs:mb-4 sm:mb-6">
                      <div className={`rounded-[2.4rem] p-4 sm:p-5 text-left ${isDark ? 'bg-zinc-950/95 text-zinc-100' : 'bg-white text-zinc-900'} relative z-10 min-h-[110px] xs:min-h-[135px] sm:min-h-[175px] flex items-center`}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={draftTone + (isGenerating ? '-loading' : '-ready')}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.25 }}
                            className="whitespace-pre-line text-xs leading-relaxed font-normal font-sans w-full"
                          >
                            {isGenerating ? (
                              <div className="flex flex-col gap-2 py-4 items-start select-none w-full">
                                <div className="flex items-center gap-2">
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                  </span>
                                  <span className="text-[11px] text-blue-500 font-bold tracking-wider uppercase">Generating AI Draft...</span>
                                </div>
                                <div className="h-2 w-32 bg-zinc-800 rounded animate-pulse" />
                                <div className="h-2 w-48 bg-zinc-800 rounded animate-pulse" />
                              </div>
                            ) : (
                              currentDraftText
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Composer/Footer row */}
                  <div className={`rounded-full border ${isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-[#fafafa] border-zinc-200'} p-1 sm:p-1.5 flex items-center justify-between gap-1 sm:gap-2 z-20`}>
                    <div className="flex items-center gap-2 pl-2 sm:pl-3 text-zinc-450 shrink-0">
                      <Paperclip className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-[#10b981] transition" />
                      <Smile className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-[#10b981] transition" />
                    </div>
                    
                    <input 
                      type="text" 
                      value={payloadText}
                      onChange={(e) => setPayloadText(e.target.value)}
                      placeholder="Type your reply"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setIsGenerating(true);
                          setTimeout(() => {
                            setIsGenerating(false);
                            if (payloadText.trim()) {
                              setCustomReplyText(`Dear John,
                              
Thanks for the update. I have processed your instruction: "${payloadText}". I am reviewing the budget documents immediately and will ensure my reviews are finalized by Thursday afternoon.

Best regards,
Sarah`);
                              setDraftTone('reply');
                            }
                            setPayloadText('');
                          }, 1200);
                        }
                      }}
                      className={`flex-1 px-1 sm:px-2 py-1 text-[11px] sm:text-xs bg-transparent focus:outline-none focus:ring-0 border-none placeholder-zinc-400 font-medium ${isDark ? 'text-white' : 'text-zinc-850'}`}
                    />

                    <motion.button
                      onClick={() => {
                        setIsGenerating(true);
                        setTimeout(() => {
                          setIsGenerating(false);
                          if (payloadText.trim()) {
                            setCustomReplyText(`Dear John,
                            
Thanks for the update on the budget. I have taken note of the Friday deadline and am reviewing the documents right away to supply my comments by Thursday afternoon.

Best,
Sarah`);
                            setDraftTone('reply');
                          }
                          setPayloadText('');
                        }, 1200);
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="py-1.5 px-2.5 sm:py-2.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold tracking-wide flex items-center gap-1 sm:gap-1.5 bg-zinc-950 hover:bg-black text-white border border-zinc-800/10 dark:border-zinc-800/40 shadow-md shadow-zinc-950/15 cursor-pointer shrink-0"
                    >
                      <motion.span
                        className="bg-clip-text text-transparent inline-block font-bold"
                        style={{
                          backgroundImage: "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)",
                          backgroundSize: "200% auto",
                        }}
                        animate={{
                          backgroundPosition: ["0% center", "-200% center"],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        Generate
                      </motion.span>
                      <Zap className="w-3 h-3 text-white fill-current shrink-0" />
                    </motion.button>
                  </div>
                </div>

                {/* Simulated Virtual Mouse Clicking Pointer Layer */}
                <AnimatePresence>
                  {!isHoveredByRealUser && (
                    <motion.div
                      className="absolute pointer-events-none z-50 select-none"
                      style={{ originX: 0.1, originY: 0.1 }}
                      animate={{
                        left: virtualCursorPos.x,
                        top: virtualCursorPos.y,
                        scale: virtualCursorPos.clicked ? 0.85 : 1,
                      }}
                      transition={{
                        type: "spring",
                        damping: 24,
                        stiffness: 70,
                        mass: 0.9
                      }}
                    >
                      {/* Mouse arrow hand-click graphic icon */}
                      <svg className="w-6 h-6 text-zinc-950 dark:text-white filter drop-shadow-[0_2.5px_4.5px_rgba(0,0,0,0.4)]" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M4.5 3.5 V19 L9.5 14 L14.5 20.5 L17.5 18 L12.5 11.5 H19.5 L4.5 3.5 Z" 
                          fill="currentColor" 
                          stroke="#ffffff" 
                          strokeWidth="2" 
                          strokeLinejoin="bevel" 
                        />
                      </svg>
                      
                      {/* Ripple click effect system */}
                      <AnimatePresence>
                        {virtualCursorPos.clicked && (
                          <motion.span
                            initial={{ scale: 0.4, opacity: 1 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-emerald-500 -translate-x-1.5 -translate-y-1.5 pointer-events-none"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* COLUMN 3: Right Stack containing Card D1 and Card D2 */}
            <div className="flex flex-col gap-6">
              
              {/* Card D1: Custom redesigned secure knowledge base connection card precisely matching design reference */}
              <div className={`rounded-[2.5rem] border ${
                isDark 
                  ? 'bg-[#121215]/80 border-zinc-800/60' 
                  : 'bg-white border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.012)]'
              } p-8 relative overflow-hidden flex flex-col justify-between min-h-[485px] transition-all duration-300`}>
                
                {/* Connection Lines & Glowing Nodes Network Graphic */}
                <div className="w-full h-[240px] relative flex items-center justify-center select-none overflow-hidden">
                  
                  {/* Master Vector Paths Layer */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 220" fill="none">
                    {/* Left top branch */}
                    <path d="M 64,45 H 120 C 150,45 160,110 190,110" stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"} strokeWidth="1.5" />
                    {/* Left bottom branch */}
                    <path d="M 85,168 H 130 C 150,168 160,110 190,110" stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"} strokeWidth="1.5" />
                    {/* Right top branch */}
                    <path d="M 310,52 H 260 C 230,52 220,110 190,110" stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"} strokeWidth="1.5" />
                    {/* Right bottom branch */}
                    <path d="M 315,160 H 255 C 230,160 220,110 190,110" stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"} strokeWidth="1.5" />

                    {/* Dotted active feedback routes */}
                    <path d="M 64,45 H 120 C 150,45 160,110 190,110" stroke={isDark ? "rgba(16,185,129,0.18)" : "rgba(16,185,129,0.12)"} strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 310,52 H 260 C 230,52 220,110 190,110" stroke={isDark ? "rgba(59,130,246,0.18)" : "rgba(59,130,246,0.12)"} strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Left animation pulse */}
                    <motion.circle 
                      cx="64" cy="45" r="3" fill="#10b981"
                      animate={{
                        cx: [64, 120, 150, 190],
                        cy: [45, 45, 110, 110],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Right animation pulse */}
                    <motion.circle 
                      cx="310" cy="52" r="3" fill="#3b82f6"
                      animate={{
                        cx: [310, 260, 230, 190],
                        cy: [52, 52, 110, 110],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />
                  </svg>

                  {/* Absolute positioning nodes matching vector coordinates */}
                  
                  {/* Top-Left node (Document) */}
                  <div className="absolute left-[8%] top-[10%] z-20">
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                      className={`w-14 h-16 rounded-xl border ${
                        isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-150'
                      } shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex flex-col justify-between p-2.5 relative`}
                    >
                      <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 rounded-tr-xl rounded-bl-lg" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                      <div className="w-7 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-1.5" />
                      <div className="w-5 h-1 bg-zinc-200 dark:bg-zinc-850 rounded-full" />
                      <div className="w-6 h-1 bg-zinc-200 dark:bg-zinc-850 rounded-full mb-1" />
                    </motion.div>
                  </div>

                  {/* Left middle micro dot */}
                  <div className="absolute left-[34%] top-[48%] -translate-y-1/2 w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)] z-25" />

                  {/* Bottom-Left node (Database/Data Storage stack replacing Drive triangle) */}
                  <div className="absolute left-[13%] bottom-[12%] z-20">
                    <motion.div 
                      animate={{ y: [0, 2.5, 0] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                      className={`w-12 h-12 rounded-full border ${
                        isDark ? 'bg-zinc-900 border-zinc-800/80 shadow-[0_8px_22px_rgba(0,0,0,0.2)]' : 'bg-white border-zinc-150 shadow-[0_8px_22px_rgba(0,0,0,0.04)]'
                      } flex items-center justify-center`}
                    >
                      <Database className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} strokeWidth={2.2} />
                    </motion.div>
                  </div>

                  {/* Central Shield representation */}
                  <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                    {/* Glowing background aura */}
                    <div className="absolute w-36 h-36 rounded-full bg-blue-500/20 blur-xl animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />
                    
                    <svg className="w-22 h-26 drop-shadow-[0_12px_28px_rgba(37,99,235,0.35)]" viewBox="0 0 100 120" fill="none">
                      <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="50%" stopColor="#1d4ed8" />
                          <stop offset="100%" stopColor="#1e3a8a" />
                        </linearGradient>
                        <linearGradient id="shieldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M50,5 C50,5 90,9 90,10 V55 C90,82.5 73.5,103.5 50,113.5 C26.5,103.5 10,82.5 10,55 V10 C10,9 50,5 50,5 Z" 
                        fill="url(#shieldGrad)" 
                        stroke="#60a5fa" 
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M50,9 C50,9 84,12.5 84,13.5 V55 C84,78.5 70,96.5 50,105 C30,96.5 16,78.5 16,55 V13.5 C16,12.5 50,9 50,9 Z" 
                        fill="none" 
                        stroke="url(#shieldHighlight)" 
                        strokeWidth="1.5"
                      />
                      <path d="M50,7 V110" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                      
                      {/* Interlinked loop paths */}
                      <g stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" fill="none">
                        <path d="M 44,52 C 34,52 33,68 44,68 C 50,68 53,60 56,58" />
                        <path d="M 56,68 C 66,68 67,52 56,52 C 50,52 47,60 44,62" />
                        <circle cx="50" cy="60" r="1.5" fill="#ffffff" stroke="none" />
                      </g>
                    </svg>
                  </div>

                  {/* Right middle micro dot */}
                  <div className="absolute right-[33%] top-[49%] -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] z-25" />

                  {/* Top-Right node (Outlook style Grid) */}
                  <div className="absolute right-[13%] top-[13%] z-20">
                    <motion.div 
                      animate={{ y: [0, -2.5, 0] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                      className={`w-12 h-12 rounded-full border ${
                        isDark ? 'bg-zinc-900 border-zinc-800/80 shadow-[0_8px_22px_rgba(0,0,0,0.2)]' : 'bg-white border-zinc-150 shadow-[0_8px_22px_rgba(0,0,0,0.04)]'
                      } flex items-center justify-center`}
                    >
                      <div className="w-5.5 h-5.5 rounded-md bg-blue-500/10 flex items-center justify-center relative">
                        <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom-Right node (Document Word style) */}
                  <div className="absolute right-[10%] bottom-[14%] z-20">
                    <motion.div 
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                      className={`w-14 h-16 rounded-xl border ${
                        isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-150'
                      } shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex flex-col justify-between p-2.5 relative`}
                    >
                      <div className="absolute top-0 right-0 w-4 h-4 bg-amber-500 rounded-tr-xl rounded-bl-lg" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                      <div className="w-8 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-1.5" />
                      <div className="w-6 h-1 bg-zinc-200 dark:bg-zinc-850 rounded-full" />
                      <div className="w-7 h-1 bg-zinc-200 dark:bg-zinc-850 rounded-full mb-1" />
                    </motion.div>
                  </div>

                </div>

                {/* Typography info section precisely match user reference schema */}
                <div className="relative z-10 select-none text-left px-2 mt-2">
                  <h3 className={`text-xl font-bold tracking-tight mb-2.5 ${isDark ? 'text-zinc-100' : 'text-zinc-900'} leading-snug`}>
                    Securely Connected Business Intelligence
                  </h3>
                  <p className={`text-[12.5px] sm:text-[13px] ${isDark ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed font-normal`}>
                    Your systems, customer data, documents, communications, and workflows working together instead of operating in isolation.
                  </p>
                </div>

              </div>
 
              {/* Card D2: Built for speed with interactive 3D styled Lightning bolt */}
              <div className={`rounded-[2rem] border ${
                isDark 
                  ? 'bg-[#121215]/80 border-zinc-800/60' 
                  : 'bg-white border-zinc-200 shadow-[0_12px_40px_rgba(0,0,0,0.02)]'
              } p-8 relative overflow-hidden flex flex-col justify-between min-h-[260px] lg:w-[calc(100%+3rem)] lg:-mr-12 lg:z-20 group transition-all duration-300`}>
                
                <div className="select-none text-left">
                  <h3 className={`text-[20px] leading-[1.25] font-normal tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                    Built for speed so every <br />
                    interaction keeps{' '}
                    <motion.span
                      className="font-extrabold bg-clip-text text-transparent inline-block"
                      style={{
                        backgroundImage: isDark
                          ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                          : "linear-gradient(110deg, #18181b 0%, #18181b 32%, #a4df12 45%, #1d5ed5 55%, #18181b 68%, #18181b 100%)",
                        backgroundSize: "200% auto",
                      }}
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      you moving,
                    </motion.span>{' '}
                    <br />
                    <motion.span
                      className="font-extrabold bg-clip-text text-transparent inline-block"
                      style={{
                        backgroundImage: isDark
                          ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                          : "linear-gradient(110deg, #18181b 0%, #18181b 32%, #a4df12 45%, #1d5ed5 55%, #18181b 68%, #18181b 100%)",
                        backgroundSize: "200% auto",
                      }}
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      not managing.
                    </motion.span>
                  </h3>
                </div>
 
                {/* Very big 3D-styled blue lightning bolt with a thick white outline edge, with the bottom part cut off perfectly */}
                <div className="absolute -bottom-14 -right-8 select-none pointer-events-none w-44 h-44 overflow-hidden">
                  <motion.div 
                    className="relative w-full h-full"
                    animate={{
                      y: [-2, 2, -2],
                      rotate: [-0.5, 1, -0.5]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.8,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="absolute inset-0 w-full h-full filter drop-shadow-[0_8px_24px_rgba(37,99,235,0.4)]" viewBox="0 0 24 24">
                      {/* Thicker Outer White/Light Path to serve as the perfect outline line */}
                      <path 
                        d="M12.5 1.5 L3.5 12.5 H10.5 L8.5 22.5 L19.5 10.5 H12.5 Z" 
                        fill={isDark ? '#121215' : '#ffffff'}
                        stroke={isDark ? '#121215' : '#ffffff'} 
                        strokeWidth="2.2" 
                        strokeLinejoin="round"
                      />
                      {/* Primary Blue Fill Path */}
                      <path 
                        d="M12.5 1.5 L3.5 12.5 H10.5 L8.5 22.5 L19.5 10.5 H12.5 Z" 
                        fill="url(#lightningGrad)" 
                      />
                      
                      <defs>
                        <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#1d4ed8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
 
              </div>
 
            </div>

          </div>

          {/* CARD E (Beautifully redesigned interactive premium Expense Tracker layout matching design reference) */}
          <div className={`rounded-[2.5rem] border ${
            isDark 
              ? 'bg-[#121215]/80 border-zinc-800/60' 
              : 'bg-white border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.012)]'
          } p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[380px] z-10 transition-all duration-300`}>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
              
              {/* Left Column: Copywriting and CTA with premium formatting */}
              <div className="lg:col-span-5 flex flex-col items-start text-left select-none relative z-10">
                <h3 className={`text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.12] mb-4 font-sans`}>
                  <span className={`${isDark ? 'text-zinc-300' : 'text-zinc-500'} font-extrabold`}>
                    Track
                  </span>{' '}
                  <motion.span
                    className="font-sans bg-clip-text text-transparent inline-block"
                    style={{
                      backgroundImage: isDark
                        ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                        : "linear-gradient(110deg, #18181b 0%, #18181b 32%, #a4df12 45%, #1d5ed5 55%, #18181b 68%, #18181b 100%)",
                      backgroundSize: "200% auto",
                    }}
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0
                    }}
                  >
                    Every Process
                  </motion.span>{' '}
                  <br />
                  <motion.span
                    className="font-sans bg-clip-text text-transparent inline-block"
                    style={{
                      backgroundImage: isDark
                        ? "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)"
                        : "linear-gradient(110deg, #18181b 0%, #18181b 32%, #a4df12 45%, #1d5ed5 55%, #18181b 68%, #18181b 100%)",
                      backgroundSize: "200% auto",
                    }}
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Every Stage <br /> Full Visibility.
                  </motion.span>
                </h3>
                
                <p className={`text-[13.5px] sm:text-[14px] ${isDark ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed mb-8 max-w-[420px]`}>
                  Monitor lead journeys, customer requests, internal workflows, sales pipelines, and operational performance from a single view. Know exactly what is happening across your business without chasing updates.
                </p>
                
                <div>
                  <button className={`px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md ${
                    isDark 
                      ? 'bg-white hover:bg-zinc-100 shadow-white/5' 
                      : 'bg-[#0f0f12] hover:bg-zinc-850 shadow-zinc-950/20'
                  }`}>
                    <motion.span
                      className="bg-clip-text text-transparent inline-block font-bold"
                      style={{
                        backgroundImage: isDark
                          ? "linear-gradient(110deg, #09090b 0%, #09090b 32%, #1b5bdc 45%, #105eff 55%, #09090b 68%, #09090b 100%)"
                          : "linear-gradient(110deg, #ffffff 0%, #ffffff 32%, #cbf33b 45%, #28a7e0 55%, #ffffff 68%, #ffffff 100%)",
                        backgroundSize: "200% auto",
                      }}
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Get Started
                    </motion.span>
                  </button>
                </div>
              </div>

              {/* Right Column: Stunning layered Interactive Dashboard Visual representation */}
              <div className="lg:col-span-7 w-full relative flex items-center justify-center min-h-[330px] select-none py-6 px-1 lg:pl-10">
                
                {/* 1. Underlying Base "Distribution" card */}
                <div className={`rounded-3xl p-6 sm:p-7 w-full max-w-[420px] flex flex-row items-center justify-between gap-6 relative overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#18181c]/90 border border-zinc-800 shadow-[0_12px_45px_rgba(0,0,0,0.4)]' 
                    : 'bg-white border border-zinc-150 shadow-[0_15px_42px_rgba(0,0,0,0.035)]'
                }`}>
                  
                  {/* Left Side: Category indicators list */}
                  <div className="flex flex-col gap-3.5 text-left w-[55%]">
                    <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-1`}>
                      Cluster Load
                    </span>
                    
                    {/* Category: Rent & Living -> API Pipelines */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6] shrink-0" />
                      <div className="min-w-0">
                        <span className={`text-[11.5px] sm:text-xs font-semibold block leading-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                          API Pipelines
                        </span>
                        <span className="text-[10px] text-zinc-450 font-mono block mt-0.5">
                          3,838,250 runs (55%)
                        </span>
                      </div>
                    </div>

                    {/* Category: Transportation -> Endpoint Triggers */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shrink-0" />
                      <div className="min-w-0">
                        <span className={`text-[11.5px] sm:text-xs font-semibold block leading-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                          Endpoint Triggers
                        </span>
                        <span className="text-[10px] text-zinc-450 font-mono block mt-0.5">
                          1,220,450 runs (20%)
                        </span>
                      </div>
                    </div>

                    {/* Category: Saving -> Database Sync */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] shrink-0" />
                      <div className="min-w-0">
                        <span className={`text-[11.5px] sm:text-xs font-semibold block leading-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                          Database Sync
                        </span>
                        <span className="text-[10px] text-zinc-450 font-mono block mt-0.5">
                          914,930 runs (15%)
                        </span>
                      </div>
                    </div>

                    {/* Category: Entertainment -> DevOps Tasks */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#d946ef] shrink-0" />
                      <div className="min-w-0">
                        <span className={`text-[11.5px] sm:text-xs font-semibold block leading-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                          DevOps Tasks
                        </span>
                        <span className="text-[10px] text-zinc-450 font-mono block mt-0.5">
                          735,120 runs (10%)
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Right Side: Round Donut Chart with Center value */}
                  <div className="relative flex items-center justify-center shrink-0 w-[45%]">
                    
                    {/* SVG ring elements */}
                    <svg className="w-[124px] h-[124px] rotate-[105deg] drop-shadow-sm pointer-events-none" viewBox="0 0 120 120">
                      {/* Sub-mesh base circle with diagonal stripe dash pattern */}
                      <circle
                        cx="60"
                        cy="60"
                        r="46"
                        className={isDark ? "stroke-zinc-800/80" : "stroke-zinc-200/90"}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="4 3.2"
                      />
                      
                      {/* Sky Segment: Saving (15%) */}
                      <circle
                        cx="60"
                        cy="60"
                        r="46"
                        stroke="#3b82f6"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${314 * 0.15} 314`}
                        strokeDashoffset={-314 * 0.10}
                        strokeLinecap="round"
                        style={{ transformOrigin: 'center' }}
                      />

                      {/* Lime Segment: Transportation (20%) */}
                      <circle
                        cx="60"
                        cy="60"
                        r="46"
                        stroke="#a3e635"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${314 * 0.20} 314`}
                        strokeDashoffset={-314 * 0.25}
                        strokeLinecap="round"
                        style={{ transformOrigin: 'center' }}
                      />

                      {/* Violet Segment: Rent and Living (55%) */}
                      <circle
                        cx="60"
                        cy="60"
                        r="46"
                        stroke="#8b5cf6"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${314 * 0.55} 314`}
                        strokeDashoffset={-314 * 0.45}
                        strokeLinecap="round"
                        style={{ transformOrigin: 'center' }}
                      />
                    </svg>

                    {/* Total central display text, dynamically synced with toggling iCloud states */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none select-none">
                      <motion.span 
                        key={isIcloudActive ? 'active' : 'inactive'}
                        initial={{ scale: 0.94, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className={`text-[14px] sm:text-[15px] font-black tracking-tighter ${isDark ? 'text-zinc-100' : 'text-zinc-900'} leading-none`}
                      >
                        {isIcloudActive ? "1,928/s" : "1,878/s"}
                      </motion.span>
                      <span className={`text-[8px] tracking-widest uppercase font-bold ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mt-1`}>
                        RUN RATE
                      </span>
                    </div>

                  </div>

                </div>

                {/* 2. Overlapping Floating Badge: Purple "Icloud" card -> Cloud Node */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-10 left-[0px] sm:left-[20px] md:left-[45px] lg:-left-2 z-20 w-[215px] sm:w-[225px] rounded-[1.65rem] bg-gradient-to-tr from-[#9c3ffb] via-[#8534fa] to-[#7128f7] p-5 text-white flex items-center justify-between shadow-[0_15px_42px_rgba(139,92,246,0.38)] cursor-default select-none group"
                >
                  <div className="flex flex-col items-start justify-between h-full">
                    {/* Circle icon container containing Cloud icon instead of Apple Logo */}
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center mb-4 shadow-inner relative overflow-hidden">
                      <Cloud className="w-4.5 h-4.5 text-white fill-current shrink-0" />
                    </div>

                    <div className="text-left">
                      <span className="text-[12.5px] font-medium text-purple-100/90 tracking-wide block">Cloud Node</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black tracking-tight leading-none text-white">99%</span>
                        <span className="text-[11px] text-purple-200/80 font-medium">/ uptime</span>
                      </div>
                    </div>
                  </div>

                  {/* Vertically Sliding Toggle Pill Switch */}
                  <div 
                    onClick={() => setIsIcloudActive(!isIcloudActive)} 
                    className="w-8 h-15 bg-white rounded-full p-1 flex flex-col justify-between items-center relative shadow-sm cursor-pointer shrink-0 transition-transform active:scale-95 duration-200 select-none"
                  >
                    {/* Top element: 'X' check representation */}
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors ${
                      !isIcloudActive ? 'text-purple-600 font-bold' : 'text-zinc-300'
                    }`}>
                      <X className="w-3.2 h-3.2" strokeWidth={3} />
                    </div>

                    {/* Centered guide channel */}
                    <div className="absolute top-6 bottom-6 w-1 bg-zinc-100 rounded-full pointer-events-none" />

                    {/* Interactive Sliding Knob containing Checkmark */}
                    <motion.div 
                      layout
                      animate={{
                        y: isIcloudActive ? 0 : -28
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 24
                      }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#9c3ffb] to-[#7128f7] flex items-center justify-center shadow-sm relative z-10"
                    >
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </motion.div>
                  </div>

                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Decorative vertical blueprint coordinate dot */}
      <div className={`absolute top-1/2 right-12 w-3 h-3 rounded-full border transform -translate-y-1/2 pointer-events-none hidden xl:flex items-center justify-center ${
        isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-250'
      }`}>
        <div className="w-1 h-1 rounded-full bg-[#8da315]/50" />
      </div>

    </section>
  );
}
