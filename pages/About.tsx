import React from 'react';
import { TEAM } from '../constants';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">About Denteek</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Philadelphia’s Trusted Private Dental Clinic. Building confident smiles since 2010.</p>
        </div>
      </div>

      {/* Story & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/dentaloffice/600/400" 
                alt="Clinic Interior" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Denteek was founded in 2010 with one vision – to make world-class dental care accessible, comfortable, and affordable for families in Philadelphia. Over the past 15 years, we have grown into one of the city’s most trusted private dental clinics.
              </p>
              
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver advanced, painless, and affordable dental care that improves lives and builds confident smiles.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="font-bold text-primary mb-3">Core Values</h4>
                <ul className="grid grid-cols-2 gap-2">
                   {["Patient-first approach", "Transparency & Ethics", "Safety & Hygiene", "Constant Innovation"].map((v, i) => (
                     <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {v}
                     </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Strip */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                 <Users size={40} className="text-primary mb-3" />
                 <h3 className="text-2xl font-bold">8,000+</h3>
                 <p className="text-gray-400">Patients Treated</p>
              </div>
              <div className="flex flex-col items-center">
                 <Award size={40} className="text-primary mb-3" />
                 <h3 className="text-2xl font-bold">Top Clinic 2024</h3>
                 <p className="text-gray-400">Philadelphia Awards</p>
              </div>
              <div className="flex flex-col items-center">
                 <ThumbsUp size={40} className="text-primary mb-3" />
                 <h3 className="text-2xl font-bold">98%</h3>
                 <p className="text-gray-400">Patient Satisfaction</p>
              </div>
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Experts</h2>
            <p className="text-gray-600">Experienced professionals dedicated to your smile.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((doctor, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition text-center group">
                <div className="h-64 overflow-hidden">
                   <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{doctor.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                     <p>Exp: {doctor.experience}</p>
                     <p>Specialty: {doctor.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Community Involvement</h2>
          <p className="text-gray-600">
            We regularly conduct free dental awareness camps, school outreach programs, and affordable treatment drives for low-income families. We believe a healthy smile should be accessible to everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;