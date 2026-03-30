import { motion } from 'motion/react';
import { Ship, Truck, Factory, Building2 } from 'lucide-react';

export function IndustryFocus() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Industries We Optimize</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Scale your operations with <br />
              <span className="text-blue-600">AI-driven precision</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              From logistics to manufacturing, our platform is built to handle the most complex operational challenges across diverse industries.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Ship size={20} />
                </div>
                <span className="font-bold text-gray-900">Maritime</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Truck size={20} />
                </div>
                <span className="font-bold text-gray-900">Logistics</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Factory size={20} />
                </div>
                <span className="font-bold text-gray-900">Manufacturing</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Building2 size={20} />
                </div>
                <span className="font-bold text-gray-900">Enterprise</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1494412574743-019485b7828d?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="Logistics and Maritime" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
