import { useState } from "react";
import { Menu, X, ArrowRight, GraduationCap, BookOpen, Briefcase, Award, Instagram, Youtube, Linkedin, Settings, Cpu } from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "@assets/generated_images/students-casual-gathering-selfie.png";
import founder1 from "@assets/generated_images/indian-businessman-founder-portrait.png";
import founder2 from "@assets/generated_images/young-indian-founder-portrait.png";
import founder3 from "@assets/generated_images/indian-fintech-founder-portrait.png";
import teamPhoto from "@assets/generated_images/business-team-office-photo.png";
import studentsGroup from "@assets/generated_images/college-students-celebration.png";
import studentGirl from "@assets/generated_images/indian-teen-girl-student.png";
import studentBoy from "@assets/generated_images/indian-teen-boy-glasses.png";
import professorImage from "@assets/generated_images/professor-lecture-classroom.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Hero() {
  return (
    <section className="relative min-h-screen" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3D1111]/60 to-[#3D1111] z-10" />
      <img
        src={heroImage}
        alt="Mesa students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-[#3D1111] font-bold text-lg">m</span>
          </div>
          <div className="text-white">
            <span className="font-bold text-lg">Mesa</span>
            <span className="text-[10px] block -mt-1 text-white/80 tracking-wider">SCHOOL OF BUSINESS</span>
          </div>
        </div>
      </div>
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <h1 className="text-[32px] md:text-5xl font-display text-white leading-[1.2] mb-6">
            A UG Program where you{" "}
            <span className="text-[#C5A047]">build businesses and learn outside the classroom</span>
          </h1>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          href="#learn-more"
          className="mt-4 bg-[#F5F0E6] text-[#3D1111] px-6 py-4 rounded-lg flex items-center justify-between font-medium hover:bg-white transition-colors"
          data-testid="cta-learn-more"
        >
          <span className="text-sm tracking-wide">LEARN MORE</span>
          <ArrowRight size={20} />
        </motion.a>
      </div>
    </section>
  );
}

function PartnerLogos() {
  return (
    <section className="bg-[#F5F0E6] py-6 px-4" data-testid="partner-logos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-[#3D1111]/60 mb-2">Built by alumni from:</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-7 h-7 bg-[#A41034] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">H</span>
                </div>
                <div className="text-[10px] leading-tight">
                  <span className="font-bold text-[#A41034]">Harvard</span>
                  <span className="block text-[#A41034]">Business</span>
                  <span className="block text-[#A41034]">School</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <span className="text-sm font-bold text-[#4E2A84]">Northwestern<br/>Kellogg</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#3D1111]/60 mb-2">Supported by Founders from:</p>
            <div className="flex flex-wrap items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
              <span className="text-sm font-bold text-[#00BAF2]">Pay<span className="text-[#00265C]">tm</span></span>
              <span className="text-sm font-bold text-gray-700">⊙ CRED</span>
              <span className="text-sm font-bold text-gray-600">UC Urban Company</span>
              <span className="text-sm font-bold text-[#570F54]">meesho</span>
              <span className="text-sm font-bold text-orange-500">🥡 SWIGGY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {supporters.map((supporter, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-[#F5F0E6] rounded-xl overflow-hidden"
              data-testid={`supporter-card-${i}`}
            >
              <div className="p-4 flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#C5A047] p-1">
                    <img
                      src={supporter.image}
                      alt={supporter.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-[#3D1111] text-lg leading-tight">
                    <span className="font-bold">{supporter.name.split(" ")[0]}</span>{" "}
                    <span className="font-normal">{supporter.name.split(" ").slice(1).join(" ")}</span>
                  </h3>
                  <p className="text-sm text-[#3D1111]/70 mt-0.5">{supporter.role}</p>
                  <p className="text-xs text-[#3D1111]/60 mt-1 whitespace-pre-line leading-relaxed">{supporter.details}</p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="pt-3 border-t border-[#3D1111]/10">
                  <span className="text-sm font-bold text-[#3D1111]/80">{supporter.logo}</span>
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
      image: teamPhoto
    },
    {
      company: "Blue Tokai",
      description: "Blue Tokai wanted to expand their footprint smartly by selecting new café locations backed by data. Mesa students built a site selection model using blended demographics, foot traffic, competition, and customer decision-making insights.",
      image: teamPhoto
    }
  ];

  return (
    <section className="bg-[#F5EDE0] py-12 px-4" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display text-[#3D1111] mb-3">
            In Office <span className="font-bold">Projects</span>
          </h2>
          <p className="text-[#3D1111]/70 text-sm mb-6 max-w-md leading-relaxed">
            Students work on projects that move real business metrics, work in teams, and are a part of important meetings with the leadership team.
          </p>
        </motion.div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x scrollbar-hide">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-[320px] rounded-xl overflow-hidden snap-start flex-shrink-0"
              data-testid={`project-card-${i}`}
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#C5A047]">
                <h3 className="font-display text-lg text-[#3D1111] font-medium mb-2">{project.company}</h3>
                <p className="text-xs text-[#3D1111]/80 leading-relaxed">{project.description}</p>
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
            className="bg-[#2A0E0E] rounded-xl p-4 mb-4"
          >
            <p className="text-white/60 text-xs font-medium mb-3 uppercase tracking-wider">TECHNIQUES</p>
            <div className="flex flex-wrap gap-3">
              {techniques.map((tech, i) => (
                <div key={i} className="flex items-center gap-2 text-white pb-2 border-b-2 border-[#C5A047]">
                  <tech.icon size={16} className="text-white/80" />
                  <span className="text-sm">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={professorImage}
            alt="Professor teaching"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1111]/90 via-[#3D1111]/60 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-4">
          <p className="text-[#C5A047] text-xs mb-2 uppercase tracking-wider">New-age Academics</p>
          <h2 className="text-2xl font-display text-white leading-tight max-w-xs">
            Learn business <span className="font-bold">fundamentals</span> from world-renowned experts
          </h2>
        </div>
      </div>

      <div className="bg-[#3D1111] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="min-w-[140px] bg-[#5C1919] rounded-xl p-4 flex-shrink-0"
                data-testid={`feature-card-${i}`}
              >
                <feature.icon size={20} className="text-[#C5A047] mb-2" />
                <h3 className="font-display text-white text-sm mb-1 leading-tight">{feature.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{feature.description}</p>
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
        <div className="rounded-xl overflow-hidden mb-6">
          <img
            src={studentsGroup}
            alt="Mesa students celebration"
            className="w-full h-52 object-cover"
          />
        </div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="flex items-start gap-4"
              data-testid={`criteria-${i}`}
            >
              <div className="w-10 h-10 bg-[#3D1111]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon size={20} className="text-[#3D1111]" />
              </div>
              <div>
                <h3 className="font-display text-[#C5A047] font-bold">{item.title}</h3>
                <p className="text-[#3D1111]/70 text-sm mt-0.5">{item.description}</p>
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
          <p className="text-white/60 text-sm mb-6">
            A peek into the 100 builders, creators, and innovators who make up Mesa's Founder's Batch
          </p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {students.map((student, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-gradient-to-br from-[#6B2D2D] to-[#4A1F1F] rounded-xl p-3 relative overflow-hidden"
              data-testid={`student-card-${i}`}
            >
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[100px]">
                <div>
                  <h3 className="font-display text-white text-base leading-tight">
                    <span className="font-bold">{student.firstName}</span>{" "}
                    <span className="font-normal opacity-70">{student.lastName}</span>
                  </h3>
                  <p className="text-[#C5A047] text-xs italic mt-1">{student.school}</p>
                  <p className="text-white/50 text-[10px] mt-0.5">{student.city}</p>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-20 h-24">
                <img
                  src={student.image}
                  alt={student.firstName}
                  className="w-full h-full object-cover object-top rounded-tl-xl"
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
    { name: "Bob the Builder", subtitle: "Scholarship", description: "for builders who have built businesses or products in the past & want to continue doing so", color: "bg-gradient-to-br from-[#7CB342] to-[#558B2F]" },
    { name: "Merit-Based", subtitle: "Scholarship", description: "for applicants with exceptional academic performance and extracurricular hustle", color: "bg-gradient-to-br from-[#C5A047] to-[#A68A3A]" },
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
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/60 text-sm">{fee.year}</span>
                <span className="text-white text-sm">{fee.amount}</span>
              </div>
            ))}
            <div className="flex justify-between items-center py-2 bg-white/5 rounded px-2 -mx-2">
              <span className="text-white font-bold text-sm">Total</span>
              <span className="text-white font-bold text-sm">₹ 48,00,000</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#C5A047]/20 border border-[#C5A047]/30 rounded-xl p-4 mb-8"
        >
          <p className="text-white text-sm">
            We provide scholarships of up to 75% on tuition fee for high-performing candidates
          </p>
          <p className="text-white/50 text-xs mt-2">
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
          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            The Mesa cohort comprises exceptional & diverse candidates. We are committed to eliminating all financial barriers for these outstanding candidates, guaranteeing an unparalleled peer learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {scholarships.map((scholarship, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${scholarship.color} rounded-xl p-4 min-h-[180px] relative overflow-hidden`}
              data-testid={`scholarship-card-${i}`}
            >
              <h3 className="font-display text-[#3D1111] text-base leading-tight">
                <span className="font-bold">{scholarship.name}</span>{" "}
                <span className="font-normal">{scholarship.subtitle}</span>
              </h3>
              <p className="text-[#3D1111]/70 text-xs mt-2 leading-relaxed">{scholarship.description}</p>
            </motion.div>
          ))}
        </div>
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
        href="#apply"
        className="bg-[#F5F0E6] text-[#3D1111] px-6 py-4 rounded-lg flex items-center justify-between font-medium hover:bg-white transition-colors w-full"
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
        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
            <span className="text-[#3D1111] font-bold text-xl">m</span>
          </div>
          <div className="text-white">
            <span className="font-bold text-lg">Mesa</span>
            <span className="text-[10px] block -mt-0.5 text-white/70 tracking-wider">SCHOOL OF BUSINESS</span>
          </div>
        </div>

        <div className="text-white/60 text-sm mb-4 leading-relaxed">
          <p>Wework, Salarpuria Symbiosis Road,</p>
          <p>Bannerghatta Road, Begur Hobli,</p>
          <p>Bengaluru Urban,</p>
          <p>Karnataka, 560076.</p>
        </div>

        <div className="flex gap-4 text-[#C5A047] text-sm mb-6">
          <a href="#" className="hover:underline" data-testid="link-terms">Terms of use</a>
          <a href="#" className="hover:underline" data-testid="link-privacy">Privacy policy</a>
        </div>

        <div className="mb-6">
          <h4 className="text-[#C5A047] font-display italic mb-2">Contact Us</h4>
          <a href="mailto:info@mesaschool.co" className="text-white/60 text-sm hover:text-white" data-testid="link-email">
            info@mesaschool.co
          </a>
          <div className="flex gap-3 mt-3">
            <a href="#" className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" data-testid="social-instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" data-testid="social-youtube">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" data-testid="social-linkedin">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-[#C5A047] font-display italic mb-2">Quick Links</h4>
          <div className="flex flex-col gap-1.5">
            <a href="#" className="text-white/60 text-sm hover:text-white" data-testid="quick-home">Home</a>
            <a href="#" className="text-white/60 text-sm hover:text-white" data-testid="quick-learning">Learning</a>
            <a href="#" className="text-white/60 text-sm hover:text-white" data-testid="quick-program">UG Program</a>
            <a href="#" className="text-white/60 text-sm hover:text-white" data-testid="quick-outcomes">Outcomes</a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-white/40 text-sm">© 2025 Mesa School of Business</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#3D1111]">
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