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
import Image from 'next/image';
import { Avatar, Button, Input, Icon } from '@/components/ui';
import { getChatById, getMessagesByChatId, getUserById, currentUser, getProductsByUserId, mockProducts } from '@/lib/mockData';
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
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  
  // Obtener productos del usuario actual para intercambiar
  const userProducts = getProductsByUserId(currentUser.id);

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

  const handleAddProduct = (productId: string) => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
      setShowProductSelector(false);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(id => id !== productId));
  };

  const getProductById = (productId: string) => {
    return mockProducts.find(p => p.id === productId);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header con información del contacto */}
      <div className="bg-white border-b border-border px-4 py-3 flex items-center gap-3">
        <Link href={ROUTES.CHAT} aria-label="Volver a lista de chats">
          <Icon
            icon={getIcon('chevron-left')}
            size={24}
            color="dark-green"
            className="cursor-pointer"
            aria-label="Volver"
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
      <div 
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
        role="log"
        aria-label="Mensajes de la conversación"
        aria-live="polite"
      >
        {messages.map((message) => {
          const isSent = message.senderId === 'current-user';
          const sender = isSent ? currentUser : contact;

          return (
            <div
              key={message.id}
              className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}
              role="article"
              aria-label={isSent ? `Mensaje enviado: ${message.text}` : `Mensaje recibido de ${contact.name}: ${message.text}`}
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

        {/* Productos agregados al intercambio */}
        {selectedProducts.length > 0 && (
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-primary rounded-lg p-4">
                <p className="font-bold text-sm text-white mb-2">
                  Productos para intercambiar:
                </p>
                <div className="space-y-2">
                  {selectedProducts.map((productId) => {
                    const product = getProductById(productId);
                    if (!product) return null;
                    
                    return (
                      <div
                        key={productId}
                        className="bg-white/20 rounded-lg p-2 flex items-center gap-2"
                      >
                        <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-xs text-white truncate">
                            {product.title}
                          </p>
                          <p className="font-regular text-xs text-white/80 truncate">
                            {product.location}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveProduct(productId)}
                          className="p-1 hover:bg-white/20 rounded transition-colors"
                          aria-label={`Eliminar ${product.title} del intercambio`}
                        >
                          <Icon
                            icon={getIcon('close')}
                            size={16}
                            color="white"
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selector de productos (modal) */}
      {showProductSelector && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-lg w-full max-h-[70vh] flex flex-col mb-16">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-bold text-lg text-text-primary">
                Agregar producto a intercambiar
              </h3>
              <button
                onClick={() => setShowProductSelector(false)}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
                aria-label="Cerrar selector de productos"
              >
                <Icon
                  icon={getIcon('close')}
                  size={24}
                  color="dark-green"
                />
              </button>
            </div>
            <div className="overflow-y-auto p-4 pb-24 space-y-3">
              {userProducts.length > 0 ? (
                userProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleAddProduct(product.id)}
                    disabled={selectedProducts.includes(product.id)}
                    className={`
                      w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-colors text-left
                      ${
                        selectedProducts.includes(product.id)
                          ? 'border-primary bg-primary/10 cursor-not-allowed opacity-50'
                          : 'border-border hover:border-primary hover:bg-surface'
                      }
                    `}
                  >
                    <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-text-primary truncate">
                        {product.title}
                      </p>
                      <p className="font-regular text-xs text-text-secondary truncate">
                        {product.location}
                      </p>
                    </div>
                    {selectedProducts.includes(product.id) && (
                      <Icon
                        icon={getIcon('check')}
                        size={20}
                        color="dark-green"
                      />
                    )}
                  </button>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="font-regular text-base text-text-secondary mb-2">
                    No tienes productos publicados
                  </p>
                  <Link href={ROUTES.PRODUCT_NEW}>
                    <Button variant="primary" size="medium">
                      Publicar Producto
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Input de mensaje */}
      <form
        onSubmit={handleSendMessage}
        className="bg-white border-t border-border px-4 py-3 flex gap-2"
        aria-label="Formulario de mensaje"
      >
        <button
          type="button"
          onClick={() => setShowProductSelector(true)}
          className="p-2 hover:bg-surface rounded-lg transition-colors"
          aria-label="Agregar producto a intercambiar"
        >
          <Icon
            icon={getIcon('shopping-bag')}
            size={24}
            color="dark-green"
          />
        </button>
        <Input
          type="text"
          placeholder="Escribe un mensaje..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="flex-1"
          label=""
          aria-label="Escribe un mensaje"
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!messageText.trim()}
          className="px-6"
          aria-label="Enviar mensaje"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

