import { useState } from "react";
import { Menu, X, ArrowRight, GraduationCap, BookOpen, Briefcase, Award, Instagram, Youtube, Linkedin, Settings, Cpu, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import heroImage from "@assets/generated_images/students-casual-gathering-selfie.png";
import founder1 from "@assets/generated_images/indian-businessman-founder-portrait.png";
import founder2 from "@assets/generated_images/young-indian-founder-portrait.png";
import founder3 from "@assets/generated_images/indian-fintech-founder-portrait.png";
import teamPhoto from "@assets/generated_images/business-team-office-photo.png";
import studentsGroup from "@assets/generated_images/college-students-celebration.png";
import studentGirl from "@assets/generated_images/indian-teen-girl-student.png";
import studentBoy from "@assets/generated_images/indian-teen-boy-glasses.png";
import professorImage from "@assets/generated_images/professor-lecture-classroom.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }),
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#3D1111]/70 to-[#3D1111] z-10" />
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={heroImage}
        alt="Mesa students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 z-20">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-lg">
            <span className="text-[#3D1111] font-bold text-lg">m</span>
          </div>
          <div className="text-white drop-shadow-lg">
            <span className="font-bold text-lg">Mesa</span>
            <span className="text-[10px] block -mt-1 text-white/90 tracking-wider">SCHOOL OF BUSINESS</span>
          </div>
        </motion.div>
      </div>
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h1 className="text-[32px] md:text-5xl font-display text-white leading-[1.15] mb-6 drop-shadow-lg">
            A UG Program where you{" "}
            <span className="text-[#C5A047]">build businesses and learn outside the classroom</span>
          </h1>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#learn-more"
          className="mt-4 bg-[#F5F0E6] text-[#3D1111] px-6 py-4 rounded-lg flex items-center justify-between font-medium hover:bg-white transition-all shadow-xl"
          data-testid="cta-learn-more"
        >
          <span className="text-sm tracking-wide font-semibold">LEARN MORE</span>
          <ArrowRight size={20} />
        </motion.a>
      </div>
    </section>
  );
}

function PartnerLogos() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#F5F0E6] py-6 px-4" 
      data-testid="partner-logos"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-[#3D1111]/60 mb-2 font-medium">Built by alumni from:</p>
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 shadow-md border border-gray-100/50"
              >
                <div className="w-8 h-8 bg-[#A41034] rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">H</span>
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-[#A41034]">Harvard</span>
                  <span className="block text-[#A41034]/80">Business</span>
                  <span className="block text-[#A41034]/80">School</span>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 shadow-md border border-gray-100/50"
              >
                <span className="text-sm leading-tight">
                  <span className="font-normal text-gray-500">Northwestern</span>
                  <span className="block font-bold text-[#4E2A84]">Kellogg</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs text-[#3D1111]/60 mb-2 font-medium">Supported by Founders from:</p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="flex flex-wrap items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-md border border-gray-100/50"
            >
              <span className="text-sm font-bold"><span className="text-[#00BAF2]">Pay</span><span className="text-[#00265C]">tm</span></span>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-bold text-gray-700">⊙ CRED</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-semibold text-gray-600">UC <span className="text-gray-500">Urban Company</span></span>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-bold text-[#570F54]">meesho</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-bold text-orange-500">🧡 SWIGGY</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function Supporters() {
  const supporters = [
    { name: "Kunal Shah", company: "CRED", role: "Cred Founder", details: "Advisor - Sequoia Capital\nAdvisor - AngelList\nAvid Angel Investor", image: founder1, logo: "⊙ CRED" },
    { name: "Vidit Aatrey", company: "meesho", role: "Meesho Founder", details: "IIT Delhi\nEx - InMobi", image: founder2, logo: "meesho" },
    { name: "Vijay Shekhar", company: "Paytm", role: "Paytm Founder", details: "Delhi College of Engineering\nAvid Angel Investor", image: founder3, logo: "Paytm" },
    { name: "Mekin Maheshwari", company: "Udhyam", role: "Udhyam Founder", details: "Ex - Flipkart\nAvid Angel Investorz", image: founder1, logo: "Udhyam" },
    { name: "Abhiraj Bhal", company: "Urban Company", role: "Urban Company Founder", details: "IIM Ahmedabad\nIIT Kanpur", image: founder2, logo: "UC Urban Company" },
    { name: "Varun Khaitan", company: "Urban Company", role: "Urban Company Founder", details: "IIT Kanpur\nEx - BCG", image: founder3, logo: "UC Urban Company" },
  ];

  return (
    <section className="bg-[#3D1111] py-12 px-4" data-testid="supporters-section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display text-white mb-8"
        >
          Supporters and <span className="underline decoration-[#C5A047] underline-offset-4 decoration-2">Investors</span>
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {supporters.map((supporter, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              className="bg-[#F5F0E6] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              data-testid={`supporter-card-${i}`}
            >
              <div className="p-5 flex gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-[88px] h-[88px] rounded-full p-[3px] relative">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 88 88">
                      <circle
                        cx="44"
                        cy="44"
                        r="42"
                        fill="none"
                        stroke="#C5A047"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        className="animate-[spin_20s_linear_infinite]"
                      />
                    </svg>
                    <img
                      src={supporter.image}
                      alt={supporter.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="font-display text-[#3D1111] text-lg leading-tight">
                    <span className="font-bold">{supporter.name.split(" ")[0]}</span>{" "}
                    <span className="font-normal opacity-80">{supporter.name.split(" ").slice(1).join(" ")}</span>
                  </h3>
                  <p className="text-sm text-[#3D1111]/60 mt-1">{supporter.role}</p>
                  <p className="text-xs text-[#3D1111]/50 mt-2 whitespace-pre-line leading-relaxed">{supporter.details}</p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <div className="pt-3 border-t border-[#3D1111]/10">
                  <span className="text-sm font-bold text-[#3D1111]/70">{supporter.logo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function InOfficeProjects() {
  const projects = [
    {
      company: "epigamia",
      description: "As competition heated up in the high-protein yogurt space, Epigamia needed to decide whether to double down or pivot its strategy. Mesa students led market research, 100+ consumer interviews, and taste tests to uncover insights, then built a 24-month roadmap across brand, product, and growth.",
      image: teamPhoto,
      color: "from-[#D4A84B] to-[#B8933F]"
    },
    {
      company: "Blue Tokai",
      description: "Blue Tokai wanted to expand their footprint smartly by selecting new café locations backed by data. Mesa students built a site selection model using blended demographics, foot traffic, competition, and customer decision-making insights.",
      image: teamPhoto,
      color: "from-[#2C5F8A] to-[#1E4A6F]"
    }
  ];

  return (
    <section className="bg-[#EDE5D8] py-12 px-4" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display text-[#3D1111] mb-3">
            In Office <span className="font-bold">Projects</span>
          </h2>
          <p className="text-[#3D1111]/60 text-sm mb-6 max-w-md leading-relaxed">
            Students work on projects that move real business metrics, work in teams, and are a part of important meetings with the leadership team.
          </p>
        </motion.div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x scrollbar-hide">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="min-w-[300px] md:min-w-[340px] rounded-2xl overflow-hidden snap-start flex-shrink-0 shadow-xl cursor-pointer"
              data-testid={`project-card-${i}`}
            >
              <div className="h-48 relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className={`p-5 bg-gradient-to-br ${project.color}`}>
                <h3 className="font-display text-xl text-white font-medium mb-3 drop-shadow">{project.company}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CTAButton />
    </section>
  );
}

function NewAgeAcademics() {
  const features = [
    { icon: GraduationCap, title: "Top B-School Profs", description: "Faculty from IIM, ISB, and Kellogg." },
    { icon: BookOpen, title: "Diverse Learning", description: "600+ hours of practical, applied learning." },
    { icon: Award, title: "Real Cases", description: "75+ case studies across industries." }
  ];

  const techniques = [
    { icon: Settings, label: "Prompt Engineering 101" },
    { icon: BookOpen, label: "Reading API Docs" },
    { icon: Cpu, label: "Voice transcript synthesis" }
  ];

  return (
    <section className="relative" data-testid="academics-section">
      <div className="bg-[#3D1111] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2A0E0E] to-[#1F0A0A] rounded-2xl p-5 mb-4 border border-[#4A1F1F]/30"
          >
            <p className="text-white/50 text-xs font-semibold mb-4 uppercase tracking-widest">TECHNIQUES</p>
            <div className="flex flex-wrap gap-4">
              {techniques.map((tech, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 text-white pb-2 border-b-2 border-[#C5A047] cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
                    <tech.icon size={14} className="text-white/80" />
                  </div>
                  <span className="text-sm font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative h-72 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={professorImage}
            alt="Professor teaching"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1111]/95 via-[#3D1111]/70 to-transparent z-10" />
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-20 flex flex-col justify-center p-5"
        >
          <p className="text-[#C5A047] text-xs mb-2 uppercase tracking-widest font-semibold">New-age Academics</p>
          <h2 className="text-2xl md:text-3xl font-display text-white leading-tight max-w-xs drop-shadow-lg">
            Learn business <span className="font-bold">fundamentals</span> from world-renowned experts
          </h2>
        </motion.div>
      </div>

      <div className="bg-[#3D1111] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                whileHover="hover"
                className="min-w-[150px] bg-gradient-to-br from-[#5C1919] to-[#4A1515] rounded-2xl p-5 flex-shrink-0 border border-[#6B2222]/30 shadow-lg cursor-pointer"
                data-testid={`feature-card-${i}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A047]/20 flex items-center justify-center mb-3">
                  <feature.icon size={20} className="text-[#C5A047]" />
                </div>
                <h3 className="font-display text-white text-base mb-1.5 leading-tight font-semibold">{feature.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CTAButton />
      </div>
    </section>
  );
}

function EligibilityCriteria() {
  const criteria = [
    { icon: GraduationCap, title: "Education", description: "Students currently enrolled in Class XIIth & Pass-outs (2024 onwards)" },
    { icon: Settings, title: "Stream", description: "Students from any stream can apply for the program" }
  ];

  return (
    <section className="bg-[#F5F0E6] py-12 px-4" data-testid="eligibility-section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display text-[#3D1111] mb-6"
        >
          Eligibility Criteria
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-6 shadow-xl"
        >
          <img
            src={studentsGroup}
            alt="Mesa students celebration"
            className="w-full h-56 object-cover"
          />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover={{ x: 4, scale: 1.01 }}
              className="flex items-start gap-4 cursor-pointer"
              data-testid={`criteria-${i}`}
            >
              <div className="w-12 h-12 bg-[#3D1111]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <item.icon size={22} className="text-[#3D1111]" />
              </div>
              <div>
                <h3 className="font-display text-lg text-[#C5A047] font-bold">{item.title}</h3>
                <p className="text-[#3D1111]/60 text-sm mt-0.5 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FoundingCohort() {
  const students = [
    { firstName: "Dyumna", lastName: "Madan", school: "Woodstock School", city: "Mussoorie", image: studentGirl },
    { firstName: "Priyanshi", lastName: "M", school: "Delhi Public School", city: "Raipur", image: studentGirl },
    { firstName: "Yagya Amit", lastName: "Bisani", school: "Fountainhead School", city: "Surat", image: studentBoy },
    { firstName: "Garvit", lastName: "Tatiya", school: "Bodhi International School", city: "Jodhpur", image: studentBoy },
    { firstName: "A R Aayush", lastName: "Jishnu", school: "Emerald International School", city: "Bengaluru", image: studentBoy },
    { firstName: "Mahi", lastName: "Jain", school: "Jayshree Periwal International School", city: "Jaipur", image: studentGirl },
    { firstName: "Rahul", lastName: "Setia", school: "GD Goenka Public School", city: "Delhi", image: studentBoy },
    { firstName: "Jatin", lastName: "Jain", school: "Delhi Public School", city: "Hyderabad", image: studentBoy },
  ];

  return (
    <section className="bg-[#3D1111] py-12 px-4" data-testid="cohort-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display text-white mb-2">
            Meet the <span className="font-bold">Founding Cohort</span>
          </h2>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            A peek into the 100 builders, creators, and innovators who make up Mesa's Founder's Batch
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {students.map((student, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, hsl(${10 + i * 5}, 45%, ${28 + i * 2}%) 0%, hsl(${8 + i * 3}, 50%, ${20 + i}%) 100%)`
              }}
              data-testid={`student-card-${i}`}
            >
              <div className="p-4 pr-20 min-h-[120px] flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="font-display text-white text-base leading-tight">
                    <span className="font-bold">{student.firstName}</span>{" "}
                    <span className="font-normal opacity-60">{student.lastName}</span>
                  </h3>
                  <p className="text-[#C5A047] text-xs italic mt-1.5 font-medium">{student.school}</p>
                  <p className="text-white/40 text-[11px] mt-0.5">{student.city}</p>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-[85px] h-full">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#3D1111]/80 z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={student.image}
                  alt={student.firstName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CTAButton />
    </section>
  );
}

function Scholarships() {
  const tuitionFees = [
    { year: "Year 1", amount: "₹ 12,00,000" },
    { year: "Year 2", amount: "₹ 12,00,000" },
    { year: "Year 3", amount: "₹ 12,00,000" },
    { year: "Year 4", amount: "₹ 4,00,000" },
  ];

  const scholarships = [
    { 
      name: "Bob the Builder", 
      subtitle: "Scholarship", 
      description: "for builders who have built businesses or products in the past & want to continue doing so", 
      gradient: "from-[#7CB342] to-[#558B2F]",
      icon: Rocket
    },
    { 
      name: "Merit-Based", 
      subtitle: "Scholarship", 
      description: "for applicants with exceptional academic performance and extracurricular hustle", 
      gradient: "from-[#C5A047] to-[#A68A3A]",
      icon: Award
    },
  ];

  return (
    <section className="bg-[#3D1111] py-12 px-4" data-testid="scholarships-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="space-y-2">
            {tuitionFees.map((fee, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex justify-between items-center py-3 border-b border-white/10"
              >
                <span className="text-white/50 text-sm">{fee.year}</span>
                <span className="text-white text-sm font-medium">{fee.amount}</span>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-between items-center py-3 bg-white/5 rounded-lg px-3 -mx-3"
            >
              <span className="text-white font-bold text-sm">Total</span>
              <span className="text-white font-bold text-sm">₹ 48,00,000</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#C5A047]/20 to-[#C5A047]/10 border border-[#C5A047]/30 rounded-2xl p-5 mb-8"
        >
          <p className="text-white text-sm leading-relaxed">
            We provide scholarships of up to <span className="font-bold text-[#C5A047]">75%</span> on tuition fee for high-performing candidates
          </p>
          <p className="text-white/40 text-xs mt-2">
            Fee is exclusive of accommodation charges of ₹3,50,000 per year and global immersion fee
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display text-white mb-3">
            Scholarships <span className="font-bold">Available</span>
          </h2>
          <p className="text-white/50 text-sm mb-6 leading-relaxed">
            The Mesa cohort comprises exceptional & diverse candidates. We are committed to eliminating all financial barriers for these outstanding candidates, guaranteeing an unparalleled peer learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {scholarships.map((scholarship, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${scholarship.gradient} rounded-2xl p-5 min-h-[200px] relative overflow-hidden shadow-lg cursor-pointer`}
              data-testid={`scholarship-card-${i}`}
            >
              <div className="relative z-10">
                <h3 className="font-display text-[#3D1111] text-base leading-tight">
                  <span className="font-bold">{scholarship.name}</span>{" "}
                  <span className="font-normal opacity-70">{scholarship.subtitle}</span>
                </h3>
                <p className="text-[#3D1111]/60 text-xs mt-3 leading-relaxed">{scholarship.description}</p>
              </div>
              <div className="absolute bottom-3 right-3 opacity-20">
                <scholarship.icon size={48} className="text-[#3D1111]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CTAButton />
    </section>
  );
}

function CTAButton() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        href="#apply"
        className="bg-[#F5F0E6] text-[#3D1111] px-6 py-4 rounded-xl flex items-center justify-between font-semibold hover:bg-white transition-all w-full shadow-xl"
        data-testid="cta-apply"
      >
        <span className="text-sm tracking-wide">APPLY NOW</span>
        <ArrowRight size={20} />
      </motion.a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2A0E0E] py-10 px-4" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-[#3D1111] font-bold text-xl">m</span>
            </div>
            <div className="text-white">
              <span className="font-bold text-lg">Mesa</span>
              <span className="text-[10px] block -mt-0.5 text-white/60 tracking-wider">SCHOOL OF BUSINESS</span>
            </div>
          </div>

          <div className="text-white/50 text-sm mb-4 leading-relaxed">
            <p>Wework, Salarpuria Symbiosis Road,</p>
            <p>Bannerghatta Road, Begur Hobli,</p>
            <p>Bengaluru Urban,</p>
            <p>Karnataka, 560076.</p>
          </div>

          <div className="flex gap-4 text-[#C5A047] text-sm mb-6">
            <a href="#" className="hover:underline transition-colors" data-testid="link-terms">Terms of use</a>
            <a href="#" className="hover:underline transition-colors" data-testid="link-privacy">Privacy policy</a>
          </div>

          <div className="mb-6">
            <h4 className="text-[#C5A047] font-display italic mb-2">Contact Us</h4>
            <a href="mailto:info@mesaschool.co" className="text-white/50 text-sm hover:text-white transition-colors" data-testid="link-email">
              info@mesaschool.co
            </a>
            <div className="flex gap-3 mt-3">
              {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all" 
                  data-testid={`social-${i}`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-[#C5A047] font-display italic mb-2">Quick Links</h4>
            <div className="flex flex-col gap-1.5">
              {["Home", "Learning", "UG Program", "Outcomes"].map((link, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ x: 4 }}
                  className="text-white/50 text-sm hover:text-white transition-colors w-fit" 
                  data-testid={`quick-${link.toLowerCase().replace(" ", "-")}`}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-white/30 text-sm">© 2025 Mesa School of Business</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#3D1111] overflow-x-hidden">
      <Hero />
      <PartnerLogos />
      <Supporters />
      <InOfficeProjects />
      <NewAgeAcademics />
      <EligibilityCriteria />
      <FoundingCohort />
      <Scholarships />
      <Footer />
    </div>
  );
}