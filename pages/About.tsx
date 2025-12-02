import React from 'react';
import { TEAM, BUSINESS_INFO } from '../constants';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">We Are <span className="text-primary">ClickMerge</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate team of digital strategists, creatives, and developers dedicated to growing your business in the digital age.
          </p>
        </div>
      </div>

      {/* Story & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in Siliguri, ClickMerge began with a simple idea: that digital marketing shouldn't be a black box. We wanted to provide transparent, results-oriented services that help local and global businesses thrive.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we are proud to be rated 5.0 stars by our clients, a testament to our commitment to excellence and our "client-first" philosophy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-primary"><Target /></div>
                    <h3 className="font-bold text-xl text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">To empower businesses with innovative digital strategies that drive measurable growth and sustainable success.</p>
             </div>
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gray-200 p-2 rounded-lg text-gray-800"><Lightbulb /></div>
                    <h3 className="font-bold text-xl text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600">To be the most trusted and impactful digital marketing partner for businesses in West Bengal and beyond.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">Why Choose ClickMerge?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">1</div>
                    <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
                    <p className="text-gray-400">We don't guess. We use data to make informed decisions that maximize your ROI.</p>
                </div>
                <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">2</div>
                    <h3 className="text-xl font-bold mb-3">Transparent Reporting</h3>
                    <p className="text-gray-400">You'll always know where your budget is going and exactly what results it's bringing.</p>
                </div>
                <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">3</div>
                    <h3 className="text-xl font-bold mb-3">Premium Support</h3>
                    <p className="text-gray-400">Our team is always just a call or message away to assist you with your needs.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{member.name}</h3>
                <p className="text-blue-300 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;