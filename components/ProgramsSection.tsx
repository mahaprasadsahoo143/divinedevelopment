import React from 'react';
import { BookOpen, Smile, Sun, Music, ShieldPlus } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Early Learning",
      icon: <BookOpen size={28} />,
      color: "from-blue-400 to-blue-600",
      desc: "Foundation skills in literacy and numeracy through play-based modules."
    },
    {
      title: "Day Care Services",
      icon: <Sun size={28} />,
      color: "from-yellow-400 to-orange-500",
      desc: "Full-day care with nutritious meals, naps, and supervised play."
    },
    {
      title: "After School Support",
      icon: <Smile size={28} />,
      color: "from-purple-400 to-purple-600",
      desc: "Homework assistance and relaxing activities for school-aged children."
    },
    {
      title: "Activity & Skills",
      icon: <Music size={28} />,
      color: "from-pink-400 to-red-500",
      desc: "Music, dance, art, and physical education to develop talents."
    },
    {
      title: "Special Care",
      icon: <ShieldPlus size={28} />,
      color: "from-teal-400 to-emerald-600",
      desc: "Personalized attention for children with unique developmental needs."
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-semibold tracking-wide uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mt-2">Our Programs</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {programs.map((program, idx) => (
            <div 
              key={idx}
              className="w-full sm:w-[350px] bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.desc}</p>
              <a href="#booking" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-purple-600 transition-colors">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;