import { 
  Stethoscope, 
  Smile, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Phone,
  Activity,
  HeartPulse
} from 'lucide-react';
import { Service, Doctor, Testimonial, BlogPost } from './types';

export const CONTACT_INFO = {
  phone: "(215) 555-0123",
  address: "212 Brown Street, Philadelphia, PA",
  email: "care@denteek.com",
  hours: {
    weekdays: "Mon–Fri: 9 AM – 7 PM",
    saturday: "Saturday: 10 AM – 5 PM",
    sunday: "Sunday: On-call emergencies"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'implants',
    title: "Dental Implants",
    description: "Restore your missing teeth with natural-looking and long-lasting dental implants.",
    icon: Activity,
    price: "Starting at $1,200",
    benefits: ["Functions like a natural tooth", "No food restrictions", "Prevents bone loss", "20+ years lifespan"],
    faq: [
        { question: "How long do implants last?", answer: "With proper care, 20 years or more." },
        { question: "Are implants painful?", answer: "We use anesthesia and advanced techniques to ensure comfort." }
    ]
  },
  {
    id: 'cosmetic',
    title: "Cosmetic Dentistry",
    description: "Teeth veneers, cosmetic bonding, and complete smile makeovers.",
    icon: Smile,
    price: "Custom per treatment"
  },
  {
    id: 'root-canal',
    title: "Root Canal Treatment",
    description: "Painless, fast, and advanced RCT with 1500+ successful cases.",
    icon: Stethoscope,
    price: "Insurance accepted"
  },
  {
    id: 'orthodontics',
    title: "Orthodontics & Braces",
    description: "Invisalign, metal braces, and ceramic options for children & adults.",
    icon: ShieldCheck,
    price: "Payment plans available"
  },
  {
    id: 'whitening',
    title: "Teeth Whitening",
    description: "Instant whitening with LED and safe bleaching agents.",
    icon: Zap,
    price: "$199 Special Offer"
  },
  {
    id: 'emergency',
    title: "Emergency Dental Care",
    description: "Same-day pain relief for breaks, infections, or sudden injuries.",
    icon: HeartPulse,
    price: "Urgent care rates apply"
  }
];

export const TEAM: Doctor[] = [
  {
    name: "Dr. Leonard Hughes",
    role: "Lead Dentist",
    experience: "18+ years",
    specialty: "Cosmetic & Restorative",
    image: "https://picsum.photos/seed/doctor1/300/300"
  },
  {
    name: "Dr. Emily Carter",
    role: "Orthodontist",
    experience: "12+ years",
    specialty: "Invisalign & Braces",
    image: "https://picsum.photos/seed/doctor2/300/300"
  },
  {
    name: "Dr. Raj Patel",
    role: "Endodontist",
    experience: "15+ years",
    specialty: "Root Canal Specialist",
    image: "https://picsum.photos/seed/doctor3/300/300"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah Williams", text: "I used to fear dentists, but Denteek made my root canal painless and stress-free. Highly recommend!", rating: 5 },
  { id: 2, name: "Steven Miller", text: "Got my dental implants here. Great care, fair pricing, and fantastic results.", rating: 5 },
  { id: 3, name: "Mary Parker", text: "Best cosmetic dental clinic in Philadelphia. I got veneers and the transformation is unbelievable.", rating: 5 },
  { id: 4, name: "Rita Dawson", text: "Got my dental veneers here and the transformation is unreal. Dr. Hughes is truly an artist.", rating: 5 },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: "Are Dental Implants Worth It?", summary: "Costs, benefits, and lifetime value explained.", date: "Oct 12, 2024", image: "https://picsum.photos/seed/dental1/600/400" },
  { id: 2, title: "Overcoming Dental Anxiety", summary: "How modern techniques make dentistry painless.", date: "Nov 05, 2024", image: "https://picsum.photos/seed/dental2/600/400" },
  { id: 3, title: "Teeth Whitening vs Veneers", summary: "Which cosmetic option is right for you?", date: "Dec 01, 2024", image: "https://picsum.photos/seed/dental3/600/400" },
];