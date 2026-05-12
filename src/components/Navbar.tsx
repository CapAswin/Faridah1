import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, User as UserIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, openAuthModal, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '/shop' },
    { name: 'The Journal', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'top-4' : (location.pathname === '/' ? 'top-10' : 'top-0')
      )}
    >
      <div
        className={cn(
          'w-full max-w-[960px] mx-auto flex items-center justify-between px-10 py-5 transition-all duration-500 rounded-full',
          isScrolled ? 'glass shadow-sm backdrop-blur-xl' : 'bg-white/40 backdrop-blur-xl border border-white/30'
        )}
      >
        <div className="flex items-center gap-8">
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5 text-ink" />
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[11px] uppercase tracking-widest font-semibold hover:text-rose transition-colors relative group"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-3xl font-serif tracking-[0.1em] italic font-bold text-berry">
          Faridah
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-widest font-semibold hover:text-rose transition-colors"
            >
              Boutique
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-rose transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button 
              onClick={user ? logout : openAuthModal}
              className="hover:text-rose transition-colors flex items-center gap-2 group"
            >
              <UserIcon className="w-4 h-4" />
              {user && (
                <span className="text-[9px] uppercase tracking-widest font-bold hidden lg:inline pt-0.5">
                  Logout
                </span>
              )}
            </button>
            <Link to="/cart" className="hover:text-rose transition-colors relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-berry text-white text-[8px] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-50 bg-cream p-8 flex flex-col gap-8 md:hidden shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-3xl tracking-widest text-berry">Faridah</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/" className="text-2xl font-serif text-ink border-b border-ink/5 pb-4" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-serif text-ink border-b border-ink/5 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/shop" className="text-2xl font-serif text-ink border-b border-ink/5 pb-4" onClick={() => setMobileMenuOpen(false)}>Boutique</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
