import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  opacity: number
  wobble: number
  wobbleSpeed: number
}

export function WaterCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []

    const createParticle = (randomY = false): Particle => ({
      x: Math.random() * (canvas.offsetWidth || 800),
      y: randomY
        ? Math.random() * (canvas.offsetHeight || 600)
        : (canvas.offsetHeight || 600) + Math.random() * 50,
      r: Math.random() * 2.5 + 0.5,
      vy: -(Math.random() * 0.6 + 0.15),
      vx: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.35 + 0.05,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.015 + 0.005,
    })

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      particles.length = 0
      const count = Math.max(30, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 6000))
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(true))
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      for (const p of particles) {
        p.wobble += p.wobbleSpeed
        p.x += p.vx + Math.sin(p.wobble) * 0.15
        p.y += p.vy

        if (p.y < -p.r * 2) {
          Object.assign(p, createParticle(false))
        }

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2)
        grd.addColorStop(0, `rgba(77, 208, 225, ${p.opacity})`)
        grd.addColorStop(0.6, `rgba(77, 208, 225, ${p.opacity * 0.4})`)
        grd.addColorStop(1, `rgba(77, 208, 225, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
