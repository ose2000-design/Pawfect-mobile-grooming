import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    line1: "+1 (555) 123-4567",
    line2: "Call us to book your pup's appointment",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    line1: "hello@velvetpawspa.com",
    line2: "Email us anytime",
    href: "mailto:hello@velvetpawspa.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    line1: "Mon–Sat: 8am – 6pm",
    line2: "Sunday: Closed",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-dancing text-3xl text-primary mb-2"
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#1A1A1A]"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-[#F9F9F7] rounded-2xl"
                data-testid={`card-contact-${i}`}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-5">
                  <Icon className="text-black" size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-semibold text-[#1A1A1A] hover:text-primary transition-colors"
                    data-testid={`link-contact-${item.title.toLowerCase()}`}
                  >
                    {item.line1}
                  </a>
                ) : (
                  <p className="font-semibold text-[#1A1A1A]">{item.line1}</p>
                )}
                <p className="text-[#666666] text-sm mt-1">{item.line2}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.facebook.com/profile.php?id=61589648219242"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
            data-testid="link-contact-facebook"
          >
            <FaFacebook className="text-black" size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
            data-testid="link-contact-instagram"
          >
            <FaInstagram className="text-black" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
