import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-lime-50 py-16 text-center text-slate-900 border-b">
        <h1 className="text-4xl font-bold mb-4">Dental Health Blog</h1>
        <p className="text-xl text-gray-600">Tips, news, and advice from our experts.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
           {BLOG_POSTS.map((post) => (
             <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-lg hover:-translate-y-1 transition duration-300">
               <div className="h-48 overflow-hidden">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
               </div>
               <div className="p-6">
                 <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> Dr. Hughes</span>
                 </div>
                 <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h2>
                 <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                 <button className="text-primary font-semibold text-sm flex items-center hover:underline">
                    Read Article <ArrowRight size={16} className="ml-1" />
                 </button>
               </div>
             </article>
           ))}

           {/* Placeholder for more posts logic or pagination */}
           {[4, 5, 6].map((i) => (
              <article key={i} className="bg-gray-50 rounded-xl overflow-hidden border border-dashed border-gray-300 flex items-center justify-center p-10 text-center opacity-70">
                 <div>
                   <h3 className="text-lg font-semibold text-gray-400">Coming Soon</h3>
                   <p className="text-sm text-gray-400">More dental tips on the way...</p>
                 </div>
              </article>
           ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;