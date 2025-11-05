/**
 * Icons Configuration - Ekko 2 Care
 * 
 * Constantes y tipos para iconos según PRD
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 * 
 * @remarks
 * PRD Section 8.3:
 * - Icon Source: Flaticon
 * - Style: Outline icons, monochromatic (dark green or white)
 */

import { IconType } from 'react-icons';
import {
  FiHome,
  FiSearch,
  FiMessageCircle,
  FiUser,
  FiPlus,
  FiMapPin,
  FiHeart,
  FiShare2,
  FiSettings,
  FiLogOut,
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiCheck,
  FiMenu,
  FiBell,
  FiShoppingBag,
} from 'react-icons/fi';

/**
 * Nombres de iconos usados en la aplicación
 * 
 * Estos corresponden a los iconos principales según el PRD:
 * - NavBar: Home, Search, Chat, Profile
 * - Acciones: Add, Edit, Delete, Share, etc.
 */
export type IconName =
  | 'home'
  | 'search'
  | 'chat'
  | 'profile'
  | 'add'
  | 'location'
  | 'heart'
  | 'share'
  | 'settings'
  | 'logout'
  | 'edit'
  | 'delete'
  | 'chevron-left'
  | 'chevron-right'
  | 'close'
  | 'check'
  | 'menu'
  | 'bell'
  | 'shopping-bag';

/**
 * Mapeo de nombres de iconos a componentes de react-icons
 * 
 * Usamos Feather Icons (fi) de react-icons que son outline por defecto
 */
export const iconMap: Record<IconName, IconType> = {
  'home': FiHome,
  'search': FiSearch,
  'chat': FiMessageCircle,
  'profile': FiUser,
  'add': FiPlus,
  'location': FiMapPin,
  'heart': FiHeart,
  'share': FiShare2,
  'settings': FiSettings,
  'logout': FiLogOut,
  'edit': FiEdit,
  'delete': FiTrash2,
  'chevron-left': FiChevronLeft,
  'chevron-right': FiChevronRight,
  'close': FiX,
  'check': FiCheck,
  'menu': FiMenu,
  'bell': FiBell,
  'shopping-bag': FiShoppingBag,
};

/**
 * Obtiene el componente de icono por su nombre
 * 
 * @param name - Nombre del icono
 * @returns Componente de icono de react-icons
 * 
 * @example
 * ```ts
 * const HomeIcon = getIcon('home');
 * ```
 */
export function getIcon(name: IconName): IconType {
  return iconMap[name];
}

/**
 * Iconos de navegación según PRD
 * NavBar: Home, Search, Chat, Profile
 */
export const navigationIcons: IconName[] = [
  'home',
  'search',
  'chat',
  'profile',
];

/**
 * Constante de iconos para uso en componentes
 */
export const icons = {
  map: iconMap,
  getIcon,
  navigationIcons,
} as const;

export default icons;

