import { motion } from 'motion/react';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="group relative isolate"
    >
      <div className={`aspect-[4/5] rounded-[48px] overflow-hidden ${product.color} mb-6 relative border border-champagne shadow-editorial group-hover:shadow-2xl transition-all duration-500 transform-gpu backface-hidden`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform transform-gpu"
        />
        
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500 pointer-events-none z-10" />

        <div className="absolute inset-x-4 bottom-6 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-berry hover:text-white transition-all duration-300 shadow-lg active:scale-95 transform-gpu"
            title="Add to Collection"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-berry hover:text-white transition-all duration-300 shadow-lg active:scale-95 transform-gpu"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-berry hover:text-white transition-all duration-300 shadow-lg active:scale-95 transform-gpu">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-4 right-4 h-8 px-4 glass rounded-full flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-widest font-bold">New</span>
        </div>
      </div>

      <div className="px-2">
        <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-1">{product.category}</p>
        <div className="flex justify-between items-baseline">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-serif text-ink group-hover:text-berry transition-colors">{product.name}</h3>
          </Link>
          <span className="text-sm font-medium text-ink/60">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductGrid() {
  return (
    <section className="py-24 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
             <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.4em] text-berry font-bold mb-4 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif leading-tight"
            >
              Discover Your <br />
              <span className="italic text-rose">Signature Scent</span>
            </motion.h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest font-bold border-b-2 border-berry/20 pb-1 hover:border-berry transition-colors">
            View All Fragrances
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
