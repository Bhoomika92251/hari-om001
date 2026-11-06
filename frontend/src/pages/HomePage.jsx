import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { designsData } from '../data/designsData';
import { interiorsData } from '../data/interiorsData';
import { exteriorsData } from '../data/exteriorsData';
import { galleryData } from '../data/galleryData';
import { aboutData } from '../data/aboutData';
import { useModal } from '../context/ModalContext';

export default function HomePage() {
  const { openPlanModal } = useModal();
  const [activeInteriorTab, setActiveInteriorTab] = useState(interiorsData[0].id);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('all');

  const activeInterior = interiorsData.find((item) => item.id === activeInteriorTab) || interiorsData[0];

  const filteredGallery = selectedGalleryCategory === 'all'
    ? galleryData.slice(0, 4)
    : galleryData.filter((item) => item.category.includes(selectedGalleryCategory)).slice(0, 4);

  return (
    <div className="flex flex-col w-full text-on-surface">
      
      {/* 1. HERO SECTION */}
      <section id="overview" className="relative w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 pt-6 pb-12 flex flex-col gap-6 max-w-7xl mx-auto">
        
        {/* Hero Visual Card with Sunset Villa */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] flex flex-col justify-end p-6 sm:p-10">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7iecoc7Jv-lhmwAOSYW5DuAraG0qlS7Bq3xmmJh3fOTjFJ3X2Wz6YqygUf5NCsRIizQSN_yYdcfhX4ky87TPYwDw3o-mIfI6IrN3Vg4wxWrxKtyVGUlvwE9hD7duHmWpduR_9nQ7-zvDiKA4z2LBMlsTqHbrKni5HZjmuOeQMQ7NXSOWoDWxPPfzM4bF6pFxa6AJYJ589EhlL8UQpLRf19065cO2si9_WIO2arIo')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/10" />

          {/* Top Tag Badges */}
          <div className="relative z-10 mb-auto flex flex-wrap items-center justify-between w-full gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-bright/95 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                Award-Winning Atelier
              </span>
              <span className="material-symbols-outlined text-secondary text-[14px]">verified</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-bright/80 backdrop-blur-md text-primary font-mono text-label-sm">
              Architectural Portfolio 2024–2025
            </span>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col gap-4 max-w-2xl text-surface-bright mt-8">
            <h1 className="font-headline-lg text-headline-md sm:text-headline-lg lg:text-[56px] lg:leading-[1.1] tracking-tight font-normal">
              Design Your Dream Home With Us
            </h1>
            <p className="font-body-md text-body-md sm:text-body-lg text-surface-bright/90 max-w-xl font-light leading-relaxed">
              Where visionary architecture converges with bespoke interior luxury. We sculpt residential sanctuaries that balance timeless proportion with ecological mindfulness.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/designs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md tracking-wider uppercase font-semibold hover:bg-secondary-fixed-dim transition-all shadow-lg active:scale-95"
              >
                <span>Explore Designs</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-bright/20 backdrop-blur-md text-surface-bright hover:bg-surface-bright hover:text-primary font-label-md text-label-md tracking-wider uppercase font-semibold transition-all border border-surface-bright/30"
              >
                <span>Get Started • Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-surface-container border border-surface-container-high">
          {aboutData.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="font-headline-md text-headline-md text-primary font-light">
                {stat.value}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </section>

      {/* 2. ABOUT US SECTION PREVIEW */}
      <section id="about" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-bright max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Studio Philosophy
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal leading-tight">
              {aboutData.heroHeading}
            </h2>

            <div className="flex items-center gap-3 py-2 border-y border-surface-container">
              <img
                src={aboutData.principal.portrait}
                alt={aboutData.principal.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-title-md text-primary font-medium">
                  {aboutData.principal.name}
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-mono">
                  {aboutData.principal.credentials}
                </span>
              </div>
            </div>

            <blockquote className="font-headline-sm text-body-lg italic text-on-surface-variant pl-4 border-l-2 border-secondary font-light">
              {aboutData.principal.quote}
            </blockquote>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {aboutData.principal.bio}
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary font-semibold hover:text-secondary transition-colors"
              >
                <span>Read Full Studio Biography</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.materialPillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-surface-container-low border border-surface-container hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">{pillar.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">
                    {pillar.tag}
                  </span>
                  <h3 className="font-headline-sm text-title-md text-primary font-medium">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HOME DESIGNS SECTION */}
      <section id="designs" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Architectural Typologies
              </span>
              <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
                Home Design Categories
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Six signature architectural blueprints sculpted for diverse topographical contexts.
              </p>
            </div>

            <Link
              to="/designs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-surface-bright font-label-md text-label-md tracking-wider uppercase hover:bg-primary-container transition-all self-start md:self-auto"
            >
              <span>View All 6 Blueprints</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designsData.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  
                  {/* Typology Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-bright/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                    {project.typology}
                  </span>

                  {/* Sqft in visual */}
                  <span className="absolute bottom-4 left-4 text-surface-bright font-mono text-label-sm font-semibold">
                    {project.sqft}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-title-lg text-primary font-medium group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-surface-container text-body-sm text-on-surface-variant">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs truncate">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          {feat.icon}
                        </span>
                        <span className="truncate">{feat.text}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => openPlanModal(project)}
                    className="w-full mt-2 py-2.5 px-4 rounded-xl bg-surface-container text-primary font-label-md text-label-md tracking-wider uppercase font-semibold hover:bg-primary hover:text-surface-bright transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore Blueprints</span>
                    <span className="material-symbols-outlined text-[18px]">straighten</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INTERIOR DESIGN SHOWCASE PREVIEW */}
      <section id="interiors" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-bright">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Tactile Atmospheres
              </span>
              <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
                Interior Design Showcase
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Five meticulously resolved living chambers shaped by sensory materiality.
              </p>
            </div>

            <Link
              to="/interiors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:text-surface-bright transition-all"
            >
              <span>Explore All Chambers</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {interiorsData.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveInteriorTab(tab.id)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all shrink-0 ${
                  activeInteriorTab === tab.id
                    ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          {/* Active Chamber Pane */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-surface-container-low p-6 sm:p-8 border border-surface-container">
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
              <img
                src={activeInterior.image}
                alt={activeInterior.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-surface-bright/90 backdrop-blur-md text-primary font-mono text-xs">
                {activeInterior.subtitle}
              </span>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="font-headline-lg text-headline-sm sm:text-headline-md text-primary font-normal">
                {activeInterior.title}
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {activeInterior.description}
              </p>

              {/* Specs List */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-surface-container">
                {activeInterior.specs.slice(0, 4).map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                      {spec.label}
                    </span>
                    <span className="text-body-sm font-medium text-primary">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/interiors"
                className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold hover:text-secondary self-start pt-2"
              >
                <span>View Material Palette & Joinery</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. EXTERIOR DESIGN & ARCHITECTURAL ELEMENTS */}
      <section id="exteriors" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Envelopes & Landscapes
              </span>
              <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
                Exterior Design & Elements
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Harmonizing structure with context through boundary-dissolving craft.
              </p>
            </div>

            <Link
              to="/exteriors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-surface-bright font-label-md text-label-md tracking-wider uppercase hover:bg-primary-container transition-all"
            >
              <span>Explore Exterior Craft</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exteriorsData.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-surface-bright/90 backdrop-blur-md font-label-sm text-[10px] uppercase tracking-widest text-primary font-semibold">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-title-md text-primary font-medium group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to="/exteriors"
                    className="inline-flex items-center gap-1.5 text-secondary font-label-md text-xs uppercase tracking-wider font-semibold hover:text-primary transition-colors pt-2"
                  >
                    <span>Inspect Specs</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INSPIRATION GALLERY PREVIEW */}
      <section id="gallery" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-bright">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Archive of Works
              </span>
              <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
                Inspiration Gallery
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Explore curated residential monographs across Europe, Japan, and the Americas.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container text-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:text-surface-bright transition-all"
            >
              <span>Full Archive Gallery</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'exterior', label: 'Exteriors' },
              { id: 'interior', label: 'Interiors' },
              { id: 'living', label: 'Living' },
              { id: 'night', label: 'Night Views' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedGalleryCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all shrink-0 ${
                  selectedGalleryCategory === cat.id
                    ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-5 text-surface-bright">
                  <span className="font-label-sm text-[11px] text-primary-fixed-dim font-mono tracking-wider">
                    {item.location}
                  </span>
                  <h3 className="font-headline-sm text-title-lg font-medium text-surface-bright">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-surface-bright/80 text-xs line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CONTACT & CONSULTATION STRIP */}
      <section id="contact" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-high border-t border-surface-container">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Commence Dialogue
          </span>
          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
            Start Your Architectural Journey
          </h2>
          <p className="font-body-md text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Book an initial concept consultation with our principal design team in Beverly Hills, Paris, or via private video dossier.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-primary text-surface-bright font-label-md text-label-md tracking-wider uppercase font-semibold hover:bg-primary-container transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Schedule Atelier Consultation</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </Link>
            <a
              href="tel:+18005550192"
              className="px-6 py-3.5 rounded-full bg-surface-bright text-primary border border-surface-container font-label-md text-label-md tracking-wider uppercase font-semibold hover:bg-surface-container transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>+1 (800) 555-0192</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

