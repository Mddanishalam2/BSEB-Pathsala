import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Download, 
  Eye, 
  Clock, 
  FileText,
  TrendingUp
} from 'lucide-react';

const PreviousPapers = () => {
  const papers = [
    {
      title: 'BSEB Class 10 Mathematics',
      year: '2024',
      type: 'Annual Exam',
      duration: '3 hours',
      marks: '100',
      downloads: 2150,
      difficulty: 'Medium',
      subjects: ['Algebra', 'Geometry', 'Statistics']
    },
    {
      title: 'BSEB Class 12 Physics',
      year: '2024',
      type: 'Annual Exam',
      duration: '3 hours',
      marks: '70',
      downloads: 1890,
      difficulty: 'Hard',
      subjects: ['Mechanics', 'Thermodynamics', 'Optics']
    },
    {
      title: 'BSEB Class 10 Science',
      year: '2023',
      type: 'Annual Exam',
      duration: '3 hours',
      marks: '80',
      downloads: 2400,
      difficulty: 'Medium',
      subjects: ['Physics', 'Chemistry', 'Biology']
    },
    {
      title: 'BSEB Class 12 Chemistry',
      year: '2024',
      type: 'Annual Exam',
      duration: '3 hours',
      marks: '70',
      downloads: 1670,
      difficulty: 'Hard',
      subjects: ['Organic', 'Inorganic', 'Physical']
    },
    {
      title: 'BSEB Class 11 Mathematics',
      year: '2023',
      type: 'Annual Exam',
      duration: '3 hours',
      marks: '100',
      downloads: 1520,
      difficulty: 'Medium',
      subjects: ['Trigonometry', 'Calculus', 'Coordinate Geometry']
    },
    {
      title: 'BSEB Class 10 English',
      year: '2024',
      type: 'Annual Exam',
      duration: '3 hours',
      marks: '100',
      downloads: 1980,
      difficulty: 'Easy',
      subjects: ['Literature', 'Grammar', 'Writing']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="papers" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Previous Year Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice with authentic BSEB question papers from previous years to ace your exams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 hover:border-primary/20"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {paper.year}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                    {paper.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{paper.type}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{paper.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{paper.marks} marks</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getDifficultyColor(paper.difficulty)}`}
                  >
                    {paper.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {paper.downloads} downloads
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Topics covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {paper.subjects.slice(0, 3).map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
          >
            View All Papers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviousPapers;