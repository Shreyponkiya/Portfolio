import React, { useState } from "react";

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
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "Frontend",
      image: "weather.png",
      description:
        "A weather application that displays forecast data with interactive charts and location search.",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Authentication API",
      category: "Backend",
      image: "auth.png",
      description:
        "RESTful API for a blog platform with user authentication, post creation, and comment functionality.",
      technologies: ["AWS(Lambda)", "Node.js", "AWS(DynamoDB)", "JWT"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Blog Website",
      category: "Full Stack",
      image: "blog.png",
      description:
        "A personal portfolio website showcasing projects and skills with a clean, modern design.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Agriculture website",
      category: "Frontend",
      image: "agriculture.png",
      description:
        "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  // Filter categories
  const categories = ["All", "Frontend", "Backend", "Full Stack"];
  const [filter, setFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="max-w-lg mx-auto text-gray-600">
            Here are some of my recent projects. Each project reflects my
            passion for creating intuitive and impactful web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                filter === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image - Fixed Height Container */}
              <div className="relative h-82 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.liveLink}
                    className="flex-1 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-center rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-300 hover:border-teal-500 hover:text-teal-500 text-gray-700 text-center rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;