import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicePage',
  type: 'document',
  title: 'Service Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Service Title',
      description: 'The main title of the service',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique URL identifier for the service page',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Service Description',
      description: 'A brief overview of the service',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      description: 'Optional hero image for the service page',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      description: 'List of key features or capabilities',
      of: [{ type: 'feature' }]
    }),
    defineField({
      name: 'processSteps',
      type: 'array',
      title: 'Process Steps',
      description: 'Steps outlining the service process',
      of: [{ type: 'processStep' }]
    }),
    defineField({
      name: 'faqs',
      type: 'array',
      title: 'FAQs',
      description: 'Frequently asked questions and answers',
      of: [{ type: 'faq' }]
    }),
    defineField({
      name: 'pricing',
      type: 'pricing',
      title: 'Pricing',
      description: 'Pricing details for the service (optional)'
    }),
    defineField({
      name: 'benefits',
      type: 'array',
      title: 'Benefits',
      description: 'List of benefits provided by the service',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'whyChooseUs',
      type: 'whyChooseUs',
      title: 'Why Choose Us',
      description: 'Reasons to choose this service'
    })
  ]
})