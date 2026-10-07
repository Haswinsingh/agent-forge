import React from 'react';
import { ORGANIZER, INSTITUTION } from '../data/event';

export const Organizer: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200/80 py-14 sm:py-16 tech-grid-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Subtle Google micro-accents */}
          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="w-2 h-2 rounded-full bg-google-red" />
            <span className="w-2 h-2 rounded-full bg-google-yellow" />
            <span className="w-2 h-2 rounded-full bg-google-green" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest pl-2">
              STUDENT DEVELOPER COMMUNITY
            </span>
          </div>

          {/* Heading: Organized by */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 font-sans tracking-tight">
            Organized by
          </h2>

          {/* Dedicated Logo Card: Actual Uploaded /assets/gdsc.png */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center justify-center p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-subtle max-w-md w-full">
              <img 
                src="/assets/gdsc.png" 
                alt="Google Developer Student Clubs Sri Sairam Engineering College logo"
                className="max-h-16 sm:max-h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Organizer Entity Names */}
          <div className="space-y-1 pt-1">
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-sans tracking-tight">
              {ORGANIZER}
            </h3>
            <p className="font-mono text-sm sm:text-base font-semibold text-charcoal-700 tracking-wide">
              {INSTITUTION}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-500 max-w-lg mx-auto leading-relaxed">
            Empowering students to build intelligent systems, explore cutting-edge AI architectures, and gain practical technical proficiency through community-driven workshops.
          </p>
        </div>
      </div>
    </section>
  );
};
