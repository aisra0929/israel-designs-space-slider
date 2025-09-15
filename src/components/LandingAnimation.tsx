import { useState, useEffect, useRef } from 'react';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [stage, setStage] = useState<'blank' | 'reveal' | 'slide' | 'complete'>('blank');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (stage === 'complete') return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Moving rainbow gradient background */}
      <div 
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
            #ff6b6b 0%, 
            #4ecdc4 25%, 
            #45b7d1 50%, 
            #96ceb4 75%, 
            #feca57 100%)`,
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Blurred background overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-background/20" />
      
      {/* Floating particles */}
      {stage !== 'blank' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-primary/30 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-brand-secondary/30 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-brand-accent/20 rounded-full animate-float" />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-brand-primary/40 rounded-full animate-float-delayed" />
        </>
      )}
      
      {/* Split Brand text animation */}
      {stage !== 'blank' && (
        <div className="relative z-10 flex items-center justify-center">
          {/* Left part - ISRAEL */}
          <h1 
            className={`
              brand-title text-shadow-glow
              ${stage === 'reveal' ? 'animate-split-left' : ''}
              ${stage === 'slide' ? 'animate-brand-slide-nav' : ''}
            `}
          >
            ISRAEL
          </h1>
          
          {/* Space between words */}
          <span 
            className={`
              brand-title text-shadow-glow mx-2
              ${stage === 'reveal' ? 'animate-brand-reveal' : ''}
              ${stage === 'slide' ? 'animate-brand-slide-nav' : ''}
            `}
          >
            {/* Space */}
          </span>
          
          {/* Right part - DESIGNS */}
          <h1 
            className={`
              brand-title text-shadow-glow
              ${stage === 'reveal' ? 'animate-split-right' : ''}
              ${stage === 'slide' ? 'animate-brand-slide-nav' : ''}
            `}
          >
            DESIGNS
          </h1>
          
          {/* Shimmer effect */}
          {stage === 'reveal' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_100%]" />
          )}
        </div>
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