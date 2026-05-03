import Web_Developement_Pic from "../images/Landing Service/Web Developer Pic.jpg";
import Graphics_Design_Pic from "../images/Landing Service/Graphics Design Pic .jpg";
import E_Commerce_Pic from "../images/Landing Service/E Commerce.jpg"
import Ai_Automation_Pic from "../images/Landing Service/AI Automation.jpg"
import Custom_AI_Models_Pic from "../images/Landing Service/Custom AI Models.png"
import Ai_Web_Intergration_Pic from "../images/Landing Service/AI Web Integration.png"

import { useNavigate } from "react-router-dom";


const services = [
  {
    title: "Web Development",
    desc: "High-performance websites, landing pages, and business platforms built with modern technologies.",
    img: Web_Developement_Pic,
    path: "/services/web-development",
  },
  {
    title: "Graphic Design",
    desc: "Branding, UI design, and social media visuals that communicate trust and authority.",
    img: Graphics_Design_Pic,
    path: "/services/graphic-design",
  },
  {
    title: "E-commerce Solutions",
    desc: "Optimized product listings, store setup, and conversion-focused e-commerce systems.",
    img: E_Commerce_Pic,
    path: "/services/ecommerce",
  },
  {
    title: "AI Automation",
    desc: "Workflow automation using AI to reduce manual work and increase operational efficiency.",
    img: Ai_Automation_Pic,
    path: "/services/ai-automation",
  },
  {
    title: "Custom AI Models",
    desc: "Business-specific AI models designed for analysis, intelligence, and decision support.",
    img: Custom_AI_Models_Pic,
    path: "/services/custom-ai-models",
  },
  {
    title: "AI Web Integration",
    desc: "Seamless AI integration into websites, dashboards, and digital platforms.",
    img: Ai_Web_Intergration_Pic,
    path: "/services/ai-web-integration",
  },
];

const ServiceHome = () => {

  const navigate = useNavigate();


  return (
    <section className="max-w-7xl mx-auto py-20 transition-colors duration-300">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-black dark:text-white mb-6">OUR SERVICES</h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          We provide intelligent digital solutions that combine design,
          development, e-commerce, and AI automation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-zinc-800 shadow-lg border border-transparent dark:border-zinc-700 transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl hover:border-orange-400/30"
          >
            <figure className="bg-transparent p-3">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-h-36 object-contain rounded-lg
                           transition-transform duration-300 hover:scale-105"
              />
            </figure>

            <div className="card-body p-5">
              <h3 className="card-title text-black dark:text-white font-bold text-lg">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>

              <div className="card-actions justify-end mt-3">
                <button
                  onClick={() => navigate(service.path)}
                  className="btn btn-sm border-none text-white bg-orange-400 hover:bg-orange-500"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>





    </section>
  );
};

export default ServiceHome;