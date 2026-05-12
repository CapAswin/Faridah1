import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/Products';
import { Story, IngredientShowcase, Testimonials } from '../components/Lifestyle';
import { Newsletter } from '../components/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <div className="rounded-t-[48px] bg-cream -translate-y-12 relative z-20">
        <ProductGrid />
        <Story />
        <IngredientShowcase />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  );
}
