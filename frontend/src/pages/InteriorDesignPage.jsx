import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { interiorsData } from '../data/interiorsData';

export default function InteriorDesignPage() {
  const [activeTab, setActiveTab] = useState(interiorsData[0].id);

  const activeItem = interiorsData.find((item) => item.id === activeTab) || interiorsData[0];

  return (
    <div className="w-full bg-surface-bright text-on-surface py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl border-b border-surface-container pb-8">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Tactile Atmospheres
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-md sm:text-headline-lg lg:text-[54px] text-primary font-normal leading-tight">
          Interior Architecture & Material Atelier
        </h1>
        <p className="font-body-md text-body-lg text-on-surface-variant font-light leading-relaxed">
          Five meticulously resolved residential living chambers. We compose spaces where tactile materiality, acoustic silence, and natural light calibrate the circadian rhythm of living.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {interiorsData.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all shrink-0 ${
              activeTab === tab.id
                ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
            }`}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>

      {/* Main Chamber Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Visual Display */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-surface-container">
            <img
              src={activeItem.image}
              alt={activeItem.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-surface-bright">
              <span className="px-3 py-1 rounded-full bg-surface-bright/90 backdrop-blur-md text-primary font-mono text-xs font-semibold">
                {activeItem.subtitle}
              </span>
            </div>
          </div>

          {/* Material Palette Swatches */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Raw Material Composition
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeItem.materials.map((mat, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-bright border border-surface-container">
                  <span
                    className="w-6 h-6 rounded-full border border-outline-variant shadow-inner shrink-0"
                    style={{ backgroundColor: mat.color }}
                  />
                  <div className="flex flex-col truncate">
                    <span className="text-xs font-medium text-primary truncate">{mat.name}</span>
                    <span className="text-[10px] text-on-surface-variant font-mono">{mat.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Specs & Architectural Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-secondary uppercase tracking-widest">
              Living Chamber Protocol
            </span>
            <h2 className="font-headline-lg text-headline-sm sm:text-headline-md text-primary font-normal">
              {activeItem.title}
            </h2>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {activeItem.description}
          </p>

          {/* Detailed Engineering Specifications */}
          <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-container border border-surface-container-high">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              Chamber Specifications
            </h4>
            <div className="flex flex-col divide-y divide-surface-container-highest">
              {activeItem.specs.map((spec, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant font-medium">{spec.label}</span>
                  <span className="font-mono text-xs text-primary font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              to="/contact"
              className="w-full py-3.5 px-6 rounded-xl bg-primary text-surface-bright text-center font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Commission Interior Architecture</span>
            </Link>
          </div>

        </div>

      </div>

      {/* Grid of All 5 Chambers */}
      <div className="flex flex-col gap-6 pt-10 border-t border-surface-container">
        <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
          Explore All Five Living Chambers
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {interiorsData.map((chamber) => (
            <div
              key={chamber.id}
              onClick={() => setActiveTab(chamber.id)}
              className={`cursor-pointer rounded-2xl overflow-hidden border p-3 flex flex-col gap-2 transition-all ${
                activeTab === chamber.id
                  ? 'border-primary ring-2 ring-primary/20 bg-surface-container-low'
                  : 'border-surface-container hover:border-secondary bg-surface-bright'
              }`}
            >
              <img
                src={chamber.image}
                alt={chamber.alt}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              <span className="font-headline-sm text-sm font-medium text-primary mt-1">
                {chamber.title}
              </span>
              <span className="text-[11px] text-secondary font-mono">
                {chamber.tabLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

