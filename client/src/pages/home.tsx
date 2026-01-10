import { useState, useEffect } from "react";
import { ArrowRight, GraduationCap, BookOpen, Briefcase, Award, Instagram, Youtube, Linkedin, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

import heroImage from "@assets/generated_images/students-casual-gathering-selfie.png";
import founder1 from "@assets/generated_images/indian-businessman-founder-portrait.png";
import founder2 from "@assets/generated_images/young-indian-founder-portrait.png";
import founder3 from "@assets/generated_images/indian-fintech-founder-portrait.png";
import studentsGroup from "@assets/generated_images/college-students-celebration.png";
import studentGirl from "@assets/generated_images/indian-teen-girl-student.png";
import studentBoy from "@assets/generated_images/indian-teen-boy-glasses.png";
import idcLogo from "@assets/319537515_877306970380833_8458113406465131312_n_1768036988839.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }),
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: { type: "spring", stiffness: 400, damping: 40, delay: 0.2 }
    },
    opened: {
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50, rotateX: 45 },
    opened: (i: number) => ({
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        delay: 0.4 + (i * 0.1),
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-4 \${scrolled ? "bg-black/20 backdrop-blur-xl py-3" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer relative z-[110]">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#E8C170] transition-all duration-500 shadow-lg group-hover:scale-110">
            <img src={idcLogo} alt="IDC Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <h1 className="font-sans text-2xl font-black tracking-tighter leading-none group-hover:text-[#E8C170] transition-colors">IDC</h1>
            <p className="text-[10px] block -mt-1 text-white/40 font-sans font-black tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors">COACHING INSTITUTE</p>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="relative w-14 h-14 flex flex-col items-center justify-center z-[110] group rounded-full bg-[#3D1111]/5 hover:bg-[#3D1111]/10 transition-colors backdrop-blur-md">
          <div className="relative w-6 h-3 overflow-visible">
            <motion.span animate={isOpen ? { rotate: 45, y: 6, width: "100%", backgroundColor: "#E8C170" } : { rotate: 0, y: 0, width: "100%", backgroundColor: "#fff" }} className="absolute top-0 left-0 h-0.5 rounded-full" />
            <motion.span animate={isOpen ? { rotate: -45, y: 6, width: "100%", backgroundColor: "#E8C170" } : { rotate: 0, y: 12, width: "100%", backgroundColor: "#fff" }} className="absolute top-0 left-0 h-0.5 rounded-full" />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial="closed" animate="opened" exit="closed" variants={menuVariants} className="fixed inset-0 bg-[#3D1111] z-[105] flex flex-col items-center justify-center min-h-screen origin-top-right shadow-2xl">
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180], x: [0, 100, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#E8C170]/20 rounded-full blur-[120px]" />
                <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [180, 90, 0], x: [0, -100, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px]" />
              </div>
              <div className="flex flex-col items-center gap-8 perspective-[1000px]">
                {["Home", "Programs", "Faculty", "Admissions", "Contact"].map((item, i) => (
                  <motion.a key={item} custom={i} variants={itemVariants} href={`#\${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-display text-5xl md:text-8xl text-white hover:text-[#E8C170] transition-all duration-500 relative group flex items-center">
                    <span className="relative z-10 block group-hover:italic group-hover:translate-x-6 transition-transform">{item}</span>
                    <span className="absolute -left-16 opacity-0 group-hover:opacity-100 group-hover:-left-12 transition-all text-[#E8C170] text-3xl font-serif">0{i+1}</span>
                    <motion.span className="absolute bottom-4 left-0 w-0 h-1 bg-[#E8C170] group-hover:w-full transition-all duration-500 -z-10 shadow-[0_0_20px_rgba(232,193,112,0.3)]" />
                  </motion.a>
                ))}
              </div>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-20 flex gap-10 text-white/30 font-sans font-black text-xs tracking-[0.5em] uppercase">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Youtube</a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function Hero() {
  const whatsappUrl = "https://wa.me/919999999999?text=" + encodeURIComponent("Hello IDC, I would like to book a call for academic guidance.");
  
  return (
    <section className="relative min-h-screen overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#3D1111] z-10" />
      <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} src={heroImage} alt="IDC Students" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-display text-white leading-tight mb-8">Empowering <span className="font-bold text-[#E8C170]">Academic Excellence</span></h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed mx-auto">Delhi's premier coaching for Classes 6th–12th, UG, and PG levels. Personalized and result-driven.</p>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFF8E7] text-[#3D1111] px-10 py-5 rounded-full flex items-center gap-4 font-bold hover:bg-white transition-all shadow-2xl"
            data-testid="button-get-in-touch"
          >
            <span className="text-sm tracking-[0.2em]">GET IN TOUCH</span>
            <ArrowRight size={20} />
          </motion.a>
          <motion.a 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="#faculty" 
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full flex items-center gap-4 font-bold hover:bg-white/20 transition-all shadow-2xl"
          >
            <span className="text-sm tracking-[0.2em]">OUR FACULTY</span>
            <GraduationCap size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const courses = [
    { title: "Classes 6th–10th", description: "Strengthen your core concepts in Maths, Science, English, and more with expert-led sessions.", tags: ["Foundation", "Maths", "Science"], icon: <BookOpen className="w-6 h-6" /> },
    { title: "Classes 11th–12th", subtitle: "(Arts | Commerce | Maths)", description: "Subject-specific preparation tailored to CBSE and State Boards with deep conceptual clarity.", tags: ["CBSE", "State Boards", "Conceptual"], icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Undergraduate (UG)", description: "Special guidance for B.Com, B.A., B.Sc., and other university-level exams.", tags: ["B.Com", "B.A", "B.Sc"], icon: <Briefcase className="w-6 h-6" /> },
    { title: "Postgraduate (PG)", description: "Expert mentors to help you excel in M.Com, M.A., and advanced academic goals.", tags: ["M.Com", "M.A", "Advanced"], icon: <Award className="w-6 h-6" /> },
    { title: "English & Personality", description: "Improve communication, fluency, and confidence through structured English-speaking programs.", tags: ["Fluency", "Confidence", "Soft Skills"], icon: <Settings className="w-6 h-6" /> }
  ];
  return (
    <section id="courses" className="bg-[#F5F0E6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-[#3D1111] mb-6">Our <span className="italic text-[#E8C170]">Programs</span></h2>
          <p className="text-[#3D1111]/60 text-xl max-w-3xl mx-auto">Comprehensive Coaching for Every Stage of Learning. We build strong foundations for success.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-white p-8 rounded-3xl shadow-xl border border-[#3D1111]/5 group transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#3D1111] text-[#E8C170] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{course.icon}</div>
              <h3 className="text-2xl font-display font-bold text-[#3D1111] mb-2">{course.title}</h3>
              {course.subtitle && <p className="text-[#E8C170] font-bold text-sm mb-2">{course.subtitle}</p>}
              <p className="text-[#3D1111]/70 mb-6 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {course.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-[#F5F0E6] text-[#3D1111]/60 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseIDC() {
  const points = [
    { title: "Experienced Faculty", desc: "Learn from highly qualified teachers who are passionate about your success." },
    { title: "Comprehensive Material", desc: "Updated notes and resources designed to simplify complex topics." },
    { title: "Personalized Attention", desc: "Small batches ensure every student receives focused guidance." },
    { title: "Modern Techniques", desc: "Smart classrooms, digital aids, and test analytics for better outcomes." },
    { title: "Affordable Fees", desc: "Quality education at pocket-friendly prices." },
    { title: "Proven Results", desc: "A legacy of academic excellence and top-performing students across Delhi." }
  ];
  return (
    <section className="bg-[#3D1111] py-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8C170]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-8">Why Choose <br /><span className="text-[#E8C170] italic">Ideology Classes?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="space-y-2">
                  <div className="w-8 h-1 bg-[#E8C170] rounded-full mb-4" />
                  <h3 className="text-white font-bold text-lg">{point.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-full border-2 border-dashed border-[#E8C170]/30 animate-[spin_30s_linear_infinite] absolute inset-0 -m-8" />
            <img src={studentsGroup} alt="IDC Students Success" className="rounded-3xl shadow-2xl relative z-10 w-full aspect-square object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  const teachers = [
    { name: "Prof. Kunal Shah", subject: "Economics & Strategy", experience: "15+ Years", graduation: "IIM Ahmedabad", details: "Expert in market dynamics and strategic planning for competitive advantage.", image: founder1 },
    { name: "Prof. Vidit Aatrey", subject: "Maths & Analytics", experience: "12+ Years", graduation: "IIT Delhi", details: "Specializes in advanced calculus and data-driven decision modeling.", image: founder2 },
    { name: "Prof. Vijay Shekhar", subject: "Business Studies", experience: "20+ Years", graduation: "Delhi College of Engineering", details: "Veteran educator focused on entrepreneurship and business fundamentals.", image: founder3 }
  ];
  return (
    <section id="faculty" className="bg-[#3D1111] py-24 px-6 min-h-screen flex items-center overflow-hidden" data-testid="teachers-section">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl md:text-7xl font-display text-white mb-6">Our <span className="italic text-[#E8C170]">Teachers</span></h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">Learn from Delhi's most experienced educators with proven academic excellence.</p>
        </motion.div>
        <div className="teachers-track flex gap-4 md:gap-10 overflow-x-auto lg:overflow-visible pb-8 no-scrollbar snap-x snap-mandatory">
          {teachers.map((teacher, i) => (
            <motion.div key={i} custom={i} variants={cardVariants} className="flex-shrink-0 w-[280px] md:w-[450px] snap-center group relative flex flex-col bg-[#FDFBF7] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#3D1111]/5" data-testid={`teacher-card-\${i}`}>
              <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-[#E8C170] to-[#3D1111]/20" />
              <div className="p-6 md:p-10 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="block text-[#3D1111]/30 text-[8px] md:text-xs font-black uppercase tracking-[0.2em]">Faculty Record</span>
                  <div className="h-0.5 w-8 md:w-10 bg-[#E8C170]/30 rounded-full" />
                </div>
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#3D1111]/5 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 md:h-8 md:w-8 text-[#3D1111]/20" />
                </div>
              </div>
              <div className="px-6 md:px-10 flex gap-4 md:gap-8 items-center mb-6 md:mb-8">
                <div className="relative w-20 h-20 md:w-40 md:h-40 flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-[#3D1111]/5 group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D1111]/20 to-transparent z-10" />
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-3xl font-display text-[#3D1111] font-black leading-tight mb-1 md:mb-2 truncate">{teacher.name}</h3>
                  <p className="text-[#E8C170] text-[8px] md:text-sm font-black uppercase tracking-widest mb-2 md:mb-4 truncate">{teacher.subject}</p>
                  <div className="inline-flex items-center gap-2 md:gap-3 bg-[#3D1111]/5 px-2 md:px-4 py-1 md:py-2 rounded-full">
                    <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-[#E8C170]" />
                    <span className="text-[7px] md:text-xs font-bold text-[#3D1111]/60 uppercase tracking-widest">{teacher.experience} Exp</span>
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-10 flex-1 flex flex-col pb-8 md:pb-12">
                <div className="bg-[#3D1111]/5 p-4 md:p-8 rounded-2xl md:rounded-3xl relative mb-6 md:mb-8">
                  <div className="absolute -top-3 md:-top-4 left-6 md:left-8 text-2xl md:text-4xl text-[#E8C170] font-serif opacity-50">"</div>
                  <p className="text-[#3D1111]/80 text-[10px] md:text-lg font-sans leading-relaxed line-clamp-3 md:line-clamp-4 italic">{teacher.details}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 md:pt-6 border-t border-[#3D1111]/10">
                  <div className="flex flex-col">
                    <span className="text-[7px] md:text-[10px] font-black text-[#3D1111]/30 uppercase tracking-[0.2em] mb-0.5 md:mb-1">Academic Base</span>
                    <span className="text-[9px] md:text-sm font-bold text-[#3D1111]/70 truncate max-w-[100px] md:max-w-none">{teacher.graduation}</span>
                  </div>
                  <div className="h-8 md:h-10 w-[1px] bg-[#3D1111]/10" />
                  <div className="flex flex-col text-right">
                    <span className="text-[7px] md:text-[10px] font-black text-[#3D1111]/30 uppercase tracking-[0.2em] mb-0.5 md:mb-1">Verification</span>
                    <span className="text-[9px] md:text-sm font-bold text-[#E8C170]">IDC VERIFIED</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WallOfFameCard({ student, i }: { student: any, i: number }) {
  return (
    <motion.div 
      key={i} 
      custom={i} 
      variants={cardVariants} 
      className="flex-shrink-0 w-[280px] md:w-[450px] snap-center group relative flex flex-row bg-[#3D1111] rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5 p-6 md:p-8 gap-4 md:gap-6 items-center"
      data-testid={`testimonial-card-\${i}`}
    >
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3 className="text-xl md:text-4xl font-display text-white font-black leading-tight mb-2 truncate">
          {student.name}
        </h3>
        <div className="h-[1px] w-full bg-white/20 mb-4 md:mb-6" />
        <p className="text-[#E8C170] italic font-serif text-sm md:text-2xl mb-1 md:mb-2 truncate">
          {student.school}
        </p>
        <p className="text-white/40 text-[10px] md:text-lg font-sans uppercase tracking-widest truncate">
          {student.location}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-white/5 self-start px-3 py-1 rounded-full border border-white/10">
          <span className="text-[8px] md:text-xs font-black text-[#E8C170] uppercase tracking-widest">{student.marks}</span>
        </div>
      </div>
      <div className="relative w-24 h-24 md:w-48 md:h-48 flex-shrink-0 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1111]/40 to-transparent z-10" />
        <img src={student.image} alt={student.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const classX = [
    { name: "Dyumna Madan", school: "Woodstock School", location: "Mussoorie", marks: "98% IN ACCOUNTS", image: studentGirl },
    { name: "Priyanshi M", school: "Bal Bharti Public School", location: "RAIPUR", marks: "98% IN ACCOUNTS", image: studentGirl },
  ];
  
  const classXII = [
    { name: "Aryan Singh", school: "Modern School Vasant Vihar", location: "NEW DELHI", marks: "96% IN MATHS", image: studentBoy },
    { name: "Sneha Kapur", school: "Delhi Public School", location: "ROHINI", marks: "97% IN ECONOMICS", image: studentGirl }
  ];

  return (
    <section id="testimonials" className="bg-[#3D1111] py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-white text-4xl md:text-7xl font-display mb-6">Wall of <span className="font-black italic text-[#E8C170]">Fame</span></motion.h2>
        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/60 text-lg max-w-2xl leading-relaxed">Celebrating the academic excellence and outstanding achievements of our top performers.</motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mb-12">
        <h3 className="text-white/40 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
          <span className="flex-shrink-0">Class X Boards</span>
          <div className="h-[1px] w-full bg-white/10" />
        </h3>
        <div className="flex gap-4 md:gap-10 overflow-x-auto lg:overflow-visible pb-8 no-scrollbar snap-x snap-mandatory">
          {classX.map((student, i) => (
            <WallOfFameCard key={i} student={student} i={i} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-white/40 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
          <span className="flex-shrink-0">Class XII Boards</span>
          <div className="h-[1px] w-full bg-white/10" />
        </h3>
        <div className="flex gap-4 md:gap-10 overflow-x-auto lg:overflow-visible pb-8 no-scrollbar snap-x snap-mandatory">
          {classXII.map((student, i) => (
            <WallOfFameCard key={i} student={student} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#FDFBF7] py-20 px-6 border-t border-[#3D1111]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#3D1111]/10">
              <img src={idcLogo} alt="IDC Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-display font-black text-2xl text-[#3D1111]">IDC</h2>
          </div>
          <p className="text-[#3D1111]/60 text-sm leading-relaxed">Delhi's premier coaching institute dedicated to academic excellence and student success across all levels.</p>
        </div>
        <div>
          <h3 className="font-bold text-[#3D1111] mb-6 uppercase tracking-widest text-xs">Programs</h3>
          <ul className="space-y-4 text-[#3D1111]/60 text-sm">
            <li><a href="#" className="hover:text-[#E8C170] transition-colors">Foundation (6th-10th)</a></li>
            <li><a href="#" className="hover:text-[#E8C170] transition-colors">Senior Secondary (11th-12th)</a></li>
            <li><a href="#" className="hover:text-[#E8C170] transition-colors">Undergraduate (UG)</a></li>
            <li><a href="#" className="hover:text-[#E8C170] transition-colors">Postgraduate (PG)</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#3D1111] mb-6 uppercase tracking-widest text-xs">Contact</h3>
          <ul className="space-y-4 text-[#3D1111]/60 text-sm">
            <li>N-35/1, Near Kali Mandir, New Delhi</li>
            <li>+91 99999 99999</li>
            <li>info@idcclasses.com</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="font-bold text-[#3D1111] mb-6 uppercase tracking-widest text-xs">Follow Us</h3>
          <div className="flex gap-4">
            {[Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#3D1111]/10 flex items-center justify-center text-[#3D1111]/40 hover:text-[#E8C170] hover:border-[#E8C170] transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-[#3D1111]/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#3D1111]/30 text-xs font-bold tracking-widest uppercase">© 2024 IDEOLOGY CLASSES. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[#3D1111]/30 text-[10px] font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-[#3D1111] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#3D1111] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-[#E8C170] selection:text-[#3D1111]">
      <Navbar />
      <Hero />
      <Courses />
      <WhyChooseIDC />
      <Teachers />
      <Testimonials />
      <Footer />
    </div>
  );
}
