import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Building2, Tractor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Soluciones = () => {
  const solutions = [
    {
      icon: Home,
      title: "Soluciones para el Hogar",
      description: "Reduce tu factura de luz hasta un 90% con sistemas solares diseñados especialmente para residencias.",
      benefits: ["Ahorro inmediato", "Valor agregado a tu propiedad", "Independencia energética"],
      href: "/soluciones/hogar",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Soluciones para Empresas",
      description: "Optimiza los costos operativos de tu empresa con energía solar industrial y comercial.",
      benefits: ["ROI rápido", "Sustentabilidad corporativa", "Costos predecibles"],
      href: "/soluciones/empresas",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Tractor,
      title: "Soluciones para el Agro",
      description: "Lleva energía limpia al campo con sistemas especializados para el sector agropecuario.",
      benefits: ["Bombeo solar", "Electrificación rural", "Autonomía energética"],
      href: "/soluciones/agro",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Nuestras Soluciones
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Energía solar a medida para cada necesidad. Descubrí la solución perfecta para tu hogar, empresa o campo.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={solution.title}
                  className="group bg-card rounded-xl p-8 shadow-solar hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 border border-border/50"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link 
                      to={solution.href}
                      className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group/link"
                    >
                      Ver soluciones
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Servicios Adicionales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos un servicio integral para acompañarte en cada paso de tu transición energética.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Instalación</h3>
              <p className="text-muted-foreground">
                Instalación profesional con garantía y seguimiento técnico.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Gestión de Trámites</h3>
              <p className="text-muted-foreground">
                Nos encargamos de todos los trámites legales y permisos necesarios.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Financiación</h3>
              <p className="text-muted-foreground">
                Planes de financiación flexibles hasta 60 cuotas sin interés.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Mantenimiento</h3>
              <p className="text-muted-foreground">
                Servicio técnico especializado y mantenimiento preventivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Listo para comenzar tu proyecto solar?
          </h2>
          <p className="text-xl text-white/90">
            Contactános para una consulta gratuita y descubrí cómo la energía solar puede transformar tu negocio o hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Solicitar Presupuesto Gratuito
            </button>
            <Link 
              to="/calculadora"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Calcular mi Ahorro
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soluciones;