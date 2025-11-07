# Ekko 2 Care - Intercambio Sostenible

Plataforma móvil web para intercambio sostenible de productos. Permite a los usuarios intercambiar productos de manera fácil y sostenible.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18.17 o superior ([Descargar Node.js](https://nodejs.org/))
- **npm** 9.0 o superior (incluido con Node.js)
- **Git** (opcional, para clonar el repositorio)

Para verificar que tienes Node.js y npm instalados:

```bash
node --version
npm --version
```

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

Si tienes el repositorio en Git:

```bash
git clone <url-del-repositorio>
cd supositorio_ekko
```

O si ya tienes los archivos del proyecto, simplemente navega a la carpeta del proyecto.

### 2. Instalar Dependencias

Instala todas las dependencias necesarias del proyecto:

```bash
npm install
```

Este comando instalará:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- react-icons
- Y todas las dependencias de desarrollo necesarias

### 3. Verificar la Instalación

Verifica que todo esté configurado correctamente:

```bash
npm run build
```

Si el build se completa sin errores, la configuración es correcta.

### 4. Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

Abre tu navegador y navega a esa URL para ver la aplicación.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Estilos utilitarios
- **react-icons** - Biblioteca de iconos
- **Firebase** (pendiente) - Backend y autenticación

## 📁 Estructura del Proyecto

```
/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Grupo de rutas de autenticación
│   │   ├── layout.tsx           # Layout sin NavBar
│   │   ├── login/               # Página de Login
│   │   └── register/            # Página de Registro
│   ├── (protected)/             # Grupo de rutas protegidas
│   │   ├── layout.tsx           # Layout con NavBar
│   │   ├── home/                # Página principal
│   │   ├── search/              # Búsqueda de productos
│   │   ├── product/             # Detalles de producto
│   │   │   └── [id]/            # Ruta dinámica de producto
│   │   ├── chat/                # Chat entre usuarios
│   │   │   └── [id]/            # Ruta dinámica de chat
│   │   └── profile/             # Perfil de usuario
│   ├── layout.tsx               # Layout raíz
│   ├── globals.css              # Estilos globales
│   └── page.tsx                 # Landing page
├── components/                   # Componentes reutilizables
│   ├── ui/                      # Componentes UI
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Loading.tsx
│   │   └── Icon.tsx
│   └── layout/                   # Componentes de layout
│       └── NavBar.tsx
├── lib/                          # Utilidades y configuraciones
│   ├── theme.ts                 # Colores y tema
│   ├── typography.ts            # Tipografía
│   ├── icons.ts                 # Iconos
│   ├── constants.ts             # Constantes
│   └── mockData.ts              # Datos mock
├── public/                       # Assets estáticos
└── styles/                       # Estilos globales
```

## 🎨 Sistema de Diseño

### Colores (Valores exactos del PRD)

- **Primary (Leaf Green)**: `#3CB371` - Botones y iconos activos
- **Secondary (Dark Green)**: `#2E8B57` - Headers, footers, navegación
- **Accent (Lime Yellow)**: `#C7EA46` - Highlights y CTAs secundarios
- **Background (Mint Green)**: `#E7F1EF` - Cards y superficies de fondo
- **Text Primary**: `#2F2F2F` - Color principal de texto
- **Text Secondary**: `#6F6F6F` - Descripciones y placeholders
- **Error (Coral)**: `#FF6B6B` - Mensajes de error o alerta

### Tipografía

- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Estilos**: Bold (700), Regular (400), Italic (400)

### Espaciado

- **Grid base**: 4px
- Múltiplos: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev
# Inicia el servidor de desarrollo en http://localhost:3000

# Build de Producción
npm run build
# Crea una versión optimizada para producción

# Iniciar en Producción
npm start
# Inicia el servidor de producción (después de npm run build)

# Linting
npm run lint
# Ejecuta el linter para verificar el código
```

## 📋 Estado del MVP

### ✅ Completado

- [x] Setup inicial del proyecto
- [x] Sistema de diseño completo (colores, tipografía, iconografía)
- [x] Componentes base reutilizables (Button, Input, Card, ProductCard, Avatar, Badge, Loading, Icon, NavBar)
- [x] Páginas principales:
  - [x] Login (`/login`)
  - [x] Registro (`/register`)
  - [x] Home (`/home`)
  - [x] Búsqueda (`/search`)
  - [x] Detalles de Producto (`/product/[id]`)
  - [x] Chat Lista (`/chat`)
  - [x] Chat Individual (`/chat/[id]`)
  - [x] Perfil (`/profile`)
- [x] Navegación entre páginas
- [x] UI móvil responsive
- [x] Datos mock para demostración
- [x] Layouts diferenciados (auth y protected)
- [x] NavBar fija en la parte inferior
- [x] Protección de rutas básica (mock)
- [x] Autenticación mock (localStorage)
- [x] Refinamiento visual (colores PRD, tipografía, iconos)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Accesibilidad (ARIA labels, navegación por teclado, contraste)
- [x] Optimización de imágenes (Next.js Image)
- [x] Estados de carga, error y vacíos
- [x] Touch targets mínimo 44x44px
- [x] Documentación completa

### ⏳ Pendiente (Post-MVP)

- [ ] Integración con Firebase
- [ ] Autenticación real
- [ ] Backend API
- [ ] Notificaciones push

## 🐛 Solución de Problemas

### Error: "Module not found"

Si encuentras errores de módulos no encontrados:

```bash
# Elimina node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Reinstala las dependencias
npm install
```

### Error: "Port 3000 already in use"

Si el puerto 3000 está ocupado:

```bash
# En Windows (PowerShell)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# O simplemente cambia el puerto
npm run dev -- -p 3001
```

### Error de TypeScript

Si hay errores de TypeScript:

```bash
# Verifica la configuración
npx tsc --noEmit
```

## 📝 Documentación

- **PRD.md** - Documento de requisitos del producto (Product Requirements Document)
- **PLAN_IMPLEMENTACION.md** - Plan detallado de implementación y estado del proyecto

## 🧪 Testing Manual

### Flujos de Navegación a Probar

#### 1. Flujo de Autenticación
- **Landing (/) → Login**: Debe redirigir automáticamente a `/login` si no está autenticado
- **Landing (/) → Home**: Debe redirigir automáticamente a `/home` si está autenticado
- **Login → Home**: Después de iniciar sesión, debe redirigir a `/home`
- **Register → Home**: Después de registrarse, debe redirigir a `/home`
- **Autenticado → Login/Register**: Si ya está autenticado, no debe poder acceder a `/login` o `/register`

#### 2. Flujo de Navegación Principal
- **Home → Search**: Navegación con NavBar
- **Home → Product Details**: Click en un producto desde Home
- **Search → Product Details**: Click en un producto desde resultados de búsqueda
- **Product Details → Back**: Volver a la página anterior
- **Home → Chat List**: Navegación con NavBar
- **Chat List → Chat Individual**: Click en un chat
- **Chat Individual → Back**: Volver a lista de chats
- **Home → Profile**: Navegación con NavBar
- **Profile → Product Details**: Click en un producto del perfil

#### 3. Protección de Rutas
- **Sin autenticación**: Intentar acceder a `/home`, `/search`, `/chat`, `/profile` debe redirigir a `/login`
- **Con autenticación**: Intentar acceder a `/login` o `/register` debe redirigir a `/home`

### Estados a Verificar

#### Estados de Carga
- **Login/Register**: Muestra "Cargando..." durante la autenticación
- **Layouts**: Muestran "Cargando..." mientras verifican autenticación

#### Estados de Error
- **Login**: Muestra mensaje de error si las credenciales son inválidas
- **Register**: Muestra mensaje de error si hay problemas en el registro
- **Formularios**: Muestran mensajes de error en campos inválidos

#### Estados Vacíos
- **Search**: Muestra mensaje cuando no hay resultados
- **Chat List**: Muestra mensaje cuando no hay chats activos
- **Profile**: Muestra mensaje cuando no hay productos publicados

### Responsive Design

#### Mobile (320px - 480px)
- Grid de productos: 2 columnas
- NavBar: Fija en la parte inferior
- Touch targets: Mínimo 44x44px
- Contenido: Se adapta al ancho de pantalla

#### Tablet (481px - 768px)
- Grid de productos: 2 columnas
- Padding: Aumentado a 24px
- Contenido: Se adapta al ancho de pantalla

#### Desktop (769px+)
- Grid de productos: 3 columnas
- Contenedor: Máximo 768px (centrado)
- NavBar: Fija en la parte inferior

### Accesibilidad

#### ARIA Labels
- Todos los botones tienen `aria-label` descriptivos
- Los iconos tienen `aria-label` apropiados
- Las secciones tienen `aria-label` para contexto
- Los formularios tienen `aria-label` y roles apropiados

#### Navegación por Teclado
- Todos los elementos interactivos son accesibles por teclado
- Orden de tabulación lógico
- Focus visible en todos los elementos

#### Contraste de Colores
- Texto principal (#2F2F2F) sobre fondo blanco: ✅ Alto contraste
- Texto secundario (#6F6F6F) sobre fondo blanco: ✅ Contraste adecuado
- Texto blanco sobre fondo verde (#3CB371): ✅ Alto contraste

## 🎯 Próximos Pasos

1. **Post-MVP**: Integración con Firebase
2. **Backend API**: Desarrollo de API REST
3. **Autenticación real**: Integración con Firebase Auth
4. **Notificaciones**: Sistema de notificaciones push

## 👥 Desarrollo

Proyecto desarrollado como parte del Cuatrimestre 7 - Trabajos EU.

**Estado Actual**: MVP - Fase 6 completada (Refinamiento y Testing)  
**Versión**: 0.1.0  
**Última actualización**: Noviembre 2025
