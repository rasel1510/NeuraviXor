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
    title: "Software Development",
    desc: "Custom software, enterprise applications, and scalable digital solutions tailored to your business needs.",
    img: E_Commerce_Pic,
    path: "/services/software-development",
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

const Landingservice = () => {

  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-400 mb-2">OUR SERVICES</h2>
        <p className="mt-2 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
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
                  onClick={() => service.path && navigate(service.path)}
                  className="btn btn-sm btn-outline border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white hover:border-orange-400"
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

export default Landingservice;