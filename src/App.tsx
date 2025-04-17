import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Moon, Sun } from 'lucide-react';
import { certificates, projects, education, expertise } from './data';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored !== null ? JSON.parse(stored) : true; // Default to dark
    }
    return true; // Default to dark mode when rendering on server
  });

  const [isScrolled, setIsScrolled] = useState(false); // <-- ADD THIS
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {  // <-- ADD THIS useEffect
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(selectedSkills.filter((name) => name !== skillName));
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    window.location.href = `mailto:gsrinagacharan123@gmail.com?subject=Portfolio Contact: ${data.name}&body=${data.message}%0D%0A%0D%0AFrom: ${data.email}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      
      {/* Top Navigation */}
      <div className="fixed top-6 right-6 flex items-center gap-8 z-50 backdrop-blur-md bg-white/30 dark:bg-transparent rounded-full px-6 py-2 shadow-lg">
  <nav className="flex gap-6 text-sm sm:text-base">
    {[
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Education', href: '#education' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Projects', href: '#projects' },
      { label: 'Certifications', href: '#certifications' },
    ].map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className={`relative font-semibold tracking-wide transition duration-300 ${
          darkMode ? 'text-white' : (isScrolled ? 'text-black' : 'text-white')
        } hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
      >
        {label}
      </a>
    ))}
  </nav>

  {/* Dark Mode Toggle */}
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-white" />}
  </button>
</div>



      {/* Hero Section */}
      <header id="home" className="relative h-[1100px] flex items-center justify-center bg-gradient-to-r from-gray-800 to-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-7xl md:text-5xl sm:text-3xl font-bold mb-6">Sri Naga Charan G</h1>
          <p className="text-3xl md:text-xl sm:text-lg mb-8">Data & Cloud Portfolio</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-xl transition">Hire Me</a>
            <a href="https://drive.google.com/file/d/1Oirj2Rzxfxs4ujlgM0XshaTM04uS6Wc2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold text-xl transition flex items-center gap-2">
              <Download size={32} /> Download Resume
            </a>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            {['Education', 'Expertise', 'Projects', 'Certifications'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white text-2xl hover:text-blue-400 transition">{item}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto text-center md:text-left">
          
            {/* Left: Profile Image */}
            <div className="w-[190px] h-[190px] md:w-[150px] md:h-[150px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <img 
              src="/logos/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            </div>

            {/* Right: About Info */}
            <div className="max-w-3xl">
              <p className="text-lg mb-6 text-left">
                I am a Master’s student in Data Science at the University at Buffalo, SUNY, graduating in June 2025. 
                With expertise in cloud architecture, data engineering, and machine learning, I have built scalable 
                data pipelines, cloud solutions, and data-driven applications.
              </p>
              <p className="text-lg mb-6 text-left">
                I am an AWS Certified Solutions Architect and Databricks Certified Data Engineer Associate, with hands-on 
                experience in Python, SQL, Power BI, Tableau, AWS, Azure, Apache Spark, Linux, Jenkins, Docker, and Kubernetes. 
                My work focuses on optimizing data workflows, implementing automation, and leveraging big data frameworks 
                for impactful solutions.
              </p>
              <p className="text-lg mb-6 text-left">
                Passionate about solving real-world data problems, I am actively seeking full-time opportunities in 
                data science, cloud engineering, or analytics, where I can contribute my skills and drive innovation.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/Charan282" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/srinagacharang/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:gsrinagacharan123@gmail.com"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="relative border-l-4 border-blue-500 dark:border-blue-400 max-w-3xl mx-auto">
            
            {/* University at Buffalo */}
            <div className="mb-10 ml-6 relative">
              <div className="absolute -left-8 top-2 w-8 h-8 flex items-center justify-center bg-blue-500 dark:bg-blue-400 text-white rounded-full shadow-lg">
                🎓
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">University at Buffalo, SUNY</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Master of Science in Data Science</p>
                <p className="text-md text-gray-600 dark:text-gray-400">Jan 2024 - May 2025</p>
                <p className="text-md mt-2">Relevant Coursework: Machine Learning, Statistical Data Mining, Python, SQL & Power BI</p>
              </div>
            </div>

            {/* Pragati Engineering College */}
            <div className="ml-6 relative">
              <div className="absolute -left-8 top-2 w-8 h-8 flex items-center justify-center bg-blue-500 dark:bg-blue-400 text-white rounded-full shadow-lg">
                🏛️
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Pragati Engineering College</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Bachelor of Technology in Mechanical Engineering</p>
                <p className="text-md text-gray-600 dark:text-gray-400">Aug 2019 - May 2023</p>
                <p className="text-md mt-2">Relevant Coursework: AutoCAD, Automation</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => toggleSkill(skill.name)}
                onMouseEnter={() => setShowTooltip(true)}
              >
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  {!selectedSkills.includes(skill.name) && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm text-gray-500 dark:text-gray-400">
                      Tap to view skills
                    </div>
                  )}
                  {selectedSkills.includes(skill.name) && (
                    <div className="mt-4 text-sm animate-fadeIn">
                      <ul className="space-y-1">
                        {skill.skills.map((s, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 py-1 px-2 rounded-md bg-gray-50 dark:bg-gray-700">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Projects Section */}
       <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                      <Github size={20} /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                        <ExternalLink size={20} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Certifications Section */}
       <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center p-4">
                  <img src={cert.image} alt={cert.name} className="w-40 h-40 object-contain" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Issued by {cert.issuer}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Uncover Insights Together</h2>
                <p className="text-lg mb-8">Let's chat about how I can bring value to your team or project.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span>1525 Amherst Manor Dr, Buffalo, NY, USA, 14221</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <a href="mailto:gsrinagacharan123@gmail.com">gsrinagacharan123@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <a href="tel:+17167300926">+1 (716) 730-0926</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="w-6 h-6 text-blue-600" />
                    <a href="https://github.com/Charan282" target="_blank" rel="noopener noreferrer">
                      github.com/Charan282
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
