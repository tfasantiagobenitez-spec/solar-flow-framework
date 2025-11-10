import { Button } from "@/components/ui/button";
import { Sun, Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" }
  ];

  const solutions = [
    { name: "Hogar", href: "/soluciones/hogar" },
    { name: "Empresas", href: "/soluciones/empresas" },
    { name: "Agro", href: "/soluciones/agro" },
    { name: "Calculadora Solar", href: "/calculadora" },
    { name: "Tienda Online", href: "/tienda" }
  ];

  const legalLinks = [
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Garantías", href: "/garantias" },
    { name: "Financiación", href: "/financiacion" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Sun className="h-8 w-8 text-accent animate-glow" />
                <Zap className="h-4 w-4 text-primary absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-white">
                ALP Group
              </span>
            </div>

            <p className="text-white/80 leading-relaxed max-w-md">
              Líderes en soluciones de energía solar en Argentina. Más de 10 años transformando la manera 
              en que las personas y empresas consumen energía.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">0800-SOLAR-123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">info@alpgroup.com.ar</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/90">Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Soluciones</h3>
            <div className="space-y-3">
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="block text-white/80 hover:text-accent transition-colors"
                >
                  {solution.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Mantente Informado</h3>
            <p className="text-white/80 text-sm">
              Suscribite a nuestro newsletter para recibir las últimas novedades del sector solar.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-accent"
              />
              <Button variant="accent" size="sm" className="w-full">
                Suscribirse
              </Button>
            </div>

            {/* Legal Links */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white/60">Legal</h4>
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-xs text-white/60 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 ALP Group. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Certificación ISO 9001</span>
              <span>•</span>
              <span>Garantía hasta 25 años</span>
              <span>•</span>
              <span>+500 proyectos realizados</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;