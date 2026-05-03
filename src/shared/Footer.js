const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 mt-24 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-400">
            Let’s Turn Ideas Into Impact
          </h2>

          <p className="max-w-md text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Have a vision worth building?  
            We design and develop digital experiences that move businesses forward.
            Share your idea — Neuravixor will handle the rest.
          </p>

          <div className="space-y-2 text-sm">
            <p className="hover:text-orange-400 transition-colors duration-300">
              📧 neuravixor@gmail.com — Let’s start a conversation
            </p>
            <p className="hover:text-orange-400 transition-colors duration-300">
              🌍 Serving clients globally, without limits
            </p>
            <p className="hover:text-orange-400 transition-colors duration-300">
              ⚡ Web · Design · AI · E-commerce — Built with purpose
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                         focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                         transition-all duration-300"
              required
            />

            <input
              type="email"
              placeholder="Your Email Address"
              className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                         focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                         transition-all duration-300"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                       focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                       transition-all duration-300"
          />

          <input
            type="text"
            placeholder="What’s your project about?"
            className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                       focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                       transition-all duration-300"
            required
          />

          <textarea
            placeholder="Tell us about your idea, goals, or challenges..."
            className="textarea textarea-bordered w-full h-32 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                       focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                       transition-all duration-300 resize-none"
            required
          ></textarea>

          <button
            className="btn w-full bg-orange-400 text-white border-none
                       hover:bg-orange-500
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Your Message
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Neuravixor — Building the future, one idea at a time.
      </div>
    </footer>
  );
};

export default Footer;
