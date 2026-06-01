import Software_Pic from "../images/Landing Service/Web Developer Pic.jpg";

const SoftwareDevelopment = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 transition-colors duration-300">

      {/* ================= Banner Section ================= */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${Software_Pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Software Development
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg">
            Tailor-made, robust, and scalable software solutions designed to streamline your business workflows and drive digital innovation.
          </p>
        </div>
      </div>

      {/* ================= Software Development Expertise ================= */}
      <div className="mt-20">
        <h2 className="text-3xl text-orange-400 text-center font-bold mb-10">
          Our Software Development Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Web Applications",
              items: [
                "Single Page & Multi Page Apps",
                "Robust Admin Dashboards",
                "SaaS & Enterprise Platforms",
                "Responsive Frontend Design",
              ],
            },
            {
              title: "Backend & System Architecture",
              items: [
                "Scalable API & RESTful Services",
                "Secure Database Integration",
                "Microservices Infrastructure",
                "Cloud Deployment & Scaling",
              ],
            },
            {
              title: "Custom Integration & Tools",
              items: [
                "Third-Party API Integrations",
                "CRM / ERP Systems",
                "Legacy System Modernization",
                "Performance & Security Tuning",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-transparent dark:border-zinc-700
                         hover:shadow-xl hover:border-orange-400/30 transition duration-300"
            >
              <h3 className="font-bold text-lg text-black dark:text-white mb-3">
                {block.title}
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                {block.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-orange-400 transition"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Software Specialists ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={Software_Pic}
            alt="Software Development Specialists"
            className="rounded-2xl shadow-lg h-96 w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Software Specialists Who Deliver Excellence
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We don’t just write code — we architect scalable software systems that solve real business problems, optimize operational efficiency, and support long-term business growth.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>✔ High-Performance Code & Best Practices</li>
            <li>✔ User-Centric Design & Experience</li>
            <li>✔ Scalable & Maintainable Architecture</li>
            <li>✔ Robust Security & Data Protection</li>
            <li>✔ Seamless API & Third-Party Integration</li>
          </ul>
        </div>
      </div>

      {/* ================= Advanced Software Capabilities ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Advanced Software Engineering Capabilities
          </h2>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300 max-w-xl">
            <li>✔ Cloud Integration & DevOps (AWS, Azure, GCP)</li>
            <li>✔ Database Design & Optimization (SQL, NoSQL)</li>
            <li>✔ Microservices & Serverless Architecture</li>
            <li>✔ Automated Testing & CI/CD Pipelines</li>
            <li>✔ Long-term Technical Support & Maintenance</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={Software_Pic}
            alt="Advanced Software Engineering"
            className="rounded-2xl shadow-lg w-full h-80 object-cover
                       hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};

export default SoftwareDevelopment;
