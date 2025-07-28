'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Layers, 
  Rocket, 
  Brain, 
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 1,
    title: '閃電速度',
    description: '採用最新技術架構，提供毫秒級響應速度，讓用戶體驗如絲般順滑。',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50',
    borderColor: 'border-yellow-200',
    delay: 0.1,
    tilt: 'rotate-2'
  },
  {
    id: 2,
    title: '企業級安全',
    description: '多層加密防護系統，確保您的數據安全無虞，符合國際安全標準。',
    icon: Shield,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
    delay: 0.2,
    tilt: '-rotate-1'
  },
  {
    id: 3,
    title: '彈性擴展',
    description: '模組化設計架構，隨業務成長靈活調整，無需重複開發投資。',
    icon: Layers,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
    delay: 0.3,
    tilt: 'rotate-1'
  },
  {
    id: 4,
    title: '快速部署',
    description: '一鍵式部署流程，從開發到上線僅需數分鐘，大幅縮短產品上市時間。',
    icon: Rocket,
    color: 'from-purple-400 to-violet-500',
    bgColor: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-200',
    delay: 0.4,
    tilt: '-rotate-2'
  },
  {
    id: 5,
    title: 'AI 智能優化',
    description: '內建機器學習演算法，自動優化系統性能，提供個人化用戶體驗。',
    icon: Brain,
    color: 'from-pink-400 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50',
    borderColor: 'border-pink-200',
    delay: 0.5,
    tilt: 'rotate-3'
  },
  {
    id: 6,
    title: '全球化支援',
    description: '多語言、多時區支援，讓您的產品輕鬆拓展至全球市場。',
    icon: Globe,
    color: 'from-indigo-400 to-blue-500',
    bgColor: 'from-indigo-50 to-blue-50',
    borderColor: 'border-indigo-200',
    delay: 0.6,
    tilt: '-rotate-1'
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-40 h-40 border-2 border-pink-200 rounded-full opacity-30"
        />
        
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-rose-200 to-pink-200 rounded-xl opacity-40"
        />

        {/* Floating Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + i * 10}%`
            }}
          >
            <Sparkles className="w-4 h-4 text-pink-300" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-pink-500" />
            <span className="text-pink-600 font-semibold">強大功能</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            專為速度、安全性和可擴展性而設計
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我們整合了最先進的技術和創新思維，為您打造無與倫比的數位體驗平台
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  rotateX: -15
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: feature.delay,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  y: -10
                }}
                className={`group relative ${feature.tilt} hover:rotate-0 transition-all duration-500`}
                style={{ perspective: '1000px' }}
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgColor} border-2 ${feature.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full`}>
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Animated Background Pattern */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  >
                    <Icon className="w-32 h-32 text-gray-400" />
                  </motion.div>

                  {/* Main Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: feature.delay + 0.2 }}
                      className="flex items-center gap-2 text-pink-600 font-semibold group-hover:text-pink-700 transition-colors duration-300"
                    >
                      <span>了解更多</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: feature.delay
                    }}
                    className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400 rounded-full"
                  />
                </div>

                {/* Outer Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              準備好體驗這些強大功能了嗎？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              立即開始您的數位轉型之旅，讓我們為您打造專屬的解決方案
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                免費試用
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                查看價格方案
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;