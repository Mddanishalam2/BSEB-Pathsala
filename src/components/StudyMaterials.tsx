import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Clock, 
  Star,
  FileText,
  Video,
  Users
} from 'lucide-react';

const StudyMaterials = () => {
  const materials = [
    {
      title: 'Class 10 Mathematics - Quadratic Equations',
      type: 'PDF Guide',
      class: '10th',
      subject: 'Mathematics',
      downloads: 1250,
      rating: 4.8,
      size: '2.5 MB',
      pages: 45,
      icon: FileText,
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      title: 'Biology - Life Processes Complete Notes',
      type: 'Video Series',
      class: '10th',
      subject: 'Biology',
      downloads: 980,
      rating: 4.9,
      size: '120 MB',
      duration: '3.5 hrs',
      icon: Video,
      color: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      title: 'English Literature - Poetry Analysis',
      type: 'PDF Guide',
      class: '12th',
      subject: 'English',
      downloads: 850,
      rating: 4.7,
      size: '1.8 MB',
      pages: 32,
      icon: FileText,
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      title: 'Chemistry - Organic Compounds',
      type: 'Interactive Guide',
      class: '11th',
      subject: 'Chemistry',
      downloads: 720,
      rating: 4.6,
      size: '3.2 MB',
      pages: 58,
      icon: BookOpen,
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    {
      title: 'History - Indian Independence Movement',
      type: 'PDF Guide',
      class: '12th',
      subject: 'History',
      downloads: 650,
      rating: 4.8,
      size: '4.1 MB',
      pages: 67,
      icon: FileText,
      color: 'bg-red-100 text-red-700 border-red-200'
    },
    {
      title: 'Physics - Electricity and Magnetism',
      type: 'Video Series',
      class: '12th',
      subject: 'Physics',
      downloads: 1100,
      rating: 4.9,
      size: '95 MB',
      duration: '2.8 hrs',
      icon: Video,
      color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    }
  ];

  const categories = ['All', 'PDF Guides', 'Video Series', 'Interactive', 'Notes'];

  return (
    <section id="materials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Study Materials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access high-quality study materials curated by subject experts and experienced teachers
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-gradient-primary" : "hover:bg-primary/5"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => {
            const IconComponent = material.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 hover:border-primary/20"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg ${material.color} flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex items-center space-x-1 text-accent">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium text-foreground">{material.rating}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Class {material.class}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {material.subject}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                      {material.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{material.type}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{material.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{material.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-gradient-primary hover:shadow-soft"
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary/5 hover:border-primary"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
          >
            Load More Materials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials;