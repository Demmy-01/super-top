import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ceo from '../../images/ceo.jpg'
import { Award, Leaf, Users, Globe, Heart, Droplets, ArrowRight, CheckCircle2 } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

const timeline = [
  { year: '2015', title: 'Founded with a Vision', desc: 'SUPER TOPP was established by a team of water engineers and health advocates committed to making pure water accessible to all.' },
  { year: '2017', title: 'First Production Plant', desc: 'Our state-of-the-art purification facility opened in Nairobi, capable of producing 50,000 bottles per day.' },
  { year: '2019', title: 'ISO 22000 Certification', desc: 'Achieved international food safety management certification — the highest standard in the industry.' },
  { year: '2021', title: '1 Million Bottles Milestone', desc: 'Celebrated delivering one million bottles and expanded our distribution network to 20 cities.' },
  { year: '2023', title: 'Continental Expansion', desc: 'Extended operations to 5 countries and launched our 19L home/office dispenser program.' },
  { year: '2024', title: 'Community Water Initiative', desc: 'Committed to providing clean water access to 100,000 underserved individuals through our "Water for All" program.' },
]

const values = [
  { icon: Droplets, title: 'Purity', desc: 'We hold purity as sacred. Every process decision is made with a single question: does this make the water better?' },
  { icon: Leaf, title: 'Sustainability', desc: 'Earth-conscious in every decision — from biodegradable packaging to solar-powered facilities.' },
  { icon: Award, title: 'Innovation', desc: 'Relentless scientific improvement. We invest 15% of revenue in R&D to stay at the frontier of water science.' },
  { icon: Heart, title: 'Community', desc: 'Building healthier communities one bottle at a time. We give back through the Water For All initiative.' },
  { icon: Users, title: 'Integrity', desc: 'Transparent about every process, every test result, and every ingredient. You deserve to know what you drink.' },
  { icon: Globe, title: 'Responsibility', desc: 'We take our role seriously. Safe water is a human right — we act like it.' },
]

const certifications = [
  { name: 'ISO 22000', desc: 'International Food Safety Management', year: '2019' },
  { name: 'NSF/ANSI 61', desc: 'Drinking Water System Components', year: '2020' },
  { name: 'FDA Registered', desc: 'Food Facility Registration', year: '2018' },
  { name: 'BPA-Free', desc: 'All packaging materials certified', year: '2015' },
  { name: 'Halal Certified', desc: 'HFCE International Certification', year: '2021' },
  { name: 'KEBS Certified', desc: 'Kenya Bureau of Standards', year: '2016' },
]

export function About() {
  return (
    <>
      <Helmet>
        <title>About — SUPER TOPP Premium Water</title>
        <meta name="description" content="Learn about SUPER TOPP's mission, story, and commitment to pure water. Founded in 2015, we set the benchmark for premium purified water." />
      </Helmet>

      <main className="overflow-hidden">
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0B1F35]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&auto=format)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F35]/80 via-[#003C8F]/60 to-[#0B1F35]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Our Story</span>
              <h1
                className="text-5xl lg:text-7xl font-black text-white mt-3 mb-6 max-w-2xl leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Water, Perfected by Science and Purpose
              </h1>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                A decade of dedication to purity, sustainability, and the communities we serve. This is the story of SUPER TOPP.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ FOUNDER MESSAGE ═══ */}
        <section className="bg-[#EAF9FF] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-[#1565C0]">
                <img
                  src={ceo}
                  alt="Founder of SUPER TOPP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0B1F35] text-white p-6 rounded-2xl shadow-2xl max-w-[220px] border border-[#4DD0E1]/20">
                <div className="text-[#4DD0E1] text-xs font-bold tracking-widest uppercase mb-1">Founded</div>
                <div className="text-3xl font-black" style={{ fontFamily: 'Manrope, sans-serif' }}>2015</div>
                <div className="text-white/50 text-xs mt-1">Akure, Nigeria</div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <span className="text-[#1565C0] text-sm font-bold tracking-[0.25em] uppercase">A Message From Our Founder</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#0B1F35] mt-3 mb-6 leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                We Started With a Simple Question
              </h2>
              <blockquote className="border-l-4 border-[#1565C0] pl-6 mb-6">
                <p className="text-[#0B1F35]/70 text-lg italic leading-relaxed">
                  "Why should premium water be a luxury? Pure, safe, mineral-balanced water should be available to every family, every office, every home. We built SUPER TOPP to answer that question — with science, not compromise."
                </p>
                <footer className="mt-4">
                  <div className="text-[#0B1F35] font-bold">David Kiptoo</div>
                  <div className="text-[#1565C0] text-sm">Founder & CEO, SUPER TOPP</div>
                </footer>
              </blockquote>
              <p className="text-[#0B1F35]/60 leading-relaxed mb-6">
                With a background in hydrology and food engineering, David assembled a team of world-class scientists and logistics experts. Together, they designed a seven-stage purification system that now serves millions of people across East Africa and beyond.
              </p>
              <div className="flex gap-6">
                {[{ val: '10+', label: 'Years' }, { val: '50+', label: 'Team Members' }, { val: '5', label: 'Countries' }].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-black text-[#1565C0]" style={{ fontFamily: 'Manrope, sans-serif' }}>{s.val}</div>
                    <div className="text-[#0B1F35]/50 text-xs tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ MISSION & VISION ═══ */}
        <section className="bg-[#0B1F35] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  label: 'Our Mission',
                  title: 'To Perfect Water, For Everyone',
                  desc: 'We exist to make scientifically pure, mineral-balanced water accessible to every family and organization — without compromise on quality or price.',
                  icon: Droplets,
                  gradient: 'from-[#003C8F] to-[#1565C0]',
                },
                {
                  label: 'Our Vision',
                  title: 'A World Hydrated by Truth',
                  desc: 'We envision a future where pure water is the norm, not the premium exception — and where every community has access to water that nourishes as nature intended.',
                  icon: Globe,
                  gradient: 'from-[#1565C0] to-[#4DD0E1]',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp(i * 0.15)}
                  className={`rounded-3xl p-10 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
                >
                  <div className="absolute -right-8 -bottom-8 opacity-15">
                    <item.icon className="w-48 h-48" />
                  </div>
                  <span className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase">{item.label}</span>
                  <h3
                    className="text-3xl font-black text-white mt-2 mb-4 leading-tight"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TIMELINE ═══ */}
        <section className="bg-[#0a1929] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Our Journey</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                A Decade of Purity
              </h2>
            </motion.div>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4DD0E1]/50 via-[#4DD0E1]/20 to-transparent" />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    {...fadeUp(i * 0.08)}
                    className={`relative flex gap-8 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Year marker */}
                    <div className="absolute left-4 lg:left-1/2 top-2 w-8 h-8 -translate-x-1/2 bg-[#4DD0E1] rounded-full border-4 border-[#0a1929] flex items-center justify-center flex-shrink-0 z-10" />
                    {/* content */}
                    <div className={`lg:w-5/12 ml-12 lg:ml-0 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                      <div
                        className="text-[#4DD0E1] text-sm font-black mb-1 tracking-widest"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="text-white font-bold text-lg mb-2"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="lg:w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ VALUES ═══ */}
        <section className="bg-[#EAF9FF] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#1565C0] text-sm font-bold tracking-[0.25em] uppercase">Our Principles</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-[#0B1F35] mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Values We Live By
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-[#1565C0]/8 hover:border-[#1565C0]/20 transition-all duration-400 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF9FF] border border-[#1565C0]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <v.icon className="w-6 h-6 text-[#1565C0]" />
                  </div>
                  <h3 className="text-[#0B1F35] font-bold text-lg mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{v.title}</h3>
                  <p className="text-[#0B1F35]/55 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CERTIFICATIONS ═══ */}
        <section className="bg-[#0B1F35] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp()} className="text-center mb-16">
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Trust & Standards</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white mt-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Certifications That Prove Purity
              </h2>
              <p className="text-white/45 mt-4 max-w-lg mx-auto">
                Every certification is independently audited. We share our test results publicly because transparency is part of our promise.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  {...fadeUp(i * 0.1)}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#4DD0E1]/30 transition-all duration-400 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DD0E1]/20 to-[#1565C0]/20 border border-[#4DD0E1]/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#4DD0E1]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>{cert.name}</div>
                    <div className="text-white/50 text-xs mt-0.5 mb-1">{cert.desc}</div>
                    <div className="text-[#4DD0E1]/60 text-xs">Since {cert.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ COMMUNITY ═══ */}
        <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#003C8F] to-[#0B1F35]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=900&fit=crop&auto=format)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/90 to-[#003C8F]/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div {...fadeUp()}>
              <span className="text-[#4DD0E1] text-sm font-bold tracking-[0.25em] uppercase">Community Impact</span>
              <h2
                className="text-4xl lg:text-5xl font-black text-white mt-4 mb-6"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Water For All Initiative
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                For every 1,000 bottles sold, we donate clean water access to one family in an underserved community. In 2024, we pledged to reach 100,000 people. Pure water is a human right — and we're making it happen.
              </p>
              <div className="flex flex-wrap gap-6 justify-center mb-10">
                {[
                  { val: '25K', label: 'People Served' },
                  { val: '14', label: 'Communities' },
                  { val: '3', label: 'Clean Wells Built' },
                ].map(s => (
                  <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl px-8 py-5 border border-white/15">
                    <div className="text-3xl font-black text-[#4DD0E1]" style={{ fontFamily: 'Manrope, sans-serif' }}>{s.val}</div>
                    <div className="text-white/50 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4DD0E1] text-[#0B1F35] font-bold hover:bg-white transition-colors duration-300"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
