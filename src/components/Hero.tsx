import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

function FloatingParticles() {
  const particles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100 + "%",
      initialY: Math.random() * 100 + "%",
      driftX: (Math.random() - 0.5) * 20 + "%",
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 10
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            opacity: 0, 
            x: p.initialX, 
            y: p.initialY 
          }}
          animate={{ 
            opacity: [0, 0.2, 0],
            y: ["-10%", "110%"],
            x: ["0%", p.driftX]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: p.delay
          }}
          className="absolute w-1 h-1 bg-champagne rounded-full blur-[1px] will-change-transform"
        />
      ))}
    </div>
  );
}

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      <FloatingParticles />
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 bg-[url('/Hero_Faridah.jpeg')] bg-cover bg-center will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-ink/10" />
      </motion.div>

      <div className="container mx-auto px-12 relative z-10 h-full flex flex-col items-center justify-center">

        <motion.div 
          style={{ opacity, y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center text-center w-full will-change-transform"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-rose text-[10px] font-bold tracking-[0.5em] uppercase mb-6"
          >
            The Art of Fragrance
          </motion.span>
          <h1 className="text-[60px] sm:text-[100px] md:text-[160px] lg:text-[200px] font-serif leading-none text-berry mb-4 tracking-tighter mix-blend-multiply">
            Faridah
          </h1>
          <p className="text-berry/60 text-[8px] sm:text-xs uppercase tracking-[0.4em] mb-12 sm:text-xs uppercase tracking-[0.4em] mb-16 font-medium">Paris • Dubai • Florence</p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-md w-full glass p-6 sm:p-10 rounded-[32px] md:rounded-[48px] shadow-2xl relative group mx-auto"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold/10 blur-2xl rounded-full" />
            
            <div className="flex flex-col gap-2 mb-6 sm:mb-8 text-left">
              <span className="text-[10px] text-rose font-bold uppercase tracking-widest">Nº 64 Signature</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ink italic leading-tight">Vanilla Royale</h2>
            </div>
            
            <p className="text-ink/70 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 italic text-left">
              "A cinematic fragrance journey through sun-drenched gardens, crafted with velvety Moroccan rose and rare golden amber."
            </p>
            
            <div className="flex items-center justify-between border-t border-ink/10 pt-6 sm:pt-8">
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-ink/40 uppercase tracking-widest font-bold">Price</span>
                <span className="text-xl sm:text-2xl font-serif text-berry font-bold">$145.00</span>
              </div>
              <button className="bg-berry text-cream px-6 sm:px-10 py-3 sm:py-5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase hover:bg-rose transition-all flex items-center gap-2 sm:gap-3 shadow-xl shadow-berry/20">
                Discover <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/40" />
        ))}
        <div className="w-1 h-8 rounded-full bg-white overflow-hidden">
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="w-full h-full bg-berry origin-top"
          />
        </div>
      </div>
    </section>
  );
}
