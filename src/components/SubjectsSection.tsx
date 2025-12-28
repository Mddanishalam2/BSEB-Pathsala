import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Microscope, 
  Globe, 
  BookOpen, 
  Languages, 
  Palette,
  Computer,
  Heart,
  ArrowRight
} from 'lucide-react';

const SubjectsSection = () => {
  const subjects = [
    {
      icon: Calculator,
      name: 'Mathematics',
      description: 'Algebra, Geometry, Trigonometry, Statistics',
      classes: 'Classes 8-12',
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
      materials: '45+ Materials'
    },
    {
      icon: Heart,
      name: 'Urdu',
      description: 'Nasr aur Nazm',
      classes: 'Classes 8-12',
      color: 'bg-gradient-to-br from-green-400 to-green-600',
      materials: '50+ Materials'
    },
    {
      icon: Microscope,
      name: 'Science',
      description: 'Physics, Chemistry, Biology',
      classes: 'Classes 8-12',
      color: 'bg-gradient-to-br from-red-400 to-red-600',
      materials: '60+ Materials'
    },
    {
      icon: Globe,
      name: 'Social Science',
      description: 'History, Geography, Political Science, Economics',
      classes: 'Classes 8-12',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      materials: '40+ Materials'
    },
    {
      icon: BookOpen,
      name: 'English',
      description: 'Literature, Grammar, Writing Skills',
      classes: 'Classes 8-12',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      materials: '35+ Materials'
    },
    {
      icon: Languages,
      name: 'Hindi',
      description: 'Literature, Grammar, Composition',
      classes: 'Classes 8-12',
      color: 'bg-gradient-to-br from-sky-500 to-sky-600',
      materials: '30+ Materials'
    },
    {
      icon: Computer,
      name: 'Computer Science',
      description: 'Programming, Algorithms, Database',
      classes: 'Classes 11-12',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      materials: '25+ Materials'
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Explore Subjects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive study materials for all BSEB subjects from classes 8th to 12th
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 hover:border-primary/20"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {subject.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{subject.classes}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{subject.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{subject.materials}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all"
                    >
                      View Materials
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;