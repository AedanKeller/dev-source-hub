import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Shield, Clock, DollarSign } from "lucide-react";

const PostProject = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Vetted Developers Only",
      description: "Access our pre-qualified pool of expert developers"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Faster Hiring",
      description: "Skip the vetting process, start building immediately"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Fixed Project Costs",
      description: "No bidding wars, transparent milestone-based pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 bg-secondary/50">
            <Building2 className="w-4 h-4 mr-2" />
            For Businesses
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Post Your Software Project
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with vetted developers who deliver quality software solutions. 
            No bidding wars, no guesswork – just great results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border shadow-large">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">Project Details</CardTitle>
                <p className="text-muted-foreground">
                  Provide detailed information about your software project to get matched with the right developers.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Basic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="project-title">Project Title</Label>
                      <Input 
                        id="project-title" 
                        placeholder="e.g., E-commerce Mobile App"
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input 
                        id="company-name" 
                        placeholder="Your company name"
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project-description">Project Description</Label>
                    <Textarea 
                      id="project-description"
                      placeholder="Describe your project requirements, goals, and key features..."
                      className="min-h-[120px] bg-background"
                    />
                  </div>
                </div>

                {/* Project Type & Technology */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Project Specifications
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Project Type</Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="mobile-app">Mobile Application</SelectItem>
                          <SelectItem value="desktop-app">Desktop Application</SelectItem>
                          <SelectItem value="api">API Development</SelectItem>
                          <SelectItem value="automation">Automation Tool</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="12-months+">12+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="technologies">Required Technologies</Label>
                    <Input 
                      id="technologies"
                      placeholder="e.g., React, Node.js, PostgreSQL, AWS"
                      className="bg-background"
                    />
                  </div>
                </div>

                {/* Budget & Requirements */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Budget & Requirements
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="team-size">Preferred Team Size</Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Developer</SelectItem>
                          <SelectItem value="2-3">2-3 Developers</SelectItem>
                          <SelectItem value="4-6">4-6 Developers</SelectItem>
                          <SelectItem value="6+">6+ Developers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="additional-requirements">Additional Requirements</Label>
                    <Textarea 
                      id="additional-requirements"
                      placeholder="Specific skills, experience level, timezone preferences, etc."
                      className="bg-background"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input 
                        id="contact-name"
                        placeholder="Your full name"
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input 
                        id="contact-email"
                        type="email"
                        placeholder="your.email@company.com"
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number (Optional)</Label>
                    <Input 
                      id="contact-phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-background"
                    />
                  </div>
                </div>

                {/* Terms & Submit */}
                <div className="space-y-6 pt-8 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nda" />
                    <Label htmlFor="nda" className="text-sm">
                      I require all developers to sign an NDA before project discussion
                    </Label>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full shadow-medium">
                    Post Project & Get Matched
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Your project will be reviewed within 24 hours. We'll match you with qualified developers shortly after approval.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostProject;