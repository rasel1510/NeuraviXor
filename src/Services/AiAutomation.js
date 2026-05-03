import Ai_Automation_Pic from "../images/AI Automation.jpg";

const AiAutomation = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= Banner Section ================= */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${Ai_Automation_Pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Automation Solutions
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg">
            Workflow automation powered by AI to reduce manual work,
            improve accuracy, and scale operations efficiently.
          </p>
        </div>
      </div>

      {/* ================= AI Automation Expertise ================= */}
      <div className="mt-20">
        <h2 className="text-3xl text-orange-400 text-center font-bold mb-10">
          Our AI Automation Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Process Automation",
              items: [
                "Business Workflow Automation",
                "Data Processing & Cleanup",
                "Task Scheduling & Triggers",
                "Rule-Based AI Systems",
              ],
            },
            {
              title: "AI-Powered Tools",
              items: [
                "Chatbots & Virtual Assistants",
                "AI Form & CRM Automation",
                "Document Analysis & Extraction",
                "Customer Support Automation",
              ],
            },
            {
              title: "Integration & Scaling",
              items: [
                "API & System Integration",
                "Third-Party Tool Automation",
                "Cloud-Based AI Pipelines",
                "Scalable Automation Systems",
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

      {/* ================= AI Automation Specialists ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={Ai_Automation_Pic}
            alt="AI Automation Specialists"
            className="rounded-2xl shadow-lg h-96 w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Smart Automation That Works for You
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We design AI automation systems that eliminate repetitive tasks,
            reduce human error, and free your team to focus on high-impact work.
            Every solution is tailored to your business workflow.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Reduced Operational Costs</li>
            <li>✔ Faster Execution & Turnaround</li>
            <li>✔ Improved Accuracy & Reliability</li>
            <li>✔ Scalable & Future-Ready Systems</li>
            <li>✔ Secure & Maintainable Architecture</li>
          </ul>
        </div>
      </div>

      {/* ================= Advanced AI Capabilities ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Advanced AI Automation Capabilities
          </h2>

          <ul className="space-y-3 text-gray-700 max-w-xl">
            <li>✔ Custom AI Workflow Design</li>
            <li>✔ NLP & Intelligent Text Processing</li>
            <li>✔ Data-Driven Decision Automation</li>
            <li>✔ Secure API & System Integration</li>
            <li>✔ Deployment, Monitoring & Optimization</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={Ai_Automation_Pic}
            alt="Advanced AI Automation"
            className="rounded-2xl shadow-lg w-full h-80 object-cover
                       hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};

export default AiAutomation;
