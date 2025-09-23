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
      text: "¡Hola! Soy ALP 🤖\n\nTu asistente virtual de SolarTech Argentina disponible 24/7!",
      isBot: true,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "Estoy aquí para ayudarte con consultas sobre sistemas solares, técnicas y operativas. ¿En qué puedo asistirte hoy?",
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
      const response = await fetch('https://benitjs.app.n8n.cloud/webhook/15ec5689-dd61-4429-9e21-a932e983b65a/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('N8N Response:', data);

      // Try to extract response from various possible fields
      const botResponse = data.response || data.reply || data.message || data.text || data.output || data.data;
      
      if (botResponse) {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('No response content received');
      }
    } catch (error) {
      console.error('Error:', error);
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `❌ No pude conectar con el asistente virtual. Por favor, intenta nuevamente o contacta por WhatsApp directamente.`,
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
    setMessages([]);
    setInputValue('');
    setIsTyping(false);
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

        {/* Chat Messages Area */}
        <div 
          className="flex-1 h-[350px] overflow-y-auto p-4 bg-gray-50"
          style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px)' 
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${
                  message.isBot
                    ? 'bg-white text-gray-800 rounded-br-lg rounded-bl-sm rounded-tr-lg rounded-tl-lg'
                    : 'bg-green-500 text-white rounded-bl-lg rounded-br-sm rounded-tl-lg rounded-tr-lg'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-green-100'}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start mb-3">
              <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 max-h-20"
              rows={1}
              style={{ minHeight: '40px' }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ''}
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 flex items-center justify-center p-0"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat;