'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        {[
          { icon: Sparkles, x: '15%', y: '20%', delay: 0 },
          { icon: Zap, x: '85%', y: '30%', delay: 1 },
          { icon: Shield, x: '10%', y: '70%', delay: 2 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
            className="absolute text-white/10"
            style={{ left: item.x, top: item.y }}
          >
            <item.icon className="w-16 h-16" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-semibold">準備開始</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              掌控您的
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                未來
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              選擇適合您的道路，讓我們一起開創無限可能的數位未來
            </p>
          </motion.div>

          {/* CTA Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background Glow for Button Container */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Button - Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  
                  <div className="relative bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 opacity-10">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-32 h-32" />
                      </motion.div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4">
                        立即開始免費試用
                      </h3>
                      <p className="text-pink-100 mb-6 leading-relaxed">
                        無需信用卡，30天免費體驗所有功能，感受專業級的數位解決方案
                      </p>
                      
                      <Button
                        className="w-full bg-white text-pink-600 hover:bg-gray-50 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        開始免費試用
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Right Button - Secondary CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white overflow-hidden hover:bg-white/15 transition-all duration-300">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 opacity-10">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                        <Shield className="w-32 h-32" />
                      </motion.div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4">
                        預約專人諮詢
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        讓我們的專業顧問為您量身打造最適合的解決方案
                      </p>
                      
                      <Button
                        variant="outline"
                        className="w-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        立即預約諮詢
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">企業級安全保護</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">5分鐘快速設置</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                    <span className="text-sm font-medium">24/7 專業支援</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-400 text-sm mt-8"
          >
            已有超過 50,000+ 企業選擇我們的解決方案 • 30天內隨時取消
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;