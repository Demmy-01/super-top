import { Link } from 'react-router-dom'
import { Droplets, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Mission', to: '/about' },
    { label: 'Certifications', to: '/about' },
    { label: 'Media', to: '/media' },
    { label: 'Contact', to: '/contact' },
  ],
  Products: [
    { label: '330ml Bottle', to: '/products' },
    { label: '500ml Bottle', to: '/products' },
    { label: '1.5L Bottle', to: '/products' },
    { label: '5L Pack', to: '/products' },
    { label: '19L Dispenser', to: '/products' },
  ],
  Support: [
    { label: 'Order Tracking', to: '/contact' },
    { label: 'Delivery Areas', to: '/contact' },
    { label: 'FAQs', to: '/contact' },
    { label: 'Distributor Program', to: '/contact' },
    { label: 'Bulk Orders', to: '/contact' },
  ],
}

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

const certBadges = ['ISO 22000', 'NSF/ANSI 61', 'FDA Approved', 'BPA-Free', 'Halal Certified']

export function Footer() {
  return (
    <footer className="bg-[#060f1c] border-t border-white/8 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative">
                <Droplets className="w-7 h-7 text-[#4DD0E1]" />
                <div className="absolute inset-0 bg-[#4DD0E1]/20 rounded-full blur-md" />
              </div>
              <div>
                <span
                  className="text-white font-extrabold text-xl tracking-[0.2em]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  SUPER<span className="text-[#4DD0E1]"> TOPP</span>
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Nature's finest, perfected. Pure water for a healthier life — scientifically filtered, mineral-balanced, and delivered to your door.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: '+1 (234) 567-8900' },
                { icon: Mail, text: 'hello@supertopp.com' },
                { icon: MapPin, text: '123 Purity Lane, Nairobi, Kenya' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#4DD0E1] flex-shrink-0" />
                  <span className="text-white/50 text-sm">{text}</span>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#4DD0E1] hover:border-[#4DD0E1]/50 hover:bg-[#4DD0E1]/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4
                className="text-white font-bold text-sm tracking-widest uppercase mb-5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white/45 hover:text-[#4DD0E1] text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-12 pt-8 border-t border-white/8">
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-5">
            Certified & Trusted
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certBadges.map(cert => (
              <span
                key={cert}
                className="px-4 py-1.5 rounded-full border border-[#4DD0E1]/25 text-[#4DD0E1]/70 text-xs tracking-wide"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} SUPER TOPP. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/60 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
