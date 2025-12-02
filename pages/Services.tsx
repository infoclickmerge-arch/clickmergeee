import React from 'react';
import { SERVICES } from '../constants';
import { Check, Users, Target, Palette, Code, Search, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={32} />,
  Target: <Target size={32} />,
  Palette: <Palette size={32} />,
  Code: <Code size={32} />,
  Search: <Search size={32} />,
  TrendingUp: <TrendingUp size={32} />,
};

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Premium Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business in the modern landscape.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white p-2 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                    src={`https://picsum.photos/seed/${service.id}/600/400`} 
                    alt={service.title} 
                    className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                {iconMap[service.icon]}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description} We customize this strategy to fit your unique business goals, ensuring maximum impact.
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Key Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="bg-green-100 rounded-full p-1 mr-3 text-green-600">
                        <Check size={12} />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose ClickMerge for {service.title}?</h4>
                <p className="text-sm text-gray-600">
                    Our team uses data-backed strategies and the latest tools to ensure your {service.title.toLowerCase()} campaigns deliver tangible ROI, not just vanity metrics.
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to scale your business?</h2>
          <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help you achieve your digital marketing goals.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;