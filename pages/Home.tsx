import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Clock, Shield, Smile, Calendar } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-fade-in">
             <img 
               src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
               alt="Modern Dental Office" 
               className="w-full h-full object-cover opacity-60 transition-opacity duration-[3000ms]" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in-up">
              Your Smile Deserves <br/> <span className="text-primary">Expert Care</span>
            </h1>
            <p 
              className="text-xl text-slate-600 mb-8 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              Modern, painless, and affordable dental treatments trusted by families across Philadelphia. Experience the Denteek difference.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            >
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-lime-700 transition shadow-lg hover:shadow-primary/50">
                Book Appointment Now
              </Link>
              <a href="tel:2155550123" className="inline-flex justify-center items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-white transition shadow-sm">
                Call: (215) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <ScrollReveal delay={0}>
              <p className="text-3xl font-bold text-slate-900">8+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-3xl font-bold text-slate-900">8,000+</p>
              <p className="text-sm text-gray-500">Smiles Treated</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-gray-500">Certified Doctors</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-3xl font-bold text-slate-900">98%</p>
              <p className="text-sm text-gray-500">Patient Satisfaction</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-lime-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Denteek?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine advanced technology with a compassionate approach to provide the best dental care in Philadelphia.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Care</h3>
                <p className="text-gray-600 mb-4">Latest dental technology & digital imaging for faster diagnosis and painless treatment.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
                <div className="w-12 h-12 bg-lime-100 text-primary rounded-lg flex items-center justify-center mb-6">
                  <Smile size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Patient-Focused</h3>
                <p className="text-gray-600 mb-4">No rushed consultations. Friendly doctors who explain every step for your comfort.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition h-full">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600 mb-4">No hidden costs, easy installment plans, and full insurance assistance available.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Services</h2>
              <p className="text-gray-600">Complete dental care under one roof.</p>
            </ScrollReveal>
            <Link to="/services" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              View All Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <Link to="/services" className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-lime-50 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition">
                      <service.icon size={24} />
                    </div>
                    <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
           <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-primary font-semibold">
               View All Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Testimonials - Switched to Light Theme */}
      <section className="bg-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <ScrollReveal>
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Our Patients Say</h2>
           </ScrollReveal>
           <div className="grid md:grid-cols-3 gap-8">
             {TESTIMONIALS.slice(0, 3).map((t, index) => (
               <ScrollReveal key={t.id} delay={index * 150}>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-lime-100 h-full hover:shadow-md transition">
                   <div className="flex text-amber-400 mb-4">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="italic text-slate-600 mb-6">"{t.text}"</p>
                   <div className="font-bold text-slate-900">— {t.name}</div>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-6">
             <ScrollReveal delay={100}>
               <div className="border-b border-gray-100 pb-4">
                 <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you accept insurance?</h3>
                 <p className="text-gray-600">Yes, we work with most dental insurance plans and also provide installment options.</p>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={200}>
               <div className="border-b border-gray-100 pb-4">
                 <h3 className="text-lg font-semibold text-slate-900 mb-2">Is dental treatment painful?</h3>
                 <p className="text-gray-600">No. We use modern, minimally invasive techniques for a nearly painless experience.</p>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={300}>
               <div className="border-b border-gray-100 pb-4">
                 <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you treat children?</h3>
                 <p className="text-gray-600">Yes, we offer complete family and pediatric dentistry.</p>
               </div>
             </ScrollReveal>
          </div>
          <div className="text-center mt-12">
             <Link to="/contact" className="px-8 py-3 bg-gray-50 text-slate-700 font-semibold rounded-lg hover:bg-gray-100 border border-gray-200 transition">
               Have more questions? Contact Us
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Ready for a healthier smile?</h2>
            <p className="text-lime-100">Schedule your visit online or call us today.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="px-6 py-3 bg-white text-primary font-bold rounded-lg shadow hover:bg-gray-100 transition">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;