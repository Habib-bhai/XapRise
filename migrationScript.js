const { createClient } = require("next-sanity")

const services = [
{
  serviceTitle: "AI Voice Agents & Automated Workflows",
  serviceDescription: "Revolutionize customer engagement and streamline operations with AI-powered voice agents built using VAPI and automated workflows powered by n8n. Our service delivers intelligent, conversational AI agents that handle customer interactions seamlessly and integrates with no-code automation to optimize business processes, saving time and boosting efficiency.",
  features: [
    {
      id: "1",
      icon: "smartphone",
      title: "Conversational Voice Agents",
      description: "Build AI voice agents with VAPI that handle customer queries, bookings, and support with natural, human-like interactions across multiple channels."
    },
    {
      id: "2",
      icon: "zap",
      title: "No-Code Workflow Automation",
      description: "Leverage n8n to create automated workflows that connect your apps, streamline tasks, and trigger actions based on voice agent interactions."
    },
    {
      id: "3",
      icon: "cloud",
      title: "Cloud-Based Scalability",
      description: "Deploy voice agents and workflows on scalable cloud infrastructure, ensuring high availability and performance under heavy loads."
    },
    {
      id: "4",
      icon: "settings",
      title: "Seamless Integrations",
      description: "Integrate with CRMs, ERPs, and communication platforms like Slack, WhatsApp, and Twilio for a unified business ecosystem."
    },
    {
      id: "5",
      icon: "shield",
      title: "Secure Data Handling",
      description: "Ensure compliance with data privacy standards like GDPR and HIPAA, with encrypted voice data and secure workflow execution."
    }
  ],
  processSteps: [
    {
      id: "1",
      step: 1,
      title: "Needs Assessment",
      description: "Collaborate with your team to identify voice agent use cases and automation requirements, mapping out key business processes.",
      duration: "1-2 weeks"
    },
    {
      id: "2",
      step: 2,
      title: "Solution Design",
      description: "Design VAPI-based voice agents and n8n workflows, defining conversation flows and automation triggers tailored to your needs.",
      duration: "2-3 weeks"
    },
    {
      id: "3",
      step: 3,
      title: "Development & Testing",
      description: "Build and rigorously test voice agents and workflows, ensuring natural interactions and reliable automation performance.",
      duration: "3-5 weeks"
    },
    {
      id: "4",
      step: 4,
      title: "Integration",
      description: "Connect voice agents and workflows with your existing systems, APIs, and third-party tools for seamless operation.",
      duration: "2-3 weeks"
    },
    {
      id: "5",
      step: 5,
      title: "Deployment & Training",
      description: "Deploy the solution on cloud infrastructure, provide staff training, and set up monitoring for optimal performance.",
      duration: "1-2 weeks"
    },
    {
      id: "6",
      step: 6,
      title: "Ongoing Support",
      description: "Offer continuous monitoring, updates, and support to ensure voice agents and workflows remain effective and up-to-date.",
      duration: "Ongoing"
    }
  ],
  faqs: [
    {
      id: "1",
      question: "What can VAPI voice agents do for my business?",
      answer: "VAPI voice agents can handle customer support, appointment scheduling, order processing, and more, providing 24/7 availability with natural, human-like conversations."
    },
    {
      id: "2",
      question: "How does n8n enhance automation?",
      answer: "n8n enables no-code automation of repetitive tasks, connecting apps and triggering actions based on voice agent inputs or other events, streamlining your operations."
    },
    {
      id: "3",
      question: "Can the solution integrate with our existing tools?",
      answer: "Yes, we integrate with CRMs, ERPs, and platforms like Slack, WhatsApp, and Twilio, ensuring a cohesive workflow across your tech stack."
    },
    {
      id: "4",
      question: "How long does it take to implement this solution?",
      answer: "Depending on complexity, implementation typically takes 9-15 weeks, with detailed timelines provided during the initial consultation."
    },
    {
      id: "5",
      question: "Is the solution secure and compliant?",
      answer: "We implement encryption, secure APIs, and compliance with GDPR and HIPAA to protect voice data and ensure regulatory adherence."
    }
  ],
  pricing: {
    tiers: [
      {
        id: "1",
        name: "Basic Voice Automation",
        price: "$15,000 - $30,000",
        description: "For small businesses needing simple voice agents and automation.",
        features: [
          "Single VAPI voice agent",
          "Basic n8n workflows",
          "Standard integrations",
          "Cloud deployment",
          "3 months support"
        ]
      },
      {
        id: "2",
        name: "Advanced Voice & Workflow Suite",
        price: "$30,000 - $80,000",
        description: "Comprehensive solution for medium to large businesses.",
        features: [
          "Multi-channel voice agents",
          "Advanced n8n workflows",
          "CRM and ERP integrations",
          "Scalable cloud infrastructure",
          "6 months dedicated support"
        ],
        popular: true
      },
      {
        id: "3",
        name: "Enterprise Voice Ecosystem",
        price: "$80,000+",
        description: "For complex, high-volume automation needs.",
        features: [
          "Custom voice agent network",
          "Complex n8n automation",
          "Full system integrations",
          "High-availability infrastructure",
          "12 months enterprise support"
        ]
      }
    ],
    customAvailable: true
  },
  benefits: [
    "24/7 customer engagement with intelligent voice agents",
    "Streamlined operations through automated workflows",
    "Scalable solutions for growing business needs",
    "Enhanced customer experience with natural interactions",
    "Cost savings via no-code automation and cloud efficiency"
  ],
  whyChooseUs: {
    title: "Why Choose Us for AI Voice Agents & Automation?",
    points: [
      "Expertise in VAPI and n8n for cutting-edge solutions",
      "Proven success in automating customer interactions",
      "Seamless integration with your existing tech stack",
      "Dedicated support with performance guarantees",
      "Agile process with transparent project management"
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
    _id: `service-${index + 4}`, // Generate unique ID
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