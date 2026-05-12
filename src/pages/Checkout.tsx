import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Checkout() {
  const { cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="pt-40 pb-24 bg-cream min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full bg-berry/10 flex items-center justify-center mb-12 shadow-xl shadow-berry/10"
        >
           <CheckCircle2 className="w-12 h-12 text-berry" />
        </motion.div>
        <h2 className="text-6xl font-serif text-ink mb-6 italic">Awaiting your arrival</h2>
        <p className="text-ink/60 mb-12 max-w-lg mx-auto">Your order has been received by our atelier. We will meticulously prepare your selection and notify you once it begins its journey.</p>
        <Link to="/" className="bg-berry text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
          Return to the Maison
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <Link to="/cart" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-ink/60 hover:text-berry mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Review Collection
            </Link>
            <h1 className="text-5xl font-serif text-ink mb-12 italic">Finalize Order</h1>

            <form onSubmit={handleSubmit} className="space-y-12">
              <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-berry mb-8">Delivery Logistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <input type="text" placeholder="FIRST NAME" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                  </div>
                  <div className="col-span-1">
                    <input type="text" placeholder="LAST NAME" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                  </div>
                  <div className="col-span-2">
                    <input type="email" placeholder="EMAIL ADDRESS" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" placeholder="STREET ADDRESS" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                  </div>
                  <div className="col-span-1">
                    <input type="text" placeholder="CITY" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                  </div>
                  <div className="col-span-1">
                    <input type="text" placeholder="POSTAL CODE" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-berry mb-8">Payment Method</h3>
                <div className="space-y-6">
                  <div className="p-6 border border-berry bg-white/50 rounded-2xl flex items-center justify-between">
                     <span className="text-xs font-bold tracking-widest uppercase">Credit / Debit Card</span>
                     <div className="flex gap-2">
                        <div className="w-8 h-5 bg-ink/5 rounded" />
                        <div className="w-8 h-5 bg-ink/5 rounded" />
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <input type="text" placeholder="CARD NUMBER" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                    </div>
                    <div className="col-span-1">
                      <input type="text" placeholder="EXPIRY MM/YY" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                    </div>
                    <div className="col-span-1">
                      <input type="text" placeholder="CVV" required className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-berry transition-all text-xs tracking-widest uppercase placeholder:text-ink/30" />
                    </div>
                  </div>
                </div>
              </section>

              <button type="submit" className="w-full bg-berry text-white py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-rose transition-all shadow-2xl">
                Authorize Payment — ${cartTotal}.00
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
             <div className="aspect-[3/4] bg-ink rounded-[48px] overflow-hidden sticky top-40 relative group">
                <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s]" alt="Fragrance" />
                <div className="absolute inset-0 p-16 flex flex-col justify-end text-white">
                   <h2 className="text-4xl font-serif mb-4 italic italic leading-tight">The finishing touch to your signature self.</h2>
                   <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Maison Faridah</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
