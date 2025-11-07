/**
 * Button Component - Ekko 2 Care
 * 
 * Componente de botón con variantes según PRD
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 * 
 * @remarks
 * PRD Section 8.3:
 * - Primary: filled green (#3CB371), white text
 * - Secondary: outlined, green border
 * - Floating Action Button (FAB): circular, white "+" icon
 */

'use client';

import React from 'react';
import { Icon } from './Icon';
import { getIcon } from '@/lib/icons';

/**
 * Variantes de botón según PRD
 */
export type ButtonVariant = 'primary' | 'secondary' | 'fab';

/**
 * Tamaños de botón
 */
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * Variante del botón según PRD
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Tamaño del botón
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Contenido del botón (texto o elementos)
   */
  children?: React.ReactNode;
  
  /**
   * Handler de click
   */
  onClick?: () => void;
  
  /**
   * Estado disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Estado loading (solo para primary y secondary)
   * @default false
   */
  loading?: boolean;
  
  /**
   * Tipo de botón HTML
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Aria label para accesibilidad
   */
  'aria-label'?: string;
}

/**
 * Mapeo de tamaños a clases CSS
 * 
 * @remarks
 * Touch targets mínimo: 44x44px según accesibilidad móvil
 * - small: 44px (h-11) - mínimo para touch
 * - medium: 48px (h-12) - recomendado para botones principales
 * - large: 56px (h-14) - botones destacados
 */
const sizeClasses: Record<ButtonSize, string> = {
  small: 'h-11 px-4 text-sm min-w-[44px]', // 44px mínimo para touch
  medium: 'h-12 px-6 text-base',
  large: 'h-14 px-8 text-lg',
};

/**
 * Componente Button con variantes según PRD
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Iniciar Sesión
 * </Button>
 * 
 * <Button variant="secondary" size="small">
 *   Cancelar
 * </Button>
 * 
 * <Button variant="fab" onClick={handleAdd} />
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
}) => {
  // FAB tiene su propio tamaño y estilo
  if (variant === 'fab') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel || 'Agregar'}
        className={`
          fixed bottom-20 right-4 z-50
          w-14 h-14 rounded-full
          bg-primary hover:bg-primary-dark
          text-white
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          active:scale-95
          ${className}
        `}
      >
        <Icon
          icon={getIcon('add')}
          size={24}
          color="white"
        />
      </button>
    );
  }

  // Variantes Primary y Secondary
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-full
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    ${sizeClasses[size]}
  `;

  const variantClasses = {
    primary: `
      bg-primary hover:bg-primary-dark active:bg-primary-dark
      text-white
      shadow-md hover:shadow-lg
      active:scale-95
    `,
    secondary: `
      border-2 border-primary
      bg-transparent hover:bg-primary hover:bg-opacity-10
      text-primary hover:text-primary-dark
      active:scale-95
    `,
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      className={combinedClasses}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

