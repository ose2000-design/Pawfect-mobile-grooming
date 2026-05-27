import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-0 bg-black overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80"
            alt="Happy groomed dog at Velvet Paw Spa"
            className="w-full h-full object-cover"
            loading="lazy"
            data-testid="img-about"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-6 z-10">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="drop-shadow-xl">
              <rect x="2" y="14" width="76" height="12" rx="6" fill="#F5C518" />
              <circle cx="15" cy="8" r="6" fill="#F5C518" />
              <circle cx="35" cy="5" r="5" fill="#F5C518" />
              <circle cx="55" cy="5" r="5" fill="#F5C518" />
              <circle cx="72" cy="8" r="6" fill="#F5C518" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-16"
        >
          <p className="font-dancing text-3xl text-primary mb-3">Our Story</p>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Every Dog Deserves to Feel Beautiful
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            At Pawfect Mobile Grooming, we believe grooming is more than a trim — it's a wellness experience. We treat every dog with the same love and care as we would our own.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Our certified groomers create a calm, stress-free environment where your pet feels safe, pampered, and truly special. Because when your dog feels good, you feel good.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: "500+", label: "Happy Pups" },
              { value: "5★", label: "Rating" },
              { value: "100%", label: "Stress-Free" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-montserrat font-black text-3xl text-primary">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/profile.php?id=61589648219242"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit bg-primary text-black font-bold px-8 py-4 rounded-full text-base hover:bg-primary/90 transition-colors"
            data-testid="link-about-facebook"
          >
            Meet Us on Facebook
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
