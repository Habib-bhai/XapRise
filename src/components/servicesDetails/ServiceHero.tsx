"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star } from "lucide-react"
import { Button } from "../ui/button" 
// import type { Service } from "@/lib/servicesData" // Update this import path if needed

// Define the Service interface locally if import is causing issues
interface Service {
  title?: string
  tagline?: string
  heroDescription?: string
  heroImage?: string
  metrics?: {
    clients?: number
    projects?: number
    successRate?: number
  }
  // Add other properties as needed
}

interface ServiceHeroProps {
  service?: Service // Make service optional to handle null/undefined cases
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Reset typing animation when service changes
    setTypedText("")
    setCurrentIndex(0)
  }, [service])

  useEffect(() => {
    // Only run typing effect if tagline exists and is not empty
    if (service?.tagline && service.tagline.length > 0) {
      const text = service.tagline
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setTypedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }, 100)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentIndex, service?.tagline])

  // Don't render if service data is not available
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading service...</div>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-500/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity, // Use Infinity instead of Number.POSITIVE_INFINITY
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Service Title - Only render if title exists and is not empty */}
          {service.title && service.title.trim() !== "" && (
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              {service.title}
            </h1>
          )}

          {/* Typed Tagline - Only render if tagline exists and is not empty */}
          {service.tagline && service.tagline.trim() !== "" && (
            <div className="text-2xl md:text-4xl text-gray-300 min-h-[3rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
          )}

          {/* Description - Only render if heroDescription exists and is not empty */}
          {service.heroDescription && service.heroDescription.trim() !== "" && (
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {service.heroDescription}
            </p>
          )}

          {/* Trust Indicator - Only render if metrics and clients exist and is a valid number */}
          {service?.metrics?.clients && 
           typeof service.metrics.clients === 'number' && 
           service.metrics.clients > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-emerald-500"
            >
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white">
                Trusted by {service.metrics.clients}+ Companies
              </span>
            </motion.div>
          )}

          {/* CTAs - Fixed button props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 text-lg group"
              type="button"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 text-lg group"
              type="button"
            >
              <Play className="mr-2 w-5 h-5" />
              View Portfolio
            </Button>
          </motion.div>

          {/* Floating 3D Icons - Always render decorative elements */}
          <div className="absolute top-20 left-10 text-6xl animate-bounce" aria-hidden="true">⚡</div>
          <div className="absolute top-40 right-20 text-6xl animate-pulse" aria-hidden="true">🚀</div>
          <div className="absolute bottom-20 left-20 text-6xl animate-spin-slow" aria-hidden="true">💎</div>
        </motion.div>
      </div>
    </section>
  )
}