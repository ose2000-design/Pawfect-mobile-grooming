import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#");
            }}
            className="flex items-baseline text-primary"
            data-testid="link-logo"
          >
            <span className="font-montserrat font-extrabold text-2xl tracking-tight">
              Pawfect Mobile
            </span>
            <span className="font-dancing text-3xl ml-2">Grooming</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white hover:text-primary transition-colors text-sm font-medium"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61589648219242"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black font-bold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              data-testid="button-nav-book"
            >
              Book on Facebook
            </motion.a>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="button-menu-open"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-primary"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="button-menu-close"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-white text-2xl font-montserrat font-bold hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.facebook.com/profile.php?id=61589648219242"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black text-xl font-bold px-8 py-3 rounded-full mt-4"
              >
                Book on Facebook
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}