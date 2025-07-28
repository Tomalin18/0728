Create a complete, maintainable, and optimized Next.js App Router project. The design should be unique and avoid generic AI-generated looks, with custom-designed components that reflect the brand's personality.

## Project Structure & Maintainability:
- **Next.js App Router**: Use the latest App Router conventions.
- **Modular Components**: Each major section (Hero, Features, Testimonials, etc.) should be its own reusable React component file (e.g., `components/sections/HeroSection.tsx`).
- **Layout**: Implement a global layout in `app/layout.tsx`.
- **Page**: Assemble the sections in `app/page.tsx`.
- **UI Components**: Create custom UI components (e.g., custom cards, buttons) in `components/ui/` if they deviate significantly from shadcn/ui defaults.
- **Utilities**: Use `lib/utils.ts` for helper functions.
- **Clean Code**: Ensure code is well-organized, readable, and follows best practices for a scalable project.
- **Assets**: Place images and other static assets in the `public/` directory.

## Brand DNA & Custom Component Style:
**Overall Style**: 奢華高端
**Color Scheme**: 粉紅色系
**Additional Requirements**: 我喜歡很多的動畫效果

**Custom Component Design Rules (Crucial for Uniqueness)**:
- **NO standard shadcn/ui component look**: Design custom variants for cards, buttons, inputs, etc.
- **Containers**: Use unique shapes (e.g., floating panels, tilted boxes, layered elements), creative borders, custom shadows, and non-rectangular forms.
- **Buttons**: Implement distinct designs (e.g., pill shapes, custom hover states, gradient borders, morphing effects).
- **Typography**: Create a custom hierarchy with varied font weights, sizes, and line heights that reflect the brand.
- **Spacing**: Break traditional grid patterns; use innovative whitespace and visual rhythm.
- **Imagery**: Apply unique image treatments (e.g., custom masks, creative overlays, asymmetric crops).
- **Asymmetry**: Embrace offset elements, varied heights, and creative alignments to avoid a generic feel.
- **Backgrounds**: Utilize subtle patterns, gradient meshes, or geometric shapes instead of flat colors.

## Page: 現代企業官網
### Section: 垂直側邊欄 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: #FFFFFF with creative treatment

### Section: 輪播滑塊 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "精選故事"
Subtitle: "滑動瀏覽我們最新的更新。"
Background: #E5E7EB with creative treatment

### Section: 圓形式 (stats)
Stats: creative number displays, custom backgrounds, animated counters
Title: "數據一覽"
Stats: 3 metrics, creative number displays
Background: #FFFFFF with creative treatment

### Section: 帶圖示的網格 (features)
Feature cards: tilted containers, creative icons, varied heights, custom hover effects
Title: "強大的功能"
Subtitle: "專為速度、安全性和可擴展性而設計。"

### Section: 單一突出 (testimonials)
Testimonial design: quote bubbles, creative author layouts, asymmetric cards
Title: "來自我們尊貴客戶的一句話"
Testimonials (1): Creative quote layouts
Background: #111827 with creative treatment

### Section: 深色背景，兩個按鈕 (cta)
CTA design: morphing button, creative background, unique shape containers
Title: "掌控您的未來"
Subtitle: "選擇適合您的道路。"
Background: #1F2937 with creative treatment

### Section: 電子報訂閱 (footer)
Footer: creative column layouts, custom dividers, unique link styling
Background: #1e3a8a with creative treatment

## Page: 餐廳官網
### Section: 垂直側邊欄 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: #FFFFFF with creative treatment

### Section: 網格佈局 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "多個亮點"
Subtitle: "同時展示各個方面。"
Background: #FFFFFF with creative treatment

### Section: 網格功能 (features)
Feature cards: tilted containers, creative icons, varied heights, custom hover effects
Title: "我們的功能"
Subtitle: "了解更多關於我們令人驚豔的功能"
Background: #f0f0f0 with creative treatment

### Section: 環境展示 (gallery)
Gallery: creative grid breaks, custom image masks, floating hover effects
Title: "餐廳環境"
Gallery: 3 images, creative grid layout
Background: #F9FAFB with creative treatment

### Section: 訂位表單 (contactForm)
Form design: floating labels, creative input styles, custom submit button
Title: "立即訂位"
Background: #1F2937 with creative treatment

## Final Creative & Technical Requirements:
**Technical**: Use shadcn/ui components as a base, but heavily customize their appearance with Tailwind CSS to achieve the unique design. Ensure full responsiveness (mobile-first).
**Creative Mandate**: Every single component and section must feel hand-crafted and uniquely tailored to the brand, not like a standard template. Focus on innovative visual patterns and interactions.
**Brand Integration**: Components should embody the brand's personality, story, and style in their design, shapes, and animations.
**Avoid**: Generic, off-the-shelf shadcn/ui looks, predictable layouts, and designs that scream 'AI-generated'.
**Embrace**: Bold creative interpretation, strong brand identity expression, memorable visual moments, and storytelling through design.
