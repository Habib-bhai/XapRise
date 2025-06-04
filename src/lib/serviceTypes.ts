export interface IServicePage {
  slug: { current: string; _type: 'slug' };
  title: string;
  description: string;
  heroImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  features: Feature[];
  processSteps: ProcessStep[];
  faqs: Faq[];
  pricing?: Pricing;
  benefits: string[];
  whyChooseUs: WhyChooseUs;
}

export interface Feature {
  title: string;
  description?: string;
  icon: 'code' | 'smartphone' | 'cloud' | 'database' | 'settings' | 'users' | 'shield' | 'zap' | 'target' | 'award' | 'clock';
}

export interface ProcessStep {
  step: string;
  title: string;
  description?: string;
  duration?: string;
}

export interface Faq {
  question: string;
  answer?: string;
}

export interface Pricing {
  tiers: PricingTier[];
  customAvailable: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  popular: boolean;
}

export interface WhyChooseUs {
  title: string;
  points: string[];
}