import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SubjectsSection from '@/components/SubjectsSection';
import StudyMaterials from '@/components/StudyMaterials';
import PreviousPapers from '@/components/PreviousPapers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SubjectsSection />
        <StudyMaterials />
        <PreviousPapers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
