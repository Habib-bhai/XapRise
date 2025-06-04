import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingTier',
  type: 'object',
  title: 'Pricing Tier',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tier Name',
      description: 'Name of the pricing tier',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      type: 'string',
      title: 'Price',
      description: 'Price (e.g., "$99/month")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Tier details'
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      description: 'List of features included in this tier',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'popular',
      type: 'boolean',
      title: 'Popular Tier',
      description: 'Mark as the most popular tier',
      initialValue: false
    })
  ]
})