import { motion } from "motion/react";
import { ChefHat, History, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.4em] uppercase text-[10px]"
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold mt-6 mb-10 leading-[1.1]"
          >
            A Legacy of <span className="text-gradient italic">Bengali Soul</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Founded in 1998, Ahaar began as a small family kitchen in the heart of North Kolkata. Our mission: to preserve the vanishing recipes of the "Thakurma's" (Grandmother's) kitchen and elevate them to the global fine-dining stage.
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200" 
                alt="Traditional Bengali Kitchen" 
                className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-sm hidden md:block">
              <div className="text-5xl font-serif font-bold text-gold mb-1">25+</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/40">Years of Culinary Heritage</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">The Art of 'Kosha' & 'Bhaapa'</h2>
            <p className="text-white/60 mb-8 leading-relaxed font-light text-base">
              In the heart of our kitchen, we honor the dual pillars of Bengali cooking: the intense, slow-braised richness of 'Kosha' and the delicate, aromatic subtlety of 'Bhaapa' (steaming).
            </p>
            <p className="text-white/60 mb-12 leading-relaxed font-light text-base">
              Our spices are stone-ground daily, our mustard oil is cold-pressed, and our fish is sourced from the early morning 'Bazaars' of the Ganges. We don't just cook; we narrate the story of a land defined by its rivers and its passion for the perfect meal.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div>
                <div className="text-gold font-serif text-4xl font-bold mb-2">150+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Heirloom Recipes</div>
              </div>
              <div>
                <div className="text-gold font-serif text-4xl font-bold mb-2">12k+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">Soulful Stories Shared</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
          {[
            { icon: <History size={28} />, title: "Heritage", desc: "Preserving centuries-old culinary traditions." },
            { icon: <ChefHat size={28} />, title: "Craftsmanship", desc: "Every dish is a masterpiece of balance and flavor." },
            { icon: <Award size={28} />, title: "Quality", desc: "Only the finest, locally sourced ingredients." },
            { icon: <Users size={28} />, title: "Community", desc: "A place where every guest is treated like family." }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-gold/60 mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-lg font-serif font-bold mb-4 tracking-wide">{value.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light px-4">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Chef Section */}
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-[10px]"
          >
            The Mastermind
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mt-6 mb-20">Meet Our Executive Chef</h2>
          <div className="max-w-5xl mx-auto border border-white/5 bg-white/[0.02] p-12 md:p-20 rounded-sm flex flex-col md:flex-row items-center gap-16">
            <div className="shrink-0 relative">
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28dea15ee548?q=80&w=600" 
                alt="Chef" 
                className="w-64 h-64 rounded-sm object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40" />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-serif font-bold text-gold mb-4 tracking-wide">Chef Anirban Chatterjee</h3>
              <p className="text-white/60 italic mb-8 leading-relaxed font-light text-lg">
                "Cooking is not just about ingredients; it's about the soul you pour into the pot. My goal is to make you feel the warmth of a Bengali home with every bite."
              </p>
              <p className="text-white/40 leading-relaxed font-light text-base">
                With over 20 years of experience in Michelin-starred kitchens across the globe, Chef Anirban returned to his roots to redefine Bengali cuisine for the global stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
