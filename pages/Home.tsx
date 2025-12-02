import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS } from '../constants';
import AdCopyGenerator from '../components/AdCopyGenerator';

const Home: React.FC = () => {
  const featuredReview = REVIEWS.find(r => r.author === "Ashok Mandal") || REVIEWS[0];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/seed/digital/1920/1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium">
              <Star size={16} className="fill-current" />
              Rated {BUSINESS_INFO.rating} Stars by our clients
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Grow Your Brand With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Results-Driven</span> Marketing
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              {BUSINESS_INFO.tagline}. We combine creativity with data to deliver campaigns that actually convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Call Now
                <ArrowRight size={20} />
              </a>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
             <AdCopyGenerator />
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-12 bg-white border-b border-gray-100 -mt-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
           <div className="p-4">
              <div className="text-4xl font-extrabold text-primary mb-2">5.0</div>
              <div className="text-gray-600 font-medium">Google Rating</div>
           </div>
           <div className="p-4">
              <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
           </div>
           <div className="p-4">
              <div className="text-4xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support & Monitoring</div>
           </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Premium Digital Services</h3>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to dominate your market, all under one roof.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle size={16} className="text-green-500 mr-2" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-primary font-semibold hover:text-blue-700 flex items-center gap-1">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
            "{featuredReview.text}"
          </blockquote>
          <div className="font-bold text-lg text-primary">
            - {featuredReview.author}
          </div>
          <div className="text-sm text-gray-500 mt-1">Google Review</div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.089856738987!2d88.4236!3d26.7219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQzJzE4LjgiTiA4OMKwMjUnMjUuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="ClickMerge Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;