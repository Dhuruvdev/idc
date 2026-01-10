import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, GraduationCap, BookOpen, Briefcase, Award, Instagram, Youtube, Linkedin, Settings, Cpu, Rocket } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

import idcLogo from "@assets/319537515_877306970380833_8458113406465131312_n_1768036988839.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-[#3D1111]/90 backdrop-blur-md shadow-2xl py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#E8C170] transition-colors shadow-lg">
            <img src={idcLogo} alt="IDC Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <h1 className="font-sans text-2xl font-black tracking-tighter leading-none">IDC</h1>
            <p className="text-[10px] block -mt-1 text-white/40 font-sans font-black tracking-[0.3em] uppercase">COACHING INSTITUTE</p>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 flex flex-col items-center justify-center z-[110] group overflow-visible"
        >
          <div className="relative w-8 h-6 flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 10, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-0 w-full h-1 bg-white rounded-full group-hover:bg-[#E8C170] shadow-[0_0_15px_rgba(232,193,112,0)] group-hover:shadow-[0_0_15px_rgba(232,193,112,0.5)] transition-all"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, scale: 0, x: -20 } : { opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[10px] w-full h-1 bg-white rounded-full group-hover:bg-[#E8C170] shadow-[0_0_15px_rgba(232,193,112,0)] group-hover:shadow-[0_0_15px_rgba(232,193,112,0.5)] transition-all"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: 10, width: "100%" } : { rotate: 0, y: 20, width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-0 w-full h-1 bg-white rounded-full group-hover:bg-[#E8C170] shadow-[0_0_15px_rgba(232,193,112,0)] group-hover:shadow-[0_0_15px_rgba(232,193,112,0.5)] transition-all"
            />
          </div>
          {/* Optical Illusion Rings on Hover */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.8, opacity: 0.2 }}
              className="absolute inset-0 border-2 border-[#E8C170] rounded-full blur-sm"
            />
            <motion.div 
              animate={isOpen ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 0 }}
              whileHover={{ scale: 2.2, opacity: 0.1 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 border border-white rounded-full blur-md"
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#3D1111] z-[105] flex flex-col items-center justify-center gap-8"
            >
              {/* Illusion Animation Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 animate-[spin_60s_linear_infinite] border-[100px] border-[#E8C170]/20 rounded-full scale-150 blur-3xl" />
                <div className="absolute inset-0 animate-[spin_40s_linear_infinite_reverse] border-[50px] border-white/10 rounded-full scale-110 blur-2xl" />
              </div>

              {["Home", "Programs", "Faculty", "Admissions", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl md:text-6xl text-white hover:text-[#E8C170] transition-colors relative group"
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-2 bg-[#E8C170] group-hover:w-full transition-all duration-300 -z-10"
                  />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#3D1111] z-10" />
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={heroImage}
        alt="Mesa students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 z-20 opacity-0 pointer-events-none">
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
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-display text-white leading-tight mb-8">
            A UG Program where you{" "}
            <span className="font-bold">build businesses</span> and{" "}
            <span className="italic">learn outside the classroom</span>
          </h1>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          href="#learn-more"
          className="mt-4 bg-[#F5F0E6] text-[#3D1111] px-8 py-5 rounded-full flex items-center justify-between font-bold hover:bg-white transition-all shadow-2xl max-w-sm"
          data-testid="cta-learn-more"
        >
          <span className="text-sm tracking-[0.2em] font-bold">LEARN MORE</span>
          <ArrowRight size={24} />
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
      className="bg-[#F5F0E6] py-12 px-6" 
      data-testid="partner-logos"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#3D1111]/50 mb-6 font-bold uppercase tracking-[0.2em]">Built by alumni from:</p>
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-white px-6 py-4 rounded-xl shadow-lg border border-[#EAE2D5] flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#A41034] rounded flex items-center justify-center font-bold text-white">H</div>
                <div className="text-[10px] leading-tight font-bold uppercase tracking-wider text-[#A41034]">
                  Harvard<br/>Business School
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-white px-6 py-4 rounded-xl shadow-lg border border-[#EAE2D5] flex items-center gap-3"
              >
                <div className="text-[10px] leading-tight font-bold uppercase tracking-wider text-[#4E2A84]">
                  Northwestern<br/>Kellogg
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm text-[#3D1111]/50 mb-6 font-bold uppercase tracking-[0.2em]">Supported by Founders from:</p>
            <div className="bg-white px-8 py-6 rounded-xl shadow-lg border border-[#EAE2D5] flex flex-wrap items-center gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-lg font-black text-[#00BAF2]">Paytm</span>
              <span className="text-lg font-black text-black">CRED</span>
              <span className="text-lg font-black text-gray-800">UC</span>
              <span className="text-lg font-black text-[#570F54]">meesho</span>
              <span className="text-lg font-black text-orange-500">SWIGGY</span>
            </div>
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
    <section className="bg-[#3D1111] py-20 px-6" data-testid="supporters-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Supporters and <span className="italic">Investors</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-16 gap-x-4 md:gap-x-8"
        >
          {supporters.map((supporter, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="group flex flex-col"
              data-testid={`supporter-card-${i}`}
            >
              <div className="relative mb-4 md:mb-6">
                <div className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#F5F0E6] relative z-10">
                  {/* Decorative dashed circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-2 border-dashed border-[#3D1111]/10 rounded-full" />
                  <img
                    src={supporter.image}
                    alt={supporter.name}
                    className="w-full h-full object-cover relative z-20 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-1 md:space-y-2">
                <h3 className="text-base md:text-xl font-display text-white font-bold">
                  {supporter.name}
                </h3>
                <div className="text-white/60 text-[10px] md:text-sm leading-relaxed">
                  <p className="font-bold text-white/80">{supporter.role}</p>
                  <div className="whitespace-pre-line opacity-70 hidden md:block">
                    {supporter.details}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white font-black text-lg uppercase tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                    {supporter.logo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTAButton() {
  return (
    <div className="flex justify-center mt-12 mb-8">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#apply"
        className="bg-[#E8C170] text-[#3D1111] px-10 py-4 rounded-full font-bold text-sm tracking-[0.2em] shadow-xl hover:bg-[#D4B15B] transition-colors"
      >
        APPLY NOW
      </motion.a>
    </div>
  );
}

function InOfficeProjects() {
  const projects = [
    {
      company: "epigamia",
      description: "As competition heated up in the high-protein yogurt space, Epigamia needed to decide whether to double down or pivot its strategy. Mesa students led market research, 100+ consumer interviews, and taste tests to uncover insights, then built a 24-month roadmap across brand, product, and growth.",
      image: teamPhoto,
      color: "from-[#FDFBF7] to-[#F5F0E6]"
    },
    {
      company: "Blue Tokai",
      description: "Blue Tokai wanted to expand their footprint smartly by selecting new café locations backed by data. Mesa students built a site selection model using blended demographics, foot traffic, competition, and customer decision-making insights.",
      image: teamPhoto,
      color: "from-[#FDFBF7] to-[#F5F0E6]"
    }
  ];

  return (
    <section className="bg-[#EDE5D8] py-20 px-6" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display text-[#3D1111] mb-6">
            In Office <span className="italic">Projects</span>
          </h2>
          <p className="text-[#3D1111]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Students work on projects that move real business metrics, work in teams, and are a part of important meetings with the leadership team.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="rounded-sm overflow-hidden shadow-2xl cursor-pointer bg-white group"
              data-testid={`project-card-${i}`}
            >
              <div className="h-64 relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={project.image}
                  alt={project.company}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#3D1111]/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-10 border-t-8 border-[#E8C170]">
                <h3 className="font-display text-3xl text-[#3D1111] mb-6 uppercase tracking-tight">{project.company}</h3>
                <p className="font-handwriting text-2xl text-[#3D1111]/80 leading-relaxed italic">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <CTAButton />
      </div>
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
                  className="flex items-center gap-2 text-white pb-2 border-b-2 border-[#E8C170] cursor-pointer"
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
          <p className="text-[#E8C170] text-xs mb-2 uppercase tracking-widest font-semibold">New-age Academics</p>
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
                <div className="w-10 h-10 rounded-xl bg-[#E8C170]/20 flex items-center justify-center mb-3">
                  <feature.icon size={20} className="text-[#E8C170]" />
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
                <h3 className="font-display text-lg text-[#E8C170] font-bold">{item.title}</h3>
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
                  <p className="text-[#E8C170] text-xs italic mt-1.5 font-medium">{student.school}</p>
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
    { year: "Year 1", amount: "₹ 16,00,000" },
    { year: "Year 2", amount: "₹ 16,00,000" },
    { year: "Year 3", amount: "₹ 12,00,000" },
    { year: "Year 4", amount: "₹ 4,00,000" },
  ];

  const scholarships = [
    { 
      name: "Bob the Builder", 
      subtitle: "Scholarship", 
      description: "for builders who have built businesses or products in the past & want to continue doing so", 
      gradient: "from-[#FDFBF7] to-[#F5F0E6]",
      icon: Rocket
    },
    { 
      name: "Merit-Based", 
      subtitle: "Scholarship", 
      description: "for applicants with exceptional academic performance and extracurricular hustle", 
      gradient: "from-[#FDFBF7] to-[#F5F0E6]",
      icon: Award
    },
  ];

  return (
    <section className="bg-[#3D1111] py-20 px-6" data-testid="scholarships-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display text-white mb-8">
            Fees and <span className="italic text-[#E8C170]">Scholarships</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="space-y-4">
                {tuitionFees.map((fee, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-white/40 font-bold uppercase tracking-widest text-xs">{fee.year}</span>
                    <span className="text-white text-xl font-display">{fee.amount}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-6">
                  <span className="text-white font-bold uppercase tracking-widest text-sm">Total Tuition Fee</span>
                  <span className="text-[#E8C170] text-3xl font-display font-bold">₹ 48,00,000</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#E8C170] to-[#A68A3A] p-8 rounded-xl shadow-2xl">
                <p className="text-[#3D1111] text-xl font-bold leading-tight mb-4">
                  Scholarships of up to 75% on tuition fee for high-performing candidates.
                </p>
                <p className="text-[#3D1111]/60 text-sm">
                  Fee is exclusive of accommodation charges of ₹3,50,000 per year and global immersion fee.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {scholarships.map((scholarship, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="bg-white p-6 rounded-sm shadow-xl flex items-center gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8C170]/10 flex items-center justify-center flex-shrink-0">
                      <scholarship.icon size={24} className="text-[#E8C170]" />
                    </div>
                    <div>
                      <h3 className="font-handwriting text-2xl text-[#3D1111] mb-1">{scholarship.name}</h3>
                      <p className="text-xs text-[#3D1111]/50 leading-relaxed uppercase tracking-tighter font-bold">{scholarship.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <CTAButton />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2A0E0E] py-20 px-6 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-[#3D1111]">
                <img src={idcLogo} alt="IDC Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <span className="font-sans font-black text-2xl tracking-tighter">IDC</span>
                <span className="text-[10px] block -mt-1 text-white/40 font-sans font-black tracking-[0.3em]">COACHING INSTITUTE</span>
              </div>
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-8">
              Wework, Salarpuria Symbiosis Road, Bannerghatta Road, Begur Hobli, Bengaluru Urban, Karnataka, 560076.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Learning", "UG Program", "Outcomes"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-[#E8C170] transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <a href="mailto:info@mesaschool.co" className="text-[#E8C170] font-bold text-sm block mb-4">info@mesaschool.co</a>
            <div className="space-y-4 mt-8 pt-8 border-t border-white/5">
              <a href="#" className="text-white/20 hover:text-white transition-colors text-xs block uppercase tracking-widest font-bold">Terms of Use</a>
              <a href="#" className="text-white/20 hover:text-white transition-colors text-xs block uppercase tracking-widest font-bold">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Scroll Animations for all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#3D1111] overflow-x-hidden selection:bg-[#E8C170] selection:text-[#3D1111] scroll-smooth">
      <Navbar />
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