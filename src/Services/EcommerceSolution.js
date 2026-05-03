import Ecommerce_Pic from "../images/E Commerce.jpg";

const EcommerceSolution = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= Banner Section ================= */}
      <div
        className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${Ecommerce_Pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            E-commerce Solutions
          </h1>
          <p className="max-w-2xl text-gray-200 text-lg">
            Optimized product listings, store setup, and conversion-focused
            e-commerce systems built to scale your business.
          </p>
        </div>
      </div>

      {/* ================= E-commerce Expertise ================= */}
      <div className="mt-20">
        <h2 className="text-3xl text-orange-400 text-center font-bold mb-10">
          Our E-commerce Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Store Setup",
              items: [
                "Shopify & WooCommerce Setup",
                "Store Configuration & Payments",
                "Shipping & Tax Setup",
                "Theme Customization",
              ],
            },
            {
              title: "Product Optimization",
              items: [
                "SEO-Optimized Listings",
                "High-Converting Descriptions",
                "Image & Variant Optimization",
                "Bulk Product Upload",
              ],
            },
            {
              title: "Conversion Growth",
              items: [
                "Landing Page Optimization",
                "Cart & Checkout Improvements",
                "Upsell & Cross-sell Setup",
                "Performance Tracking",
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

      {/* ================= E-commerce Specialists ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={Ecommerce_Pic}
            alt="E-commerce Specialists"
            className="rounded-2xl shadow-lg h-96 w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            E-commerce Specialists Who Focus on Sales
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We don’t just build online stores — we design e-commerce systems
            engineered for user experience, trust, and conversion.
            Every detail is optimized to increase sales and retention.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Conversion-Driven Store Design</li>
            <li>✔ Mobile-First Shopping Experience</li>
            <li>✔ Fast Load Speed & Performance</li>
            <li>✔ Secure Payment & Checkout Flow</li>
            <li>✔ Scalable Store Architecture</li>
          </ul>
        </div>
      </div>

      {/* ================= Advanced E-commerce Capabilities ================= */}
      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Advanced E-commerce Capabilities
          </h2>

          <ul className="space-y-3 text-gray-700 max-w-xl">
            <li>✔ Multi-Vendor & Marketplace Systems</li>
            <li>✔ Inventory & Order Management</li>
            <li>✔ Payment Gateway Integration</li>
            <li>✔ Analytics, Tracking & Reporting</li>
            <li>✔ Deployment & Store Maintenance</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={Ecommerce_Pic}
            alt="Advanced E-commerce Capabilities"
            className="rounded-2xl shadow-lg w-full h-80 object-cover
                       hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};

export default EcommerceSolution;
