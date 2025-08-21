import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Search, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <Search className="w-8 h-8 text-destructive" />,
      title: "Endless Bidding Wars",
      description: "Compete with 50+ developers on price, not quality. Race to the bottom pricing destroys your value."
    },
    {
      icon: <Clock className="w-8 h-8 text-destructive" />,
      title: "Time Wasted",
      description: "Hours spent crafting proposals for low-quality projects. Most applications get ignored completely."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-destructive" />,
      title: "Unclear Requirements",
      description: "Vague project descriptions lead to scope creep, disputes, and unpaid work. No protection for developers."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      title: "Payment Risks",
      description: "No guarantee of payment. Clients can disappear after work is completed. No structured milestone system."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            The Developer's Dilemma
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional freelance platforms are broken. They prioritize cheap over quality, 
            leaving skilled developers fighting for scraps instead of building great software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;