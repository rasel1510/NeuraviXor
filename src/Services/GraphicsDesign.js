import Graphics_Design_Pic from "../images/Graphics Design Pic .jpg";

const GraphicsDesign = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= Banner Section ================= */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${Graphics_Design_Pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Graphics Design Services
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg">
            Visual identities, brand systems, and digital creatives designed
            to communicate, convert, and leave a lasting impression.
          </p>
        </div>
      </div>

      {/* ================= Design Expertise ================= */}
      <div className="mt-20">
        <h2 className="text-3xl text-orange-400 text-center font-bold mb-10">
          Our Design Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Identity",
              items: [
                "Logo Design",
                "Brand Guidelines",
                "Color & Typography Systems",
                "Rebranding Solutions",
              ],
            },
            {
              title: "Digital Design",
              items: [
                "Social Media Creatives",
                "Web & App UI Assets",
                "Ad & Campaign Designs",
                "Presentation Design",
              ],
            },
            {
              title: "Marketing Graphics",
              items: [
                "Posters & Flyers",
                "Business Cards",
                "Brochures",
                "Packaging Design",
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

      {/* ================= Creative Professionals ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={Graphics_Design_Pic}
            alt="Professional Graphic Designers"
            className="rounded-2xl h-96 w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Creative & Strategic Designers
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our designers blend creativity with strategy. Every visual we
            create is aligned with your brand’s voice, business goals,
            and audience psychology — not just aesthetics.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Strong Brand Storytelling</li>
            <li>✔ Consistent Visual Language</li>
            <li>✔ Modern, Trend-Aware Designs</li>
            <li>✔ High-Resolution & Print-Ready Assets</li>
            <li>✔ Fast Turnaround & Clear Communication</li>
          </ul>
        </div>
      </div>

      {/* ================= Advanced Design Capabilities ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Advanced Design Capabilities
          </h2>

          <ul className="space-y-3 text-gray-700 max-w-xl">
            <li>✔ Adobe Photoshop, Illustrator & Figma Expertise</li>
            <li>✔ UI Assets for Web & Mobile Products</li>
            <li>✔ Print & Digital Design Optimization</li>
            <li>✔ Brand Consistency Across Platforms</li>
            <li>✔ Design Systems & Scalable Assets</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={Graphics_Design_Pic}
            alt="Advanced Graphic Design Capabilities"
            className="rounded-2xl w-full h-80 object-cover
                       transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};

export default GraphicsDesign;
