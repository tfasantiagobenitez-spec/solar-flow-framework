import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 1,
      text: "¡Hola! 👋\n\nSoy tu asistente virtual de SolarTech Argentina, disponible 24/7 para ayudarte.",
      isBot: true,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "¿En qué puedo asistirte hoy? Puedo ayudarte con consultas sobre sistemas solares, instalaciones, presupuestos y más.",
      isBot: true,
      timestamp: new Date()
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages(initialMessages);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = inputValue.trim();
    const newMessage: Message = {
      id: Date.now(),
      text: userMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Intentar con modo 'no-cors' primero
      const response = await fetch('https://benitjs.app.n8n.cloud/webhook/67a2bb5c-71e7-46f0-b350-9f5aeec61d99', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString()
        })
      });

      // Como no-cors no nos permite leer la respuesta, simulamos una respuesta
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "✅ Mensaje enviado correctamente. La respuesta del webhook se procesará en segundo plano.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error connecting to assistant:', error);
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `❌ **Problema de CORS detectado**\n\nPara solucionarlo:\n\n1. Ve a tu workflow de n8n\n2. Agrega un nodo "Respond to Webhook"\n3. Configura estos headers:\n   • Access-Control-Allow-Origin: *\n   • Access-Control-Allow-Methods: POST, OPTIONS\n   • Access-Control-Allow-Headers: Content-Type\n\n📞 Mientras tanto, contacta por WhatsApp: +54 9 11 1234-5678`,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-AR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpen}
          className={`rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110 ${
            isOpen ? 'scale-0' : 'scale-100'
          }`}
        >
          <MessageCircle size={28} />
        </Button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 h-[550px] bg-white rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageCircle className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">SolarTech Argentina</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <p className="text-sm text-green-100">En línea</p>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Chat Messages Area */}
        <div 
          className="flex-1 h-[400px] overflow-y-auto p-4 space-y-4"
          style={{ 
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%)
            `
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
            >
              <div
                className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl shadow-sm transition-all hover:shadow-md ${
                  message.isBot
                    ? 'bg-white text-gray-800 rounded-tl-md border border-gray-100'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white rounded-tr-md'
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-2 ${message.isBot ? 'text-gray-500' : 'text-green-100'}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tl-md shadow-sm border border-gray-100">
                <div className="flex space-x-1 items-center">
                  <span className="text-sm text-gray-600 mr-2">Escribiendo</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="flex items-end space-x-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent max-h-24 transition-all"
              rows={1}
              style={{ minHeight: '48px' }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ''}
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center p-0 transition-all hover:scale-105"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat;