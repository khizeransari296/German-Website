import { motion } from 'motion/react';
import { Shield, Zap, Globe, Users, Lightbulb } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Compliance', desc: 'Secure and compliant data handling.' },
  { icon: Zap, title: 'Real-time', desc: 'Instant insights and actions.' },
  { icon: Globe, title: 'Scalability', desc: 'Grow without operational friction.' },
  { icon: Users, title: 'Collaboration', desc: 'Unify teams with shared data.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Focus on high-value creative work.' },
];

export function TrustBar() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Why Optimization Matters</h2>
          <p className="text-gray-500 text-sm">Choose us to unlock a faster, more efficient way to run your business operations.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <reason.icon size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{reason.title}</h3>
              <p className="text-xs text-gray-400 leading-tight">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
