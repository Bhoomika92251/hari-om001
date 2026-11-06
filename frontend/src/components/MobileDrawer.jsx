import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function MobileDrawer({ isOpen, onClose }) {
  const routes = [
    { num: "01", name: "Home", path: "/" },
    { num: "02", name: "About Us", path: "/about" },
    { num: "03", name: "Home Designs", path: "/designs" },
    { num: "04", name: "Interior Design", path: "/interiors" },
    { num: "05", name: "Exterior Design", path: "/exteriors" },
    { num: "06", name: "Gallery", path: "/gallery" },
    { num: "07", name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[84vw] max-w-sm bg-surface-bright flex flex-col justify-between pt-safe pb-safe shadow-2xl transform transition-transform duration-300 ease-out border-r border-surface-container ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-surface-container pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-surface-bright">
                <span className="material-symbols-outlined text-[20px]">architecture</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-title-md text-primary font-medium">DreamSpace</span>
                <span className="font-label-sm text-[10px] text-secondary tracking-widest uppercase">Atelier</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Portfolio & Practice Navigation
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-primary text-surface-bright shadow-sm font-medium'
                      : 'text-on-surface hover:bg-surface-container text-on-surface-variant hover:text-primary'
                  }`
                }
              >
                <span className="font-headline-sm text-title-md tracking-tight">
                  <span className="text-secondary text-xs mr-2 font-mono">{route.num}.</span>
                  {route.name}
                </span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 bg-surface-container-low border-t border-surface-container flex flex-col gap-3">
          <div className="flex items-center gap-2 text-on-surface-variant text-body-sm">
            <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
            <a href="tel:+18005550192" className="hover:text-primary font-medium">
              +1 (800) 555-0192
            </a>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-body-sm">
            <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
            <span>Beverly Hills • Paris • Tokyo</span>
          </div>
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full mt-2 py-2.5 px-4 rounded-xl bg-primary text-surface-bright text-center font-label-md text-label-md tracking-wider uppercase hover:bg-primary-container transition-colors shadow-sm"
          >
            Request Private Consultation
          </Link>
        </div>
      </aside>
    </>
  );
}

