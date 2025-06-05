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

export const revalidate = 60

export default async function WebDevelopmentPage({params}: {params: {slug: string}}) {

  const Data: IServicePage = await client.fetch(query, { slug:  params.slug});

  return <ServicePage {...Data} />
}
