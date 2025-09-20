import { Shield, Award, Users, Wrench, DollarSign, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Ingeniería y Calidad",
      description: "Equipo de ingenieros expertos y certificaciones ISO 9001 para garantizar la máxima calidad en cada proyecto.",
      highlight: "Certificación ISO 9001"
    },
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description: "Más de 10 años de trayectoria y cientos de proyectos exitosos en todo el país. Líderes en el mercado argentino.",
      highlight: "+500 proyectos realizados"
    },
    {
      icon: Wrench,
      title: "Respaldo y Garantía",
      description: "Garantía oficial de equipos y un servicio postventa completo para asegurar tu tranquilidad durante toda la vida útil.",
      highlight: "Garantía hasta 25 años"
    },
    {
      icon: DollarSign,
      title: "Financiamiento Accesible",
      description: "Alianzas estratégicas con bancos y financieras para ofrecerte las mejores opciones de financiación del mercado.",
      highlight: "Hasta 60 cuotas"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada proyecto es único. Nuestro equipo te acompaña desde el primer contacto hasta años después de la instalación.",
      highlight: "Asesoramiento gratuito"
    },
    {
      icon: Leaf,
      title: "Impacto Ambiental",
      description: "Contribuí al cuidado del medio ambiente mientras ahorrás en tu factura. Energía limpia y renovable.",
      highlight: "0% emisiones"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos experiencia, tecnología de punta y un servicio integral para brindarte la mejor solución en energía solar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group bg-card rounded-xl p-6 shadow-solar hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 border border-border/50"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-solar rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">10+</div>
              <div className="text-white/80 text-sm">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-white/80 text-sm">Proyectos realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">25MW+</div>
              <div className="text-white/80 text-sm">Potencia instalada</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">95%</div>
              <div className="text-white/80 text-sm">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;