import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, Shield } from "lucide-react";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Somos una empresa argentina líder en energía solar con más de 10 años de experiencia, 
              comprometida con el futuro sustentable del país.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nuestra Historia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada en 2013, SolarTech Argentina nació con la visión de democratizar el acceso a la energía limpia 
                en nuestro país. Comenzamos como un pequeño equipo de ingenieros apasionados por las energías renovables 
                y hoy somos una de las empresas líderes del sector.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A lo largo de estos años, hemos instalado más de 25MW de potencia en todo el territorio nacional, 
                ayudando a familias y empresas a reducir sus costos energéticos mientras contribuyen al cuidado del medio ambiente.
              </p>
            </div>
            <div className="bg-gradient-solar/10 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-muted-foreground">Años de experiencia</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Proyectos realizados</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">25MW+</div>
                  <div className="text-muted-foreground">Potencia instalada</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-muted-foreground">Clientes satisfechos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Excelencia</h3>
              <p className="text-muted-foreground">
                Comprometidos con la más alta calidad en cada proyecto y servicio que brindamos.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Confianza</h3>
              <p className="text-muted-foreground">
                Construimos relaciones duraderas basadas en la transparencia y el cumplimiento.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Innovación</h3>
              <p className="text-muted-foreground">
                Adoptamos las últimas tecnologías para ofrecer soluciones de vanguardia.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Compromiso</h3>
              <p className="text-muted-foreground">
                Dedicados al éxito de nuestros clientes y al futuro sustentable del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profesionales altamente capacitados comprometidos con la excelencia en energía solar.
            </p>
          </div>

          <div className="bg-gradient-solar rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Querés formar parte de nuestro equipo?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Estamos siempre en búsqueda de profesionales talentosos que compartan nuestra pasión 
              por las energías renovables y quieran contribuir al futuro sustentable de Argentina.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Ver Oportunidades Laborales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;