'use client';

import { motion } from 'framer-motion';
import { 
  ChefHat, 
  Wine, 
  Users, 
  Shield, 
  Heart, 
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: '主廚精選',
    description: '每日由米其林星級主廚親自挑選最優質食材，確保每一道料理都達到完美標準。',
    icon: ChefHat,
    color: 'from-orange-400 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
    stats: '5+ 星級主廚',
    delay: 0.1
  },
  {
    id: 2,
    title: '精品酒窖',
    description: '來自全球頂級酒莊的珍藏佳釀，專業侍酒師為您推薦最適合的餐酒搭配。',
    icon: Wine,
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50',
    borderColor: 'border-purple-200',
    stats: '500+ 精選酒款',
    delay: 0.2
  },
  {
    id: 3,
    title: '私人訂製',
    description: '根據您的喜好和特殊需求，為您量身打造專屬的用餐體驗和菜單設計。',
    icon: Users,
    color: 'from-pink-400 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50',
    borderColor: 'border-pink-200',
    stats: '24小時 客製服務',
    delay: 0.3
  },
  {
    id: 4,
    title: '食安保證',
    description: '嚴格的食材溯源管理和衛生標準，讓您能夠安心享用每一口美食。',
    icon: Shield,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
    stats: 'ISO 認證標準',
    delay: 0.4
  },
  {
    id: 5,
    title: '健康料理',
    description: '注重營養均衡的料理設計，使用有機食材，為您的健康加分。',
    icon: Heart,
    color: 'from-rose-400 to-pink-500',
    bgColor: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    stats: '100% 有機食材',
    delay: 0.5
  },
  {
    id: 6,
    title: '快速服務',
    description: '訓練有素的服務團隊，確保您的用餐體驗流暢順利，不會有冗長的等待。',
    icon: Clock,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
    stats: '5分鐘 上菜保證',
    delay: 0.6
  }
];

const RestaurantFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1
            }}
            className="absolute"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`
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
            <span className="text-pink-600 font-semibold">我們的功能</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            了解更多關於我們令人驚豔的功能
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            從食材選擇到服務品質，每一個環節都體現我們對卓越的追求
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
                className="group relative"
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

                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-semibold text-sm`}>
                        <span>{feature.stats}</span>
                      </div>
                      
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-pink-600 group-hover:text-pink-700 transition-colors duration-300"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
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
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: feature.delay + 0.5
                    }}
                    className="absolute top-1/2 left-6 w-2 h-2 bg-rose-400 rounded-full"
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
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 border border-pink-100 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              體驗我們的專業服務
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              讓我們的專業團隊為您提供最優質的用餐體驗，每一個細節都精心安排
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                預約體驗
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold text-lg hover:border-pink-400 transition-all duration-300"
              >
                了解更多
              </motion.button>
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 pt-6 border-t border-pink-200"
            >
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-orange-400" />
                  <span>米其林星級主廚</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-purple-400" />
                  <span>精選頂級酒款</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>健康有機料理</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>食安品質保證</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantFeatures;