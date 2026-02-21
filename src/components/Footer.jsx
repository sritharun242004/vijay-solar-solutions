import { Link } from "react-router-dom";
import { Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-solar-green-dark via-solar-green-dark/90 to-emerald-400/80 text-white overflow-hidden safe-bottom">
      {/* Large watermark text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex justify-center">
        <div
          className="text-[10vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] font-black leading-none tracking-tight text-white text-center whitespace-nowrap"
          style={{ opacity: 0.15, transform: "translateY(20%)" }}
        >
          Vijay Solar
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img
                src="/vijay-solar-logo.png"
                alt="Vijay Solar Solutions"
                className="h-20 md:h-24 w-auto rounded-lg bg-white/90 p-1"
              />
            </div>
            <p className="text-white/90 text-base leading-relaxed max-w-md">
              Authorized MNRE empaneled vendor for residential & commercial
              rooftop solar installations. Tier 1 products, end-to-end service,
              and 5-year free maintenance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/90">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:9600660654"
                  className="hover:text-white transition-colors text-sm"
                >
                  96006 60654
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://instagram.com/vijaysolarsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm"
                >
                  @vijaysolarsolutions
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 md:mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-white font-bold mb-4 md:mb-6 text-lg">
              Services
            </h3>
            <ul className="space-y-1 mb-6 md:mb-8">
              <li className="text-white/90 text-sm py-1">Residential Rooftop Solar</li>
              <li className="text-white/90 text-sm py-1">Commercial Solar</li>
              <li className="text-white/90 text-sm py-1">Solar Lights</li>
              <li className="text-white/90 text-sm py-1">Solar CCTV</li>
            </ul>

            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Follow Us</h3>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/vijaysolarsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="tel:9600660654"
                  className="w-11 h-11 rounded-lg bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-white/90 text-xs md:text-sm text-center">
            &copy;{new Date().getFullYear()} Vijay Solar Solutions. All rights
            reserved.
          </p>
          <p className="text-white/70 text-xs text-center">
            vijaysolarsolutions.com
          </p>
        </div>
      </div>
    </footer>
  );
}
