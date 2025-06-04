const { createClient } = require("next-sanity")

const services = [
{
  serviceTitle: "Maintenance, Debugging, and Support for MERN & JAMstack Applications",
  serviceDescription: "Ensure your MERN and JAMstack applications run smoothly with our comprehensive maintenance, debugging, and support services. We provide proactive monitoring, rapid issue resolution, performance optimization, and feature updates to keep your applications secure, scalable, and aligned with your business goals.",
  features: [
    {
      id: "1",
      icon: "settings",
      title: "Proactive Monitoring",
      description: "24/7 monitoring of your MERN and JAMstack applications to detect and address performance issues, downtime, or security threats in real-time."
    },
    {
      id: "2",
      icon: "shield",
      title: "Security Patching",
      description: "Regular security updates and patches to protect your applications from vulnerabilities, ensuring compliance with GDPR, SOC 2, and other standards."
    },
    {
      id: "3",
      icon: "zap",
      title: "Performance Optimization",
      description: "Optimize application speed and scalability with techniques like code splitting, database indexing, and CDN integration for MERN and JAMstack stacks."
    },
    {
      id: "4",
      icon: "database",
      title: "Bug Fixing & Debugging",
      description: "Rapid identification and resolution of bugs in React, Node.js, MongoDB, or static site generators, ensuring uninterrupted functionality."
    },
    {
      id: "5",
      icon: "cloud",
      title: "Cloud Infrastructure Support",
      description: "Manage and optimize cloud deployments on AWS, Vercel, or Netlify, ensuring high availability and cost-efficient resource usage."
    },
    {
      id: "6",
      icon: "users",
      title: "Feature Enhancements",
      description: "Implement new features, update APIs, and integrate third-party services to keep your application competitive and user-friendly."
    }
  ],
  processSteps: [
    {
      id: "1",
      step: 1,
      title: "Application Assessment",
      description: "Analyze your MERN or JAMstack application to identify performance bottlenecks, security risks, and maintenance needs.",
      duration: "1-2 weeks"
    },
    {
      id: "2",
      step: 2,
      title: "Support Plan Design",
      description: "Create a customized maintenance and support plan, including monitoring tools, SLAs, and priority levels for issue resolution.",
      duration: "1-2 weeks"
    },
    {
      id: "3",
      step: 3,
      title: "Monitoring Setup",
      description: "Implement monitoring tools and configure alerts for performance, uptime, and security, tailored to your application’s stack.",
      duration: "1 week"
    },
    {
      id: "4",
      step: 4,
      title: "Ongoing Maintenance",
      description: "Perform regular updates, security patches, bug fixes, and optimizations to ensure consistent performance and reliability.",
      duration: "Ongoing"
    },
    {
      id: "5",
      step: 5,
      title: "Support & Enhancements",
      description: "Provide dedicated support for issue resolution, feature additions, and third-party integrations, with regular performance reports.",
      duration: "Ongoing"
    }
  ],
  faqs: [
    {
      id: "1",
      question: "What does your maintenance service cover?",
      answer: "Our service includes 24/7 monitoring, security patching, bug fixing, performance optimization, and feature updates for MERN and JAMstack applications."
    },
    {
      id: "2",
      question: "How quickly do you resolve issues?",
      answer: "We offer tiered SLAs with response times as low as 1 hour for critical issues, depending on your chosen support plan."
    },
    {
      id: "3",
      question: "Can you support applications built by other developers?",
      answer: "Yes, we conduct a thorough code review and assessment to take over maintenance and support for any MERN or JAMstack application."
    },
    {
      id: "4",
      question: "How do you ensure security for our applications?",
      answer: "We apply regular security patches, implement encryption, and conduct vulnerability scans to ensure compliance with standards like GDPR and SOC 2."
    },
    {
      id: "5",
      question: "Can you add new features to our existing application?",
      answer: "Absolutely, we provide feature enhancements, API updates, and third-party integrations to keep your application competitive and up-to-date."
    }
  ],
  pricing: {
    tiers: [
      {
        id: "1",
        name: "Basic Support",
        price: "$1,000 - $2,500/month",
        description: "For small applications needing essential maintenance.",
        features: [
          "24/7 basic monitoring",
          "Monthly security patches",
          "Standard bug fixing",
          "Email support",
          "Quarterly performance reports"
        ]
      },
      {
        id: "2",
        name: "Pro Support",
        price: "$2,500 - $5,000/month",
        description: "For growing applications with advanced needs.",
        features: [
          "24/7 advanced monitoring",
          "Weekly security patches",
          "Priority bug fixing",
          "Phone and email support",
          "Monthly performance optimization",
          "Basic feature updates"
        ],
        popular: true
      },
      {
        id: "3",
        name: "Enterprise Support",
        price: "$5,000+/month",
        description: "For mission-critical applications with high demands.",
        features: [
          "24/7 premium monitoring",
          "Real-time security patching",
          "Immediate bug resolution",
          "Dedicated support team",
          "Custom feature development",
          "Bi-weekly performance reports"
        ]
      }
    ],
    customAvailable: true
  },
  benefits: [
    "Uninterrupted application performance with proactive monitoring",
    "Enhanced security with regular patches and compliance checks",
    "Faster issue resolution to minimize downtime",
    "Scalable support tailored to your application’s growth",
    "Continuous improvements to keep your app competitive"
  ],
  whyChooseUs: {
    title: "Why Choose Us for MERN & JAMstack Maintenance?",
    points: [
      "Deep expertise in MERN and JAMstack technologies",
      "Proven track record in maintaining high-performance applications",
      "Rapid response times with tiered SLA commitments",
      "Comprehensive security and compliance solutions",
      "Transparent reporting and dedicated support teams",
      "Flexible plans to suit businesses of all sizes"
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
    _id: `service-${index + 6}`, // Generate unique ID
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