import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Bell, Handshake, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <UserCheck className="w-10 h-10 text-primary" />,
      title: "Get Vetted",
      description: "Complete our technical assessment and portfolio review. We ensure only quality developers join our marketplace."
    },
    {
      step: "02", 
      icon: <Bell className="w-10 h-10 text-primary" />,
      title: "Receive Matches",
      description: "Get notified of projects that match your skills and experience. No more endless searching or bidding."
    },
    {
      step: "03",
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Connect & Build",
      description: "Connect directly with pre-qualified clients. Start building with clear requirements and protected payments."
    },
    {
      step: "04",
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      title: "Get Paid",
      description: "Receive milestone payments automatically. Build your reputation and get access to even better projects."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How ProjectDev Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to transform your freelance career. 
            Join the platform where your expertise is valued and rewarded.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card border-border hover:shadow-medium transition-smooth h-full group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                    <div className="flex justify-center group-hover:scale-110 transition-bounce">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;