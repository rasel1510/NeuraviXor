import { useState } from "react";

const projects = [
  {
    title: "AI Automation Dashboard",
    desc: "Smart workflow automation & analytics system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    link: "/projects",
  },
  {
    title: "E-Commerce Conversion Store",
    desc: "High-conversion product listing & checkout flow.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    link: "/projects",
  },
  {
    title: "Modern Agency Website",
    desc: "High-end branding website with smooth animations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/projects",
  },
  {
    title: "AI Web Platform",
    desc: "AI-powered dashboards & integrations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    link: "/projects",
  },
  {
    title: "Brand Identity System",
    desc: "Complete branding & UI design system.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "/projects",
  },
];

const VISIBLE_CARDS = 3;

const LandingProjects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) =>
      prev + VISIBLE_CARDS >= projects.length ? 0 : prev + VISIBLE_CARDS
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - VISIBLE_CARDS < 0
        ? projects.length - VISIBLE_CARDS
        : prev - VISIBLE_CARDS
    );
  };

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + VISIBLE_CARDS
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-black">
          Featured <span className="text-orange-500">Projects</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          A glimpse of the solutions we build for businesses and brands.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="
            absolute -left-20 top-1/2 -translate-y-1/2
            z-10 w-14 h-14 rounded-full bg-white
            shadow-md hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
          "
          aria-label="Previous projects"
        >
          <span className="text-4xl leading-none font-medium text-gray-800">
            &lt;
          </span>
        </button>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-all duration-500
              "
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-64 object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 bg-black/50
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  flex flex-col justify-end p-6
                "
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  className="
                    inline-block mt-4 w-fit
                    text-sm font-semibold text-orange-400
                    border-b border-orange-400
                    hover:text-orange-300
                  "
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="
            absolute -right-20 top-1/2 -translate-y-1/2
            z-10 w-14 h-14 rounded-full bg-white
            shadow-md hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
          "
          aria-label="Next projects"
        >
          <span className="text-4xl leading-none font-medium text-gray-800">
            &gt;
          </span>
        </button>
      </div>
    </section>
  );
};

export default LandingProjects;
