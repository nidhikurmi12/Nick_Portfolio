import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpressvpn ,
  SiGit,
  SiRedux,
  SiMaterialdesign,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { AiOutlineAntDesign } from "react-icons/ai";
const skills = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#fff" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: TbBrandReactNative, name: "React Native", color: "#4169E1" },
  { Icon: SiExpressvpn , name: "Express ", color: "#2496ED" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiRedux, name: "Redux", color: "#F24E1E" },
  { Icon: AiOutlineAntDesign, name: "Ant Design", color: "#3776AB" },
  { Icon: SiMaterialdesign, name: "Material Ui ", color: "#FFCA28" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <div className="section-padding max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Get to know me
        </p>
        <h2 className="section-title gradient-text">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Avatar / illustration column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Rotating rings */}
            <div className="absolute -inset-6 rounded-full border border-primary-500/20 animate-spin-slow" />
            <div
              className="absolute -inset-12 rounded-full border border-accent-violet/10 animate-spin-slow"
              style={{
                animationDirection: "reverse",
                animationDuration: "30s",
              }}
            />

            {/* Avatar circle */}
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary-600 via-accent-violet to-accent-cyan p-1 shadow-2xl shadow-primary-500/30 animate-float">
              <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl mb-2">👩‍💻</div>
                  <p className="text-sm text-slate-400 font-medium">Nidhi</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0 }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 text-xs font-semibold text-accent-cyan border border-accent-cyan/20"
            >
              ⚡ React Expert
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-3 py-2 text-xs font-semibold text-accent-violet border border-accent-violet/20"
            >
              🚀 Full Stack
            </motion.div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Passionate Developer &{" "}
            <span className="gradient-text">Creative Thinker</span>
          </h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm a full-stack developer with 3+ years of experience building
            modern web applications. I love turning complex problems into
            elegant, user-friendly solutions.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community. I believe in writing clean, maintainable code
            and creating experiences that make a real difference.
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Name", value: "Nidhi" },
              { label: "Email", value: "nidhikurmi11@gmail.com" },
              { label: "Location", value: "Bhopal, Madhya Pradesh , India" },
              { label: "Status", value: "Open to Work ✅" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Let's Talk 💬
          </button>
        </motion.div>
      </div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-24"
      >
        <h3 className="text-2xl font-bold text-center text-white mb-12">
          Tech <span className="gradient-text">Stack</span>
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map(({ Icon, name, color }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -4 }}
              className="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default glow-border group"
            >
              <Icon
                size={32}
                style={{ color }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xs text-slate-400 font-medium group-hover:text-white transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
