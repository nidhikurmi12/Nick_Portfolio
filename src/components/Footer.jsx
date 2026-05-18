import React from "react";
import { FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const socials = [
  { Icon: FiGithub, href: "https://github.com/nidhikurmi12", label: "GitHub" },
  {
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/nidhi-kurmi-7917-nk",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/nickkurmi/",
    label: "Instagram",
  },
  { Icon: FaWhatsapp, href: "https://wa.me/919109943899", label: "Whatsapp" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/50 py-16 px-6 md:px-12">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
                <FiCode size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Nidhi.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building beautiful digital experiences with modern web
              technologies. Let's create something amazing together.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-500/40 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Nidhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
