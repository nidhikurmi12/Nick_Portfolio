import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

const categories = ["All", "Web", "Mobile", "Ui"];
import biobridge from "../assets/biobridge.png";
import farmer from "../assets/farmer.png";
import neoborly from "../assets/neoborly.png";
import realtrust from "../assets/realtrust.png";
import doctor from "../assets/doctor.jpeg";
import grocito from "../assets/grocito.png";
import beauty from "../assets/beauty.png";
import Random from "../assets/Random.png";
import Vuejs from "../assets/vuejs.png";
import taskSetu from "../assets/tasksetu.png";
import mixoAds from "../assets/mixoads.png";
const projects = [
  {
    title: "BioBridge — Project Management",
    description:
      "A full-stack project management platform with real-time collaboration, Kanban boards, and team analytics built with Next.js and WebSockets.",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
    category: "Web",
    stars: 128,
    demo: "https://bio-graphic-front.vercel.app/",
    repo: "#",
    gradient: "from-primary-600 to-accent-violet",
    emoji: biobridge,
  },
  {
    title: "FRESHLYROOTED — E-commerce App",
    description:
      "Feature-rich e-commerce app with AI-powered recommendations, Stripe payments, and an admin dashboard with rich analytics.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    category: "Web",
    stars: 95,
    demo: "https://new-farmer.onrender.com",
    repo: "#",
    gradient: "from-accent-cyan to-primary-500",
    emoji: farmer,
  },
  {
    title: "NeoBorly",
    description:
      "An AI-powered conversational assistant with voice input, streaming responses, context memory, and multi-model support.",
    tags: ["Python", "FastAPI", "OpenAI", "React", "WebRTC"],
    category: "Web",
    stars: 213,
    demo: "https://naeborly.onrender.com/",
    repo: "#",
    gradient: "from-accent-violet to-accent-pink",
    emoji: neoborly,
  },
  {
    title: "RealTrust — PROPerty Rental Platform",
    description:
      "Cross-platform mobile fitness tracker with workout plans, nutrition logging, progress charts, and social challenges.",
    tags: ["React Native", "Expo", "Firebase", "Redux Toolkit"],
    category: "Web",
    stars: 76,
    demo: "https://realtrustweb.vercel.app/",
    repo: "#",
    gradient: "from-green-500 to-accent-cyan",
    emoji: realtrust,
  },
  {
    title: "Doctor Appointment Booking System",
    description:
      "A blazing-fast blog platform with MDX support, dark/light mode, newsletter integration, and SEO optimization.",
    tags: ["Next.js", "MDX", "Contentlayer", "Tailwind"],
    category: "Web",
    stars: 54,
    demo: "",
    repo: "#",
    gradient: "from-orange-500 to-accent-violet",
    emoji: doctor,
  },
  {
    title: "grocito — Grocery Delivery App",
    description:
      "A machine learning web app that classifies images in real-time using a custom-trained CNN model with a beautiful drag-and-drop UI.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Canvas"],
    category: "Ui",
    stars: 162,
    demo: "https://venerable-banoffee-08ebe2.netlify.app/",
    repo: "#",
    gradient: "from-pink-500 to-primary-600",
    emoji: grocito,
  },
  {
    title: "BeautyPlus — makeup try-on ",
    description:
      "A machine learning web app that classifies images in real-time using a custom-trained CNN model with a beautiful drag-and-drop UI.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Canvas"],
    category: "Ui",
    stars: 162,
    demo: "https://euphonious-squirrel-331641.netlify.app/",
    repo: "#",
    gradient: "from-pink-500 to-primary-600",
    emoji: beauty,
  },
  {
    title: "Random — Landing Page",
    description:
      "A machine learning web app that classifies images in real-time using a custom-trained CNN model with a beautiful drag-and-drop UI.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Canvas"],
    category: "Ui",
    stars: 162,
    demo: "https://new-webproject.vercel.app/",
    repo: "#",
    gradient: "from-pink-500 to-primary-600",
    emoji: Random,
  },
  {
    title: "Dashboard UI",
    description:
      "A machine learning web app that classifies images in real-time using a custom-trained CNN model with a beautiful drag-and-drop UI.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Canvas"],
    category: "Ui",
    stars: 162,
    demo: "https://demo-rosy-phi.vercel.app/admin",
    repo: "#",
    gradient: "from-pink-500 to-primary-600",
    emoji: Vuejs,
  },
  {
    title: "taskSetu — Task Management App",
    description:
      "A machine learning web app that classifies images in real-time using a custom-trained CNN model with a beautiful drag-and-drop UI.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Canvas"],
    category: "Ui",
    stars: 162,
    demo: "https://task-management-delta-tawny.vercel.app/",
    repo: "#",
    gradient: "from-pink-500 to-primary-600",
    emoji: taskSetu,
  },
  {
    title: "Mixo Ads",
    description:
      "A machine learning web app that classifies images in real-time using a custom-trained CNN model with a beautiful drag-and-drop UI.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "Canvas"],
    category: "Ui",
    stars: 162,
    demo: "https://mixo-ads-one.vercel.app/",
    repo: "#",
    gradient: "from-pink-500 to-primary-600",
    emoji: mixoAds,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">
          What I've built
        </p>
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet rounded-full mx-auto mt-4 mb-8" />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-primary-600 to-accent-violet text-white shadow-lg shadow-primary-500/30 scale-105"
                  : "glass text-slate-400 hover:text-white hover:border-primary-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl overflow-hidden glow-border group flex flex-col"
            >
              {/* Card header gradient */}
              <div
                className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <img
                  className="text-6xl z-10 group-hover:scale-110 transition-transform duration-500"
                  src={project.emoji}
                  alt={project.title}
                />

                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute -bottom-4 left-0 right-0 h-8 bg-dark-700 rounded-t-3xl" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs ml-2 shrink-0">
                    <FiStar size={12} fill="currentColor" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-violet text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.repo}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-slate-700/50 text-slate-400 hover:text-white hover:border-primary-500/40 text-sm font-semibold transition-all duration-300"
                  >
                    <FiGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <FiGithub size={18} />
          View All on GitHub
        </a>
      </motion.div>
    </div>
  );
}
