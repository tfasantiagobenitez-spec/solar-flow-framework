# Solar Flow Framework - AI-Powered Sales Agent

> Sistema de automatización con Inteligencia Artificial para empresa de energía solar, 
> desarrollado como proyecto académico para FIUBA.

[![License](https://img.shields.io/badge/license-Academic%20Use%20Only-red.svg)](LICENSE.md)
[![n8n](https://img.shields.io/badge/n8n-Cloud-orange.svg)](https://n8n.io)
[![Claude](https://img.shields.io/badge/Claude-Sonnet%204-blue.svg)](https://anthropic.com)

## Descripción

Sistema completo de automatización que combina:
- **AI Agent conversacional** (Claude Sonnet 4)
- **Workflow automation** (n8n Cloud)
- **Base de conocimiento** (Pinecone + RAG)
- **Frontend web** (Lovable)
- **Data pipeline** (Google Sheets)


## 🏗️ Arquitectura

```
┌─────────────────┐
│   Usuario Web   │
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│  Chat Interface     │ (Lovable Frontend)
│  + Quick Actions    │
└─────────┬───────────┘
          │
          ▼
┌──────────────────────────┐
│   n8n Webhook Trigger    │
└───────────┬──────────────┘
            │
            ▼
   ┌────────────────────┐
   │   AI Agent Node    │
   │  (Claude Sonnet 4) │
   └────────┬───────────┘
            │
    ┌───────┴────────┐
    │                │
    ▼                ▼
┌─────────┐    ┌──────────────┐
│ Tools:  │    │   Memory:    │
│         │    │              │
│ Vector  │    │  Chat        │
│ Store   │    │  History     │
│         │    │              │
│         │    │  Session     │
│         │    │  Context     │
│         │    │              │
└────┬────┘    └──────────────┘
     │
     ▼
┌──────────────────┐
│ Google Sheets DB │
│ - Leads          │
│ - Cotizaciones   │
│ - Conversaciones │
└──────────────────┘
```

## Setup Rápido

### Prerrequisitos

```bash
# APIs necesarias:
- Anthropic API Key (Claude)
- Pinecone API Key + Index
- HuggingFace Token
- n8n Cloud account
- Google Sheets API (OAuth2)
```

### 1. Clonar repositorio

```bash
git clone https://github.com/[tu-usuario]/solar-flow-framework.git
cd solar-flow-framework
```

### 2. Configurar n8n Workflows

```bash
# Importar workflows
1. Ir a n8n Cloud: https://[tu-instancia].app.n8n.cloud
2. Import > Seleccionar archivo: workflows/agente-principal.json
3. Import > Seleccionar archivo: workflows/base-datos-vectorial.json
4. Configurar credenciales en cada nodo
```

### 3. Configurar Vector Store

```python
# Crear índice en Pinecone
Index Name: solar-agent-kb
Dimensions: 384
Metric: cosine

# Subir documentos iniciales
python scripts/upload_knowledge_base.py
```

### 4. Deploy Frontend

```bash
# En Lovable
1. Abrir: https://lovable.dev
2. Import project
3. Conectar con repo
4. Deploy
```

## Estructura del Proyecto

```
solar-flow-framework/
│
├── workflows/
│   ├── agente-principal.json          # Flujo principal del AI Agent
│   ├── base-datos-vectorial.json      # Pipeline de embeddings
│   └── email-follow-up.json           # Automatización post-lead
│
├── knowledge-base/
│   ├── productos/
│   │   ├── paneles-solares.pdf
│   │   └── inversores.pdf
│   ├── financiacion/
│   │   └── incentivos-fiscales.md
│   └── faq/
│       └── preguntas-frecuentes.md
│
├── frontend/
│   └── lovable-project/               # Código del sitio web
│
├── scripts/
│   ├── upload_knowledge_base.py       # Sube docs a Pinecone
│   ├── test_agent.py                  # Tests del agente
│   └── export_metrics.py              # Exporta analytics
│
├── docs/
│   ├── ARCHITECTURE.md                # Diagramas y explicación técnica
│   ├── API.md                         # Documentación de webhooks
│   └── DEPLOYMENT.md                  # Guía de deploy completo
│
├── tests/
│   ├── test_workflows.py
│   └── test_agent_responses.py
│
├── LICENSE.md                         # Licencia académica
├── README.md                          # Este archivo
└── requirements.txt                   # Dependencias Python
```

## Tecnologías

| Categoría | Tecnología | Propósito |
|-----------|------------|-----------|
| **AI/LLM** | Claude Sonnet 4 | Motor conversacional |
| **Automation** | n8n Cloud | Orquestación de workflows |
| **Vector DB** | Pinecone | Base de conocimiento (RAG) |
| **Embeddings** | HuggingFace | all-MiniLM-L6-v2 |
| **Frontend** | Lovable | Sitio web + chat interface |
| **Database** | Google Sheets | Storage de leads y datos |
| **Analytics** | Google Analytics 4 | Métricas y conversiones |

## Documentación Completa

- [Arquitectura del Sistema](docs/ARCHITECTURE.md)
- [API y Webhooks](docs/API.md)
- [Mejora del Agente AI](docs/AGENT_OPTIMIZATION.md)
- [Próximos Pasos](docs/ROADMAP.md)

##  Contexto Académico

Este proyecto fue desarrollado para la materia **Seminario de Inteligencia Artificial** en **FIUBA** 
durante el ciclo académico 2025.

**Objetivos cumplidos**:
- ✅ Integración de AI en workflow empresarial real
- ✅ Implementación de RAG (Retrieval Augmented Generation)
- ✅ Métricas de impacto medibles




## Colaboración

Este es un proyecto académico con licencia de uso restringido. Ver [LICENSE.md](LICENSE.md).

Para colaboración académica o consultas:
- Email: mtbenitez@fi.uba.ar o mlietti@fi.uba.ar

## Agradecimientos

- **ALP Group** por el caso de negocio real
- **Profesores Xavier Gonzalez y Juan Cruz Camacho** por la mentoría

## Licencia

Uso Académico Restringido © 2025. Ver [LICENSE.md](LICENSE.md) para detalles.

**NO autorizado para uso comercial sin permiso explícito.**


