const { createClient } = require("next-sanity")

const services = [

    {
  serviceTitle: "Enterprise Application Development",
  serviceDescription:
    "Build mission-critical enterprise applications that scale with your organization. Our expertise in MERN Stack and JAMstack architectures delivers robust, secure, and high-performance solutions for complex business workflows, data management, and user collaboration across your enterprise ecosystem.",
  features: [
    {
      id: "1",
      icon: "building",
      title: "Scalable Enterprise Architecture",
      description:
        "Microservices-based MERN Stack applications designed for enterprise scale with load balancing, auto-scaling, and distributed systems architecture to handle millions of users and transactions.",
    },
    {
      id: "2",
      icon: "shield-check",
      title: "Enterprise-Grade Security",
      description:
        "Comprehensive security implementation including SSO integration, multi-factor authentication, role-based access control, data encryption, and compliance with SOC 2, HIPAA, and GDPR standards.",
    },
    {
      id: "3",
      icon: "database",
      title: "Advanced Data Management",
      description:
        "Complex data architectures with MongoDB clusters, Redis caching, real-time analytics, data warehousing integration, and advanced reporting capabilities for enterprise decision-making.",
    },
    {
      id: "4",
      icon: "users-cog",
      title: "Workflow Automation",
      description:
        "Custom business process automation, approval workflows, document management systems, and integration with enterprise tools like Salesforce, SAP, and Microsoft 365.",
    },
    {
      id: "5",
      icon: "monitor",
      title: "Admin Dashboards & Analytics",
      description:
        "Sophisticated administrative interfaces with real-time monitoring, custom reporting, data visualization, and business intelligence integration for executive decision support.",
    },
    {
      id: "6",
      icon: "globe",
      title: "Multi-Tenant Architecture",
      description:
        "Scalable multi-tenant solutions supporting multiple organizations, departments, or clients with isolated data, customizable branding, and tenant-specific configurations.",
    },
  ],
  processSteps: [
    {
      id: "1",
      step: 1,
      title: "Enterprise Requirements Analysis",
      description:
        "Comprehensive stakeholder interviews, business process mapping, compliance requirements assessment, and technical architecture planning aligned with enterprise IT strategy.",
      duration: "3-4 weeks",
    },
    {
      id: "2",
      step: 2,
      title: "System Architecture & Security Design",
      description:
        "Design enterprise-grade architecture with security frameworks, scalability planning, integration blueprints, and compliance strategy tailored to your industry requirements.",
      duration: "3-5 weeks",
    },
    {
      id: "3",
      step: 3,
      title: "Core Development & Integration",
      description:
        "Build enterprise application with advanced features, implement security protocols, develop APIs, and integrate with existing enterprise systems and third-party services.",
      duration: "12-24 weeks",
    },
    {
      id: "4",
      step: 4,
      title: "Security Auditing & Performance Testing",
      description:
        "Comprehensive security penetration testing, performance optimization, load testing, compliance validation, and user acceptance testing with enterprise stakeholders.",
      duration: "4-6 weeks",
    },
    {
      id: "5",
      step: 5,
      title: "Deployment & Enterprise Support",
      description:
        "Production deployment with monitoring setup, staff training, documentation delivery, and ongoing enterprise support with SLA guarantees and dedicated account management.",
      duration: "Ongoing",
    },
  ],
  faqs: [
    {
      id: "1",
      question: "How do you ensure enterprise-level security and compliance?",
      answer:
        "We implement multi-layered security including encryption at rest and in transit, SSO integration, audit logging, and compliance frameworks for SOC 2, HIPAA, and GDPR. All code undergoes security audits and penetration testing.",
    },
    {
      id: "2",
      question: "Can you integrate with our existing enterprise systems?",
      answer:
        "Yes, we specialize in enterprise integrations with ERP systems, CRM platforms, Active Directory, LDAP, and legacy databases. We build robust APIs and middleware for seamless data flow across your enterprise ecosystem.",
    },
    {
      id: "3",
      question: "How do you handle enterprise scalability requirements?",
      answer:
        "We design with horizontal scaling in mind using microservices architecture, container orchestration, CDN integration, and cloud-native solutions that automatically scale based on demand and usage patterns.",
    },
    {
      id: "4",
      question: "What about ongoing maintenance and support for enterprise applications?",
      answer:
        "We provide comprehensive enterprise support including 24/7 monitoring, regular security updates, performance optimization, feature enhancements, and dedicated support teams with guaranteed SLA response times.",
    },
    {
      id: "5",
      question: "How do you manage complex enterprise workflows and approval processes?",
      answer:
        "We build custom workflow engines with configurable approval chains, automated notifications, document routing, and integration with enterprise collaboration tools to streamline complex business processes.",
    },
  ],
  pricing: {
    tiers: [
      {
        id: "1",
        name: "Department Solution",
        price: "$50,000 - $120,000",
        description: "For single department or team applications",
        features: [
          "Custom enterprise application",
          "Basic workflow automation",
          "Single sign-on integration",
          "Standard security implementation",
          "6 months enterprise support",
        ],
      },
      {
        id: "2",
        name: "Enterprise Platform",
        price: "$120,000 - $350,000",
        description: "For organization-wide solutions",
        features: [
          "Multi-module enterprise system",
          "Advanced workflow automation",
          "Comprehensive integrations",
          "Enterprise security & compliance",
          "Admin dashboards & analytics",
          "12 months dedicated support",
        ],
        popular: true,
      },
      {
        id: "3",
        name: "Enterprise Ecosystem",
        price: "$350,000+",
        description: "For complex multi-system environments",
        features: [
          "Multi-tenant architecture",
          "Advanced analytics & BI",
          "Custom API development",
          "Enterprise-grade infrastructure",
          "Dedicated development team",
          "24/7 enterprise support & SLA",
        ],
      },
    ],
    customAvailable: true,
  },
  benefits: [
    "Streamlined business processes with automated workflows",
    "Enhanced security and compliance with enterprise standards",
    "Improved productivity through intuitive user interfaces",
    "Scalable architecture that grows with your organization",
    "Real-time insights through advanced analytics and reporting",
  ],
  whyChooseUs: {
    title: "Why Choose XapRise for Enterprise Development?",
    points: [
      "25+ enterprise applications deployed for Fortune 500 companies",
      "Certified experts in enterprise security and compliance frameworks",
      "Proven track record with complex system integrations and migrations",
      "Dedicated enterprise support teams with guaranteed SLA commitments",
      "Agile development methodology with transparent project management",
      "Long-term partnership approach with ongoing innovation support",
    ],
  }
},


{
  serviceTitle: "API Development & Integration Services",
  serviceDescription:
    "Power your digital ecosystem with robust, scalable APIs that connect your applications, services, and data. Our expertise in Node.js, Next.js, and FastAPI delivers high-performance REST and GraphQL APIs with comprehensive integration capabilities for seamless data flow across your technology stack.",
  features: [
    {
      id: "1",
      icon: "link",
      title: "Custom API Development",
      description:
        "Build powerful RESTful and GraphQL APIs using Node.js and FastAPI with optimized performance, comprehensive documentation, and industry-standard security protocols.",
    },
    {
      id: "2",
      icon: "zap",
      title: "Next.js API Routes",
      description:
        "Leverage Next.js serverless functions and API routes for seamless full-stack applications with edge computing capabilities and automatic scaling.",
    },
    {
      id: "3",
      icon: "database",
      title: "Database Integration",
      description:
        "Seamless integration with MongoDB, PostgreSQL, MySQL, and Redis with optimized queries, connection pooling, and real-time data synchronization capabilities.",
    },
    {
      id: "4",
      icon: "shield",
      title: "API Security & Authentication",
      description:
        "Implement OAuth 2.0, JWT tokens, API rate limiting, request validation, and comprehensive security measures to protect your APIs from unauthorized access and attacks.",
    },
    {
      id: "5",
      icon: "activity",
      title: "Performance Optimization",
      description:
        "High-performance APIs with caching strategies, query optimization, load balancing, and monitoring to ensure fast response times and reliable service availability.",
    },
    {
      id: "6",
      icon: "puzzle",
      title: "Third-Party Integrations",
      description:
        "Connect with payment gateways, CRM systems, social media platforms, cloud services, and enterprise software through robust API integrations and middleware solutions.",
    },
  ],
  processSteps: [
    {
      id: "1",
      step: 1,
      title: "API Strategy & Planning",
      description:
        "Analyze your integration requirements, design API architecture, define endpoints and data models, and create comprehensive API specification documentation.",
      duration: "1-2 weeks",
    },
    {
      id: "2",
      step: 2,
      title: "Development & Implementation",
      description:
        "Build APIs using Node.js, Next.js, or FastAPI based on requirements, implement authentication and security measures, and develop comprehensive error handling.",
      duration: "4-8 weeks",
    },
    {
      id: "3",
      step: 3,
      title: "Integration & Testing",
      description:
        "Integrate with databases and third-party services, conduct thorough testing including load testing, security testing, and API endpoint validation.",
      duration: "2-3 weeks",
    },
    {
      id: "4",
      step: 4,
      title: "Documentation & Deployment",
      description:
        "Create comprehensive API documentation, deploy to production with monitoring setup, and provide SDK development for easy integration by developers.",
      duration: "1-2 weeks",
    },
    {
      id: "5",
      step: 5,
      title: "Monitoring & Optimization",
      description:
        "Continuous monitoring of API performance, usage analytics, security updates, and ongoing optimization based on usage patterns and feedback.",
      duration: "Ongoing",
    },
  ],
  faqs: [
    {
      id: "1",
      question: "Which technology should I choose: Node.js, Next.js, or FastAPI?",
      answer:
        "Node.js is ideal for complex backend APIs, Next.js for full-stack applications with API routes, and FastAPI for high-performance Python-based APIs with automatic documentation. We'll recommend the best fit based on your specific requirements.",
    },
    {
      id: "2",
      question: "How do you ensure API security and protect against attacks?",
      answer:
        "We implement multiple security layers including authentication, rate limiting, input validation, CORS policies, and encryption. All APIs undergo security testing and follow OWASP guidelines for API security.",
    },
    {
      id: "3",
      question: "Can you integrate with our existing systems and databases?",
      answer:
        "Yes, we specialize in integrating APIs with existing databases, legacy systems, and third-party services. We ensure seamless data flow while maintaining data integrity and system performance.",
    },
    {
      id: "4",
      question: "How do you handle API versioning and backward compatibility?",
      answer:
        "We implement proper API versioning strategies to ensure backward compatibility while allowing for future enhancements. This includes semantic versioning, deprecation notices, and migration paths for API consumers.",
    },
    {
      id: "5",
      question: "What kind of documentation and support do you provide?",
      answer:
        "We provide comprehensive API documentation with interactive examples, SDKs for popular programming languages, and detailed integration guides. Ongoing support includes monitoring, updates, and developer assistance.",
    },
  ],
  pricing: {
    tiers: [
      {
        id: "1",
        name: "API Starter",
        price: "$5,000 - $15,000",
        description: "For simple API development and basic integrations",
        features: [
          "Custom REST API development",
          "Basic authentication setup",
          "Database integration",
          "API documentation",
          "3 months support",
        ],
      },
      {
        id: "2",
        name: "Professional API",
        price: "$15,000 - $40,000",
        description: "For complex APIs with multiple integrations",
        features: [
          "Advanced API development",
          "Multiple third-party integrations",
          "Performance optimization",
          "Comprehensive security setup",
          "Load testing & monitoring",
          "6 months support",
        ],
        popular: true,
      },
      {
        id: "3",
        name: "Enterprise API",
        price: "$40,000+",
        description: "For large-scale API ecosystems",
        features: [
          "Microservices API architecture",
          "Advanced analytics & monitoring",
          "Custom SDK development",
          "Enterprise security compliance",
          "Dedicated API management",
          "12 months support & SLA",
        ],
      },
    ],
    customAvailable: true,
  },
  benefits: [
    "Seamless data flow between applications and services",
    "Improved system interoperability and integration capabilities",
    "Enhanced security with modern authentication and authorization",
    "Scalable architecture that handles growing API demands",
    "Comprehensive documentation for easy developer adoption",
  ],
  whyChooseUs: {
    title: "Why Choose XapRise for API Development?",
    points: [
      "150+ APIs developed with 99.9% uptime track record",
      "Deep expertise in Node.js, Next.js, and FastAPI ecosystems",
      "Proven experience with complex enterprise integrations",
      "Security-first approach with comprehensive testing protocols",
      "Performance optimization specialists achieving sub-100ms response times",
      "Comprehensive documentation and developer support services",
    ],
  },
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
    _id: `service-${index + 1}`, // Generate unique ID
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