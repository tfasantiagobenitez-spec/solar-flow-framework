import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsPreview from "@/components/SolutionsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import SolarCalculatorPreview from "@/components/SolarCalculatorPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsPreview />
        <WhyChooseUs />
        <SolarCalculatorPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
