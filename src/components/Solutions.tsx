import { motion } from 'motion/react';

const solutions = [
  {
    title: 'Supply Chain',
    desc: 'Optimize logistics and inventory management with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    title: 'Customer Service',
    desc: 'Automate support with intelligent bots and sentiment analysis.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    title: 'Finance & Ops',
    desc: 'Streamline billing and financial reporting with AI precision.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    title: 'Data Analytics',
    desc: 'Turn raw data into actionable insights for strategic growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Scale your operations with robust, secure cloud solutions.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=300',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Solutions Designed for Measurable Growth</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-2xl mx-auto">
            Transform every facet of your business with our specialized AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={solution.image} 
                alt={solution.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {solution.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
