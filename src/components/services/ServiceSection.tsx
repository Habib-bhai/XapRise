"use client"

import { useRef } from "react"
import { ServiceCard } from "./ServiceCard"  
import {  LayoutList, Building2, ShoppingCart, UploadCloud, Plug, Monitor, LifeBuoy, FileText, Bot, Settings2 } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
    { Icon: Bot, title: "Autonomous AI Agents Development", description: "Transform your business with scalable, intelligent AI agents built using the DACA (Dapr Agentic Cloud Ascent) architecture. Designed leveraging OpenAI Agents SDK, Dapr, and Kubernetes to deliver autonomous, cost-efficient automation for complex workflows, decision-making, and global-scale operations.", slug: "autonomous-ai-agents-development" },

    { Icon: LayoutList, title: "Custom Web Development", description: "Tailored solutions to meet specific business needs. We create web applications that are scalable, secure, and user-friendly.", slug: "custom-web-development"  },

    { Icon: FileText, title: "Headless CMS Integration", description: "Flexible content management with systems like Sanity. We integrate headless CMS solutions to provide a robust backend for your content, allowing for easy updates and management.", slug: "headless-cms-integration"  },

    { Icon: Building2, title: "Enterprise Application Development", description: "Robust applications designed for large-scale operations. We specialize in building enterprise-level software that enhances productivity and efficiency.", slug: "enterprise-application-development"  },

    { Icon: ShoppingCart, title: "E-Commerce Solutions", description: "Feature-rich online stores with secure payment integrations. We develop custom e-commerce platforms that provide seamless shopping experiences and drive sales.", slug: "e-commerce-solutions"  },

    { Icon: Plug, title: "API Development And Integration", description: "Connect front-end interfaces with robust back-end services. We build and integrate APIs that enable smooth communication between different backend components and frontends, enhancing functionality and user experience.", slug: "api-development-and-integration"  },

    { Icon: UploadCloud, title: "Migration And Upgradation", description: "Smooth transition from legacy systems to modern MERN-based applications. We ensure a seamless migration process, preserving data integrity and minimizing downtime.", slug: "migration-and-upgradation"  },

    { Icon: Monitor, title: "Single Page Applications", description: "Interactive SPAs for enhanced user experiences. We create SPAs that load quickly and provide a smooth, app-like experience, improving user engagement and satisfaction.", slug: "single-page-applications"  },

    { Icon: LifeBuoy, title: "Maintenance, Debugging and Support", description: "Ongoing support to ensure application stability and performance. We provide continuous maintenance and support services to keep your applications running smoothly, addressing any issues promptly.", slug: "maintenance-debugging-and-support"},

    { Icon: Settings2, title: "AI Voice Agents & Automated Workflows", description: "Revolutionize customer engagement and streamline operations with AI-powered voice agents built using VAPI and automated workflows powered by n8n. Our service delivers intelligent, conversational AI agents that handle customer interactions seamlessly and integrates with no-code automation to optimize business processes, saving time and boosting efficiency.", slug: "ai-voice-agents-automated-workflows"  }
]
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 border border-emerald-500 px-4 py-2 mb-4 transition-all duration-700 transform
              ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm tracking-wider text-white">SOLUTIONS WE OFFER</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-white transition-all duration-700 delay-200 transform
              ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Services & Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

