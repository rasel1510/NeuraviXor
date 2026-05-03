import Custom_AI_Pic from "../images/Custom AI Models.png";

const CustomAIModels = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= Banner Section ================= */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${Custom_AI_Pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Custom AI Models
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg">
            Business-specific AI models designed for intelligent analysis,
            prediction, and data-driven decision support.
          </p>
        </div>
      </div>

      {/* ================= AI Model Expertise ================= */}
      <div className="mt-20">
        <h2 className="text-3xl text-orange-400 text-center font-bold mb-10">
          Our AI Modeling Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Predictive Models",
              items: [
                "Sales & Demand Forecasting",
                "Customer Behavior Prediction",
                "Risk & Trend Analysis",
                "Time-Series Modeling",
              ],
            },
            {
              title: "Intelligent Analysis",
              items: [
                "Data Classification",
                "Sentiment & Text Analysis",
                "Pattern & Anomaly Detection",
                "Business Intelligence Models",
              ],
            },
            {
              title: "Decision Support",
              items: [
                "Recommendation Systems",
                "Optimization Models",
                "AI-Driven Insights",
                "Custom Decision Engines",
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

      {/* ================= AI Specialists ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={Custom_AI_Pic}
            alt="Custom AI Model Development"
            className="rounded-2xl shadow-lg h-96 w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            AI Models Built for Your Business
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We don’t use generic models. Every AI solution is trained,
            optimized, and validated using your business data to ensure
            relevance, accuracy, and measurable impact.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Business-Specific Model Training</li>
            <li>✔ High Accuracy & Interpretability</li>
            <li>✔ Scalable & Production-Ready Models</li>
            <li>✔ Secure Data Handling & Privacy</li>
            <li>✔ Long-Term Model Maintenance</li>
          </ul>
        </div>
      </div>

      {/* ================= Advanced AI Capabilities ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Advanced AI Model Capabilities
          </h2>

          <ul className="space-y-3 text-gray-700 max-w-xl">
            <li>✔ Machine Learning & Deep Learning Models</li>
            <li>✔ NLP & Intelligent Text Processing</li>
            <li>✔ Model Evaluation & Performance Tuning</li>
            <li>✔ API Deployment & Integration</li>
            <li>✔ Monitoring, Retraining & Optimization</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={Custom_AI_Pic}
            alt="Advanced Custom AI Models"
            className="rounded-2xl shadow-lg w-full h-80 object-cover
                       hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};

export default CustomAIModels;
