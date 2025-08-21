import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">ProjectDev</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-smooth">Home</a>
          <a href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">How it Works</a>
          <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">Pricing</a>
          <a href="/post-project" className="text-muted-foreground hover:text-foreground transition-smooth">For Businesses</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">Join Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;