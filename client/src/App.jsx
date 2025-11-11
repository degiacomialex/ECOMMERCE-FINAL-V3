// client/src/App.jsx

// 💥 AÑADIMOS 'useEffect'
import React, { useState, useEffect } from 'react';
import './App.css'; 

// --- 1. IMPORTACIÓN DE COMPONENTES ---
// (Todos tus componentes que ya creamos)
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import NavBar from './components/NavBar';
import ProductModal from './components/ProductModal';
import ToastNotification from './components/ToastNotification';
import CartView from './components/CartView';
import Carousel from './components/Carousel';
import ProductGallery from './components/ProductGallery';

// 💥 BORRAMOS los 'import' de las imágenes de productos (producto1, etc.)
// 💥 BORRAMOS el array 'productsData = [...]' de aquí.

// --- 3. COMPONENTE PRINCIPAL (El "Cerebro") ---
const App = () => {
  
  // 💥 NUEVO ESTADO: Un array vacío para guardar los productos del servidor
  const [products, setProducts] = useState([]); 

  // --- Estados Globales ---
  const [cartItems, setCartItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState('TODOS');
  const [currentView, setCurrentView] = useState('home'); // 'home' o 'cart'
  const [modalProduct, setModalProduct] = useState(null); 
  const [toast, setToast] = useState({ show: false, message: '' }); 

  // 💥 NUEVO useEffect: Se ejecuta 1 vez al cargar la página
  useEffect(() => {
    // 1. Pide los productos a tu backend (que debe estar corriendo)
    fetch('http://localhost:3001/api/products')
      .then(response => response.json()) // 2. Convierte la respuesta
      .then(data => {
        setProducts(data); // 3. Guarda los productos en el estado 'products'
      })
      .catch(error => {
        console.error("Error al traer los productos:", error);
      });
  }, []); // El '[]' vacío significa "ejecútate solo una vez"


  // --- Lógica del Carrito (Queda igual) ---
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

  const handleCheckout = async () => {
    alert("Iniciando proceso de pago con Mercado Pago (simulado)...");
  };

  // --- Lógica de Filtros y Modales ---
  const handleFilter = (category) => {
    setFilterCategory(category);
    setModalProduct(null); 
  };

  // 💥 CAMBIO: Ahora filtra sobre el estado 'products', no 'productsData'
  const filteredProducts = products.filter(product => 
    filterCategory === 'TODOS' || 
    product.category === filterCategory ||
    product.category.includes(filterCategory.toUpperCase()) 
  );

  const handleVerDetalle = (productId) => {
    // 💥 CAMBIO: Ahora busca en el estado 'products', no 'productsData'
    const product = products.find(p => p.id === productId);
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };


  // --- 4. RENDERIZADO (El "Cuerpo") ---
  // (Esta parte queda exactamente igual que antes)
  return (
    <div className="app-container">
      
      <ProductModal 
        product={modalProduct} 
        onClose={closeModal} 
        onAddToCart={addToCart} 
      />

      <HeaderBar 
        cartItemCount={totalItems} 
        onCartClick={() => setCurrentView('cart')} 
      />

      <NavBar 
        onSetView={setCurrentView}
        onSetFilter={handleFilter}
      />

      <main className="main-content">
        {currentView === 'home' ? (
          <>
            <Carousel />

            <ProductGallery
              products={filteredProducts}
              filterCategory={filterCategory}
              onShowDetails={handleVerDetalle}
              onAddToCart={addToCart}
            />
          </>
        ) : (
          <CartView
            cartItems={cartItems}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onRemoveFromCart={removeFromCart}
            onCheckout={handleCheckout}
            onBackToStore={() => setCurrentView('home')}
          />
        )}
      </main>

      <ToastNotification show={toast.show} message={toast.message} />

      <Footer />
    </div>
  );
};

export default App;