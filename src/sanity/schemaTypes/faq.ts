import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  type: 'object',
  title: 'FAQ',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      description: 'The question',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
      description: 'The answer'
    })
  ]
})