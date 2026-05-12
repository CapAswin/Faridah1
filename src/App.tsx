/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { useEffect } from 'react';

function AnnouncementBar() {
  return (
    <div className="bg-berry text-champagne py-2 px-8 flex justify-center items-center z-[60] relative">
      <p className="text-[10px] tracking-[0.3em] font-medium uppercase">
        Complimentary Signature Discovery Set with every $200 purchase
      </p>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <SmoothScroll>
            <div className="min-h-screen relative overflow-hidden bg-cream font-sans text-ink selection:bg-rose selection:text-white">
              {/* Background Glows */}
              <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-berry/10 blur-[120px] rounded-full pointer-events-none z-0" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-champagne/40 blur-[100px] rounded-full pointer-events-none z-0" />
              
              <AnnouncementBar />
              <Navbar />
              
              <main className="relative z-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </main>

              <Footer />
              <AuthModal />
            </div>
          </SmoothScroll>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
