import { motion } from "motion/react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Main Course");

  const categories = ["Starters", "Main Course", "Desserts", "Beverages"];

  const menuItems = {
    "Starters": [
      { 
        name: "Mochar Chop", 
        desc: "Hand-crafted banana flower croquettes, spiced with ginger and roasted coconut. A rustic delicacy from the heart of rural Bengal.", 
        price: "$12",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800"
      },
      { 
        name: "Fish Kabiraji", 
        desc: "A colonial-era classic: tender fish fillet enveloped in a delicate, lacy egg 'cobweb' crunch. The ultimate Kolkata snack.", 
        price: "$16",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=800"
      },
      { 
        name: "Aloo Posto Vada", 
        desc: "Crispy patties made with stone-ground poppy seeds and potatoes. A nutty, earthy tribute to Bengal's love for 'Posto'.", 
        price: "$10",
        image: "https://images.unsplash.com/photo-1626132646529-500637532537?q=80&w=800"
      },
      { 
        name: "Chicken Cutlet", 
        desc: "Minced chicken seasoned with secret 'bhaja moshla', breaded and fried. Served with sharp mustard 'Kasundi' and onion rings.", 
        price: "$14",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800"
      }
    ],
    "Main Course": [
      { 
        name: "Ilish Paturi", 
        desc: "The Queen of Fish: Hilsa marinated in a pungent mustard-chili paste, wrapped in banana leaf and slow-steamed to lock in the oils.", 
        price: "$28",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800"
      },
      { 
        name: "Kolkata Mutton Biryani", 
        desc: "A royal legacy: Fragrant Basmati rice, tender mutton, and the legendary slow-cooked potato, infused with saffron and 'Meetha Atar'.", 
        price: "$32",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800"
      },
      { 
        name: "Chingri Malaikari", 
        desc: "Jumbo Golda Chingri simmered in a silky coconut milk gravy. A sophisticated dish often served at Bengali weddings and celebrations.", 
        price: "$30",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800"
      },
      { 
        name: "Kosha Mangsho", 
        desc: "Velvety mutton slow-cooked for hours in a heavy iron 'kadai' until the gravy is dark, thick, and intensely flavorful. A Sunday ritual.", 
        price: "$26",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800"
      },
      { 
        name: "Dhokar Dalna", 
        desc: "Diamond-shaped lentil cakes fried and simmered in a ginger-cumin gravy. A masterpiece of 'Niramish' (vegetarian) Bengali cooking.", 
        price: "$18",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800"
      },
      { 
        name: "Bhetki Paturi", 
        desc: "Premium Barramundi fillets marinated in coconut and mustard, steamed in banana leaves. A lighter, yet equally flavorful alternative to Ilish.", 
        price: "$24",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800"
      }
    ],
    "Desserts": [
      { 
        name: "Mishti Doi", 
        desc: "The soul of Bengal: Thick, creamy, caramelized yogurt fermented in traditional earthen pots for that distinct earthy aroma.", 
        price: "$8",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?q=80&w=800"
      },
      { 
        name: "Baked Rosogolla", 
        desc: "Soft cottage cheese balls soaked in syrup, then baked in a rich, thickened milk (Rabri) until golden and bubbling.", 
        price: "$10",
        image: "https://images.unsplash.com/photo-1589113103503-49675c688c2b?q=80&w=800"
      },
      { 
        name: "Nolen Gurer Payesh", 
        desc: "A winter treasure: Rice pudding sweetened with the rare, aromatic liquid date palm jaggery (Nolen Gur).", 
        price: "$12",
        image: "https://images.unsplash.com/photo-1589113103503-49675c688c2b?q=80&w=800"
      },
      { 
        name: "Sandesh Platter", 
        desc: "A curated selection of artisanal Sandesh, from the soft 'Norom Paak' to the firm 'Kora Paak', hand-molded into traditional shapes.", 
        price: "$14",
        image: "https://images.unsplash.com/photo-1589113103503-49675c688c2b?q=80&w=800"
      }
    ],
    "Beverages": [
      { 
        name: "Aam Panna", 
        desc: "A cooling summer elixir made with roasted raw mangoes, black salt, and fresh mint. The perfect antidote to the tropical sun.", 
        price: "$6",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800"
      },
      { 
        name: "Gondhoraj Ghol", 
        desc: "Refreshing buttermilk infused with the zest and juice of the 'Gondhoraj' lime—Bengal's king of citrus with an intoxicating aroma.", 
        price: "$7",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800"
      },
      { 
        name: "Masala Chai", 
        desc: "Strong Assam tea brewed with fresh ginger, green cardamom, and cloves. Served in 'Bhar' (clay cups) for an authentic touch.", 
        price: "$5",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?q=80&w=800"
      },
      { 
        name: "Darjeeling First Flush", 
        desc: "The 'Champagne of Teas'. Delicate, floral, and light-bodied tea from the high-altitude gardens of Darjeeling.", 
        price: "$8",
        image: "https://images.unsplash.com/photo-1576091160550-2173bdd99625?q=80&w=800"
      }
    ]
  };

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
            Culinary Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold mt-6 mb-10 leading-[1.1]"
          >
            Our <span className="text-gradient italic">Exquisite Menu</span>
          </motion.h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-3.5 rounded-sm text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-gold text-black shadow-lg shadow-gold/10" 
                : "border border-white/5 text-white/40 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row gap-8 items-start border border-white/5 bg-white/[0.01] p-6 rounded-sm hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-full sm:w-40 h-40 shrink-0 overflow-hidden rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-3 border-b border-white/5 pb-3 group-hover:border-gold/40 transition-colors">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors tracking-wide">{item.name}</h3>
                  <span className="text-gold font-bold ml-4 text-lg">{item.price}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-light tracking-wide">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Note */}
        <div className="mt-32 border border-white/5 bg-white/[0.02] p-16 md:p-24 rounded-sm text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-wide">Chef's Special Tasting Menu</h3>
          <p className="text-white/40 mb-12 max-w-2xl mx-auto text-base font-light leading-relaxed">
            Experience the full spectrum of Bengali flavors with our curated 7-course tasting menu. A journey through the seasons and regions of Bengal.
          </p>
          <button className="btn-primary">Inquire About Tasting Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
