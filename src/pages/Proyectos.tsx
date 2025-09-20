import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, MapPin, Calendar, Zap, Building2, Home, Tractor, ExternalLink } from "lucide-react";
import { useState } from "react";

const Proyectos = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  
  const filters = ["Todos", "Residencial", "Comercial", "Industrial", "Agro"];
  
  const projects = [
    {
      id: 1,
      title: "Casa Familia González",
      client: "Residencial",
      location: "San Isidro, Buenos Aires",
      power: "6.5 kWp",
      panels: 20,
      savings: "85%",
      date: "2024",
      category: "Residencial",
      image: "/placeholder.svg",
      description: "Sistema on-grid que reduce la factura eléctrica familiar en un 85%. Instalación en techo con orientación norte óptima."
    },
    {
      id: 2,
      title: "Planta Industrial Techint",
      client: "Techint Group",
      location: "Campana, Buenos Aires", 
      power: "2.5 MW",
      panels: 7500,
      savings: "70%",
      date: "2024",
      category: "Industrial",
      image: "/placeholder.svg",
      description: "Megaproyecto industrial con seguimiento solar para maximizar la generación de energía limpia."
    },
    {
      id: 3,
      title: "Campo Los Álamos",
      client: "Estancia Ganadera",
      location: "General Villegas, Buenos Aires",
      power: "45 kWp", 
      panels: 150,
      savings: "90%",
      date: "2024",
      category: "Agro",
      image: "/placeholder.svg",
      description: "Sistema híbrido para bombeo de agua y electrificación rural completa con respaldo de baterías."
    },
    {
      id: 4,
      title: "Shopping Las Flores",
      client: "Centro Comercial",
      location: "Córdoba Capital",
      power: "350 kWp",
      panels: 1000,
      savings: "65%",
      date: "2023",
      category: "Comercial",
      image: "/placeholder.svg",
      description: "Instalación en techos de shopping center con sistema de monitoreo inteligente y gestión de demanda."
    },
    {
      id: 5,
      title: "Barrio Cerrado Nordelta",
      client: "Consorcio Residencial",
      location: "Tigre, Buenos Aires",
      power: "180 kWp",
      panels: 600,
      savings: "75%",
      date: "2023",
      category: "Residencial",
      image: "/placeholder.svg",
      description: "Proyecto comunitario que abastece áreas comunes y 40 viviendas con energía solar."
    },
    {
      id: 6,
      title: "Frigorífico Regional",
      client: "Industria Alimentaria",
      location: "Rosario, Santa Fe",
      power: "1.2 MW",
      panels: 3600,
      savings: "60%",
      date: "2023",
      category: "Industrial",
      image: "/placeholder.svg",
      description: "Sistema diseñado para alta demanda energética con refrigeración industrial y procesos continuos."
    }
  ];

  const filteredProjects = selectedFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Residencial": return Home;
      case "Comercial": return Building2;
      case "Industrial": return Building2;
      case "Agro": return Tractor;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Residencial": return "bg-blue-500";
      case "Comercial": return "bg-green-500";
      case "Industrial": return "bg-purple-500";
      case "Agro": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Proyectos Realizados
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Más de 500 proyectos exitosos en toda Argentina. Conocé nuestro trabajo y los resultados que hemos logrado para nuestros clientes.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-white/80">Proyectos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">25MW+</div>
                  <div className="text-white/80">Instalados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">23</div>
                  <div className="text-white/80">Provincias</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-white/80">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter
                      ? "bg-primary text-white"
                      : "bg-white text-foreground hover:bg-primary/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{filteredProjects.length} proyectos encontrados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div 
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-solar hover:shadow-glow transition-all duration-300 border border-border/50"
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-solar/20 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(project.category)}`}>
                        <CategoryIcon className="h-4 w-4 mr-1" />
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                      {project.savings} ahorro
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium">{project.client}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Zap className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.power}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <span className="text-sm">📋 {project.panels} paneles</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all group flex items-center justify-center">
                      Ver Proyecto Completo
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Querés que tu proyecto sea el próximo?
          </h2>
          <p className="text-xl text-white/90">
            Contactános para una consulta gratuita y descubrí cómo podemos ayudarte a generar tu propia energía.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Solicitar Presupuesto Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Ver Más Proyectos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyectos;