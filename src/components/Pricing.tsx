import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for freelancers getting started",
      features: [
        "Access to 5 projects/month",
        "Basic project templates",
        "Standard support",
        "Payment protection",
        "NDA templates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional", 
      price: "$99",
      period: "/month",
      description: "For serious developers and small teams",
      features: [
        "Unlimited project access",
        "Priority notifications", 
        "Advanced project filters",
        "Premium support",
        "Custom contract templates",
        "Client relationship tools",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Agency",
      price: "$199",
      period: "/month", 
      description: "For development agencies and larger teams",
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "Multi-developer assignments",
        "Agency branding options",
        "Dedicated account manager",
        "Custom integrations",
        "Priority project matching"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-accent/10">
            <Star className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Invest in Your Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One subscription unlocks unlimited access to quality projects. 
            <strong className="text-foreground">Pay once, earn forever.</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-border ${plan.popular ? 'bg-gradient-secondary shadow-glow scale-105' : 'bg-card'} transition-smooth`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                  <Zap className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;