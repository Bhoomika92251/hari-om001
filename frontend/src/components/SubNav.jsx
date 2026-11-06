import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function SubNav() {
  const location = useLocation();

  const links = [
    { label: "Overview", path: "/", anchor: "#overview" },
    { label: "About Us", path: "/about", anchor: "#about" },
    { label: "Home Designs", path: "/designs", anchor: "#designs" },
    { label: "Interiors", path: "/interiors", anchor: "#interiors" },
    { label: "Exteriors", path: "/exteriors", anchor: "#exteriors" },
    { label: "Gallery", path: "/gallery", anchor: "#gallery" },
    { label: "Contact", path: "/contact", anchor: "#contact" },
  ];

  return (
    <nav className="sticky top-16 z-40 w-full bg-surface-bright/95 backdrop-blur-md border-b border-surface-container py-2.5 px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full font-label-md text-label-md tracking-wider transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                    : 'bg-surface-container/70 text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`
              }
            >
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

