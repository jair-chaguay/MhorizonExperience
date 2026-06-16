import  { useState, useEffect } from 'react';
import { NAV_LINK_STYLES, NAV_ITEMS } from "../../utils/constants";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-slate-200 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <a href="#" className="flex items-center gap-2 group">
        <img src="/images/mh.svg" alt="MHORIZON Experience" className="h-8 object-contain transition-all duration-500" />
      </a>
      
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium text-sm text-slate-600">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className={NAV_LINK_STYLES}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-slate-600 hover:text-brand font-medium text-sm transition-colors">
          Campus Virtual
        </a>
        <button className="bg-brand hover:bg-brandHover cursor-pointer text-white font-medium text-sm py-2 px-5 rounded-md transition-all shadow-[0_4px_15px_rgba(50,160,156,0.3)] hover:shadow-[0_6px_20px_rgba(50,160,156,0.5)] hover:-translate-y-0.5 duration-300">
          Inscribirme
        </button>
      </div>
    </nav>
  );
};