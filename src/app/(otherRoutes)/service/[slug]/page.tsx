import ServicePage from "@/components/servicesDetails/ServicePage"
import type { IServicePage } from "@/lib/serviceTypes"
import { client } from "@/sanity/lib/client"
// import type { ServicePageProps } from "@/lib/serviceTypes"


const query = `
*[_type == "servicePage" && slug.current == $slug][0] {
  slug,
  title,
  description,
  heroImage {
    asset->{
      _id,
      url
    }
  },
  features[] {
    title,
    description,
    icon
  },
  processSteps[] {
    step,
    title,
    description,
    duration
  },
  faqs[] {
    question,
    answer
  },
  pricing {
    tiers[] {
      name,
      price,
      description,
      features,
      popular
    },
    customAvailable
  },
  benefits,
  whyChooseUs {
    title,
    points
  }
}
`



// const webDevelopmentData: ServicePageProps = {
//   serviceTitle: "Custom Web Development",
//   serviceDescription:
//     "Transform your digital presence with cutting-edge web applications built for performance, scalability, and user experience.",
//   features: [
//     {
//       id: "1",
//       icon: "code",
//       title: "Custom Development",
//       description:
//         "Tailored web applications built from scratch to meet your specific business requirements and goals.",
//     },
//     {
//       id: "2",
//       icon: "zap",
//       title: "Performance Optimized",
//       description:
//         "Lightning-fast applications with optimized code, efficient databases, and modern caching strategies.",
//     },
//     {
//       id: "3",
//       icon: "shield",
//       title: "Security First",
//       description:
//         "Enterprise-grade security measures including encryption, authentication, and vulnerability protection.",
//     },
//     {
//       id: "4",
//       icon: "smartphone",
//       title: "Responsive Design",
//       description: "Seamless experience across all devices with mobile-first responsive design principles.",
//     },
//     {
//       id: "5",
//       icon: "cloud",
//       title: "Cloud Integration",
//       description: "Scalable cloud infrastructure with automated deployment and monitoring capabilities.",
//     },
//     {
//       id: "6",
//       icon: "settings",
//       title: "API Development",
//       description: "Robust RESTful and GraphQL APIs for seamless third-party integrations and data exchange.",
//     },
//   ],
//   processSteps: [
//     {
//       id: "1",
//       step: 1,
//       title: "Discovery & Planning",
//       description:
//         "We analyze your requirements, define project scope, and create a comprehensive development roadmap.",
//       duration: "1-2 weeks",
//     },
//     {
//       id: "2",
//       step: 2,
//       title: "Design & Architecture",
//       description:
//         "Create wireframes, UI/UX designs, and technical architecture for optimal user experience and performance.",
//       duration: "2-3 weeks",
//     },
//     {
//       id: "3",
//       step: 3,
//       title: "Development & Testing",
//       description:
//         "Agile development with continuous testing, code reviews, and quality assurance throughout the process.",
//       duration: "6-12 weeks",
//     },
//     {
//       id: "4",
//       step: 4,
//       title: "Deployment & Launch",
//       description: "Seamless deployment to production with monitoring, performance optimization, and go-live support.",
//       duration: "1 week",
//     },
//     {
//       id: "5",
//       step: 5,
//       title: "Support & Maintenance",
//       description: "Ongoing support, updates, and maintenance to ensure optimal performance and security.",
//       duration: "Ongoing",
//     },
//   ],
//   faqs: [
//     {
//       id: "1",
//       question: "What technologies do you use for web development?",
//       answer:
//         "We use modern technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Vercel. Our tech stack is chosen based on your specific requirements and scalability needs.",
//     },
//     {
//       id: "2",
//       question: "How long does a typical web development project take?",
//       answer:
//         "Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase.",
//     },
//     {
//       id: "3",
//       question: "Do you provide ongoing support after launch?",
//       answer:
//         "Yes, we offer comprehensive support and maintenance packages including security updates, performance monitoring, bug fixes, and feature enhancements to keep your application running smoothly.",
//     },
//     {
//       id: "4",
//       question: "Can you integrate with existing systems?",
//       answer:
//         "Absolutely. We specialize in integrating new web applications with existing systems, databases, and third-party services through robust APIs and middleware solutions.",
//     },
//     {
//       id: "5",
//       question: "What about mobile responsiveness?",
//       answer:
//         "All our web applications are built with mobile-first responsive design, ensuring optimal user experience across all devices and screen sizes.",
//     },
//   ],
//   pricing: {
//     tiers: [
//       {
//         id: "1",
//         name: "Starter",
//         price: "$5,000 - $15,000",
//         description: "Perfect for small businesses and startups",
//         features: [
//           "Custom responsive design",
//           "Up to 10 pages",
//           "Basic SEO optimization",
//           "Contact forms",
//           "3 months support",
//         ],
//       },
//       {
//         id: "2",
//         name: "Professional",
//         price: "$15,000 - $50,000",
//         description: "Ideal for growing businesses",
//         features: [
//           "Advanced custom functionality",
//           "Database integration",
//           "User authentication",
//           "API integrations",
//           "6 months support",
//           "Performance optimization",
//         ],
//         popular: true,
//       },
//       {
//         id: "3",
//         name: "Enterprise",
//         price: "$50,000+",
//         description: "For large-scale applications",
//         features: [
//           "Complex web applications",
//           "Microservices architecture",
//           "Advanced security features",
//           "Scalable infrastructure",
//           "12 months support",
//           "Dedicated project manager",
//         ],
//       },
//     ],
//     customAvailable: true,
//   },
//   benefits: [
//     "Scalable architecture that grows with your business",
//     "Modern, responsive design for all devices",
//     "SEO-optimized for better search rankings",
//     "Fast loading times and optimal performance",
//     "Secure, enterprise-grade development practices",
//   ],
//   whyChooseUs: {
//     title: "Why Choose XapRise for Web Development?",
//     points: [
//       "10+ years of experience in web development",
//       "Proven track record with 200+ successful projects",
//       "Expert team of certified developers and designers",
//       "Agile development methodology with regular updates",
//       "24/7 support and maintenance services",
//       "Competitive pricing with transparent billing",
//     ],
//   },
// }

export const revalidate = 60
export default async function WebDevelopmentPage({params}: {params: {slug: string}}) {

  const Data: IServicePage = await client.fetch(query, { slug:  params.slug});

  return <ServicePage {...Data} />
}
