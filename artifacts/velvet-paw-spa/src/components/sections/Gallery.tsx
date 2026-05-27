import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&q=80",
  "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=80",
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=1200&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80",
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-dancing text-3xl text-primary mb-2"
        >
          Before &amp; After
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#1A1A1A] mb-4"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#666666] text-base max-w-md mx-auto"
        >
          Follow us on Facebook to see more transformations!
        </motion.p>
      </div>

      <div className="relative px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="flex-none w-[85vw] md:w-[48vw] lg:w-[32vw]">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-lg group">
                  <img
                    src={src}
                    alt={`Gallery photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    data-testid={`img-gallery-${i}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          data-testid="button-gallery-prev"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors z-10"
        >
          <ChevronLeft className="text-primary" size={24} />
        </button>
        <button
          onClick={scrollNext}
          data-testid="button-gallery-next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors z-10"
        >
          <ChevronRight className="text-primary" size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8 mb-10">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            data-testid={`button-gallery-dot-${i}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === selectedIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.facebook.com/profile.php?id=61589648219242"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-primary font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-colors"
          data-testid="link-gallery-facebook"
        >
          <FaFacebook size={20} />
          Follow Us on Facebook
        </motion.a>
      </div>
    </section>
  );
}
