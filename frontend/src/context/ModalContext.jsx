import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "The Cantilever House",
    typology: "Modern Pavilion",
    sqft: "4,600 SQ FT",
    specs: "4 Beds • 4.5 Baths",
    highlights: [],
    level: "Level 01 • Schematic",
    scale: "Scale 1:100"
  });

  const openPlanModal = (data) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closePlanModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalData, openPlanModal, closePlanModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

