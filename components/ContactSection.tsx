import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50 relative z-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-pink/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-clinic-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      
      {/* Floating Icons Background */}
      <div className="absolute top-20 left-10 text-clinic-yellow/20 animate-bounce duration-[3000ms]"><MessageCircle size={60} /></div>
      <div className="absolute bottom-40 right-10 text-clinic-blue/20 animate-pulse duration-[2000ms]"><Mail size={80} /></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Contact Info Column */}
        <div className="space-y-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-clinic-blue text-sm font-bold mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-clinic-blue animate-ping"></span>
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-800 leading-tight mb-4">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-blue to-clinic-pink">Help You</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-md">
              Reach out to our friendly team for appointments, queries, or just to say hello!
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Card 1 */}
            <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center text-clinic-pink flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <MapPin size={28} className="animate-bounce" style={{ animationDuration: '2s' }} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xl mb-1 group-hover:text-clinic-pink transition-colors">Visit Us</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Banth Chhak, Friend’s Colony, <br/>
                  Nehru Stadium Rd, Naripur, <br/>
                  Bhadrak, Odisha 756100
                </p>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-clinic-blue flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} className="animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xl mb-1 group-hover:text-clinic-blue transition-colors">Call Us</h4>
                <a href="tel:+917846968509" className="text-slate-600 font-bold text-lg hover:underline decoration-clinic-blue underline-offset-4 block mb-1">
                  +91 78469 68509
                </a>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-md">
                  Available for Appointments
                </span>
              </div>
            </div>

            {/* Contact Card 3 */}
            <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center text-yellow-600 flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <Clock size={28} className="group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xl mb-1 group-hover:text-yellow-600 transition-colors">Opening Hours</h4>
                <div className="space-y-1 text-slate-500 font-medium text-sm">
                  <div className="flex justify-between w-full min-w-[200px]"><span className="text-slate-700">Mon – Fri:</span> 9:00 AM – 7:00 PM</div>
                  <div className="flex justify-between w-full min-w-[200px]"><span className="text-slate-700">Saturday:</span> 9:00 AM – 2:00 PM</div>
                  <div className="flex justify-between w-full min-w-[200px]"><span className="text-red-400">Sunday:</span> Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="relative">
          {/* Decorative rotating border */}
          <div className="absolute -inset-4 bg-gradient-to-r from-clinic-blue via-purple-400 to-clinic-pink rounded-[3rem] opacity-30 blur-lg animate-pulse"></div>
          
          <div className="h-[600px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative group transform rotate-1 hover:rotate-0 transition-all duration-500">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.166699264157!2d86.5167!3d21.0567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be8c258055555%3A0x1234567890abcdef!2sBanth+Chhak%2C+Bhadrak%2C+Odisha!5e0!3m2!1sen!2sin!4v1633074412093!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Custom Overlay Card on Map */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-slide-up">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">Easy to Find!</p>
                <p className="text-xs text-slate-500">Located at Banth Chhak, Bhadrak</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Banth+Chhak,+Bhadrak,+Odisha" 
                target="_blank" 
                rel="noreferrer"
                className="ml-auto px-4 py-2 bg-clinic-blue text-white text-xs font-bold rounded-full hover:bg-blue-600 transition-colors shadow-md"
              >
                Directions
              </a>
            </div>
          </div>

          {/* Floating Sticker Element */}
          <div className="absolute -top-12 -right-8 w-32 h-32 animate-float" style={{ animationDuration: '6s' }}>
             <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="relative z-10 bg-white p-3 rounded-full shadow-2xl border-4 border-yellow-300 transform rotate-12 hover:rotate-0 transition-all cursor-pointer">
                   <div className="text-5xl text-center leading-tight">👋</div>
                   <div className="text-[10px] font-black text-center text-slate-700 uppercase tracking-widest mt-1">Say Hi!</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;