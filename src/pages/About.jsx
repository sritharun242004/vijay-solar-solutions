import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  HeartHandshake,
  Scale,
  ClipboardCheck,
  Wrench,
  FileCheck,
  HardHat,
  Gauge,
  Activity,
  Award,
  Home as HomeIcon,
  Building2,
  Lightbulb,
  Camera,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Tier 1 panels, inverters, and mounting structures only. No compromises on components that power your future.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear pricing, honest assessments, and no hidden charges. What we quote is what you pay — always.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "5-year free maintenance with ongoing monitoring and dedicated support after installation.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Scale,
    title: "Compliance",
    description:
      "Fully aligned with MNRE guidelines and EB process requirements. Government-recognized vendor.",
    color: "bg-purple-50 text-purple-600",
  },
];

const endToEndSteps = [
  { icon: ClipboardCheck, title: "Free Site Visit", text: "Roof inspection & energy assessment", color: "bg-amber-50 text-amber-600", border: "border-amber-200" },
  { icon: FileCheck, title: "Design & Proposal", text: "Custom design with transparent pricing", color: "bg-blue-50 text-blue-600", border: "border-blue-200" },
  { icon: FileCheck, title: "Subsidy Filing", text: "Complete government paperwork handled", color: "bg-emerald-50 text-emerald-600", border: "border-emerald-200" },
  { icon: HardHat, title: "Installation", text: "Professional setup with Tier 1 parts", color: "bg-purple-50 text-purple-600", border: "border-purple-200" },
  { icon: Gauge, title: "Net Meter & EB", text: "EB coordination & meter activation", color: "bg-rose-50 text-rose-600", border: "border-rose-200" },
  { icon: Activity, title: "Monitoring", text: "Real-time performance tracking", color: "bg-cyan-50 text-cyan-600", border: "border-cyan-200" },
  { icon: Wrench, title: "5-Year Support", text: "Free maintenance & ongoing care", color: "bg-orange-50 text-orange-600", border: "border-orange-200" },
];

const servicesDetailed = [
  {
    icon: HomeIcon,
    title: "Residential Rooftop Solar",
    description:
      "Customized solar systems for homes. Reduce your electricity bill by up to 90%. We handle everything from design to net meter activation.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Building2,
    title: "Commercial Solar Installations",
    description:
      "High-capacity systems for factories, offices, and commercial spaces. Maximize ROI with optimized system design and government incentives.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Solar Lights",
    description:
      "Energy-efficient solar street lights, garden lights, and compound lights. Zero electricity cost, minimal maintenance, automatic operation.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Camera,
    title: "Solar CCTV Systems",
    description:
      "Wireless solar-powered surveillance cameras. Perfect for farms, construction sites, and remote properties. No wiring needed.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="md:min-h-screen flex items-center justify-center px-4 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-solar-green-dark font-semibold tracking-wider uppercase mb-3">
                Who We Are
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-4 md:mb-5 leading-tight">
                Vijay Solar Solutions
              </h1>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-3 md:mb-4">
                We are an authorized <strong>MNRE empaneled vendor</strong> specializing in
                residential and commercial rooftop solar installations.
              </p>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-3 md:mb-4">
                From the first site visit to net meter activation, we provide
                complete <strong>end-to-end service</strong> — including full government
                subsidy processing.
              </p>
              <p className="text-sm text-gray-400 italic">
                Think of your rooftop as your most underutilized asset. We help you turn it into a power plant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                { icon: Shield, label: "MNRE Empaneled", sub: "Government-recognized vendor", color: "bg-amber-50 text-amber-600" },
                { icon: Award, label: "Tier 1 Components", sub: "Premium panels & inverters only", color: "bg-blue-50 text-blue-600" },
                { icon: Wrench, label: "5-Year Free Maintenance", sub: "Complete post-installation support", color: "bg-emerald-50 text-emerald-600" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl p-4 md:p-5 bg-white border border-gray-100 shadow-sm"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-solar-navy">{item.label}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE STAND FOR ─── */}
      <section className="md:min-h-screen flex items-center px-4 py-12 md:py-20 bg-gray-50/60">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-2 md:mb-3">
              What We Stand For
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              Our core values that drive every installation we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl p-4 md:p-7 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${item.color} flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-solar-navy mb-1 md:mb-2 group-hover:text-solar-green-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── END-TO-END FLOW + STATS ─── */}
      <section className="md:min-h-screen flex items-center px-4 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-2 md:mb-3">
              What We Handle End-to-End
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              You don't need to worry about anything. Here's our complete process from start to finish.
            </p>
          </motion.div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-8">
            {endToEndSteps.slice(0, 4).map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-xl md:rounded-2xl p-5 md:p-7 bg-white border ${step.border} shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-solar-navy mb-1.5 group-hover:text-solar-green-dark transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {endToEndSteps.slice(4).map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 md:p-7 bg-white border ${step.border} shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Step {index + 5}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-solar-navy mb-1.5 group-hover:text-solar-green-dark transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILED SERVICES ─── */}
      <section className="md:min-h-screen flex items-center px-4 py-12 md:py-20 bg-gray-50/60">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-2 md:mb-3">
              Our Services in Detail
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              Comprehensive solar solutions tailored to every need and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {servicesDetailed.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl p-5 md:p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${service.color} flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-solar-navy mb-1.5 md:mb-2 group-hover:text-solar-green-dark transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="md:min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-3 md:mb-4">
                Ready to Go Solar?
              </h3>
              <p className="text-gray-500 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Book a free site visit and let us design the perfect solar solution
                for your home or business. Complete subsidy support included.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-solar-yellow text-solar-navy font-bold rounded-full px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] transition-all duration-300"
                >
                  Book Free Site Visit
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div
                className={`flip-card w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[1.75/1] ${isFlipped ? "flipped" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front shadow-xl">
                    <img
                      src="/WhatsApp Image 2026-02-17 at 21.14.03.jpeg"
                      alt="Vijay Solar Solutions - Contact Card Front"
                      className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                    />
                  </div>
                  <div className="flip-card-back shadow-xl">
                    <img
                      src="/WhatsApp Image 2026-02-17 at 21.14.03 (1).jpeg"
                      alt="Vijay Solar Solutions - Contact Card Back"
                      className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-4 italic">
                Tap the card to flip
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
