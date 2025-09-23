import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInitialized, setChatInitialized] = useState(false);

  const initializeChat = () => {
    // Clear any existing chat
    const chatContainer = document.getElementById('n8n-chat-container');
    if (chatContainer) {
      chatContainer.innerHTML = '';
    }

    // Remove any existing scripts
    const existingScript = document.querySelector('#n8n-chat-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Wait a bit then initialize chat
    setTimeout(() => {
      const script = document.createElement('script');
      script.id = 'n8n-chat-script';
      script.type = 'module';
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        
        createChat({
          webhookUrl: 'https://benitjs.app.n8n.cloud/webhook/15ec5689-dd61-4429-9e21-a932e983b65a/chat',
          target: '#n8n-chat-container',
          mode: 'embedded',
          defaultHeight: 500,
          defaultWidth: 400,
          showWindowCloseButton: false,
          initialMessages: [
            {
              type: "welcome",
              text: "¡Hola! Soy AISA 🤖\\n\\nTu asistente virtual de SolarTech Argentina disponible 24/7!!"
            },
            "Estoy aquí para ayudarte con consultas sobre sistemas solares, técnicas y operativas. ¿En qué puedo asistirte hoy?"
          ],
          chatInputPlaceholder: "Escribe un mensaje",
          subtitle: "En línea",
          theme: {
            header: {
              backgroundColor: '#075e54',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500'
            },
            chatWindow: {
              backgroundColor: '#e5ddd5',
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px)',
              height: '420px',
              padding: '8px',
              overflowY: 'auto',
              scrollBehavior: 'smooth'
            },
            input: {
              backgroundColor: 'white',
              borderColor: '#d1d7db',
              borderRadius: '20px',
              fontSize: '14px',
              padding: '12px 16px',
              border: '1px solid #d1d7db',
              minHeight: '44px',
              maxHeight: '100px',
              resize: 'vertical',
              outline: 'none',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            },
            sendButton: {
              backgroundColor: '#25d366',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              border: 'none',
              marginLeft: '8px'
            },
            userMessage: {
              backgroundColor: '#dcf8c6',
              color: '#303030',
              borderRadius: '18px 18px 4px 18px',
              padding: '8px 12px',
              marginBottom: '4px',
              marginLeft: '60px',
              boxShadow: '0 1px 0.5px rgba(0,0,0,.13)',
              fontSize: '14px',
              maxWidth: '80%',
              alignSelf: 'flex-end'
            },
            botMessage: {
              backgroundColor: 'white',
              color: '#303030',
              borderRadius: '18px 18px 18px 4px',
              padding: '8px 12px',
              marginBottom: '4px',
              marginRight: '60px',
              boxShadow: '0 1px 0.5px rgba(0,0,0,.13)',
              fontSize: '14px',
              maxWidth: '80%',
              alignSelf: 'flex-start'
            }
          }
        });
      `;
      
      document.head.appendChild(script);
      setChatInitialized(true);
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      initializeChat();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setChatInitialized(false);
    // Clear chat container
    const chatContainer = document.getElementById('n8n-chat-container');
    if (chatContainer) {
      chatContainer.innerHTML = '';
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
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
          id="n8n-chat-container" 
          className="flex-1 h-[420px] w-full"
        >
          {isOpen && !chatInitialized && (
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