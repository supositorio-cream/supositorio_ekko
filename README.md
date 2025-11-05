# Ekko 2 Care - Intercambio Sostenible

Plataforma móvil web para intercambio sostenible de productos. Permite a los usuarios intercambiar productos de manera fácil y sostenible.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Estilos utilitarios
- **Firebase** (pendiente) - Backend y autenticación

## 📁 Estructura del Proyecto

```
/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Login, Register
│   ├── home/              # Página principal
│   ├── search/            # Búsqueda de productos
│   ├── product/           # Detalles de producto
│   ├── chat/              # Chat entre usuarios
│   └── profile/           # Perfil de usuario
├── components/            # Componentes reutilizables
│   ├── ui/               # Botones, Cards, Inputs
│   └── layout/           # NavBar, Footer
├── lib/                  # Utilidades y configuraciones
├── public/               # Assets estáticos
└── styles/               # Estilos globales
```

## 🎨 Sistema de Diseño

### Colores
- **Primary**: Leaf Green (#4CAF50)
- **Primary Dark**: Dark Green (#2E7D32)
- **Accent**: Lime Yellow (#CDDC39)
- **Surface**: Warm Gray (#F5F5F5)
- **Text**: Dark Gray (#424242)

### Tipografía
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Espaciado
- Grid base: 4px

## 🛠️ Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint
```

## 📋 MVP Features (2 semanas)

- [x] Setup inicial del proyecto
- [ ] Sistema de diseño completo
- [ ] Componentes base reutilizables
- [ ] Páginas principales (Login, Register, Home, Search, Product, Chat, Profile)
- [ ] Navegación entre páginas
- [ ] UI móvil responsive

## 📝 Documentación

Ver [PRD.md](./PRD.md) para detalles completos del proyecto.

## 👥 Desarrollo

Proyecto desarrollado como parte del Cuatrimestre 7 - Trabajos EU.
