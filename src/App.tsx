import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Soluciones from "./pages/Soluciones";
import SolucionesHogar from "./pages/SolucionesHogar";
import Proyectos from "./pages/Proyectos";
import Calculadora from "./pages/Calculadora";
import TiendaOnline from "./pages/TiendaOnline";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/soluciones/hogar" element={<SolucionesHogar />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/tienda" element={<TiendaOnline />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
