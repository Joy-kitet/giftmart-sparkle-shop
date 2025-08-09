import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Fresh Groceries
                <span className="block text-secondary-glow">Delivered Fast</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Get the freshest produce, quality groceries, and household essentials delivered to your doorstep in under 30 minutes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
              >
                View Deals
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">30min Delivery</p>
                  <p className="text-sm text-primary-foreground/80">Super fast</p>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">100% Fresh</p>
                  <p className="text-sm text-primary-foreground/80">Quality guaranteed</p>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">24/7 Service</p>
                  <p className="text-sm text-primary-foreground/80">Always open</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[500px] bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl">🛒</span>
                  </div>
                  <p className="text-primary-foreground/80 font-medium">Hero Image Placeholder</p>
                  <p className="text-sm text-primary-foreground/60">Fresh groceries & produce</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
              <span className="text-2xl">🥕</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <span className="text-xl">🍎</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16 text-background" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 74H1440V0C1440 0 1140 74 720 74S0 0 0 0V74Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;