/**
 * Card Component - Ekko 2 Care
 * 
 * Componente base de tarjeta reutilizable según PRD
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 */

'use client';

import React from 'react';

export interface CardProps {
  /**
   * Contenido de la tarjeta
   */
  children: React.ReactNode;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Handler de click (opcional)
   */
  onClick?: () => void;
  
  /**
   * Indica si la tarjeta es clickeable
   * @default false
   */
  clickable?: boolean;
}

/**
 * Componente Card base reutilizable
 * 
 * @example
 * ```tsx
 * <Card onClick={handleClick} clickable>
 *   <h3>Título</h3>
 *   <p>Contenido</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  clickable = false,
}) => {
  const baseClasses = `
    bg-white rounded-lg
    border border-border
    shadow-sm
    transition-all duration-200
  `;
  
  const interactiveClasses = clickable || onClick
    ? `
      cursor-pointer
      hover:shadow-lg hover:scale-[1.02]
      active:scale-[0.98]
    `
    : '';
  
  const combinedClasses = `
    ${baseClasses}
    ${interactiveClasses}
    ${className}
  `.trim();

  const Component = onClick || clickable ? 'button' : 'div';
  
  return (
    <Component
      onClick={onClick}
      className={combinedClasses}
      type={Component === 'button' ? 'button' : undefined}
    >
      {children}
    </Component>
  );
};

export default Card;

