import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 py-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500 filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-600 filter blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hello, I'm </span>
              <span className="text-teal-400">Shrey Ponkiya</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 mb-8">
              <span className="typing-effect">Web Developer & Designer</span>
            </p>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              I craft responsive websites where technology meets creativity.
              Let's work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300 font-medium"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-white hover:border-teal-400 hover:text-teal-400 text-white rounded-full transition-colors duration-300 font-medium"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-teal-400 blur-md opacity-50 animate-pulse"></div>

              {/* Image with border */}
              <div className="relative border-4 border-teal-400 rounded-full p-2">
                <img
                  className="rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-85 md:w-85 object-cover"
                  src="hero_image.png"
                  alt="Shrey Ponkiya"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-teal-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
