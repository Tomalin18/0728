'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            奢華數位體驗
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            探索我們精心設計的兩種獨特風格，每一個都融入了創新的動畫效果和奢華的美學設計
          </p>
        </motion.div>

        {/* Website Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Corporate Website Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard('corporate')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Card className="relative p-8 h-80 bg-gradient-to-br from-white to-pink-50 border-2 border-pink-100 overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                animate={hoveredCard === 'corporate' ? { rotate: 5, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9-16v14h5v2m0-2h-5m9-16v14h-5m0 2h5" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">現代企業官網</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  專業的企業形象展示，包含輪播 Hero、統計數據、功能介紹與客戶推薦
                </p>
                
                <Link href="/corporate">
                  <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                    探索企業風格
                  </Button>
                </Link>
              </motion.div>
            </Card>
          </motion.div>

          {/* Restaurant Website Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onHoverStart={() => setHoveredCard('restaurant')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Card className="relative p-8 h-80 bg-gradient-to-br from-white to-rose-50 border-2 border-rose-100 overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                animate={hoveredCard === 'restaurant' ? { rotate: -5, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">精緻餐廳官網</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  優雅的餐廳體驗展示，包含環境畫廊、功能介紹與訂位表單
                </p>
                
                <Link href="/restaurant">
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                    體驗餐廳風格
                  </Button>
                </Link>
              </motion.div>
            </Card>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center space-x-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-pink-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
