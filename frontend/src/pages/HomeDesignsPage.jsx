import React, { useState } from 'react';
import { designsData } from '../data/designsData';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export default function HomeDesignsPage() {
  const { openPlanModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Typologies' },
    { id: 'modern', label: 'Modern Pavilion' },
    { id: 'luxury', label: 'Luxury Villa' },
    { id: 'traditional', label: 'Traditional Estate' },
    { id: 'micro', label: 'Micro-Lodge' },
    { id: 'duplex', label: 'Duplex' },
    { id: 'contemporary', label: 'Contemporary' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? designsData
    : designsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-surface-bright text-on-surface py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl border-b border-surface-container pb-8">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Architectural Typologies
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-md sm:text-headline-lg lg:text-[54px] text-primary font-normal leading-tight">
          Home Design Categories & Blueprints
        </h1>
        <p className="font-body-md text-body-lg text-on-surface-variant font-light leading-relaxed">
          Six signature residential typologies engineered for diverse natural and urban terrains. Click on any design to inspect schematic floor plans, CAD elevations, and spatial specifications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-surface-container-lowest border border-surface-container overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Visual Image */}
            <div className="relative aspect-[16/11] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-bright/95 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold shadow-sm">
                {project.typology}
              </span>

              <span className="absolute bottom-4 left-4 text-surface-bright font-mono text-label-sm font-semibold">
                {project.sqft}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between flex-1 gap-5">
              <div className="flex flex-col gap-2">
                <h2 className="font-headline-sm text-headline-sm text-primary font-medium group-hover:text-secondary transition-colors">
                  {project.title}
                </h2>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features Specs */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-surface-container text-body-sm text-on-surface-variant">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs truncate">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      {feat.icon}
                    </span>
                    <span className="truncate">{feat.text}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openPlanModal(project)}
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-surface-bright font-label-md text-label-md tracking-wider uppercase font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">straighten</span>
                  <span>Explore Blueprints</span>
                </button>

                <Link
                  to="/contact"
                  title="Commission Inquiries"
                  className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:bg-secondary hover:text-surface-bright transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Typology Specifications Comparison Table */}
      <div className="mt-8 p-8 rounded-3xl bg-surface-container-low border border-surface-container flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Comparative Matrix
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
            Architectural Typology Specifications
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-body-sm border-collapse">
            <thead>
              <tr className="border-b border-surface-container text-label-sm uppercase font-mono text-secondary">
                <th className="py-3 px-4 font-semibold">Residence</th>
                <th className="py-3 px-4 font-semibold">Typology</th>
                <th className="py-3 px-4 font-semibold">Enclosed Area</th>
                <th className="py-3 px-4 font-semibold">Accommodations</th>
                <th className="py-3 px-4 font-semibold">Orientation Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container text-on-surface-variant font-mono text-xs">
              {designsData.map((d) => (
                <tr key={d.id} className="hover:bg-surface-container transition-colors">
                  <td className="py-3 px-4 font-sans font-medium text-primary text-sm">
                    {d.title}
                  </td>
                  <td className="py-3 px-4">{d.typology}</td>
                  <td className="py-3 px-4 text-primary font-semibold">{d.sqft}</td>
                  <td className="py-3 px-4">{d.specs}</td>
                  <td className="py-3 px-4">{d.blueprint.orientation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

