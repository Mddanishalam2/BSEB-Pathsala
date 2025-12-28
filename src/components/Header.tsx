import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, BookOpen, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
           < div className=""> 
      <img 
      src="/favicon.ico" 
      alt="Logo" 
      className="h-10 w-10"
       />
         </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">BSEB Pathsala</h1>
              <p className="text-xs text-muted-foreground">Key to better learning</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#subjects" className="text-foreground hover:text-primary transition-colors">
              Subjects
            </a>
            <a href="#materials" className="text-foreground hover:text-primary transition-colors">
              Study Materials
            </a>
            <a href="#papers" className="text-foreground hover:text-primary transition-colors">
              Previous Papers
            </a>
            <a href="#notes" className="text-foreground hover:text-primary transition-colors">
              Notes
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search materials..."
                className="pl-10 w-64 bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <Button variant="default" className="bg-gradient-primary hover:bg-primary-hover">
              <BookOpen className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search materials..."
                  className="pl-10 bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                  Home
                </a>
                <a href="#subjects" className="text-foreground hover:text-primary transition-colors py-2">
                  Subjects
                </a>
                <a href="#materials" className="text-foreground hover:text-primary transition-colors py-2">
                  Study Materials
                </a>
                <a href="#papers" className="text-foreground hover:text-primary transition-colors py-2">
                  Previous Papers
                </a>
                <a href="#notes" className="text-foreground hover:text-primary transition-colors py-2">
                  Notes
                </a>
              </nav>
              <Button variant="default" className="bg-gradient-primary hover:bg-primary-hover w-full">
                <BookOpen className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;