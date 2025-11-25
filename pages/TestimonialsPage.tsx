import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  // Adding more testimonials for the full page view
  const allTestimonials = [
    ...TESTIMONIALS,
    { id: 5, name: "Jason Myers", text: "Had braces for 11 months and my teeth look perfect now.", rating: 5 },
    { id: 6, name: "Alina Gomez", text: "Affordable implant treatment and great payment plans.", rating: 5 },
    { id: 7, name: "Adrian Ford", text: "I finally enjoy smiling in photos again.", rating: 5 },
    { id: 8, name: "Nancy Paul", text: "Their staff helped me calm down despite my dental anxiety. Amazing experience.", rating: 5 },
    { id: 9, name: "Robert Finch", text: "Transparent pricing and fast treatment. Loved the experience.", rating: 5 },
    { id: 10, name: "Kimberly Adams", text: "Professional, clean, modern, and friendly. Best dental clinic I’ve visited.", rating: 5 },
    { id: 11, name: "Mark Stevens", text: "They handled my emergency tooth pain at 9 PM. Life savers!", rating: 5 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
       <div className="bg-white py-16 text-center border-b">
        <h1 className="text-4xl font-bold text-secondary mb-4">Patient Stories</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">See why thousands of Philadelphia families trust Denteek with their smiles.</p>
        <div className="mt-8 inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full text-yellow-700 font-bold border border-yellow-200">
          <Star fill="currentColor" size={20} />
          <span>4.9/5 Average Rating</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTestimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition duration-300 flex flex-col h-full">
              <div className="mb-4 text-primary opacity-30">
                <Quote size={40} />
              </div>
              <div className="flex text-amber-400 mb-4">
                 {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-6 border-t">
                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                   {t.name.charAt(0)}
                 </div>
                 <div>
                    <p className="font-bold text-secondary">{t.name}</p>
                    <p className="text-xs text-gray-500">Verified Patient</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;