'use client';

import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    content: "這個平台徹底改變了我們的業務運作方式。從部署到維護，每個環節都展現了專業水準。團隊的支援更是無可挑剔，讓我們能專注於核心業務發展。",
    author: "張雅婷",
    position: "技術總監",
    company: "創新科技股份有限公司",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150&h=150&auto=format&fit=crop&crop=face",
    rating: 5,
    bgGradient: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    content: "令人驚艷的用戶體驗設計，加上強大的後端架構，讓我們的客戶滿意度提升了 40%。這不僅是一個產品，更是一個完整的解決方案。",
    author: "李建宏",
    position: "執行長",
    company: "數位轉型顧問公司",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&crop=face",
    rating: 5,
    bgGradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    content: "安全性是我們最關心的問題，這個平台提供的企業級保護讓我們完全放心。而且擴展性極佳，隨著業務成長輕鬆應對各種挑戰。",
    author: "王美玲",
    position: "資訊安全主管",
    company: "金融服務集團",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&crop=face",
    rating: 5,
    bgGradient: "from-rose-500 to-purple-500"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-3xl"
        />

        {/* Floating Quote Marks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className="absolute text-white/10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`
            }}
          >
            <Quote className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <Quote className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-semibold">客戶心聲</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            來自我們尊貴客戶的
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              一句話
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            聽聽那些已經體驗過我們服務的客戶，他們的成功故事就是我們最好的證明
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentData.bgGradient} opacity-5 rounded-3xl`} />
            
            {/* Quote Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-8"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${currentData.bgGradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                <Quote className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Large Quote Mark Background */}
            <div className="absolute top-4 right-8 opacity-5">
              <Quote className="w-32 h-32 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10 pt-8">
              {/* Rating Stars */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-1 mb-6"
              >
                {[...Array(currentData.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8"
              >
                &ldquo;{currentData.content}&rdquo;
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <img
                    src={currentData.avatar}
                    alt={currentData.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentData.bgGradient} opacity-20 rounded-full blur-sm`} />
                </motion.div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {currentData.author}
                  </h4>
                  <p className="text-gray-300 font-medium">
                    {currentData.position}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {currentData.company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          {/* Testimonial Indicators */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-pink-400 scale-125 shadow-lg' 
                    : 'bg-white/20 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-2">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            加入我們滿意客戶的行列，開始您的成功故事
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            立即聯繫我們
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;