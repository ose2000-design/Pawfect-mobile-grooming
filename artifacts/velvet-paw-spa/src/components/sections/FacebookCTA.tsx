import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const pawPositions = [
  { x: "10%", y: "20%", delay: 0, scale: 1.2 },
  { x: "80%", y: "15%", delay: 0.5, scale: 0.9 },
  { x: "20%", y: "70%", delay: 1, scale: 1.4 },
  { x: "75%", y: "65%", delay: 1.5, scale: 1.0 },
  { x: "50%", y: "85%", delay: 0.8, scale: 0.8 },
];

export default function FacebookCTA() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {pawPositions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl select-none pointer-events-none"
          style={{ left: p.x, top: p.y }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.15, 0.1, 0.15, 0],
            y: [-10, -30, -10, -30, -10],
          }}
          transition={{
            delay: p.delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🐾
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-dancing text-4xl text-primary mb-3"
        >
          Ready to Glow Up?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Ready For Your
          <br />
          <span className="text-primary">Dog's Glow-Up?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12"
        >
          Message us on Facebook to book your dog's next luxurious grooming session.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          href="https://www.facebook.com/profile.php?id=61589648219242"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-black font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:bg-primary/90 transition-colors"
          data-testid="link-cta-facebook"
        >
          <FaFacebook size={28} />
          Message Us on Facebook
        </motion.a>
      </div>
    </section>
  );
}
