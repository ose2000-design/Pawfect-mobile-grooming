import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

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

        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-[#F9F9F7] rounded-2xl md:max-w-sm w-full"
            data-testid="card-contact-hours"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-5">
              <Clock className="text-black" size={28} />
            </div>
            <h3 className="font-montserrat font-bold text-[#1A1A1A] text-lg mb-4">Opening Hours</h3>
            <div className="space-y-2 w-full">
              <div className="flex justify-between text-sm">
                <span className="text-[#666666]">Monday – Friday</span>
                <span className="font-semibold text-[#1A1A1A]">8:00am – 7:00pm</span>
              </div>
              <div className="border-t border-gray-100" />
              <div className="flex justify-between text-sm">
                <span className="text-[#666666]">Saturday</span>
                <span className="font-semibold text-[#1A1A1A]">8:00am – 5:00pm</span>
              </div>
              <div className="border-t border-gray-100" />
              <div className="flex justify-between text-sm">
                <span className="text-[#666666]">Sunday</span>
                <span className="font-semibold text-primary">By Appointment Only</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-[#F9F9F7] rounded-2xl md:max-w-sm w-full"
            data-testid="card-contact-social"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-5">
              <FaFacebook className="text-black" size={28} />
            </div>
            <h3 className="font-montserrat font-bold text-[#1A1A1A] text-lg mb-3">Find Us on Facebook</h3>
            <p className="text-[#666666] text-sm mb-5">Message us to book your dog's next grooming session</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61589648219242"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-primary font-bold px-6 py-3 rounded-full hover:bg-black/80 transition-colors"
              data-testid="link-contact-facebook"
            >
              <FaFacebook size={18} />
              Message Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
