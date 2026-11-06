import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onOpenDrawer }) {
  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Designs', path: '/designs' },
    { name: 'Interiors', path: '/interiors' },
    { name: 'Exteriors', path: '/exteriors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container shadow-[0_1px_12px_rgba(3,34,23,0.04)] transition-all">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Mobile Menu + Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open Architectural Menu"
            onClick={onOpenDrawer}
            className="w-10 h-10 flex items-center justify-center text-primary rounded-lg hover:bg-surface-container active:scale-95 transition-all lg:hidden"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            {/* Architectural Studio Monogram / Logo */}
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-surface-bright shadow-sm group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">architecture</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-title-md leading-none text-primary tracking-tight font-medium group-hover:text-primary-container transition-colors">
                DreamSpace
              </span>
              <span className="font-label-sm text-[10px] text-secondary tracking-widest uppercase font-semibold mt-0.5">
                Atelier & Architecture
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-label-md text-label-md tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action: Consultation CTA + Profile Avatar */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-surface-bright hover:bg-primary-container font-label-md text-label-md transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span>Consultation</span>
          </Link>

          <Link
            to="/contact"
            aria-label="Schedule Design Consultation"
            className="sm:hidden w-10 h-10 flex items-center justify-center text-primary rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">calendar_month</span>
          </Link>

          <Link to="/about" title="Elena Vance & Associates" className="relative group">
            <img
              alt="Elena Vance Principal Architect"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBd9a8UnGSQY22qn5m4MdAkCuAZDCsvvHt9vox0ePS3tQv1zyZMiXdtZUJLT7KMu0MsxW8mNS_HAyu86xkgMaW21f9opjT4Xsc3MdihOi1I70W7oeqlgvHS7wmkW2hjG_euwA4gSiKXoT-i0rLuitfgJlmr07NaYPOl8WLnYNxP-bj4hRzg5AWp4qqq4_aagicSp4C03j6zoYgN1TKv9Dam4D3i9Vd0zpF6CVoQyo"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-2 ring-surface-bright" />
          </Link>
        </div>

      </div>
    </header>
  );
}

