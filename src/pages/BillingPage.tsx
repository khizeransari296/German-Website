import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, CheckCircle2, Globe } from 'lucide-react';

export function BillingPage() {
  return (
    <div className="min-h-screen bg-blue-50 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Globe size={20} />
                </div>
                Contact & Billing
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">First Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Last Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Work Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Company Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Acme Corp" />
                </div>
              </form>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <CreditCard size={20} />
                </div>
                Payment Method
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                      placeholder="0000 0000 0000 0000" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Expiry Date</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">CVC</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="123" />
                  </div>
                </div>
                <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20">
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-blue-100 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Standard Plan</span>
                  <span className="font-bold text-gray-900">$49.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Tax (0%)</span>
                  <span className="font-bold text-gray-900">$0.00</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">$49.99</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="text-green-500" size={18} />
                  Cancel anytime
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="text-blue-500" size={18} />
                  Secure 256-bit SSL encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
