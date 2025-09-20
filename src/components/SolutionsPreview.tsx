import { Button } from "@/components/ui/button";
import { Home, Building2, Tractor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsPreview = () => {
  const solutions = [
    {
      icon: Home,
      title: "Para tu Hogar",
      description: "Sistemas residenciales que reducen tu factura hasta un 95% y te dan independencia energética.",
      benefits: ["Instalación rápida", "Financiación disponible", "Garantía extendida"],
      href: "/soluciones/hogar",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Building2,
      title: "Para tu Empresa",
      description: "Soluciones industriales y comerciales que optimizan costos operativos y mejoran la competitividad.",
      benefits: ["ROI garantizado", "Sistemas escalables", "Mantenimiento incluido"],
      href: "/soluciones/empresas",
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: Tractor,
      title: "Para el Agro",
      description: "Electrificación rural, bombeo solar y sistemas off-grid para el sector agropecuario.",
      benefits: ["Sin conexión a red", "Bombeo 24/7", "Resistente al clima"],
      href: "/soluciones/agro",
      gradient: "from-accent to-accent/80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Soluciones Energéticas
            <span className="block text-primary">Para Cada Necesidad</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde hogares familiares hasta grandes industrias, tenemos la solución solar perfecta para tu proyecto.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.title}
                className="bg-card rounded-2xl shadow-solar hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${solution.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                    <Icon className="h-24 w-24" />
                  </div>
                  <div className="relative z-10">
                    <Icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <Link to={solution.href}>
                      Ver soluciones
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl shadow-solar p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No sabés cuál es la mejor opción para vos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestros ingenieros especializados te asesoran sin costo para encontrar la solución perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contacto">
                  Asesoramiento Gratuito
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/calculadora">
                  Usar Calculadora Solar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;