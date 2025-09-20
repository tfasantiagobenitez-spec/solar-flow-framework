import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Shield, Zap, Leaf, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SolucionesHogar = () => {
  const benefits = [
    "Reduce tu factura de luz hasta un 90%",
    "Incrementa el valor de tu propiedad",
    "Contribuye al cuidado del medio ambiente",
    "Sistema de respaldo en caso de cortes",
    "Garantía de 25 años en paneles solares",
    "Instalación en menos de 48 horas"
  ];

  const systems = [
    {
      title: "Sistema On-Grid",
      description: "Conectado a la red eléctrica. Ideal para reducir la factura de luz.",
      power: "3-10 kWp",
      price: "Desde $2.500.000",
      features: ["Inyección de excedentes", "Medidor bidireccional", "Monitoreo en tiempo real"]
    },
    {
      title: "Sistema Off-Grid",
      description: "Autonomía total con baterías. Perfecto para zonas sin conexión eléctrica.",
      power: "2-8 kWp",
      price: "Desde $3.200.000",
      features: ["100% autónomo", "Respaldo con baterías", "Ideal para casas de campo"]
    },
    {
      title: "Sistema Híbrido",
      description: "Lo mejor de ambos mundos. Conectado a la red con respaldo de baterías.",
      power: "4-12 kWp",
      price: "Desde $4.100.000",
      features: ["Respaldo automático", "Máximo aprovechamiento", "Gestión inteligente"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Home className="h-8 w-8 text-accent" />
                <span className="text-accent font-medium">Soluciones para el Hogar</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Energía Solar para tu Casa
              </h1>
              <p className="text-xl text-white/90">
                Transformá tu hogar en una central de energía limpia. Ahorrá en tu factura de luz 
                y contribuí al cuidado del medio ambiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Solicitar Presupuesto Gratuito
                </button>
                <Link 
                  to="/calculadora"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  <Calculator className="inline h-5 w-5 mr-2" />
                  Calcular mi Ahorro
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Ahorro Promedio</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent">80%</div>
                    <div className="text-white/80 text-sm">Reducción en factura</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">7 años</div>
                    <div className="text-white/80 text-sm">Retorno de inversión</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">25 años</div>
                    <div className="text-white/80 text-sm">Vida útil garantizada</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">+50%</div>
                    <div className="text-white/80 text-sm">Valor de propiedad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Beneficios de la Energía Solar Residencial
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubrí por qué miles de familias argentinas ya eligieron la energía solar para sus hogares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tipos de Sistemas Solares
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elegí el sistema que mejor se adapte a las necesidades de tu hogar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <div 
                key={system.title}
                className="bg-card rounded-xl p-8 shadow-solar hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{system.title}</h3>
                    <p className="text-muted-foreground">{system.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Potencia:</span>
                      <span className="font-semibold text-foreground">{system.power}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Precio:</span>
                      <span className="font-bold text-primary text-xl">{system.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Características:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Proceso de Instalación
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un proceso simple y transparente, de principio a fin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">Consulta Gratuita</h3>
              <p className="text-muted-foreground">
                Evaluamos tu consumo y diseñamos el sistema ideal para tu hogar.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">Propuesta Personalizada</h3>
              <p className="text-muted-foreground">
                Recibís un presupuesto detallado con análisis de rentabilidad.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">Instalación</h3>
              <p className="text-muted-foreground">
                Instalación profesional en menos de 48 horas por nuestro equipo certificado.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground">Disfrute</h3>
              <p className="text-muted-foreground">
                Comenzá a ahorrar inmediatamente con tu nuevo sistema solar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comenzá a Ahorrar Hoy Mismo
          </h2>
          <p className="text-xl text-white/90">
            Unite a miles de familias que ya disfrutan de los beneficios de la energía solar.
            Obtené tu presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              <Shield className="inline h-5 w-5 mr-2" />
              Presupuesto Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              <Zap className="inline h-5 w-5 mr-2" />
              WhatsApp: 11-5555-5555
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolucionesHogar;