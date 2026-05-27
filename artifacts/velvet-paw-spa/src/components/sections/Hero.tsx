import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://pixabay.com/videos/download/x-15305_medium.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-dancing text-primary text-3xl md:text-4xl mb-4"
          >
            Premium Dog Grooming
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6"
          >
            Where Grooming
            <br /> Meets Wellness
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium"
          >
            Luxury grooming experiences that leave tails wagging and paws glowing.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61589648219242"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-primary/90 transition-colors"
              data-testid="link-hero-book"
            >
              Book on Facebook
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-colors"
              data-testid="link-hero-services"
            >
              View Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={40} className="text-primary/80" />
      </motion.div>
    </section>
  );
}