/**
 * ProductCard Component - Ekko 2 Care
 * 
 * Componente de tarjeta de producto según PRD
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 * 
 * @remarks
 * PRD Section 8.3:
 * - Cards with image, title, and location pin
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import { Icon } from './Icon';
import { getIcon } from '@/lib/icons';

export interface ProductCardProps {
  /**
   * URL de la imagen del producto
   */
  image: string;
  
  /**
   * Título del producto
   */
  title: string;
  
  /**
   * Ubicación del producto
   */
  location?: string;
  
  /**
   * Precio del producto
   */
  price?: string;
  
  /**
   * Estado del producto (ej: "Disponible", "Reservado")
   */
  status?: string;
  
  /**
   * Handler de click
   */
  onClick?: () => void;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Alt text para la imagen
   */
  alt?: string;
}

/**
 * Componente ProductCard para mostrar productos
 * 
 * @example
 * ```tsx
 * <ProductCard
 *   image="/product.jpg"
 *   title="Producto ejemplo"
 *   location="Ciudad, País"
 *   price="$50"
 *   status="Disponible"
 *   onClick={handleClick}
 * />
 * ```
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  location,
  price,
  status,
  onClick,
  className = '',
  alt,
}) => {
  return (
    <Card onClick={onClick} clickable className={className}>
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={alt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {status && (
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-bold">
            {status}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-base text-text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        
        {location && (
          <div className="flex items-center gap-1 text-text-secondary text-sm mb-2">
            <Icon
              icon={getIcon('location')}
              size={16}
              color="dark-green"
            />
            <span className="font-regular">{location}</span>
          </div>
        )}
        
        {price && (
          <p className="font-bold text-lg text-primary mt-2">
            {price}
          </p>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;

