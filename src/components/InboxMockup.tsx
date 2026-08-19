import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Inbox,
  Star,
  Send,
  File,
  Archive as ArchiveIcon,
  Trash2,
  Search,
  CornerUpLeft,
  Forward,
  MoreHorizontal,
  Paperclip,
  CheckCircle,
  X,
  Mail,
  Filter
} from 'lucide-react';
import { Message } from '../types.ts';
import MacOSMenuBar from './macOSMenuBar.tsx';

export default function InboxMockup() {
  // Inbox data based on exact specs
  const initialMessages: Message[] = [
    {
      id: 'msg-1',
      sender: 'HVAC Text-Back Bot',
      subject: 'Missed Call Recovered: Apex Plumbing Co.',
      preview: 'Secured hot lead for water heater replacement. Auto-reply fired in 3s...',
      time: '9:41 AM',
      unread: true,
      avatarColor: 'from-[#00d2ff] to-[#0B2551]',
      avatarLetter: 'H',
      category: 'HVAC',
      body: [
        'Hi Balaji,',
        'Our GoHighLevel Missed Call Text-Back automation successfully captured a high-value emergency lead for Apex Plumbing & HVAC.',
        'Sequence of Events:',
        '1. Inbound call was missed by owner-operator during an active onsite installation.',
        '2. Standalone text-back triggered in 3.1 seconds: "Hi! This is Apex Plumbing. We missed your call as we\'re assisting another customer. How can we help you solve your problem today?"',
        '3. Prospect replied in 42 seconds: "Hey, need urgent water heater replacement quote. Water is leaking everywhere."',
        '4. Interactive Synthflow Booker offered a calendar slot. Booking confirmed for 11:30 AM today.',
        'Outcome: Missed lead instantly captured. Zero employee admin time spent. Approximate saved revenue: $1,250.'
      ],
      attachment: 'lead-audit-apex.pdf'
    },
    {
      id: 'msg-2',
      sender: 'MedSpa AI Concierge',
      subject: 'New Botox Booking: Williams Dental & Spa',
      preview: 'Website chatbot engaged visitor. Consultation booked & GHL synced...',
      time: '8:12 AM',
      unread: true,
      avatarColor: 'from-amber-400 to-amber-700',
      avatarLetter: 'M',
      category: 'MedSpa',
      body: [
        'System Log — AIDUS Live Website Chatbot:',
        'Visitor landing page engagement detected on Williams Dental & Spa website (No chatbot was active prior to AIDUS boarding).',
        'Chatbot (trained voice-matching LLM) answered pre-qualification questions about standard Botox packages and dentist reviews.',
        'The bot confirmed prospect has no contraindications and served booking links directly within the chat window.',
        'Lead Clara Williams booked a "Botox Express Consultation" for Thursday at 2:00 PM.',
        'Contact info consolidated, synced to GoHighLevel CRM sub-account, and calendar confirmation dispatched.'
      ],
      attachment: 'chat-transcript-clara.json'
    },
    {
      id: 'msg-3',
      sender: 'RealEstate Sequencer',
      subject: '3-Step Follow-up Initiated: 14a Oak St.',
      preview: 'Make.com matching + GHL automated pipeline active for Oakland Homes...',
      time: 'Yesterday',
      unread: false,
      avatarColor: 'from-[#A4F4FD] to-[#0B2551]',
      avatarLetter: 'R',
      category: 'RealEstate',
      body: [
        'Automation Report — Oakland Real Estate Group:',
        'A fresh inbound inquiry was registered from the property portals for 1428 Oak Street.',
        'To bypass the critical 15-minute lead decay window, the AIDUS customized Make.com workflow matched the contact and pushed it to GHL.',
        'Stage 1 follow-up text dispatched instantly. Stage 2 email scheduled in 4 hours.',
        'Engagement logged: Lead clicked the SMS link to view similar listings and view the automated booking calendar.'
      ]
    },
    {
      id: 'msg-4',
      sender: 'Review Solicitor',
      subject: 'Review request campaign: A-1 Garage Repair',
      preview: 'Dispatched custom review flow to 14 completed tickets. 3 new 5-stars...',
      time: 'Yesterday',
      unread: false,
      avatarColor: 'from-emerald-400 to-emerald-800',
      avatarLetter: 'G',
      category: 'HVAC',
      body: [
        'Review Engine Active — A-1 Emergency Garage Doors:',
        'After job completion trigger in GHL, review solicitors dispatched personalized sms links to 14 residential accounts.',
        'Message: "Hi, thanks for choosing A-1 Garage Service today! Balaji hopes we did a great job. Would you support our local crew by leaving a quick 5-star review?"',
        'Outcome: 3 new verified five-star Google reviews posted in under 4 hours, elevating the local Google Maps SEO ranking.'
      ]
    },
    {
      id: 'msg-5',
      sender: 'Synthflow Voice Rep',
      subject: 'AI Voice Call Complete: Screening Passed',
      preview: 'Synthflow virtual agent qualified candidate automatically in 55 seconds...',
      time: 'Mon',
      unread: false,
      avatarColor: 'from-slate-800 to-black',
      avatarLetter: 'S',
      category: 'Staffing',
      body: [
        'Inbound call handled by Synthflow AI voice receptionist for Rapid Staffing Inc.',
        'Virtual agent greeted caller, performed the pre-requisite license check, and booked a zoom screening slot with the hiring manager.',
        'Candidate confirmed they hold an active license and are ready to start next week.',
        'Automated call transcript uploaded to recruiter folder in GHL. High-quality alert flagged.'
      ]
    },
    {
      id: 'msg-6',
      sender: 'AIDUS Audit Engine',
      subject: 'Personalized PDF Audit Draft: L.A. HVAC',
      preview: '1-page revenue recovery report generated. 24h timeline met...',
      time: 'Mon',
      unread: false,
      avatarColor: 'from-purple-500 to-purple-900',
      avatarLetter: 'A',
      category: 'HVAC',
      body: [
        'Audit Engine Ready — Target: California AC & Plumbing Systems.',
        'Key Gaps Discovered:',
        '- Out of hours enquiry response latency exceeds 4.5 hours (Estimated 35% leak rate).',
        '- No local chatbot to handle pricing FAQs in real-time.',
        '- No automated callback mechanism for missed office calls.',
        'Estimated monthly leaked revenue: $4,800.',
        'Report prepared for delivery under Balaji Pasupathy brand.'
      ]
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedId, setSelectedId] = useState<string>('msg-1');
  const [activeFolder, setActiveFolder] = useState<string>('Active Workflows');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // States for interactive compose compose modal
  const [isComposing, setIsComposing] = useState(false);
  const [newRecipient, setNewRecipient] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [newBody, setNewBody] = useState('');
  const [customInboxCount, setCustomInboxCount] = useState(12);

  // Active message details lookup
  const activeMessage = useMemo(() => {
    return messages.find((m) => m.id === selectedId) || messages[0];
  }, [messages, selectedId]);

  // AI Summary generator helper
  const getAISummary = (msg: Message) => {
    if (msg.id === 'msg-1') {
      return 'AIDUS Missed Call Text-Back automation instantly recaptured a leaking hot-water heater service lead, booking a slot without owner intervention. Saved $1,250 in missed revenue.';
    }
    if (msg.id === 'msg-2') {
      return 'The custom, voice-matching AI Chatbot engaged a web visitor, handled pre-qualification, and scheduled a spa consultation with GHL CRM synchronization.';
    }
    if (msg.id === 'msg-3') {
      return 'Make.com and GoHighLevel automated sequence executed under 15 seconds to engage a fresh real estate prospect, fully bypassing lead decay factors.';
    }
    if (msg.id === 'msg-4') {
      return 'Automated review requests sent following GHL ticket closure resulted in 3 five-star Google reviews in 4 hours, boosting regional search standing.';
    }
    if (msg.id === 'msg-5') {
      return 'Synthflow digital receptionist answered an inbound call, qualified the candidate licensing status, and automated the face-to-face zoom scheduler.';
    }
    if (msg.id === 'msg-6') {
      return 'Personalized leak-prevention audit completed for California AC Group. Highlights 3 structural gaps causing an estimated $4,800/mo in lost business.';
    }
    return 'AIDUS Event Summary: Bespoke automation workflow successfully executed, saving manual labor hours and improving lead response speed.';
  };

  // Filter messages based on search query or category filter
  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      const matchSearch =
        m.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.preview.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = categoryFilter ? m.category === categoryFilter : true;
      return matchSearch && matchCategory;
    });
  }, [messages, searchQuery, categoryFilter]);

  // Compose clean submission
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRecipient || !newSubject) return;

    const newMessage: Message = {
      id: `custom-${Date.now()}`,
      sender: newRecipient.split('@')[0] || newRecipient,
      subject: newSubject,
      preview: newBody.slice(0, 35) + '...',
      time: 'Just now',
      unread: false,
      avatarColor: 'from-[#00d2ff] to-[#A4F4FD]',
      avatarLetter: (newRecipient[0] || 'A').toUpperCase(),
      category: 'HVAC',
      body: [newBody || 'Empty email body']
    };

    setMessages([newMessage, ...messages]);
    setSelectedId(newMessage.id);
    setIsComposing(false);
    setNewRecipient('');
    setNewSubject('');
    setNewBody('');
    setCustomInboxCount((prev) => prev + 1);
  };

  const markAsRead = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m))
    );
  };

  const handleDeleteMessage = (id: string) => {
    const remaining = messages.filter((m) => m.id !== id);
    setMessages(remaining);
    if (selectedId === id && remaining.length > 0) {
      setSelectedId(remaining[0].id);
    }
  };

  return (
    <section
      id="inbox-section"
      className="w-full max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16"
    >
      {/* macOS Menu Bar strip right above the mockup window */}
      <div className="mb-3">
        <MacOSMenuBar />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col"
        id="inbox-mockup-container"
      >
        {/* Title bar / macOS Header */}
        <div className="h-12 bg-zinc-50 border-b border-zinc-200/80 flex items-center justify-between px-5 select-none shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-red-600/30 cursor-pointer block" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-amber-600/30 cursor-pointer block" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-emerald-600/30 cursor-pointer block" />
          </div>
          <span className="text-xs text-zinc-500 font-medium">AIDUS — Automated Command Center</span>
          <div className="w-14" /> {/* Spacer */}
        </div>

        {/* Layout Body Grid */}
        <div className="grid grid-cols-12 h-[550px] overflow-hidden">
          {/* 1. Sidebar (col-span-3) */}
          <div className="col-span-12 md:col-span-3 border-r border-zinc-200 bg-zinc-50/50 p-4 flex flex-col justify-between overflow-y-auto hidden md:flex h-full">
            <div>
              {/* Compose button */}
              <button
                id="compose-button"
                onClick={() => setIsComposing(true)}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-950 text-white text-xs font-semibold px-3 py-2.5 hover:bg-zinc-850 transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Simulate Automated Flow</span>
              </button>

              {/* Navigation Items */}
              <nav className="mt-6 space-y-1" id="sidebar-folders">
                {[
                  { name: 'Active Workflows', icon: Inbox, count: customInboxCount },
                  { name: 'Critical Alerts', icon: Star, count: 3 },
                  { name: 'Triggers Complete', icon: Send },
                  { name: 'GHL Sandbox', icon: File, count: 2 },
                  { name: 'Archived Reports', icon: ArchiveIcon },
                  { name: 'Soft Bounces', icon: Trash2 },
                ].map((folder) => {
                  const IconComp = folder.icon;
                  const isActive = activeFolder === folder.name;
                  return (
                    <button
                      key={folder.name}
                      id={`folder-${folder.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => {
                        setActiveFolder(folder.name);
                        setCategoryFilter(null); // Clear labels on folder switch
                      }}
                      className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-md font-medium text-xs transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-zinc-200/50 text-zinc-950 font-semibold backdrop-blur-sm'
                          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <IconComp className={`w-4 h-4 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`} />
                        <span>{folder.name}</span>
                      </div>
                      {folder.count && (
                        <span className="bg-zinc-200 text-zinc-700 py-0.5 px-1.5 rounded-full text-[10px] font-bold">
                          {folder.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Labels list */}
              <div className="mt-8">
                <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase pl-3">
                  Niche Filters
                </span>
                <div className="mt-2 space-y-1">
                  {[
                    { name: 'HVAC', color: 'bg-[#00d2ff]' },
                    { name: 'MedSpa', color: 'bg-[#A4F4FD]' },
                    { name: 'RealEstate', color: 'bg-[#f59e0b]' },
                    { name: 'Staffing', color: 'bg-[#10b981]' },
                  ].map((label) => (
                    <button
                      key={label.name}
                      id={`label-filter-${label.name.toLowerCase()}`}
                      onClick={() => setCategoryFilter(categoryFilter === label.name ? null : label.name)}
                      className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                        categoryFilter === label.name ? 'bg-zinc-200/50 text-zinc-950 font-bold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/70'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${label.color}`} />
                      <span>{label.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* User status info */}
            <div className="pt-4 border-t border-zinc-200/50 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-[#4f46e5]">
                BP
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-800">Balaji Pasupathy</span>
                <span className="text-[9px] text-zinc-400">Founder, AIDUS</span>
              </div>
            </div>
          </div>

          {/* 2. Message List (col-span-4) */}
          <div className="col-span-12 sm:col-span-5 md:col-span-4 border-r border-zinc-200 bg-zinc-50/20 flex flex-col h-full overflow-hidden">
            {/* Search header inside lists */}
            <div className="p-3 border-b border-zinc-200 flex items-center gap-2 shrink-0 bg-zinc-50/50">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search live streams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* List trigger */}
            <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 custom-scrollbar bg-white" id="messages-list">
              {filteredMessages.length === 0 ? (
                <div className="p-8 text-center text-xs text-zinc-400 flex flex-col items-center gap-2">
                  <Mail className="w-6 h-6 text-zinc-200" />
                  <span>No matching events</span>
                </div>
              ) : (
                filteredMessages.map((msg) => {
                  const isSelected = selectedId === msg.id;
                  return (
                    <div
                      key={msg.id}
                      id={`message-item-${msg.id}`}
                      onClick={() => {
                        setSelectedId(msg.id);
                        markAsRead(msg.id);
                      }}
                      className={`p-3.5 transition-all duration-200 cursor-pointer text-left relative flex flex-col gap-1 ${
                        isSelected
                          ? 'bg-zinc-100 border-l-2 border-brand text-zinc-950 font-medium'
                          : 'hover:bg-zinc-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-zinc-800 leading-none">
                            {msg.sender}
                          </span>
                          {msg.unread && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                          )}
                        </div>
                        <span className="text-[10px] text-zinc-400 font-mono tracking-tight shrink-0">
                          {msg.time}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-900 font-medium truncate">
                        {msg.subject}
                      </div>
                      <div className="text-[11px] text-zinc-500 line-clamp-1">
                        {msg.preview}
                      </div>

                      {/* Display small category pill */}
                      <div className="flex items-center gap-2 mt-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            msg.category === 'HVAC'
                              ? 'bg-[#00d2ff]'
                              : msg.category === 'MedSpa'
                              ? 'bg-[#A4F4FD]'
                              : msg.category === 'RealEstate'
                              ? 'bg-[#f59e0b]'
                              : 'bg-[#10b981]'
                          }`}
                        />
                        <span className="text-[9px] text-zinc-400 uppercase tracking-wide font-mono">
                          {msg.category}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* 3. Reader (col-span-5) */}
          <div className="col-span-12 sm:col-span-7 md:col-span-5 flex flex-col h-full overflow-hidden bg-zinc-50/40">
            {activeMessage ? (
              <div className="flex flex-col h-full overflow-hidden" id="email-reader-pane">
                {/* Reader actions header */}
                <div className="h-12 border-b border-zinc-200 px-4 flex items-center justify-between shrink-0 bg-zinc-50/50">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Reply"
                      onClick={() => {
                        setIsComposing(true);
                        setNewRecipient(activeMessage.sender.toLowerCase().replace(' ', '') + '@aidusofficial.com');
                        setNewSubject(`Re: ${activeMessage.subject}`);
                      }}
                      className="w-7 h-7 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-950 transition-all cursor-pointer"
                    >
                      <CornerUpLeft className="w-4 h-4" />
                    </button>
                    <button
                      aria-label="Forward"
                      className="w-7 h-7 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-950 transition-all cursor-pointer"
                    >
                      <Forward className="w-4 h-4" />
                    </button>
                    <button
                      aria-label="Archive"
                      onClick={() => {
                        // Demo notification / removal
                        handleDeleteMessage(activeMessage.id);
                      }}
                      className="w-7 h-7 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-950 transition-all cursor-pointer"
                    >
                      <ArchiveIcon className="w-4 h-4" />
                    </button>
                    <button
                      aria-label="Trash"
                      onClick={() => handleDeleteMessage(activeMessage.id)}
                      className="w-7 h-7 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-red-500 transition-all cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <button className="w-7 h-7 rounded-md hover:bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-950 transition-all cursor-pointer">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Reader core text content block */}
                <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar bg-white">
                  {/* Email core metrics */}
                  <div className="border-b border-zinc-200/80 pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm md:text-base font-semibold text-zinc-950 tracking-tight leading-tight">
                        {activeMessage.subject}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full border border-zinc-200 text-[10px] text-zinc-500 font-mono tracking-wider uppercase shrink-0 bg-zinc-50">
                        {activeMessage.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${activeMessage.avatarColor} flex items-center justify-center text-xs font-bold text-white uppercase shadow-inner`}
                      >
                        {activeMessage.avatarLetter}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-medium text-zinc-900 truncate">
                          {activeMessage.sender}
                        </span>
                        <span className="text-[10px] text-zinc-500 truncate">
                          to me · {activeMessage.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Aura summaries AI container - liquid-glass component */}
                  <div className="bg-gradient-to-br from-indigo-50/50 to-blue-50/40 rounded-xl p-4 border border-indigo-100/50 select-none hover:border-brand/40 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                       <Sparkles className="w-4 h-4 text-indigo-650 animate-pulse text-indigo-600" />
                       <span className="text-xs font-semibold text-indigo-750 uppercase tracking-wide text-indigo-700">
                        Summary by AIDUS AI
                       </span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-750 leading-relaxed font-sans">
                      {getAISummary(activeMessage)}
                    </p>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-xs font-sans leading-relaxed text-zinc-650">
                    {activeMessage.body.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  {/* Attachment item */}
                  {activeMessage.attachment && (
                    <div className="pt-4 border-t border-zinc-200/80">
                      <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase">
                        Attachments (1)
                      </span>
                      <div className="mt-2 inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 px-3 py-2 rounded-lg text-xs font-medium text-zinc-800 cursor-pointer transition-colors max-w-full">
                        <Paperclip className="w-3.5 h-3.5 text-zinc-450 text-zinc-400" />
                        <span className="truncate">{activeMessage.attachment}</span>
                        <span className="text-[9px] text-zinc-400 font-mono ml-4 font-normal">
                          4.2 MB
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-zinc-400 bg-white gap-3">
                <CheckCircle className="w-8 h-8 text-zinc-300" />
                <span>Select an active trigger to inspect logs</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Dynamic interactive compose dialog portal mockup */}
      <AnimatePresence>
        {isComposing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[150] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-zinc-200 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-zinc-900">Draft GHL Automation Rule</span>
                </div>
                <button
                  onClick={() => setIsComposing(false)}
                  className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="p-5 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-500 mb-1.5">
                    Contact Trigger (E-Mail/Phone):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., lead_handler@aidusofficial.com..."
                    value={newRecipient}
                    onChange={(e) => setNewRecipient(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#4f46e5]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-500 mb-1.5">
                    Automation Title:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Emergency call instant text-back sequence..."
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#4f46e5]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-500 mb-1.5">
                    Automation Event Instructions:
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Describe the automation logic (e.g., 'If missed call from HVAC prospect, wait 5 seconds, send text-back SMS, if replied, push lead to booking pipeline')..."
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#4f46e5]/50 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] text-indigo-600 flex items-center gap-1 font-medium">
                    <Sparkles className="w-3 h-3 text-indigo-600" /> Auto-configures GHL & Make
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsComposing(false)}
                      className="px-4 py-2 rounded-lg bg-transparent hover:bg-zinc-100 text-xs font-semibold text-zinc-600 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-brand hover:bg-brand/90 text-xs font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      Deploy Flow
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
