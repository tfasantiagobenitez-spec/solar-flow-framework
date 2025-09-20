import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Package, Truck, CreditCard, Search, Filter } from "lucide-react";
import { useState } from "react";

const TiendaOnline = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = ["Todos", "Kits Solares", "Paneles", "Inversores", "Baterías", "Accesorios"];
  
  const products = [
    {
      id: 1,
      name: "Kit Solar 3kW On-Grid",
      category: "Kits Solares",
      price: 2500000,
      originalPrice: 2800000,
      image: "/placeholder.svg",
      description: "Kit completo para hogares. Incluye 8 paneles de 375W, inversor y todos los accesorios.",
      specs: ["8 paneles 375W", "Inversor 3kW", "Estructura de montaje", "Cables y protecciones"],
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Panel Solar Monocristalino 540W",
      category: "Paneles",
      price: 180000,
      originalPrice: null,
      image: "/placeholder.svg",
      description: "Panel solar de alta eficiencia con tecnología monocristalina. Garantía 25 años.",
      specs: ["540W potencia", "Tecnología PERC", "Marco de aluminio", "Garantía 25 años"],
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: "Inversor Fronius 5kW",
      category: "Inversores",
      price: 850000,
      originalPrice: 950000,
      image: "/placeholder.svg",
      description: "Inversor premium con monitoreo WiFi integrado y máxima eficiencia.",
      specs: ["5000W potencia", "WiFi integrado", "Eficiencia 97.3%", "Garantía 10 años"],
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: "Batería Litio 10kWh",
      category: "Baterías",
      price: 3200000,
      originalPrice: null,
      image: "/placeholder.svg",
      description: "Sistema de almacenamiento de energía con tecnología de litio ferro fosfato.",
      specs: ["10kWh capacidad", "6000 ciclos", "Tecnología LiFePO4", "Garantía 10 años"],
      inStock: false,
      featured: false
    },
    {
      id: 5,
      name: "Kit Solar 6kW Híbrido",
      category: "Kits Solares",
      price: 4800000,
      originalPrice: 5200000,
      image: "/placeholder.svg",
      description: "Sistema híbrido con respaldo de baterías. Ideal para autonomía energética.",
      specs: ["16 paneles 375W", "Inversor híbrido 6kW", "Batería 10kWh", "Instalación incluida"],
      inStock: true,
      featured: true
    },
    {
      id: 6,
      name: "Estructura de Montaje Techo",
      category: "Accesorios",
      price: 120000,
      originalPrice: null,
      image: "/placeholder.svg",
      description: "Estructura de aluminio para montaje en techo inclinado. Para 8 paneles.",
      specs: ["Aluminio anodizado", "Para 8 paneles", "Techo 15-45°", "Incluye tornillería"],
      inStock: true,
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ShoppingCart className="h-10 w-10 text-accent" />
              <span className="text-accent font-medium text-lg">Tienda Online</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Productos Solares
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprá equipos solares de primera calidad con garantía oficial. Envíos a todo el país y financiación disponible.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl">🚚</div>
                  <div className="text-sm text-white/80">Envío Gratis</div>
                  <div className="text-xs text-white/60">A todo el país</div>
                </div>
                <div>
                  <div className="text-2xl">💳</div>
                  <div className="text-sm text-white/80">12 Cuotas</div>
                  <div className="text-xs text-white/60">Sin interés</div>
                </div>
                <div>
                  <div className="text-2xl">🛡️</div>
                  <div className="text-sm text-white/80">Garantía</div>
                  <div className="text-xs text-white/60">Oficial</div>
                </div>
                <div>
                  <div className="text-2xl">⚡</div>
                  <div className="text-sm text-white/80">Instalación</div>
                  <div className="text-xs text-white/60">Profesional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{filteredProducts.length} productos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden shadow-solar hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-solar/10 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                      Destacado
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      OFERTA
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Sin Stock</span>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-primary text-sm font-medium">{product.category}</span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <ul className="space-y-1">
                    {product.specs.slice(0, 3).map((spec, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="space-y-2">
                    {product.originalPrice && (
                      <div className="text-muted-foreground line-through text-sm">
                        {formatPrice(product.originalPrice)}
                      </div>
                    )}
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      12 cuotas sin interés de {formatPrice(product.price / 12)}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button 
                      disabled={!product.inStock}
                      className="w-full bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {product.inStock ? "Agregar al Carrito" : "Sin Stock"}
                    </button>
                    <button className="w-full border border-border text-foreground py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Envío Gratuito</h3>
              <p className="text-muted-foreground">
                Envíos gratis a todo el país en compras superiores a $500.000
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Financiación</h3>
              <p className="text-muted-foreground">
                Hasta 12 cuotas sin interés con tarjetas de crédito
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Garantía Oficial</h3>
              <p className="text-muted-foreground">
                Todos nuestros productos cuentan con garantía oficial del fabricante
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Instalación</h3>
              <p className="text-muted-foreground">
                Servicio de instalación profesional disponible en todo el país
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Necesitás Asesoramiento?
          </h2>
          <p className="text-xl text-white/90">
            Nuestros especialistas pueden ayudarte a elegir los productos ideales para tu proyecto solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Consulta Técnica Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              WhatsApp: 11-5555-5555
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TiendaOnline;