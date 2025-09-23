import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Declare global type for n8n chat
declare global {
  interface Window {
    createChat?: (config: any) => void;
  }
}

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatReady, setChatReady] = useState(false);

  useEffect(() => {
    // Load n8n chat script once when component mounts
    const loadChatScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="n8n/chat"]')) {
        setChatReady(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      script.type = 'module';
      script.onload = () => {
        setChatReady(true);
        console.log('N8N chat library loaded');
      };
      script.onerror = () => {
        console.error('Failed to load N8N chat library');
      };
      
      document.head.appendChild(script);
    };

    loadChatScript();
  }, []);

  const initializeChat = () => {
    if (!chatReady) return;

    // Clear any existing chat
    const container = document.getElementById('chat-widget-container');
    if (container) {
      container.innerHTML = '<div id="n8n-chat"></div>';
    }

    // Initialize chat using global createChat function
    setTimeout(() => {
      if (window.createChat) {
        window.createChat({
          webhookUrl: 'https://benitjs.app.n8n.cloud/webhook/15ec5689-dd61-4429-9e21-a932e983b65a/chat',
          target: '#n8n-chat',
          mode: 'embedded',
          defaultHeight: 400,
          defaultWidth: 360,
          showWindowCloseButton: false,
          initialMessages: [
            "¡Hola! Soy AISA 🤖\n\nTu asistente virtual de SolarTech Argentina disponible 24/7!!",
            "Estoy aquí para ayudarte con consultas sobre sistemas solares, técnicas y operativas. ¿En qué puedo asistirte hoy?"
          ],
          chatInputPlaceholder: "Escribe un mensaje",
          subtitle: "En línea",
          theme: {
            header: {
              backgroundColor: '#075e54',
              color: 'white'
            },
            chatWindow: {
              backgroundColor: '#e5ddd5',
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px)'
            },
            input: {
              backgroundColor: 'white',
              borderColor: '#d1d7db',
              borderRadius: '20px',
              fontSize: '14px',
              padding: '12px 16px'
            },
            sendButton: {
              backgroundColor: '#25d366',
              borderRadius: '50%'
            },
            userMessage: {
              backgroundColor: '#dcf8c6',
              borderRadius: '18px 18px 4px 18px'
            },
            botMessage: {
              backgroundColor: 'white',
              borderRadius: '18px 18px 18px 4px'
            }
          }
        });
      }
    }, 100);
  };

  useEffect(() => {
    if (isOpen && chatReady) {
      initializeChat();
    }
  }, [isOpen, chatReady]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Clear chat container
    const container = document.getElementById('chat-widget-container');
    if (container) {
      container.innerHTML = '';
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpen}
          className={`rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 ${
            isOpen ? 'scale-0' : 'scale-100'
          }`}
        >
          <MessageCircle size={28} />
        </Button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <MessageCircle className="text-green-500" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">SolarTech Argentina</h3>
              <p className="text-sm opacity-90">En línea</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-white hover:bg-green-600 p-1"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Chat Container */}
        <div 
          id="chat-widget-container"
          className="flex-1 h-[420px] w-full"
        >
          {isOpen && !chatReady && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-500">Cargando chat...</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat;