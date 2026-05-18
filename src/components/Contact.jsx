import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiLoader,
} from "react-icons/fi";

const socials = [
  { label: "Email", value: "nidhikurmi11@gmail.com", icon: FiMail },
  {
    label: "Location",
    value: "bhopal, Madhya Pradesh, India ",
    icon: FiMapPin,
  },
  { label: "Phone", value: "+91 9109943899", icon: FiPhone },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Get in touch
        </p>
        <h2 className="section-title gradient-text">Contact Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet rounded-full mx-auto mt-4" />
        <p className="section-subtitle mt-6">
          Have a project in mind or just want to say hi? My inbox is always
          open. 📬
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="glass-card rounded-2xl p-8 glow-border">
            <h3 className="text-xl font-bold text-white mb-6">
              Let's work together
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              I'm currently available for freelance projects and full-time
              opportunities. Let's build something amazing together!
            </p>

            <div className="space-y-5">
              {socials.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability card */}
          <div className="glass-card rounded-2xl p-6 border border-accent-cyan/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-accent-cyan font-semibold text-sm">
                Available Now
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              Ready to take on new projects and collaborate on exciting
              opportunities.
            </p>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 glow-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                    {field === "name" ? "Your Name" : "Email Address"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    placeholder={
                      field === "name" ? "John Doe" : "john@example.com"
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/80 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700/80 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Let's work together!"
                className="w-full px-4 py-3 rounded-xl bg-dark-800/80 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700/80 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-dark-800/80 border border-slate-700/50 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700/80 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                status === "success"
                  ? "bg-green-500/80 cursor-default"
                  : "bg-gradient-to-r from-primary-600 to-accent-violet hover:opacity-90 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-[1.01] active:scale-[0.99]"
              } disabled:cursor-not-allowed`}
            >
              {status === "idle" && (
                <>
                  <FiSend size={18} /> Send Message
                </>
              )}
              {status === "loading" && (
                <>
                  <FiLoader size={18} className="animate-spin" /> Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <FiCheckCircle size={18} /> Message Sent! 🎉
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
