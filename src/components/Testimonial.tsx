import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <section className="py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-xl border border-blue-100">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20">
                <Quote size={32} fill="currentColor" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight italic">
                "AutoAI has revolutionized our operational efficiency across every department."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" 
                    alt="Testimonial Author" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">David Chen</div>
                  <div className="text-sm text-gray-500">Chief Operations Officer, Global Logistics</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000&h=700" 
                alt="Business Meeting" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
