import { Metadata } from 'next'
import VerticalNavigation from '@/components/sections/VerticalNavigation'
import RestaurantHero from '@/components/sections/RestaurantHero'
import RestaurantFeatures from '@/components/sections/RestaurantFeatures'
import RestaurantGallery from '@/components/sections/RestaurantGallery'
import ReservationForm from '@/components/sections/ReservationForm'

export const metadata: Metadata = {
  title: '精緻餐廳官網 | 奢華數位體驗',
  description: '優雅的餐廳體驗展示，包含環境畫廊、功能介紹與訂位表單，融入創新的動畫效果和奢華的美學設計',
  openGraph: {
    title: '精緻餐廳官網',
    description: '優雅的餐廳體驗展示，融入創新的動畫效果和奢華的美學設計',
    type: 'website',
  }
}

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      <VerticalNavigation />
      
      <main className="lg:ml-20">
        <RestaurantHero />
        <RestaurantFeatures />
        <RestaurantGallery />
        <ReservationForm />
      </main>
    </div>
  )
}