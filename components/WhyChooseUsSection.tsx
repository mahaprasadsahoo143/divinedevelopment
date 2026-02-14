import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-clinic-sky/50 rounded-l-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-clinic-pink font-bold tracking-wide uppercase text-sm bg-pink-100 px-3 py-1 rounded-full">Why Choose Us</span>
            <h2 className="text-4xl font-heading font-black text-slate-800 mt-4 mb-6 leading-tight">
              Specialized Care <br/> For Special Needs
            </h2>
            <p className="text-slate-500 mb-8 text-lg font-medium">
              We are highly rated and recognized for our comprehensive pediatric care and early intervention programs in Bhadrak, Odisha.
            </p>
            
            <ul className="space-y-5">
              {[
                "Highly Rated Therapy Center",
                "Certified Therapists & Educators",
                "Personalized Early Intervention",
                "Safe & Supportive Environment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-white shadow-sm p-3 rounded-2xl border border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold shadow-md">✓</div>
                  <span className="text-slate-700 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Happy Families", val: 500, suffix: "+", color: "text-clinic-blue", bg: "bg-blue-50" },
              { label: "Expert Staff", val: 10, suffix: "+", color: "text-clinic-pink", bg: "bg-pink-50" },
              { label: "Success Stories", val: 200, suffix: "+", color: "text-clinic-yellow", bg: "bg-yellow-50" },
              { label: "Programs", val: 6, suffix: "+", color: "text-purple-500", bg: "bg-purple-50" },
            ].map((stat, idx) => (
              <div key={idx} className={`p-8 rounded-[35px] ${stat.bg} text-center transform hover:scale-105 transition-transform duration-300 shadow-sm border border-white`}>
                <div className={`text-4xl font-black ${stat.color} mb-2`}>
                  <Counter end={stat.val} duration={2000} />{stat.suffix}
                </div>
                <div className="text-slate-600 font-bold text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;