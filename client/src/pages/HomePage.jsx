// client/src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react'; 

// --- Importación de Componentes ---
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';
// import ProductGallery from '../components/ProductGallery'; // No se usa si no se muestra el catálogo completo
import FeaturedSection from '../components/FeaturedSection'; 

export const HomePage = ({ 
    // Los props 'products', 'filterCategory', 'onShowDetails', 'onAddToCart'
    // ya no son estrictamente necesarios aquí si solo mostramos Destacados, 
    // pero los mantenemos para evitar errores de linting si no se eliminan del App.jsx.
    products, 
    filterCategory, 
    onShowDetails, 
    onAddToCart 
}) => {
    // 💥 NUEVO ESTADO PARA CARGAR LOS DESTACADOS
    const [featuredProducts, setFeaturedProducts] = useState([]); 

    // --- Carga de Datos ---
    useEffect(() => {
        // Carga los datos desde el nuevo JSON
        fetch('featured.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar featured.json: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setFeaturedProducts(data))
            .catch(error => console.error("Error al cargar destacados:", error));
    }, []);


    return (
        <>
        <Carousel />
        
        <AboutUs />

        {/* 🟢 SECCIÓN DE DESTACADOS (El nuevo contenido) */}
        <FeaturedSection featuredItems={featuredProducts} />

        {/* ❌ GALERÍA ANTIGUA: Ha sido ELIMINADA para que solo se vean los Destacados. */}
        </>
    );
};