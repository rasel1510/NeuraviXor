import Banner from "./Banner";
import Landingservice from "./Landingservice";
import PresenceSection from "./PresenceSection";
import FloatingBubbles from "./FloatingBubbles";
import Technologies from "./Technologies";


const Home = () => {
  return (
    <div className="relative">
      {/* FULL PAGE BACKGROUND BUBBLES */}
      <FloatingBubbles />

      {/* CONTENT ABOVE BUBBLES */}
      <div className="bg-white dark:bg-transparent relative z-10 transition-colors duration-300">
        <Banner />
        <Landingservice />
        <Technologies></Technologies>
        <PresenceSection />
        
        
      </div>
    </div>
  );
};

export default Home;
