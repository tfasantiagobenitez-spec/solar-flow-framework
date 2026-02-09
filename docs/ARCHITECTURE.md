# Documentación del Proyecto ALP Group

## 1. Descripción general del proyecto
El proyecto se desarrolló para la empresa **ALP Group**, dedicada a la instalación de sistemas solares. El objetivo principal fue diseñar una solución de inteligencia artificial que permitiera:

1.  **Atender consultas de clientes** mediante un chatbot, capaz de mantener conversaciones naturales y recolectar datos comerciales relevantes.
2.  **Organizar automáticamente esa información** en una planilla de Google Sheets, para contar con una base de datos limpia y estructurada de leads.
3.  **Construir un dashboard interactivo**, que permita analizar los resultados de manera visual y apoyar la toma de decisiones comerciales.

Para lograrlo se utilizaron flujos de trabajo en **n8n** integrados con un modelo de lenguaje, **Google Sheets** y un sistema de visualización en **HTML**.

---

## 2. Agente conversacional (chatbot) y registro de leads

El sistema funciona con una base de datos que actúa como el “cerebro” y un agente inteligente que interactúa con el usuario.

### Base de datos y Procesamiento de Documentos
El proceso de ingesta de conocimiento funciona de la siguiente manera:

1.  **“On form submission”**: Se activa cuando se carga un texto o documento (PDF, nota, guía) a través de un formulario.
2.  **“Default Data Loader”**: Lee el documento completo.
3.  **“Recursive Character Text Splitter”**: Divide el texto en fragmentos más pequeños (“chunks”) para que la IA los pueda procesar.
4.  **“Embeddings HuggingFace”**: Convierte cada fragmento de texto en un vector numérico (embedding).
5.  **“Pinecone Vector Store”**: Guarda los vectores en una base de datos diseñada para búsquedas semánticas, permitiendo recuperar información relevante ante futuras consultas.

### Flujo del Chatbot
El flujo de interacción con el cliente es el siguiente:

1.  **“When chat message received” (2.1)**: Punto de entrada de todas las interacciones.
2.  **“Get row(s) in sheet” (2.2)**: Consulta Google Sheets para verificar si el usuario ya existe.
3.  **Nodo “If” (2.3)**:
    *   Si el lead existe -> Actualización de datos.
    *   Si no existe -> Creación de nuevo registro.
4.  **“Append row in sheet” (2.4)**: Agrega una nueva fila para nuevos contactos.
5.  **“AI Agent 1” (2.5)**: El cerebro de la operación. Interpreta la intención, formula preguntas y propone soluciones.
    *   **“Anthropic Chat Model1” (2.6)**: El modelo de lenguaje (ej. Claude).
    *   **“Structured Output Parser” (2.7)**: Traduce la respuesta a un JSON estructurado (`tipo_producto`, `consumo_kwh`, `estado_lead`).
    *   **“Vector” (2.8)**: Busca fragmentos relevantes en Pinecone.
    *   **“Embeddings HuggingFace” (2.9)**: Convierte la pregunta del usuario en vector para la búsqueda.
    *   **“Reranker Cohere1” (2.10)**: Reordena los resultados por relevancia.
    *   **“Simple Memory” (2.11)**: Mantiene el contexto de la conversación.
6.  **“Update row in sheet” (2.12)**: Actualiza la fila en Google Sheets con la nueva información cualificada (ej. lead caliente, kit sugerido).

**Recurso:** [Google Sheets de Leads](https://docs.google.com/spreadsheets/d/1vuGJrk6arYQAL-TcU4To-AevUWaGQQ5IKOLr1_vNw5g/edit?gid=125280768#gid=125280768)

---

## 3. Dashboard de análisis de leads
Herramienta visual para analizar el comportamiento de los leads y apoyar decisiones comerciales.

### Estructura del flujo
1.  **Disparo vía Webhook**: Se activa desde una URL.
2.  **Lectura de base de datos**: Obtiene registros de Google Sheets.
3.  **Limpieza de datos**: Normaliza datos para evitar errores.
4.  **Consolidación de métricas**: Calcula KPIs por agente, periodo y resultados.
5.  **Generación del HTML**: Crea gráficos interactivos con Plotly.
6.  **Respuesta al Webhook**: Entrega el HTML final al navegador.

### Métricas visualizadas
*   Volumen total de leads y distribución por estado (calientes, tibios, fríos).
*   Consumo total y promedio de kWh.
*   Distribución por segmento (hogares, industrias, campos) y tipo de producto.
*   Top 5 ubicaciones con más leads.
*   Tabla detallada de leads caso por caso.

---

## 4. Guía Completa: n8n y AI Agent

### Fundamentos de n8n
**n8n** conecta servicios mediante nodos.
*   **Trigger**: Inicia el flujo (chat, webhook).
*   **Nodos de acción**: Procesan datos o llaman APIs.
*   **Conexiones**: Pasan datos entre nodos.

### Configuración del AI Agent

#### Configuración básica
Configuración, instalación y primer flujo: https://www.youtube.com/watch?v=T6btgihNdWw

**Resumen del video:**
**1. Introducción a n8n**

* ¿Qué es n8n?

Plataforma de automatización de flujos de trabajo, similar a Make o Zapier.

Permite conectar aplicaciones para automatizar tareas repetitivas.

Ejemplo práctico: Automatizar la publicación de contenido de Airtable en Instagram.



* Características principales de n8n:

Código abierto y gratuito: Totalmente personalizable y auditado por la comunidad.

Control total y privacidad: Puede instalarse localmente en tu ordenador.

Interfaz visual intuitiva: Aunque menos amigable que otras herramientas, sigue siendo accesible para principiantes.

Compatible con código: Aunque no es necesario saber programar, se puede incluir código si es requerido.

**2. Instalación de n8n**


1. Instalar Node.js:

Ir a nodejs.org y descargar la versión LTS adecuada para tu sistema operativo.

Seguir las instrucciones del instalador.


2. Instalar npm y n8n:

Abrir el terminal (en Windows: cmd).

Escribir: npm install -g n8n

Iniciar n8n con:n8n start

Acceder a la interfaz a través de localhost:5678 en el navegador.

1. Primer acceso:

Crear credenciales al iniciar sesión por primera vez en la interfaz.

**3. Creacion de un flujo básico**
Se muestra un ejemplo práctico. 

**Fundamentos de n8n: 
Nodos, triggers y JavaScript: https://www.youtube.com/watch?v=TsX8TE9S4pw&t=933s
Resumen del video: 

**1. Tipos de nodos en n8n**

* Nodos Trigger: Inician los flujos de trabajo.
Ejemplos: Webhook, Scheduler, Airtable Trigger.

* Nodos Action: Realizan acciones específicas.
Ejemplos: Enviar emails, actualizar bases de datos, subir datos a Google Sheets.

* Nodos Helper: Ayudan a manipular información.
Ejemplos: Nodo If, Split Out, Aggregate.

* Nodos Especiales: Realizan acciones avanzadas o múltiples.
Ejemplos: Interacción con WhatsApp, análisis de texto o sentimiento.

**2. Creación de flujos básicos en n8n**

* Cómo iniciar un flujo con nodos Trigger.
* Personalización de flujos para ejecutar acciones específicas.

**3. Uso del nodo Code**

* Potencial del nodo Code para manejar datos usando JavaScript.
* Explicación paso a paso del código en JavaScript

**4. Conclusiones**

* Los nodos son la base para crear flujos en n8n.
* Triggers son esenciales para iniciar flujos, y el nodo Code amplía las posibilidades con JavaScript.






#### Conexión Paso a Paso
1.  **Crear nodo AI Agent**: Conectar modelo Anthropic.
2.  **Configurar Tools**:
    *   *Vector Store*: Conectar Pinecone y Embeddings.
    *   *Calculator*: Habilitar herramienta de cálculo.
3.  **Configurar Memory**: Usar `Window Buffer Memory` ligado al ID del chat.

### 💾 Vector Store (Pinecone)
*   **Index Name**: `tu-agente-kb`
*   **Dimensions**: 384 (para `all-MiniLM-L6-v2`)
*   **Metric**: cosine
*   **Alimentación**: Flujo de ingesta de documentos (PDF/Texto -> Splitter -> Embeddings -> Pinecone).

### 📋 Checklist de implementación
- [ ] Crear cuenta Pinecone y configurar índice
- [ ] Obtener API keys (Anthropic, HuggingFace, Pinecone)
- [ ] Configurar credenciales en n8n
- [ ] Crear flujo "Base de datos" y subir documentos
- [ ] Configurar AI Agent con tools
- [ ] Conectar trigger (chat/webhook)
- [ ] Probar con casos de uso reales
- [ ] Agregar logging a Google Sheets
- [ ] Implementar manejo de errores
- [ ] Deploy y monitoreo

### Enlace al sitio web
[Solar Flow Framework](https://solar-flow-framework.lovable.app/)
