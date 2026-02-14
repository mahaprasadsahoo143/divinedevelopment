import React from 'react';
import { Mic2, Activity, Brain, Puzzle, Users, HeartHandshake } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Speech Therapy",
      icon: <Mic2 size={30} />,
      color: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
      hoverBg: "hover:bg-blue-50",
      desc: "Helping children improve communication skills, language development, and speech clarity."
    },
    {
      title: "Occupational Therapy",
      icon: <Activity size={30} />,
      color: "bg-pink-100 text-pink-600",
      border: "border-pink-200",
      hoverBg: "hover:bg-pink-50",
      desc: "Building independence in daily activities, fine motor skills, and sensory processing."
    },
    {
      title: "Special Education",
      icon: <Brain size={30} />,
      color: "bg-yellow-100 text-yellow-600",
      border: "border-yellow-200",
      hoverBg: "hover:bg-yellow-50",
      desc: "Tailored educational support for children with learning disabilities, ADHD, and autism."
    },
    {
      title: "Physiotherapy",
      icon: <HeartHandshake size={30} />,
      color: "bg-purple-100 text-purple-600",
      border: "border-purple-200",
      hoverBg: "hover:bg-purple-50",
      desc: "Enhancing physical mobility, strength, and coordination through expert therapeutic exercises."
    },
    {
      title: "Sensory Integration",
      icon: <Puzzle size={30} />,
      color: "bg-red-100 text-red-600",
      border: "border-red-200",
      hoverBg: "hover:bg-red-50",
      desc: "Therapy designed to help children process and respond to sensory information effectively."
    },
    {
      title: "Early Intervention",
      icon: <Users size={30} />,
      color: "bg-green-100 text-green-600",
      border: "border-green-200",
      hoverBg: "hover:bg-green-50",
      desc: "Support services for infants and young children with developmental delays."
    },
  ];

  return (
    <section id="services" className="py-24 bg-clinic-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-clinic-blue font-bold tracking-wide uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Therapy Services</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-800 mt-3">Comprehensive Care</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">We offer specialized therapy programs tailored to the unique needs of every child.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`bg-white p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] border-2 ${service.border} ${service.hoverBg} group cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-clinic-blue transition-colors">{service.title}</h3>
              <p className="text-slate-500 mb-6 font-medium">{service.desc}</p>
              <a href="#booking" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-clinic-blue transition-colors">
                Book Session <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;