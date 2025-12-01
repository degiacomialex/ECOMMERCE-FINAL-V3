// server/index.js

import express from 'express';
import cors from 'cors';

// 1. Configuración inicial
const app = express();
const PORT = 3001; // Usaremos el puerto 3001 para el backend

// 2. Middlewares
app.use(cors()); // ¡IMPORTANTE! Permite peticiones del cliente
app.use(express.json()); // Permite al servidor entender JSON

// 3. Mismos datos de productos, pero ahora en el servidor
// Nota: Las rutas de imagen 'images/...' funcionan porque
// tu cliente de Vite las sirve desde la carpeta 'public'.
const productsData = [
  { id: 1, category: 'RIÑONERAS', name: 'Riñonera Lobo', price: 15000, image: 'images/producto1.jpeg', description: 'Riñonera de tela sublimada con diseño de lobo. Ideal para paseos y deporte.' },
  { id: 2, category: 'SET DE MATE', name: 'Set Matero Floral', price: 18000, image: 'images/producto2.jpeg', description: 'Set completo de mate con diseño floral, incluye termo, mate, yerbero y azucarero.' },
  { id: 3, category: 'MOCHILAS INFANTILES', name: 'Mochila Cars', price: 25000, image: 'images/producto3.jpeg', description: 'Mochila infantil con diseño de la película Cars. Amplia y resistente, perfecta para el jardín.' },
  { id: 4, category: 'TAZAS Y TERMOS', name: 'Termo Personalizado', price: 20000, image: 'images/producto4.jpeg', description: 'Termo de acero inoxidable personalizado a tu gusto. Mantiene la temperatura por horas.' },
  { id: 5, category: 'TAZAS Y TERMOS', name: 'Set Tazas', price: 9000, image: 'images/producto1.jpeg', description: 'Juego de dos tazas de cerámica sublimadas con diseños a elección.' },
  { id: 6, category: 'RIÑONERAS', name: 'Riñonera Gato', price: 15500, image: 'images/producto2.jpeg', description: 'Riñonera con estampado de gatos juguetones. Ajustable y con varios compartimentos.' },
  // ... (aquí irían el resto de tus productos)
];

// 4. Nuestra primera "Ruta" o "Endpoint"
// Cuando el cliente pida 'http://localhost:3001/api/products'
// le enviaremos la lista de productos en formato JSON.
app.get('/api/products', (req, res) => {
  res.json(productsData);
});

// 5. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});