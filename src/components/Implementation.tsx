import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Assessment',
    description: 'We analyze your current operations to identify high-impact automation opportunities.',
  },
  {
    title: 'Strategy & Roadmap',
    description: 'Developing a tailored AI implementation plan aligned with your business goals.',
  },
  {
    title: 'Development & Training',
    description: 'Building custom AI models and training them on your specific operational data.',
  },
  {
    title: 'Integration & Deployment',
    description: 'Seamlessly integrating AI solutions into your existing tech stack and workflows.',
  },
];

export function Implementation() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full"
          >
            IMPLEMENTATION PROCESS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            A structured, low-risk approach to integrating <br className="hidden md:block" />
            enterprise-grade AI.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 size={14} />
                Phase {index + 1} Complete
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
