import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Utensils, 
  ChefHat, 
  Leaf, 
  Coffee, 
  Star, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight,
  Menu as MenuIcon,
  X,
  MapPin,
  Phone,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Import Pages
import About from "./pages/About";
import MenuPage from "./pages/Menu";
import ExperiencePage from "./pages/Experience";
import Contact from "./pages/Contact";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled || pathname !== "/" ? "bg-dark-bg/95 backdrop-blur-2xl py-4 border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="container-wide px-6 md:px-12 flex justify-between items-center">
        <Link 
          id="nav-logo"
          to="/"
          className="text-2xl font-serif font-bold tracking-[0.3em] text-gold hover:text-gold-light transition-colors"
        >
          AHAAR
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 relative group ${
                  pathname === link.href ? "text-gold" : "text-white/50 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${pathname === link.href ? "scale-x-100" : ""}`} />
              </Link>
            </motion.div>
          ))}
          <Link id="nav-reserve-btn" to="/contact" className="btn-primary py-2.5 px-8 text-[10px]">
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle"
          className="md:hidden text-white/80 hover:text-gold transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-dark-bg/98 backdrop-blur-3xl overflow-hidden md:hidden border-b border-white/5 shadow-2xl"
          >
            <div className="flex flex-col items-center space-y-10 py-16">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  to={link.href} 
                  className={`text-xs uppercase tracking-[0.4em] font-bold transition-colors ${
                    pathname === link.href ? "text-gold" : "text-white/60 hover:text-gold"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link id="mobile-nav-reserve-btn" to="/contact" className="btn-primary px-10" onClick={() => setIsMobileMenuOpen(false)}>Reserve Table</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero-section" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop" 
          alt="Bengali Cuisine" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block"
        >
          Authentic Bengali Fine Dining
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight"
        >
          Ahaar – Taste the <br />
          <span className="text-gradient italic">Soul of Bengal</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          Embark on a culinary journey where centuries-old tradition meets contemporary elegance. Experience the rich heritage of Bengal on your plate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link id="hero-menu-btn" to="/menu" className="btn-primary w-full sm:w-auto">Explore Menu</Link>
          <Link id="hero-reserve-btn" to="/contact" className="btn-outline w-full sm:w-auto">Reserve Table</Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-3">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent" 
        />
      </motion.div>
    </section>
  );
};

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Ilish Paturi",
      desc: "The Queen of Fish: Hilsa marinated in pungent mustard-chili paste, wrapped in banana leaf and slow-steamed to perfection.",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop",
      price: "$28"
    },
    {
      name: "Kolkata Mutton Biryani",
      desc: "A royal legacy: Fragrant Basmati rice, tender mutton, and the legendary slow-cooked potato, infused with saffron and 'Meetha Atar'.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop",
      price: "$32"
    },
    {
      name: "Chingri Malaikari",
      desc: "Jumbo Golda Chingri simmered in a silky coconut milk gravy. A sophisticated dish often served at Bengali celebrations.",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop",
      price: "$30"
    },
    {
      name: "Kosha Mangsho",
      desc: "Velvety mutton slow-cooked for hours in a heavy iron 'kadai' until the gravy is dark, thick, and intensely flavorful.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
      price: "$26"
    }
  ];

  return (
    <section id="menu" className="section-padding bg-dark-bg">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold font-medium tracking-[0.3em] uppercase text-[10px]"
            >
              Signature Flavors
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold mt-4"
            >
              Featured Selection
            </motion.h2>
          </div>
          <Link 
            to="/menu"
            className="flex items-center text-gold font-medium gap-3 group text-xs uppercase tracking-widest"
          >
            View Full Menu <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-serif font-bold text-white">{dish.name}</h3>
                  <span className="text-gold text-sm font-medium">{dish.price}</span>
                </div>
                <p className="text-xs text-white/50 line-clamp-2 leading-relaxed font-light">
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section id="about" className="section-padding bg-dark-surface">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop" 
              alt="Restaurant Ambiance" 
              className="w-full aspect-[4/3] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-10 -right-10 glass p-10 rounded-sm hidden md:block"
          >
            <div className="text-5xl font-serif font-bold text-gold mb-1">25+</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-white/40">Years of Heritage</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-[10px]">Our Story</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-8 leading-tight">
            A Legacy of Taste, <br />
            Rooted in Tradition
          </h2>
          <p className="text-white/60 mb-6 leading-relaxed font-light text-base">
            Ahaar was born from a deep-seated passion for the culinary arts of Bengal. We believe that food is more than just sustenance; it's a bridge to our culture, a storyteller of our history, and a celebration of life.
          </p>
          <p className="text-white/60 mb-10 leading-relaxed font-light text-base">
            Our chefs meticulously source the finest ingredients, from the mustard fields of Bengal to the fresh catch of the Bay, ensuring every bite carries the authentic soul of our homeland.
          </p>
          <Link to="/about" className="btn-outline">Discover More</Link>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const features = [
    {
      icon: <Leaf className="text-gold/60" size={28} />,
      title: "Fresh Ingredients",
      desc: "Sourced daily from local farmers and authentic Bengali spice markets."
    },
    {
      icon: <ChefHat className="text-gold/60" size={28} />,
      title: "Expert Chefs",
      desc: "Mastering the delicate balance of spices passed down through generations."
    },
    {
      icon: <Utensils className="text-gold/60" size={28} />,
      title: "Authentic Taste",
      desc: "True flavors that transport you to the heart of Kolkata with every bite."
    },
    {
      icon: <Coffee className="text-gold/60" size={28} />,
      title: "Cozy Ambiance",
      desc: "A perfect blend of contemporary luxury and traditional warmth."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-bg">
      <div className="container-wide text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold font-medium tracking-[0.3em] uppercase text-[10px]"
        >
          The Ahaar Experience
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mt-4"
        >
          Excellence in Every Detail
        </motion.h2>
      </div>

      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-serif font-bold mb-4 tracking-wide">{feature.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light px-4">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ananya Chatterjee",
      role: "Food Critic",
      text: "The Ilish Paturi here is simply divine. It's rare to find such authentic flavors outside of a Bengali household. Ahaar is a gem.",
      rating: 5
    },
    {
      name: "Rahul Sharma",
      role: "Regular Guest",
      text: "The ambiance is as rich as the food. The Kolkata Biryani took me back to my childhood days. Highly recommended for fine dining.",
      rating: 5
    },
    {
      name: "Priya Das",
      role: "Travel Blogger",
      text: "A perfect fusion of tradition and luxury. The service is impeccable and the flavors are truly soulful. A must-visit!",
      rating: 4
    }
  ];

  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-wide text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold font-medium tracking-[0.3em] uppercase text-[10px]"
        >
          Guest Stories
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold mt-4"
        >
          Voices of Appreciation
        </motion.h2>
      </div>

      <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 border border-white/5 bg-white/[0.02] rounded-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className={i < review.rating ? "fill-gold text-gold" : "text-white/10"} />
                ))}
              </div>
              <p className="text-white/60 italic mb-8 leading-relaxed font-light text-sm">
                "{review.text}"
              </p>
            </div>
            <div>
              <div className="font-serif font-bold text-white tracking-wide">{review.name}</div>
              <div className="text-[9px] text-gold uppercase tracking-[0.2em] mt-1">{review.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="section-padding bg-dark-bg">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container-wide relative rounded-sm overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
            alt="Reservation" 
            className="w-full h-full object-cover grayscale-[40%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 py-24 px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Reserve Your Experience</h2>
          <p className="text-white/50 mb-12 text-base md:text-lg font-light leading-relaxed">
            Join us for an unforgettable evening of exquisite flavors and elegant ambiance. We recommend booking in advance to ensure your preferred time.
          </p>
          <Link to="/contact" className="btn-primary px-12 py-4 group inline-flex items-center gap-3">
            Book a Table
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-bg pt-32 pb-16 px-6 border-t border-white/5">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="lg:col-span-1">
          <div className="text-2xl font-serif font-bold text-gold mb-10 tracking-[0.3em]">AHAAR</div>
          <p className="text-white/40 text-sm leading-relaxed mb-12 font-light tracking-wide">
            Experience the soul of Bengal through contemporary fine-dining. Authentic flavors, elegant ambiance, and a cinematic culinary journey.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/30 hover:text-gold transition-all duration-300 transform hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/30 hover:text-gold transition-all duration-300 transform hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white/30 hover:text-gold transition-all duration-300 transform hover:-translate-y-1">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-10 text-lg tracking-wide">Navigation</h4>
          <ul className="space-y-5 text-white/40 text-[10px] uppercase tracking-[0.3em] font-semibold">
            <li><Link id="footer-link-home" to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link id="footer-link-menu" to="/menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
            <li><Link id="footer-link-about" to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link id="footer-link-experience" to="/experience" className="hover:text-gold transition-colors">Experience</Link></li>
            <li><Link id="footer-link-contact" to="/contact" className="hover:text-gold transition-colors">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-10 text-lg tracking-wide">Contact</h4>
          <ul className="space-y-8 text-white/40 text-sm font-light tracking-wide">
            <li className="flex items-start gap-5">
              <MapPin size={18} className="text-gold/40 shrink-0 mt-1" />
              <span className="leading-relaxed">12/A Park Street, Kolkata, <br />West Bengal 700016</span>
            </li>
            <li className="flex items-center gap-5">
              <Phone size={18} className="text-gold/40 shrink-0" />
              <span>+91 33 2244 5566</span>
            </li>
            <li className="flex items-center gap-5">
              <Utensils size={18} className="text-gold/40 shrink-0" />
              <span>reservations@ahaar.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-10 text-lg tracking-wide">Hours</h4>
          <ul className="space-y-5 text-white/40 text-sm font-light tracking-wide">
            <li className="flex justify-between border-b border-white/5 pb-3">
              <span>Mon - Thu</span>
              <span className="text-white/60 font-medium">12:00 - 22:30</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-3">
              <span>Fri - Sat</span>
              <span className="text-white/60 font-medium">12:00 - 23:30</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-white/60 font-medium">11:00 - 23:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[9px] uppercase tracking-[0.4em] font-medium">
        <p>&copy; {new Date().getFullYear()} Ahaar Restaurant Group. All rights reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutPreview />
      <Experience />
      <Testimonials />
      <CTA />
    </>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
