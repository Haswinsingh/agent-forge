import React from 'react';
import { X, ExternalLink, AlertCircle, CheckCircle2, Copy } from 'lucide-react';
import { REGISTRATION_FORM_URL, isRegistrationUrlConfigured } from '../data/event';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const isConfigured = isRegistrationUrlConfigured();

  if (!isOpen) return null;

  const handleCopyVar = () => {
    navigator.clipboard.writeText('src/data/event.ts -> REGISTRATION_FORM_URL');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectProceed = () => {
    if (isConfigured) {
      window.open(REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Header bar with technical crosshair accent */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-google-blue inline-block"></span>
            <span className="font-mono text-xs text-charcoal-500 uppercase tracking-widest">
              REGISTRATION DISPATCHER
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-charcoal-400 hover:text-charcoal-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isConfigured ? (
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-google-blue-subtle text-google-blue mt-0.5">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="modal-headline" className="font-semibold text-charcoal-900 text-lg">
                    Redirecting to Official Registration
                  </h3>
                  <p className="text-sm text-charcoal-500 mt-1">
                    You are being redirected to the secure external registration portal.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200 font-mono text-xs text-charcoal-600 break-all">
                {REGISTRATION_FORM_URL}
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-charcoal-600 hover:text-charcoal-900"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDirectProceed}
                  className="px-5 py-2.5 bg-google-blue hover:bg-google-blue-hover text-white text-sm font-medium rounded-lg shadow-sm transition-all flex items-center space-x-2"
                >
                  <span>Continue to Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-google-yellow-subtle text-charcoal-900 mt-0.5">
                  <AlertCircle className="w-5 h-5 text-google-yellow fill-google-yellow/20" />
                </div>
                <div>
                  <h3 id="modal-headline" className="font-semibold text-charcoal-900 text-base">
                    Registration Portal Link
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                    The registration button is connected to the central configuration variable <code className="bg-gray-100 px-1.5 py-0.5 rounded text-charcoal-800 font-mono text-[11px]">REGISTRATION_FORM_URL</code>.
                  </p>
                </div>
              </div>

              {/* Technical Config Preview Card */}
              <div className="p-4 bg-gray-50/80 rounded-lg border border-gray-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-500 font-mono">
                  <span>Target Configuration</span>
                  <button 
                    onClick={handleCopyVar}
                    className="flex items-center space-x-1 text-google-blue hover:underline"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-google-green" />
                        <span className="text-google-green font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Path</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-white p-2.5 rounded border border-gray-200 font-mono text-xs text-charcoal-700">
                  <span className="text-charcoal-400">// src/data/event.ts</span><br />
                  <span className="text-google-blue">export const</span> REGISTRATION_FORM_URL = <span className="text-google-green">&quot;YOUR_REGISTRATION_FORM_URL&quot;</span>;
                </div>
              </div>

              <div className="text-xs text-charcoal-500 leading-normal">
                To link your official Google Form, Typeform, or college ticketing link, simply update this URL in <span className="font-mono text-charcoal-700">src/data/event.ts</span>. Every registration button on the site will automatically redirect to your live form.
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-charcoal-400 font-mono">Status: Awaiting URL insertion</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-charcoal-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
                >
                  Understood
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
