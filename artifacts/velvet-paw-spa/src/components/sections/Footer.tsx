import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const quickLinks = ["Home", "Services", "Gallery", "Testimonials", "Contact"];
const serviceLinks = [
  "Full Grooming",
  "Bath & Blow Dry",
  "Nail Trimming",
  "Puppy Grooming",
  "Spa Experience",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const linkMap: Record<string, string> = {
    Home: "#",
    Services: "#services",
    Gallery: "#gallery",
    Testimonials: "#testimonials",
    Contact: "#contact",
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick("#"); }}
              className="flex items-baseline text-primary mb-4 flex-wrap"
              data-testid="link-footer-logo"
            >
              <span className="font-montserrat font-extrabold text-xl">Pawfect Mobile</span>
              <span className="font-dancing text-2xl ml-2">Grooming</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where grooming meets wellness. Premium mobile dog grooming for your beloved fur family.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-primary text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={linkMap[link]}
                    onClick={(e) => { e.preventDefault(); handleNavClick(linkMap[link]); }}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-primary text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-primary text-sm uppercase tracking-wider mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-5">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/profile.php?id=61589648219242"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="link-footer-facebook"
              >
                <FaFacebook className="text-black" size={18} />
              </motion.a>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">Mon–Fri: 8:00am – 7:00pm</p>
              <p className="text-gray-400 text-sm">Saturday: 8:00am – 5:00pm</p>
              <p className="text-gray-400 text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Pawfect Mobile Grooming. All rights reserved. | Crafted with ❤️ for dog lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
