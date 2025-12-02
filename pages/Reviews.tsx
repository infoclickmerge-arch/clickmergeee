import React from 'react';
import { REVIEWS } from '../constants';
import { Star, MessageSquare } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Client Success Stories</h1>
          <p className="text-xl text-gray-600">See what our partners say about working with ClickMerge.</p>
          
          <div className="mt-8 inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-4xl font-bold text-gray-900 mr-4">5.0</span>
            <div className="flex flex-col items-start">
               <div className="flex">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                 ))}
               </div>
               <span className="text-sm text-gray-500">Based on Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex mb-4">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                 ))}
              </div>
              <p className="text-gray-700 italic flex-grow mb-6">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div className="font-bold text-gray-900">{review.author}</div>
                <div className="text-xs text-gray-400">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review CTA */}
        <div className="bg-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
               <MessageSquare size={48} className="mx-auto mb-6 opacity-80" />
               <h2 className="text-3xl font-bold mb-4">Have you worked with us?</h2>
               <p className="text-blue-100 mb-8 max-w-xl mx-auto">We value your feedback. Please take a moment to rate your experience and help us improve.</p>
               <a 
                 href="#" 
                 className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                 onClick={(e) => { e.preventDefault(); alert("Redirecting to Google Reviews..."); }}
               >
                 Write a Review
               </a>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Reviews;