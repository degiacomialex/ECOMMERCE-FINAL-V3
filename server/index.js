const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig } = require('mercadopago'); 
require('dotenv').config(); 

// --- 1. INICIALIZACIÓN DEL SDK (Usando el Token del .env) ---
const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACCESS_TOKEN, // Usamos el Token 'TEST-'
});

const app = express();
app.use(cors());
app.use(express.json());

// --- 2. RUTA: CREAR PREFERENCIA (Checkout Pro) ---
app.post('/create_preference', async (req, res) => {
    // Definimos el cuerpo de la preferencia con los ítems del carrito
    const preferenceBody = {
        items: req.body.items,
        back_urls: {
            success: "http://localhost:5173/success", // Puerto de Vite
            failure: "http://localhost:5173/failure",
            pending: "http://localhost:5173/",
        },
        auto_return: "approved", 
    };

    try {
        const result = await client.preferences.create({ body: preferenceBody });
        
        // 🚨 CLAVE: Devolvemos el init_point (link de pago) 🚨
        res.status(200).json({ id: result.id, init_point: result.init_point }); 

    } catch (error) {
        console.error("Error al crear preferencia. Revisa si el Token TEST- es válido:", error); 
        res.status(500).json({ error: 'Error al crear la preferencia de pago.' });
    }
});

app.listen(3001, () => {
    console.log('Servidor de Mercado Pago corriendo en http://localhost:3001');
});