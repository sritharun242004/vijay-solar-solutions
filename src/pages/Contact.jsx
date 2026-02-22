import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Send,
  CheckCircle2,
  Instagram,
  MapPin,
} from "lucide-react";

const billRanges = [
  "Less than ₹1,000",
  "₹1,000 - ₹2,000",
  "₹2,000 - ₹5,000",
  "₹5,000 - ₹10,000",
  "More than ₹10,000",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    propertyType: "Home",
    billRange: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const body = new URLSearchParams({
      "form-name": "contact",
      ...formData,
    }).toString();

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* ─── MAIN CONTACT SECTION ─── */}
      <section className="md:min-h-screen flex items-center px-4 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-14"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-solar-navy mb-3">
              Book Your{" "}
              <span className="text-solar-green-dark">Free Site Visit</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">
              Fill in your details and our team will get back to you within 24
              hours to schedule a free site inspection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <div className="rounded-2xl p-6 md:p-8 bg-white border border-gray-100 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold text-solar-navy mb-6">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-solar-navy font-semibold text-base mb-0.5">
                        Phone
                      </h3>
                      <a
                        href="tel:9600660654"
                        className="text-solar-green-dark hover:underline transition-colors text-sm font-medium"
                      >
                        96006 60654
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-solar-navy font-semibold text-base mb-0.5">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/vijaysolarsolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-solar-green-dark hover:underline transition-colors text-sm"
                      >
                        @vijaysolarsolutions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-solar-navy font-semibold text-base mb-0.5">
                        Website
                      </h3>
                      <p className="text-gray-500 text-sm">
                        vijaysolarsolutions.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 md:p-8 bg-white border border-gray-100 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-solar-navy mb-4">
                  Why Book a Free Site Visit?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Accurate system sizing based on your roof",
                    "Clear quote with no hidden charges",
                    "Government subsidy eligibility check",
                    "Net meter & EB process guidance",
                    "No obligation — completely free",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-solar-green-dark flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <iframe
                  title="Vijay Solar Solutions Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3884.5!2d80.024864!3d13.15257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <div className="px-5 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-solar-green-dark flex-shrink-0" />
                  <p className="text-gray-500 text-sm">
                    Service available across Tamil Nadu and surrounding regions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="rounded-2xl p-6 md:p-8 bg-white border border-gray-100 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold text-solar-navy mb-6">
                  Request a Free Site Visit
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-solar-green/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-solar-green-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-solar-navy mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-500 text-base mb-6">
                      We've received your request. Our team will call you within
                      24 hours to schedule your free site visit.
                    </p>
                    <a
                      href="tel:9600660654"
                      className="inline-flex items-center gap-2 bg-solar-green-dark text-white font-bold rounded-full px-6 py-3 text-base hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      Call Us Now: 9600660654
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
                        {error}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-white border border-gray-200 rounded-xl text-base text-solar-navy focus:border-solar-green-dark focus:ring-1 focus:ring-solar-green-dark focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-white border border-gray-200 rounded-xl text-base text-solar-navy focus:border-solar-green-dark focus:ring-1 focus:ring-solar-green-dark focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-white border border-gray-200 rounded-xl text-base text-solar-navy focus:border-solar-green-dark focus:ring-1 focus:ring-solar-green-dark focus:outline-none transition-colors"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Property Type
                      </label>
                      <div className="flex gap-3">
                        {["Home", "Commercial"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, propertyType: type })
                            }
                            className={`flex-1 h-12 rounded-xl font-medium text-base border-2 transition-all duration-200 ${
                              formData.propertyType === type
                                ? "bg-solar-green-dark text-white border-solar-green-dark"
                                : "bg-white text-gray-600 border-gray-200 hover:border-solar-green-dark/50"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="billRange"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Monthly EB Bill Range
                      </label>
                      <select
                        id="billRange"
                        name="billRange"
                        value={formData.billRange}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-white border border-gray-200 rounded-xl text-base text-solar-navy focus:border-solar-green-dark focus:ring-1 focus:ring-solar-green-dark focus:outline-none transition-colors"
                      >
                        <option value="">Select your monthly bill range</option>
                        {billRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base text-solar-navy focus:border-solar-green-dark focus:ring-1 focus:ring-solar-green-dark focus:outline-none transition-colors resize-none"
                        placeholder="Any specific requirements or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-solar-yellow text-solar-navy font-bold rounded-xl px-4 py-3.5 hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] transition-all duration-300 flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Book Free Site Visit
                        </>
                      )}
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-400">or</span>
                      </div>
                    </div>

                    <a
                      href="tel:9600660654"
                      className="w-full flex items-center justify-center gap-2 bg-white border-2 border-solar-green-dark/30 text-solar-green-dark font-bold rounded-xl px-4 py-3.5 text-base hover:bg-solar-green/10 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      Call: 96006 60654
                    </a>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
