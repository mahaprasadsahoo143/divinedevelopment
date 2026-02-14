import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';

type FormData = {
  parentName: string;
  childName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const BookingSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-[#2DAAE1] to-[#6DD5FA] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-800">Book a Visit</h2>
            <p className="text-slate-500 mt-2 font-medium">Schedule a consultation with our expert therapists.</p>
          </div>

          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Submitted!</h3>
              <p className="text-slate-500">We will call you shortly to confirm your time slot.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-6 text-clinic-blue font-bold hover:underline"
              >
                Book another visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Parent's Name</label>
                  <input
                    {...register("parentName", { required: "Parent name is required" })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                    placeholder="Your Name"
                  />
                  {errors.parentName && <span className="text-red-500 text-xs ml-1 font-semibold">{errors.parentName.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Child's Name</label>
                  <input
                    {...register("childName", { required: "Child name is required" })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                    placeholder="Child's Name"
                  />
                   {errors.childName && <span className="text-red-500 text-xs ml-1 font-semibold">{errors.childName.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]+$/, message: "Invalid phone number"} })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                    placeholder="+91 78469 68509"
                  />
                   {errors.phone && <span className="text-red-500 text-xs ml-1 font-semibold">{errors.phone.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                    placeholder="email@example.com"
                  />
                   {errors.email && <span className="text-red-500 text-xs ml-1 font-semibold">{errors.email.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Select Service</label>
                  <div className="relative">
                    <select
                      {...register("service", { required: "Please select a service" })}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none appearance-none transition-all font-medium"
                    >
                      <option value="">Select Service...</option>
                      <option value="speech-therapy">Speech Therapy</option>
                      <option value="occupational-therapy">Occupational Therapy</option>
                      <option value="special-education">Special Education</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="sensory-integration">Sensory Integration</option>
                      <option value="early-intervention">Early Intervention</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                  {errors.service && <span className="text-red-500 text-xs ml-1 font-semibold">{errors.service.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <Calendar size={18} />
                    </div>
                  </div>
                   {errors.date && <span className="text-red-500 text-xs ml-1 font-semibold">{errors.date.message}</span>}
                </div>
                
                <div className="space-y-2 md:col-span-2">
                   <label className="text-sm font-bold text-slate-700 ml-1">Message (Optional)</label>
                   <textarea
                     {...register("message")}
                     rows={3}
                     className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-clinic-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none font-medium"
                     placeholder="Briefly describe the child's needs..."
                   ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-clinic-blue to-[#4BC5F5] text-white font-black text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;