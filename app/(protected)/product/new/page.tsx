/**
 * New Product Page - Ekko 2 Care
 * 
 * Página de formulario para publicar un nuevo producto
 * 
 * @remarks
 * Este formulario es solo visual y no tiene funcionalidad real
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Textarea, Icon } from '@/components/ui';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

export default function NewProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    image: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
      }));
      
      // Crear preview de la imagen
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Este formulario no funciona, solo es visual
    // En una implementación real, aquí se enviarían los datos al backend
  };

  const handleCancel = () => {
    router.back();
  };

  const categories = [
    { value: '', label: 'Selecciona una categoría' },
    { value: 'Transporte', label: 'Transporte' },
    { value: 'Hogar', label: 'Hogar' },
    { value: 'Libros', label: 'Libros' },
    { value: 'Muebles', label: 'Muebles' },
    { value: 'Ropa', label: 'Ropa' },
    { value: 'Música', label: 'Música' },
    { value: 'Plantas', label: 'Plantas' },
    { value: 'Otros', label: 'Otros' },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
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
          Publicar Producto
        </h1>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Imagen del producto */}
        <div>
          <label className="block font-bold text-base text-text-primary mb-2">
            Imagen del producto <span className="text-error">*</span>
          </label>
          <div className="space-y-4">
            {imagePreview ? (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-border">
                <img
                  src={imagePreview}
                  alt="Vista previa"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    setFormData(prev => ({ ...prev, image: null }));
                  }}
                  className="absolute top-2 right-2 bg-error text-white p-2 rounded-full hover:bg-error-dark transition-colors"
                  aria-label="Eliminar imagen"
                >
                  <Icon
                    icon={getIcon('close')}
                    size={20}
                    color="white"
                  />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-surface">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Icon
                    icon={getIcon('add')}
                    size={48}
                    color="dark-green"
                  />
                  <p className="mt-2 text-sm text-text-secondary">
                    <span className="font-bold text-primary">Haz clic para subir</span> o arrastra y suelta
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    PNG, JPG o WEBP (máx. 5MB)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handleImageChange}
                  required
                />
              </label>
            )}
          </div>
        </div>

        {/* Título */}
        <Input
          label="Título del producto"
          name="title"
          type="text"
          placeholder="Ej: Bicicleta Vintage Restaurada"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        {/* Descripción */}
        <Textarea
          label="Descripción"
          name="description"
          placeholder="Describe tu producto en detalle..."
          value={formData.description}
          onChange={handleInputChange}
          rows={6}
          required
        />

        {/* Ubicación */}
        <Input
          label="Ubicación"
          name="location"
          type="text"
          placeholder="Ej: Ciudad de México, CDMX"
          value={formData.location}
          onChange={handleInputChange}
          required
        />

        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block font-bold text-base text-text-primary mb-2">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 font-regular text-base text-text-primary bg-white border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all duration-200"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="button"
            variant="secondary"
            size="large"
            onClick={handleCancel}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="flex-1"
            disabled
          >
            Publicar Producto
          </Button>
        </div>

        {/* Nota informativa */}
        <div className="bg-surface rounded-lg p-4 border-l-4 border-primary">
          <p className="font-regular text-sm text-text-secondary">
            <strong className="text-text-primary">Nota:</strong> Este formulario es solo visual y no guarda información. 
            En una implementación real, los datos se enviarían al servidor.
          </p>
        </div>
      </form>
    </div>
  );
}

