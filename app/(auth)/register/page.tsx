/**
 * Register Page - Ekko 2 Care
 * 
 * Página de registro según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/ui';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/lib/constants';

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simular registro exitoso y luego hacer login automático
      // En un caso real, aquí se llamaría a una API de registro
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Después del registro, hacer login automático
      const success = await login(email, password);
      if (success) {
        router.push(ROUTES.HOME);
      } else {
        setRegisterError('Error al registrar usuario. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setRegisterError('Error al registrarse. Por favor, intenta de nuevo.');
      console.error('Register error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Ekko 2 Care
        </h1>
        <p className="text-text-secondary font-regular">
          Crea tu cuenta para comenzar
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {registerError && (
          <div className="p-3 bg-error/10 border border-error rounded-lg text-error text-sm font-regular">
            {registerError}
          </div>
        )}
        <Input
          label="Nombre completo"
          type="text"
          placeholder="Juan Pérez"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          required
          disabled={isLoading}
        />

        <Input
          label="Correo electrónico"
          type="email"
          placeholder="ejemplo@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
          disabled={isLoading}
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          required
          disabled={isLoading}
        />

        <Input
          label="Confirmar contraseña"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          required
          disabled={isLoading}
        />

        <Button
          type="submit"
          variant="primary"
          size="large"
          className="w-full"
          loading={isLoading}
          disabled={isLoading}
        >
          Registrarse
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-text-secondary font-regular text-sm">
          ¿Ya tienes una cuenta?{' '}
          <Link
            href={ROUTES.LOGIN}
            className="text-primary font-bold hover:underline"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

