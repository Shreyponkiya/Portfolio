import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-w-2 aspect-h-3 bg-gray-300">
                  {/* Replace with your actual image */}
                  <img
                    src="hero_image.png"
                    alt="Profile"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg border-4 border-teal-400 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg bg-gray-200 -z-10"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-2">About Me</h2>
            <div className="w-16 h-1 bg-teal-400 mb-6"></div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              A dedicated Web Developer based in Ahmedabad, Gujrat
            </h3>

            <p className="text-gray-600 mb-6">
              As a passionate web developer with a strong foundation in both
              frontend and backend technologies, I thrive on turning complex
              problems into elegant solutions. My journey in tech began with LJ
              University , and I've since honed my skills in creating
              user-friendly, accessible, and performant web applications.
            </p>

            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me coding. I believe that these
              diverse interests help me bring a unique perspective to my
              development work, fostering creativity and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Name:</span> Shrey
                  Ponkiya
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Email:</span>{" "}
                  shreyponkiya@gmail.com
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Location:</span>{" "}
                  Ahmedabad, Gujrat
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-black">Experience:</span>{" "}
                  2 Years
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="ShreyPonkiya_Resume.pdf"
                download="ShreyPonkiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                Download CV
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
