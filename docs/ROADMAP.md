# PRÓXIMOS PASOS - Roadmap de Mejoras

## **1. Mejoras del Frontend (Web)**


### 1.1 **Contenido Dinámico**
- **Calculadora Interactiva de Ahorro**
  - Input: consumo kWh, tarifa actual, ubicación
  - Output: ahorro anual, ROI, payback period
  - Visualización con gráficos (Chart.js o Recharts)

- **Mapa de Instalaciones**
  - Mostrar proyectos completados con pins en mapa
  - Al hacer click: fotos, capacidad, ahorro real del cliente

- **Blog/Recursos Educativos**
  - Artículos sobre energía solar, incentivos fiscales, mantenimiento
  - Alimenta automáticamente el vector store del agente

---

## **2. Mejoras del AI Agent**

### **2.1 Capacidades Avanzadas**

#### **Tool: Cotizador Automático**
```javascript
// Nueva herramienta para el agente
{
  name: "generar_cotizacion",
  description: "Genera cotización personalizada basada en consumo y ubicación",
  function: async (consumoKwh, ubicacion, tipoInstalacion) => {
    // Calcula:
    - Paneles necesarios
    - Inversión inicial
    - Ahorro anual proyectado
    - Incentivos fiscales aplicables
    // Genera PDF y lo envía por email
  }
}
```

#### **Tool: Agendador Inteligente**
```javascript
// Integración con Google Calendar
{
  name: "agendar_visita_tecnica",
  description: "Agenda visita técnica según disponibilidad",
  slots_disponibles: getAvailableSlots(),
  confirmacion: sendCalendarInvite()
}
```

### **2.2 Multi-idioma**
```javascript
// Detectar idioma del usuario y responder en el mismo
- Español (es-AR, es-ES)
- Inglés (en-US)
- Portugués (pt-BR) // Para expansión a Brasil
```

---

