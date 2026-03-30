import { motion } from 'motion/react';
import { ShieldCheck, Lock, Award, CheckCircle } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="py-24 bg-[#1a2b4b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vanta</h2>
            <h3 className="text-2xl md:text-3xl font-medium mb-8 text-blue-200">
              The Compliance Standard for <br />
              Modern Startups and Enterprises.
            </h3>
            <p className="text-lg text-blue-100/60 mb-10 max-w-lg leading-relaxed">
              We maintain the highest security standards to ensure your data is always protected and compliant with global regulations.
            </p>
            <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105">
              View Security Report
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: 'SOC 2 Type II' },
              { icon: Lock, title: 'ISO 27001' },
              { icon: Award, title: 'GDPR Compliant' },
              { icon: CheckCircle, title: 'HIPAA Ready' },
              { icon: ShieldCheck, title: 'PCI DSS' },
              { icon: Lock, title: 'CCPA' },
            ].map((badge, index) => (
              <div key={badge.title} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <badge.icon size={24} />
                </div>
                <div className="text-sm font-bold">{badge.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
