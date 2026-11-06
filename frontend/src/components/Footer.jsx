import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setLoading(true);
      try {
        await api.subscribeNewsletter(newsletterEmail);
        setSubscribed(true);
        setNewsletterEmail('');
      } catch (err) {
        console.error('Newsletter error:', err);
        setSubscribed(true);
        setNewsletterEmail('');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <footer className="w-full bg-primary text-surface-bright pt-16 pb-12 border-t border-primary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Top Grid: Studio Brand, Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-bright flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">architecture</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-surface-bright font-medium">
                  DreamSpace
                </span>
                <span className="font-label-sm text-[10px] text-primary-fixed tracking-widest uppercase">
                  Elena Vance & Associates
                </span>
              </div>
            </div>
            
            <p className="text-on-primary-container text-body-sm leading-relaxed max-w-sm">
              Sculpting mindful residential envelopes and tactile living atmospheres through spatial poise, ecological harmony, and generational materiality.
            </p>

            {/* Accreditations */}
            <div className="flex items-center gap-4 pt-2 text-primary-fixed-dim text-label-sm font-mono uppercase tracking-wider">
              <span>RIBA Chartered Practice</span>
              <span>•</span>
              <span>AIA International</span>
              <span>•</span>
              <span>Passive House</span>
            </div>
          </div>

          {/* Quick Links: Portfolio */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
              Portfolio
            </h4>
            <ul className="flex flex-col gap-2 text-body-sm text-on-primary-container">
              <li>
                <Link to="/designs" className="hover:text-surface-bright transition-colors">
                  Architectural Typologies
                </Link>
              </li>
              <li>
                <Link to="/interiors" className="hover:text-surface-bright transition-colors">
                  Interior Chambers
                </Link>
              </li>
              <li>
                <Link to="/exteriors" className="hover:text-surface-bright transition-colors">
                  Exterior Envelopes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-surface-bright transition-colors">
                  Inspiration Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
              Practice
            </h4>
            <ul className="flex flex-col gap-2 text-body-sm text-on-primary-container">
              <li>
                <Link to="/about" className="hover:text-surface-bright transition-colors">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-surface-bright transition-colors">
                  Elena Vance Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-surface-bright transition-colors">
                  Commission Enquiries
                </Link>
              </li>
              <li>
                <a href="#press" className="hover:text-surface-bright transition-colors">
                  Monographs & Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Atelier Studios */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
              Atelier Locations
            </h4>
            <div className="flex flex-col gap-2.5 text-body-sm text-on-primary-container">
              <div>
                <p className="text-surface-bright font-medium text-[13px]">Beverly Hills Atelier</p>
                <p className="text-[12px]">9460 Wilshire Blvd, Suite 800</p>
              </div>
              <div>
                <p className="text-surface-bright font-medium text-[13px]">Paris Design Office</p>
                <p className="text-[12px]">18 Rue du Faubourg Saint-Honoré</p>
              </div>
              <div>
                <p className="text-surface-bright font-medium text-[13px]">Tokyo Advisory</p>
                <p className="text-[12px]">Minami-Aoyama, Minato-ku</p>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter / Monograph Subscription Strip */}
        <div className="p-6 rounded-2xl bg-primary-container/60 border border-primary-container flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <h4 className="font-headline-sm text-title-md text-surface-bright font-medium">
              Subscribe to Architectural Monographs
            </h4>
            <p className="text-on-primary-container text-body-sm">
              Receive quarterly private editions on residential materiality, floor plan schematics, and studio works.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-primary-fixed bg-primary-container px-4 py-2 rounded-xl border border-primary-fixed/30 animate-fade-in">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span className="text-body-sm font-medium">Thank you. You have been added to our private archive.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full lg:w-auto max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="architect@domain.com"
                className="w-full lg:w-64 px-4 py-2.5 rounded-xl bg-surface-bright text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-outline"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-label-md text-label-md tracking-wider uppercase font-semibold hover:bg-secondary-fixed transition-colors shrink-0 disabled:opacity-50"
              >
                {loading ? 'Joining...' : 'Join'}
              </button>
            </form>
          )}
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 border-t border-primary-container/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-on-primary-container text-xs">
          <p>© {new Date().getFullYear()} DreamSpace • Elena Vance & Associates. All architectural rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-surface-bright transition-colors">
              Privacy Charter
            </Link>
            <Link to="/about" className="hover:text-surface-bright transition-colors">
              Terms of Practice
            </Link>
            <Link to="/contact" className="hover:text-surface-bright transition-colors">
              Press Enquiries
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
