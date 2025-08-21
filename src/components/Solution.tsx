import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Target, TrendingUp } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Curated Projects",
      description: "Only vetted, high-value software projects with clear requirements and proper budgets. No more guessing games."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Protected Payments",
      description: "Milestone-based payments with built-in escrow. Get paid for your work, guaranteed. NDAs included."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Pre-Qualified Clients",
      description: "We verify client budgets and requirements before projects go live. Only serious businesses allowed."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Premium Rates",
      description: "No bidding wars. Fair market rates for quality work. Clients pay for expertise, not the cheapest option."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            The ProjectDev Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We flip the script. Instead of you chasing projects, 
            <strong className="text-foreground"> quality projects find you</strong>. 
            Subscribe once, access forever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-secondary border-border hover:shadow-medium transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-bounce">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;