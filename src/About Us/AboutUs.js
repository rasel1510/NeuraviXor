import React from 'react';
import TechnologiesSection from '../Home/Technologies';

const AboutUs = () => {
  return (
    <div className="py-20 transition-colors duration-300">
      {/* About Section */}
      <section className="text-center mb-24 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-black dark:text-white">
          About <span className="text-green-500">NEURAVIXOR</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Neuravixor is a creative Web & AI development agency founded in 2021 during the Covid era. 
          We are a team of 8 passionate professionals, each specialized in different creative and 
          technical fields, working together to build powerful digital solutions from scratch.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black dark:text-white">Our Vision & Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We dream of creating something new, impactful, and meaningful in the digital world. 
              Our mission is to help businesses grow through modern web technologies, 
              intelligent automation, and creative design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We work both online and offline and have successfully completed many projects 
              by delivering quality, innovation, and dedication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-sm text-center group hover:border-orange-400 transition-all duration-300">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">TEAM</h3>
              <p className="font-bold text-black dark:text-white">Experts</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Specialized creative team</p>
            </div>
            <div className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-sm text-center group hover:border-orange-400 transition-all duration-300">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">Online & Offline</h3>
              <p className="font-bold text-black dark:text-white">Availability</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Worldwide support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section (Reusing Home component) */}
      <TechnologiesSection />

      {/* Explore Works Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-16 uppercase tracking-widest">
          Explore Our Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "GitHub",
              desc: "Explore our open-source projects, raw codes, and development experiments.",
              color: "text-gray-900 dark:text-white"
            },
            {
              title: "Google Drive",
              desc: "Access project files, demos, presentations, and shared resources.",
              color: "text-blue-500"
            },
            {
              title: "LinkedIn",
              desc: "Connect with us professionally and follow our journey and achievements.",
              color: "text-blue-700"
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-zinc-800 p-10 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-sm text-center hover:shadow-lg transition-all duration-300">
              <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Neuravixor Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-24">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-8">Why Neuravixor?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          We approach every project with full potential, full effort, and a strong sense of responsibility. 
          Each team member is unique in their own way, and together we deliver solutions that are 
          creative, scalable, and future-ready.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
