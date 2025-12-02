export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export enum NavigationLinks {
  HOME = '/',
  SERVICES = '/services',
  ABOUT = '/about',
  REVIEWS = '/reviews',
  CONTACT = '/contact',
}