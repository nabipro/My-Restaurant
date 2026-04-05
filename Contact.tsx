import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-[10px]"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold mt-6 mb-10 leading-[1.1]"
          >
            Contact <span className="text-gradient italic">Ahaar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            We'd love to hear from you. Whether you have a question about our menu, want to book an event, or just want to say hello.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-16">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-sm border border-white/5 bg-white/[0.02] flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3 tracking-wide">Our Location</h3>
                  <p className="text-white/40 leading-relaxed font-light">
                    12/A Park Street, Kolkata,<br />
                    West Bengal 700016, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-sm border border-white/5 bg-white/[0.02] flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-colors duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3 tracking-wide">Phone Number</h3>
                  <p className="text-white/40 leading-relaxed font-light">
                    Reservations: +91 33 2244 5566<br />
                    Events: +91 33 2244 5577
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-sm border border-white/5 bg-white/[0.02] flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-colors duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3 tracking-wide">Email Address</h3>
                  <p className="text-white/40 leading-relaxed font-light">
                    General: info@ahaar.com<br />
                    Reservations: book@ahaar.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-sm border border-white/5 bg-white/[0.02] flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-colors duration-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3 tracking-wide">Opening Hours</h3>
                  <p className="text-white/40 leading-relaxed font-light">
                    Mon - Sat: 12:00 PM - 11:30 PM<br />
                    Sunday: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-white/5 bg-white/[0.02] p-10 md:p-16 rounded-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-sm px-6 py-4 focus:outline-none focus:border-gold/40 transition-colors text-white placeholder:text-white/20 font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-sm px-6 py-4 focus:outline-none focus:border-gold/40 transition-colors text-white placeholder:text-white/20 font-light"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40 ml-1">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-sm px-6 py-4 focus:outline-none focus:border-gold/40 transition-colors appearance-none text-white font-light">
                    <option className="bg-[#0F1115]">General Inquiry</option>
                    <option className="bg-[#0F1115]">Table Reservation</option>
                    <option className="bg-[#0F1115]">Private Event</option>
                    <option className="bg-[#0F1115]">Feedback</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-sm px-6 py-4 focus:outline-none focus:border-gold/40 transition-colors resize-none text-white placeholder:text-white/20 font-light"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 group text-[11px] uppercase tracking-[0.3em] font-bold">
                Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-40 h-[500px] rounded-sm overflow-hidden border border-white/5 bg-white/[0.02] relative group">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-10 z-10">
            <div className="w-20 h-20 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform duration-700">
              <MapPin size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4 tracking-wide">Find Us on the Map</h3>
            <p className="text-white/40 max-w-md mx-auto font-light leading-relaxed">
              We are located in the heart of Kolkata's iconic Park Street, where tradition meets modern elegance.
            </p>
            <button className="btn-outline mt-10 px-12">Open in Google Maps</button>
          </div>
          <div className="absolute inset-0 bg-dark-bg/60 z-0" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000')] bg-cover bg-center grayscale opacity-20 group-hover:scale-105 transition-transform duration-[2000ms]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
