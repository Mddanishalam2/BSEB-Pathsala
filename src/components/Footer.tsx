import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
  { name: 'Study Materials', href: '#materials' },
  { name: 'Previous Papers', href: '#papers' },
  { name: 'Notes', href: '#notes' },
  { name: 'Sample Papers', href: '#' },
  { name: 'Mock Tests', href: '#' },
  ];

  const subjects = [
    'Mathematics',
    'Urdu',
    'Science',
    'Social Science',
    'English',
    'Hindi'
  ];

  const classes = [
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
           <div className=""> 
      <img 
      src="/favicon.ico" 
      alt="Logo" 
      className="h-10 w-10"
       />
         </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">BSEB Pathsala</h3>
                <p className="text-xs text-muted-foreground">Key to better learning</p>
              </div>
            </div>
            <p className="text-muted-foreground text-md leading-relaxed">
              Empowering BSEB students with comprehensive study materials, notes, and resources to excel in their academic journey.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-md text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>bsebpathsala786@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-md text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 7033416007</span>
              </div>
              <div className="flex items-center space-x-3 text-md text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nalanda, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-md"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Subjects</h4>
            <ul className="space-y-3">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <a 
                    href="#subjects" 
                    className="text-muted-foreground hover:text-primary transition-colors text-md"
                  >
                    {subject}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-md">
              Subscribe to get the latest study materials and updates.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-muted/50 border-border focus:border-primary"
              />
              <Button className="w-full bg-gradient-primary hover:shadow-soft">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-3">
  <a
    href="https://www.facebook.com/profile.php?id=61565560133804"
    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    style={{ backgroundColor: "#1877F2", color: "white" }} // Facebook
  >
    <Facebook className="h-6 w-6" />
  </a>
  
  <a
    href="https://www.instagram.com/"
    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
    style={{
      background:
        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    }} // Instagram gradient
  >
    <Instagram className="h-6 w-6" />
  </a>
  <a
    href="https://www.youtube.com/"
    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    style={{ backgroundColor: "#FF0000", color: "white" }} // YouTube
  >
    <Youtube className="h-6 w-6" />
  </a>
</div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 BSEB Pathsala. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;