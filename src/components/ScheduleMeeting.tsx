import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  Video, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  User, 
  Mail, 
  Smartphone, 
  FileText, 
  Calendar as CalendarIcon, 
  Check, 
  ShieldCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface ScheduleMeetingProps {
  isDark: boolean;
  onBack: () => void;
  onBookSuccess: () => void;
}

export default function ScheduleMeeting({ isDark, onBack, onBookSuccess }: ScheduleMeetingProps) {
  // Calendar interactive states
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(() => {
    // Current live date is June 2026 based on the local time metadata (2026-06-11)
    return new Date(2026, 5, 1);
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    return new Date(2026, 5, 24); // Default to June 24th, 2026
  });
  
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM"); // Default to 11:00 AM
  
  // Form input states
  const [name, setName] = useState('Balaji Pasupathy');
  const [email, setEmail] = useState('balaji@agency.com');
  const [phone, setPhone] = useState('+61 400 000 000');
  const [description, setDescription] = useState('');
  
  // Simulation states
  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Helper arrays for months
  const HOST_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const HOST_MONTHS_FULL = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Dynamic calendar weeks generator
  const getCalendarDays = (viewDate: Date) => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    
    // Index of the first day of the week (0-Sunday, 6-Saturday)
    const firstDayIndex = new Date(year, month, 1).getDay();
    
    // Days in target month
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[] = [];
    // Pad empty preceding cells
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    // Fill in days of the month
    for (let d = 1; d <= totalDaysInMonth; d++) {
      days.push(d);
    }
    return days;
  };

  const calendarDays = getCalendarDays(currentMonthDate);

  const handlePrevMonth = () => {
    setCurrentMonthDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const firstColPills = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"];
  const secondColPills = ["02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsSuccess(true);
      onBookSuccess();
    }, 1200);
  };

  return (
    <div className={`min-h-screen pt-24 sm:pt-28 pb-16 transition-colors duration-500 font-sans select-none ${
      isDark ? 'bg-[#09090b] text-[#fafafa]' : 'bg-[#fafbfa] text-zinc-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top block action bar */}
        <div className="flex justify-between items-center mb-10">
          <button 
            type="button"
            onClick={onBack}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-95 cursor-pointer ${
              isDark 
                ? 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700' 
                : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-350 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
            }`}
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400" />
            <span>Back to overview</span>
          </button>
        </div>

        {/* Dynamic Transition Canvas */}
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="main-schedule-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header Title Section - Exactly styled like the picture */}
              <div className="text-center mb-16 px-4">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-[1.1] max-w-4xl mx-auto ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}>
                  The better way to <br className="hidden sm:inline" /> schedule your meetings
                </h1>
                <p className={`text-sm sm:text-base max-w-2xl mx-auto mt-5 leading-relaxed font-normal ${
                  isDark ? 'text-zinc-400' : 'text-zinc-500 font-medium'
                }`}>
                  A fully customizable scheduling experience for individuals, businesses taking calls and developers building scheduling platforms where users meet users.
                </p>
              </div>

              {/* Two Column Grid layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
                
                {/* LEFT CARD: Calendar Picker and Meeting Info */}
                <div className={`rounded-[28px] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#121215] border-zinc-800/80 shadow-[0_30px_60px_rgba(0,0,0,0.4)]' 
                    : 'bg-white border-zinc-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)]'
                }`}>
                  <div>
                    {/* Host Profile info */}
                    <div className="flex items-center gap-3.5 pb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
                        alt="Alex Fisher" 
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-zinc-100 dark:ring-zinc-800"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className={`text-sm font-extrabold tracking-tight ${
                          isDark ? 'text-white' : 'text-zinc-900'
                        }`}>Alex Fisher</h4>
                        <p className={`text-xs font-semibold ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>Design Workshop</p>
                      </div>
                    </div>

                    {/* Intro subtitle */}
                    <p className={`text-xs sm:text-sm font-medium mt-5 leading-relaxed ${
                      isDark ? 'text-zinc-300' : 'text-zinc-600'
                    }`}>
                      A longer chat to run through design.
                    </p>

                    {/* Icon details metadata with genuine layout and spacing */}
                    <div className="space-y-3.5 mt-5">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span className={`text-xs sm:text-[13px] font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>30 mins</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Video className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span className={`text-xs sm:text-[13px] font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Cal video</span>
                      </div>
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span className={`text-xs sm:text-[13px] font-bold flex items-center gap-1 ${isDark ? 'text-zinc-300 group-hover:text-white' : 'text-zinc-700 group-hover:text-zinc-950'}`}>
                          America/New York
                          <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                        </span>
                      </div>
                    </div>

                    {/* Horizontal Divider Line */}
                    <div className="my-6 border-t border-zinc-100 dark:border-zinc-800/80" />

                    {/* Calendar block: Dynamic Live Month Selector */}
                    <div className="flex justify-between items-center mb-5">
                      <span className={`font-black text-sm sm:text-base tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        {HOST_MONTHS[currentMonthDate.getMonth()]} <span className="font-normal text-zinc-400 dark:text-zinc-500">{currentMonthDate.getFullYear()}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        <button 
                          type="button" 
                          onClick={handlePrevMonth}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400' : 'border-zinc-250 hover:bg-zinc-50 text-zinc-550 hover:text-zinc-900'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextMonth}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400' : 'border-zinc-250 hover:bg-zinc-50 text-zinc-550 hover:text-zinc-900'
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* DAY NAMES ROW */}
                    <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 select-none">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                    </div>

                    {/* DAY NUMS GRID */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-6">
                      {calendarDays.map((dayNum, i) => {
                        if (dayNum === null) {
                          return <div key={`empty-${i}`} className="aspect-square" />;
                        }

                        const isSelected = selectedDate !== null &&
                          selectedDate.getDate() === dayNum &&
                          selectedDate.getMonth() === currentMonthDate.getMonth() &&
                          selectedDate.getFullYear() === currentMonthDate.getFullYear();

                        // Available weekdays (Mon-Fri)
                        const d = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), dayNum);
                        const dayOfWeek = d.getDay();
                        const isAvailable = dayOfWeek >= 1 && dayOfWeek <= 5;
                        const hasDot = dayNum === 11 || dayNum === 15;

                        return (
                          <button
                            key={`cal-day-${currentMonthDate.getFullYear()}-${currentMonthDate.getMonth()}-${dayNum}`}
                            type="button"
                            onClick={() => {
                              if (isAvailable) {
                                setSelectedDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), dayNum));
                              }
                            }}
                            className={`aspect-square rounded-xl text-xs sm:text-[13px] font-semibold flex flex-col items-center justify-center relative transition-all ${
                              isSelected
                                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-extrabold shadow-md'
                                : isAvailable
                                  ? (hasDot 
                                      ? (isDark 
                                          ? 'bg-zinc-800/40 text-white border border-zinc-800/80 hover:bg-zinc-800' 
                                          : 'bg-zinc-100/60 text-zinc-900 border border-zinc-200/50 hover:bg-zinc-150/80')
                                      : (isDark 
                                          ? 'bg-zinc-800/40 text-white hover:bg-zinc-800' 
                                          : 'bg-zinc-100/60 text-zinc-900 hover:bg-zinc-150/80')
                                    )
                                  : (isDark 
                                      ? 'text-zinc-700 cursor-not-allowed opacity-20' 
                                      : 'text-zinc-300 cursor-not-allowed opacity-50')
                            }`}
                            disabled={!isAvailable}
                          >
                            <span>{dayNum}</span>
                            {/* Dot indicator matching custom style */}
                            {hasDot && (
                              <span className={`absolute bottom-1 w-1 h-1 rounded-full ${
                                isSelected 
                                  ? (isDark ? 'bg-zinc-950' : 'bg-white') 
                                  : (isDark ? 'bg-zinc-100' : 'bg-zinc-950')
                              }`} />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time slots Container */}
                    <div className="mt-8">
                      <h5 className={`text-[11px] font-mono uppercase tracking-wider mb-4 font-extrabold ${
                        isDark ? 'text-zinc-500' : 'text-zinc-400'
                      }`}>Select a time</h5>
                      
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* First column */}
                        <div className="flex flex-col gap-2">
                          {firstColPills.map((time) => {
                            const isTimeSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`w-full py-2.5 h-10.5 rounded-xl text-xs font-semibold tracking-wide transition-all border text-center ${
                                  isTimeSelected
                                    ? (isDark 
                                        ? 'bg-white text-zinc-950 border-white shadow-md font-black' 
                                        : 'bg-[#18181b] text-white border-[#18181b] shadow-sm font-black')
                                    : (isDark 
                                        ? 'bg-transparent text-zinc-300 border-zinc-800/80 hover:bg-zinc-800/40 hover:text-white' 
                                        : 'bg-white text-zinc-700 border-zinc-200 hover:bg-[#fcfcfc] hover:border-zinc-300 hover:text-zinc-950')
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>

                        {/* Second column */}
                        <div className="flex flex-col gap-2">
                          {secondColPills.map((time) => {
                            const isTimeSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`w-full py-2.5 h-10.5 rounded-xl text-xs font-semibold tracking-wide transition-all border text-center ${
                                  isTimeSelected
                                    ? (isDark 
                                        ? 'bg-white text-zinc-950 border-white shadow-md font-black' 
                                        : 'bg-[#18181b] text-white border-[#18181b] shadow-sm font-black')
                                    : (isDark 
                                        ? 'bg-transparent text-zinc-300 border-zinc-800/80 hover:bg-zinc-800/40 hover:text-white' 
                                        : 'bg-white text-zinc-700 border-zinc-200 hover:bg-[#fcfcfc] hover:border-zinc-300 hover:text-zinc-950')
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar timezone feedback */}
                  <div className="mt-8 pt-4.5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-center gap-2 cursor-pointer text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">Times shown in America/New York</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                  </div>
                </div>

                {/* RIGHT CARD: Coordinate share space and sleek Form inputs */}
                <form 
                  onSubmit={handleBookingConfirm}
                  className={`rounded-[28px] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isDark 
                      ? 'bg-[#121215] border-zinc-800/80 shadow-[0_30px_60px_rgba(0,0,0,0.4)]' 
                      : 'bg-white border-zinc-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)]'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Upper tracker subtitle and card title */}
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 font-extrabold block mb-1">
                        STEP 2: DETAILS OF PROBLEMS
                      </span>
                      <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                        isDark ? 'text-white' : 'text-zinc-950'
                      }`}>
                        Share Coordinates
                      </h2>
                    </div>

                    {/* Inputs panel */}
                    <div className="space-y-4">
                      
                      {/* Name input */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider font-extrabold pl-1.5 block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>YOUR NAME</label>
                        <div className="relative">
                          <User className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                          <input 
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full h-12 pl-12 pr-5 text-[13.5px] font-medium rounded-xl border focus:outline-none transition-all ${
                              isDark 
                                ? 'bg-zinc-950/40 border-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-700' 
                                : 'bg-white border-zinc-200 text-zinc-900 focus:bg-white focus:border-zinc-350 shadow-[0_1px_4px_rgba(0,0,0,0.01)]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider font-extrabold pl-1.5 block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>YOUR EMAIL</label>
                        <div className="relative">
                          <Mail className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                          <input 
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full h-12 pl-12 pr-5 text-[13.5px] font-medium rounded-xl border focus:outline-none transition-all ${
                              isDark 
                                ? 'bg-zinc-950/40 border-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-700' 
                                : 'bg-white border-zinc-200 text-zinc-900 focus:bg-white focus:border-zinc-350 shadow-[0_1px_4px_rgba(0,0,0,0.01)]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider font-extrabold pl-1.5 block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>PHONE NUMBER (OPTIONAL)</label>
                        <div className="relative">
                          <Smartphone className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                          <input 
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`w-full h-12 pl-12 pr-5 text-[13.5px] font-medium rounded-xl border focus:outline-none transition-all ${
                              isDark 
                                ? 'bg-zinc-950/40 border-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-700' 
                                : 'bg-white border-zinc-200 text-zinc-900 focus:bg-white focus:border-zinc-350 shadow-[0_1px_4px_rgba(0,0,0,0.01)]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Optimization description textarea */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider font-extrabold pl-1.5 block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>WHAT PROCESS NEEDS OPTIMIZATION?</label>
                        <div className="relative">
                          <FileText className="absolute left-4.5 top-4.5 w-4 h-4 text-zinc-400 pointer-events-none" />
                          <textarea 
                            rows={3}
                            placeholder="e.g. Sales flow, CRM synchronization, client onboard logic..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={`w-full py-4 pl-12 pr-5 text-[13.5px] font-medium rounded-xl border focus:outline-none transition-all resize-none ${
                              isDark 
                                ? 'bg-zinc-950/40 border-zinc-800 text-white focus:bg-zinc-950 focus:border-zinc-700' 
                                : 'bg-white border-zinc-200 text-zinc-900 focus:bg-white focus:border-zinc-350 shadow-[0_1px_4px_rgba(0,0,0,0.01)]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Display Preferred Date item */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider font-extrabold pl-1.5 block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>PREFERRED DATE</label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                          <div className={`w-full h-12 pl-12 pr-10 text-[13.5px] font-semibold rounded-xl border flex items-center justify-between ${
                            isDark ? 'bg-zinc-950/40 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900 shadow-[0_1px_4px_rgba(0,0,0,0.01)]'
                          }`}>
                            <span>
                              {selectedDate 
                                ? `${selectedDate.getDate()} ${HOST_MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}` 
                                : "Choose date..."}
                            </span>
                            <ChevronDown className="w-4 h-4 text-zinc-400" />
                          </div>
                        </div>
                      </div>

                      {/* Display Preferred Time item */}
                      <div className="space-y-1.5 text-left">
                        <label className={`text-[10px] font-mono uppercase tracking-wider font-extrabold pl-1.5 block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>PREFERRED TIME</label>
                        <div className="relative">
                          <Clock className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                          <div className={`w-full h-12 pl-12 pr-10 text-[13.5px] font-semibold rounded-xl border flex items-center justify-between ${
                            isDark ? 'bg-zinc-950/40 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-[#18181b] shadow-[0_1px_4px_rgba(0,0,0,0.01)]'
                          }`}>
                            <span>{selectedTime || "Choose time..."}</span>
                            <ChevronDown className="w-4 h-4 text-zinc-400" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Submission Bottom Advisory */}
                  <div className="mt-8 pt-6 border-t border-dashed border-zinc-150 dark:border-zinc-800/80">
                    
                    {/* Beautiful Advisory Alert box matching image layout perfectly */}
                    <div className={`p-4 rounded-2xl border flex items-center gap-4 mb-5 text-left transition-all duration-300 ${
                      isDark 
                        ? 'bg-orange-500/5 border-orange-500/20 text-orange-400/90 shadow-inner' 
                        : 'bg-[#fff7ed] border-[#fed7aa] text-[#c2410c] shadow-[0_2px_8px_rgba(234,88,12,0.02)]'
                    }`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-[#ffedd5] text-[#ea580c]'
                      }`}>
                        <CalendarIcon className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold leading-tight">
                          Please select a specific date
                        </p>
                        <p className={`text-[11px] font-medium leading-tight ${isDark ? 'text-orange-400/70' : 'text-[#c2410c]/80'}`}>
                          and time slot first.
                        </p>
                      </div>
                    </div>

                    {/* CONFIRM BOOKING BUTTON */}
                    <button
                      type="submit"
                      disabled={isBooking}
                      className={`w-full py-4.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 transform active:scale-[0.98] text-center shadow-lg cursor-pointer ${
                        isDark 
                          ? 'bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_12px_24px_-4px_rgba(255,255,255,0.08)]' 
                          : 'bg-zinc-950 text-white hover:bg-black hover:shadow-xl shadow-zinc-950/10'
                      }`}
                    >
                      {isBooking ? "CONFIRMING MEETING..." : "CONFIRM SESSION BOOKING"}
                    </button>
                  </div>
                </form>

              </div>
            </motion.div>
          ) : (
            /* Premium Success state */
            <motion.div
              key="schedule-success-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`max-w-xl mx-auto rounded-[32px] border p-8 sm:p-12 text-center relative overflow-hidden ${
                isDark ? 'bg-[#121215] border-zinc-800' : 'bg-white border-zinc-200/90 shadow-2xl'
              }`}
            >
              {/* Subtle accent halo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-md">
                <Check className="w-8 h-8" strokeWidth={3} />
              </div>

              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight mb-3 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                Session Booked!
              </h3>
              
              <p className={`text-xs sm:text-sm font-medium leading-relaxed mb-8 max-w-sm mx-auto ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                We've synchronized your schedule and sent an invitation details straight to <span className={`font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>{email}</span>.
              </p>

              {/* Box info receipt summary */}
              <div className={`rounded-2xl p-5 text-left text-xs space-y-3.5 ${
                isDark ? 'bg-zinc-950/60 border border-zinc-800/80 animate-pulse' : 'bg-zinc-50/80 border border-zinc-200/70'
              }`}>
                <div>
                  <span className="block text-[9px] font-mono font-bold tracking-widest text-[#8da315] dark:text-[#cbf33b] uppercase">Confirmed Date & Time</span>
                  <p className={`font-black text-[14px] mt-0.5 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                    {selectedDate 
                      ? `${selectedDate.getDate()} ${HOST_MONTHS_FULL[selectedDate.getMonth()]} ${selectedDate.getFullYear()}` 
                      : ""} at {selectedTime}
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-800/60">
                  <span className="block text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Video Conference Room</span>
                  <p className={`font-medium mt-1 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    A direct Cal video meeting URL was locked in. We'll generate reminders before your session begins.
                  </p>
                </div>
              </div>

              <button
                onClick={onBack}
                type="button"
                className={`mt-10 px-8 py-3.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer inline-block ${
                  isDark 
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700' 
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 shadow-sm'
                }`}
              >
                Back to overview
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM METADATA BAR FEATURES ZONE precisely matching image footer cards */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 pt-10 border-t ${
          isDark ? 'border-zinc-900/60' : 'border-zinc-200/90'
        }`}>
          
          {/* Column Item 1 */}
          <div className="flex items-start gap-4 p-1">
            <div className={`p-3 rounded-2xl flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-800/40' : 'bg-white border border-zinc-200/80 text-zinc-800 shadow-sm'
            }`}>
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h5 className={`text-xs font-extrabold tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Easy Scheduling
              </h5>
              <p className={`text-[11px] font-medium mt-1 leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Share your link and let others book with ease.
              </p>
            </div>
          </div>

          {/* Column Item 2 */}
          <div className="flex items-start gap-4 p-1">
            <div className={`p-3 rounded-2xl flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-800/40' : 'bg-white border border-zinc-200/80 text-zinc-800 shadow-sm'
            }`}>
              <Video className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h5 className={`text-xs font-extrabold tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Video Meetings
              </h5>
              <p className={`text-[11px] font-medium mt-1 leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Built-in video calls powered by Cal.com.
              </p>
            </div>
          </div>

          {/* Column Item 3 */}
          <div className="flex items-start gap-4 p-1">
            <div className={`p-3 rounded-2xl flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-800/40' : 'bg-white border border-zinc-200/80 text-zinc-800 shadow-sm'
            }`}>
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h5 className={`text-xs font-extrabold tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Global Timezones
              </h5>
              <p className={`text-[11px] font-medium mt-1 leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Automatically adjusts to your and your invitee's timezone.
              </p>
            </div>
          </div>

          {/* Column Item 4 */}
          <div className="flex items-start gap-4 p-1">
            <div className={`p-3 rounded-2xl flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-800/40' : 'bg-white border border-zinc-200/80 text-zinc-800 shadow-sm'
            }`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h5 className={`text-xs font-extrabold tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                Privacy First
              </h5>
              <p className={`text-[11px] font-medium mt-1 leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Your data is private and securely handled.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
