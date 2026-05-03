import React from "react";

export default function ContactUs() {
  return (
    <section className="w-full bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-indigo-600">Neuravixor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Have a project in mind or want to collaborate with us? Reach out through any platform or send us a direct message.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { name: "Fiverr", link: "https://www.fiverr.com/your-fiverr" },
            { name: "Upwork", link: "https://www.upwork.com/freelancers/your-upwork" },
            { name: "Facebook", link: "https://www.facebook.com/your-facebook" },
          ].map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-indigo-600 hover:shadow-2xl transition"
            >
              {/* Image Placeholder */}
              <div className="w-24 h-24 mb-6 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 group-hover:border-indigo-500 group-hover:text-indigo-600 transition">
                Add Image
              </div>

              <h3 className="text-xl font-semibold group-hover:text-indigo-600 transition">
                {platform.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Click the logo to connect with us on {platform.name}.
              </p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-indigo-600/0 group-hover:bg-indigo-600/5 transition"></div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-center mb-8">Send Us a Message</h2>

          <form
            action="mailto:neuravixor@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-400 hover:border-orange-300 transition"
              />
              <input
                type="text"
                name="Number"
                placeholder="Phone / WhatsApp Number"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-400 hover:border-orange-300 transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                name="Email"
                placeholder="Your Gmail"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-400 hover:border-orange-300 transition"
              />
              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-400 hover:border-orange-300 transition"
              />
            </div>

            <textarea
              name="Message"
              placeholder="Write your message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green-400 hover:border-orange-300 transition mb-6"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-green-500 hover:shadow-lg transition"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Messages will be sent directly to <strong>neuravixor@gmail.com</strong>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
