import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const Hero = () => {
  const stats = [
    { icon: BookOpen, value: '500+', label: 'Study Materials' },
    { icon: Users, value: '10k+', label: 'Students' },
    { icon: Award, value: '5', label: 'Classes (8-12)' },
    { icon: Clock, value: '24/7', label: 'Access' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-secondary/10 rounded-full text-secondary font-medium text-sm border border-secondary/20">
                <Award className="h-4 w-4 mr-2" />
                Bihar School Examination Board
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Start Your
                <span className="bg-gradient-hero bg-clip-text text-transparent"> BSEB </span>
                Journey .
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Access comprehensive study materials, reference books, notes, and previous year question papers for classes 8th to 12th. Your success is our mission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium hover:scale-105 transition-all duration-300"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
           
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5 hover:border-primary transition-all duration-300"
                onClick={() => {
       document.getElementById("materials")?.scrollIntoView({ behavior: "smooth" });
  }}
              >
                Explore Materials
              </Button>
             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-3xl transform rotate-6"></div>
            <img
              src={heroImage}
              alt="Students studying together"
              className="relative w-full h-auto rounded-2xl shadow-strong object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;