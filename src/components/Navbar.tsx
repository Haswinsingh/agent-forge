import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EVENT_NAME, INSTITUTION, NAV_LINKS } from '../data/event';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-sm py-2.5' 
          : 'bg-white/85 backdrop-blur-sm border-b border-gray-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Actual Uploaded GDSC Logo + AGENT FORGE + Sri Sairam Engineering College */}
          <a 
            href="#hero" 
            className="flex items-center space-x-3 text-charcoal-900 group focus:outline-none"
            aria-label="AGENT FORGE Home"
          >
            {/* Official GDSC Logo (Preserving original aspect ratio ~3.7:1) */}
            <img 
              src="/assets/gdsc.png" 
              alt="Google Developer Student Clubs Sri Sairam Engineering College logo"
              className="h-7 sm:h-8 w-auto object-contain shrink-0"
              loading="eager"
            />

            <div className="hidden sm:block h-7 w-[1px] bg-gray-200" aria-hidden="true" />

            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm sm:text-base tracking-tight font-sans text-charcoal-900 flex items-center gap-1.5">
                {EVENT_NAME}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-google-blue" />
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-charcoal-600 tracking-wider">
                {INSTITUTION}
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-charcoal-600 hover:text-charcoal-900 hover:bg-gray-100/70 rounded-md transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: REGISTER NOW → Primary CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-google-blue hover:bg-google-blue-hover rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] group"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Actions: Register & Hamburger Toggle */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button
              onClick={onRegisterClick}
              className="px-3 py-1.5 text-xs font-bold text-white bg-google-blue hover:bg-google-blue-hover rounded-md shadow-xs"
            >
              Register →
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-charcoal-700 hover:text-charcoal-900 rounded-lg hover:bg-gray-100"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-gray-100 bg-white/95 rounded-xl shadow-lg px-2">
            <div className="px-3 py-1.5 mb-2 bg-gray-50 rounded-lg font-mono text-[10px] text-charcoal-600 flex items-center justify-between">
              <span>Google Developer Student Clubs</span>
              <span className="text-google-blue font-semibold">{INSTITUTION}</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold text-charcoal-700 hover:text-charcoal-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRegisterClick();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-google-blue rounded-lg shadow-sm"
                >
                  <span>REGISTER NOW →</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
