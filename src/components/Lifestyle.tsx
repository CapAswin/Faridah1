import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function IngredientShowcase() {
  const ingredients = [
    { name: 'Turkish Rose', desc: 'Hand-picked at dawn for peak intensity', img: 'https://images.unsplash.com/photo-1559563362-c667bb5f5480?q=80&w=600&auto=format&fit=crop' },
    { name: 'Warm Amber', desc: 'Sourced from the heart of Madagascar', img: 'https://images.unsplash.com/photo-1621230182809-53e346577317?q=80&w=600&auto=format&fit=crop' },
    { name: 'White Musk', desc: 'Velvety trail with ethereal lightness', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop' },
    { name: 'Sandalwood', desc: 'Creamy wooden notes from Mysore', img: 'https://images.unsplash.com/photo-1596435707124-766ff42ae537?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-berry font-bold mb-4 block">The Alchemy</span>
          <h2 className="text-5xl font-serif">Purity in Every Note</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square rounded-[32px] overflow-hidden group"
            >
              <img src={ing.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={ing.name} />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-all duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl font-serif mb-2">{ing.name}</h3>
                <p className="text-xs text-white/70 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ing.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-ink text-cream overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-berry/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-berry mx-auto mb-8 opacity-50" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif italic mb-12 leading-tight"
          >
            "Faridah captures the essence of a modern queen. It's not just a scent; it's a statement of elegance and power that lingers in the air like a sweet secret."
          </motion.p>
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 rounded-full border border-berry/30 p-1 mb-4">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover rounded-full" alt="Portrait" />
             </div>
             <p className="text-[11px] uppercase tracking-[0.4em] font-bold">Sofia Valentino</p>
             <p className="text-[10px] text-cream/40 uppercase tracking-widest mt-1">Editor in Chief, L'Elegance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop" 
            className="rounded-[40px] shadow-editorial" 
            alt="Story" 
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 glass rounded-[32px] p-6 flex flex-col justify-center hidden sm:flex">
             <span className="text-3xl font-serif text-berry">100%</span>
             <span className="text-[10px] uppercase tracking-widest font-bold text-ink/60">Natural Essences</span>
          </div>
        </div>
        
        <div className="max-w-lg">
          <span className="text-sm uppercase tracking-widest text-berry font-bold mb-4 block">Our Story</span>
          <h2 className="text-5xl font-serif mb-8 leading-tight">Crafted with Passion, Worn with <span className="italic">Pride</span></h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-8">
            Founded in the heart of Florence, Faridah blends centuries-old Italian perfumery traditions with a modern, unapologetically bold feminine spirit. Every drop is a journey.
          </p>
          <ul className="space-y-4 mb-10">
            {['Artisanal Extraction', 'Ethical Sourcing', 'Vegan & Cruelty Free'].map(item => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-berry rounded-full" />
                <span className="text-sm font-medium uppercase tracking-widest">{item}</span>
              </li>
            ))}
          </ul>
          <button className="px-10 py-5 bg-ink text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-berry transition-all">Explore the Atelier</button>
        </div>
      </div>
    </section>
  );
}
