import { motion } from 'motion/react';
import { 
  Bot, 
  BarChart3, 
  Zap, 
  FileText, 
  LineChart, 
  Network 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const capabilities = [
  {
    title: 'Process Automation',
    description: 'Automate repetitive, high-volume tasks with intelligent bots that work 24/7 without error.',
    icon: Bot,
    color: 'bg-blue-600',
  },
  {
    title: 'Intelligent Data Analysis',
    description: 'Transform fragmented data into structured, actionable intelligence using advanced machine learning models.',
    icon: BarChart3,
    color: 'bg-blue-700',
  },
  {
    title: 'Workflow Optimization',
    description: 'Redesign and streamline operational workflows for maximum throughput and minimal human intervention.',
    icon: Zap,
    color: 'bg-blue-800',
  },
  {
    title: 'AI-Based Reporting',
    description: 'Generate automated, real-time narrative reports that highlight critical operational metrics.',
    icon: FileText,
    color: 'bg-blue-600',
  },
  {
    title: 'Predictive Insights',
    description: 'Forecast demand, predict maintenance needs, and identify anomalies before they impact the bottom line.',
    icon: LineChart,
    color: 'bg-blue-700',
  },
  {
    title: 'System Integration',
    description: 'Connect disparate legacy systems via intelligent APIs to ensure seamless data flow across operations.',
    icon: Network,
    color: 'bg-blue-800',
  },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            AI CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive AI solutions tailored to solve complex <br className="hidden md:block" />
            operational challenges across your enterprise.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110",
                cap.color
              )}>
                <cap.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
