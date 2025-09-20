import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, Zap, DollarSign, Leaf, ArrowRight, Home, CheckCircle } from "lucide-react";
import { useState } from "react";

const Calculadora = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlyBill: "",
    province: "",
    roofType: "",
    name: "",
    email: "",
    phone: ""
  });
  const [results, setResults] = useState<any>(null);

  const provinces = [
    "Buenos Aires", "CABA", "Córdoba", "Santa Fe", "Mendoza", "Entre Ríos", 
    "Tucumán", "Salta", "Misiones", "Chaco", "Corrientes", "Santiago del Estero",
    "San Juan", "Jujuy", "Río Negro", "Neuquén", "Formosa", "Chubut",
    "San Luis", "Catamarca", "La Rioja", "La Pampa", "Santa Cruz", "Tierra del Fuego"
  ];

  const roofTypes = [
    "Techo de chapa",
    "Techo de tejas",
    "Losa de hormigón",
    "Techo plano",
    "No estoy seguro"
  ];

  const calculateResults = () => {
    const monthlyBill = parseFloat(formData.monthlyBill);
    const annualBill = monthlyBill * 12;
    
    // Cálculos aproximados basados en el consumo
    const systemSize = Math.round((monthlyBill / 150) * 10) / 10; // kWp aproximado
    const panelCount = Math.ceil(systemSize / 0.4); // Asumiendo 400W por panel
    const annualSavings = Math.round(annualBill * 0.8); // 80% de ahorro promedio
    const systemCost = Math.round(systemSize * 800000); // $800k por kWp aproximado
    const paybackYears = Math.round((systemCost / annualSavings) * 10) / 10;
    const co2Reduction = Math.round(systemSize * 1.5 * 1000); // kg CO2 por año

    setResults({
      systemSize,
      panelCount,
      annualSavings,
      systemCost,
      paybackYears,
      co2Reduction,
      monthlyBill
    });
  };

  const handleNext = () => {
    if (step === 2) {
      calculateResults();
    }
    setStep(step + 1);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-solar text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calculator className="h-10 w-10 text-accent" />
              <span className="text-accent font-medium text-lg">Calculadora Solar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Calculá tu Ahorro Solar
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Descubrí en 3 minutos cuánto podrías ahorrar con energía solar y cuál sería la inversión necesaria para tu hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= stepNum ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {step > stepNum ? <CheckCircle className="h-6 w-6" /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNum ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-muted-foreground">
              Paso {step} de 3: {
                step === 1 ? "Información de Consumo" :
                step === 2 ? "Detalles Técnicos" : 
                step === 3 ? "Resultados" : "Datos de Contacto"
              }
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-solar border border-border/50">
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Información de Consumo</h2>
                  <p className="text-muted-foreground">Necesitamos conocer tu factura actual para calcular el ahorro potencial</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ¿Cuál es tu gasto promedio mensual en la factura de luz?
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                      <input
                        type="number"
                        value={formData.monthlyBill}
                        onChange={(e) => handleInputChange("monthlyBill", e.target.value)}
                        placeholder="25000"
                        className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Ingresá el monto sin centavos</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ¿En qué provincia te encontrás?
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => handleInputChange("province", e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    >
                      <option value="">Seleccionar provincia</option>
                      {provinces.map((province) => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={!formData.monthlyBill || !formData.province}
                  className="w-full bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  Continuar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Detalles Técnicos</h2>
                  <p className="text-muted-foreground">Información sobre tu techo para optimizar el diseño del sistema</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ¿Qué tipo de techo tenés?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {roofTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleInputChange("roofType", type)}
                          className={`p-4 border rounded-lg text-left transition-colors ${
                            formData.roofType === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border border-border text-foreground py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!formData.roofType}
                    className="flex-1 bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    Ver Resultados
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">¡Excelentes Resultados!</h2>
                  <p className="text-muted-foreground">Aquí está tu análisis personalizado de ahorro solar</p>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-solar/10 rounded-xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">Ahorro Anual</h3>
                    </div>
                    <div className="text-3xl font-bold text-primary">${results.annualSavings.toLocaleString()}</div>
                    <p className="text-muted-foreground">Podrías ahorrar este monto cada año</p>
                  </div>

                  <div className="bg-gradient-solar/10 rounded-xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-8 w-8 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">Sistema Recomendado</h3>
                    </div>
                    <div className="text-3xl font-bold text-primary">{results.systemSize} kWp</div>
                    <p className="text-muted-foreground">{results.panelCount} paneles solares</p>
                  </div>

                  <div className="bg-gradient-solar/10 rounded-xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Home className="h-8 w-8 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">Inversión Estimada</h3>
                    </div>
                    <div className="text-3xl font-bold text-primary">${results.systemCost.toLocaleString()}</div>
                    <p className="text-muted-foreground">Se recupera en {results.paybackYears} años</p>
                  </div>

                  <div className="bg-gradient-solar/10 rounded-xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Leaf className="h-8 w-8 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">Impacto Ambiental</h3>
                    </div>
                    <div className="text-3xl font-bold text-primary">{results.co2Reduction} kg</div>
                    <p className="text-muted-foreground">Menos CO₂ por año</p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Recibí tu Presupuesto Detallado</h3>
                  <p className="text-muted-foreground mb-6">
                    Para obtener un presupuesto exacto y personalizado, dejanos tus datos y un ingeniero te contactará en menos de 24 horas.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono/WhatsApp"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    />
                  </div>

                  <button
                    className="w-full bg-gradient-solar text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Solicitar Presupuesto Detallado
                  </button>
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({ monthlyBill: "", province: "", roofType: "", name: "", email: "", phone: "" });
                    setResults(null);
                  }}
                  className="w-full border border-border text-foreground py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Hacer Otro Cálculo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculadora;