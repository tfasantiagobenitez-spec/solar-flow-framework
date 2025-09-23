import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
