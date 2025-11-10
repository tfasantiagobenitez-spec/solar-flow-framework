import { useEffect } from 'react';

const WhatsAppChat = () => {
  useEffect(() => {
    // Cargar el CSS del widget de n8n
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Cargar y ejecutar el script del widget de n8n
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://benitjs.app.n8n.cloud/webhook/15ec5689-dd61-4429-9e21-a932e983b65a/chat',
        initialMessages: [
          '¡Hola! Somos SolarTech Argentina. ¿En qué te podemos ayudar hoy?'
        ],
        i18n: {
          es: {
            title: 'SolarTech Argentina',
            subtitle: 'Asistente Virtual',
            footer: '',
            getStarted: '¡Comienza la conversación!',
            inputPlaceholder: 'Escribe tu mensaje...',
          }
        }
      });
    `;
    document.body.appendChild(script);

    // Limpiar cuando el componente se desmonte
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // El widget se renderiza automáticamente
  return null;
};

export default WhatsAppChat;
