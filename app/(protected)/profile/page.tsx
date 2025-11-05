/**
 * Profile Page - Ekko 2 Care
 * 
 * Página de perfil según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Avatar, Button, ProductCard, Icon } from '@/components/ui';
import { currentUser, getProductsByUserId } from '@/lib/mockData';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

export default function ProfilePage() {
  // Obtener productos del usuario actual
  const userProducts = getProductsByUserId(currentUser.id);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Información del usuario */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex flex-col items-center mb-6">
          <Avatar
            src={currentUser.avatar}
            name={currentUser.name}
            size="large"
          />
          <h1 className="font-bold text-2xl text-text-primary mt-4 mb-2">
            {currentUser.name}
          </h1>
          <p className="font-regular text-base text-text-secondary mb-4">
            {currentUser.email}
          </p>
          <Button
            variant="secondary"
            size="medium"
            onClick={() => {
              // En una implementación real, abrir modal de edición
            }}
          >
            Editar Perfil
          </Button>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-3 pt-4 border-t border-border">
          <button
            className="flex items-center gap-3 p-3 hover:bg-surface rounded-lg transition-colors"
            onClick={() => {
              // En una implementación real, abrir configuración
            }}
          >
            <Icon
              icon={getIcon('settings')}
              size={20}
              color="dark-green"
            />
            <span className="font-regular text-base text-text-primary">
              Configuración
            </span>
          </button>
          <button
            className="flex items-center gap-3 p-3 hover:bg-surface rounded-lg transition-colors text-left"
            onClick={() => {
              // En una implementación real, cerrar sesión
              window.location.href = ROUTES.LOGIN;
            }}
          >
            <Icon
              icon={getIcon('logout')}
              size={20}
              color="dark-green"
            />
            <span className="font-regular text-base text-error">
              Cerrar Sesión
            </span>
          </button>
        </div>
      </div>

      {/* Sección Mis Productos Publicados */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg text-text-primary">
            Mis Productos Publicados
          </h2>
          <span className="font-regular text-sm text-text-secondary">
            {userProducts.length} {userProducts.length === 1 ? 'producto' : 'productos'}
          </span>
        </div>

        {userProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {userProducts.map((product) => (
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
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="font-regular text-base text-text-secondary mb-4">
              Aún no has publicado ningún producto
            </p>
            <Button
              variant="primary"
              onClick={() => {
                // En una implementación real, abrir modal de crear producto
              }}
            >
              Publicar Producto
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

