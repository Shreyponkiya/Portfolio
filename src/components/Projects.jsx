import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Import framer-motion

const Projects = () => {
  // Example project data - replace with your own projects
  const projects = [
    {
      id: 1,
      title: "FAQ's_Management",
      category: "Full Stack",
      image: "FAQ's.jpeg",
      description:
        "A complete e-commerce solution with shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://faq-s-management-56eb.vercel.app/",
      codeLink: "https://github.com/Shreyponkiya/FAQ-s_Management.git",
    },
    {
      id: 2,
      title: "HRM System",
      category: "Full Stack",
      image: "HRM.png",
      description:
        "A responsive human resource management application with drag-and-drop interface and dark mode support.",
      technologies: ["Next", "Node", "Zustand", "Tailwind CSS"],
      liveLink: "sorry currently not available",
      codeLink: "sorry currently not available",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "Frontend",
      image: "weather.png",
      description:
        "A weather application that displays forecast data with interactive charts and location search.",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      liveLink: "https://weather-app-gamma-red-80.vercel.app",
      codeLink: "https://github.com/Shreyponkiya/Weather-App.git",
    },
    {
      id: 4,
      title: "Authentication API",
      category: "Backend",
      image: "auth.png",
      description:
        "RESTful API for a blog platform with user authentication, post creation, and comment functionality.",
      technologies: ["AWS(Lambda)", "Node.js", "AWS(DynamoDB)", "JWT"],
      liveLink: "sorry,it's API so no live link",
      codeLink: "sorry,it's API so no sheared link",
    },
    {
      id: 5,
      title: "Blog Website",
      category: "Full Stack",
      image: "blog.png",
      description:
        "A personal portfolio website showcasing projects and skills with a clean, modern design.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
      liveLink: "https://blog-application-client-4a8w.vercel.app/",
      codeLink: "https://github.com/Shreyponkiya/Blog_Application_Client.git",
    },
    {
      id: 6,
      title: "Agriculture website",
      category: "Frontend",
      image: "agriculture.png",
      description:
        "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://farming-website-zv7r.vercel.app",
      codeLink: "https://github.com/Shreyponkiya/Farming-website.git",
    },
  ];

  // State for tracking visible projects
  const [isInView, setIsInView] = useState({});

  // Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    // Observe all project elements
    document.querySelectorAll('.project-card').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.project-card').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Filter categories
  const categories = ["All", "Frontend", "Backend", "Full Stack"];
  const [filter, setFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Function to handle opening URLs in a new tab
  const openInNewTab = (url) => {
    // Check if the URL is a valid link
    if (
      url.toLowerCase().includes("sorry") ||
      url.toLowerCase().includes("no live link") ||
      url.toLowerCase().includes("no sheared link")
    ) {
      toast.info("Link & code not available for this project.");
      return;
    }

    // Add https:// if it's missing and doesn't already have http:// or https://
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    // Open the URL in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <div className="w-16 h-1 bg-teal-400 mx-auto mb-6"></div>
            <p className="max-w-lg mx-auto text-gray-600">
              Here are some of my recent projects. Each project reflects my
              passion for creating intuitive and impactful web applications.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  filter === category
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                className="project-card bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                variants={cardVariants}
                initial="hidden"
                animate={isInView[`project-${project.id}`] ? "visible" : "hidden"}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 15
                }}
              >
                {/* Project Image - Fixed Height Container */}
                <div className="relative h-82 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView[`project-${project.id}`] ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.3 + techIndex * 0.1, duration: 0.3 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 mt-auto">
                    <motion.button
                      onClick={() => openInNewTab(project.liveLink)}
                      className="flex-1 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-center rounded-lg transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </motion.button>

                    <motion.button
                      onClick={() => openInNewTab(project.codeLink)}
                      className="flex-1 px-4 py-2 border border-gray-300 hover:border-teal-500 hover:text-teal-500 text-gray-700 text-center rounded-lg transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14L3 9L8 4M16 14L21 9L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;