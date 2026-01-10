import { useState } from "react";
import { Menu, X, ArrowRight, GraduationCap, BookOpen, Briefcase, Award, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-mesa-maroon-dark/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2" data-testid="logo">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-mesa-maroon font-bold text-lg">m</span>
          </div>
          <div className="text-white">
            <span className="font-bold text-lg">Mesa</span>
            <span className="text-[10px] block -mt-1 text-white/80 tracking-wider">SCHOOL OF BUSINESS</span>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
          data-testid="menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-mesa-maroon-dark border-t border-white/10 p-4"
        >
          <div className="flex flex-col gap-4 text-white">
            <a href="#" className="hover:text-mesa-gold transition-colors" data-testid="nav-home">Home</a>
            <a href="#" className="hover:text-mesa-gold transition-colors" data-testid="nav-learning">Learning</a>
            <a href="#" className="hover:text-mesa-gold transition-colors" data-testid="nav-program">UG Program</a>
            <a href="#" className="hover:text-mesa-gold transition-colors" data-testid="nav-outcomes">Outcomes</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mesa-maroon/50 to-mesa-maroon z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80')`,
        }}
      />
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-mesa-maroon font-bold text-lg">m</span>
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
          <h1 className="text-4xl md:text-5xl font-display text-white leading-tight mb-6">
            A UG Program where you{" "}
            <span className="text-mesa-gold">build businesses and learn outside the classroom</span>
          </h1>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          href="#learn-more"
          className="mt-6 bg-mesa-cream text-mesa-maroon px-6 py-4 rounded-lg flex items-center justify-between font-medium hover:bg-white transition-colors"
          data-testid="cta-learn-more"
        >
          <span>LEARN MORE</span>
          <ArrowRight size={20} />
        </motion.a>
      </div>
    </section>
  );
}

function PartnerLogos() {
  const alumni = ["Harvard Business School", "Kellogg"];
  const founders = ["Paytm", "CRED", "Urban Company", "Meesho", "Swiggy"];

  return (
    <section className="bg-mesa-cream py-8 px-4" data-testid="partner-logos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <p className="text-sm text-mesa-maroon/70 mb-2">Built by alumni from:</p>
            <div className="flex items-center gap-4">
              {alumni.map((name, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <div className="w-8 h-8 bg-mesa-maroon rounded flex items-center justify-center">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-mesa-maroon">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-mesa-maroon/70 mb-2">Supported by Founders from:</p>
            <div className="flex flex-wrap items-center gap-3">
              {founders.map((name, i) => (
                <span key={i} className="text-sm font-semibold text-mesa-maroon/80 bg-white rounded px-3 py-1.5 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Supporters() {
  const supporters = [
    { name: "Kunal Shah", company: "CRED", role: "Cred Founder", details: "Advisor - Sequoia Capital\nAdvisor - AngelList\nAvid Angel Investor" },
    { name: "Vidit Aatrey", company: "meesho", role: "Meesho Founder", details: "IIT Delhi\nEx - InMobi" },
    { name: "Vijay Shekhar", company: "Paytm", role: "Paytm Founder", details: "Delhi College of Engineering\nAvid Angel Investor" },
    { name: "Mekin Maheshwari", company: "Udhyam", role: "Udhyam Founder", details: "Ex - Flipkart\nAvid Angel Investorz" },
    { name: "Abhiraj Bhal", company: "Urban Company", role: "Urban Company Founder", details: "IIM Ahmedabad\nIIT Kanpur" },
    { name: "Varun Khaitan", company: "Urban Company", role: "Urban Company Founder", details: "IIT Kanpur\nEx - BCG" },
  ];

  return (
    <section className="bg-mesa-maroon py-16 px-4" data-testid="supporters-section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-display text-white mb-12"
        >
          Supporters and <span className="underline decoration-mesa-gold underline-offset-4">Investors</span>
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {supporters.map((supporter, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-mesa-cream rounded-xl p-5 relative overflow-hidden"
              data-testid={`supporter-card-${i}`}
            >
              <div className="flex items-start gap-4">
                <div className="profile-ring flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mesa-cream to-mesa-cream-dark flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                      <span className="text-2xl font-display text-mesa-maroon">{supporter.name[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-mesa-maroon">
                    <span className="font-bold">{supporter.name.split(" ")[0]}</span>{" "}
                    <span className="font-normal">{supporter.name.split(" ").slice(1).join(" ")}</span>
                  </h3>
                  <p className="text-sm text-mesa-maroon/70 mt-1">{supporter.role}</p>
                  <p className="text-xs text-mesa-maroon/60 mt-2 whitespace-pre-line">{supporter.details}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-mesa-maroon/10">
                <span className="text-sm font-semibold text-mesa-maroon/80">{supporter.company}</span>
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
      description: "As competition heated up in the high-protein yogurt space, Epigamia needed to decide whether to double down or pivot its strategy. Mesa students led market research, 100+ consumer interviews, and taste tests to uncover insights, then built a 24-month roadmap across brand, product, and growth."
    },
    {
      company: "Blue Tokai",
      description: "Blue Tokai wanted to expand their footprint smartly by selecting new café locations backed by data. Mesa students built a site selection model using blended demographics, foot traffic, competition, and customer decision-making insights."
    }
  ];

  return (
    <section className="bg-mesa-cream-dark py-16 px-4" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display text-mesa-maroon mb-4">
            In Office <span className="font-bold">Projects</span>
          </h2>
          <p className="text-mesa-maroon/70 mb-8 max-w-2xl">
            Students work on projects that move real business metrics, work in teams, and are a part of important meetings with the leadership team.
          </p>
        </motion.div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] bg-mesa-gold rounded-xl overflow-hidden snap-start flex-shrink-0"
              data-testid={`project-card-${i}`}
            >
              <div className="h-48 bg-gradient-to-br from-mesa-maroon/20 to-transparent relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Briefcase size={32} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5 bg-mesa-gold">
                <h3 className="font-display text-xl text-mesa-maroon font-bold mb-3">{project.company}</h3>
                <p className="text-sm text-mesa-maroon/80 leading-relaxed">{project.description}</p>
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

  const techniques = ["Prompt Engineering 101", "Reading API Docs", "Voice transcript synthesis"];

  return (
    <section className="relative py-16" data-testid="academics-section">
      <div className="absolute inset-0 bg-gradient-to-b from-mesa-maroon via-mesa-maroon-dark to-mesa-maroon" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-mesa-maroon-dark/50 backdrop-blur rounded-2xl p-6 mb-8"
        >
          <p className="text-mesa-gold text-sm font-medium mb-2 uppercase tracking-wider">TECHNIQUES</p>
          <div className="flex flex-wrap gap-4">
            {techniques.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  <BookOpen size={16} />
                </div>
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mesa-maroon-dark/90 to-transparent z-10" />
          <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-6">
            <p className="text-mesa-gold text-sm mb-2">New-age Academics</p>
            <h2 className="text-2xl md:text-3xl font-display text-white leading-tight">
              Learn business <span className="font-bold">fundamentals</span> from world-renowned experts
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-mesa-maroon border border-mesa-gold/30 rounded-xl p-4"
              data-testid={`feature-card-${i}`}
            >
              <feature.icon size={24} className="text-mesa-gold mb-3" />
              <h3 className="font-display text-white text-lg mb-1">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CTAButton />
    </section>
  );
}

function EligibilityCriteria() {
  const criteria = [
    { icon: GraduationCap, title: "Education", description: "Students currently enrolled in Class XIIth & Pass-outs (2024 onwards)" },
    { icon: Award, title: "Stream", description: "Students from any stream can apply for the program" }
  ];

  return (
    <section className="bg-mesa-cream py-16 px-4" data-testid="eligibility-section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-display text-mesa-maroon mb-8"
        >
          Eligibility Criteria
        </motion.h2>
        <div className="rounded-2xl overflow-hidden mb-8">
          <div className="h-64 bg-gradient-to-br from-amber-800 to-amber-900 flex items-center justify-center">
            <div className="text-center">
              <GraduationCap size={64} className="text-mesa-cream mx-auto mb-4" />
              <p className="text-mesa-cream text-lg">Student Community</p>
            </div>
          </div>
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
              className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
              data-testid={`criteria-${i}`}
            >
              <div className="w-12 h-12 bg-mesa-maroon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon size={24} className="text-mesa-maroon" />
              </div>
              <div>
                <h3 className="font-display text-lg text-mesa-gold font-bold">{item.title}</h3>
                <p className="text-mesa-maroon/70 text-sm mt-1">{item.description}</p>
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
    { firstName: "Dyumna", lastName: "Madan", school: "Woodstock School", city: "Mussoorie" },
    { firstName: "Priyanshi", lastName: "M", school: "Delhi Public School", city: "Raipur" },
    { firstName: "Yagya Amit", lastName: "Bisani", school: "Fountainhead School", city: "Surat" },
    { firstName: "Garvit", lastName: "Tatiya", school: "Bodhi International School", city: "Jodhpur" },
    { firstName: "A R Aayush", lastName: "Jishnu", school: "Emerald International School", city: "Bengaluru" },
    { firstName: "Mahi", lastName: "Jain", school: "Jayshree Periwal International School", city: "Jaipur" },
  ];

  return (
    <section className="bg-mesa-maroon py-16 px-4" data-testid="cohort-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display text-white mb-2">
            Meet the <span className="font-bold">Founding Cohort</span>
          </h2>
          <p className="text-white/70 mb-8">
            A peek into the 100 builders, creators, and innovators who make up Mesa's Founder's Batch
          </p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {students.map((student, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-gradient-to-br from-amber-800/80 to-amber-900/80 rounded-xl p-4 relative overflow-hidden"
              data-testid={`student-card-${i}`}
            >
              <div className="relative z-10">
                <h3 className="font-display text-white text-lg">
                  <span className="font-bold">{student.firstName}</span>{" "}
                  <span className="font-normal opacity-80">{student.lastName}</span>
                </h3>
                <p className="text-mesa-gold text-sm italic mt-1">{student.school}</p>
                <p className="text-white/60 text-xs mt-1">{student.city}</p>
              </div>
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full" />
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
    { name: "Bob the Builder", subtitle: "Scholarship", description: "for builders who have built businesses or products in the past & want to continue doing so", color: "bg-gradient-green-card" },
    { name: "Merit-Based", subtitle: "Scholarship", description: "for applicants with exceptional academic performance and extracurricular hustle", color: "bg-gradient-gold-card" },
  ];

  return (
    <section className="bg-mesa-maroon py-16 px-4" data-testid="scholarships-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-mesa-maroon-dark/50 rounded-2xl p-6 mb-8"
        >
          <div className="space-y-3">
            {tuitionFees.map((fee, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                <span className="text-white/70">{fee.year}</span>
                <span className="text-white font-medium">{fee.amount}</span>
              </div>
            ))}
            <div className="flex justify-between items-center py-2 bg-white/5 rounded-lg px-3 -mx-3">
              <span className="text-white font-bold">Total</span>
              <span className="text-white font-bold">₹ 48,00,000</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-mesa-gold/20 border border-mesa-gold/30 rounded-xl p-4 mb-8"
        >
          <p className="text-white text-sm">
            We provide scholarships of up to 75% on tuition fee for high-performing candidates
          </p>
          <p className="text-white/60 text-xs mt-2">
            Fee is exclusive of accommodation charges of ₹3,50,000 per year and global immersion fee
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display text-white mb-4">
            Scholarships <span className="font-bold">Available</span>
          </h2>
          <p className="text-white/70 mb-8">
            The Mesa cohort comprises exceptional & diverse candidates. We are committed to eliminating all financial barriers for these outstanding candidates, guaranteeing an unparalleled peer learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {scholarships.map((scholarship, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${scholarship.color} rounded-xl p-5 min-h-[200px] relative overflow-hidden`}
              data-testid={`scholarship-card-${i}`}
            >
              <h3 className="font-display text-mesa-maroon text-lg">
                <span className="font-bold">{scholarship.name}</span>{" "}
                <span className="font-normal">{scholarship.subtitle}</span>
              </h3>
              <p className="text-mesa-maroon/70 text-sm mt-2">{scholarship.description}</p>
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
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        href="#apply"
        className="bg-mesa-cream text-mesa-maroon px-6 py-4 rounded-lg flex items-center justify-between font-medium hover:bg-white transition-colors w-full"
        data-testid="cta-apply"
      >
        <span>APPLY NOW</span>
        <ArrowRight size={20} />
      </motion.a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-mesa-maroon-dark py-12 px-4" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <span className="text-mesa-maroon font-bold text-xl">m</span>
          </div>
          <div className="text-white">
            <span className="font-bold text-xl">Mesa</span>
            <span className="text-xs block -mt-1 text-white/80 tracking-wider">SCHOOL OF BUSINESS</span>
          </div>
        </div>

        <div className="text-white/70 text-sm mb-6">
          <p>Wework, Salarpuria Symbiosis Road,</p>
          <p>Bannerghatta Road, Begur Hobli,</p>
          <p>Bengaluru Urban,</p>
          <p>Karnataka, 560076.</p>
        </div>

        <div className="flex gap-4 text-mesa-gold text-sm mb-8">
          <a href="#" className="hover:underline" data-testid="link-terms">Terms of use</a>
          <a href="#" className="hover:underline" data-testid="link-privacy">Privacy policy</a>
        </div>

        <div className="mb-8">
          <h4 className="text-mesa-gold font-display text-lg mb-2">Contact Us</h4>
          <a href="mailto:info@mesaschool.co" className="text-white/70 text-sm hover:text-white" data-testid="link-email">
            info@mesaschool.co
          </a>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" data-testid="social-instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" data-testid="social-youtube">
              <Youtube size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors" data-testid="social-linkedin">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-mesa-gold font-display italic text-lg mb-2">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-white/70 text-sm hover:text-white" data-testid="quick-home">Home</a>
            <a href="#" className="text-white/70 text-sm hover:text-white" data-testid="quick-learning">Learning</a>
            <a href="#" className="text-white/70 text-sm hover:text-white" data-testid="quick-program">UG Program</a>
            <a href="#" className="text-white/70 text-sm hover:text-white" data-testid="quick-outcomes">Outcomes</a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <p className="text-white/50 text-sm">© 2025 Mesa School of Business</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-mesa-maroon scroll-smooth">
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