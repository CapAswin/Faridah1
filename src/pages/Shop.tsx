import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/Products';
import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';

export function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Signature', 'Floral Musky', 'Spicy Oriental', 'The Oud', 'Botanicals'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-40 pb-24 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-berry font-bold mb-4 block"
          >
            The Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mb-8"
          >
            Discover Your <span className="italic text-rose">Signature Scent</span>
          </motion.h1>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 border-b border-ink/5 pb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-widest font-bold pb-2 transition-all relative ${
                  activeCategory === cat ? 'text-berry' : 'text-ink/40 hover:text-ink'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-berry" 
                  />
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 shadow-sm w-full md:w-auto">
            <Search className="w-4 h-4 text-ink/40" />
            <input 
              type="text" 
              placeholder="SEARCH FRAGRANCE..." 
              className="bg-transparent border-none outline-none text-[10px] tracking-widest uppercase w-full md:w-48 placeholder:text-ink/30"
            />
            <SlidersHorizontal className="w-4 h-4 text-ink/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product as any} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
