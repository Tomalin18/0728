'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Phone, Award } from 'lucide-react';

const RestaurantHero = () => {
  const highlights = [
    {
      id: 1,
      title: '主廚推薦',
      subtitle: '季節限定料理',
      description: '採用當季最新鮮的食材，由米其林星級主廚精心製作',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&auto=format&fit=crop',
      bgColor: 'from-amber-50 to-orange-50',
      accentColor: 'from-amber-500 to-orange-500',
      icon: Award
    },
    {
      id: 2,
      title: '優雅環境',
      subtitle: '浪漫用餐氛圍',
      description: '精心設計的室內空間，營造溫馨浪漫的用餐體驗',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&auto=format&fit=crop',
      bgColor: 'from-rose-50 to-pink-50',
      accentColor: 'from-rose-500 to-pink-500',
      icon: Star
    },
    {
      id: 3,
      title: '私人包廂',
      subtitle: '獨享用餐空間',
      description: '提供私密舒適的包廂服務，適合商務聚餐或特殊慶祝',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&auto=format&fit=crop',
      bgColor: 'from-purple-50 to-indigo-50',
      accentColor: 'from-purple-500 to-indigo-500',
      icon: MapPin
    },
    {
      id: 4,
      title: '精選酒單',
      subtitle: '世界頂級佳釀',
      description: '來自世界各地的精選葡萄酒，完美搭配每一道料理',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&auto=format&fit=crop',
      bgColor: 'from-emerald-50 to-teal-50',
      accentColor: 'from-emerald-500 to-teal-500',
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-25 to-rose-25 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-pink-200 rounded-full opacity-30"
        />
        
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-40"
        />
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
            <Star className="w-5 h-5 text-pink-500" />
            <span className="text-pink-600 font-semibold">精緻美食</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            多個亮點
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            同時展示各個方面的卓越品質，從料理到環境，每個細節都精心打造
          </p>

          {/* Restaurant Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span>台北市信義區</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-500" />
              <span>週一至週日 11:30-22:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-500" />
              <span>02-1234-5678</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">4.8 (2,341 評價)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            
            return (
              <motion.div
                key={highlight.id}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  rotateY: -15
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5
                }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${highlight.bgColor} border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full`}>
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="absolute top-4 right-4"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${highlight.accentColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-pink-600 mb-3">
                      {highlight.subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {highlight.description}
                    </p>
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
                      delay: index * 0.3
                    }}
                    className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full"
                  />
                </div>

                {/* Outer Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.accentColor} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 border border-pink-100 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              準備好享受一場味覺饗宴了嗎？
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              立即預約您的專屬位置，讓我們為您打造難忘的用餐體驗
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                立即訂位
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                查看菜單
              </Button>
            </div>

            {/* Special Offers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-6 border-t border-pink-200"
            >
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>生日優惠 9 折</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>會員專享套餐</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>下午茶時段特價</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantHero;