import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Instalación Residencial Premium",
      client: "Familia González",
      location: "Nordelta, Buenos Aires",
      power: "8.5 kWp",
      date: "2024",
      description: "Sistema completo con baterías de respaldo para independencia energética total.",
      image: "/api/placeholder/400/300",
      category: "Residencial",
      savings: "90%"
    },
    {
      id: 2,
      title: "Complejo Industrial Textil",
      client: "Industrias del Norte S.A.",
      location: "Córdoba Capital",
      power: "150 kWp",
      date: "2024",
      description: "Gran instalación industrial que redujo significativamente los costos operativos.",
      image: "/api/placeholder/400/300", 
      category: "Industrial",
      savings: "75%"
    },
    {
      id: 3,
      title: "Proyecto Agropecuario",
      client: "Estancia San Miguel",
      location: "Santa Fe",
      power: "45 kWp",
      date: "2023",
      description: "Sistema off-grid para bombeo solar y electrificación de instalaciones rurales.",
      image: "/api/placeholder/400/300",
      category: "Agro",
      savings: "100%"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Residencial": return "bg-primary/10 text-primary";
      case "Industrial": return "bg-secondary/10 text-secondary";
      case "Agro": return "bg-accent/10 text-accent";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Proyectos que nos
            <span className="block text-primary">Enorgullecen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conocé algunos de nuestros proyectos más destacados y los resultados excepcionales que logramos para nuestros clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-2xl shadow-solar hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 space-y-1">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <div className="text-white font-bold text-lg">
                    {project.savings} reducción
                  </div>
                </div>
                {/* Placeholder for actual project image */}
                <div className="w-full h-full bg-gradient-solar opacity-20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.client}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Zap className="h-4 w-4" />
                    <span>Potencia: {project.power}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Finalizado en {project.date}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <Link to={`/proyectos/${project.id}`}>
                    Ver proyecto completo
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-6">
          <div className="bg-card rounded-2xl shadow-solar p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Querés ver todos nuestros proyectos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explorá nuestro portafolio completo con más de 500 instalaciones exitosas en toda Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/proyectos">
                  Ver Todos los Proyectos
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contacto">
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;