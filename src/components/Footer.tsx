import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-12 bg-champagne/10">
      <div className="container mx-auto px-6">
        <div className="bg-ink rounded-[48px] p-8 md:p-20 text-white shadow-editorial relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-berry/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block">The Inner Circle</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Be Part of the <br /><span className="italic">Maison Faridah</span></h2>
            <p className="text-white/60 text-sm md:text-base">Receive exclusive access to new launches, private sales, and the stories behind our latest elixirs.</p>
          </div>
          
          <form className="relative z-10 w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-5 focus:bg-white/20 transition-all text-[10px] tracking-widest outline-none uppercase text-white placeholder:text-white/40"
            />
            <button className="bg-gold text-ink px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2">
              Join <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream pt-24 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
               <h3 className="text-6xl md:text-8xl font-serif tracking-tighter text-berry mb-8 italic">Faridah</h3>
               <p className="text-ink/60 text-lg leading-relaxed max-w-sm mb-12">
                A symphony of scents designed for the modern woman who radiates confidence, grace, and an unapologetic sense of self.
               </p>
            </div>
            <div className="flex gap-4">
              {['Instagram', 'Journal', 'Pinterest'].map((social) => (
                <a key={social} href="#" className="text-[11px] uppercase tracking-[0.3em] font-bold text-ink/40 hover:text-berry transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-berry">Collection</h4>
              <ul className="space-y-4 text-[13px] text-ink/60 font-medium">
                <li><a href="#" className="hover:text-berry transition-colors">Signature Scents</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">The Oud Collection</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Floral Musks</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Gift Ceremonies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-berry">The Maison</h4>
              <ul className="space-y-4 text-[13px] text-ink/60 font-medium">
                <li><a href="#" className="hover:text-berry transition-colors">Our Heritage</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Ethical Sourcing</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Atelier News</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-berry">Customer Care</h4>
              <ul className="space-y-4 text-[13px] text-ink/60 font-medium">
                <li><a href="#" className="hover:text-berry transition-colors">Boutique Locator</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-berry transition-colors">Contact Maison</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ink/5 gap-8">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center">
                <div className="w-2 h-2 bg-berry rounded-full" />
             </div>
             <p className="text-[10px] text-ink/40 tracking-[0.2em] uppercase font-bold">© {currentYear} Faridah Perfumery. All rights reserved.</p>
          </div>
          
          <div className="flex gap-12">
            <span className="text-[9px] text-ink/30 italic font-medium">Designed in Florence</span>
            <span className="text-[9px] text-ink/30 italic font-medium">Sourced Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
