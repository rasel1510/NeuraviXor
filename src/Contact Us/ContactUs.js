import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────────────────
// 🔑  PASTE YOUR EMAILJS KEYS BELOW  (emailjs.com → Dashboard)
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_zb3un8k';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_rh6rlp6';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = '0BBltFCh-LcrCYmdC'; // e.g. 'aBcDeFgHiJ'
// ─────────────────────────────────────────────────────────────────────────────

const ContactUs = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [formData, setFormData]   = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // EmailJS sends the form data directly to your Gmail inbox.
    // Template variables must match the {{variable}} names in your EmailJS template:
    //   {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ from_name: '', from_email: '', phone: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        const errorMsg = err?.text || err?.message || JSON.stringify(err) || 'Unknown error';
        setError(`EmailJS Error: ${errorMsg}. (Please double check your Service ID, Template ID, and Public Key in EmailJS dashboard)`);
        setLoading(false);
      });
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-20 min-h-[calc(100vh-120px)] flex flex-col justify-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 font-bold tracking-wider uppercase text-sm block mb-2">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Layout matching the Footer */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-orange-400 leading-tight">
                Let’s Turn Ideas Into Impact
              </h2>

              <p className="max-w-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-lg">
                Have a vision worth building?  
                We design and develop digital experiences that move businesses forward.
                Share your idea — Neuravixor will handle the rest.
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-3">📍 Find Us Here</p>
              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.2609722636366!2d90.42532856176696!3d23.701596530993438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b936e2ff99e1%3A0x8ae1f93819ffb9bb!2sNEURAVIXOR!5e0!3m2!1sen!2sbd!4v1780242509791!5m2!1sen!2sbd"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Neuravixor Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="bg-white dark:bg-zinc-800/30 p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-xl dark:shadow-2xl/10 backdrop-blur-sm transition-all duration-300 w-full">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto animate-bounce">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. We will review your project details and get back to you shortly!
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn bg-orange-400 hover:bg-orange-500 text-white border-none transition-all duration-300 px-6 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send Us a Message</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fill in the details below to start working together.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                               focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                               transition-all duration-300"
                    required
                  />

                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                               focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                               transition-all duration-300"
                    required
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                             focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                             transition-all duration-300"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What’s your project about?"
                  className="input input-bordered w-full bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                             focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                             transition-all duration-300"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea, goals, or challenges..."
                  className="textarea textarea-bordered w-full h-32 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white
                             focus:outline-none focus:border-orange-400 dark:focus:border-orange-400
                             transition-all duration-300 resize-none"
                  required
                ></textarea>

                {/* Error message */}
                {error && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
                    <span className="text-red-500 text-lg leading-none mt-0.5">⚠️</span>
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn w-full bg-orange-400 text-white border-none
                             hover:bg-orange-500 disabled:opacity-70 disabled:cursor-not-allowed
                             transition-all duration-300
                             hover:-translate-y-0.5 hover:shadow-lg font-semibold text-base"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Your Message'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
