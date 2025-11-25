import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive dental solutions utilizing the latest technology for painless results.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid gap-10">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border p-8 md:p-10 flex flex-col md:flex-row gap-8">
              
              {/* Icon / Image Placeholder */}
              <div className="md:w-1/3">
                 <div className="bg-lime-50 rounded-xl h-64 flex items-center justify-center text-primary mb-4 md:mb-0">
                    <service.icon size={80} strokeWidth={1} />
                 </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2">
                   <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
                   <span className="bg-lime-100 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Available</span>
                </div>
                
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Benefits:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <Check size={16} className="text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t pt-6 mt-auto">
                   <div>
                      <p className="text-sm text-gray-500">Pricing Estimate</p>
                      <p className="text-xl font-bold text-primary">{service.price}</p>
                   </div>
                   <Link 
                     to="/contact" 
                     className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition w-full sm:w-auto text-center"
                   >
                     Book Consultation
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Insurance Note */}
      <div className="max-w-4xl mx-auto mt-16 px-4 text-center">
         <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Insurance & Payment</h3>
            <p className="text-blue-800">We accept most major insurance plans. Flexible financing options are available for major procedures.</p>
         </div>
      </div>
    </div>
  );
};

export default ServicesPage;