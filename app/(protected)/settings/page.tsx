/**
 * Settings Page - Ekko 2 Care
 * 
 * Página de configuración de la aplicación
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Icon } from '@/components/ui';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';
import { useAuth } from '@/contexts/AuthContext';

export default function SettingsPage() {
  const router = useRouter();
  const { logout } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceAnimations, setReduceAnimations] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  const handleLogout = () => {
    logout();
    router.push(ROUTES.LOGIN);
  };

  const settingsSections = [
    {
      title: 'Notificaciones',
      items: [
        {
          label: 'Notificaciones push',
          description: 'Recibe notificaciones sobre mensajes y actualizaciones',
          value: notifications,
          onChange: setNotifications,
        },
        {
          label: 'Notificaciones por email',
          description: 'Recibe actualizaciones importantes por correo electrónico',
          value: emailNotifications,
          onChange: setEmailNotifications,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href={ROUTES.PROFILE}>
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
          Configuración
        </h1>
      </div>

      {/* Secciones de configuración */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-lg p-6">
            <h2 className="font-bold text-lg text-text-primary mb-4">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                >
                  <div className="flex-1">
                    <p className="font-bold text-base text-text-primary mb-1">
                      {item.label}
                    </p>
                    <p className="font-regular text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.value}
                      onChange={(e) => item.onChange(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-border rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sección de Accesibilidad */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="font-bold text-lg text-text-primary mb-4">
            Accesibilidad
          </h2>
          <div className="space-y-4">
            {/* Tamaño de fuente */}
            <div className="py-3 border-b border-border">
              <div className="flex-1 mb-3">
                <p className="font-bold text-base text-text-primary mb-1">
                  Tamaño de fuente
                </p>
                <p className="font-regular text-sm text-text-secondary">
                  Ajusta el tamaño del texto para mejorar la legibilidad
                </p>
              </div>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className={`
                      flex-1 px-4 py-2 rounded-lg border-2 transition-colors
                      font-regular text-sm
                      ${
                        fontSize === size
                          ? 'border-primary bg-primary text-white'
                          : 'border-border bg-white text-text-primary hover:bg-surface'
                      }
                    `}
                  >
                    {size === 'small' ? 'Pequeño' : size === 'medium' ? 'Mediano' : 'Grande'}
                  </button>
                ))}
              </div>
            </div>

            {/* Alto contraste */}
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex-1">
                <p className="font-bold text-base text-text-primary mb-1">
                  Alto contraste
                </p>
                <p className="font-regular text-sm text-text-secondary">
                  Aumenta el contraste de colores para mejorar la visibilidad
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Reducir animaciones */}
            <div className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
              <div className="flex-1">
                <p className="font-bold text-base text-text-primary mb-1">
                  Reducir animaciones
                </p>
                <p className="font-regular text-sm text-text-secondary">
                  Minimiza las animaciones y transiciones para reducir distracciones
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={reduceAnimations}
                  onChange={(e) => setReduceAnimations(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Sección de cuenta */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="font-bold text-lg text-text-primary mb-4">
            Cuenta
          </h2>
          <div className="space-y-3">
            <Link href={ROUTES.PROFILE}>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-surface rounded-lg transition-colors text-left">
                <Icon
                  icon={getIcon('profile')}
                  size={20}
                  color="dark-green"
                />
                <span className="font-regular text-base text-text-primary">
                  Ver mi perfil
                </span>
              </button>
            </Link>
            <Link href={ROUTES.HELP}>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-surface rounded-lg transition-colors text-left">
                <Icon
                  icon={getIcon('settings')}
                  size={20}
                  color="dark-green"
                />
                <span className="font-regular text-base text-text-primary">
                  Ayuda y soporte
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Sección de privacidad */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="font-bold text-lg text-text-primary mb-4">
            Privacidad y Seguridad
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-surface rounded-lg transition-colors text-left">
              <Icon
                icon={getIcon('settings')}
                size={20}
                color="dark-green"
              />
              <span className="font-regular text-base text-text-primary">
                Política de privacidad
              </span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-surface rounded-lg transition-colors text-left">
              <Icon
                icon={getIcon('settings')}
                size={20}
                color="dark-green"
              />
              <span className="font-regular text-base text-text-primary">
                Términos y condiciones
              </span>
            </button>
          </div>
        </div>

        {/* Botón de cerrar sesión */}
        <div className="bg-white rounded-lg p-6">
          <Button
            variant="secondary"
            size="large"
            onClick={handleLogout}
            className="w-full"
          >
            <div className="flex items-center justify-center gap-2">
              <Icon
                icon={getIcon('logout')}
                size={20}
                color="dark-green"
              />
              <span>Cerrar Sesión</span>
            </div>
          </Button>
        </div>

        {/* Información de la app */}
        <div className="bg-surface rounded-lg p-6 text-center">
          <p className="font-regular text-sm text-text-secondary mb-2">
            Ekko 2 Care
          </p>
          <p className="font-regular text-xs text-text-secondary">
            Versión 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}

