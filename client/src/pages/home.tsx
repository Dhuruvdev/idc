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
import coachingInstituteImg from "@assets/generated_images/modern_coaching_institute_interior_redesign.png";

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

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
              className="absolute top-0 w-full h-1 bg-white rounded-full group-hover:bg-[#E8C170]"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[10px] w-full h-1 bg-white rounded-full group-hover:bg-[#E8C170]"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: 10, width: "100%" } : { rotate: 0, y: 20, width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-0 w-full h-1 bg-white rounded-full group-hover:bg-[#E8C170]"
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-0 bg-[#3D1111] z-[105] flex flex-col items-center justify-center gap-8 min-h-screen"
            >
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
        alt="IDC Students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-8xl font-display text-white leading-tight mb-8">
            Empowering <span className="font-bold text-[#E8C170]">Academic Excellence</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed mx-auto">
            Delhi's premier coaching for Classes 6th–12th, UG, and PG levels. Personalized and result-driven.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#courses"
            className="bg-[#E8C170] text-[#3D1111] px-10 py-5 rounded-full flex items-center gap-4 font-bold hover:bg-white transition-all shadow-2xl"
          >
            <span className="text-sm tracking-[0.2em]">EXPLORE COURSES</span>
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
    {
      title: "Classes 6th–10th",
      description: "Strengthen your core concepts in Maths, Science, English, and more with expert-led sessions.",
      tags: ["Foundation", "Maths", "Science"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Classes 11th–12th",
      subtitle: "(Arts | Commerce | Maths)",
      description: "Subject-specific preparation tailored to CBSE and State Boards with deep conceptual clarity.",
      tags: ["CBSE", "State Boards", "Conceptual"],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Undergraduate (UG)",
      description: "Special guidance for B.Com, B.A., B.Sc., and other university-level exams.",
      tags: ["B.Com", "B.A", "B.Sc"],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Postgraduate (PG)",
      description: "Expert mentors to help you excel in M.Com, M.A., and advanced academic goals.",
      tags: ["M.Com", "M.A", "Advanced"],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "English & Personality",
      description: "Improve communication, fluency, and confidence through structured English-speaking programs.",
      tags: ["Fluency", "Confidence", "Soft Skills"],
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <section id="courses" className="bg-[#F5F0E6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-[#3D1111] mb-6">
            Our <span className="italic text-[#E8C170]">Courses</span>
          </h2>
          <p className="text-[#3D1111]/60 text-xl max-w-3xl mx-auto">
            Comprehensive Coaching for Every Stage of Learning. We build strong foundations for success.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-[#3D1111]/5 group transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#3D1111] text-[#E8C170] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {course.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-[#3D1111] mb-2">{course.title}</h3>
              {course.subtitle && <p className="text-[#E8C170] font-bold text-sm mb-2">{course.subtitle}</p>}
              <p className="text-[#3D1111]/70 mb-6 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {course.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-[#F5F0E6] text-[#3D1111]/60 px-3 py-1 rounded-full">
                    {tag}
                  </span>
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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display text-white mb-8">
              Why Choose <br /><span className="text-[#E8C170] italic">Ideology Classes?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="w-8 h-1 bg-[#E8C170] rounded-full mb-4" />
                  <h3 className="text-white font-bold text-lg">{point.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border-2 border-dashed border-[#E8C170]/30 animate-[spin_30s_linear_infinite] absolute inset-0 -m-8" />
            <img 
              src={studentsGroup} 
              alt="IDC Students Success" 
              className="rounded-3xl shadow-2xl relative z-10 w-full aspect-square object-cover"
            />
          </motion.div>
        </div>
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

function Teachers() {
  const teachers = [
    { name: "Prof. Kunal Shah", subject: "Economics & Strategy", experience: "15+ Years", graduation: "IIM Ahmedabad", details: "Expert in market dynamics and strategic planning for competitive advantage.", image: founder1, logo: "⊙ ECONOMICS" },
    { name: "Prof. Vidit Aatrey", subject: "Maths & Analytics", experience: "12+ Years", graduation: "IIT Delhi", details: "Specializes in advanced calculus and data-driven decision modeling.", image: founder2, logo: "MATHS" },
    { name: "Prof. Vijay Shekhar", subject: "Business Studies", experience: "20+ Years", graduation: "Delhi College of Engineering", details: "Veteran educator focused on entrepreneurship and business fundamentals.", image: founder3, logo: "BUSINESS" },
    { name: "Prof. Mekin Maheshwari", subject: "Human Resources", experience: "14+ Years", graduation: "BITS Pilani", details: "Expert in organizational behavior and talent management strategies.", image: founder1, logo: "HR" },
    { name: "Prof. Abhiraj Bhal", subject: "Accounting & Finance", experience: "16+ Years", graduation: "IIM Ahmedabad", details: "Focused on financial reporting, auditing, and corporate finance.", image: founder2, logo: "FINANCE" },
    { name: "Prof. Varun Khaitan", subject: "Science & Technology", experience: "11+ Years", graduation: "IIT Kanpur", details: "Passionate about simplifying complex scientific concepts for students.", image: founder3, logo: "SCIENCE" },
  ];

  return (
    <section id="faculty" className="bg-[#3D1111] py-20 px-6" data-testid="teachers-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            Our <span className="italic text-[#E8C170]">Teachers</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn from Delhi's most experienced educators with proven academic excellence.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="flex flex-col"
              data-testid={`teacher-card-${i}`}
            >
              {/* Paper-style card based on screenshot */}
              <div className="bg-[#FDFBF7] rounded-3xl p-8 shadow-xl relative aspect-[4/5] flex flex-col mb-6">
                <div className="text-[#3D1111]/40 text-xs font-bold uppercase tracking-widest mb-6 font-sans">
                  Faculty Profile
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="w-full h-full rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-[#3D1111] text-lg font-sans font-medium leading-relaxed">
                      "{teacher.details}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#3D1111]/10 flex items-center justify-between">
                      <span className="text-[#3D1111]/30 text-[10px] font-black uppercase tracking-widest font-sans">
                        - IDC FACULTY LOG
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content under the card */}
              <div className="text-center px-4">
                <h3 className="text-xl font-display text-white font-bold mb-1">
                  {teacher.name}
                </h3>
                <p className="text-[#E8C170] text-xs font-bold uppercase tracking-wider mb-2">
                  {teacher.subject}
                </p>
                <p className="text-white/60 text-sm">
                  {teacher.experience} Experience | {teacher.graduation}
                </p>
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
      company: "Modern Learning Center",
      description: "A complete redesign of classroom interiors to create a high-tech, minimalist environment that maximizes focus and student engagement.",
      image: coachingInstituteImg,
      color: "from-[#FDFBF7] to-[#F5F0E6]"
    },
    {
      company: "Academic Roadmap",
      description: "Developing a 24-month personalized growth plan for students to excel in competitive exams and board preparations.",
      image: teamPhoto,
      color: "from-[#FDFBF7] to-[#F5F0E6]"
    }
  ];

  return (
    <section id="projects" className="bg-[#EDE5D8] py-20 px-6" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display text-[#3D1111] mb-6">
            Our <span className="italic">Initiatives</span>
          </h2>
          <p className="text-[#3D1111]/60 text-lg max-w-2xl mx-auto">
            Practical projects and real-world learning modules designed to build confidence and academic excellence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white group"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={project.image} alt={project.company} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-8 border-t-4 border-[#E8C170]">
                <h3 className="font-display text-2xl text-[#3D1111] mb-4 uppercase tracking-tight">{project.company}</h3>
                <p className="text-[#3D1111]/70 leading-relaxed italic">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewAgeAcademics() {
  const features = [
    { icon: GraduationCap, title: "Expert Mentorship", description: "Guidance from Delhi's top educators." },
    { icon: BookOpen, title: "Practical Learning", description: "Applied concepts for deep clarity." },
    { icon: Award, title: "Proven Results", description: "Legacy of top academic performance." }
  ];

  return (
    <section id="academic-excellence" className="bg-[#3D1111] py-20 px-6" data-testid="academics-section">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-[#E8C170] text-xs mb-4 uppercase tracking-widest font-semibold">Academic Excellence</p>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
            Learn Fundamentals from <span className="font-bold">Subject Matter Experts</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <feature.icon className="text-[#E8C170] w-8 h-8 mb-4" />
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EligibilityCriteria() {
  const criteria = [
    { icon: GraduationCap, title: "Classes 6th - 12th", description: "Foundation to Advanced Board preparation." },
    { icon: Settings, title: "UG & PG Students", description: "University level exam support and professional guidance." }
  ];

  return (
    <section id="eligibility" className="bg-[#F5F0E6] py-20 px-6" data-testid="eligibility-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display text-[#3D1111] mb-12">Who Can <span className="italic text-[#E8C170]">Join Us?</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <item.icon size={32} className="text-[#3D1111] mb-4" />
              <h3 className="font-display text-xl text-[#3D1111] font-bold mb-2">{item.title}</h3>
              <p className="text-[#3D1111]/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundingCohort() {
  return null;
}

function Scholarships() {
  return (
    <section id="fees" className="bg-[#3D1111] py-20 px-6" data-testid="scholarships-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display text-white mb-8">
          Quality Education, <span className="italic text-[#E8C170]">Affordable Fees</span>
        </h2>
        <p className="text-white/60 mb-12 text-lg">
          We offer competitive fee structures and merit-based scholarships for high-performing students.
        </p>
        <div className="bg-gradient-to-br from-[#E8C170] to-[#A68A3A] p-10 rounded-2xl shadow-2xl inline-block">
          <p className="text-[#3D1111] text-2xl font-bold mb-2">Scholarships Available</p>
          <p className="text-[#3D1111]/80">Up to 75% waiver on tuition fees for exceptional candidates.</p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", text: "IDC helped me secure 95% in my boards. The teachers are incredible!", role: "Class 12th Student" },
    { name: "Priya Gupta", text: "The personalized attention at IDC made a huge difference in my performance.", role: "B.Com Student" },
    { name: "Amit Kumar", text: "Best coaching in Delhi for conceptual clarity and consistent results.", role: "Class 10th Student" }
  ];

  return (
    <section id="testimonials" className="bg-[#F5F0E6] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-[#3D1111] mb-12 text-center">
          What Our <span className="italic">Students Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#3D1111]/5"
            >
              <p className="text-[#3D1111]/70 italic mb-6">"{t.text}"</p>
              <div className="border-t border-[#3D1111]/10 pt-4">
                <p className="font-bold text-[#3D1111]">{t.name}</p>
                <p className="text-xs text-[#E8C170] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#3D1111] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display text-white mb-8">
          Start Your <span className="italic text-[#E8C170]">Success Journey</span>
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Join Ideology Classes Delhi today and experience the difference in your academic growth.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+919876543210"
            className="bg-[#E8C170] text-[#3D1111] px-10 py-4 rounded-full font-bold tracking-[0.1em]"
          >
            CALL US NOW
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:info@ideologyclasses.com"
            className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold tracking-[0.1em]"
          >
            EMAIL US
          </motion.a>
        </div>
      </div>
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
              Empowering students to achieve academic excellence through personalized and result-driven education in Delhi.
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
              {["Home", "Courses", "Faculty", "Success Stories"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-white/40 hover:text-[#E8C170] transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <a href="mailto:info@ideologyclasses.com" className="text-[#E8C170] font-bold text-sm block mb-4">info@ideologyclasses.com</a>
            <p className="text-white/40 text-sm">Location: Delhi</p>
            <p className="text-white/40 text-sm">+91 98765 43210</p>
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
      <Courses />
      <WhyChooseIDC />
      <Teachers />
      <InOfficeProjects />
      <NewAgeAcademics />
      <EligibilityCriteria />
      <Scholarships />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}