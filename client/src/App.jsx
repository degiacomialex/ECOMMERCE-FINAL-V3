// client/src/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './App.css'; 

// 💥 FIX CRÍTICO: RUTAS DE IMAGEN CORREGIDAS 💥
import carrusel1 from '/images/carrusel1.jpeg'; 
import carrusel2 from '/images/carrusel2.jpeg';
import carrusel3 from '/images/carrusel3.jpeg';
import producto1 from '/images/producto1.jpeg';
import producto2 from '/images/producto2.jpeg';
import producto3 from '/images/producto3.jpeg';
import producto4 from '/images/producto4.jpeg';
import LOGO_SRC from '/images/logo.jpeg'; 


// --- DATOS DE PRUEBA (CONSTANTES GLOBALES) ---
const carouselData = [
    { id: 1, image: carrusel1, alt: "Carrusel 1" },
    { id: 2, image: carrusel2, alt: "Carrusel 2" },
    { id: 3, image: carrusel3, alt: "Carrusel 3" },
];

const productsData = [
    { id: 1, category: 'RIÑONERAS', name: 'Riñonera Lobo', price: 15000, image: producto1, description: 'Riñonera de tela sublimada con diseño de lobo. Ideal para paseos y deporte.' },
    { id: 2, category: 'SET DE MATE', name: 'Set Matero Floral', price: 18000, image: producto2, description: 'Set completo de mate con diseño floral, incluye termo, mate, yerbero y azucarero.' },
    { id: 3, category: 'MOCHILAS INFANTILES', name: 'Mochila Cars', price: 25000, image: producto3, description: 'Mochila infantil con diseño de la película Cars. Amplia y resistente, perfecta para el jardín.' },
    { id: 4, category: 'TAZAS Y TERMOS', name: 'Termo Personalizado', price: 20000, image: producto4, description: 'Termo de acero inoxidable personalizado a tu gusto. Mantiene la temperatura por horas.' },
    { id: 5, category: 'TAZAS Y TERMOS', name: 'Set Tazas', price: 9000, image: producto1, description: 'Juego de dos tazas de cerámica sublimadas con diseños a elección.' },
    { id: 6, category: 'RIÑONERAS', name: 'Riñonera Gato', price: 15500, image: producto2, description: 'Riñonera con estampado de gatos juguetones. Ajustable y con varios compartimentos.' },
    { id: 7, category: 'REGALOS PADRE', name: 'Set Asado Papá', price: 30000, image: producto3, description: 'Set de asado premium que incluye delantal y manopla sublimados con diseños para el Día del Padre.' },
    { id: 8, category: 'ESCOLAR', name: 'Cartuchera', price: 5000, image: producto4, description: 'Cartuchera escolar amplia, totalmente sublimada con el personaje o diseño que prefieras.' },
    { id: 9, category: 'RIÑONERAS', name: 'Riñonera Unicornio', price: 16000, image: producto1, description: 'Riñonera infantil con diseño de unicornio.' },
    { id: 10, category: 'SET DE MATE', name: 'Set de Mate River', price: 19500, image: producto2, description: 'Set de mate con diseño del club River Plate.' },
    { id: 11, category: 'MOCHILAS INFANTILES', name: 'Mochila Spiderman', price: 26000, image: producto3, description: 'Mochila con diseño de Spiderman.' },
    { id: 12, category: 'TAZAS Y TERMOS', name: 'Taza con Frase', price: 4500, image: producto4, description: 'Taza de cerámica con frase motivacional.' },
];

// 💥 ESTRUCTURA FINAL Y DEFINITIVA DEL MENÚ 💥
const menuItems = [
    { 

        name: 'INDUMENTARIA PERSONALIZADA', 
        dropdown: true, 
        subcategories: ['Remeras', 'Buzos y Camperas'] 
    },
    { 
        name: 'ACCESORIOS', 
        dropdown: true, 
        // ¡Incluimos almohadones!
        subcategories: ['Sets Materos Personalizados', 'Botellas Personalizadas', 'Gorras y Pilusos', 'Llaveros', 'Almohadones'] 
    },
    { 
        name: 'EGRESADOS', 
        dropdown: true, 
        subcategories: ['Buzos', 'Camperas', 'Remeras', 'Banderas'] 
    },
    { 
        name: 'FECHAS ESPECIALES', 
        dropdown: true, 
        subcategories: ['Día del Padre', 'Día de la Madre', 'Día del Amigo', 'Navidad', 'Otras Fiestas'] 
    },
    { 
        name: 'PARA EMPRESAS', 
        dropdown: true, 
        subcategories: ['Ropa Corporativa', 'Merchandising'] 
    },
    { name: 'TAZAS', link: '#tazas' }, // ¡Tazas como categoría principal!
    { name: 'GUÍA DE TALLES', link: '#guiatalles' }, // Mantenemos la utilidad
];

// ... (resto del archivo)


const ToastNotification = ({ show, message }) => {
    return (
        <div className="toast-container">
            <div className={`toast ${show ? 'show' : ''}`}>
                <span className="toast-icon">😊</span> 
                <div>
                    <h4>¡Listo!</h4>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};


// --- COMPONENTE PRINCIPAL ---
const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [filterCategory, setFilterCategory] = useState('TODOS');
    
    // 💥 CAMBIO: Vistas: 'home' o 'cart'
    const [currentView, setCurrentView] = useState('home'); 

    const [modalProduct, setModalProduct] = useState(null); 
    const [toast, setToast] = useState({ show: false, message: '' }); 

    // 💥 FIX DEFINITIVO para la dependencia del carrusel 💥
    const carouselSize = carouselData.length; 

    // --- LÓGICA DEL CARRUSEL (FIXED) ---
    const goToNext = useCallback(() => {
        // Usamos carouselSize, que es una dependencia válida y simple.
        setCurrentSlide((prev) => (prev === carouselSize - 1 ? 0 : prev + 1));
    }, [carouselSize]); 

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? carouselSize - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 4000);
        return () => clearInterval(interval);
    }, [goToNext]); 


    // --- LÓGICA DEL CARRITO ---
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            if(modalProduct) setModalProduct(null); 
            return [...prevItems, { ...product, quantity: 1 }];
        });

        setToast({ 
            show: true, 
            message: `1x ${product.name} al carrito.` 
        });

        setTimeout(() => {
            setToast({ show: false, message: '' });
        }, 3000); 
    };

    // FIX DE LOGICA DE removeFromCart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === productId);

            if (!existingItem) return prevItems; 
            
            // Si la cantidad es 1, eliminamos el ítem
            if (existingItem.quantity <= 1) {
                return prevItems.filter((item) => item.id !== productId);
            }
            
            // Si la cantidad es mayor a 1, solo reducimos la cantidad
            return prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };
    
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        alert("Iniciando proceso de pago con Mercado Pago (simulado)...");
    };

    const handleFilter = (category) => {
        setFilterCategory(category);
        setModalProduct(null); 
    };

    const filteredProducts = productsData.filter(product => 
        filterCategory === 'TODOS' || 
        product.category === filterCategory ||
        product.category.includes(filterCategory.toUpperCase()) 
    );

    const handleVerDetalle = (productId) => {
        const product = productsData.find(p => p.id === productId);
        setModalProduct(product);
    };

    const closeModal = () => {
        setModalProduct(null);
    };


    // --- COMPONENTE: VISTA DE CARRITO COMPLETA ---
    const renderCartView = () => (
        <div className="cart-view-page">
            <button className="back-button" onClick={() => setCurrentView('home')}>
                ← Volver a la tienda
            </button>
            <h2 className="page-title">Tu Carrito ({totalItems} Productos)</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">El carrito está vacío. ¡Añade algo genial!</p>
            ) : (
                <div className="cart-checkout-container">
                    <ul className="cart-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <h5>{item.name}</h5>
                                    <p>Cantidad: {item.quantity} x ${item.price.toLocaleString('es-AR')}</p>
                                </div>
                                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                    ELIMINAR
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary-total">
                        <div className="total-label">Total a Pagar:</div>
                        <div className="total-amount">${totalPrice.toLocaleString('es-AR')}</div>
                        <button className="checkout-button" onClick={handleCheckout} disabled={cartItems.length === 0}>
                            PAGAR CON CHECKOUT PRO
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    // --- COMPONENTE: MODAL DE DETALLE (ProductModal) ---
    const ProductModal = ({ product, onClose, onAddToCart }) => {
        if (!product) return null;

        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close-button" onClick={onClose}>&times;</button>
                    <div className="modal-body">
                        <img src={product.image} alt={product.name} className="modal-image"/>
                        <div className="modal-details">
                            <h2>{product.name}</h2>
                            <p className="modal-price">${product.price.toLocaleString('es-AR')}</p>
                            <p>{product.description}</p>

                            <div className="size-options">
                                <label>Talle: </label>
                                <select>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                                <button className="size-guide-button">Guía de Talles</button>
                            </div>
                            
                            <button 
                                className="modal-add-to-cart-button" 
                                onClick={() => onAddToCart(product)}
                            >
                                AÑADIR AL CARRITO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // --- RENDERIZADO PRINCIPAL ---
    return (
        <div className="app-container">
            {/* MODAL (Z-index alto) */}
            <ProductModal 
                product={modalProduct} 
                onClose={closeModal} 
                onAddToCart={addToCart} 
            />

            {/* 💥 1. HEADER (STIKY: top: 0) 💥 */}
            <header>
                <h1>
                    <img src={LOGO_SRC} alt="Los Luisés Sublimación" style={{height: '30px', marginRight: '10px'}}/>
                    <span className="title-black">Lo</span>
                    <span className="title-blue">S</span>
                    <span className="title-black">Luis</span>
                    <span className="title-black">es</span>
                    <span className="sub-sublimacion">Sublimacion</span> 
                </h1>
                <div className="search-bar">
                    <input type="text" placeholder="¿Qué estás buscando?" />
                    <button>Buscar</button>
                    {/* Botón que cambia la vista a 'cart' */}
                    <button className="cart-icon" onClick={() => setCurrentView('cart')}>
                        🛒 Carrito ({totalItems})
                    </button>
                </div>
            </header>

            {/* 💥 2. MENÚ PROFESIONAL CON DROPDOWNS (STIKY: top: 60px) 💥 */}
            <nav className="bottom-menu">
                <ul className="main-nav">
                    {menuItems.map(item => (
                        <li key={item.name} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>
                            <a href={item.link || '#'} className="nav-link" onClick={() => setCurrentView('home')}>
                                {item.name}
                            </a>
                            {item.dropdown && (
                                <ul className="dropdown-menu">
                                    {item.subcategories.map(sub => (
                                        <li key={sub}>
                                            <button onClick={() => { handleFilter(sub); setCurrentView('home'); }}>
                                                {sub}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 3. CONTENIDO PRINCIPAL: CONTROL DE VISTAS */}
            <main className="main-content">
                {currentView === 'home' ? (
                    <>
                        {/* CARRUSEL */}
                        <h2 className="carousel-title">PRODUCTOS DESTACADOS</h2>
                        <div className="carousel-container">
                            <div 
                                className="carousel-slide" 
                                style={{ 
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                    width: `${carouselSize * 100}%` // Opcional: Ayuda a visualizar el slider
                                }}
                            >
                                {carouselData.map((item) => (
                                    <div key={item.id} className="carousel-item">
                                        <img src={item.image} alt={item.alt} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-button prev" onClick={goToPrev}>{'<'}</button>
                            <button className="carousel-button next" onClick={goToNext}>{'>'}</button>
                        </div>

                        {/* GALERÍA EXPANDIDA (Ocupa todo el ancho) */}
                        <div>
                            <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textAlign: 'center' }}>
                                {filterCategory === 'TODOS' ? 'TODA LA TIENDA' : filterCategory}
                            </h3>
                            <div className="gallery-grid">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="product-card">
                                        <img src={product.image} alt={product.name} />
                                        <h4>{product.name}</h4>
                                        <p>${product.price.toLocaleString('es-AR')}</p>
                                        
                                        {/* EFECTO HOVER DE ACCIÓN */}
                                        <div className="product-actions-overlay">
                                            <button 
                                                className="overlay-button" 
                                                onClick={() => handleVerDetalle(product.id)}
                                            >
                                                VER DETALLE
                                            </button>
                                            <button 
                                                className="overlay-button" 
                                                style={{ backgroundColor: 'var(--accent-color)' }}
                                                onClick={() => addToCart(product)}
                                            >
                                                AÑADIR AL CARRITO
                                            </button>
                                        </div>

                                        <button onClick={() => addToCart(product)}>AÑADIR AL CARRITO</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    // 💥 Vista de Carrito 💥
                    renderCartView()
                )}
            </main>

            {/* TOAST NOTIFICATION RENDERIZADO AL FINAL */}
            <ToastNotification show={toast.show} message={toast.message} />

            {/* 4. FOOTER (Gris Oscuro) */}
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Medios de Pago</h4>
                        <p>Transferencia Bancaria</p>
                        <p>Mercado Pago</p>
                    </div>
                    <div className="footer-section">
                        <h4>Sobre Nosotros</h4>
                        <p><a href="#historia">Historia</a></p>
                        <p><a href="#contacto">Contacto</a></p>
                    </div>
                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <p>losluisessublimacion@email.com</p>
                        <p>Tel: +54 9 11 XXXX-XXXX</p>
                    </div>
                </div>
                <div className="footer-copy">
                    &copy; 2025 Los Luisés Sublimación. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default App;