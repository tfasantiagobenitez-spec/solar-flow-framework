import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInitialized, setChatInitialized] = useState(false);

  useEffect(() => {
    if (isOpen && !chatInitialized) {
      // Dynamically load the n8n chat widget
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        
        createChat({
          webhookUrl: 'https://benitjs.app.n8n.cloud/webhook/15ec5689-dd61-4429-9e21-a932e983b65a/chat',
          target: '#n8n-chat-container',
          mode: 'window',
          defaultHeight: 600,
          defaultWidth: 400,
          showWindowCloseButton: false,
          theme: {
            header: {
              backgroundColor: '#22c55e',
              color: 'white'
            }
          }
        });
      `;
      
      document.head.appendChild(script);
      setChatInitialized(true);

      // Cleanup function
      return () => {
        const chatContainer = document.getElementById('n8n-chat-container');
        if (chatContainer) {
          chatContainer.innerHTML = '';
        }
      };
    }
  }, [isOpen, chatInitialized]);

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
        className={`fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-xl transition-all duration-300 overflow-hidden ${
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
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-green-600 p-1"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Chat Container */}
        <div 
          id="n8n-chat-container" 
          className="flex-1 h-80 w-full"
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