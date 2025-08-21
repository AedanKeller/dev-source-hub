import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Stop Chasing Projects?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join 1,000+ vetted developers who've transformed their careers with ProjectDev. 
            <br className="hidden md:block" />
            Quality projects, fair rates, guaranteed payments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="shadow-glow">
              Start Your 14-Day Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            ✓ No credit card required ✓ Full access during trial ✓ Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;