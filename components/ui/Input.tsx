/**
 * Input Component - Ekko 2 Care
 * 
 * Componente de input para formularios según PRD
 * 
 * @see PRD.md Section 8.2: Typography
 */

'use client';

import React from 'react';
import { Label } from './Label';

export interface InputProps {
  /**
   * Etiqueta del input
   */
  label?: string;
  
  /**
   * ID del input
   */
  id?: string;
  
  /**
   * Nombre del input
   */
  name?: string;
  
  /**
   * Tipo de input HTML
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  
  /**
   * Placeholder del input
   */
  placeholder?: string;
  
  /**
   * Valor del input
   */
  value?: string;
  
  /**
   * Handler de cambio
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Mensaje de error
   */
  error?: string;
  
  /**
   * Estado disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Campo requerido
   * @default false
   */
  required?: boolean;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Atributos adicionales del input
   */
  [key: string]: any;
}

/**
 * Componente Input para formularios
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Correo electrónico"
 *   type="email"
 *   placeholder="ejemplo@correo.com"
 *   required
 *   error={errors.email}
 * />
 * ```
 */
export const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = `
    w-full px-4 py-3
    font-regular text-base text-text-primary
    bg-white border-2 rounded-lg
    placeholder:text-text-secondary
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const stateClasses = error
    ? 'border-error focus:border-error focus:ring-error'
    : 'border-border focus:border-primary';
  
  const combinedClasses = `
    ${baseClasses}
    ${stateClasses}
    ${className}
  `.trim();

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={inputId} required={required}>
          {label}
        </Label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={combinedClasses}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;

