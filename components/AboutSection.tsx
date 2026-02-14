import React from 'react';
import { Heart, Activity, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-clinic-pink font-bold tracking-wide uppercase text-sm bg-pink-50 px-3 py-1 rounded-full">About Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-800 mt-3 mb-6">
            Empowering Children <br/>
            <span className="text-clinic-blue">With Every Step</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Divine Child Development Centre is a specialized therapy clinic dedicated to pediatric services including speech therapy, occupational therapy, and special education. We focus on early intervention for children with developmental delays, autism, and ADHD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart size={32} className="text-white" />,
              title: "Our Mission",
              desc: "To provide comprehensive, compassionate care that enhances the quality of life for children with developmental challenges through specialized therapeutic interventions.",
              color: "bg-clinic-pink",
              shadow: "shadow-pink-200"
            },
            {
              icon: <Activity size={32} className="text-white" />,
              title: "Our Vision",
              desc: "To be a leading center for pediatric development, helping every child reach their full potential through personalized and evidence-based therapies.",
              color: "bg-clinic-blue",
              shadow: "shadow-blue-200"
            },
            {
              icon: <ShieldCheck size={32} className="text-white" />,
              title: "Comprehensive Care",
              desc: "We offer an integrated approach combining Physiotherapy, Sensory Integration, and Special Education under one roof in Bhadrak, Odisha.",
              color: "bg-clinic-yellow",
              shadow: "shadow-yellow-200"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Blob for Hover */}
              <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full ${item.color} opacity-10 group-hover:scale-[10] transition-transform duration-700 ease-in-out`}></div>
              
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg ${item.shadow} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-4 relative z-10">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed relative z-10 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;