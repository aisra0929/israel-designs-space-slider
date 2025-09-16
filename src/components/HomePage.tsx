import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import hero carousel images
import heroImage1 from '@/assets/hero/T-1.png';
import heroImage2 from '@/assets/hero/t-2.png';
import heroImage3 from '@/assets/hero/t-3.png';
import heroBg from '@/assets/hero-bg.jpg';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroItems = [
    { id: 1, image: heroImage1, name: "Essential Black Tee", price: "$49" },
    { id: 2, image: heroImage2, name: "Premium Gray Hoodie", price: "$89" },
    { id: 3, image: heroImage3, name: "Pure White Essential", price: "$49" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div 
        className="h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-amber-500/70 to-yellow-600/80" />
        
        {/* Background Brand Text */}
        <div className={`
          absolute inset-0 flex items-center justify-center z-10
          transition-all duration-1000 delay-300
          ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-95'}
        `}>
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-condensed font-black text-white/20 select-none pointer-events-none tracking-tighter">
            ISRAEL DESIGNS
          </h1>
        </div>

        {/* Carousel Container */}
        <div className={`
          relative z-20 flex items-center justify-center w-full max-w-7xl mx-auto px-8
          transition-all duration-1000 delay-600
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Carousel Items */}
          <div className="relative w-full max-w-4xl mx-auto">
            {heroItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out
                  ${index === currentSlide 
                    ? 'opacity-100 scale-100 z-20' 
                    : index === (currentSlide - 1 + heroItems.length) % heroItems.length
                    ? 'opacity-40 scale-75 -translate-x-32 z-10'
                    : index === (currentSlide + 1) % heroItems.length
                    ? 'opacity-40 scale-75 translate-x-32 z-10'
                    : 'opacity-0 scale-50 z-0'
                  }
                `}
              >
                {/* Product Image */}
                <div className="relative group cursor-pointer hover-3d">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle shadow beneath */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-8 bg-black/20 rounded-full blur-xl" />
                </div>

                {/* Product Info */}
                <div className="text-center mt-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.name}</h3>
                  <p className="text-xl md:text-2xl font-light opacity-90">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className={`
          absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30
          transition-all duration-1000 delay-900
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {heroItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full border-2 border-white/50 transition-all duration-300
                ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/40'}
              `}
            />
          ))}
        </div>
      </div>

      {/* Brand Philosophy Section */}
      <div className={`
        py-20 px-8 relative
        transition-all duration-1000 delay-1200
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 md:p-20 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
              The Future is Minimal
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              In a world of complexity, we choose simplicity. In a sea of trends, 
              we create timelessness. Every thread tells a story of innovation, 
              sustainability, and uncompromising quality.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl text-brand-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable Materials</div>
              </div>
              <div>
                <div className="text-2xl text-brand-secondary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Waste Production</div>
              </div>
              <div>
                <div className="text-2xl text-brand-accent mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Timeless Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;