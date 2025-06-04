import { type SchemaTypeDefinition } from 'sanity'
import servicePage from './service'
import feature from './feature'
import faq from './faq'
import processStep from './processStep'
import pricing from './pricing'
import pricingTier from './pricingTier'
import whyChooseUs from './whyChooseUs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicePage, feature, faq, processStep, pricing, pricingTier, whyChooseUs],
}
