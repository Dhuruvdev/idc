import { useState, useEffect, useMemo } from "react";
import { ArrowRight, GraduationCap, BookOpen, Briefcase, Award, Instagram, Youtube, Linkedin, Settings, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
import classImage from "@assets/2023-05-05_(1)_1768112432434.jpg";
import instImage1 from "@assets/2025-10-12_1768114896704.jpg";
import instImage2 from "@assets/2022-10-01_1768114974148.jpg";
import instImage3 from "@assets/2023-05-05_1768115021388.jpg";
import instImage4 from "@assets/download_1768115039330.jpeg";
import instImage5 from "@assets/2023-05-05_(2)_1768115067792.jpg";
import classImage2 from "@assets/2023-05-05_(4)_1768114220016.jpg";

// Placeholder imports for generated institute images
import inst1 from "@assets/generated_images/modern_coaching_institute_classroom_interior.png";
import inst2 from "@assets/generated_images/institute_reception_and_lounge_area.png";
import inst3 from "@assets/generated_images/institute_computer_lab_facility.png";

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
      transition: { type: "spring", stiffness: 400, damping: 40, delay: 0.2 } as any
    },
    opened: {
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 } as any
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
        ease: [0.215, 0.61, 0.355, 1] as any
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
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#3D1111] z-10" />
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 2, ease: "circOut" }} 
        src={classImage} 
        alt="IDC Students" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E8C170] text-[10px] font-black tracking-[0.4em] uppercase mb-8">
            Delhi's Premier Coaching Institute
          </span>
          <h1 className="text-6xl md:text-9xl font-display text-white leading-[0.9] mb-8 tracking-tighter">
            { "Future".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block w-4 md:w-8" />
            <span className="italic font-light text-[#E8C170]">Builders</span><br />
            of <span className="font-bold underline decoration-[#E8C170]/30 underline-offset-8">India</span>
          </h1>
          <p className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed">
            Exclusive coaching for Classes 6th–12th, UG, and PG levels in Delhi. <br className="hidden md:block" /> Result-driven education for Delhi's brightest minds.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <motion.a 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -10px rgba(232,193,112,0.3)",
                rotate: 2
              }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E8C170] text-[#3D1111] px-12 py-6 rounded-full flex items-center gap-4 font-black transition-all"
              data-testid="button-get-in-touch"
            >
              <span className="text-xs tracking-[0.3em]">ENROLL NOW</span>
              <div className="w-8 h-8 rounded-full bg-[#3D1111] text-[#E8C170] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </motion.a>
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.15)",
                rotate: -2
              }}
              whileTap={{ scale: 0.98 }}
              href="#faculty" 
              className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-6 rounded-full flex items-center gap-4 font-black transition-all"
            >
              <span className="text-xs tracking-[0.3em]">OUR FACULTY</span>
              <GraduationCap size={20} className="text-[#E8C170]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Courses() {
  const courses = [
    { title: "Classes 6th–10th", description: "Strengthen your core concepts in Maths, Science, English, and Social Studies with expert-led sessions in Delhi.", tags: ["Foundation", "Maths", "Science"], icon: <BookOpen className="w-6 h-6" /> },
    { title: "Classes 11th–12th (Commerce)", description: "Specialized coaching for core commerce subjects to build a strong professional base for Delhi's future leaders.", tags: ["Accounts", "Economics", "Business Studies", "Applied Maths"], icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Undergraduate (UG)", description: "Special guidance for B.Com, B.A., B.Sc., and other university-level exams in Delhi's top colleges.", tags: ["B.Com", "B.A", "B.Sc"], icon: <Briefcase className="w-6 h-6" /> },
    { title: "Postgraduate (PG)", description: "Expert mentors in Delhi to help you excel in M.Com, M.A., and advanced academic goals.", tags: ["M.Com", "M.A", "Advanced"], icon: <Award className="w-6 h-6" /> },
    { title: "English & Personality", description: "Improve communication, fluency, and confidence through structured programs in Delhi.", tags: ["Fluency", "Confidence", "Soft Skills"], icon: <Settings className="w-6 h-6" /> }
  ];
  return (
    <section id="courses" className="bg-[#F5F0E6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-[#3D1111] mb-6">Our <span className="italic text-[#E8C170]">Programs in Delhi</span></h2>
          <p className="text-[#3D1111]/60 text-xl max-w-3xl mx-auto">Comprehensive Coaching for Every Stage of Learning. We build strong foundations for success only in Delhi.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl shadow-xl border border-[#3D1111]/5 group transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-[#3D1111] text-[#E8C170] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{course.icon}</div>
              <h3 className="text-2xl font-display font-bold text-[#3D1111] mb-2">{course.title}</h3>
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

function Institute() {
  const images = [
    { title: "Our Classroom", image: classImage },
    { title: "Modern Classrooms", image: inst1 },
    { title: "Reception Area", image: inst2 },
    { title: "Computer Lab", image: inst3 },
    { title: "Study Hall", image: inst1 },
    { title: "Library", image: inst2 }
  ];
  return (
    <section id="institute" className="bg-[#3D1111] py-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8C170] blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto mb-20 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#E8C170] text-[10px] font-black tracking-[0.5em] uppercase mb-4 block"
        >
          Gallery
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-white text-5xl md:text-8xl font-display mb-8 tracking-tighter"
        >
          Life at <span className="italic font-light text-[#E8C170]">IDC</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.1 }} 
          className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed font-sans font-light"
        >
          Experience our world-class facilities designed to provide the perfect environment for focused learning.
        </motion.p>
      </div>

      <div className="flex gap-8 md:gap-12 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory relative z-10 px-4">
        {images.map((item, i) => (
          <motion.div 
            key={i} 
            custom={i} 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[300px] md:w-[600px] snap-center group relative flex flex-col rounded-[3rem] overflow-hidden border border-[#3D1111]/5 bg-white shadow-xl hover-elevate" 
            data-testid={`institute-card-${i}`}
          >
            <div className="p-4 md:p-8 h-[400px] md:h-[600px]">
              <div className="relative h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:scale-[1.03] transition-transform duration-1000 border border-[#3D1111]/5">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                  <h3 className="text-white text-3xl font-display italic">{item.title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const faqs = [
    {
      question: "What are the coaching timings?",
      answer: "We offer flexible timings from 8 AM to 8 PM. Specific batch timings depend on the grade and subject."
    },
    {
      question: "Do you provide trial classes?",
      answer: "Yes, we provide 2 complimentary trial classes for students to experience our teaching methodology."
    },
    {
      question: "What is the average batch size?",
      answer: "To ensure personalized attention, we maintain a small batch size of 10-15 students."
    },
    {
      question: "Are there regular tests and assessments?",
      answer: "Yes, we conduct weekly chapter-wise tests and monthly comprehensive assessments with detailed progress reports."
    }
  ];

  return (
    <section className="bg-[#FDFBF7] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display text-[#3D1111] mb-6">Common <span className="italic text-[#E8C170]">Questions</span></h2>
          <p className="text-[#3D1111]/60 text-lg">Everything you need to know about starting your journey with IDC.</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[#3D1111]/5 rounded-2xl px-6 shadow-sm">
              <AccordionTrigger className="text-[#3D1111] font-bold text-lg hover:no-underline hover:text-[#E8C170] transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#3D1111]/70 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FindUs() {
  const { toast } = useToast();
  
  const contactFormSchema = useMemo(() => z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    subject: z.string().min(2, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  }), []);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    const whatsappNumber = "919999999999";
    const text = `*New Contact Request from IDC Website*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Subject:* ${data.subject}\n*Message:* ${data.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to send the message securely.",
    });
    form.reset();
  };

  return (
    <section id="find-us" className="bg-[#FDFBF7] py-24 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#E8C170]/5 blur-[100px] rounded-full" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-12">
              <h2 className="text-5xl md:text-8xl font-display text-[#3D1111] mb-6 tracking-tighter">Get in <span className="italic text-[#E8C170]">Touch</span></h2>
              <p className="text-[#3D1111]/60 text-xl font-light max-w-xl">Have questions? We're here to help you navigate your academic journey.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-[#3D1111]/5 relative z-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#3D1111]/40 uppercase tracking-[0.3em] text-[10px] font-black">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-[#3D1111]/5 border-0 rounded-2xl p-6 h-auto focus-visible:ring-1 focus-visible:ring-[#E8C170]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#3D1111]/40 uppercase tracking-[0.3em] text-[10px] font-black">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-[#3D1111]/5 border-0 rounded-2xl p-6 h-auto focus-visible:ring-1 focus-visible:ring-[#E8C170]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#3D1111]/40 uppercase tracking-[0.3em] text-[10px] font-black">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" className="bg-[#3D1111]/5 border-0 rounded-3xl p-6 min-h-[150px] focus-visible:ring-1 focus-visible:ring-[#E8C170] resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-[#3D1111] hover:bg-[#2A0C0C] text-[#E8C170] py-8 rounded-full font-black flex items-center justify-center gap-4 transition-all group overflow-hidden relative">
                    <span className="relative z-10 tracking-[0.4em] text-xs uppercase">Send WhatsApp Message</span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8C170]/0 via-[#E8C170]/5 to-[#E8C170]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="lg:col-span-5 h-full flex flex-col gap-8"
          >
            <div className="flex-1 min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-[#3D1111]/10 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.956799052029!2d77.216656315083!3d28.63045698242036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3639999999%3A0x2f1b111111111111!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625654321000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-[#3D1111]/5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#3D1111] text-[#E8C170] flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3D1111] mb-1">Our Location</h3>
                    <p className="text-[#3D1111]/60 text-xs leading-relaxed">N-35/1, Connaught Place, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <img src={classImage2} alt="IDC Students Success" className="rounded-3xl shadow-2xl relative z-10 w-full aspect-square object-cover" />
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
            <motion.div key={i} custom={i} variants={cardVariants} className="flex-shrink-0 w-[280px] md:w-[450px] snap-center group relative flex flex-col bg-[#FDFBF7] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#3D1111]/5 hover-elevate" data-testid={`teacher-card-${i}`}>
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

function InstituteGallery() {
  const images = [
    { src: instImage1, alt: "Active Classroom Learning" },
    { src: instImage5, alt: "Interactive Teaching Session" },
    { src: instImage2, alt: "Focused Study Environment" },
    { src: instImage3, alt: "Clean & Spacious Classrooms" },
    { src: instImage4, alt: "Organized Learning Space" }
  ];

  return (
    <section id="institute" className="py-24 px-6 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-[#3D1111] mb-6">Inside <span className="italic text-[#E8C170]">IDC Delhi</span></h2>
          <p className="text-[#3D1111]/60 text-xl max-w-3xl mx-auto">A glimpse into our vibrant learning environment where Delhi's future leaders are shaped.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-[2rem] overflow-hidden group shadow-xl border border-[#3D1111]/5 hover-elevate"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D1111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-[#E8C170] font-display text-xl italic tracking-tight">{image.alt}</p>
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
      data-testid={`testimonial-card-${i}`}
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
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#3D1111] py-16 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8C170]/30 to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#E8C170] transition-all duration-500 shadow-xl">
              <img src={idcLogo} alt="IDC Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-sans text-3xl font-black text-white tracking-tighter leading-none">IDC</h2>
              <p className="text-[#E8C170] text-[8px] font-black tracking-[0.4em] uppercase mt-1">Delhi's Premier Coaching</p>
            </div>
          </div>
          <p className="text-white/40 text-xs font-medium max-w-xs text-center md:text-left leading-relaxed">
            Empowering Academic Excellence only in Delhi. Result-driven education for a brighter future.
          </p>
        </div>
        
        <div className="flex gap-10">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Youtube, label: "YouTube" },
            { Icon: Linkedin, label: "LinkedIn" }
          ].map(({ Icon, label }) => (
            <motion.a 
              key={label}
              whileHover={{ y: -5, color: "#E8C170" }}
              href="#" 
              className="text-white/30 transition-colors flex flex-col items-center gap-2"
            >
              <Icon size={20} />
              <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
            </motion.a>
          ))}
        </div>

        <div className="text-center md:text-right space-y-2">
          <div className="text-white/30 text-[10px] font-black tracking-[0.2em] uppercase">
            &copy; {currentYear} IDC Coaching Institute
          </div>
          <p className="text-white/20 text-[9px] font-medium uppercase tracking-[0.1em]">
            Developed with excellence for Future Builders of India
          </p>
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
      <Institute />
      <WhyChooseIDC />
      <InstituteGallery />
      <Teachers />
      <Testimonials />
      <FAQ />
      <FindUs />
      <Footer />
    </div>
  );
}
