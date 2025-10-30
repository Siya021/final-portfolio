import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  // Behance icon import removed as it's not in lucide-react
  MapPin, 
  Check,
  ArrowRight,
  Code, // Added for Skills
  Palette, // Added for Skills
  Globe, // Added for Skills
  ArrowLeft // Added for Projects carousel
} from 'lucide-react';

// --- (Behance Icon SVG) ---
// Added inline SVG component for Behance icon to resolve build error
const IconBehance = ({ size = 28, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3ZM9.2 14.1H6.6V10.2H9.1C10.7 10.2 11.5 11.1 11.5 12.2C11.5 13.3 10.7 14.1 9.2 14.1ZM16.1 11.9C15.1 11.9 14.4 12.5 14.4 13.7C14.4 14.9 15.1 15.6 16.1 15.6C17.1 15.6 17.8 14.9 17.8 13.7C17.8 12.5 17.1 11.9 16.1 11.9ZM9.1 8.3H6.6V9.3H9.1V8.3ZM17.4 8H13.8V9.1H17.4V8ZM18 10.2H13.8V11.2C14.4 10.9 15.2 10.7 16.1 10.7C17.8 10.7 18.9 11.8 18.9 13.7C18.9 15.6 17.8 16.8 16.1 16.8C15.2 16.8 14.4 16.6 13.8 16.2V16.8H12.7V10.2H11.6V8H12.7V7H13.8V8H18V10.2ZM9.2 15H6.6V16.8H9.3C11.3 16.8 12.7 15.6 12.7 13.6C12.7 11.5 11.4 10.1 9.3 10.1H11.6V7H6.6V9.1H9.1C9.1 9.1 9.1 9.2 9.1 9.3H6.6V14.1H9.2C9.9 14.1 10.4 13.8 10.4 13.2C10.4 12.6 9.9 12.4 9.2 12.4H6.6V11.1H9.1C10.7 11.1 11.6 11.7 11.6 12.7C11.6 13.8 10.6 14.1 9.2 14.1V15Z" />
  </svg>
);

// --- (Theme Toggle Component) ---
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

// --- (Navbar Component) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
          Siyamthanda
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-3 text-gray-800 dark:text-gray-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 px-6 pb-4`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

// --- (Header Component) ---
const Header = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Siyamthanda
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            A passionate Frontend Developer specializing in React and modern web technologies.
          </p>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <MapPin size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">Cape Town, South Africa</span>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
            >
              Contact Me <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#projects"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://placehold.co/400x400/E2E8F0/333?text=Siyamthanda's\nPhoto"
            alt="Siyamthanda"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

// --- (About Component) ---
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            Hello! I'm Siyamthanda, a self-taught frontend developer with a strong passion for building
            beautiful, functional, and user-friendly web applications.
          </p>
          <p>
            My journey into web development started with a curiosity for how websites work, and it
            has grown into a full-fledged passion. I thrive on solving problems, learning new
            technologies, and collaborating with others to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- (Skills Component) ---
const Skills = () => {
  const skillCategories = [
    {
      title: "Code",
      icon: Code,
      skills: [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', '.NET MAUI', 'Vue.js',
        'TailwindCSS', 'Bootstrap', 'Node.js', 'MongoDB', 'MySQL', 'Mongoose',
        'REST APIs', 'Git/GitHub', 'Agile Project Management', 'Responsive Web Development'
      ]
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        'Figma', 'Adobe XD', 'Design Thinking', 'Wireframing', 'Prototyping',
        'Adobe Photoshop', 'Adobe Illustrator', 'Canva',
        'User-Centered Design', 'Color Theory', 'Layout Design', 'Visual Hierarchy'
      ]
    },
    {
      title: "Branding",
      icon: Globe,
      skills: [
        'Logo Design', 'Brand Strategy', 'Typography', 'Color Systems',
        'Social Media Graphics', 'Promotional Posters', 'Product Mockups',
        'Digital Branding', 'Visual Storytelling', 'Community-Focused Design'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <category.icon size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- (Projects Component) ---
const ProjectCard = ({ title, description, imageUrl, liveUrl, repoUrl, className = "", imageClassName = "h-48" }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full flex flex-col ${className}`}>
      <img
        src={imageUrl}
        alt={title}
        className={`w-full object-cover ${imageClassName}`}
        onError={(e) => { e.target.src = 'https://placehold.co/600x400/E2E8F0/333?text=Project+Image'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex space-x-4 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const allProjects = [
    {
      title: 'Mobile Weather App (.NET MAUI)',
      description: 'A cross-platform weather app built with C# and .NET MAUI, fetching data from a live REST API.',
      imageUrl: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Code%3A+.NET+MAUI+App',
      liveUrl: '#',
      repoUrl: 'https://github.com/Siyamthanda-Ndabase',
      category: 'Code'
    },
    {
      title: 'Recipe Finder (Vue.js & Node.js)',
      description: 'A full-stack (MEVN) app using Vue.js for the frontend and a Node.js/Express/MongoDB backend API.',
      imageUrl: 'https://placehold.co/600x400/34D399/FFFFFF?text=Code%3A+MEVN+Stack',
      liveUrl: '#',
      repoUrl: 'https://github.com/Siyamthanda-Ndabase',
      category: 'Code'
    },
    {
      title: 'Fintech App UI/UX (Figma)',
      description: 'A complete UI/UX design prototype for a modern mobile banking app, focusing on user-centered design principles.',
      imageUrl: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Design%3A+Figma+UI/UX',
      liveUrl: '#', // Placeholder, should link to Figma
      repoUrl: '#', // Placeholder
      category: 'Design'
    },
    {
      title: 'Tech Startup Brand Guide',
      description: 'Developed a complete brand identity, including logo, color systems, and typography for a new tech startup.',
      imageUrl: 'https://placehold.co/600x400/F97316/FFFFFF?text=Branding%3A+Brand+Identity',
      liveUrl: '#',
      repoUrl: '#',
      category: 'Branding'
    }
  ];

  const categories = ['All', 'Code', 'Design', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  // const [currentIndex, setCurrentIndex] = useState(0); // Removed for bento grid

  const filteredProjects = allProjects.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  // Removed useEffect, prevProject, nextProject, currentProject

  // Define bento layout properties
  const bentoLayout = [
    { gridClass: 'md:col-span-2 md:row-span-2', imageClass: 'h-64 sm:h-96' }, // Project 1 (Large)
    { gridClass: 'md:col-span-1', imageClass: 'h-48' },             // Project 2
    { gridClass: 'md:col-span-1', imageClass: 'h-48' },             // Project 3
    { gridClass: 'md:col-span-2', imageClass: 'h-48' },             // Project 4
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* New Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const layout = bentoLayout[index % bentoLayout.length];
              return (
                <div key={project.title} className={layout.gridClass}>
                  <ProjectCard 
                    {...project} 
                    imageClassName={layout.imageClass} 
                  /> 
                </div>
              );
            })
          ) : (
            <div className="md:col-span-3 flex items-center justify-center h-full p-10 min-h-[300px]">
              <p className="text-center text-gray-600 dark:text-gray-300 text-xl">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// --- (Contact Component) ---
function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Siyamthanda-Ndabase",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/siyamthanda-ndabase",
    },
    {
      name: "Behance",
      icon: IconBehance, // Changed from 'Behance' to 'IconBehance'
      url: "https://behance.net/siyamthanda", // Placeholder URL
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform hover:scale-110"
              aria-label={`Siyamthanda's ${link.name} profile`}
            >
              <link.icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- (Footer Component) ---
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Siyamthanda Ndabase. All rights reserved.</p>
      </div>
    </footer>
  );
};

// --- (Main App Component) ---
export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
