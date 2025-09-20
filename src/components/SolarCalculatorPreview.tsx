import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Leaf, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolarCalculatorPreview = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-accent animate-glow" />
                <span className="text-accent font-semibold">Calculadora Solar</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Calculá tu Ahorro Potencial
                <span className="block text-accent">en 2 Minutos</span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Descubrí cuántos paneles necesitás y cuánto podrías ahorrar en tu factura de luz 
                con nuestra herramienta de estimación personalizada.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Estimación de ahorro</div>
                  <div className="text-sm text-white/70">Anual y mensual</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">ROI calculado</div>
                  <div className="text-sm text-white/70">Tiempo de recuperación</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Impacto ambiental</div>
                  <div className="text-sm text-white/70">CO2 evitado</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Sistema recomendado</div>
                  <div className="text-sm text-white/70">Potencia y componentes</div>
                </div>
              </div>
            </div>

            <Button variant="accent" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/calculadora">
                Empezar a Calcular
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Calculator Preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Vista Previa de Resultados</h3>
              
              {/* Sample Result */}
              <div className="bg-white/10 rounded-xl p-6 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$85,000</div>
                  <div className="text-white/80">Ahorro anual estimado</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-accent">6.5 kWp</div>
                    <div className="text-sm text-white/70">Sistema recomendado</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-accent">3.8 años</div>
                    <div className="text-sm text-white/70">Recuperación inversión</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Impacto ambiental</span>
                    <Leaf className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-lg font-semibold text-accent">
                    Equivale a plantar 45 árboles por año
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm mb-4">
                  *Estimación basada en datos de radiación solar de tu zona
                </p>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/calculadora">
                    Obtener mi cálculo personalizado
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculatorPreview;