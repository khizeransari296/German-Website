import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkPage = location.pathname === '/' || location.pathname === '/billing';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'AI & Automation', href: '/#capabilities' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent',
        !isScrolled && isDarkPage ? 'text-white' : 'text-gray-900'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            isScrolled ? "text-gray-900" : (isDarkPage ? "text-white" : "text-gray-900")
          )}>AutoAI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled ? "text-gray-600 hover:text-blue-600" : (isDarkPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600")
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/login"
            className={cn(
              "p-2 transition-colors",
              isScrolled ? "text-gray-600 hover:text-blue-600" : (isDarkPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600")
            )}
          >
            <User size={20} />
          </Link>
          <Link 
            to="/register"
            className={cn(
              "flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-medium transition-colors",
              isScrolled 
                ? "border-gray-200 text-gray-900 hover:bg-gray-50" 
                : (isDarkPage ? "border-gray-600 text-white hover:bg-white/10" : "border-gray-200 text-gray-900 hover:bg-gray-50")
            )}
          >
            Sign Up
          </Link>
          <button className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium border",
            isScrolled ? "border-gray-200" : (isDarkPage ? "border-gray-600" : "border-gray-200")
          )}>
            ENG
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden",
            isScrolled ? "text-gray-900" : (isDarkPage ? "text-white" : "text-gray-900")
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            <Link 
              to="/login"
              className="flex items-center gap-2 text-gray-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User size={20} />
              Login
            </Link>
            <Link 
              to="/register"
              className="w-full py-3 bg-blue-600 text-white text-center rounded-xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up Free
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
