import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional software development marketplace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-6 bg-secondary/50 backdrop-blur-sm">
          <Zap className="w-4 h-4 mr-2" />
          Stop Bidding. Start Building.
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Quality Projects<br />Find You
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Skip the bidding wars. Access vetted, high-value software projects that match your expertise. 
          Join the marketplace where <strong className="text-foreground">demand comes to you</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="shadow-glow">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg">
            See How It Works
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">$512B</div>
              <div className="text-sm text-muted-foreground">Market Size</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">Vetted</div>
              <div className="text-sm text-muted-foreground">Developers Only</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;