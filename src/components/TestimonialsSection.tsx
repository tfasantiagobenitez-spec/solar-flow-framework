import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Guillermo Martinez",
      location: "Brandsen, Buenos Aires",
      rating: 5,
      text: "Desde que instalamos los paneles, la factura de luz bajó un 80%. El servicio postventa es un lujo, siempre están pendientes de que todo funcione perfecto.",
      project: "Sistema residencial 6kWp",
      avatar: "GM"
    },
    {
      id: 2,
      name: "María Elena Fernández",
      location: "Córdoba Capital",
      rating: 5,
      text: "La inversión se pagó sola en 4 años. Ahora tenemos energía gratis y contribuimos al medio ambiente. Recomiendo 100% a SolarTech.",
      project: "Sistema híbrido con baterías",
      avatar: "MF"
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      location: "Rosario, Santa Fe",
      rating: 5,
      text: "Para nuestra empresa fue una excelente decisión. Redujimos costos operativos significativamente y mejoramos nuestra imagen corporativa.",
      project: "Instalación comercial 25kWp",
      avatar: "CM"
    },
    {
      id: 4,
      name: "Ana Rodriguez",
      location: "Mendoza Capital",
      rating: 5,
      text: "El equipo de ingenieros fue muy profesional. Nos explicaron todo detalladamente y la instalación fue rápida y prolija.",
      project: "Sistema residencial 4.5kWp",
      avatar: "AR"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Lo que dicen
            <span className="block text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Conocé sus experiencias reales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-solar hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 border border-border/50"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-solar rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-solar rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">4.9/5</div>
                <div className="text-white/80">Calificación promedio</div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">98%</div>
                <div className="text-white/80">Clientes satisfechos</div>
                <div className="text-sm text-white/60">De nuestros +500 proyectos</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">24h</div>
                <div className="text-white/80">Tiempo de respuesta</div>
                <div className="text-sm text-white/60">Atención post-venta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;