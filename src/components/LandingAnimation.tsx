import { useState, useEffect } from 'react';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [stage, setStage] = useState<'blank' | 'reveal' | 'slide' | 'complete'>('blank');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('reveal'), 800);
    const timer2 = setTimeout(() => setStage('slide'), 3300);
    const timer3 = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2); 
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-background to-brand-secondary/5" />
      
      {/* Floating particles */}
      {stage !== 'blank' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-primary/30 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-brand-secondary/30 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-brand-accent/20 rounded-full animate-float" />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-brand-primary/40 rounded-full animate-float-delayed" />
        </>
      )}
      
      {/* Brand text */}
      {stage !== 'blank' && (
        <h1 
          className={`
            brand-title text-shadow-glow relative z-10
            ${stage === 'reveal' ? 'animate-brand-reveal' : ''}
            ${stage === 'slide' ? 'animate-brand-slide' : ''}
          `}
        >
          ISRAEL DESIGNS
          
          {/* Shimmer effect */}
          {stage === 'reveal' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_100%]" />
          )}
        </h1>
      )}
      
      {/* Loading indicator */}
      {stage === 'slide' && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce [animation-delay:0.1s]" />
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce [animation-delay:0.2s]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingAnimation;