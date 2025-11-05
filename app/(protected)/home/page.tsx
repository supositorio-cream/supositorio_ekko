/**
 * Home Page - Ekko 2 Care
 * 
 * Página principal según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Avatar, ProductCard } from '@/components/ui';
import { currentUser, mockProducts, mockChats, getUserById } from '@/lib/mockData';
import { ROUTES } from '@/lib/constants';

export default function HomePage() {
  // Obtener productos recientes (últimos 3)
  const recentProducts = mockProducts.slice(0, 3);
  
  // Obtener productos recomendados (siguientes 4)
  const recommendedProducts = mockProducts.slice(3, 7);
  
  // Obtener chats activos
  const activeChats = mockChats.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header con información del usuario */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar
          src={currentUser.avatar}
          name={currentUser.name}
          size="medium"
        />
        <div>
          <h2 className="font-bold text-lg text-text-primary">
            Hola, {currentUser.name.split(' ')[0]}
          </h2>
          <p className="font-regular text-sm text-text-secondary">
            ¿Qué estás buscando hoy?
          </p>
        </div>
      </div>

      {/* Sección Recientemente Vistos */}
      <section className="mb-8">
        <h3 className="font-bold text-lg text-text-primary mb-4">
          Recientemente Vistos
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {recentProducts.map((product) => (
            <Link key={product.id} href={`${ROUTES.PRODUCT}/${product.id}`}>
              <ProductCard
                image={product.image}
                title={product.title}
                location={product.location}
                price={product.price}
                status={product.status === 'disponible' ? 'Disponible' : product.status === 'reservado' ? 'Reservado' : 'Vendido'}
                onClick={() => {}}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Sección Recomendados */}
      <section className="mb-8">
        <h3 className="font-bold text-lg text-text-primary mb-4">
          Recomendados para ti
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {recommendedProducts.map((product) => (
            <Link key={product.id} href={`${ROUTES.PRODUCT}/${product.id}`}>
              <ProductCard
                image={product.image}
                title={product.title}
                location={product.location}
                price={product.price}
                status={product.status === 'disponible' ? 'Disponible' : product.status === 'reservado' ? 'Reservado' : 'Vendido'}
                onClick={() => {}}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Sección Chats Activos */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-text-primary">
            Chats Activos
          </h3>
          <Link
            href={ROUTES.CHAT}
            className="text-primary font-regular text-sm hover:underline"
          >
            Ver todos
          </Link>
        </div>
        <div className="space-y-3">
          {activeChats.map((chat) => {
            const contactId = chat.userId1 === 'current-user' ? chat.userId2 : chat.userId1;
            const contact = getUserById(contactId);
            
            if (!contact) return null;
            
            return (
              <Link
                key={chat.id}
                href={`${ROUTES.CHAT}/${chat.id}`}
                className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Avatar
                  src={contact.avatar}
                  name={contact.name}
                  size="medium"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-text-primary truncate">
                    {contact.name}
                  </h4>
                  {chat.lastMessage && (
                    <p className="font-regular text-xs text-text-secondary truncate">
                      {chat.lastMessage.text}
                    </p>
                  )}
                </div>
                {chat.lastMessage && (
                  <span className="font-regular text-xs text-text-secondary whitespace-nowrap">
                    {new Date(chat.lastMessage.timestamp).toLocaleTimeString('es-MX', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

