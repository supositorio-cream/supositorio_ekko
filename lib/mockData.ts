/**
 * Mock Data - Ekko 2 Care
 * 
 * Datos de ejemplo para demostración del MVP
 * Estos datos se usarán en todas las páginas hasta que se integre Firebase
 */

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[]; // Para carousel
  location: string;
  status: 'disponible' | 'reservado' | 'vendido';
  seller: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  category?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  products?: string[]; // IDs de productos publicados
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: Date;
}

export interface Chat {
  id: string;
  userId1: string;
  userId2: string;
  lastMessage?: {
    text: string;
    timestamp: Date;
  };
}

// Usuarios mock
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'María González',
    email: 'maria@example.com',
    avatar: '/maria.jpg',
    products: ['1', '2'],
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    email: 'carlos@example.com',
    avatar: '/Carlos.jpg',
    products: ['3', '4'],
  },
  {
    id: '3',
    name: 'Ana Martínez',
    email: 'ana@example.com',
    avatar: '/Ana.jpeg',
    products: ['5'],
  },
  {
    id: '4',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    avatar: '/usuario.jpeg',
    products: ['6'],
  },
];

// Productos mock
export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Bicicleta Vintage Restaurada',
    description: 'Hermosa bicicleta vintage completamente restaurada. Ideal para paseos en la ciudad. Incluye canasta y timbre original.',
    image: '/BicicletaVintagewebp.webp',
    images: ['/BicicletaVintagewebp.webp', '/BicicletaVintagewebp.webp', '/BicicletaVintagewebp.webp'],
    location: 'Ciudad de México, CDMX',
    status: 'disponible',
    seller: mockUsers[0],
    category: 'Transporte',
  },
  {
    id: '2',
    title: 'Set de Macetas de Cerámica',
    description: 'Conjunto de 5 macetas de cerámica artesanal, perfectas para plantas de interior. Varios tamaños y colores.',
    image: '/SetMacetasCeramica.jpg',
    images: ['/SetMacetasCeramica.jpg', '/SetMacetasCeramica.jpg', '/SetMacetasCeramica.jpg'],
    location: 'Guadalajara, Jalisco',
    status: 'disponible',
    seller: mockUsers[0],
    category: 'Hogar',
  },
  {
    id: '3',
    title: 'Libros de Cocina Vegana',
    description: 'Colección de 3 libros de cocina vegana en excelente estado. Recetas deliciosas y saludables.',
    image: '/LibrosCocinaVegana.jpg',
    images: ['/LibrosCocinaVegana.jpg', '/LibrosCocinaVegana.jpg', '/LibrosCocinaVegana.jpg'],
    location: 'Monterrey, Nuevo León',
    status: 'disponible',
    seller: mockUsers[1],
    category: 'Libros',
  },
  {
    id: '4',
    title: 'Mesa de Madera Reciclada',
    description: 'Mesa de comedor hecha con madera reciclada. Diseño moderno y sostenible. Perfecto para 4 personas.',
    image: '/MesaMaderaReciclada.webp',
    images: ['/MesaMaderaReciclada.webp', '/MesaMaderaReciclada.webp', '/MesaMaderaReciclada.webp'],
    location: 'Puebla, Puebla',
    status: 'reservado',
    seller: mockUsers[1],
    category: 'Muebles',
  },
  {
    id: '5',
    title: 'Ropa de Segunda Mano',
    description: 'Lote de ropa de segunda mano en buen estado. Varias tallas y estilos. Moda sostenible.',
    image: '/RopaSegundaMano.jpg',
    images: ['/RopaSegundaMano.jpg', '/RopaSegundaMano.jpg', '/RopaSegundaMano.jpg'],
    location: 'Cancún, Quintana Roo',
    status: 'disponible',
    seller: mockUsers[2],
    category: 'Ropa',
  },
  {
    id: '6',
    title: 'Instrumentos Musicales',
    description: 'Guitarra acústica y ukelele en buen estado. Perfectos para principiantes o músicos experimentados.',
    image: '/InstrumentosMusicales.webp',
    images: ['/InstrumentosMusicales.webp', '/InstrumentosMusicales.webp', '/InstrumentosMusicales.webp'],
    location: 'Tijuana, Baja California',
    status: 'disponible',
    seller: mockUsers[3],
    category: 'Música',
  },
  {
    id: '7',
    title: 'Plantas de Interior',
    description: 'Colección de plantas de interior saludables. Incluye suculentas, pothos y monstera.',
    image: '/PlantasInterior.jpg',
    images: ['/PlantasInterior.jpg', '/PlantasInterior.jpg', '/PlantasInterior.jpg'],
    location: 'Mérida, Yucatán',
    status: 'disponible',
    seller: mockUsers[2],
    category: 'Plantas',
  },
  {
    id: '8',
    title: 'Muebles de Jardín',
    description: 'Set de sillas y mesa de jardín de metal. Perfecto para espacios exteriores. Incluye cojines.',
    image: '/MueblesJardin.jpg',
    images: ['/MueblesJardin.jpg', '/MueblesJardin.jpg', '/MueblesJardin.jpg'],
    location: 'Querétaro, Querétaro',
    status: 'disponible',
    seller: mockUsers[3],
    category: 'Muebles',
  },
];

// Chats mock
export const mockChats: Chat[] = [
  {
    id: '1',
    userId1: 'current-user', // Usuario actual
    userId2: '1',
    lastMessage: {
      text: '¡Perfecto! Me interesa la bicicleta. ¿Podemos acordar un punto de encuentro?',
      timestamp: new Date('2025-11-05T10:30:00'),
    },
  },
  {
    id: '2',
    userId1: 'current-user',
    userId2: '2',
    lastMessage: {
      text: 'Gracias por tu mensaje. Sí, aún está disponible. ¿Te parece bien el precio?',
      timestamp: new Date('2025-11-04T15:45:00'),
    },
  },
  {
    id: '3',
    userId1: 'current-user',
    userId2: '3',
    lastMessage: {
      text: 'Hola! ¿Aún tienes las plantas disponibles?',
      timestamp: new Date('2025-11-03T09:20:00'),
    },
  },
];

// Mensajes mock
export const mockMessages: Message[] = [
  {
    id: '1',
    chatId: '1',
    senderId: 'current-user',
    receiverId: '1',
    text: 'Hola! Me interesa la bicicleta que publicaste. ¿Aún está disponible?',
    timestamp: new Date('2025-11-05T10:00:00'),
  },
  {
    id: '2',
    chatId: '1',
    senderId: '1',
    receiverId: 'current-user',
    text: 'Sí, aún está disponible. ¿Te gustaría verla en persona?',
    timestamp: new Date('2025-11-05T10:15:00'),
  },
  {
    id: '3',
    chatId: '1',
    senderId: 'current-user',
    receiverId: '1',
    text: '¡Perfecto! Me interesa la bicicleta. ¿Podemos acordar un punto de encuentro?',
    timestamp: new Date('2025-11-05T10:30:00'),
  },
  {
    id: '4',
    chatId: '2',
    senderId: '2',
    receiverId: 'current-user',
    text: 'Hola! Gracias por tu interés en los libros.',
    timestamp: new Date('2025-11-04T15:00:00'),
  },
  {
    id: '5',
    chatId: '2',
    senderId: 'current-user',
    receiverId: '2',
    text: 'Me encantan los libros de cocina vegana. ¿Están en buen estado?',
    timestamp: new Date('2025-11-04T15:30:00'),
  },
  {
    id: '6',
    chatId: '2',
    senderId: '2',
    receiverId: 'current-user',
    text: 'Gracias por tu mensaje. Sí, aún está disponible. ¿Te parece bien el precio?',
    timestamp: new Date('2025-11-04T15:45:00'),
  },
  {
    id: '7',
    chatId: '3',
    senderId: 'current-user',
    receiverId: '3',
    text: 'Hola! ¿Aún tienes las plantas disponibles?',
    timestamp: new Date('2025-11-03T09:20:00'),
  },
];

// Usuario actual mock (para desarrollo)
export const currentUser: User = {
  id: 'current-user',
  name: 'Usuario Demo',
  email: 'usuario@example.com',
  avatar: '/usuario.jpeg',
  products: [],
};

// Funciones helper
export function getProductById(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

export function getUserById(id: string): User | undefined {
  if (id === 'current-user') return currentUser;
  return mockUsers.find(user => user.id === id);
}

export function getChatById(id: string): Chat | undefined {
  return mockChats.find(chat => chat.id === id);
}

export function getMessagesByChatId(chatId: string): Message[] {
  return mockMessages
    .filter(message => message.chatId === chatId)
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
}

export function getChatsByUserId(userId: string): Chat[] {
  return mockChats.filter(chat => 
    chat.userId1 === userId || chat.userId2 === userId
  );
}

export function getProductsByUserId(userId: string): Product[] {
  return mockProducts.filter(product => product.seller.id === userId);
}

