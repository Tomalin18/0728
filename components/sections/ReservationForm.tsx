'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  User,
  MessageSquare,
  Check,
  Star,
  Utensils
} from 'lucide-react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

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
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {[
          { icon: Utensils, x: '15%', y: '20%', delay: 0 },
          { icon: Star, x: '85%', y: '30%', delay: 1 },
          { icon: Calendar, x: '10%', y: '70%', delay: 2 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1]
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
            <Calendar className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-semibold">預約服務</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            立即
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              訂位
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            為您預留最美好的用餐時光，讓我們為您打造難忘的味覺饗宴
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="您的姓名"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="電子郵件"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative"
                    >
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="聯絡電話"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative"
                    >
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="relative"
                    >
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 text-white rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300 appearance-none"
                        required
                      >
                        <option value="" className="bg-gray-800">選擇時間</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time} className="bg-gray-800">
                            {time}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  {/* Guests */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative"
                  >
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300 appearance-none"
                      required
                    >
                      {guestOptions.map(num => (
                        <option key={num} value={num} className="bg-gray-800">
                          {num} 位
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Special Requests */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative"
                  >
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <Textarea
                      name="specialRequests"
                      placeholder="特殊需求（可選填）"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl py-4 pl-12 pr-4 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      確認預約
                    </Button>
                  </motion.div>
                </form>
              ) : (
                // Success Message
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    預約成功！
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    我們已收到您的預約申請，將於24小時內與您聯繫確認詳細資訊。
                    感謝您選擇我們的餐廳！
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">聯絡資訊</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">電話預約</p>
                    <p>02-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">電子郵件</p>
                    <p>reservation@restaurant.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">營業時間</p>
                    <p>週一至週日 11:30-22:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">預約須知</h3>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p>建議提前2-3天預約，確保有位置安排</p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p>如需更改或取消預約，請提前24小時通知</p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p>大型聚會（10人以上）請來電協商</p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p>生日慶祝等特殊需求歡迎事先告知</p>
                </div>
              </div>
            </div>

            {/* Map or Image */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">交通位置</h3>
              
              <div className="aspect-video bg-gray-700 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&auto=format&fit=crop"
                  alt="餐廳位置"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-300 mt-4">
                台北市信義區信義路五段 7 號 101 大樓附近
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;