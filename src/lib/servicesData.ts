export interface Service {
  slug: string
  title: string
  tagline: string
  heroDescription: string
  heroImage?: string
  painPoints: string[]
  solutions: string[]
  features: Feature[]
  process: ProcessStep[]
  technologies: string[]
  pricing: {
    starting: number
    average: number
    enterprise: string
  }
  testimonials: Testimonial[]
  caseStudies: CaseStudy[]
  faqs: FAQ[]
  metrics: {
    projects: number
    clients: number
    successRate: number
  }
}

export interface Feature {
  title: string
  description: string
  icon: string
  metrics: string
}

export interface ProcessStep {
  step: number
  title: string
  duration: string
  description: string
}

export interface Testimonial {
  quote: string
  client: string
  position: string
  avatar: string
  rating: number
  results: string
}

export interface CaseStudy {
  title: string
  client: string
  challenge: string
  solution: string
  results: string[]
  image: string
  link: string
}

export interface FAQ {
  question: string
  answer: string
}

