import React from 'react';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export default function BlueprintModal() {
  const { isOpen, modalData, closePlanModal } = useModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-md animate-fade-in"
      onClick={closePlanModal}
    >
      <div
        className="w-full max-w-lg bg-surface-bright rounded-2xl shadow-2xl p-6 flex flex-col gap-5 border border-surface-container max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-surface-container pb-4">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              {modalData.typology || "Architectural Typology"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary font-medium mt-0.5">
              {modalData.title || "Residence Blueprint"}
            </h3>
          </div>
          <button
            type="button"
            onClick={closePlanModal}
            aria-label="Close Blueprint"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Blueprint Visual Representation / CAD Schematic */}
        <div className="relative w-full aspect-[16/10] bg-surface-container-highest/60 rounded-xl border border-outline-variant overflow-hidden p-4 flex flex-col justify-between">
          {/* Blueprint Grid Lines Pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #032217 1px, transparent 1px), linear-gradient(to bottom, #032217 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top Info Bar */}
          <div className="relative z-10 flex items-center justify-between text-label-sm font-mono text-on-surface-variant">
            <span className="bg-surface-bright/80 px-2 py-0.5 rounded border border-outline-variant">
              {modalData.level || "LEVEL 01 • SCHEMATIC"}
            </span>
            <span className="bg-surface-bright/80 px-2 py-0.5 rounded border border-outline-variant">
              {modalData.scale || "SCALE 1:100"}
            </span>
          </div>

          {/* Center Schematic Graphic representation */}
          <div className="relative z-10 flex flex-col items-center justify-center py-4">
            <div className="w-48 h-28 border-2 border-primary/50 border-dashed rounded-lg flex items-center justify-center bg-surface-bright/50 backdrop-blur-xs relative">
              <span className="material-symbols-outlined text-4xl text-primary/40">floor_lamp</span>
              <div className="absolute -top-3 left-3 bg-primary text-surface-bright text-[9px] font-mono px-1.5 py-0.5 rounded">
                MASTER PAVILION
              </div>
              <div className="absolute -bottom-3 right-3 bg-secondary text-surface-bright text-[9px] font-mono px-1.5 py-0.5 rounded">
                TERRACE POOL
              </div>
            </div>
            <div className="mt-2 text-[11px] font-mono text-on-surface-variant">
              NORTH ORIENTATION ▲ 42° DEG
            </div>
          </div>

          {/* Bottom Dimensions */}
          <div className="relative z-10 flex items-center justify-between text-label-sm font-mono text-primary font-semibold">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">straighten</span>
              {modalData.sqft || "4,600 SQ FT"}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">bed</span>
              {modalData.specs || "4 Beds • 4.5 Baths"}
            </span>
          </div>
        </div>

        {/* Blueprint Specifications & Highlights */}
        <div className="flex flex-col gap-2">
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Architectural Highlights
          </h4>
          <ul className="flex flex-col gap-2 text-body-sm text-on-surface-variant">
            {modalData.blueprint?.highlights ? (
              modalData.blueprint.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{h}</span>
                </li>
              ))
            ) : (
              <>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>Engineered with column-free structural cantilever spans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>High-performance triple-glazed thermal thermal envelope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>Integrates passive geothermal radiant heating and subterranean cooling.</span>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2 border-t border-surface-container">
          <Link
            to="/contact"
            onClick={closePlanModal}
            className="flex-1 py-3 px-4 rounded-xl bg-primary text-surface-bright text-center font-label-md text-label-md tracking-wider uppercase hover:bg-primary-container transition-all shadow-sm font-semibold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>Inquire Full Dossier</span>
          </Link>
          <button
            type="button"
            onClick={closePlanModal}
            className="py-3 px-4 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md tracking-wider uppercase hover:bg-surface-container-high transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

