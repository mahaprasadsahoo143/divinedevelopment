import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sanjib Mishra",
    text: "Divine Child Development Centre has transformed my son's life. The speech therapy sessions have helped him communicate so much better.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Das",
    text: "The occupational therapists are very patient and skilled. My daughter enjoys her sessions and we've seen great improvement in her motor skills.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Rahul Mohanty",
    text: "Excellent facility in Bhadrak for special education. The staff is supportive and the environment is very child-friendly.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Anjali Sahoo",
    text: "We are very grateful for the early intervention program. It gave us the right guidance at the right time for our child's development.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-clinic-sky relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-20 left-20 text-9xl text-clinic-blue/5 opacity-50 font-serif">“</div>
         <div className="absolute bottom-20 right-20 text-9xl text-clinic-pink/5 opacity-50 font-serif">”</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-clinic-blue font-bold tracking-wide uppercase text-sm bg-white px-3 py-1 rounded-full shadow-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-800 mt-3">What Parents Say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[450px] md:min-h-[400px] flex items-center justify-center">
            {testimonials.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform
                    ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'}
                  `}
                >
                  <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-xl text-center mx-4 mt-4 border border-white/50 relative">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    <div className="mt-8 mb-6">
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={24} className="text-clinic-yellow fill-current" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed italic">
                        "{item.text}"
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{item.name}</h4>
                      <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Parent</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-6 mt-10">
            <button 
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-white text-slate-400 shadow-md hover:bg-clinic-blue hover:text-white transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-clinic-blue w-10' : 'bg-slate-200 w-3 hover:bg-blue-300'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-white text-slate-400 shadow-md hover:bg-clinic-blue hover:text-white transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;