'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Building2, UtensilsCrossed } from 'lucide-react';

const VerticalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { href: '/' as any, label: '首頁', icon: Home },
    { href: '/corporate' as any, label: '企業官網', icon: Building2 },
    { href: '/restaurant' as any, label: '餐廳官網', icon: UtensilsCrossed },
  ];

  return (
    <>
      {/* Desktop Vertical Navigation */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-pink-600 via-rose-500 to-purple-600 z-50">
        <div className="flex flex-col items-center py-8 space-y-8">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
            >
              <div className="w-6 h-6 bg-white rounded-md" />
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative group p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 shadow-lg' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {item.label}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Decorative Element */}
          <div className="mt-auto mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 p-0 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-gradient-to-br from-pink-600 via-rose-500 to-purple-600 z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 px-8 py-4 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20 shadow-lg scale-105' 
                          : 'hover:bg-white/10 hover:scale-105'
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <span className="text-xl font-semibold text-white">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalNavigation;