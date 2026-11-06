import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'exterior', label: 'Exterior Architecture' },
    { id: 'interior', label: 'Interior Living' },
    { id: 'living', label: 'Salons & Ateliers' },
    { id: 'night', label: 'Night Illuminations' },
  ];

  const filteredGallery = selectedFilter === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category.includes(selectedFilter));

  return (
    <div className="w-full bg-surface-bright text-on-surface py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl border-b border-surface-container pb-8">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Archive of Works
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-md sm:text-headline-lg lg:text-[54px] text-primary font-normal leading-tight">
          Inspiration Gallery & Project Monographs
        </h1>
        <p className="font-body-md text-body-lg text-on-surface-variant font-light leading-relaxed">
          A visual record of residential works across Mallorca, Oslo, Kyoto, Aspen, and Zurich. Click any image to open the architectural monograph viewer.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all shrink-0 ${
              selectedFilter === filter.id
                ? 'bg-primary text-surface-bright shadow-sm font-semibold'
                : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-surface-container"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Top Tag */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full bg-surface-bright/90 backdrop-blur-md text-primary font-mono text-[10px] uppercase font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Dark Gradient Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex flex-col justify-end p-6 text-surface-bright transform transition-transform duration-300">
              <span className="font-label-sm text-label-sm text-secondary-fixed font-mono tracking-wider">
                {item.location}
              </span>
              <h2 className="font-headline-sm text-headline-sm font-medium text-surface-bright mt-0.5 group-hover:text-secondary-fixed transition-colors">
                {item.title}
              </h2>
              <p className="text-body-sm text-surface-bright/80 line-clamp-2 mt-1 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-surface-bright/20 text-xs font-mono text-primary-fixed">
                <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                <span>Click to inspect monograph details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Detail Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface-bright rounded-3xl overflow-hidden shadow-2xl border border-surface-container flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-surface-bright/80 backdrop-blur-md text-primary flex items-center justify-center hover:bg-surface-bright transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-container pb-4">
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase text-secondary font-semibold">
                    {activePhoto.location}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
                    {activePhoto.title}
                  </h3>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setActivePhoto(null)}
                  className="px-5 py-2.5 rounded-full bg-primary text-surface-bright font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all self-start sm:self-auto"
                >
                  Commission Similar Project
                </Link>
              </div>

              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {activePhoto.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activePhoto.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-surface-container text-primary font-mono text-xs"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Archive Download Monograph Strip */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-surface-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
            Looking for high-resolution monograph prints?
          </h3>
          <p className="text-body-md text-on-surface-variant">
            We furnish curated hardbound monograph catalogues to prospective residential clients and architectural libraries.
          </p>
        </div>

        <Link
          to="/contact"
          className="px-6 py-3 rounded-full bg-primary text-surface-bright font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container transition-all shadow-sm shrink-0"
        >
          Request Catalogue
        </Link>
      </div>

    </div>
  );
}

