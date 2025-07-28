'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: 50000,
    suffix: '+',
    label: '滿意客戶',
    description: '全球企業信賴之選',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50'
  },
  {
    id: 2,
    value: 98,
    suffix: '%',
    label: '成功率',
    description: '專案完成品質保證',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 3,
    value: 15,
    suffix: '年',
    label: '行業經驗',
    description: '深耕數位轉型領域',
    icon: Award,
    color: 'from-rose-500 to-purple-500',
    bgColor: 'from-rose-50 to-purple-50'
  }
];

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      const increment = value / (duration * 1000 / 16); // 60fps
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev + increment >= value) {
            clearInterval(timer);
            return value;
          }
          return prev + increment;
        });
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration, hasStarted]);

  return (
    <span ref={ref}>
      {Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 left-10 w-24 h-24 border border-pink-200 rounded-full opacity-30"
        />
        
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-40"
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
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            數據一覽
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            用數字見證我們的專業實力，每一個統計都代表著我們對品質的堅持與客戶的信任
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${stat.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Floating Icon Background */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute top-4 right-4 opacity-10"
                  >
                    <Icon className="w-32 h-32 text-gray-400" />
                  </motion.div>

                  {/* Main Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Stats Number */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {stat.description}
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
                      delay: index * 0.5
                    }}
                    className="absolute bottom-4 left-4 w-3 h-3 bg-pink-400 rounded-full"
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
                      delay: index * 0.7
                    }}
                    className="absolute top-1/2 left-6 w-2 h-2 bg-rose-400 rounded-full"
                  />
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            這些數字僅是我們成就的一部分，讓我們為您創造更多可能
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            了解更多成功案例
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;