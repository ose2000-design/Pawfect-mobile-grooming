import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const DOG_IMAGES = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&q=80",
  "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=900&q=80",
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=900&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&q=80",
];

export default function DogShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-[#FAFAF8] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-dancing text-3xl text-primary mb-2"
        >
          Meet Our Pups
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#1A1A1A]"
        >
          Our Happy Clients
        </motion.h2>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 px-8">
            {DOG_IMAGES.map((src, i) => (
              <div
                key={i}
                className={`flex-none w-[75vw] md:w-[38vw] lg:w-[28vw] transition-transform duration-500 ${
                  i === selectedIndex ? "scale-100" : "scale-95"
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl group">
                  <img
                    src={src}
                    alt={`Happy groomed dog ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    data-testid={`img-dog-showcase-${i}`}
                  />
                  {i === selectedIndex && (
                    <div className="absolute inset-0 ring-4 ring-primary/60 rounded-3xl pointer-events-none" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          data-testid="button-showcase-prev"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors z-10"
        >
          <ChevronLeft className="text-primary" size={24} />
        </button>
        <button
          onClick={scrollNext}
          data-testid="button-showcase-next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors z-10"
        >
          <ChevronRight className="text-primary" size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {DOG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            data-testid={`button-showcase-dot-${i}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === selectedIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
