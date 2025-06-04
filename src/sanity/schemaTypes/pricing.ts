import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricing',
  type: 'object',
  title: 'Pricing',
  fields: [
    defineField({
      name: 'tiers',
      type: 'array',
      title: 'Pricing Tiers',
      description: 'List of pricing tiers',
      of: [{ type: 'pricingTier' }]
    }),
    defineField({
      name: 'customAvailable',
      type: 'boolean',
      title: 'Custom Pricing Available',
      description: 'Indicates if custom pricing is offered',
      initialValue: false
    })
  ]
})