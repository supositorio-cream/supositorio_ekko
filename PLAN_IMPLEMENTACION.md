# Plan de Implementación - Ekko 2 Care
## Sugerencias y Roadmap de Desarrollo

**Fecha de Creación:** Noviembre 5, 2025  
**Versión del PRD:** 1.0  
**Proyecto:** Ekko 2 Care - MVP (2 semanas)

---

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Fase 1: Setup Inicial](#fase-1-setup-inicial)
3. [Fase 2: Sistema de Diseño](#fase-2-sistema-de-diseño)
4. [Fase 3: Componentes Base](#fase-3-componentes-base)
5. [Fase 4: Páginas Principales (MVP)](#fase-4-páginas-principales-mvp)
6. [Fase 5: Navegación y Routing](#fase-5-navegación-y-routing)
7. [Fase 6: Refinamiento y Testing](#fase-6-refinamiento-y-testing)
8. [Cronograma Estimado](#cronograma-estimado)
9. [Prioridades y Orden de Implementación](#prioridades-y-orden-de-implementación)

---

## 🎯 Resumen Ejecutivo

Este documento detalla el plan de implementación para el MVP de Ekko 2 Care, basado en el PRD v1.0. El objetivo es completar un MVP funcional en 2 semanas que cumpla con los requisitos de navegación y acceso básico del usuario.

**Estado Actual:** ✅ Setup inicial completado | ✅ Sistema de diseño completado | ✅ Componentes base completados  
**Próximo Paso:** Páginas principales (Login, Register, Home)

---

## 📦 Fase 1: Setup Inicial

**Duración:** Día 1-2  
**Estado:** ✅ COMPLETADO

### Tareas Completadas:
- [x] Crear proyecto Next.js con TypeScript
- [x] Configurar Tailwind CSS v4
- [x] Configurar estructura de carpetas modular
- [x] Instalar dependencias base
- [x] Configurar Git (si no estaba inicializado)
- [x] Configurar sistema de colores del PRD
- [x] Configurar tipografía Poppins
- [x] Crear archivos de configuración necesarios

### Estructura de Carpetas Creada:
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

### Archivos de Configuración:
- `package.json` - Dependencias del proyecto
- `tsconfig.json` - Configuración TypeScript
- `tailwind.config.ts` - Configuración Tailwind (v4 usa CSS)
- `.gitignore` - Archivos ignorados por Git
- `README.md` - Documentación del proyecto
- `lib/constants.ts` - Constantes de la aplicación

---

## 🎨 Fase 2: Sistema de Diseño

**Duración:** Día 2-3  
**Estado:** ✅ COMPLETADO

### Objetivos:
- Completar implementación del sistema de diseño según PRD
- Asegurar consistencia visual en toda la aplicación
- Crear variables CSS y utilidades reutilizables

### Tareas Completadas:

#### 2.1 Colores del PRD
- [x] Verificar y ajustar colores según especificación exacta:
  - Primary (Leaf Green): `#3CB371` ✅
  - Secondary (Dark Green): `#2E8B57` ✅
  - Accent (Lime Yellow): `#C7EA46` ✅
  - Background (Mint Green): `#E7F1EF` ✅
  - Text (Dark Gray): `#2F2F2F` ✅
  - Secondary Text: `#6F6F6F` ✅
  - Error (Coral): `#FF6B6B` ✅

#### 2.2 Tipografía Poppins
- [x] Configurar fuente Poppins desde Google Fonts
- [x] Definir estilos de texto según PRD:
  - Poppins Bold (700) - Títulos, CTAs ✅
  - Poppins Regular (400) - Texto cuerpo, formularios ✅
  - Poppins Italic (400) - Notas, texto explicativo ✅
- [x] Crear clases de utilidad para tipografía (`.font-bold`, `.font-regular`, `.font-italic`)

#### 2.3 Espaciado y Grid
- [x] Configurar grid base de 4px
- [x] Crear sistema de espaciado consistente (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px)
- [x] Documentar uso de espaciado en componentes

#### 2.4 Iconografía
- [x] Decidir librería de iconos: `react-icons` (Feather Icons - outline style)
- [x] Configurar estilo de iconos outline
- [x] Crear componente base para iconos (`components/ui/Icon.tsx`)

### Archivos Creados/Modificados:
- ✅ `app/globals.css` - Colores exactos del PRD actualizados, clases de tipografía y espaciado
- ✅ `lib/theme.ts` - Variables de tema centralizadas con constantes y tipos TypeScript
- ✅ `lib/typography.ts` - Utilidades de tipografía Poppins
- ✅ `components/ui/Icon.tsx` - Componente base para iconos outline
- ✅ `lib/icons.ts` - Constantes y tipos de iconos
- ✅ `components/ui/index.ts` - Exportación del componente Icon
- ✅ `package.json` - Dependencia `react-icons` agregada

### Resultados:
- Sistema de colores completo con valores exactos del PRD
- Tipografía Poppins completamente configurada (Bold, Regular, Italic)
- Sistema de espaciado basado en grid de 4px documentado
- Componente Icon funcional para iconos outline
- Todas las clases de utilidad CSS creadas y documentadas
- Proyecto compila sin errores

---

## 🧩 Fase 3: Componentes Base Reutilizables

**Duración:** Día 3-4  
**Estado:** ✅ COMPLETADO

### Objetivos:
- Crear componentes UI reutilizables según el PRD
- Asegurar consistencia en el diseño
- Facilitar desarrollo rápido de páginas

### Componentes Completados:

#### 3.1 Botones
- [x] **Button Primary** ✅
  - Fondo verde (#3CB371 según PRD)
  - Texto blanco
  - Estilos hover y active
  - Variantes: default, disabled, loading
  - Tamaños: small, medium, large

- [x] **Button Secondary** ✅
  - Borde verde, fondo transparente
  - Texto verde
  - Estilos hover y active

- [x] **Floating Action Button (FAB)** ✅
  - Circular, fondo verde (#3CB371)
  - Icono "+" blanco
  - Posición fija (bottom-right)

#### 3.2 Cards
- [x] **Card Base** ✅
  - Componente base reutilizable
  - Estilos de fondo, bordes, sombras
  - Hover effects

- [x] **ProductCard** ✅
  - Imagen del producto (Next.js Image)
  - Título (Poppins Bold)
  - Ubicación (icono de pin de lib/icons.ts)
  - Precio/Estado
  - Hover effects

#### 3.3 Inputs y Formularios
- [x] **Input** ✅
  - Estilos consistentes con el tema
  - Estados: default, focus, error, disabled
  - Placeholder styling
  - Label opcional integrado
  - Mensajes de error integrados

- [x] **Textarea** ✅
  - Mismo estilo que Input
  - Resizable configurable (none, both, horizontal, vertical)

- [x] **Label** ✅
  - Estilos consistentes
  - Required indicator (asterisco rojo)

#### 3.4 Navigation
- [x] **NavBar (Fixed Bottom)** ✅
  - Iconos outline (usando Icon component)
  - Indicador de página activa (color primary)
  - Navegación funcional (Next.js Link)
  - Páginas: Home, Search, Chat, Profile
  - Detección automática de ruta activa

#### 3.5 Otros Componentes
- [x] **Avatar** ✅
  - Imagen de perfil redonda
  - Fallback con iniciales
  - Tamaños: small, medium, large

- [x] **Badge** ✅
  - Etiquetas y estados
  - Colores según contexto (primary, secondary, accent, error, default)

- [x] **Loading Spinner** ✅
  - Indicador de carga
  - Variantes: small, medium, large
  - Colores: primary, secondary, white

### Archivos Creados/Modificados:
- ✅ `components/ui/Button.tsx` - Botones con variantes Primary, Secondary y FAB
- ✅ `components/ui/Input.tsx` - Input con estados y validación
- ✅ `components/ui/Label.tsx` - Label con indicador de requerido
- ✅ `components/ui/Textarea.tsx` - Textarea con resizable configurable
- ✅ `components/ui/Card.tsx` - Card base reutilizable
- ✅ `components/ui/ProductCard.tsx` - ProductCard con imagen, título, ubicación y precio
- ✅ `components/ui/Avatar.tsx` - Avatar con imagen y fallback a iniciales
- ✅ `components/ui/Badge.tsx` - Badge con variantes de color
- ✅ `components/ui/Loading.tsx` - Spinner de carga
- ✅ `components/layout/NavBar.tsx` - NavBar fija en la parte inferior
- ✅ `components/ui/index.ts` - Exportación de todos los componentes UI
- ✅ `components/layout/index.ts` - Exportación de NavBar

### Resultados:
- Todos los componentes UI reutilizables creados según PRD
- Componentes tipados con TypeScript
- Documentación JSDoc en cada componente
- Accesibilidad básica implementada (ARIA labels, roles)
- Responsive y mobile-first
- Uso del sistema de diseño (colores, tipografía, espaciado)
- Proyecto compila sin errores

### Estructura de Archivos:
```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Avatar.tsx
│   ├── Badge.tsx
│   └── Loading.tsx
└── layout/
    └── NavBar.tsx
```

### Consideraciones:
- Todos los componentes deben ser TypeScript
- Props tipadas correctamente
- Documentación JSDoc en cada componente
- Responsive y mobile-first
- Accesibilidad (ARIA labels cuando sea necesario)

---

## 📱 Fase 4: Páginas Principales (MVP)

**Duración:** Día 4-7  
**Estado:** ⏳ PENDIENTE

### Objetivos:
- Implementar todas las páginas del MVP según PRD
- Asegurar navegación entre páginas
- UI estática funcional (sin backend)

### Páginas a Implementar:

#### 4.1 Página de Login (`app/(auth)/login/page.tsx`)
- [ ] Formulario de login
  - Campo email
  - Campo contraseña
  - Botón "Iniciar Sesión" (Primary)
  - Link a "Registrarse"
- [ ] Diseño mobile-first
- [ ] Validación básica de campos (frontend)
- [ ] Navegación a Register y Home (después de "login")

#### 4.2 Página de Registro (`app/(auth)/register/page.tsx`)
- [ ] Formulario de registro
  - Campo nombre
  - Campo email
  - Campo contraseña
  - Campo confirmar contraseña
  - Botón "Registrarse" (Primary)
  - Link a "Iniciar Sesión"
- [ ] Diseño mobile-first
- [ ] Validación básica de campos
- [ ] Navegación a Login y Home (después de "registro")

#### 4.3 Página Principal - Home (`app/home/page.tsx`)
- [ ] Header con información del usuario
- [ ] Sección "Recientemente Vistos"
  - Grid de ProductCards
  - Scroll horizontal o vertical
- [ ] Sección "Recomendados"
  - Grid de ProductCards
- [ ] Sección "Chats Activos"
  - Lista de conversaciones
  - Preview del último mensaje
- [ ] NavBar fija en la parte inferior

#### 4.4 Página de Búsqueda (`app/search/page.tsx`)
- [ ] Barra de búsqueda en la parte superior
  - Input de búsqueda
  - Botón de búsqueda o búsqueda en tiempo real
- [ ] Filtros (opcional para MVP)
- [ ] Resultados de búsqueda
  - Grid de ProductCards
  - Paginación o scroll infinito (básico)
- [ ] Estado vacío (sin resultados)

#### 4.5 Página de Detalles de Producto (`app/product/[id]/page.tsx`)
- [ ] Imagen principal del producto
  - Carousel de imágenes (si hay múltiples)
- [ ] Información del producto
  - Título
  - Descripción
  - Precio/Estado
  - Ubicación
- [ ] Información del vendedor
  - Avatar y nombre
  - Link a perfil
- [ ] Sección "Productos Similares"
  - Grid de ProductCards
- [ ] Botón de acción (Contactar, Intercambiar, etc.)

#### 4.6 Página de Chat (`app/chat/[id]/page.tsx`)
- [ ] Header con información del contacto
- [ ] Área de mensajes
  - Mensajes enviados (derecha)
  - Mensajes recibidos (izquierda)
  - Timestamps
- [ ] Input de mensaje
  - Campo de texto
  - Botón de envío
- [ ] Lista de chats (vista de lista)
  - Avatar del contacto
  - Nombre
  - Preview del último mensaje
  - Timestamp

#### 4.7 Página de Perfil (`app/profile/page.tsx`)
- [ ] Información del usuario
  - Avatar
  - Nombre
  - Email
  - Botón "Editar Perfil"
- [ ] Sección "Mis Productos Publicados"
  - Grid de ProductCards
- [ ] Botones de acción
  - Configuración
  - Cerrar Sesión

### Datos Mock:
- Crear archivo `lib/mockData.ts` con datos de ejemplo:
  - Productos mock
  - Usuarios mock
  - Mensajes mock
  - Chat mock

### Consideraciones:
- Todas las páginas deben ser responsive
- Mobile-first approach
- Navegación fluida entre páginas
- Estados de carga y error básicos

---

## 🧭 Fase 5: Navegación y Routing

**Duración:** Día 7-8  
**Estado:** ⏳ PENDIENTE

### Objetivos:
- Configurar routing completo de Next.js App Router
- Implementar NavBar funcional
- Asegurar navegación entre todas las páginas

### Tareas a Realizar:

#### 5.1 Routing
- [ ] Configurar rutas estáticas:
  - `/` - Landing/Redirect
  - `/login` - Login
  - `/register` - Registro
  - `/home` - Página principal
  - `/search` - Búsqueda
  - `/product/[id]` - Detalles de producto
  - `/chat` - Lista de chats
  - `/chat/[id]` - Chat individual
  - `/profile` - Perfil de usuario

#### 5.2 NavBar (Fixed Bottom)
- [ ] Implementar componente NavBar
  - Iconos outline según PRD
  - Páginas: Home, Search, Chat, Profile
  - Indicador de página activa
  - Navegación funcional

#### 5.3 Protección de Rutas (Básica)
- [ ] Crear lógica básica de autenticación (mock)
  - Estado de autenticación en contexto
  - Redirect a login si no está autenticado
  - Redirect a home si está autenticado y accede a login/register

#### 5.4 Layouts
- [ ] Crear layout para páginas autenticadas
  - Incluye NavBar
  - Aplica a: Home, Search, Chat, Profile, Product
- [ ] Crear layout para páginas de auth
  - Sin NavBar
  - Aplica a: Login, Register

### Archivos a Crear:
- `app/(auth)/layout.tsx` - Layout para autenticación
- `app/(protected)/layout.tsx` - Layout para páginas protegidas
- `contexts/AuthContext.tsx` - Contexto de autenticación (mock)

---

## ✨ Fase 6: Refinamiento y Testing

**Duración:** Día 9-10  
**Estado:** ⏳ PENDIENTE

### Objetivos:
- Refinar diseño según guía de estilo
- Verificar consistencia visual
- Testing manual de navegación
- Ajustes finales

### Tareas a Realizar:

#### 6.1 Refinamiento Visual
- [ ] Revisar todas las páginas contra el PRD
- [ ] Verificar colores exactos del PRD
- [ ] Ajustar espaciado y layout
- [ ] Verificar tipografía (Poppins Bold/Regular/Italic)
- [ ] Verificar iconos (outline, colores correctos)

#### 6.2 Testing de Navegación
- [ ] Probar flujo completo:
  - Landing → Login → Home
  - Landing → Register → Home
  - Home → Search → Product Details → Back
  - Home → Chat List → Chat Individual → Back
  - Home → Profile → Back
  - Navegación con NavBar
- [ ] Verificar que todas las rutas funcionen
- [ ] Verificar estados de carga y error

#### 6.3 Responsive Design
- [ ] Verificar en diferentes tamaños de pantalla:
  - Mobile (320px - 480px)
  - Tablet (481px - 768px)
  - Desktop (769px+)
- [ ] Ajustar layout si es necesario
- [ ] Verificar touch targets (mínimo 44x44px)

#### 6.4 Performance
- [ ] Verificar tiempos de carga
- [ ] Optimizar imágenes (usar Next.js Image)
- [ ] Verificar bundle size
- [ ] Aplicar lazy loading donde sea necesario

#### 6.5 Accesibilidad
- [ ] Verificar contraste de colores
- [ ] Agregar ARIA labels donde sea necesario
- [ ] Verificar navegación por teclado
- [ ] Verificar legibilidad de texto

#### 6.6 Documentación
- [ ] Comentar código crítico
- [ ] Documentar componentes principales
- [ ] Actualizar README con instrucciones
- [ ] Documentar decisiones de diseño importantes

---

## 📅 Cronograma Estimado

### Semana 1 (Días 1-5)

| Día | Fase | Tareas Principales |
|-----|------|-------------------|
| **Día 1-2** | Setup Inicial | ✅ COMPLETADO - Proyecto Next.js, estructura, configuración |
| **Día 2-3** | Sistema de Diseño | ✅ COMPLETADO - Colores PRD, tipografía completa, iconografía |
| **Día 3-4** | Componentes Base | ✅ COMPLETADO - Botones, Cards, Inputs, NavBar, Avatar, Badge, Loading |
| **Día 4-5** | Páginas MVP (Parte 1) | Login, Register, Home |

### Semana 2 (Días 6-10)

| Día | Fase | Tareas Principales |
|-----|------|-------------------|
| **Día 5-6** | Páginas MVP (Parte 2) | Search, Product Details |
| **Día 6-7** | Páginas MVP (Parte 3) | Chat, Profile |
| **Día 7-8** | Navegación | Routing completo, NavBar funcional |
| **Día 9-10** | Refinamiento | Testing, ajustes visuales, documentación |

### Hitos Importantes:
- **Día 3:** ✅ Sistema de diseño completo
- **Día 4:** ✅ Componentes base listos
- **Día 7:** Todas las páginas implementadas
- **Día 8:** Navegación completa funcional
- **Día 10:** MVP listo para entrega

---

## 🎯 Prioridades y Orden de Implementación

### Prioridad Alta (Crítico para MVP)
1. ✅ Setup inicial del proyecto
2. ✅ Sistema de diseño completo (colores, tipografía)
3. ✅ Componentes base (Botones, Cards, Inputs, NavBar, Avatar, Badge, Loading)
4. Páginas principales (Login, Register, Home)
5. Navegación básica entre páginas
6. NavBar funcional

### Prioridad Media (Importante para MVP)
7. Páginas restantes (Search, Product, Chat, Profile)
8. Datos mock para demostración
9. Estados de carga y error básicos
10. Responsive design básico

### Prioridad Baja (Puede posponerse)
11. Optimizaciones de performance avanzadas
12. Accesibilidad avanzada
13. Animaciones y transiciones
14. Firebase integration (fuera del MVP)

---

## 📝 Notas Importantes

### Colores del PRD vs Implementación Actual
**Nota:** ✅ Los colores han sido actualizados a los valores exactos del PRD:
- Primary: `#3CB371` ✅
- Secondary: `#2E8B57` ✅
- Accent: `#C7EA46` ✅
- Background: `#E7F1EF` ✅
- Text: `#2F2F2F` ✅
- Secondary Text: `#6F6F6F` ✅
- Error: `#FF6B6B` ✅

### Firebase Integration
- **No es parte del MVP** según PRD
- Se puede mockear la autenticación inicialmente
- Integración real puede ser Fase 7 (post-MVP)

### Testing
- Enfocarse en testing manual por ser MVP
- Verificar flujos principales de usuario
- Documentar bugs conocidos si los hay

### Escalabilidad
- Mantener código modular y bien documentado
- Facilitar futuras expansiones
- Estructura preparada para Firebase

---

## ✅ Checklist Final del MVP

Antes de considerar el MVP completo, verificar:

- [ ] Todas las páginas del PRD están implementadas
- [ ] Navegación funciona entre todas las páginas
- [ ] Login y Register son navegables (aunque sean estáticos)
- [ ] NavBar fija en la parte inferior funciona
- [ ] Diseño visual coincide con el PRD
- [x] Colores exactos del PRD implementados ✅
- [x] Tipografía Poppins correctamente aplicada ✅
- [x] Iconos outline según especificación ✅
- [ ] Responsive en móvil
- [ ] Código documentado y comentado
- [ ] README actualizado
- [ ] Proyecto compila sin errores

---

## 🚀 Próximos Pasos Inmediatos

1. ✅ **Fase 2 Completada:** Sistema de diseño completo
   - ✅ Colores exactos del PRD implementados
   - ✅ Tipografía Poppins completa
   - ✅ Iconografía configurada (react-icons)

2. ✅ **Fase 3 Completada:** Componentes base
   - ✅ Button (Primary, Secondary, FAB)
   - ✅ Card y ProductCard
   - ✅ Input, Label, Textarea
   - ✅ NavBar (Fixed Bottom)
   - ✅ Avatar, Badge, Loading

3. **Comenzar Fase 4:** Páginas principales
   - Implementar Login y Register primero
   - Luego Home con secciones básicas
   - Continuar con el resto de páginas

---

**Documento creado:** Noviembre 5, 2025  
**Última actualización:** Noviembre 5, 2025 (Fase 3 completada)  
**Versión:** 1.2

