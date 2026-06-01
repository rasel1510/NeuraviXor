import { Link } from 'react-router-dom';
import logo from '../images/Neuravixor logo 2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    'Web Development',
    'UI / UX Design',
    'AI Integration',
    'Software Development',
    'SEO Optimization',
  ];

  return (
    <footer className="bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-zinc-800 transition-colors duration-300">

      {/* ── Top Section ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div className="space-y-5 lg:col-span-1">
          <Link to="/">
            <img src={logo} alt="Neuravixor" className="h-10" />
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
            We craft intelligent digital solutions — from sleek websites to AI-powered products — that push businesses forward.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-1">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61581261090895"
              target="_blank"
              rel="noreferrer"
              aria-label="Neuravixor on Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:neuravixor@gmail.com"
              aria-label="Email Neuravixor"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest after:block after:w-8 after:h-0.5 after:bg-orange-400 after:mt-2">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-300 group-hover:bg-orange-400 transition-colors duration-200"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest after:block after:w-8 after:h-0.5 after:bg-orange-400 after:mt-2">
            Our Services
          </h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-300 group-hover:bg-orange-400 transition-colors duration-200"></span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest after:block after:w-8 after:h-0.5 after:bg-orange-400 after:mt-2">
            Contact Info
          </h3>
          <ul className="space-y-4">
            {/* Email */}
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                <a href="mailto:neuravixor@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-200 font-medium">
                  neuravixor@gmail.com
                </a>
              </div>
            </li>
            {/* Facebook */}
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Facebook</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61581261090895"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-200 font-medium"
                >
                  facebook.com/neuravixor
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100 dark:border-zinc-800" />

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 dark:text-gray-500">
        <p>© {currentYear} <span className="text-orange-400 font-semibold">Neuravixor</span>. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span className="hover:text-orange-400 transition-colors duration-200 cursor-default">Privacy Policy</span>
          <span className="text-gray-200 dark:text-zinc-700">|</span>
          <span className="hover:text-orange-400 transition-colors duration-200 cursor-default">Terms of Service</span>
          <span className="text-gray-200 dark:text-zinc-700">|</span>
          <span>Built with ❤️ by Neuravixor</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
