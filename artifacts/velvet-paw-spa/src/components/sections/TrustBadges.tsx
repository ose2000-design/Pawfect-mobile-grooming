import { motion } from "framer-motion";
import { Award, Shield, Heart, Users } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Certified Groomers",
    desc: "Professionally trained and certified in all breed styles",
  },
  {
    icon: Shield,
    title: "Pet Safe Products",
    desc: "Only premium, non-toxic, hypoallergenic grooming products",
  },
  {
    icon: Heart,
    title: "Stress-Free Care",
    desc: "Calm, gentle environment tailored to your dog's needs",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    desc: "Trusted by hundreds of dog families in the community",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center group"
                data-testid={`card-trust-${i}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-[#1A1A1A] text-lg mb-2">{badge.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{badge.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
