import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+54 11 5555-5555", "+54 11 6666-6666"],
      action: "Llamar ahora"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+54 9 11 5555-5555"],
      action: "Enviar mensaje"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@solartech.com.ar", "ventas@solartech.com.ar"],
      action: "Enviar email"
    },
    {
      icon: MapPin,
      title: "Oficina Central",
      details: ["Av. Corrientes 1234, Piso 8", "CABA, Argentina"],
      action: "Ver en mapa"
    }
  ];

  const offices = [
    {
      city: "Buenos Aires",
      address: "Av. Corrientes 1234, Piso 8",
      phone: "+54 11 5555-5555",
      email: "buenosaires@solartech.com.ar"
    },
    {
      city: "Córdoba",
      address: "Av. Vélez Sarsfield 567",
      phone: "+54 351 444-4444",
      email: "cordoba@solartech.com.ar"
    },
    {
      city: "Rosario",
      address: "San Martín 890, 2do Piso",
      phone: "+54 341 333-3333",
      email: "rosario@solartech.com.ar"
    },
    {
      city: "Mendoza",
      address: "San Martín 456, Oficina 12",
      phone: "+54 261 222-2222",
      email: "mendoza@solartech.com.ar"
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
              Contactanos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a dar el primer paso hacia la energía solar. 
              Contactanos para una consulta gratuita y sin compromiso.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-white/80">Respuesta</div>
                  <div className="text-xs text-white/60">En 24hs</div>
                </div>
                <div>
                  <Phone className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-white/80">Atención</div>
                  <div className="text-xs text-white/60">Lun a Vie 9-18hs</div>
                </div>
                <div>
                  <MessageSquare className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-white/80">WhatsApp</div>
                  <div className="text-xs text-white/60">24/7</div>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-white/80">Oficinas</div>
                  <div className="text-xs text-white/60">4 ciudades</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-solar border border-border/50">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Envianos tu Consulta
                  </h2>
                  <p className="text-muted-foreground">
                    Completá el formulario y nos comunicaremos contigo en menos de 24 horas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        placeholder="+54 11 5555-5555"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Asunto
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      >
                        <option value="">Seleccionar tema</option>
                        <option value="presupuesto">Solicitar presupuesto</option>
                        <option value="informacion">Información general</option>
                        <option value="financiacion">Opciones de financiación</option>
                        <option value="mantenimiento">Servicio técnico</option>
                        <option value="otros">Otros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                      placeholder="Contanos sobre tu proyecto o consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Consulta
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-solar transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          ))}
                          <button className="text-primary font-medium hover:text-accent transition-colors mt-2">
                            {info.action}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="font-medium">Cerrado</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between">
                      <span>WhatsApp</span>
                      <span className="font-medium text-accent">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestras Oficinas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tenemos presencia en las principales ciudades del país para brindarte atención personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-solar border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{office.city}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-sm">{office.address}</p>
                  <p className="font-medium">{office.phone}</p>
                  <p className="text-sm">{office.email}</p>
                </div>
                <button className="mt-4 text-primary font-medium hover:text-accent transition-colors">
                  Ver ubicación
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Preferís que te Contactemos?
          </h2>
          <p className="text-xl text-white/90">
            Dejanos tu número y uno de nuestros especialistas te llamará en el horario que prefieras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="tel"
              placeholder="Tu teléfono"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Solicitar Llamada
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;