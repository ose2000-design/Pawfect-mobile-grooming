import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    initial: "S",
    quote: "My little Coco came back looking like absolute royalty. The care and attention they gave her was incredible!",
    stars: 5,
  },
  {
    name: "James T.",
    initial: "J",
    quote: "Velvet Paw Spa is the only place I trust with my Golden Retriever Max. He comes home so calm and happy every time.",
    stars: 5,
  },
  {
    name: "Maria G.",
    initial: "M",
    quote: "The best dog grooming experience we've ever had. They treated Bruno like family. Booking again next week!",
    stars: 5,
  },
  {
    name: "Lisa K.",
    initial: "L",
    quote: "From the moment we walked in, we felt welcome. Our puppy had her first groom here and absolutely loved it!",
    stars: 5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-dancing text-3xl text-black mb-2"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-montserrat font-extrabold text-4xl md:text-5xl text-black"
        >
          What Dog Parents Say
        </motion.h2>
      </div>

      <div className="relative px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl flex flex-col h-full"
                  data-testid={`card-testimonial-${i}`}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <span key={si} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-[#666666] italic text-base leading-relaxed flex-grow mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-montserrat font-bold text-primary text-lg">{t.initial}</span>
                    </div>
                    <span className="font-dancing text-xl text-[#1A1A1A]">{t.name}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          data-testid="button-testimonial-prev"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors z-10"
        >
          <ChevronLeft className="text-primary" size={24} />
        </button>
        <button
          onClick={scrollNext}
          data-testid="button-testimonial-next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-colors z-10"
        >
          <ChevronRight className="text-primary" size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            data-testid={`button-testimonial-dot-${i}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === selectedIndex ? "bg-black" : "bg-black/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
