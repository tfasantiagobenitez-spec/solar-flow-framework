import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-solar-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ahorrá en tu factura de luz y 
                <span className="block text-accent animate-glow">
                  olvidate de los cortes
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                Soluciones de energía solar para hogares, empresas y el campo en toda Argentina. 
                Generá tu propia energía limpia y sustentable.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-white/90">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Garantía Oficial</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Instalación Profesional</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Leaf className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Energía Limpia</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contacto">
                  Solicitá tu presupuesto personalizado
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/calculadora">
                  Calculá tu ahorro
                </Link>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-accent/20 border-2 border-white/30" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">+500 familias</span> ya confían en nosotros
              </div>
            </div>
          </div>

          {/* Right side - Statistics or additional content */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white">Beneficios Inmediatos</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Reducción en la factura</span>
                  <span className="text-2xl font-bold text-accent">hasta 95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Retorno de inversión</span>
                  <span className="text-2xl font-bold text-accent">3-5 años</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Vida útil del sistema</span>
                  <span className="text-2xl font-bold text-accent">+25 años</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Garantía de equipos</span>
                  <span className="text-2xl font-bold text-accent">10-25 años</span>
                </div>
              </div>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/calculadora">
                  Calcular mi ahorro específico
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;