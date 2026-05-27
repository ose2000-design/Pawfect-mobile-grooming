import { motion } from "framer-motion";
import {
  Scissors,
  Droplets,
  Wrench,
  Ear,
  Smile,
  Bug,
  Baby,
  Wind,
  Sparkles,
  Star,
  Heart,
  Zap,
} from "lucide-react";

const services = [
  { icon: Scissors, name: "Full Grooming Package", desc: "Complete top-to-tail transformation for your pup" },
  { icon: Droplets, name: "Luxury Bath & Blow Dry", desc: "Deep cleanse with premium spa-grade products" },
  { icon: Wrench, name: "Nail Trimming", desc: "Safe, stress-free nail care by certified groomers" },
  { icon: Ear, name: "Ear Cleaning", desc: "Gentle ear hygiene maintenance to prevent infections" },
  { icon: Smile, name: "Teeth Brushing", desc: "Fresh breath and healthy gums for a happier pup" },
  { icon: Bug, name: "Flea & Tick Treatment", desc: "Premium protection treatments that really work" },
  { icon: Baby, name: "Puppy Grooming", desc: "Gentle first grooming experiences for little ones" },
  { icon: Wind, name: "De-shedding Treatment", desc: "Dramatically reduce shedding with our special treatment" },
  { icon: Scissors, name: "Fur Styling & Trimming", desc: "Custom breed cuts that make your dog shine" },
  { icon: Heart, name: "Paw Balm Treatment", desc: "Soothe and protect sensitive paw pads naturally" },
  { icon: Sparkles, name: "Skin & Coat Therapy", desc: "Nourishing treatments for a glossy, healthy coat" },
  { icon: Star, name: "Doggy Spa Experience", desc: "The ultimate relaxation package — pure luxury" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F9F9F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-dancing text-3xl text-primary mb-2"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#1A1A1A]"
          >
            Our Services
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-transparent hover:border-primary/30 transition-all duration-300 flex flex-col"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-[#1A1A1A] text-base mb-2 leading-snug">{service.name}</h3>
                <p className="text-[#666666] text-sm leading-relaxed flex-grow">{service.desc}</p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.facebook.com/profile.php?id=61589648219242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-primary text-black text-sm font-bold px-4 py-2 rounded-full text-center hover:bg-primary/90 transition-colors"
                  data-testid={`link-service-cta-${i}`}
                >
                  Book Now
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
