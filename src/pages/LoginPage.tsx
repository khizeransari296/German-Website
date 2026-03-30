import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Github } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />
        <div className="relative z-10 p-20 flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-blue-600 font-bold text-2xl">A</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">AutoAI</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Scale Faster with <br />
            Intelligent Automation.
          </h1>
          <p className="text-xl text-blue-100 max-w-md">
            Join the enterprise revolution and transform your operations with our AI-driven platform.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-500">Fill in your details to access your dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="email" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="name@company.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="password" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20">
              Sign In
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-bold text-gray-700">
                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-bold text-gray-700">
                <Github size={20} />
                GitHub
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-gray-500">
            Don't have an account? <Link to="/register" className="text-blue-600 font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
