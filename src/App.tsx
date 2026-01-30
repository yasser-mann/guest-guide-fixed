import React, { useState, useEffect } from 'react';

// --- ICONS (SVGs Cleaned & Optimized) ---
const Icons = {
  Wifi: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  ),
  Book: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Key: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
  Map: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Copy: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  ChevronDown: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

// --- HOME VIEW ---
const HomeView = ({ onNavigate }: any) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('Yasser123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fade-in space-y-8">
      {/* 1. Header */}
      <div className="flex justify-between items-center px-2 pt-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              Guest Access
            </p>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Hi, Yasser
            </h1>
          </div>
        </div>
        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
          Active
        </div>
      </div>

      {/* 2. WiFi Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-7 shadow-xl shadow-blue-500/30 text-white mx-1 transform transition hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/10">
              <Icons.Wifi />
            </div>
            <h2 className="text-lg font-bold tracking-wide">WiFi Access</h2>
          </div>
          <div className="flex gap-1 items-end h-4 opacity-50">
            <div className="w-1 h-2 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-4 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="space-y-2 mb-6 pl-1">
          <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
            <span className="text-blue-100 text-sm font-medium">Network</span>
            <span className="text-white font-bold">Dar Yasser</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-100 text-sm font-medium">Password</span>
            <span className="text-white font-mono text-lg tracking-wider">
              Yasser123
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="w-full bg-white hover:bg-gray-50 text-blue-600 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
        >
          {copied ? <Icons.Check /> : <Icons.Copy />}{' '}
          {copied ? 'Copied to clipboard!' : 'Copy Password'}
        </button>
      </div>

      {/* 3. Guide Grid */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-5 px-2">
          Explore Guide
        </h2>
        <div className="grid grid-cols-2 gap-4 px-1">
          <MenuButton
            onClick={() => onNavigate('manual')}
            icon={<Icons.Book />}
            label="House Manual"
            colorClass="bg-green-50 text-green-600 border-green-100"
          />
          <MenuButton
            onClick={() => onNavigate('checkin')}
            icon={<Icons.Key />}
            label="Check-in"
            colorClass="bg-orange-50 text-orange-500 border-orange-100"
          />
          <MenuButton
            onClick={() => onNavigate('local')}
            icon={<Icons.Map />}
            label="Local Map"
            colorClass="bg-blue-50 text-blue-500 border-blue-100"
          />
          <MenuButton
            onClick={() => onNavigate('emergency')}
            icon={<Icons.Phone />}
            label="Emergency"
            colorClass="bg-purple-50 text-purple-500 border-purple-100"
          />
        </div>
      </div>
    </div>
  );
};

const MenuButton = ({ onClick, icon, label, colorClass }: any) => (
  <button
    onClick={onClick}
    className={`${colorClass} border p-4 rounded-[24px] flex flex-col items-center justify-center gap-4 aspect-square active:scale-95 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md`}
  >
    <div className="bg-white p-3.5 rounded-2xl shadow-sm">{icon}</div>
    <span className="text-sm font-bold text-gray-700">{label}</span>
  </button>
);

// --- SUB PAGES ---
const ManualView = ({ onBack }: any) => {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    {
      title: 'Air Conditioning',
      content: 'Remote is on the wall. Best temp: 24°C.',
    },
    { title: 'Coffee Machine', content: 'Pods are in the top drawer. Enjoy!' },
    {
      title: 'Washer',
      content: 'Use the Quick Mode (30 mins) for efficiency.',
    },
  ];
  return (
    <div className="animate-fade-in pt-2">
      <div className="flex items-center gap-4 mb-8 px-2">
        <button
          onClick={onBack}
          className="p-3 bg-white border border-gray-200 rounded-full shadow-sm active:scale-90 hover:bg-gray-50 transition-all"
        >
          <Icons.ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">House Manual</h2>
      </div>
      <div className="space-y-4 px-1">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 bg-white text-left"
            >
              <span className="font-bold text-gray-800">{item.title}</span>
              <div
                className={`transition-transform duration-200 text-gray-400 ${
                  open === idx ? 'rotate-180' : ''
                }`}
              >
                <Icons.ChevronDown />
              </div>
            </button>
            {open === idx && (
              <div className="p-5 pt-0 text-gray-600 bg-white leading-relaxed">
                <p className="pt-2 border-t border-gray-50">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title, icon, onBack }: any) => (
  <div className="animate-fade-in pt-2">
    <button
      onClick={onBack}
      className="mb-6 flex gap-2 items-center font-bold text-gray-600 px-2 hover:text-gray-900 transition-colors"
    >
      <Icons.ArrowLeft /> Back
    </button>
    <div className="flex flex-col items-center justify-center h-[60vh] text-center opacity-50">
      <div className="p-4 bg-gray-100 rounded-full mb-4 text-gray-400">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-400">{title} View</h2>
      <p className="text-sm">Content coming soon...</p>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
const GuidebookApp = () => {
  const [view, setView] = useState('home');

  useEffect(() => {
    if (!document.getElementById('tailwind-script')) {
      const script = document.createElement('script');
      script.id = 'tailwind-script';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex justify-center text-gray-900">
      <div className="w-full max-w-md min-h-screen flex flex-col p-6">
        <div className="flex-1 pb-10">
          {view === 'home' && <HomeView onNavigate={setView} />}
          {view === 'manual' && <ManualView onBack={() => setView('home')} />}
          {view === 'checkin' && (
            <PlaceholderPage
              title="Check-in"
              icon={<Icons.Key />}
              onBack={() => setView('home')}
            />
          )}
          {view === 'local' && (
            <PlaceholderPage
              title="Local Map"
              icon={<Icons.Map />}
              onBack={() => setView('home')}
            />
          )}
          {view === 'emergency' && (
            <PlaceholderPage
              title="Emergency"
              icon={<Icons.Phone />}
              onBack={() => setView('home')}
            />
          )}
        </div>
        <div className="py-6 text-center text-xs font-medium text-gray-400 tracking-wide">
          © 2026 Yasser Guest Guide
        </div>
      </div>
    </div>
  );
};

export default GuidebookApp;
