import { motion } from 'motion/react';
import { ArrowRight, Play, TrendingUp, Cpu, BarChart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#1a2b4b] via-[#2a4b8b] to-[#1a2b4b]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            AI-POWERED OPTIMIZATION
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight font-display">
            OPTIMIZE PROCESSES <br />
            <span className="text-blue-400">INCREASE PROFIT</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed font-sans">
            Our platform of intelligent solutions enables you to scale faster, for less, and automate your operations seamlessly using the latest AI and cloud technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20">
              Get Started
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full flex items-center gap-2 transition-all transform hover:scale-105 backdrop-blur-sm border border-white/10">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Man in suit image placeholder - using a professional business photo */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Professional Business Leader" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Data Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Efficiency</div>
                <div className="text-lg font-bold text-gray-900">+42%</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Cpu size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Automation</div>
                <div className="text-lg font-bold text-gray-900">Active</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-16 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <BarChart size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Profit</div>
                <div className="text-lg font-bold text-gray-900">Growing</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative background glow */}
          <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full z-0" />
        </motion.div>
      </div>
    </section>
  );
}
