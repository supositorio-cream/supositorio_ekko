/**
 * Avatar Component - Ekko 2 Care
 * 
 * Componente de avatar para perfiles de usuario
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 */

'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Tamaños de avatar
 */
export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps {
  /**
   * URL de la imagen del avatar
   */
  src?: string;
  
  /**
   * Alt text para la imagen
   */
  alt?: string;
  
  /**
   * Nombre del usuario (para iniciales de fallback)
   */
  name?: string;
  
  /**
   * Tamaño del avatar
   * @default 'medium'
   */
  size?: AvatarSize;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
}

/**
 * Mapeo de tamaños a clases CSS
 */
const sizeClasses: Record<AvatarSize, string> = {
  small: 'w-8 h-8 text-xs',
  medium: 'w-12 h-12 text-sm',
  large: 'w-16 h-16 text-base',
};

/**
 * Obtiene las iniciales del nombre
 */
function getInitials(name?: string): string {
  if (!name) return '?';
  
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Componente Avatar para perfiles de usuario
 * 
 * @example
 * ```tsx
 * <Avatar src="/avatar.jpg" alt="Usuario" name="Juan Pérez" size="large" />
 * <Avatar name="Juan Pérez" size="medium" />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'medium',
  className = '',
}) => {
  const initials = getInitials(name);
  const sizeClass = sizeClasses[size];
  
  const baseClasses = `
    rounded-full
    flex items-center justify-center
    bg-primary text-white
    font-bold
    overflow-hidden
    ${sizeClass}
    ${className}
  `;
  
  if (src) {
    return (
      <div className={baseClasses}>
        <Image
          src={src}
          alt={alt || name || 'Avatar'}
          width={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
          height={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  
  return (
    <div className={baseClasses} aria-label={alt || name || 'Avatar'}>
      {initials}
    </div>
  );
};

export default Avatar;

