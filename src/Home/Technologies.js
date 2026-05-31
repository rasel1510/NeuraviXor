import html from "../images/Code Logos/Html.jpg";
import css from "../images/Code Logos/Css.jpg";
import javascript from "../images/Code Logos/Javascript.jpg";
import react from "../images/Code Logos/React.jpg";
import nextjs from "../images/Code Logos/nextjs.png";
import tailwind from "../images/Code Logos/Tailwind.jpg";
import node from "../images/Code Logos/Node_js Logo PNG Vector (SVG) Free Download.jpg";
import python from "../images/Code Logos/python logo.jpg";
import pytorch from "../images/Code Logos/pytroch.png";
import tensorflow from "../images/Code Logos/tensorflow.png";
import java from "../images/Code Logos/java.png";
import cplusplus from "../images/Code Logos/c++.png";
import php from "../images/Code Logos/php.png";
import postgresql from "../images/Code Logos/postgresql.png";
import mongodb from "../images/Code Logos/mongodb.png";
import docker from "../images/Code Logos/docker.png";
import n8n from "../images/Code Logos/n8n.png";

const technologies = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: javascript },
  { name: "React", img: react },
  { name: "Next.js", img: nextjs },
  { name: "Tailwind CSS", img: tailwind },
  { name: "Node.js", img: node },
  { name: "Python", img: python },
  { name: "PyTorch", img: pytorch },
  { name: "TensorFlow", img: tensorflow },
  { name: "Java", img: java },
  { name: "C++", img: cplusplus },
  { name: "PHP", img: php },
  { name: "PostgreSQL", img: postgresql },
  { name: "MongoDB", img: mongodb },
  { name: "Docker", img: docker },
  { name: "n8n", img: n8n },
];

const TechnologiesSection = () => {
  return (
    <>
      {/* CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            animation: marquee 60s linear infinite;
          }

          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="bg-transparent py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-widest text-black dark:text-white mb-12">
            TECHNOLOGIES WE USE
          </h2>

          {/* VISIBLE AREA (FLUID FULL WIDTH WITH SHADOW GRADIENT FADE) */}
          <div className="relative mx-auto overflow-hidden w-full max-w-5xl px-4">
            {/* Animated Row */}
            <div className="marquee flex items-center gap-10 w-max">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="group"
                  aria-label={tech.name}
                >
                  <div
                    className="w-20 h-20 rounded-full border border-gray-200 dark:border-zinc-700
                    flex items-center justify-center
                    shadow-sm transition-all duration-300 bg-white dark:bg-zinc-800
                    hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-10 h-10 object-contain
                      transition-transform duration-300
                      group-hover:scale-110 dark:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesSection;
