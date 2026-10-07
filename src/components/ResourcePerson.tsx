import React from 'react';
import { 
  RESOURCE_PERSON, 
  RESOURCE_PERSON_DESIGNATION, 
  RESOURCE_PERSON_COMPANY, 
  EVENT_CONFIG 
} from '../data/event';
import { Building2 } from 'lucide-react';

export const ResourcePerson: React.FC = () => {
  return (
    <section id="resource-person" className="py-20 md:py-28 bg-white border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              RESOURCE PERSON
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            Meet Your Resource Person
          </h2>
        </div>

        {/* Large Premium Speaker Card */}
        <div className="bg-canvas-subtle border border-gray-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-tech-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT (Desktop ~40% / Tablet 2-col / Mobile centered): Large Professional Photograph */}
            <div className="md:col-span-5 lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md">
                <img 
                  src="/assets/resoources.jpeg" 
                  alt="Mohammed Al Riyaz D — AI Generalist at Dell Technologies"
                  className="w-full h-auto max-h-[480px] object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT: Speaker Information & Clean Typography */}
            <div className="md:col-span-7 lg:col-span-7 space-y-6 text-left">
              {/* Google-blue accent line */}
              <div className="w-14 h-1 bg-google-blue rounded-full" />

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight font-sans">
                  {RESOURCE_PERSON}
                </h3>

                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-sm">
                  <span className="font-bold text-google-blue bg-google-blue-subtle/80 px-3 py-1 rounded-md border border-google-blue/20">
                    {RESOURCE_PERSON_DESIGNATION}
                  </span>
                  <span className="text-charcoal-300">·</span>
                  <span className="font-semibold text-charcoal-700 bg-white px-3 py-1 rounded-md border border-gray-200 flex items-center gap-1.5 shadow-2xs">
                    <Building2 className="w-4 h-4 text-charcoal-500" />
                    {RESOURCE_PERSON_COMPANY}
                  </span>
                </div>
              </div>

              {/* Exact Provided Supporting Text - No Invented Biography */}
              <div className="p-5 sm:p-6 bg-white rounded-xl border border-gray-200/90 shadow-2xs">
                <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
                  {EVENT_CONFIG.resourcePerson.supportingText}
                </p>
              </div>

              {/* Minimal verified indicator */}
              <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-charcoal-500">
                <span className="w-2 h-2 rounded-full bg-google-green" />
                <span>Industry Session · Dell Technologies & Google Developer Student Clubs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
