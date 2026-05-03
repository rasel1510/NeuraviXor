import AI_Web_Pic from "../images/AI Web Integration.png";

const AIWebIntegration = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= Banner Section ================= */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${AI_Web_Pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Web Integration
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg">
            Seamless AI integration into websites, dashboards, and digital
            platforms to enhance intelligence, automation, and user experience.
          </p>
        </div>
      </div>

      {/* ================= Integration Areas ================= */}
      <div className="mt-20">
        <h2 className="text-3xl text-orange-400 text-center font-bold mb-10">
          Where AI Meets Your Platform
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Applications",
              items: [
                "AI-Powered Forms & Search",
                "Smart User Interfaces",
                "Dynamic Content Generation",
                "Personalized User Experience",
              ],
            },
            {
              title: "Dashboards",
              items: [
                "Real-Time AI Analytics",
                "Business Intelligence Panels",
                "Predictive Insights",
                "Custom Data Visualizations",
              ],
            },
            {
              title: "Automation",
              items: [
                "AI Chatbots & Assistants",
                "Automated Data Processing",
                "Workflow Triggers",
                "Smart Notifications",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md
                         hover:shadow-xl transition duration-300"
            >
              <h3 className="font-bold text-lg text-black mb-3">
                {block.title}
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
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

      {/* ================= Integration Expertise ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={AI_Web_Pic}
            alt="AI Integrated Web Platforms"
            className="rounded-2xl shadow-lg h-96 w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Intelligent Systems, Seamlessly Integrated
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We embed AI directly into your digital platforms without disrupting
            performance or user experience. Every integration is optimized for
            speed, security, and scalability.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Frontend & Backend AI Integration</li>
            <li>✔ Secure API & Model Deployment</li>
            <li>✔ Optimized Performance & Latency</li>
            <li>✔ Scalable Architecture</li>
            <li>✔ Continuous Monitoring & Updates</li>
          </ul>
        </div>
      </div>

      {/* ================= Advanced Integration Capabilities ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Advanced AI Integration Capabilities
          </h2>

          <ul className="space-y-3 text-gray-700 max-w-xl">
            <li>✔ REST & GraphQL AI APIs</li>
            <li>✔ AI Chat Interfaces & Assistants</li>
            <li>✔ Secure Authentication & Access Control</li>
            <li>✔ Real-Time Data Processing</li>
            <li>✔ Cloud & Edge Deployment</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={AI_Web_Pic}
            alt="Advanced AI Web Integration"
            className="rounded-2xl shadow-lg w-full h-80 object-cover
                       hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};

export default AIWebIntegration;
