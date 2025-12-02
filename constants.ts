import { Service, Review, TeamMember } from './types';

export const BUSINESS_INFO = {
  name: "ClickMerge",
  tagline: "Helping brands grow with results-driven digital marketing",
  address: "Champasari Rd, Opp. Kali Mandir, Indrapally, Champasari, Kadamtala, Siliguri, West Bengal 734003",
  plusCode: "PCV8+V6 Kadamtala",
  phone: "070299 62904",
  email: "contact@clickmerge.com",
  hours: "Open · Closes 7 PM",
  whatsappLink: "https://wa.link/clickmerge", // Placeholder
  rating: 5.0,
  reviewCount: 1
};

export const SERVICES: Service[] = [
  {
    id: 'smm',
    title: "Social Media Marketing",
    description: "Build a loyal community and engage your audience on platforms like Instagram, Facebook, and LinkedIn.",
    icon: "Users",
    benefits: ["Increased Brand Awareness", "Community Engagement", "Content Strategy"]
  },
  {
    id: 'ads',
    title: "Meta Ads / Google Ads",
    description: "High-ROI paid advertising campaigns designed to capture leads and drive immediate sales.",
    icon: "Target",
    benefits: ["Targeted Reach", "Measurable ROI", "Instant Traffic"]
  },
  {
    id: 'branding',
    title: "Branding & Creative Design",
    description: "Visual identity that speaks volumes. Logos, posts, and brand guidelines that stand out.",
    icon: "Palette",
    benefits: ["Consistent Identity", "Professional Appeal", "Memorable Visuals"]
  },
  {
    id: 'webdev',
    title: "Website Development",
    description: "Fast, responsive, and SEO-optimized websites that convert visitors into customers.",
    icon: "Code",
    benefits: ["Mobile Responsive", "SEO Friendly", "High Conversion"]
  },
  {
    id: 'seo',
    title: "SEO Optimization",
    description: "Rank higher on Google and attract organic traffic with our proven SEO strategies.",
    icon: "Search",
    benefits: ["Long-term Growth", "Organic Traffic", "Authority Building"]
  },
  {
    id: 'leads',
    title: "Lead Generation",
    description: "Targeted campaigns focused purely on getting you qualified leads for your business.",
    icon: "TrendingUp",
    benefits: ["Quality Leads", "Sales Pipeline Growth", "B2B & B2C Strategies"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Ashok Mandal",
    rating: 5,
    text: "Just come here and feel the premium services to grow your social media reach and growth. See the results and then compare.",
    date: "2 months ago"
  },
  {
    id: 'r2',
    author: "Priya Sharma",
    rating: 5,
    text: "ClickMerge transformed our online presence. Their team is professional, and the results speak for themselves.",
    date: "1 month ago"
  },
  {
    id: 'r3',
    author: "Rahul Verma",
    rating: 5,
    text: "Best digital marketing agency in Siliguri. Highly recommended for small businesses looking to scale.",
    date: "3 weeks ago"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://picsum.photos/seed/ceo/300/300"
  },
  {
    id: 't2',
    name: "Sneha Gupta",
    role: "Creative Director",
    image: "https://picsum.photos/seed/creative/300/300"
  },
  {
    id: 't3',
    name: "Amit Roy",
    role: "Lead Developer",
    image: "https://picsum.photos/seed/dev/300/300"
  }
];