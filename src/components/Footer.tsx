import React from 'react';
import { 
  EVENT_NAME, 
  WORKSHOP_TOPIC, 
  ORGANIZER, 
  INSTITUTION, 
  RESOURCE_PERSON, 
  RESOURCE_PERSON_DESIGNATION, 
  RESOURCE_PERSON_COMPANY 
} from '../data/event';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onRegisterClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas-subtle border-t border-gray-200 text-charcoal-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-200/80">
          {/* Brand & GDSC Logo & Workshop Topic (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            {/* Official Uploaded GDSC Logo */}
            <div className="flex items-center">
              <img 
                src="/assets/gdsc.png" 
                alt="Google Developer Student Clubs Sri Sairam Engineering College logo"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <div>
              <span className="font-extrabold text-lg tracking-tight font-sans text-charcoal-900 block">
                {EVENT_NAME}
              </span>
              <p className="text-xs sm:text-sm font-medium text-charcoal-700 font-sans mt-0.5">
                {WORKSHOP_TOPIC}
              </p>
            </div>

            <div className="flex items-center space-x-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-google-blue" />
              <span className="w-2 h-2 rounded-full bg-google-red" />
              <span className="w-2 h-2 rounded-full bg-google-yellow" />
              <span className="w-2 h-2 rounded-full bg-google-green" />
              <span className="font-mono text-[10px] text-charcoal-400 pl-2">
                GOOGLE DEVELOPER COMMUNITY
              </span>
            </div>
          </div>

          {/* ORGANIZED BY (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] text-charcoal-400 font-semibold uppercase tracking-wider block">
              ORGANIZED BY
            </span>
            <div className="p-3.5 bg-white border border-gray-200 rounded-xl space-y-1 shadow-2xs">
              <h4 className="text-xs font-bold text-charcoal-900 font-sans">
                {ORGANIZER}
              </h4>
              <p className="text-[11px] text-charcoal-600 font-mono">
                {INSTITUTION}
              </p>
            </div>
          </div>

          {/* RESOURCE PERSON (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] text-charcoal-400 font-semibold uppercase tracking-wider block">
              RESOURCE PERSON
            </span>
            <div className="p-3.5 bg-white border border-gray-200 rounded-xl space-y-1 shadow-2xs">
              <h4 className="text-xs font-bold text-charcoal-900 font-sans">
                {RESOURCE_PERSON}
              </h4>
              <p className="text-[11px] text-charcoal-600 font-mono">
                {RESOURCE_PERSON_DESIGNATION} · {RESOURCE_PERSON_COMPANY}
              </p>
            </div>
          </div>

          {/* NAVIGATION (2 cols) */}
          <div className="md:col-span-2 space-y-2">
            <span className="font-mono text-[10px] text-charcoal-400 font-semibold uppercase tracking-wider block">
              NAVIGATION
            </span>
            <ul className="space-y-1.5 text-xs font-medium text-charcoal-600">
              <li><a href="#hero" className="hover:text-charcoal-900 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-charcoal-900 transition-colors">Workshop</a></li>
              <li><a href="#why-crewai" className="hover:text-charcoal-900 transition-colors">CrewAI</a></li>
              <li><a href="#learning" className="hover:text-charcoal-900 transition-colors">Learning</a></li>
              <li><a href="#resource-person" className="hover:text-charcoal-900 transition-colors">Resource Person</a></li>
              <li><a href="#faq" className="hover:text-charcoal-900 transition-colors">FAQ</a></li>
              <li>
                <button 
                  onClick={onRegisterClick}
                  className="text-google-blue hover:underline font-semibold"
                >
                  Register →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Exact Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 font-mono gap-3">
          <div>
            © 2026 {EVENT_NAME} · {ORGANIZER} · {INSTITUTION}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-charcoal-900 transition-colors py-1 px-2 rounded hover:bg-gray-200/50"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
