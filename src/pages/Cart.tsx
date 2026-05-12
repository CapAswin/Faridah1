import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 bg-cream min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="w-24 h-24 rounded-full bg-berry/5 flex items-center justify-center mb-8">
           <ShoppingBag className="w-10 h-10 text-berry opacity-20" />
        </div>
        <h2 className="text-4xl font-serif text-ink mb-6">Your Collection is Empty</h2>
        <p className="text-ink/60 mb-12 max-w-sm">Fragrance is a story untold. Begin yours by exploring our curated selection of fine elixirs.</p>
        <Link to="/shop" className="bg-berry text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all">
          Explore the Boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-serif text-ink mb-16 italic">Shopping Collection</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex gap-8 p-6 bg-white/50 backdrop-blur-sm rounded-[32px] border border-white/30 shadow-sm items-center"
                >
                  <div className={`w-32 h-32 rounded-2xl overflow-hidden ${item.color}`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-berry mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-serif text-ink mb-1 italic">{item.name}</h3>
                    <p className="text-lg font-serif text-ink/60">${item.price}.00</p>
                  </div>

                  <div className="flex items-center gap-4 bg-cream rounded-full px-4 py-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-berry transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-berry transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="w-12 h-12 flex items-center justify-center text-ink/20 hover:text-rose transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-ink text-white p-10 rounded-[40px] shadow-2xl sticky top-40">
              <h3 className="text-2xl font-serif mb-8 italic">Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs uppercase tracking-widest opacity-60">
                   <span>Subtotal</span>
                   <span>${cartTotal}.00</span>
                </div>
                <div className="flex justify-between text-xs uppercase tracking-widest opacity-60">
                   <span>Shipping</span>
                   <span>Complimentary</span>
                </div>
                <div className="h-px bg-white/10 my-6" />
                <div className="flex justify-between text-xl font-serif italic">
                   <span>Total</span>
                   <span>${cartTotal}.00</span>
                </div>
              </div>

              <Link to="/checkout" className="w-full bg-gold text-ink px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3">
                Secure Checkout <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-8 flex flex-col items-center gap-4 opacity-40 text-[9px] uppercase tracking-widest font-bold text-center">
                 <p>Secure encryption enabled</p>
                 <div className="flex gap-4">
                    <span>VISA</span>
                    <span>AMEX</span>
                    <span>APPLE PAY</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
