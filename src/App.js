import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import ProjectsHome from "./Projects/ProjectsHome";
import Navbar from "./shared/Navbar";
import WebDevelopment from "./Services/WebDevelopment";
import ServiceHome from "./Services/ServiceHome";
import Footer from "./shared/Footer";
import AboutUs from "./About Us/AboutUs";
import ContactUs from "./Contact Us/ContactUs";

import CursorRing from "./shared/CursorRing";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen px-4 md:px-10 transition-colors duration-300 overflow-x-hidden">
      <CursorRing />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServiceHome />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/projects" element={<ProjectsHome />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
