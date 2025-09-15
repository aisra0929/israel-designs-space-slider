const AboutPage = () => {
  return (
    <div className="min-h-screen py-20 px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-light mb-6 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            About
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </div>

        {/* Story Section - Parallax layers */}
        <div className="relative">
          {/* Background layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl transform rotate-1" />
          
          {/* Content layer */}
          <div className="relative glass p-12 md:p-20 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-foreground">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    ISRAEL DESIGNS was born from a vision to create clothing that transcends 
                    traditional boundaries. We believe in the power of minimal design to make 
                    maximum impact.
                  </p>
                  <p>
                    Each piece in our collection is carefully crafted with attention to detail, 
                    sustainable materials, and a commitment to timeless style. We don't just 
                    make t-shirts – we create wearable art.
                  </p>
                  <p>
                    Our futuristic approach combines cutting-edge design with classic comfort, 
                    resulting in pieces that feel as good as they look.
                  </p>
                </div>
              </div>
              
              {/* Floating design elements */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl relative overflow-hidden">
                  {/* Abstract floating shapes */}
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-brand-primary/30 rounded-full animate-float blur-sm" />
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-brand-secondary/30 rounded-full animate-float-delayed blur-sm" />
                  <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-brand-accent/20 rounded-full animate-float blur-sm" />
                  
                  {/* Center logo area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-light text-brand-primary/50">
                      ID
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Minimal Design",
              description: "Clean lines and purposeful aesthetics that speak volumes without saying too much.",
              icon: "◇"
            },
            {
              title: "Premium Quality",
              description: "Every thread, every stitch, every detail is crafted with uncompromising attention to quality.",
              icon: "◆"
            },
            {
              title: "Future Forward",
              description: "Pushing the boundaries of fashion technology while honoring timeless style principles.",
              icon: "◈"
            }
          ].map((value, index) => (
            <div key={index} className="group">
              <div className="glass p-8 rounded-2xl h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                <div className="text-4xl text-brand-primary mb-6 text-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-center text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <div className="glass p-12 rounded-3xl inline-block">
            <h3 className="text-3xl font-light mb-4 text-foreground">
              Join the Movement
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Be part of a community that values quality, design, and innovation. 
              Experience the future of fashion with ISRAEL DESIGNS.
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-brand-secondary rounded-full animate-pulse [animation-delay:0.2s]" />
              <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse [animation-delay:0.4s]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;