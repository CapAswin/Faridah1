import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [view, setView] = useState<'login' | 'signup'>('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    login('user@example.com', 'Valued Guest');
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAuthModal}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-cream rounded-[48px] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-berry" />
            
            <button 
              onClick={closeAuthModal}
              className="absolute top-8 right-8 text-ink/40 hover:text-berry transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-12">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-serif text-berry mb-2 italic">
                  {view === 'login' ? 'Welcome Back' : 'Join the Maison'}
                </h3>
                <p className="text-ink/60 text-xs uppercase tracking-widest font-bold">
                  {view === 'login' ? 'Sign in to your account' : 'Create your luxury profile'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {view === 'signup' && (
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                    <input 
                      type="text" 
                      placeholder="FULL NAME" 
                      required 
                      className="w-full bg-transparent border-b border-ink/10 pl-8 py-4 outline-none focus:border-berry transition-all text-[10px] tracking-widest uppercase placeholder:text-ink/30"
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    required 
                    className="w-full bg-transparent border-b border-ink/10 pl-8 py-4 outline-none focus:border-berry transition-all text-[10px] tracking-widest uppercase placeholder:text-ink/30"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                  <input 
                    type="password" 
                    placeholder="PASSWORD" 
                    required 
                    className="w-full bg-transparent border-b border-ink/10 pl-8 py-4 outline-none focus:border-berry transition-all text-[10px] tracking-widest uppercase placeholder:text-ink/30"
                  />
                </div>

                {view === 'login' && (
                  <div className="flex justify-end">
                    <button type="button" className="text-[9px] text-berry font-bold uppercase tracking-widest hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full bg-berry text-white py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-rose transition-all shadow-xl shadow-berry/20 flex items-center justify-center gap-3 mt-8"
                >
                  {view === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-12 text-center pt-8 border-t border-ink/5">
                <p className="text-[10px] text-ink/40 uppercase tracking-widest font-bold mb-4">
                  {view === 'login' ? "Don't have an account?" : "Already a member?"}
                </p>
                <button 
                  onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                  className="text-berry font-serif italic text-xl hover:text-rose transition-colors"
                >
                  {view === 'login' ? 'Register here' : 'Sign in here'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
