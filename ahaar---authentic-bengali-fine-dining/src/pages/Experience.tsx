import { motion } from "motion/react";
import { Camera, Music, Users, Sparkles } from "lucide-react";

const Experience = () => {
  const galleries = [
    { title: "The Zamindar Hall", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200" },
    { title: "Ganges View Terrace", image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200" },
    { title: "The Baithak Lounge", image: "https://images.unsplash.com/photo-1550966842-2849a220276c?q=80&w=1200" },
    { title: "The Spice Bar", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200" }
  ];

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.4em] uppercase text-[10px]"
          >
            A Cultural Odyssey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold mt-6 mb-10 leading-[1.1]"
          >
            The <span className="text-gradient italic">Ahaar Experience</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Step into a world where the opulence of the Raj-era Zamindars meets the soulful simplicity of a Bengali village. Every corner of Ahaar tells a story of heritage and hospitality.
          </motion.p>
        </div>

        {/* Ambiance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
          {galleries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm aspect-video"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-serif font-bold text-white tracking-wide">{item.title}</h3>
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">Explore Heritage Space</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-40">
          {[
            { icon: <Music size={28} />, title: "Sitar & Sarod", desc: "Live classical melodies that echo the soul of Bengal every evening." },
            { icon: <Sparkles size={28} />, title: "Royal Dining", desc: "Private 'Baithaks' for your most intimate and grand celebrations." },
            { icon: <Users size={28} />, title: "Utsav Events", desc: "Celebrating the spirit of 'Baro Mase Tero Parbon' (13 festivals in 12 months)." },
            { icon: <Camera size={28} />, title: "Visual Story", desc: "A curated gallery of Bengali art, artifacts, and culinary masterpieces." }
          ].map((feature, i) => (
            <div key={feature.title} className="text-center group">
              <div className="text-gold/60 mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-serif font-bold mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light px-4">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Private Dining CTA */}
        <div className="relative rounded-sm overflow-hidden border border-white/5 bg-white/[0.02] p-16 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bengal-orange/5 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 relative z-10 tracking-tight">Host Your Special Event</h2>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto text-lg relative z-10 font-light leading-relaxed">
            Whether it's a wedding, anniversary, or corporate gala, our team will ensure every detail is perfect, creating memories that last a lifetime.
          </p>
          <button className="btn-primary relative z-10">Inquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
