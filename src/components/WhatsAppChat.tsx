import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Te damos la bienvenida a SolarTech Argentina. ¿En qué podemos ayudarte con tu proyecto de energía solar?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://benitjs.app.n8n.cloud/webhook/67a2bb5c-71e7-46f0-b350-9f5aeec61d99', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          message: userMessage.text,
          timestamp: userMessage.timestamp.toISOString(),
          from: 'website_chat',
        }),
      });

      // Auto-response after sending to webhook
      setTimeout(() => {
        const autoResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Gracias por tu mensaje. Nuestro equipo se pondrá en contacto contigo pronto para ayudarte con tu consulta sobre energía solar. 🌞',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, autoResponse]);
      }, 1500);

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
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
        className={`fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-xl transition-all duration-300 ${
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

        {/* Messages */}
        <div className="flex-1 p-4 h-64 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-3 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg.isUser
                    ? 'bg-green-500 text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-3">
              <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm px-3 py-2 text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="sm"
              className="bg-green-500 hover:bg-green-600"
              disabled={isLoading || !message.trim()}
            >
              <Send size={16} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WhatsAppChat;