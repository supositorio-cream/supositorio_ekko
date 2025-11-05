/**
 * Theme Configuration - Ekko 2 Care
 * 
 * Variables de tema centralizadas según PRD v1.0
 * Todos los colores están definidos con los valores exactos del PRD
 * 
 * @see PRD.md Section 8: UX/UI Guidelines - Color Palette
 */

/**
 * Colores principales según el PRD
 * 
 * @remarks
 * Valores exactos del PRD v1.0, Section 8.1 Color Palette
 */
export const colors = {
  /**
   * Primary - Leaf Green (#3CB371)
   * Used for buttons and active icons
   */
  primary: '#3CB371',
  
  /**
   * Secondary - Dark Green (#2E8B57)
   * Used for headers, footers, navigation
   */
  secondary: '#2E8B57',
  
  /**
   * Accent - Lime Yellow (#C7EA46)
   * Highlights and secondary CTAs
   */
  accent: '#C7EA46',
  
  /**
   * Background - Mint Green (#E7F1EF)
   * Cards and background surfaces
   */
  backgroundMint: '#E7F1EF',
  
  /**
   * Text - Dark Gray (#2F2F2F)
   * Main text color
   */
  textPrimary: '#2F2F2F',
  
  /**
   * Secondary Text - Medium Gray (#6F6F6F)
   * Descriptions and placeholders
   */
  textSecondary: '#6F6F6F',
  
  /**
   * Error - Coral (#FF6B6B)
   * Error or alert messages
   */
  error: '#FF6B6B',
  
  /**
   * Colores auxiliares
   */
  white: '#FFFFFF',
  black: '#212121',
  warmGray: '#F5F5F5',
  lightGray: '#E0E0E0',
} as const;

/**
 * Tipos de color según su uso en el PRD
 */
export type ColorRole = 
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'backgroundMint'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'
  | 'white'
  | 'black'
  | 'warmGray'
  | 'lightGray';

/**
 * Mapeo de roles de color a valores hexadecimales
 */
export const colorMap: Record<ColorRole, string> = {
  primary: colors.primary,
  secondary: colors.secondary,
  accent: colors.accent,
  backgroundMint: colors.backgroundMint,
  textPrimary: colors.textPrimary,
  textSecondary: colors.textSecondary,
  error: colors.error,
  white: colors.white,
  black: colors.black,
  warmGray: colors.warmGray,
  lightGray: colors.lightGray,
};

/**
 * Obtiene el valor hexadecimal de un color por su rol
 * 
 * @param role - Rol del color según el PRD
 * @returns Valor hexadecimal del color
 * 
 * @example
 * ```ts
 * const primaryColor = getColor('primary'); // '#3CB371'
 * ```
 */
export function getColor(role: ColorRole): string {
  return colorMap[role];
}

/**
 * Constantes de colores para uso en componentes
 * 
 * @remarks
 * Estos valores corresponden a las variables CSS definidas en globals.css
 */
export const theme = {
  colors,
  colorMap,
  getColor,
} as const;

export default theme;

