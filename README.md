# Solar Flow Framework - AI-Powered Sales Agent

> Sistema de automatización con Inteligencia Artificial para empresa de energía solar, 
> desarrollado como proyecto académico para FIUBA.

[![License](https://img.shields.io/badge/license-Academic%20Use%20Only-red.svg)](LICENSE.md)
[![n8n](https://img.shields.io/badge/n8n-Cloud-orange.svg)](https://n8n.io)
[![Claude](https://img.shields.io/badge/Claude-Sonnet%204-blue.svg)](https://anthropic.com)

## Descripción general del proyecto

Este repositorio presenta una solución desarrollada para **ALP Group** (instalación de sistemas solares) que automatiza el proceso comercial con **n8n** y un **agente conversacional**.

En la práctica, el sistema:
- responde consultas de potenciales clientes por chat,
- extrae y ordena los datos relevantes de cada conversación,
- los guarda automáticamente en **Google Sheets** como base de leads,
- y genera un **dashboard web** para visualizar resultados y apoyar decisiones.

La integración se implementa mediante workflows en **n8n**, conectados a un modelo de lenguaje, una base de conocimiento (RAG) y salidas en HTML.

## Componentes principales (resumen)

- **AI Agent conversacional** (Claude Sonnet 4)
- **Automatización de workflows** (n8n Cloud)
- **Base de conocimiento** (Pinecone + RAG)
- **Dashboard web** (HTML)
- **Pipeline de datos** (Google Sheets)
- **Frontend web** (Lovable)

## Cómo evaluar / Casos de prueba sugeridos

Estos casos sirven para verificar rápidamente que el sistema cumple los objetivos del proyecto:

### 1) Captura de lead y datos comerciales
- **Prueba:** iniciar chat y consultar por una instalación solar.
- **Esperado:** el agente hace preguntas para recolectar datos (nombre, ubicación, consumo, etc.).
- **Verificación:** se crea/actualiza un registro en **Google Sheets** (lead + conversación).

### 2) Consulta con base de conocimiento (RAG)
- **Prueba:** preguntar algo técnico incluido en la documentación cargada (ej.: productos, tipos de paneles, financiación).
- **Esperado:** el agente responde usando información de la base de conocimiento (Pinecone), manteniendo coherencia.

### 3) Dashboard / Visualización
- **Prueba:** acceder al endpoint del dashboard (webhook).
- **Esperado:** se muestra una vista HTML con métricas/indicadores (según el flujo implementado) para análisis comercial.

---

## Documentación Completa

- [Arquitectura del Sistema](docs/ARCHITECTURE.md)*(incluye guía de uso y recursos para principiantes)*
- [Próximos Pasos](docs/ROADMAP.md)*(incluye mejoras para el Agente AI)*

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


