import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: 'Techizebuilder Web Solutions',
    period: 'Sep 2024 – Present',
    location: 'Remote, India',
    description: [
      'Led a team of 3 developers to build MillerCare\'s full-stack healthcare application, improving user engagement by 40%.',
      'Built a complete React Native mobile app for MillerCare featuring video consultations, appointment booking, pharmacy orders, lab test scheduling, and real-time chat via WebSockets.',
      'Developed Heart2Get, a React Native app for donor matching with integrated video calling and live chat.',
      'Led the full development team in building Biobridex, a full-stack freelance platform and collaboration web app.',
    ],
    tech: ['React Native', 'Node.js', 'WebSockets', 'React.js', 'MongoDB'],
  },
  {
    type: 'work',
    role: 'Front-End Developer',
    company: 'Grocito Online Private Limited',
    period: 'Oct 2023 – Sep 2024',
    location: 'Remote, India',
    description: [
      'Collaborated with the frontend team to design and develop Grocito.com, focusing on UI/UX excellence and responsive web implementation.',
      'Leveraged React.js and modern frontend technologies to boost application performance by 15%.',
      'Worked closely with UX designers to translate wireframes and prototypes into pixel-perfect, responsive interfaces.',
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'Figma', 'REST APIs'],
  },
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: 'Roadzina Technology',
    period: 'May 2021 – Oct 2023',
    location: 'Remote, India',
    description: [
      'Revamped Bhavaya Publication\'s e-commerce platform, directly increasing online sales by 25%.',
      'Enhanced TrabanjoHunt\'s frontend architecture, reducing bounce rates by 30% and boosting user retention by 40%.',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'Redux'],
  },
];

export default function Experience() {
  return (
    <div className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">My Journey</p>
        <h2 className="section-title gradient-text">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-violet rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-violet/30 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card — takes half width on desktop */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card rounded-2xl p-6 glow-border group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        exp.type === 'education'
                          ? 'bg-accent-cyan/10 text-accent-cyan'
                          : 'bg-primary-500/10 text-primary-400'
                      }`}>
                        {exp.type === 'education' ? <FaGraduationCap size={18} /> : <FiBriefcase size={18} />}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1"><FiCalendar size={12} />{exp.period}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={12} />{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((d, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-primary-400 mt-1 shrink-0">▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot — absolute on desktop */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-violet shadow-lg shadow-primary-500/50 border-2 border-dark-950 z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
