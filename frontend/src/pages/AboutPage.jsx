import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/aboutData';

export default function AboutPage() {
  return (
    <div className="w-full bg-surface-bright text-on-surface py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16 animate-fade-in">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4 max-w-3xl border-b border-surface-container pb-10">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            {aboutData.subtitle}
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-md sm:text-headline-lg lg:text-[54px] text-primary font-normal leading-tight">
          {aboutData.heroHeading}
        </h1>
        <p className="font-body-md text-body-lg text-on-surface-variant font-light leading-relaxed">
          Elena Vance & Associates is a research-driven residential practice. We conceive homes not as passive shelters, but as living instruments that orchestrate sun angles, micro-climates, and human intimacy.
        </p>
      </div>

      {/* Principal Profile Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-surface-container-low rounded-3xl p-8 sm:p-12 border border-surface-container">
        
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
          <div className="relative">
            <img
              src={aboutData.principal.portrait}
              alt={aboutData.principal.name}
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl object-cover ring-4 ring-primary/10 shadow-xl"
            />
            <span className="absolute -bottom-3 right-4 px-3 py-1 rounded-full bg-primary text-surface-bright font-mono text-[11px] tracking-wider uppercase">
              Principal
            </span>
          </div>

          <div className="flex flex-col mt-2">
            <h2 className="font-headline-sm text-headline-sm text-primary font-medium">
              {aboutData.principal.name}
            </h2>
            <span className="font-label-sm text-label-sm text-secondary font-mono tracking-widest">
              {aboutData.principal.credentials}
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <blockquote className="font-headline-sm text-headline-sm italic text-primary/90 pl-5 border-l-4 border-secondary leading-relaxed font-light">
            {aboutData.principal.quote}
          </blockquote>
          
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            {aboutData.principal.bio}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-label-sm font-mono text-secondary uppercase tracking-wider">
            <span>RIBA Fellow</span>
            <span>•</span>
            <span>AA London Alumni</span>
            <span>•</span>
            <span>Venice Biennale Exhibitor</span>
          </div>
        </div>

      </div>

      {/* Practice Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl bg-primary text-surface-bright">
        {aboutData.stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="font-headline-md text-headline-lg text-secondary-fixed font-light">
              {stat.value}
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Materiality & Studio Pillars */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Tectonic Integrity
          </span>
          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
            The Four Materiality Pillars
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Every DreamSpace residence is governed by physical truth in materials, refusing faux finishes or synthetic veneer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.materialPillars.map((pillar, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-4 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-surface-bright">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <span className="text-label-sm font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-surface-container text-secondary font-semibold">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="font-headline-sm text-title-lg text-primary font-medium">
                {pillar.title}
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Milestones & Timeline */}
      <div className="flex flex-col gap-8 border-t border-surface-container pt-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Chronology
          </span>
          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg text-primary font-normal">
            Studio Practice Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.milestones.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col gap-2">
              <span className="font-headline-md text-title-lg text-secondary font-mono">
                {item.year}
              </span>
              <h4 className="font-headline-sm text-title-md text-primary font-semibold">
                {item.title}
              </h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
            Ready to explore our residential typologies?
          </h3>
          <p className="text-body-md text-on-surface-variant">
            Inspect our 6 signature architectural blueprints or schedule a private concept interview.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/designs"
            className="px-6 py-3 rounded-full bg-primary text-surface-bright font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container transition-all shadow-sm"
          >
            Explore Blueprints
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-surface-bright text-primary border border-surface-container-highest font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-surface-container-high transition-colors"
          >
            Contact Atelier
          </Link>
        </div>
      </div>

    </div>
  );
}

