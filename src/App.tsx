import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionMethodology } from './components/SolutionMethodology';
import { SocialProof } from './components/SocialProof';
import { ExclusiveBonus } from './components/ExclusiveBonus';
import { Biography } from './components/Biography';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GradeLevelKey } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<GradeLevelKey>('fundamental2');

  const handleOpenModal = () => {
    setSelectedPlanForModal('fundamental2');
    setIsModalOpen(true);
  };

  const handleOpenModalWithPlan = (planId: GradeLevelKey) => {
    setSelectedPlanForModal(planId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header with Top Bar Contract */}
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* 2. Primeira dobra: Headline forte, preço com desconto e gatilho, botão de CTA */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 3. PROBLEMA */}
        <ProblemSection onOpenModal={handleOpenModal} />

        {/* 4. SOLUÇÃO + METODOLOGIA */}
        <SolutionMethodology onOpenModal={handleOpenModal} />

        {/* 5. PROVA SOCIAL */}
        <SocialProof onOpenModal={handleOpenModal} />

        {/* 6. BÔNUS EXCLUSIVO */}
        <ExclusiveBonus onOpenModal={handleOpenModal} />

        {/* 7. BIOGRAFIA */}
        <Biography />

        {/* 8. OFERTA */}
        <OfferSection onOpenModalWithPlan={handleOpenModalWithPlan} />

        {/* 9. GARANTIA (7 DIAS) */}
        <GuaranteeSection onOpenModal={handleOpenModal} />

        {/* 10. FAQ */}
        <FaqSection onOpenModal={handleOpenModal} />
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* Interactive Enrollment Modal with Confetti Celebration */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultPlanId={selectedPlanForModal}
      />

      {/* WhatsApp Conversion Float */}
      <FloatingWhatsApp />
    </div>
  );
}
