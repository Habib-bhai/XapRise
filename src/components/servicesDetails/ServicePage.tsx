"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Cloud,
  Database,
  Settings,
  Users,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
  Zap,
  Target,
  Award,
  Clock,
  Mail,
  Phone,
  Calendar,
} from "lucide-react"
import type { IServicePage } from "@/lib/serviceTypes" 

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  database: Database,
  settings: Settings,
  users: Users,
  shield: Shield,
  zap: Zap,
  target: Target,
  award: Award,
  clock: Clock,
}

export default function ServicePage({
  title,
  description,
//   eslint-disable-next-line
  heroImage,
  features,
  processSteps,
  faqs,
  pricing,
  benefits,
  whyChooseUs,
}: IServicePage) {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Geometric Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-500/20 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-emerald-400/30 rotate-12"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-emerald-300/25 rotate-45"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-emerald-500/20 -rotate-12"></div>

          {/* Dots */}
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-emerald-400/40 rounded-full"></div>
          <div className="absolute top-60 right-1/4 w-1 h-1 bg-emerald-300/50 rounded-full"></div>
          <div className="absolute bottom-60 left-1/2 w-1.5 h-1.5 bg-emerald-500/30 rounded-full"></div>
          <div className="absolute bottom-32 right-1/2 w-1 h-1 bg-emerald-400/40 rounded-full"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold">XapRise</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Overview
              </a>
              <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Features
              </a>
              <a href="#process" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Process
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Pricing
              </a>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section id="overview" className="relative z-10 py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Our expert team delivers cutting-edge solutions tailored to your business needs. We combine technical
                  excellence with strategic thinking to drive your digital transformation.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-slate-800/20 rounded-2xl p-8 border border-emerald-500/20">
                  <div className="w-full h-full bg-slate-800/50 rounded-xl flex items-center justify-center">
                    <Code className="h-24 w-24 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Features & Capabilities</h2>
              <p className="text-xl text-slate-300">Comprehensive solutions designed for your success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Code
                return (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-emerald-400" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-slate-300">A proven methodology for delivering exceptional results</p>
            </div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                      {step.duration && (
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 w-fit">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block w-px h-16 bg-slate-700 ml-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">{whyChooseUs.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {pricing && (
        <section id="pricing" className="relative z-10 py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pricing Plans</h2>
                <p className="text-xl text-slate-300">Choose the perfect plan for your needs</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricing.tiers.map((tier, index) => (
                  <Card
                    key={index}
                    className={`relative ${tier.popular ? "border-emerald-500 bg-slate-800/80" : "border-slate-700 bg-slate-800/50"}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-emerald-500 text-slate-950">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                      <div className="text-3xl font-bold text-emerald-400">{tier.price}</div>
                      <CardDescription className="text-slate-300">{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${tier.popular ? "bg-emerald-500 hover:bg-emerald-600 text-slate-950" : "bg-slate-700 hover:bg-slate-600 text-white"}`}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {pricing.customAvailable && (
                <div className="text-center mt-12">
                  <p className="text-slate-300 mb-4">Need a custom solution?</p>
                  <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                    Request Custom Quote
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-300">Get answers to common questions about our services</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index +1}
                  open={openFaq === String(index+1)}
                  onOpenChange={() => setOpenFaq(openFaq === String(index+1) ? null : String(index+1))}
                >
                  <CollapsibleTrigger className="w-full">
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-left text-white">{faq.question}</CardTitle>
                          {openFaq === String(index+1) ? (
                            <ChevronUp className="h-5 w-5 text-emerald-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-emerald-400" />
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="bg-slate-800/30 border-slate-700 mt-2">
                      <CardContent className="pt-6">
                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300">Let&apos;s discuss how we can help transform your business</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-emerald-400" />
                    <span className="text-slate-300">contact@xaprise.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-emerald-400" />
                    <span className="text-slate-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-emerald-400" />
                    <span className="text-slate-300">Schedule a consultation</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950">
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold">XapRise</span>
            </div>
            <p className="text-slate-400">© 2024 XapRise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
