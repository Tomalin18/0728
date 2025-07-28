import { Metadata } from 'next'
import VerticalNavigation from '@/components/sections/VerticalNavigation'
import HeroCarousel from '@/components/sections/HeroCarousel'
import StatsSection from '@/components/sections/StatsSection'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import NewsletterFooter from '@/components/sections/NewsletterFooter'

export const metadata: Metadata = {
  title: '現代企業官網 | 奢華數位體驗',
  description: '專業的企業形象展示，包含輪播 Hero、統計數據、功能介紹與客戶推薦，融入創新的動畫效果和奢華的美學設計',
  openGraph: {
    title: '現代企業官網',
    description: '專業的企業形象展示，融入創新的動畫效果和奢華的美學設計',
    type: 'website',
  }
}

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      <VerticalNavigation />
      
      <main className="lg:ml-20">
        <HeroCarousel />
        <StatsSection />
        <FeaturesGrid />
        <TestimonialsSection />
        <CTASection />
        <NewsletterFooter />
      </main>
    </div>
  )
}