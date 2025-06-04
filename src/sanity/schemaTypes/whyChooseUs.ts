import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'whyChooseUs',
  type: 'object',
  title: 'Why Choose Us',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Section title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'points',
      type: 'array',
      title: 'Points',
      description: 'List of reasons to choose this service',
      of: [{ type: 'string' }],
      validation: Rule => Rule.min(1)
    })
  ]
})