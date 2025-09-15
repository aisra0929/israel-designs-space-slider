import { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import LandingAnimation from '@/components/LandingAnimation';
import HorizontalSlider from '@/components/HorizontalSlider';
import ProductModal from '@/components/ProductModal';
import AboutPage from '@/components/AboutPage';
import ContactPage from '@/components/ContactPage';

// Import T-shirt images
import tshirt1 from '@/assets/tshirt-1.png';
import tshirt2 from '@/assets/tshirt-2.png';
import tshirt3 from '@/assets/tshirt-3.png';
import tshirt4 from '@/assets/tshirt-4.png';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Product data with generated T-shirt images
  const products: Product[] = [
    {
      id: 1,
      name: "Essential Black Tee",
      price: "$49",
      image: tshirt1,
      description: "Our signature black tee crafted from premium organic cotton. Minimalist design meets maximum comfort in this timeless piece that forms the foundation of any modern wardrobe."
    },
    {
      id: 2,
      name: "Pure White Essential",
      price: "$49",
      image: tshirt2,
      description: "Clean, crisp, and endlessly versatile. This white tee embodies our philosophy of refined simplicity, featuring superior fabric quality and a perfect fit that elevates any look."
    },
    {
      id: 3,
      name: "Ocean Blue Minimal",
      price: "$52",
      image: tshirt3,
      description: "A sophisticated navy that speaks volumes without saying a word. This premium tee combines deep color saturation with our signature soft-touch finish for effortless style."
    },
    {
      id: 4,
      name: "Storm Gray Classic",
      price: "$52",
      image: tshirt4,
      description: "Understated elegance in a contemporary gray tone. Perfect for the modern minimalist, this tee offers versatility and comfort in equal measure."
    },
    {
      id: 5,
      name: "Midnight Black Pro",
      price: "$59",
      image: tshirt1,
      description: "The ultimate in premium basics. Enhanced with moisture-wicking technology and reinforced seams, this is where performance meets style in perfect harmony."
    },
    {
      id: 6,
      name: "Arctic White Luxe",
      price: "$59",
      image: tshirt2,
      description: "Luxury redefined in pure white. Featuring our finest cotton blend and precision construction, this tee represents the pinnacle of contemporary casual wear."
    }
  ];

  const handleLandingComplete = () => {
    setShowLanding(false);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      case 'shop':
      default:
        return (
          <div className="min-h-screen relative">
            {/* Hero Section */}
            <div className="h-screen flex items-center justify-center relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 gradient-bg" />
              
              {/* Floating geometric shapes */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary/10 rounded-full animate-float blur-xl" />
              <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-brand-secondary/10 rounded-full animate-float-delayed blur-xl" />
              <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-brand-accent/5 rounded-full animate-float blur-xl" />
              
              {/* Main brand text after landing animation */}
              <div className="relative z-10 text-center">
                <h1 className="brand-title mb-6">
                  ISRAEL DESIGNS
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Minimal. Futuristic. Essential.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse [animation-delay:0.4s]" />
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="relative py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-light mb-6 text-foreground">
                  The Collection
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Each piece is crafted with precision, designed for the future, and built to last forever.
                </p>
              </div>
              
              {/* Horizontal Parallax Slider */}
              <div className="relative">
                <HorizontalSlider 
                  products={products} 
                  onProductClick={handleProductClick}
                />
              </div>
            </div>

            {/* Brand Philosophy Section */}
            <div className="py-20 px-8">
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
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Landing Animation */}
        {showLanding && <LandingAnimation onComplete={handleLandingComplete} />}

        {/* Navigation */}
        {!showLanding && (
          <Navigation 
            currentPage={currentPage} 
            onPageChange={setCurrentPage} 
          />
        )}

        {/* Page Content */}
        {!showLanding && renderCurrentPage()}

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;
