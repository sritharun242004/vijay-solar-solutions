import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Floating navbar container */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-3 md:pt-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-full"
        >
          <div className="pl-8 md:pl-12 pr-4 md:pr-5 py-1.5 md:py-2">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
                <img
                  src="/vijay-solar-logo.png"
                  alt="Vijay Solar Solutions"
                  className="h-10 md:h-12 w-auto"
                />
              </Link>

              {/* Desktop Navigation + CTA grouped together on the right */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                        isActive
                          ? "text-solar-green-dark"
                          : "text-gray-700 hover:text-solar-green-dark"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-solar-green-dark/10 border border-solar-green-dark/30 rounded-lg"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
                <a
                  href="tel:9600660654"
                  className="ml-2 flex items-center bg-solar-yellow text-solar-navy font-bold rounded-full px-6 py-2 hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] transition-all duration-300"
                >
                  Book Free Site Visit
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-3 -mr-2 text-solar-green-dark rounded-lg hover:bg-solar-green/50 active:bg-solar-green transition-colors touch-manipulation"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[min(300px,85vw)] bg-white z-50 md:hidden shadow-xl safe-right"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 safe-top">
                  <span className="text-lg font-bold text-solar-navy">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="p-3 -mr-2 text-gray-500 hover:text-solar-green-dark rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.href}
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-base font-medium transition-colors touch-manipulation ${
                            isActive
                              ? "text-solar-green-dark bg-solar-green/30 border-r-4 border-solar-green-dark"
                              : "text-gray-700 hover:text-solar-green-dark hover:bg-gray-50 active:bg-gray-100"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="p-4 border-t border-gray-200 safe-bottom space-y-3">
                  <a
                    href="tel:9600660654"
                    onClick={closeMenu}
                    className="block w-full text-center bg-solar-yellow text-solar-navy font-bold rounded-full px-6 py-4 hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] active:scale-[0.98] transition-all duration-300 touch-manipulation"
                  >
                    Call: 9600660654
                  </a>
                  <a
                    href="https://wa.me/919600660654?text=Hi%20Vijay%20Solar%20Solutions%2C%20I%27d%20like%20to%20know%20more%20about%20solar%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block w-full text-center bg-solar-green-dark text-white font-bold rounded-full px-6 py-4 active:scale-[0.98] transition-all duration-300 touch-manipulation"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
