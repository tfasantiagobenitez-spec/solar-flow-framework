import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Clear the container first
      const container = document.getElementById('chat-container');
      if (container) {
        container.innerHTML = '';
        
        // Create the n8n chat embed script
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
          import '@n8n/chat/style.css';
          import { createChat } from '@n8n/chat';
          
          createChat({
            webhookUrl: 'https://benitjs.app.n8n.cloud/webhook/15ec5689-dd61-4429-9e21-a932e983b65a/chat',
            target: '#chat-container',
            mode: 'embedded',
            defaultHeight: 400,
            defaultWidth: '100%',
            showWindowCloseButton: false,
            initialMessages: [
              "¡Hola! Soy AISA 🤖\\n\\nTu asistente virtual de SolarTech Argentina disponible 24/7!!",
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
                borderRadius: '20px'
              },
              sendButton: {
                backgroundColor: '#25d366'
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
          }).catch(error => {
            console.error('Error creating chat:', error);
            document.getElementById('chat-container').innerHTML = 
              '<div class="p-4 text-center text-gray-500">Error cargando el chat. Por favor, intenta más tarde.</div>';
          });
        `;
        
        // Add script to head
        document.head.appendChild(script);
        
        // Cleanup function to remove script when component unmounts or chat closes
        return () => {
          document.head.removeChild(script);
        };
      }
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Clear the container
    const container = document.getElementById('chat-container');
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
          id="chat-container"
          className="flex-1 h-[420px] w-full"
        >
          {isOpen && (
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