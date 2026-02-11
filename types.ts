export interface WorkItem {
  id: string;
  title: string;
  category: string;
  type: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  vimeoId: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}