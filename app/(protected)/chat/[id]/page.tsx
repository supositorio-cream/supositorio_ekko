/**
 * Chat Individual Page - Ekko 2 Care
 * 
 * Página de chat individual según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Button, Input, Icon } from '@/components/ui';
import { getChatById, getMessagesByChatId, getUserById, currentUser } from '@/lib/mockData';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

interface ChatPageProps {
  params: Promise<{ id: string }>;
}

export default function ChatPage({ params }: ChatPageProps) {
  const router = useRouter();
  const { id } = use(params);
  const chat = getChatById(id);
  const messages = getMessagesByChatId(id);
  const [messageText, setMessageText] = useState('');

  if (!chat) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="font-regular text-lg text-text-secondary">
          Chat no encontrado
        </p>
        <Link href={ROUTES.CHAT}>
          <Button variant="primary" className="mt-4">
            Volver a chats
          </Button>
        </Link>
      </div>
    );
  }

  const contactId = chat.userId1 === 'current-user' ? chat.userId2 : chat.userId1;
  const contact = getUserById(contactId);

  if (!contact) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="font-regular text-lg text-text-secondary">
          Contacto no encontrado
        </p>
        <Link href={ROUTES.CHAT}>
          <Button variant="primary" className="mt-4">
            Volver a chats
          </Button>
        </Link>
      </div>
    );
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    
    // Simular envío de mensaje (mock - según PRD, no hay backend)
    setMessageText('');
    // En una implementación real, aquí se enviaría el mensaje al backend
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header con información del contacto */}
      <div className="bg-white border-b border-border px-4 py-3 flex items-center gap-3">
        <Link href={ROUTES.CHAT}>
          <Icon
            icon={getIcon('chevron-left')}
            size={24}
            color="dark-green"
            className="cursor-pointer"
          />
        </Link>
        <Avatar
          src={contact.avatar}
          name={contact.name}
          size="medium"
        />
        <div className="flex-1">
          <h2 className="font-bold text-base text-text-primary">
            {contact.name}
          </h2>
        </div>
      </div>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => {
          const isSent = message.senderId === 'current-user';
          const sender = isSent ? currentUser : contact;

          return (
            <div
              key={message.id}
              className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[80%] ${isSent ? 'flex-row-reverse' : 'flex-row'}`}>
                {!isSent && (
                  <Avatar
                    src={sender?.avatar}
                    name={sender?.name || ''}
                    size="small"
                  />
                )}
                <div className={`rounded-lg px-4 py-2 ${isSent ? 'bg-primary text-white' : 'bg-white text-text-primary'}`}>
                  <p className={`font-regular text-sm ${isSent ? 'text-white' : 'text-text-primary'}`}>
                    {message.text}
                  </p>
                  <p className={`font-regular text-xs mt-1 ${isSent ? 'text-white/70' : 'text-text-secondary'}`}>
                    {new Date(message.timestamp).toLocaleTimeString('es-MX', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input de mensaje */}
      <form
        onSubmit={handleSendMessage}
        className="bg-white border-t border-border px-4 py-3 flex gap-2"
      >
        <Input
          type="text"
          placeholder="Escribe un mensaje..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="flex-1"
          label=""
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!messageText.trim()}
          className="px-6"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

