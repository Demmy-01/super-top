import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, ShoppingBag, CheckCircle2, Droplets, Shield, Award, Phone } from 'lucide-react'
import sachete from '../../images/sachete.png'
import smallBottle from '../../images/small_bottle.png'
import bigPack from '../../images/big_pack.png'
import bigBottle from '../../images/big_bottle.png'
import smallPack from '../../images/small_pack.png'
import dispenser from '../../images/dispenser.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

interface Product {
  id: string
  size: string
  label: string
  category: string
  features: string[]
  bestFor: string
  tag?: string
  image: string
}

const products: Product[] = [
  {
    id: 'sachet',
    size: '50cl',
    label: 'Super Topp Sachet Bag',
    category: 'Packs',
    features: ['Eco-friendly sachet', '100% purified water', 'pH balanced', 'Affordable hydration'],
    bestFor: 'Daily budget hydration, events',
    tag: '',
    image: sachete,
  },
  {
    id: 'small_bottle',
    size: '500ml',
    label: 'Mini Pure',
    category: 'Bottles',
    features: ['Travel-friendly', 'BPA-Free PET', 'pH 7.4 balanced', '100% purified'],
    bestFor: 'Kids, travel, events',
    tag: '',
    image: smallBottle,
  },
  {
    id: 'big_pack',
    size: '10L',
    label: 'Value Pack',
    category: 'Packs',
    features: ['Carry handle', 'Easy-pour spout', 'BPA-Free HDPE', 'Great value'],
    bestFor: 'Offices, schools, events',
    tag: 'Best Value',
    image: bigPack,
  },
  {
    id: 'big_bottle',
    size: '1.5L',
    label: 'Pure Plus',
    category: 'Bottles',
    features: ['Family size', 'Ergonomic grip', 'BPA-Free PET', 'pH balanced'],
    bestFor: 'Family meals, outdoor',
    tag: '',
    image: bigBottle,
  },
  {
    id: 'small_pack',
    size: '5L',
    label: 'Family Pack',
    category: 'Packs',
    features: ['Sturdy handle', 'Reclosable spout', 'BPA-Free HDPE', 'Multi-day supply'],
    bestFor: 'Families, meal prep',
    tag: '',
    image: smallPack,
  },
  {
    id: 'dispenser',
    size: '19L',
    label: 'Dispenser',
    category: 'Dispenser',
    features: ['Dispenser compatible', 'Sealed hygiene cap', 'Weekly delivery available', 'Cold chain assured'],
    bestFor: 'Offices, homes, restaurants',
    tag: 'Premium',
    image: dispenser,
  },
]

const categories = ['All', 'Bottles', 'Packs', 'Dispenser']



export function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Products — SUPER TOPP Premium Water</title>
        <meta name="description" content="Shop SUPER TOPP purified water. Available in 330ml, 500ml, 1L, 1.5L, 5L, 10L and 19L dispenser sizes. Order online or via WhatsApp." />
      </Helmet>

      <main className="overflow-hidden">
        {/* ═══ HERO ═══ */}
        <section
          className="relative min-h-[55vh] flex items-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #003C8F 0%, #0B1F35 100%)' }}
        >
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#4DD0E1] blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#1565C0] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Our Range</span>
              <h1
                className="text-5xl lg:text-7xl font-black text-white mt-3 mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Choose Your Purity
              </h1>
              <p className="text-white/55 text-lg max-w-xl mx-auto">
                From single-serve to office-ready. Every size, same uncompromising purity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ FILTER + GRID ═══ */}
        <section className="bg-[#0a1929] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Category filter */}
            <motion.div
              {...fadeUp()}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#4DD0E1] text-[#0B1F35]'
                      : 'border border-white/20 text-white/60 hover:border-[#4DD0E1]/50 hover:text-[#4DD0E1]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Product grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="relative group"
                  >
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/6 to-transparent hover:border-[#4DD0E1]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#4DD0E1]/10">
                      {/* Tag */}
                      {product.tag && (
                        <div className="absolute top-4 right-4 z-10 bg-[#4DD0E1] text-[#0B1F35] text-xs font-black px-3 py-1 rounded-full">
                          {product.tag}
                        </div>
                      )}

                      {/* Bottle visual */}
                      <div
                        className="relative flex items-end justify-center pt-8 pb-4 px-8"
                        style={{
                          animation: `float ${5 + i * 0.4}s ease-in-out infinite`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      >
                        <div
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full blur-xl opacity-20"
                          style={{ background: '#4DD0E1' }}
                        />
                        <div className="h-48 w-full flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.label}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="px-6 pb-6">
                        <div className="text-[#4DD0E1]/60 text-xs tracking-widest uppercase mb-1">{product.label}</div>
                        <h3
                          className="text-white font-black text-xl mb-4"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {product.size}
                        </h3>

                        {/* Features */}
                        <ul className="space-y-1.5 mb-5">
                          {product.features.map(f => (
                            <li key={f} className="flex items-center gap-2 text-xs text-white/55">
                              <CheckCircle2 className="w-3 h-3 text-[#4DD0E1] flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        <div className="text-white/30 text-xs mb-4">Best for: {product.bestFor}</div>

                        <div className="flex gap-2 mt-4">
                          <a
                            href={`https://wa.me/12345678900?text=Hi%2C%20I'd%20like%20to%20order%20SUPER%20TOPP%20${product.size}%20-%20${product.label}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            WhatsApp
                          </a>
                          <a
                            href="tel:+12345678900"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#4DD0E1]/10 border border-[#4DD0E1]/30 text-[#4DD0E1] text-xs font-bold hover:bg-[#4DD0E1] hover:text-[#0B1F35] transition-all duration-300"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Order
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ═══ BULK ORDER ═══ */}
        <section className="bg-[#EAF9FF] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-12">
              <span className="text-[#1565C0] text-sm font-bold tracking-[0.25em] uppercase">Wholesale & Corporate</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#0B1F35] mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Bulk Orders & Distributor Program
              </h2>
              <p className="text-[#0B1F35]/55 mt-4 max-w-xl mx-auto">
                Special pricing for hotels, offices, schools, and retail distributors. Join our growing network.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: ShoppingBag, title: 'Corporate Orders', desc: 'Scheduled delivery for offices and institutions. Dedicated account manager included.', cta: 'Get a Quote' },
                { icon: Award, title: 'Distributor Program', desc: 'Become an authorized SUPER TOPP distributor. Exclusive territories and premium margins.', cta: 'Apply Now' },
                { icon: Droplets, title: 'Dispenser Rental', desc: 'Hot & cold dispensers installed and maintained at no extra cost with 19L subscription.', cta: 'Learn More' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.12)}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[#1565C0]/8 hover:shadow-md hover:border-[#1565C0]/20 transition-all duration-400 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF9FF] border border-[#1565C0]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[#1565C0]" />
                  </div>
                  <h3 className="text-[#0B1F35] font-bold text-lg mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                  <p className="text-[#0B1F35]/55 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <a
                    href="https://wa.me/12345678900?text=Hi%2C%20I'm%20interested%20in%20your%20bulk%20order%20program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1565C0] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  >
                    {item.cta} →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ QUALITY PROMISE ═══ */}
        <section className="bg-[#0B1F35] py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: '100% Purity Guaranteed', desc: 'If our water fails any quality test, we replace it immediately — no questions asked.' },
              { icon: Phone, title: 'Same-Day Delivery', desc: 'Order before 2PM for same-day delivery across all covered cities and zones.' },
              { icon: Award, title: '30-Day Freshness Promise', desc: 'Our packaging guarantees full freshness from production to your last sip.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.12)}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#4DD0E1]/15 border border-[#4DD0E1]/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#4DD0E1]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
