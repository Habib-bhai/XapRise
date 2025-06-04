import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'processStep',
  type: 'object',
  title: 'Process Step',
  fields: [
    defineField({
      name: 'step',
      type: 'string',
      title: 'Step Number',
      description: 'Step identifier (e.g., "01" or "Step 1")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Step title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Step details'
    }),
    defineField({
      name: 'duration',
      type: 'string',
      title: 'Duration',
      description: 'Optional duration (e.g., "2 weeks")'
    })
  ]
})