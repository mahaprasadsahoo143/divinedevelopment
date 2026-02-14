import React from 'react';
import { ArrowRight, Stethoscope } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-clinic-sky">
      {/* Background Animated Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-clinic-blue/10 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-clinic-pink/10 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-clinic-yellow/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-clinic-blue/20 shadow-sm text-clinic-blue font-bold text-sm animate-slide-up">
            <Stethoscope size={16} />
            <span>Highly Rated Specialized Therapy Clinic</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-slate-800 leading-[1.1]">
            Nurturing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-blue to-clinic-pink">
              Young Minds
            </span> <br />
            for a Better Future
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
            Divine Child Development Centre specializes in Speech Therapy, Occupational Therapy, and Special Education for children with developmental delays, autism, and ADHD.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#booking" className="group relative px-8 py-4 bg-clinic-blue text-white rounded-full font-bold shadow-lg shadow-blue-200 overflow-hidden hover:shadow-xl transition-all">
              <span className="relative z-10 flex items-center gap-2">
                Book a Visit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#259acb] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-clinic-blue rounded-full font-bold shadow-md hover:shadow-lg hover:bg-blue-50 transition-all border border-blue-100">
              Our Services
            </a>
          </div>
        </div>

        <div className="relative animate-float" style={{ animationDuration: '8s' }}>
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 group">
             {/* Using a high-quality placeholder for pediatric therapy */}
             <img 
               src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop" 
               alt="Therapist helping child"
               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
             />
             
             {/* Floating Badge 1 */}
             <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🧩</div>
                <div>
                  <p className="font-bold text-gray-800">Special Education</p>
                  <p className="text-xs text-gray-500">Expert Care</p>
                </div>
             </div>

             {/* Floating Badge 2 */}
             <div className="absolute top-12 -right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 bg-clinic-pink/20 rounded-full flex items-center justify-center text-2xl">🗣️</div>
                <div>
                  <p className="font-bold text-gray-800">Speech Therapy</p>
                  <p className="text-xs text-gray-500">Early Intervention</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="wave-divider text-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;