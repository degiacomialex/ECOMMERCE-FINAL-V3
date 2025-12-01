// client/src/App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; 

// --- IMPORTACIÓN DE COMPONENTES (Layout) ---
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';
import ProductModal from './components/ProductModal';
import ToastNotification from './components/ToastNotification';

// --- IMPORTACIÓN DE PÁGINAS ---
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { CartPage } from './pages/CartPage';
import { SearchPage } from './pages/SearchPage';
import { ContactPage } from './pages/ContactPage';

const App = () => {
  // --- Estados Globales ---
  const [products, setProducts] = useState([]); 
  const [cartItems, setCartItems] = useState([]);
  const [modalProduct, setModalProduct] = useState(null); 
  const [toast, setToast] = useState({ show: false, message: '' }); 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Carga de Datos ---
  useEffect(() => {
    fetch('products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error al traer los productos:", error));
  }, []);

  // --- Lógica del Carrito ---
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
    setToast({ show: true, message: `1x ${product.name} al carrito.` });
    setTimeout(() => setToast({ show: false, message: '' }), 3000); 
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (!existingItem) return prevItems; 
      if (existingItem.quantity <= 1) {
        return prevItems.filter((item) => item.id !== productId);
      }
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // --- Lógica del Checkout (WhatsApp) - CORREGIDA LA COMILLA DE CIERRE ---
  const handleCheckout = () => {
    // 1. PON AQUÍ EL NÚMERO DE TU CLIENTE (CORRECCIÓN DE LA COMILLA)
    const phoneNumber = "5491137570370"; // ¡CORREGIDO!
    
    // 2. Construimos el mensaje de texto
    let message = "Hola Los Luisés! Quiero realizar el siguiente pedido:\n\n";
    
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.name} ($${item.price.toLocaleString('es-AR')})\n`;
    });

    // Agrega el total al final
    message += `\n*Total: $${totalPrice.toLocaleString('es-AR')}*`;

    // 3. Generamos el link de WhatsApp y lo abrimos
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --- Lógica de Modales ---
  const handleVerDetalle = (productId) => {
    const product = products.find(p => p.id === productId);
    setModalProduct(product);
  };

  const closeModal = () => setModalProduct(null);

  // --- RENDERIZADO ---
  return (
    <div className="app-container">
      
      <ProductModal 
        product={modalProduct} 
        onClose={closeModal} 
        onAddToCart={addToCart} 
      />
      <ToastNotification show={toast.show} message={toast.message} />

      <HeaderBar 
        cartItemCount={totalItems} 
        onHamburgerClick={() => setIsMobileMenuOpen(true)}
      />
      <NavBar 
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMenu={() => setIsMobileMenuOpen(false)}
      />

      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                products={products}
                filterCategory="TODOS"
                onShowDetails={handleVerDetalle}
                onAddToCart={addToCart}
              />
            } 
          />
          
          <Route 
            path="/categoria/:categoryName" 
            element={
              <CategoryPage 
                products={products}
                onShowDetails={handleVerDetalle}
                onAddToCart={addToCart}
              />
            } 
          />

          <Route 
            path="/carrito" 
            element={
              <CartPage 
                cartItems={cartItems}
                totalItems={totalItems}
                totalPrice={totalPrice}
                onRemoveFromCart={removeFromCart}
                onCheckout={handleCheckout}
              />
            } 
          />

          <Route 
            path="/buscar/:searchTerm" 
            element={
              <SearchPage 
                products={products}
                onShowDetails={handleVerDetalle}
                onAddToCart={addToCart}
              />
            } 
          />
            
          <Route 
            path="/contacto" 
            element={ <ContactPage /> } 
          />
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;