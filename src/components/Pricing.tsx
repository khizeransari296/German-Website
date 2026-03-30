import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '$19.99',
    desc: 'Perfect for small teams and startups looking to automate their first processes.',
    features: ['Up to 5 automated workflows', 'Standard AI models', 'Email support', 'Basic reporting'],
    color: 'bg-blue-50',
    btnColor: 'bg-blue-600 text-white',
  },
  {
    name: 'Standard',
    price: '$49.99',
    desc: 'Ideal for growing businesses with complex operational needs and data analysis.',
    features: ['Unlimited workflows', 'Advanced AI models', 'Priority support', 'Advanced analytics', 'Custom integrations'],
    color: 'bg-blue-100',
    btnColor: 'bg-blue-700 text-white',
    popular: true,
  },
  {
    name: 'Gold',
    price: '$99.99',
    desc: 'Enterprise-grade solution with dedicated support and custom AI development.',
    features: ['Everything in Standard', 'Custom AI model training', 'Dedicated account manager', 'SLA guarantees', 'On-premise deployment options'],
    color: 'bg-yellow-50',
    btnColor: 'bg-yellow-600 text-white',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">A Plan That Fits Your Needs</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-2xl mx-auto">
            Choose the right plan to scale your business operations with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[3rem] shadow-xl border border-blue-200 flex flex-col ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                {plan.desc}
              </p>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to="/billing"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 ${plan.btnColor}`}
              >
                Choose Plan
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
