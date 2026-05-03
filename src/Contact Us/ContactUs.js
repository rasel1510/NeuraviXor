import React from 'react';

const ContactUs = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold text-orange-400 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Ready to start your project? Get in touch with us today.
      </p>
      {/* The contact form is also available in the footer, but we could add a specific one here too. */}
      <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-700">Email: <a href="mailto:neuravixor@gmail.com" className="text-orange-400 font-bold">neuravixor@gmail.com</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
