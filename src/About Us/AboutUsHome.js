import React from "react";
import TechnologiesSection from "../Home/Technologies"; 

export default function AboutUsHome() {
  return (
    <section className="w-full bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-green-500 ">NEURAVIXOR</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Neuravixor is a creative Web & AI development agency founded in 2021 during the Covid era.
            We are a team of 8 passionate professionals, each specialized in different creative and
            technical fields, working together to build powerful digital solutions from scratch.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision & Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We dream of creating something new, impactful, and meaningful in the digital world.
              Our mission is to help businesses grow through modern web technologies, intelligent
              automation, and creative design.
            </p>
            <p className="text-gray-500">
              We work both online and offline and have successfully completed many projects by
              delivering quality, innovation, and dedication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">TEAM</h3>
              <p className="font-semibold">Experts</p>
              <p className="text-sm text-gray-500">Specialized creative team</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-orange-500">Online & Offline</h3>
              <p className="font-semibold">Availability</p>
              <p className="text-sm text-gray-500">Worldwide support</p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <TechnologiesSection /> 

        {/* Links Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold tracking-widest text-black mb-16 text-center ">EXPLORE OUR WORKS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* GitHub */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-xl p-8 text-center hover:border-indigo-600 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600">GitHub</h3>
              <p className="text-gray-500 text-sm">
                Explore our open-source projects, raw codes, and development experiments.
              </p>
              <p className="mt-4 text-sm text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition">
                Visit GitHub →
              </p>
            </a>

            {/* Google Drive */}
            <a
              href="https://drive.google.com/your-drive"
              target="_blank"
              rel="noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-xl p-8 text-center hover:border-indigo-600 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600">Google Drive</h3>
              <p className="text-gray-500 text-sm">
                Access project files, demos, presentations, and shared resources.
              </p>
              <p className="mt-4 text-sm text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition">
                Open Drive →
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-xl p-8 text-center hover:border-indigo-600 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600">LinkedIn</h3>
              <p className="text-gray-500 text-sm">
                Connect with us professionally and follow our journey and achievements.
              </p>
              <p className="mt-4 text-sm text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition">
                View Profile →
              </p>
            </a>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Why Neuravixor?</h2>
          <p className="text-gray-600 leading-relaxed">
            We approach every project with full potential, full effort, and a strong sense of
            responsibility. Each team member is unique in their own way, and together we deliver
            solutions that are creative, scalable, and future-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
