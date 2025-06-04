import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'feature',
  type: 'object',
  title: 'Feature',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Feature title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Feature description'
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Icon name from available options',
      options: {
        list: [
          { title: 'Code', value: 'code' },
          { title: 'Smartphone', value: 'smartphone' },
          { title: 'Cloud', value: 'cloud' },
          { title: 'Database', value: 'database' },
          { title: 'Settings', value: 'settings' },
          { title: 'Users', value: 'users' },
          { title: 'Shield', value: 'shield' },
          { title: 'Zap', value: 'zap' },
          { title: 'Target', value: 'target' },
          { title: 'Award', value: 'award' },
          { title: 'Clock', value: 'clock' }
        ]
      },
      validation: Rule => Rule.required()
    })
  ]
})