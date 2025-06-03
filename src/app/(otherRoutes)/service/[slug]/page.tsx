import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client" 
import ServiceHero from "@/components/servicesDetails/ServiceHero"
import ServiceOverview from "@/components/servicesDetails/ServiceOverview"
import FeaturesShowcase from "@/components/servicesDetails/FeaturesShowCase"
import SocialProof from "@/components/servicesDetails/SocialProof"
import CTASection from "@/components/servicesDetails/CtaSection"
import { Service } from "@/lib/servicesData"

// GROQ query to fetch specific service data
const serviceQuery = `*[_type == "service" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  tagline,
  heroDescription,
  "heroImage": heroImage.asset->url,
  painPoints,
  solutions,
  features[]{
    title,
    description,
    icon,
    metrics
  },
  process[]{
    step,
    title,
    duration,
    description
  },
  technologies,
  pricing{
    starting,
    average,
    enterprise
  },
  testimonials[]{
    quote,
    client,
    position,
    "avatar": avatar.asset->url,
    rating,
    results
  },
  caseStudies[]{
    title,
    client,
    challenge,
    solution,
    results,
    "image": image.asset->url,
    link
  },
  faqs[]{
    question,
    answer
  },
  metrics{
    projects,
    clients,
    successRate
  }
}`

// Generate metadata for each service
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const service: Service = await client.fetch(serviceQuery, { slug: params.slug })

    if (!service) {
      return {
        title: "Service Not Found",
      }
    }

    return {
      title: `${service.title} | Premium Development Services`,
      description: service.heroDescription,
      openGraph: {
        title: service.title,
        description: service.heroDescription,
        images: [service.heroImage || "/og-default.jpg"],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: "Service Not Found",
    }
  }
}


export const revalidate = 60

// Main service page component
export default async function ServicePage({ params }: { params: { slug: string } }) {
  try {
    const service = await client.fetch(serviceQuery, { slug: params.slug })

    if (!service) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-black overflow-hidden">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <FeaturesShowcase service={service} />
        <SocialProof service={service} />
        <CTASection service={service} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching service data:', error)
    notFound()
  }
}