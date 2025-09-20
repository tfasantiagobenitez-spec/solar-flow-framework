import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Zap, Calculator, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { 
      name: "Soluciones", 
      href: "/soluciones",
      submenu: [
        { name: "Para tu Hogar", href: "/soluciones/hogar" },
        { name: "Para tu Empresa", href: "/soluciones/empresas" },
        { name: "Para el Agro", href: "/soluciones/agro" }
      ]
    },
    { name: "Proyectos Realizados", href: "/proyectos" },
    { name: "Calculadora Solar", href: "/calculadora" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Tienda Online", href: "/tienda" },
    { name: "Blog / Recursos", href: "/blog" },
    { name: "Contacto", href: "/contacto" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sun className="h-8 w-8 text-accent animate-glow" />
              <Zap className="h-4 w-4 text-primary absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-solar bg-clip-text text-transparent">
              SolarTech Argentina
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-solar opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/calculadora">
                <Calculator className="h-4 w-4" />
                Calculadora
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contacto">
                <Phone className="h-4 w-4" />
                Presupuesto
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/calculadora">
                    <Calculator className="h-4 w-4" />
                    Calculadora Solar
                  </Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contacto">
                    <Phone className="h-4 w-4" />
                    Solicitar Presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;