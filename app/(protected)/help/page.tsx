/**
 * Help Page - Ekko 2 Care
 * 
 * Página de ayuda y preguntas frecuentes
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

export default function HelpPage() {
  const faqs = [
    {
      question: '¿Cómo publico un producto?',
      answer: 'Ve a tu perfil y haz clic en "Publicar Producto". Completa el formulario con la información de tu producto y una imagen. Recuerda que esta es una plataforma de trueque, no de compra-venta.',
    },
    {
      question: '¿Cómo contacto a un vendedor?',
      answer: 'En la página de detalles del producto, encontrarás un formulario para enviar un mensaje al vendedor. Una vez enviado, podrás ver la conversación en la sección de Chats.',
    },
    {
      question: '¿Cómo busco productos?',
      answer: 'Usa la barra de búsqueda en la página de búsqueda. Puedes buscar por nombre, descripción o ubicación del producto.',
    },
    {
      question: '¿Qué es el trueque?',
      answer: 'El trueque es el intercambio de productos o servicios sin usar dinero. En Ekko 2 Care, puedes intercambiar productos ecológicos y sostenibles con otros miembros de la comunidad.',
    },
    {
      question: '¿Cómo veo mis conversaciones?',
      answer: 'Ve a la sección de Chats desde el menú inferior. Allí verás todas tus conversaciones activas con otros usuarios.',
    },
    {
      question: '¿Puedo editar mi perfil?',
      answer: 'Sí, en tu página de perfil encontrarás un botón "Editar Perfil" donde puedes actualizar tu información personal.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href={ROUTES.HOME}>
          <button
            className="p-2 hover:bg-surface rounded-lg transition-colors"
            aria-label="Volver"
          >
            <Icon
              icon={getIcon('chevron-left')}
              size={24}
              color="dark-green"
            />
          </button>
        </Link>
        <h1 className="font-bold text-2xl text-text-primary">
          Ayuda
        </h1>
      </div>

      {/* Sección de bienvenida */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <h2 className="font-bold text-xl text-text-primary mb-3">
          Bienvenido a Ekko 2 Care
        </h2>
        <p className="font-regular text-base text-text-secondary mb-4">
          Ekko 2 Care es una plataforma de trueque ecológico donde puedes intercambiar productos 
          sostenibles con otros miembros de la comunidad. Aquí encontrarás respuestas a las 
          preguntas más comunes.
        </p>
      </div>

      {/* Preguntas Frecuentes */}
      <section aria-label="Preguntas frecuentes">
        <h2 className="font-bold text-xl text-text-primary mb-4">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 border-l-4 border-primary"
            >
              <h3 className="font-bold text-base text-text-primary mb-2">
                {faq.question}
              </h3>
              <p className="font-regular text-sm text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="mt-8 bg-white rounded-lg p-6">
        <h2 className="font-bold text-xl text-text-primary mb-3">
          ¿Necesitas más ayuda?
        </h2>
        <p className="font-regular text-base text-text-secondary mb-4">
          Si no encuentras la respuesta que buscas, puedes contactarnos a través de:
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Icon
              icon={getIcon('settings')}
              size={20}
              color="dark-green"
            />
            <span className="font-regular text-base text-text-primary">
              Email: soporte@ekko2care.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

