'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Check
} from 'lucide-react';
import Link from 'next/link';

const NewsletterFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    產品: [
      { name: '企業解決方案', href: '/corporate' as any },
      { name: '中小企業版', href: '/corporate' as any },
      { name: '個人版', href: '/' as any },
      { name: '價格方案', href: '/' as any }
    ],
    服務: [
      { name: '專業諮詢', href: '/corporate' as any },
      { name: '技術支援', href: '/' as any },
      { name: '培訓服務', href: '/' as any },
      { name: '客製化開發', href: '/restaurant' as any }
    ],
    公司: [
      { name: '關於我們', href: '/' as any },
      { name: '新聞中心', href: '/' as any },
      { name: '職業機會', href: '/' as any },
      { name: '合作夥伴', href: '/' as any }
    ],
    資源: [
      { name: '使用指南', href: '/' as any },
      { name: '開發者文檔', href: '/' as any },
      { name: '案例研究', href: '/corporate' as any },
      { name: '部落格', href: '/' as any }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '/' as any, color: 'hover:text-blue-400' },
    { icon: Twitter, href: '/' as any, color: 'hover:text-sky-400' },
    { icon: Instagram, href: '/' as any, color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '/' as any, color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
                >
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span className="text-pink-400 font-semibold">電子報訂閱</span>
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  訂閱我們的
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    最新資訊
                  </span>
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  第一時間獲得產品更新、行業洞察和專業技巧，助您在數位轉型的路上領先一步
                </p>
              </motion.div>

              {/* Newsletter Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="輸入您的電子郵件地址"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl py-4 px-6 text-lg focus:bg-white/15 focus:border-pink-400 transition-all duration-300"
                        required
                      />
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubscribed}
                      className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubscribed 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'
                      } text-white shadow-lg hover:shadow-xl transform hover:scale-105`}
                    >
                      {isSubscribed ? (
                        <>
                          <Check className="w-5 h-5" />
                          訂閱成功！
                        </>
                      ) : (
                        <>
                          立即訂閱
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <p className="text-gray-400 text-sm mt-4 text-center">
                    我們尊重您的隱私，隨時可以取消訂閱
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-6 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Link href="/" className="inline-block mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-md" />
                    </div>
                    <span className="text-2xl font-bold text-white">奢華數位</span>
                  </motion.div>
                </Link>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  致力於為企業提供最先進的數位解決方案，讓科技成為您成功路上最強大的助力。
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span>+886 2 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span>contact@luxurydigital.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span>台北市信義區信義路五段 7 號</span>
                  </div>
                </div>
              </motion.div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="lg:col-span-1"
                >
                  <h4 className="text-white font-semibold text-lg mb-6">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-sm"
              >
                © 2024 奢華數位體驗. 版權所有. | 
                <Link href="/" className="hover:text-pink-400 transition-colors duration-300 ml-1">
                  隱私政策
                </Link> | 
                <Link href="/" className="hover:text-pink-400 transition-colors duration-300 ml-1">
                  服務條款
                </Link>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;