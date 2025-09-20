import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Guía Completa: Ley de Generación Distribuida 2024",
    excerpt: "Todo lo que necesitás saber sobre la nueva reglamentación para generar tu propia energía y vender excedentes a la red.",
    content: "La Ley 27.424 de Régimen de Fomento a la Generación Distribuida de Energía Renovable ha sido actualizada este año...",
    author: "Ing. Carlos Mendoza",
    date: "15 Sep 2024",
    readTime: "8 min",
    category: "Legislación",
    image: "/placeholder.svg",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Mantenimiento de Paneles Solares: Mitos y Verdades",
      excerpt: "Desmitificamos las creencias más comunes sobre el mantenimiento de sistemas solares y te damos consejos prácticos.",
      author: "Ing. María González",
      date: "12 Sep 2024",
      readTime: "5 min",
      category: "Mantenimiento",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Cómo Calcular el ROI de tu Inversión Solar",
      excerpt: "Aprende a calcular el retorno de inversión de tu sistema solar y los factores que lo afectan en Argentina.",
      author: "Eco. Juan Pérez",
      date: "10 Sep 2024",
      readTime: "6 min",
      category: "Finanzas",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Nuevas Tecnologías en Paneles Solares 2024",
      excerpt: "Descubrí las últimas innovaciones en tecnología fotovoltaica que están revolucionando el mercado.",
      author: "Ing. Ana Martín",
      date: "8 Sep 2024",
      readTime: "7 min",
      category: "Tecnología",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Energía Solar para el Agro: Casos de Éxito",
      excerpt: "Conocé cómo productores argentinos están utilizando energía solar para bombeo, riego y electrificación rural.",
      author: "Ing. Roberto Silva",
      date: "5 Sep 2024",
      readTime: "9 min",
      category: "Agro",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Almacenamiento de Energía: Baterías vs Red",
      excerpt: "Comparamos las ventajas y desventajas de los sistemas con baterías versus la inyección a red.",
      author: "Ing. Laura Rodríguez",
      date: "3 Sep 2024",
      readTime: "6 min",
      category: "Tecnología",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Impacto Ambiental de la Energía Solar",
      excerpt: "Analizamos el ciclo de vida completo de los paneles solares y su verdadero impacto ambiental.",
      author: "Lic. Patricia López",
      date: "1 Sep 2024",
      readTime: "8 min",
      category: "Medio Ambiente",
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    "Todos",
    "Legislación", 
    "Tecnología",
    "Mantenimiento",
    "Finanzas",
    "Agro",
    "Medio Ambiente"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Legislación": "bg-blue-500",
      "Tecnología": "bg-purple-500",
      "Mantenimiento": "bg-green-500",
      "Finanzas": "bg-yellow-500",
      "Agro": "bg-orange-500",
      "Medio Ambiente": "bg-emerald-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="h-10 w-10 text-accent" />
              <span className="text-accent font-medium text-lg">Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Recursos y Noticias
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Mantente informado sobre las últimas tendencias, tecnologías y regulaciones en energía solar.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Artículo Destacado</h2>
            <div className="w-20 h-1 bg-gradient-solar rounded-full"></div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-solar border border-border/50">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-gradient-solar/20">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    <Tag className="h-3 w-3 mr-1" />
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {featuredPost.readTime} lectura
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-solar rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{featuredPost.author}</div>
                      <div className="text-sm text-muted-foreground">Especialista en Energías Renovables</div>
                    </div>
                  </div>

                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group"
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Últimos Artículos</h2>
              <div className="w-20 h-1 bg-gradient-solar rounded-full"></div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg font-medium transition-colors bg-white text-foreground hover:bg-primary/10 border border-border"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-card rounded-xl overflow-hidden shadow-solar hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                {/* Post Image */}
                <div className="aspect-video bg-gradient-solar/20 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(post.category)}`}>
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-muted-foreground text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div>{post.readTime} lectura</div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-solar rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{post.author}</span>
                    </div>

                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group/link"
                    >
                      Leer
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-solar text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Cargar Más Artículos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mantenete Informado
          </h2>
          <p className="text-xl text-white/90">
            Suscribite a nuestro newsletter y recibí las últimas noticias y tendencias en energía solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;