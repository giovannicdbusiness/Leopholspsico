import React from 'react';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { TriageForm } from './components/TriageForm';

const App: React.FC = () => {
  const formRef = React.useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 pb-20 max-w-2xl mx-auto bg-white shadow-2xl min-[600px]:my-8 min-[600px]:rounded-[2rem] overflow-hidden">
      {/* 
        Container Logic:
        - Mobile: Full width, full height.
        - Desktop: Constrained width (max-w-2xl), centered, looks like a large phone app/Linktree.
      */}

      {/* Session 1: Hero */}
      <Hero onStartClick={scrollToForm} />

      {/* Session 2: Specialties */}
      <Specialties />

      {/* Session 3: Smart Form (with ID for anchor scroll) */}
      <div ref={formRef as any}>
        <TriageForm id="triagem" />
      </div>
    </div>
  );
};

export default App;