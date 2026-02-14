import React from 'react';

const DoctorsSection: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Ananya Das",
      specialty: "Senior Speech Therapist",
      qual: "MASLP",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
      color: "bg-blue-50"
    },
    {
      name: "Mr. Rajesh Kumar",
      specialty: "Occupational Therapist",
      qual: "BOT, MOT",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
      color: "bg-pink-50"
    },
    {
      name: "Ms. Priya Singh",
      specialty: "Special Educator",
      qual: "B.Ed (Special Education)",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
      color: "bg-yellow-50"
    },
    {
      name: "Dr. Amit Sharma",
      specialty: "Physiotherapist",
      qual: "BPT, MPT",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
      color: "bg-purple-50"
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-clinic-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-clinic-blue font-bold tracking-wide uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-800 mt-3">Meet Our Specialists</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Dedicated professionals committed to your child's development and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className={`h-64 overflow-hidden relative ${doc.color}`}>
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{doc.name}</h3>
                <p className="text-clinic-blue font-bold text-sm mb-2">{doc.specialty}</p>
                <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-500 font-medium">
                  {doc.qual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;