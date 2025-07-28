'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&auto=format&fit=crop',
    alt: '優雅用餐區',
    title: '主餐廳',
    description: '寬敞明亮的用餐空間，可容納200位賓客',
    category: 'dining'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&auto=format&fit=crop',
    alt: '私人包廂',
    title: 'VIP包廂',
    description: '私密舒適的包廂服務，適合商務聚餐',
    category: 'private'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&auto=format&fit=crop',
    alt: '露天座位區',
    title: '花園露臺',
    description: '享受自然氣息的戶外用餐體驗',
    category: 'outdoor'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&auto=format&fit=crop',
    alt: '酒吧區域',
    title: '精品酒吧',
    description: '專業調酒師打造的雅致酒吧空間',
    category: 'bar'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&auto=format&fit=crop',
    alt: '開放式廚房',
    title: '開放廚房',
    description: '透明化的烹飪過程，展現主廚精湛技藝',
    category: 'kitchen'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&auto=format&fit=crop',
    alt: '接待大廳',
    title: '迎賓大廳',
    description: '溫馨典雅的接待空間，給您賓至如歸的感受',
    category: 'lobby'
  }
];

const RestaurantGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-25 relative overflow-hidden">
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
            <Camera className="w-5 h-5 text-pink-500" />
            <span className="text-pink-600 font-semibold">環境展示</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-6">
            餐廳環境
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            探索我們精心設計的用餐空間，每個角落都散發著優雅與溫馨的氛圍
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ 
                opacity: 0, 
                y: 60,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                y: -10
              }}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="text-center text-white">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto border border-white/30"
                      >
                        <Eye className="w-8 h-8" />
                      </motion.div>
                      <p className="text-lg font-semibold">查看大圖</p>
                    </div>
                  </motion.div>
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {image.description}
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
                  className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full"
                />
              </div>

              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              親臨現場感受更多驚喜
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              照片僅能展現我們環境的一部分美好，歡迎您親自蒞臨，體驗完整的用餐氛圍
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              預約參觀
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  className="w-full h-auto max-h-[60vh] object-cover"
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-gray-200">
                    {selectedImageData.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RestaurantGallery;