import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck, RefreshCcw, Star } from 'lucide-react';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState('100ml');

  if (!product) return <div className="pt-40 text-center font-serif text-3xl">Fragrance not found</div>;

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-ink/60 hover:text-berry mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`aspect-[4/5] rounded-[48px] overflow-hidden ${product.color} shadow-2xl relative`}
          >
             <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
             <div className="absolute top-8 left-8 flex flex-col gap-3">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                   <Star className="w-4 h-4 text-gold fill-gold" />
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-berry font-bold mb-4 block">Product Reference: Nº {product.id}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6 italic">{product.name}</h1>
            <div className="flex items-center gap-4 mb-8">
               <span className="text-3xl font-serif text-berry font-bold">${product.price}.00</span>
               <div className="h-4 w-px bg-ink/10" />
               <span className="text-[10px] uppercase tracking-widest font-bold text-ink/40">{product.category}</span>
            </div>

            <p className="text-ink/70 text-lg leading-relaxed mb-12 max-w-lg italic">
              "{product.description}"
            </p>

            <div className="space-y-12 mb-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-berry">Size Selection</h3>
                <div className="flex gap-4">
                  {['50ml', '100ml', '200ml'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase border transition-all ${
                        selectedSize === size ? 'bg-berry text-white border-berry' : 'border-ink/10 hover:border-berry text-ink/60'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-berry">Fragrance Notes</h3>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-ink/30 block mb-2">Top</span>
                    <ul className="text-xs font-medium text-ink/80 leading-relaxed">
                      {product.notes.top.map(n => <li key={n}>{n}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-ink/30 block mb-2">Heart</span>
                    <ul className="text-xs font-medium text-ink/80 leading-relaxed">
                      {product.notes.middle.map(n => <li key={n}>{n}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-ink/30 block mb-2">Base</span>
                    <ul className="text-xs font-medium text-ink/80 leading-relaxed">
                      {product.notes.base.map(n => <li key={n}>{n}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
               <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-ink text-white px-10 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-berry transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Collection
               </button>
               <button className="px-10 py-6 rounded-full border border-ink/10 hover:border-berry text-[10px] font-bold tracking-widest uppercase transition-all">
                  Request Sample
               </button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-ink/5 pt-12">
               {[
                 { icon: Truck, text: 'Complimentary shipping' },
                 { icon: ShieldCheck, text: 'Authenticity guaranteed' },
                 { icon: RefreshCcw, text: 'Seamless returns' }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center gap-3">
                   <item.icon className="w-5 h-5 text-berry/50" />
                   <span className="text-[9px] uppercase tracking-widest font-bold text-ink/40 leading-tight">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
