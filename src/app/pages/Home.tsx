import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import CountUp from 'react-countup'
import {
  ArrowRight, Droplets, Shield, Award, Zap, Leaf, Star,
  ChevronDown, CheckCircle2, Phone, MessageCircle
} from 'lucide-react'
import { WaterCanvas } from '../components/WaterCanvas'
import waterSplashIi from '../../images/water_splash_ii.png'
import bigPack from '../../images/big_pack.png'
import dispenser from '../../images/dispenser.png'
import sachete from '../../images/sachete.png'
import hydration from '../../images/hydration.png'
import 'swiper/css'
import 'swiper/css/pagination'

/* ─── shared animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

/* ─── SVG bottle ─── */
function BottleSVG({ size = '500ml', accent = '#4DD0E1' }: { size?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 100 280" className="w-full h-full drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id={`bg-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1565C0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#003C8F" stopOpacity="1" />
        </linearGradient>
        <linearGradient id={`shine-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="50%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`water-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1565C0" stopOpacity="0.3" />
        </linearGradient>
        <filter id={`glow-${size}`}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* shadow */}
      <ellipse cx="50" cy="276" rx="28" ry="4" fill={accent} opacity="0.15" />
      {/* cap */}
      <rect x="36" y="6" width="28" height="20" rx="4" fill={accent} />
      <rect x="33" y="22" width="34" height="7" rx="2" fill={accent} opacity="0.7" />
      {/* neck */}
      <path d="M36 29 Q34 50 22 62 L78 62 Q66 50 64 29 Z" fill={`url(#bg-${size})`} />
      {/* body */}
      <rect x="14" y="62" width="72" height="205" rx="10" fill={`url(#bg-${size})`} />
      {/* water level */}
      <rect x="15" y="140" width="70" height="127" rx="0" fill={`url(#water-${size})`} clipPath="inset(0 0 0 0 round 0 0 10px 10px)" />
      {/* shine */}
      <rect x="14" y="62" width="22" height="205" rx="10" fill={`url(#shine-${size})`} />
      {/* label bg */}
      <rect x="19" y="85" width="62" height="110" rx="5" fill="rgba(255,255,255,0.07)" />
      <rect x="19" y="85" width="62" height="1" fill="rgba(255,255,255,0.25)" />
      <rect x="19" y="195" width="62" height="1" fill="rgba(255,255,255,0.25)" />
      {/* label content */}
      <rect x="24" y="96" width="52" height="3" rx="1.5" fill={accent} opacity="0.8" />
      <text x="50" y="120" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Manrope,sans-serif" letterSpacing="2">SUPER TOPP</text>
      <text x="50" y="134" textAnchor="middle" fill={accent} fontSize="6" fontWeight="600" fontFamily="Inter,sans-serif" letterSpacing="1">PURE WATER</text>
      <rect x="28" y="144" width="44" height="1" rx="0.5" fill="rgba(255,255,255,0.15)" />
      <text x="50" y="162" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontWeight="500" fontFamily="Inter,sans-serif">{size}</text>
      {/* accent stripe */}
      <rect x="19" y="172" width="62" height="4" rx="2" fill={accent} opacity="0.5" />
      {/* bottom label line */}
      <rect x="24" y="183" width="52" height="2" rx="1" fill="rgba(255,255,255,0.12)" />
    </svg>
  )
}

/* ─── Purification step card ─── */
function PurStep({ n, title, desc, icon: Icon }: { n: number; title: string; desc: string; icon: React.ElementType }) {
  return (
    <motion.div
      {...fadeUp(n * 0.08)}
      className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[#4DD0E1]/40 hover:bg-[#4DD0E1]/5 transition-all duration-500"
    >
      <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#4DD0E1] to-[#1565C0] flex items-center justify-center text-[#0B1F35] text-xs font-black">
        {n}
      </div>
      <Icon className="w-7 h-7 text-[#4DD0E1] mb-4" />
      <h3 className="text-white font-bold text-base mb-2">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

const purSteps = [
  { title: 'Source Selection', desc: 'Deep underground aquifers rigorously tested for mineral quality.', icon: Leaf },
  { title: 'Sediment Filtration', desc: 'Multi-layer filtration removes particles down to 5 microns.', icon: Shield },
  { title: 'Reverse Osmosis', desc: 'High-pressure membranes eliminate 99.9% of contaminants.', icon: Droplets },
  { title: 'UV Sterilization', desc: 'Ultraviolet light destroys all microbial organisms instantly.', icon: Zap },
  { title: 'Mineral Balancing', desc: 'Essential minerals reintroduced at precisely optimal ratios.', icon: CheckCircle2 },
  { title: 'Ozonation', desc: 'Food-grade ozone provides the final disinfection barrier.', icon: Shield },
  { title: 'Quality Certification', desc: 'Every batch lab-tested before leaving our facility.', icon: Award },
]

const benefits = [
  { icon: Shield, title: '100% Pure', desc: 'Zero contaminants — verified by independent lab analysis.' },
  { icon: Droplets, title: 'pH Balanced', desc: 'Optimal 7.2–7.8 pH for maximum absorption and health.' },
  { icon: CheckCircle2, title: 'Essential Minerals', desc: 'Calcium, magnesium, and potassium restored naturally.' },
  { icon: Leaf, title: 'BPA-Free Packaging', desc: 'Food-grade materials safe for you and the planet.' },
  { icon: Zap, title: 'Cold Chain Assured', desc: 'Temperature-controlled logistics from plant to door.' },
  { icon: Award, title: 'ISO 22000 Certified', desc: 'Meeting the highest international food safety standards.' },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Certified Nutritionist',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    text: "I've recommended SUPER TOPP to every client. The mineral balance is exceptional — you can literally taste the quality difference. My clients notice clearer skin and more energy within weeks.",
    stars: 5,
  },
  {
    name: 'James Odhiambo',
    role: 'CEO, NexGen Technologies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    text: "We switched our entire office of 200 people to SUPER TOPP dispenser units. The service is impeccable, delivery always on time, and everyone loves the taste. Worth every penny.",
    stars: 5,
  },
  {
    name: 'Dr. Amara Diallo',
    role: 'Sports Medicine Physician',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format',
    text: "As an athlete and doctor, hydration quality matters enormously. SUPER TOPP's pH balance and mineral profile are scientifically optimal for performance and recovery. My team drinks nothing else.",
    stars: 5,
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Wellness Studio Owner',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format',
    text: "Premium water for a premium experience. My yoga and wellness studio switched to SUPER TOPP six months ago — the feedback from members has been overwhelmingly positive. It's part of our brand identity now.",
    stars: 5,
  },
]

const products = [
  { size: '50cl', label: 'Super Topp Bottle Pack', accent: '#4DD0E1', image: bigPack },
  { size: '19L', label: 'Super Topp Dispenser Refill', accent: '#26C6DA', image: dispenser },
  { size: '50cl', label: 'Super Topp Sachet Bag', accent: '#00BCD4', image: sachete },
]

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Helmet>
        <title>SUPER TOPP — Premium Purified Water</title>
        <meta name="description" content="Experience purity perfected. SUPER TOPP delivers scientifically filtered, mineral-balanced water for a healthier, more vibrant life." />
      </Helmet>

      <main className="overflow-hidden">
        {/* ═══ HERO ═══ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            background: 'linear-gradient(-45deg, #003C8F, #0B1F35, #060f1c, #1a3a6b)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 12s ease infinite',
          }}
        >
          <WaterCanvas />
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, #4DD0E1 0%, transparent 70%)' }}
            />
            <div
              className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, #1565C0 0%, transparent 70%)' }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center relative z-10">
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4DD0E1]/30 bg-[#4DD0E1]/10 mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#4DD0E1] animate-pulse" />
                <span className="text-[#4DD0E1] text-xs font-semibold tracking-[0.2em] uppercase">
                  Premium Purified Water
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.0] mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                <span className="text-white">Pure</span>
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #4DD0E1, #26C6DA, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Water.
                </span>
                <br />
                <span className="text-white">Pure</span>
                <br />
                <span className="text-white/50">Life.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-white/55 text-lg leading-relaxed mb-8 max-w-md"
              >
                Nature's finest, perfected through seven stages of scientific purification. Experience the difference true purity makes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#0B1F35] text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4DD0E1]/30"
                  style={{ background: 'linear-gradient(135deg, #4DD0E1, #26C6DA)' }}
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white text-sm font-semibold hover:border-[#4DD0E1]/60 hover:bg-white/5 transition-all duration-300"
                >
                  Our Story
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="flex gap-8 mt-12"
              >
                {[
                  { val: '100%', label: 'Pure' },
                  { val: '7+', label: 'Filter Stages' },
                  { val: '5M+', label: 'Happy Customers' },
                ].map(s => (
                  <div key={s.label}>
                    <div
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {s.val}
                    </div>
                    <div className="text-white/40 text-xs tracking-wide">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: floating bottle */}
            <div className="flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
                style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                {/* glow ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-30 blur-3xl scale-125"
                  style={{ background: 'radial-gradient(circle, #4DD0E1, transparent 60%)' }}
                />
                <div className="relative w-52 h-80 lg:w-64 lg:h-96 flex items-center justify-center">
                  <img
                    src={waterSplashIi}
                    alt="Water Splash"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -top-4 -right-8 bg-[#4DD0E1] text-[#0B1F35] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                >
                  ✓ ISO Certified
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 -left-10 bg-white/10 backdrop-blur border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  pH 7.4 Balanced
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase">Discover</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
              <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#0a1929" />
            </svg>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className="bg-[#0a1929] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { end: 100, suffix: '%', label: 'Contaminant-Free', prefix: '' },
                { end: 7, suffix: '+', label: 'Filtration Stages', prefix: '' },
                { end: 5, suffix: 'M+', label: 'Bottles Delivered', prefix: '' },
                { end: 50, suffix: '+', label: 'Cities Covered', prefix: '' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp(i * 0.1)}
                  className="text-center group"
                >
                  <div
                    className="text-5xl font-black text-[#4DD0E1] mb-1"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    <CountUp
                      start={0}
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <p className="text-white/45 text-sm tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BRAND STORY ═══ */}
        <section className="bg-[#EAF9FF] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative bg-[#1565C0]">
                <img
                  src={hydration}
                  alt="Hydration by SUPER TOPP"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C8F]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/25">
                    <p className="text-white font-semibold text-sm">"Water is the driving force of all nature."</p>
                    <p className="text-white/60 text-xs mt-1">— Leonardo da Vinci</p>
                  </div>
                </div>
              </div>
              {/* Decorative floating card */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-[#0B1F35] text-white p-5 rounded-2xl shadow-2xl border border-[#4DD0E1]/20"
              >
                <Award className="w-6 h-6 text-[#4DD0E1] mb-2" />
                <div className="text-2xl font-black" style={{ fontFamily: 'Manrope, sans-serif' }}>2015</div>
                <div className="text-white/50 text-xs">Founded</div>
              </motion.div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <span className="text-[#1565C0] text-sm font-bold tracking-[0.25em] uppercase">Our Story</span>
              <h2
                className="text-5xl lg:text-6xl font-black text-[#0B1F35] mt-3 mb-6 leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Born From a Belief in Pure Living
              </h2>
              <p className="text-[#0B1F35]/65 leading-relaxed mb-5">
                SUPER TOPP was founded on a simple, profound conviction: that every person deserves access to water in its most perfect form. Not just clean water — <em>pure</em> water.
              </p>
              <p className="text-[#0B1F35]/65 leading-relaxed mb-8">
                We built our purification process from the ground up, drawing on hydrological science, food engineering, and an obsessive commitment to quality. Today, our seven-stage process sets the benchmark for premium purified water across the continent.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'ISO 22000 Certified',
                  'NSF/ANSI 61 Compliant',
                  'FDA Approved Facility',
                  'Zero Detected Pathogens',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1565C0] flex-shrink-0" />
                    <span className="text-[#0B1F35]/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#1565C0] font-bold hover:gap-4 transition-all duration-300"
              >
                Read our full story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ═══ PURIFICATION JOURNEY ═══ */}
        <section className="bg-[#0B1F35] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Science of Purity</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                The 7-Stage Purification Journey
              </h2>
              <p className="text-white/45 mt-4 max-w-xl mx-auto">
                Every drop of SUPER TOPP passes through seven meticulous stages — each one a scientific guarantee of purity.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {purSteps.map((step, i) => (
                <PurStep key={step.title} n={i + 1} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PRODUCT SHOWCASE ═══ */}
        <section className="bg-[#0a1929] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Our Range</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Choose Your Purity
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {products.map((p, i) => (
                <motion.div
                  key={p.label}
                  {...fadeUp(i * 0.15)}
                  className="relative group"
                >
                  <div
                    className="rounded-3xl p-8 border border-white/8 bg-gradient-to-b from-white/5 to-transparent hover:border-[#4DD0E1]/30 transition-all duration-500 hover:bg-white/8 text-center"
                    style={{ animation: `float ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
                  >
                    <div className="h-64 flex items-center justify-center mb-6">
                      <div className="h-full w-full mx-auto flex items-center justify-center">
                        <img
                          src={p.image}
                          alt={p.label}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="text-[#4DD0E1]/70 text-xs tracking-widest uppercase mb-1">{p.label}</div>
                    <div
                      className="text-white text-2xl font-black mb-5"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {p.size}
                    </div>
                    <a
                      href={`https://wa.me/12345678900?text=I'd%20like%20to%20order%20SUPER%20TOPP%20${p.size}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#4DD0E1]/40 text-[#4DD0E1] text-sm font-semibold hover:bg-[#4DD0E1] hover:text-[#0B1F35] transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" /> Order
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp(0.3)} className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[#4DD0E1] font-semibold hover:gap-4 transition-all duration-300"
              >
                View full product range <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ═══ BENEFITS ═══ */}
        <section className="bg-[#EAF9FF] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#1565C0] text-sm font-bold tracking-[0.25em] uppercase">Why SUPER TOPP</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#0B1F35] mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Pure Benefits, Zero Compromise
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-[#1565C0]/8 hover:border-[#1565C0]/20 transition-all duration-400 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF9FF] border border-[#1565C0]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <b.icon className="w-6 h-6 text-[#1565C0]" />
                  </div>
                  <h3
                    className="text-[#0B1F35] font-bold text-lg mb-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-[#0B1F35]/55 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="bg-[#0B1F35] py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Testimonials</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Trusted by Thousands
              </h2>
            </motion.div>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
              className="pb-14"
            >
              {testimonials.map(t => (
                <SwiperSlide key={t.name}>
                  <div className="rounded-3xl p-8 bg-white/5 border border-white/10 h-full">
                    <div className="flex gap-1 mb-5">
                      {Array(t.stars).fill(0).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-[#4DD0E1] fill-[#4DD0E1]" />
                      ))}
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover bg-[#1565C0]"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm">{t.name}</div>
                        <div className="text-[#4DD0E1]/70 text-xs">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section
          className="relative py-28 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #003C8F 0%, #1565C0 50%, #0B1F35 100%)',
          }}
        >
          <WaterCanvas className="opacity-40" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, #4DD0E1 0%, transparent 50%), radial-gradient(circle at 70% 50%, #003C8F 0%, transparent 50%)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div {...fadeUp()}>
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Start Today</span>
              <h2
                className="text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Make the Switch to Pure
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                Join over 5 million people who have chosen SUPER TOPP for a healthier, more vibrant life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/products"
                  className="px-8 py-4 rounded-full bg-white text-[#003C8F] font-bold text-sm hover:bg-[#4DD0E1] transition-all duration-300 hover:scale-105"
                >
                  Shop Now
                </Link>
                <a
                  href="https://wa.me/12345678900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-[#4DD0E1] hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
