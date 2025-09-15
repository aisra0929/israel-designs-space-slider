import { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import LandingAnimation from '@/components/LandingAnimation';
import HorizontalSlider from '@/components/HorizontalSlider';
import ProductModal from '@/components/ProductModal';
import AboutPage from '@/components/AboutPage';
import ContactPage from '@/components/ContactPage';

// Import product images
import tshirt1 from '@/assets/tshirt-1.png';
import tshirt2 from '@/assets/tshirt-2.png';
import tshirt3 from '@/assets/tshirt-3.png';
import tshirt4 from '@/assets/tshirt-4.png';
import hoodie1 from '@/assets/hoodie-1.png';
import hoodie2 from '@/assets/hoodie-2.png';
import sweatpants1 from '@/assets/sweatpants-1.png';
import sweatpants2 from '@/assets/sweatpants-2.png';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category: 'T-shirts' | 'Hoodies' | 'Sweatpants';
}

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'T-shirts' | 'Hoodies' | 'Sweatpants'>('T-shirts');

  // Product data with all clothing categories
  const products: Product[] = [
    // T-shirts
    {
      id: 1,
      name: "Essential Black Tee",
      price: "$49",
      image: tshirt1,
      category: 'T-shirts',
      description: "Our signature black tee crafted from premium organic cotton. Minimalist design meets maximum comfort in this timeless piece that forms the foundation of any modern wardrobe."
    },
    {
      id: 2,
      name: "Pure White Essential",
      price: "$49",
      image: tshirt2,
      category: 'T-shirts',
      description: "Clean, crisp, and endlessly versatile. This white tee embodies our philosophy of refined simplicity, featuring superior fabric quality and a perfect fit that elevates any look."
    },
    {
      id: 3,
      name: "Ocean Blue Minimal",
      price: "$52",
      image: tshirt3,
      category: 'T-shirts',
      description: "A sophisticated navy that speaks volumes without saying a word. This premium tee combines deep color saturation with our signature soft-touch finish for effortless style."
    },
    {
      id: 4,
      name: "Storm Gray Classic",
      price: "$52",
      image: tshirt4,
      category: 'T-shirts',
      description: "Understated elegance in a contemporary gray tone. Perfect for the modern minimalist, this tee offers versatility and comfort in equal measure."
    },
    // Hoodies
    {
      id: 5,
      name: "Midnight Black Hoodie",
      price: "$89",
      image: hoodie1,
      category: 'Hoodies',
      description: "Premium heavyweight hoodie crafted from organic cotton blend. Features a relaxed fit with ribbed cuffs and hem for ultimate comfort and style."
    },
    {
      id: 6,
      name: "Arctic White Hoodie",
      price: "$89",
      image: hoodie2,
      category: 'Hoodies',
      description: "Clean and minimalist hoodie design in pure white. Soft fleece interior meets durable exterior for the perfect balance of comfort and longevity."
    },
    // Sweatpants
    {
      id: 7,
      name: "Navy Comfort Sweats",
      price: "$69",
      image: sweatpants1,
      category: 'Sweatpants',
      description: "Tailored sweatpants that redefine casual wear. Featuring a contemporary fit with tapered legs and premium cotton-poly blend for all-day comfort."
    },
    {
      id: 8,
      name: "Gray Minimalist Sweats",
      price: "$69",
      image: sweatpants2,
      category: 'Sweatpants',
      description: "Elevated essentials in sophisticated gray. These sweatpants combine streetwear aesthetics with premium materials for effortless style."
    }
  ];

  // Filter products by category
  const filteredProducts = products.filter(product => product.category === selectedCategory);

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
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Each piece is crafted with precision, designed for the future, and built to last forever.
                </p>
                
                {/* Category Filter Dropdown */}
                <div className="flex justify-center mb-12">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as 'T-shirts' | 'Hoodies' | 'Sweatpants')}
                    className="glass px-6 py-3 rounded-xl text-lg font-medium text-foreground bg-background/50 border border-border/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all duration-300"
                  >
                    <option value="T-shirts">T-shirts</option>
                    <option value="Hoodies">Hoodies</option>
                    <option value="Sweatpants">Sweatpants</option>
                  </select>
                </div>
              </div>
              
              {/* Horizontal Parallax Slider */}
              <div className="relative">
                <HorizontalSlider 
                  products={filteredProducts} 
                  onProductClick={handleProductClick}
                />
              </div>
              
              {/* Show all categories in The Collection */}
              <div className="mt-20">
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
                    All Collections
                  </h3>
                </div>
                
                {/* Display all products from all categories */}
                <div className="relative">
                  <HorizontalSlider 
                    products={products} 
                    onProductClick={handleProductClick}
                  />
                </div>
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
