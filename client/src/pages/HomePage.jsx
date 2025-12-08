// client/src/pages/HomePage.jsx (Código corregido)

import React, { useState, useEffect } from 'react'; // 💥 AÑADIMOS useState y useEffect
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';
import ProductGallery from '../components/ProductGallery';
import FeaturedSection from '../components/FeaturedSection'; // 💥 NUEVO COMPONENTE

export const HomePage = ({ 
    products, 
    filterCategory, 
    onShowDetails, 
    onAddToCart 
}) => {
    // 💥 NUEVO ESTADO PARA CARGAR DESTACADOS
    const [featuredProducts, setFeaturedProducts] = useState([]); 

    useEffect(() => {
        // Carga los datos desde el nuevo JSON
        fetch('featured.json') 
            .then(response => response.json())
            .then(data => setFeaturedProducts(data))
            .catch(error => console.error("Error al cargar destacados:", error));
    }, []);


    return (
        <>
        <Carousel />
        
        <AboutUs />

        {/* 💥 NUEVA SECCIÓN DE DESTACADOS 💥 */}
        <FeaturedSection featuredItems={featuredProducts} />

        {/* Mantenemos la galería de productos, pero puedes eliminarla si quieres mostrar solo Destacados */}
        <ProductGallery
            products={products}
            filterCategory={filterCategory}
            onShowDetails={onShowDetails}
            onAddToCart={onAddToCart}
        />
        </>
    );
};