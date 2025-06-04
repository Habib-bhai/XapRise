const { createClient } = require("next-sanity")

const services = [
{
  serviceTitle: "Autonomous AI Agents Development",
  serviceDescription: "Transform your business with scalable, intelligent AI agents built using the DACA (Dapr Agentic Cloud Ascent) architecture. Designed to handle up to 10 million concurrent agents, our solutions leverage OpenAI Agents SDK, Dapr, and Kubernetes to deliver autonomous, cost-efficient automation for complex workflows, decision-making, and global-scale operations.",
  features: [
    {
      id: "1",
      icon: "layers",
      title: "Planetary-Scale Architecture",
      description: "Support for up to 10 million concurrent AI agents, ensuring scalability for enterprise-grade applications with distributed computing and load balancing."
    },
    {
      id: "2",
      icon: "zap",
      title: "Autonomous Decision-Making",
      description: "Agents equipped with advanced reasoning and planning capabilities to execute tasks independently, minimizing human intervention."
    },
    {
      id: "3",
      icon: "settings",
      title: "Advanced Protocol Integration",
      description: "Utilizes Model Context Protocol (MCP) and Agent2Agent (A2A) protocols for standardized tool usage and seamless agent interoperability."
    },
    {
      id: "4",
      icon: "cloud",
      title: "Cloud-Native Deployment",
      description: "Built on Kubernetes and Dapr for resilient, distributed systems that ensure high availability and global scalability."
    },
    {
      id: "5",
      icon: "CreditCard",
      title: "Cost-Optimized Solutions",
      description: "Leverages free-tier cloud services and self-hosted LLMs to deliver high performance at reduced operational costs."
    }
  ],
  processSteps: [
    {
      id: "1",
      step: 1,
      title: "Requirements Analysis",
      description: "In-depth consultation to understand your business needs, define agent objectives, and align with your strategic goals.",
      duration: "1-2 weeks"
    },
    {
      id: "2",
      step: 2,
      title: "DACA Architecture Design",
      description: "Custom design of the DACA architecture, selecting optimal tools, protocols, and cloud infrastructure for your use case.",
      duration: "2-3 weeks"
    },
    {
      id: "3",
      step: 3,
      title: "Agent Development",
      description: "Build and test AI agents with OpenAI Agents SDK, integrating reasoning, memory, and execution capabilities.",
      duration: "4-6 weeks"
    },
    {
      id: "4",
      step: 4,
      title: "System Integration",
      description: "Seamless integration of agents with your existing systems, APIs, and third-party tools for cohesive workflows.",
      duration: "2-3 weeks"
    },
    {
      id: "5",
      step: 5,
      title: "Deployment & Optimization",
      description: "Deploy agents on cloud platforms with Kubernetes, followed by performance tuning and scalability testing.",
      duration: "1-2 weeks"
    },
    {
      id: "6",
      step: 6,
      title: "Monitoring & Support",
      description: "Ongoing monitoring, updates, and dedicated support to ensure agents operate reliably and adapt to evolving needs.",
      duration: "Ongoing"
    }
  ],
  faqs: [
    {
      id: "1",
      question: "What is the DACA architecture?",
      answer: "The DACA (Dapr Agentic Cloud Ascent) architecture is a design pattern for building scalable AI agents using Dapr, OpenAI Agents SDK, and cloud-native technologies, capable of handling up to 10 million concurrent agents."
    },
    {
      id: "2",
      question: "How do autonomous AI agents benefit my business?",
      answer: "Our AI agents automate complex tasks, reduce operational costs, enhance decision-making, and scale effortlessly to meet growing demands, driving efficiency across your organization."
    },
    {
      id: "3",
      question: "Can the agents integrate with our existing systems?",
      answer: "Yes, we ensure seamless integration with your systems through custom APIs, MCP, and A2A protocols, enabling interoperability with existing workflows and tools."
    },
    {
      id: "4",
      question: "What is the typical project timeline?",
      answer: "Project timelines depend on complexity but typically range from 12-16 weeks for full development, with detailed estimates provided during consultation."
    },
    {
      id: "5",
      question: "Do you provide ongoing support for AI agents?",
      answer: "We offer comprehensive support, including 24/7 monitoring, regular updates, and optional training to ensure your agents remain effective and reliable."
    }
  ],
  pricing: {
    tiers: [
      {
        id: "1",
        name: "Starter Agent Solution",
        price: "$25,000 - $50,000",
        description: "Ideal for small-scale automation needs or pilot projects.",
        features: [
          "Single AI agent deployment",
          "Basic task automation",
          "Standard protocol integration",
          "Cloud deployment setup",
          "3 months support"
        ]
      },
      {
        id: "2",
        name: "Enterprise Agent Suite",
        price: "$50,000 - $150,000",
        description: "Comprehensive solution for large-scale business automation.",
        features: [
          "Multi-agent system",
          "Advanced automation workflows",
          "MCP and A2A integration",
          "Kubernetes-based deployment",
          "6 months dedicated support"
        ],
        popular: true
      },
      {
        id: "3",
        name: "Global Agent Ecosystem",
        price: "$150,000+",
        description: "Planetary-scale solution for complex, multi-system environments.",
        features: [
          "Scalable multi-agent architecture",
          "Custom protocol development",
          "Advanced analytics integration",
          "Global cloud infrastructure",
          "12 months enterprise support"
        ]
      }
    ],
    customAvailable: true
  },
  benefits: [
    "Effortless automation of complex business processes",
    "Cost savings through optimized cloud and LLM usage",
    "Scalable solutions for global enterprise needs",
    "Enhanced decision-making with real-time insights",
    "Future-ready technology for long-term growth"
  ],
  whyChooseUs: {
    title: "Why Choose Us for Autonomous AI Agents?",
    points: [
      "Proven expertise in DACA architecture and agentic AI",
      "Successful deployments across diverse industries",
      "Innovative solutions with cutting-edge AI technologies",
      "Dedicated support with guaranteed performance",
      "Transparent, agile development process"
    ]
  }
}

]

const client = createClient({
  projectId: 'w971nafs', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token:'skfBqas3iwwkF05InV2qLbzLSGuqVPsvo8BdCXcmcnwCTLSolsG599bSwS4kalwV9J3xMPXJ3JdYCy1Wsls1lHfrdDgUhX7DUQh5AQ6Cj08kb7PkJUd47VceThOVaEASB5BI1KNscKqxXNVbIfl5xER3Vd8vBjdkWhpIWYg09mWr2UHxJoZf', // Replace with your write token
  apiVersion: '2025-06-03'
})





function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Function to map icon names to valid schema options
function mapIconName(iconName) {
  const iconMapping = {
    'building': 'Globe',
    'shield-check': 'shield',
    'database': 'database',
    'users-cog': 'users',
    'monitor': 'settings',
    'globe': 'Globe',
    'link': 'Globe',
    'zap': 'zap',
    'shield': 'shield',
    'activity': 'target',
    'puzzle': 'layers'
  }
  
  return iconMapping[iconName] || 'settings' // default fallback
}

// Transform function to convert service data to Sanity format
function transformServiceToSanity(service, index) {
  return {
    _type: 'servicePage',
    _id: `service-${index + 3}`, // Generate unique ID
    title: service.serviceTitle,
    slug: {
      _type: 'slug',
      current: generateSlug(service.serviceTitle)
    },
    description: service.serviceDescription,
    heroImage: null, // Placeholder as requested
    features: service.features.map(feature => ({
      _type: 'feature',
      _key: feature.id,
      title: feature.title,
      description: feature.description || '',
      icon: mapIconName(feature.icon)
    })),
    processSteps: service.processSteps.map(step => ({
      _type: 'processStep',
      _key: step.id,
      step: step.step.toString(),
      title: step.title,
      description: step.description || '',
      duration: step.duration || ''
    })),
    faqs: service.faqs.map(faq => ({
      _type: 'faq',
      _key: faq.id,
      question: faq.question,
      answer: faq.answer || ''
    })),
    pricing: {
      _type: 'pricing',
      tiers: service.pricing.tiers.map(tier => ({
        _type: 'pricingTier',
        _key: tier.id,
        name: tier.name,
        price: tier.price,
        description: tier.description || '',
        features: tier.features || [],
        popular: tier.popular || false
      })),
      customAvailable: service.pricing.customAvailable || false
    },
    benefits: service.benefits || [],
    whyChooseUs: {
      _type: 'whyChooseUs',
      title: service.whyChooseUs.title,
      points: service.whyChooseUs.points || []
    }
  }
}

// Main migration function
async function migrateServices() {
  try {
    console.log('Starting service migration to Sanity...')
    
    // Transform all services
    const transformedServices = services.map((service, index) => 
      transformServiceToSanity(service, index)
    )
    
    // Create documents in batches
    const results = []
    for (const service of transformedServices) {
      try {
        console.log(`Migrating: ${service.title}`)
        const result = await client.create(service)
        results.push(result)
        console.log(`✅ Successfully migrated: ${service.title}`)
      } catch (error) {
        console.error(`❌ Failed to migrate ${service.title}:`, error.message)
      }
    }
    
    console.log(`\n🎉 Migration completed! ${results.length} services migrated successfully.`)
    
    return results
    
  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  }
}

// Dry run function to preview transformed data without creating documents
// function dryRun() {
//   console.log('=== DRY RUN - Preview of transformed data ===\n')
  
//   services.forEach((service, index) => {
//     const transformed = transformServiceToSanity(service, index)
//     console.log(`Service ${index + 1}: ${transformed.title}`)
//     console.log(`Slug: ${transformed.slug.current}`)
//     console.log(`Features: ${transformed.features.length}`)
//     console.log(`Process Steps: ${transformed.processSteps.length}`)
//     console.log(`FAQs: ${transformed.faqs.length}`)
//     console.log(`Pricing Tiers: ${transformed.pricing.tiers.length}`)
//     console.log(`Benefits: ${transformed.benefits.length}`)
//     console.log(`Why Choose Us Points: ${transformed.whyChooseUs.points.length}`)
//     console.log('---\n')
//   })
// }

// Export functions for use
// export { migrateServices, dryRun, transformServiceToSanity }

// Uncomment the line below to run the migration
migrateServices()

// Uncomment the line below to run a dry run first
// dryRun()