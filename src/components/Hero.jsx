import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const roles = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];
import resume from "../assets/nidhi_resume.pdf";
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const scrollDown = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    {
      Icon: FiGithub,
      href: "https://github.com/nidhikurmi12",
      label: "GitHub",
    },
    {
      Icon: FiLinkedin,
      href: "https://www.linkedin.com/in/nidhi-kurmi-7917-nk",
      label: "LinkedIn",
    },
    // { Icon: FiTwitter, href: "https://twitter.com/", label: "Twitter" },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/nickkurmi/",
      label: "Instagram",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/919109943899",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Spotlight glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20 text-primary-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          Available for freelance work
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          Hi, I'm <span className="gradient-text animate-glow">Nidhi</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8 h-10"
        >
          <span className="gradient-text-2">{displayed}</span>
          <span className="inline-block w-0.5 h-8 bg-accent-cyan ml-1 animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I craft beautiful, high-performance web experiences with modern
          technologies. Passionate about clean code, stunning design, and
          solving real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-base"
          >
            View My Work ✨
          </button>
          <a
            href={resume}
            download
            className="btn-secondary text-base flex items-center justify-center gap-2"
          >
            <FiDownload size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-500/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20 glow-border"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-3 max-w-lg mx-auto gap-6 mb-16"
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "40+", label: "Projects" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-4 text-center glow-border"
            >
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollDown}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary-400 transition-colors mx-auto"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
