/**
 * Product Details Page - Ekko 2 Care
 * 
 * Página de detalles de producto según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { Button, Avatar, Badge, ProductCard, Icon } from '@/components/ui';
import { getProductById, mockProducts, getUserById } from '@/lib/mockData';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = getProductById(id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="font-regular text-lg text-text-secondary">
          Producto no encontrado
        </p>
        <Link href={ROUTES.HOME}>
          <Button variant="primary" className="mt-4">
            Volver al inicio
          </Button>
        </Link>
      </div>
    );
  }

  // Obtener productos similares (excluyendo el actual)
  const similarProducts = mockProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const statusBadgeVariant = product.status === 'disponible' 
    ? 'primary' 
    : product.status === 'reservado' 
    ? 'accent' 
    : 'default';

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Imagen principal del producto */}
      <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {product.status && (
          <div className="absolute top-4 right-4">
            <Badge variant={statusBadgeVariant}>
              {product.status === 'disponible' ? 'Disponible' : product.status === 'reservado' ? 'Reservado' : 'Vendido'}
            </Badge>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="mb-6">
        <h1 className="font-bold text-2xl text-text-primary mb-2">
          {product.title}
        </h1>
        <p className="font-bold text-3xl text-primary mb-4">
          {product.price}
        </p>
        <p className="font-regular text-base text-text-primary mb-4">
          {product.description}
        </p>
        
        {/* Ubicación */}
        <div className="flex items-center gap-2 mb-4">
          <Icon
            icon={getIcon('location')}
            size={20}
            color="dark-green"
          />
          <span className="font-regular text-sm text-text-secondary">
            {product.location}
          </span>
        </div>
      </div>

      {/* Información del vendedor */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <h3 className="font-bold text-base text-text-primary mb-3">
          Vendedor
        </h3>
        <Link href={ROUTES.PROFILE} className="flex items-center gap-3">
          <Avatar
            src={product.seller.avatar}
            name={product.seller.name}
            size="medium"
          />
          <div>
            <p className="font-bold text-sm text-text-primary">
              {product.seller.name}
            </p>
            <p className="font-regular text-xs text-text-secondary">
              {product.seller.email}
            </p>
          </div>
        </Link>
      </div>

      {/* Botón de acción */}
      <Button
        variant="primary"
        size="large"
        className="w-full mb-8"
        onClick={() => {
          // Navegar a chat o acción según PRD
          window.location.href = `${ROUTES.CHAT}/1`;
        }}
      >
        Contactar Vendedor
      </Button>

      {/* Productos Similares */}
      {similarProducts.length > 0 && (
        <section>
          <h3 className="font-bold text-lg text-text-primary mb-4">
            Productos Similares
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {similarProducts.map((similarProduct) => (
              <Link key={similarProduct.id} href={`${ROUTES.PRODUCT}/${similarProduct.id}`}>
                <ProductCard
                  image={similarProduct.image}
                  title={similarProduct.title}
                  location={similarProduct.location}
                  price={similarProduct.price}
                  status={similarProduct.status === 'disponible' ? 'Disponible' : similarProduct.status === 'reservado' ? 'Reservado' : 'Vendido'}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

