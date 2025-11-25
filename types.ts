import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  fullDescription?: string;
  benefits?: string[];
  price?: string;
  faq?: { question: string; answer: string }[];
}

export interface Doctor {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}