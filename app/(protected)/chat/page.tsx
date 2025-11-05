/**
 * Chat List Page - Ekko 2 Care
 * 
 * Página de lista de chats según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Avatar } from '@/components/ui';
import { mockChats, getUserById, currentUser } from '@/lib/mockData';
import { ROUTES } from '@/lib/constants';

export default function ChatListPage() {
  const chats = mockChats;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl text-text-primary mb-6">
        Chats
      </h1>

      {chats.length > 0 ? (
        <div className="space-y-3">
          {chats.map((chat) => {
            const contactId = chat.userId1 === 'current-user' ? chat.userId2 : chat.userId1;
            const contact = getUserById(contactId);
            
            if (!contact) return null;
            
            return (
              <Link
                key={chat.id}
                href={`${ROUTES.CHAT}/${chat.id}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Avatar
                  src={contact.avatar}
                  name={contact.name}
                  size="large"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-text-primary mb-1">
                    {contact.name}
                  </h3>
                  {chat.lastMessage && (
                    <p className="font-regular text-sm text-text-secondary truncate">
                      {chat.lastMessage.text}
                    </p>
                  )}
                </div>
                {chat.lastMessage && (
                  <div className="text-right">
                    <span className="font-regular text-xs text-text-secondary whitespace-nowrap">
                      {new Date(chat.lastMessage.timestamp).toLocaleDateString('es-MX', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <p className="font-regular text-xs text-text-secondary mt-1">
                      {new Date(chat.lastMessage.timestamp).toLocaleTimeString('es-MX', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="font-regular text-lg text-text-secondary">
            No tienes conversaciones activas
          </p>
        </div>
      )}
    </div>
  );
}

