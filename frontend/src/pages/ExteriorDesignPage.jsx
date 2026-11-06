import React from 'react';
import { Link } from 'react-router-dom';
import { exteriorsData } from '../data/exteriorsData';

export default function ExteriorDesignPage() {
  return (
    <div className="w-full bg-surface-bright text-on-surface py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl border-b border-surface-container pb-8">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Envelopes & Landscapes
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-md sm:text-headline-lg lg:text-[54px] text-primary font-normal leading-tight">
          Exterior Architecture & Landscape Integration
        </h1>
        <p className="font-body-md text-body-lg text-on-surface-variant font-light leading-relaxed">
          Dissolving the division between architecture and landscape. We engineer building envelopes that respond dynamically to sun paths, prevailing winds, and native topographical contours.
        </p>
      </div>

      {/* Exterior Categories Detailed Sections */}
      <div className="flex flex-col gap-16">
        {exteriorsData.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-surface-container ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Display */}
              <div className={`lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-bright/95 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Text Description & Technical Detail */}
              <div className={`lg:col-span-6 flex flex-col gap-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
                    {item.subtitle}
                  </span>
                  <h2 className="font-headline-lg text-headline-sm sm:text-headline-md text-primary font-normal">
                    {item.title}
                  </h2>
                </div>

                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>

                {/* Craft Elements */}
                <div className="flex flex-col gap-3 py-2">
                  {item.elements.map((el, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-headline-sm text-title-md text-primary font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {el.name}
                      </span>
                      <span className="text-body-sm text-on-surface-variant pl-3.5">
                        {el.description}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical Metric Box */}
                <div className="p-4 rounded-xl bg-surface-bright border border-surface-container grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  {Object.entries(item.technical).map(([key, val], i) => (
                    <div key={i} className="flex flex-col">
                      <span className="uppercase text-secondary text-[10px] tracking-wider">{key}</span>
                      <span className="text-primary font-medium">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-surface-bright font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container transition-all"
                  >
                    <span>Inquire Exterior Envelope</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sustainability & Passive House Standard callout */}
      <div className="p-8 sm:p-12 rounded-3xl bg-primary text-surface-bright flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
            Ecological Performance
          </span>
          <h3 className="font-headline-lg text-headline-sm sm:text-headline-md text-surface-bright font-normal">
            Passive House & Net-Zero Exterior Engineering
          </h3>
          <p className="text-on-primary-container text-body-md font-light leading-relaxed">
            Our envelope geometries minimize thermal bridging, utilize rainscreen cavities for natural vapor transpiration, and achieve airtightness thresholds exceeding European Passivhaus standards.
          </p>
        </div>

        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-secondary-fixed-dim transition-all shadow-lg shrink-0"
        >
          Consult Building Science Team
        </Link>
      </div>

    </div>
  );
}

