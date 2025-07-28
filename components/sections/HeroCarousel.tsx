'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: '精選故事',
    subtitle: '滑動瀏覽我們最新的更新',
    content: '探索創新科技如何改變我們的工作方式，讓每一個故事都成為成功的起點',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&auto=format&fit=crop',
    bgColor: 'from-pink-100 to-rose-100'
  },
  {
    id: 2,
    title: '創新未來',
    subtitle: '與我們一起開創新的可能',
    content: '透過先進的技術解決方案，我們為企業客戶打造專屬的數位體驗平台',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&auto=format&fit=crop',
    bgColor: 'from-purple-100 to-pink-100'
  },
  {
    id: 3,
    title: '卓越品質',
    subtitle: '每個細節都精心打造',
    content: '我們相信品質是成功的基石，致力於為客戶提供最優質的服務體驗',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&auto=format&fit=crop',
    bgColor: 'from-rose-100 to-purple-100'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-pink-200 rounded-full opacity-50"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-60"
        />
      </div>

      {/* Main Carousel Content */}
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content Side */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl text-gray-600 font-medium">
                    {slides[currentSlide].subtitle}
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg text-gray-700 leading-relaxed max-w-lg"
                >
                  {slides[currentSlide].content}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    立即開始
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:scale-105 transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
                    觀看介紹
                  </Button>
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.9/5 (1,234 reviews)</span>
                </motion.div>
              </div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} rounded-3xl transform rotate-6 scale-105`} />
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center z-20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          {/* Slide Indicators */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-pink-500 scale-125' 
                    : 'bg-gray-300 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-2">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="w-12 h-12 p-0 rounded-full border-2 border-pink-300 hover:bg-pink-50"
            >
              <ChevronLeft className="w-5 h-5 text-pink-600" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              className="w-12 h-12 p-0 rounded-full border-2 border-pink-300 hover:bg-pink-50"
            >
              <ChevronRight className="w-5 h-5 text-pink-600" />
            </Button>
          </div>
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-20 right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isAutoPlaying ? (
            <div className="w-6 h-6 bg-pink-500 rounded-sm" />
          ) : (
            <Play className="w-6 h-6 text-pink-500" />
          )}
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;