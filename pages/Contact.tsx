import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-lime-50 py-16 text-center text-slate-900 border-b">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">Book your appointment or get in touch for emergency care.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Visit Us</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Located near Brown Street main bus stop.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>{CONTACT_INFO.hours.weekdays}</p>
                    <p>{CONTACT_INFO.hours.saturday}</p>
                    <p className="text-red-500 font-medium">{CONTACT_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 w-full h-64 rounded-xl overflow-hidden shadow-inner relative">
                {/* Embed Google Map iframe simulation */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.6265147421!2d-75.28283592874776!3d40.00264429532828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                 <h3 className="text-xl font-bold mb-2">Request Sent!</h3>
                 <p>Thank you for contacting Denteek. We will get back to you within 12 hours to confirm your slot.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-4 text-green-800 underline">Book another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="(215)..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option value="">Select a service...</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Implants">Dental Implants</option>
                    <option value="Cosmetic">Cosmetic Dentistry</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Emergency">Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Any specific concerns?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-lime-700 transition flex items-center justify-center gap-2">
                  <Send size={18} /> Send Request
                </button>
                <p className="text-xs text-gray-500 text-center">We respect your privacy. Your data is secure.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;