import { WorkItem, PackageItem, TestimonialItem, FAQItem } from './types';

// Using the specific attached images for the Selected Work section.

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'for-my-kidz',
    title: 'For My Kidz',
    category: 'Nonprofit • Brand Awareness',
    type: 'Interview Series',
    imageUrl: 'https://i.postimg.cc/Ls2f5vML/for-my-kidz.png', 
    imageAlt: 'For My Kidz interview snapshot on paper texture'
  },
  {
    id: 'terps',
    title: 'Terps Basketball',
    category: 'Sports • Promo',
    type: 'Social Hype',
    imageUrl: 'https://i.postimg.cc/TPfm1QXf/terps-promo.png', 
    imageAlt: 'Maryland Terrapins M Logo'
  },
  {
    id: 'govt',
    title: 'Govt Agency Work',
    category: 'Government • Internal Comms',
    type: 'Corporate',
    imageUrl: 'https://i.postimg.cc/4xzVXqqL/govt-work.png', 
    imageAlt: 'Government Work typography'
  },
  {
    id: 'acting-director',
    title: 'Acting Director Speaks',
    category: 'Public Sector • Announcement',
    type: 'Video Message',
    imageUrl: 'https://i.postimg.cc/Nj1mQSZY/acting-director.png', 
    imageAlt: 'Acting Director Tiffany Crowe Speaks title card'
  },
  {
    id: 'youth-etiquette',
    title: 'Youth Etiquette Banquet', 
    category: 'Community • Event',
    type: 'Partnership',
    imageUrl: 'https://i.postimg.cc/7Lw7hXyJ/youth-etiquette-banquet.png', 
    imageAlt: 'Youth Etiquette Banquet partnership card'
  },
  {
    id: 'christopher-mcdaniel',
    title: 'Christopher McDaniel',
    category: 'Founder Talk • Leadership',
    type: 'Profile',
    imageUrl: 'https://i.postimg.cc/zf8Wvp1G/pg-county-barbers-assn.png', 
    imageAlt: 'Christopher McDaniel Founder Talks overlay'
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'sprint',
    title: 'Content Sprint',
    subtitle: 'For rapid response & launches',
    description: 'A focused 2-week engagement to produce high-volume assets for a specific campaign launch, event, or reactive moment.',
    features: ['3-5 Short-form videos', 'Static social assets', '48-hour turnaround available'],
    cta: 'View Details',
    icon: 'bolt'
  },
  {
    id: 'partner',
    title: 'Monthly Partner',
    subtitle: 'Retainer for ongoing impact',
    description: 'Your dedicated content engine. We embed with your team to deliver a steady stream of strategic video content every month.',
    features: ['Monthly strategy sessions', '2 Shoot days / month', 'Unlimited revisions'],
    cta: 'Start Partnership',
    highlight: true,
    icon: 'star' 
  },
  {
    id: 'signature',
    title: 'Signature Story',
    subtitle: 'Mini-Docs & Brand Films',
    description: 'Deep-dive storytelling to humanize your mission. Perfect for fundraising galas, homepage headers, and donor impact reports.',
    features: ['Scripting & Storyboarding', 'Multi-day production', 'Cinema-grade color & sound'],
    cta: 'View Details',
    icon: 'movie_filter'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    vimeoId: '1145678511'
  },
  {
    id: 't2',
    vimeoId: '1014317977'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you travel for shoots?',
    answer: 'Absolutely. We are based in the DMV area but regularly deploy teams nationally for campaigns and events. Travel expenses are itemized in our proposals.'
  },
  {
    question: 'What is your typical turnaround time?',
    answer: "For 'Content Sprints', we can deliver first cuts within 48-72 hours. Standard documentary projects typically take 2-3 weeks for post-production."
  },
  {
    question: 'Can you help with distribution strategy?',
    answer: "Yes. While we focus on production, our 'Monthly Partner' packages include strategic advisory on where and how to post content for maximum engagement."
  }
];