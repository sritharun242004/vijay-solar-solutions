import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Home as HomeIcon,
  Building2,
  Lightbulb,
  Camera,
  Shield,
  Award,
  Zap,
  CheckCircle2,
  Check,
  ClipboardCheck,
  Wrench,
  Wifi,
  FileCheck,
  HardHat,
  Activity,
  Gauge,
  Phone,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Rooftop Solar",
    description:
      "Power your home with clean energy. Reduce electricity bills with a customized rooftop solar system designed for your needs.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Building2,
    title: "Commercial Solar Installations",
    description:
      "Scale your business savings with high-capacity commercial solar systems designed for maximum ROI and efficiency.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Solar Lights",
    description:
      "Illuminate your premises with energy-efficient solar lighting solutions for gardens, streets, and compounds.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Camera,
    title: "Solar CCTV Systems",
    description:
      "24/7 surveillance powered by solar. No wiring hassles, no electricity costs. Ideal for remote locations.",
    color: "bg-purple-50 text-purple-600",
  },
];

const subsidyPlans = [
  {
    tier: "Starter",
    kw: "1kW",
    amount: "30,000",
    label: "one-time subsidy",
    popular: false,
    features: [
      "Ideal for 1–2 BHK homes",
      "Saves up to ₹1,000/month",
      "Tier 1 Mono-Perc Panels",
      "5 Year Free Maintenance",
      "Full Subsidy Filing Support",
      "Net Meter Setup Included",
    ],
    cta: "Choose Plan",
  },
  {
    tier: "Standard",
    kw: "2kW",
    amount: "60,000",
    label: "one-time subsidy",
    popular: false,
    features: [
      "Ideal for 2–3 BHK homes",
      "Saves up to ₹2,000/month",
      "Tier 1 High Efficiency Panels",
      "5 Year Free Maintenance",
      "Full Subsidy Filing Support",
      "Net Meter & EB Coordination",
    ],
    cta: "Choose Plan",
  },
  {
    tier: "Premium",
    kw: "3kW+",
    amount: "78,000",
    label: "one-time subsidy",
    popular: true,
    tagline: null,
    features: [
      "Ideal for 3+ BHK / villas",
      "Saves up to ₹3,500/month",
      "Tier 1 High Efficiency Panels",
      "5 Year Free Maintenance",
      "Full Subsidy Filing Support",
      "Smart Net Metering Ready",
    ],
    cta: "Get Started Now",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Authorized MNRE Empaneled Vendor",
    description: "Government-recognized and certified for solar installations across India.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Wrench,
    title: "End-to-End Installation",
    description:
      "From site visit to net meter activation — we handle everything so you don't have to.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FileCheck,
    title: "Complete Subsidy Handling",
    description:
      "We manage all government subsidy paperwork, follow-ups, and documentation for you.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Wifi,
    title: "Net Meter & EB Process",
    description:
      "Full support for net meter application and EB connection coordination from start to finish.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Shield,
    title: "Tier 1 Components Only",
    description:
      "Only the best panels, inverters, and mounting structures for lasting performance and reliability.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: CheckCircle2,
    title: "5-Year Free Maintenance",
    description:
      "Worry-free ownership with complimentary maintenance and monitoring for 5 full years.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Free Site Visit",
    description: "We inspect your roof, assess feasibility, and understand your energy needs.",
  },
  {
    icon: Gauge,
    title: "Load Assessment & Proposal",
    description: "Custom system design based on your consumption patterns and roof area.",
  },
  {
    icon: FileCheck,
    title: "Subsidy Documentation",
    description: "We handle all government paperwork, approvals, and subsidy processing.",
  },
  {
    icon: HardHat,
    title: "Professional Installation",
    description: "Certified team installs your system with quality materials and precision.",
  },
  {
    icon: Activity,
    title: "Testing & Monitoring",
    description: "Thorough testing, monitoring setup, and performance verification.",
  },
  {
    icon: Zap,
    title: "Net Meter Activation",
    description: "EB connection coordination and net meter go-live to start your savings.",
  },
];


function fireGreenConfetti(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  const defaults = { origin: { x, y }, disableForReducedMotion: true };
  const greens = ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#dcfce7", "#bbf7d0"];

  confetti({ ...defaults, particleCount: 80, spread: 70, startVelocity: 35, colors: greens });
  confetti({ ...defaults, particleCount: 50, spread: 100, startVelocity: 25, colors: greens, scalar: 0.9 });
  confetti({ ...defaults, particleCount: 30, spread: 120, startVelocity: 15, colors: greens, scalar: 0.7 });
}

export default function Home() {

  return (
    <div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden min-h-[85vh] md:h-screen flex items-center">
        <div
          className="absolute -inset-4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/HomeBanner.webp')",
          }}
        />
        <div className="absolute inset-0 bg-solar-navy/40" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-4xl mr-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Power Your Home and Business with{" "}
              <span className="text-solar-yellow">Solar</span>
            </h1>

            <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mx-auto md:mx-0 mb-2 leading-relaxed">
              MNRE Empaneled | Tier 1 Products | Net Meter & EB Support |
              5-Year Free Maintenance
            </p>
            <p className="text-solar-yellow font-semibold text-xs sm:text-sm md:text-base mb-6">
              One-time setup. 25–30 years of free electricity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-solar-yellow text-solar-navy font-bold rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] transition-all duration-300 inline-block text-center"
              >
                Book Free Site Visit
              </Link>
              <a
                href="https://wa.me/919600660654?text=Hi%20Vijay%20Solar%20Solutions%2C%20I%27d%20like%20to%20know%20more%20about%20solar%20installation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white font-bold rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 inline-block text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
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
              What We Offer
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              End-to-end solar solutions for every need — residential, commercial, lighting, and surveillance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((item, index) => (
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
                <div className="flex items-center gap-3 mb-2 md:block md:mb-5">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-solar-navy md:mt-5 group-hover:text-solar-green-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VERIFIED BY ─── */}
      <section className="md:min-h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gray-50/60">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-2 md:mb-3">
              Verified & Certified
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              We are officially recognized and empaneled by India's top energy bodies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* MNRE Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="bg-solar-navy/5 px-6 py-6 md:px-8 md:py-8 border-b border-gray-100 flex items-center justify-center">
                <img
                  src="/mnre-logo.png"
                  alt="MNRE - Ministry of New and Renewable Energy"
                  className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-solar-navy mb-2">MNRE Empaneled</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  Officially empaneled vendor under the Ministry of New and Renewable Energy, Government of India — the central authority governing all solar energy programs and subsidies nationwide.
                </p>
                <ul className="space-y-3">
                  {["Government-recognized installer", "Eligible for central subsidies", "Compliance with national standards"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-solar-green-dark/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-solar-green-dark" />
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* TEDA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="bg-solar-navy/5 px-6 py-6 md:px-8 md:py-8 border-b border-gray-100 flex items-center justify-center">
                <img
                  src="/teda-logo.png"
                  alt="TEDA - Tamil Nadu Energy Development Agency"
                  className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-solar-navy mb-2">TEDA Verified</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  Verified and approved by TEDA — Tamil Nadu's nodal agency for renewable energy development and implementation of state-level solar programs and incentives.
                </p>
                <ul className="space-y-3">
                  {["State-level verified vendor", "Tamil Nadu solar scheme eligible", "EB & net meter process approved"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-solar-green-dark/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-solar-green-dark" />
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── GOVERNMENT SUBSIDY ─── */}
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
              Government Subsidy
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mb-3">
              No hidden costs. Just high-performance energy. We handle the complete subsidy process for you.
            </p>
            <p className="text-sm md:text-base font-semibold text-solar-green-dark">
              Install once, enjoy 25–30 years of zero electricity bills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-end mb-10">
            {subsidyPlans.map((plan, index) => (
              <motion.div
                key={plan.kw}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: plan.popular ? -8 : -4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={(e) => fireGreenConfetti(e)}
                className={`relative rounded-2xl bg-white transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? "border-2 border-solar-green-dark shadow-xl ring-1 ring-solar-green-dark/20 z-10"
                    : "border border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-solar-green-dark text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg shadow-solar-green-dark/30">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Progressive top spacing: creates increasing height effect */}
                <div className={`p-5 md:pb-8 md:px-8 ${
                  index === 0 ? "md:pt-8" : index === 1 ? "md:pt-12" : "md:pt-16"
                }`}>
                  <p className="text-sm font-semibold text-gray-500 mb-3 md:mb-4">
                    {plan.tier} <span className="text-solar-navy font-bold">{plan.kw}</span>
                  </p>

                  <div className="mb-4 md:mb-6">
                    <span className="text-3xl md:text-5xl font-black text-solar-navy">
                      ₹{plan.amount}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 ml-2">{plan.label}</span>
                  </div>

                  <ul className="space-y-2.5 md:space-y-3.5 mb-6 md:mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-solar-green-dark/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-solar-green-dark" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    onClick={(e) => {
                      e.stopPropagation();
                      fireGreenConfetti(e);
                    }}
                    className={`block w-full py-3.5 rounded-xl font-bold text-base text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-solar-green-dark text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                        : "bg-white text-solar-navy border-2 border-gray-200 hover:border-solar-green-dark hover:text-solar-green-dark"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
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
              Why Vijay Solar
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              Trusted by homeowners and businesses across the region for reliable, quality solar installations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl p-5 md:p-7 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${item.color} flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-solar-navy mb-1.5 md:mb-2 group-hover:text-solar-green-dark transition-colors duration-300">
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

      {/* ─── HOW IT WORKS ─── */}
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
              How It Works
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              From site visit to activation — your solar journey in 6 simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl md:rounded-2xl p-5 md:p-7 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-solar-green-dark text-white flex items-center justify-center text-base font-bold group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-solar-green/20 flex items-center justify-center text-solar-green-dark group-hover:bg-solar-green-dark group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-solar-navy mb-2 group-hover:text-solar-green-dark transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GET A QUOTE ─── */}
      <section className="md:min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-3 md:mb-4">
            Get a Free Quote
          </h2>
          <p className="text-gray-500 text-sm md:text-lg mb-3 md:mb-4 leading-relaxed">
            System cost depends on roof area, load, and wiring conditions.
            We'll inspect your site and share a transparent, no-obligation quote.
          </p>
          <p className="text-sm md:text-base font-semibold text-solar-green-dark mb-6 md:mb-10">
            A single investment today. Decades of zero electricity bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-solar-yellow text-solar-navy font-bold rounded-full px-8 py-3.5 text-base hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] transition-all duration-300"
              >
                Book Free Site Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:9600660654"
                className="inline-flex items-center justify-center gap-2 text-solar-navy font-bold rounded-full px-8 py-3.5 text-base border-2 border-gray-200 hover:border-solar-green-dark transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                96006 60654
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
