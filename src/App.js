import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import ProjectsHome from "./Projects/ProjectsHome";
import Navbar from "./shared/Navbar";
import WebDevelopment from "./Services/WebDevelopment";
import SoftwareDevelopment from "./Services/SoftwareDevelopment";
import GraphicsDesign from "./Services/GraphicsDesign";
import AiAutomation from "./Services/AiAutomation";
import CustomAIModels from "./Services/CustomAIModels";
import AIWebIntegration from "./Services/AIWebIntegration";
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
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/graphic-design" element={<GraphicsDesign />} />
        <Route path="/services/ai-automation" element={<AiAutomation />} />
        <Route path="/services/custom-ai-models" element={<CustomAIModels />} />
        <Route path="/services/ai-web-integration" element={<AIWebIntegration />} />
        <Route path="/projects" element={<ProjectsHome />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
