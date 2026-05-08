import banner from "../images/image banner.png";
import { useEffect, useRef } from "react";

// Advanced Congested Magnetic Net Component (Antigravity Style)
const MagneticNet = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    const rect = container.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Create a denser, more congested particle network
    const particleCount = 80;
    const particles = [];
    
    // Create particles in a grid-like pattern for better density
    const gridSize = Math.ceil(Math.sqrt(particleCount));
    const cellWidth = canvas.width / (gridSize + 1);
    const cellHeight = canvas.height / (gridSize + 1);

    for (let i = 0; i < particleCount; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      
      particles.push({
        x: (col + 1) * cellWidth + (Math.random() - 0.5) * cellWidth * 0.6,
        y: (row + 1) * cellHeight + (Math.random() - 0.5) * cellHeight * 0.6,
        originalX: 0,
        originalY: 0,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 1.5 + 0.8,
      });
      
      particles[i].originalX = particles[i].x;
      particles[i].originalY = particles[i].y;
    }
    particlesRef.current = particles;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      const newRect = container.getBoundingClientRect();
      canvas.width = newRect.width;
      canvas.height = newRect.height;
    };

    const animate = () => {
      timeRef.current += 0.005;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const attractionRadius = 250;
      const attractionStrength = 0.12;
      const repulsionRadius = 50;
      const repulsionStrength = 0.15;
      const time = timeRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Calculate distance to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Attraction to mouse (stronger pull)
        if (distance < attractionRadius && distance > 5) {
          const force = (1 - distance / attractionRadius) * attractionStrength;
          particle.vx += (dx / distance) * force * 0.8;
          particle.vy += (dy / distance) * force * 0.8;
        }

        // Repulsion from other nearby particles (congestion effect)
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const pdx = particle.x - other.x;
          const pdy = particle.y - other.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < repulsionRadius && pdist > 2) {
            const rep = (1 - pdist / repulsionRadius) * repulsionStrength;
            particle.vx += (pdx / pdist) * rep * 0.3;
            particle.vy += (pdy / pdist) * rep * 0.3;
          }
        }

        // Gentle oscillation for organic motion
        particle.vx += Math.sin(time + i * 0.1) * 0.02;
        particle.vy += Math.cos(time + i * 0.15) * 0.02;

        // Damping for smooth motion
        particle.vx *= 0.92;
        particle.vy *= 0.92;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Soft boundary - gently push back instead of hard bounce
        const margin = 10;
        if (particle.x < margin) {
          particle.x = margin;
          particle.vx = Math.abs(particle.vx);
        }
        if (particle.x > canvas.width - margin) {
          particle.x = canvas.width - margin;
          particle.vx = -Math.abs(particle.vx);
        }
        if (particle.y < margin) {
          particle.y = margin;
          particle.vy = Math.abs(particle.vy);
        }
        if (particle.y > canvas.height - margin) {
          particle.y = canvas.height - margin;
          particle.vy = -Math.abs(particle.vy);
        }

        // Draw particle with glow
        const glow = Math.sin(time * 2 + i * 0.05) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(249, 115, 22, ${0.7 + glow * 0.4})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw lines to nearby particles (congested net)
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const lineDistance = Math.hypot(
            particle.x - other.x,
            particle.y - other.y
          );

          // More aggressive connection radius for denser net
          if (lineDistance < 140) {
            const opacity = (1 - lineDistance / 140) * 0.7;
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
            ctx.lineWidth = 0.8 + (1 - lineDistance / 140) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      // Draw prominent lines to mouse (cursor attraction lines)
      particles.slice(0, 20).forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.hypot(dx, dy);

        if (distance < attractionRadius && distance > 20) {
          const opacity = (1 - distance / attractionRadius) * 0.5;
          ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

const Banner = () => {
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef}
      className="hero bg-transparent min-h-screen transition-colors duration-300 relative overflow-hidden">
      <MagneticNet containerRef={containerRef} />
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 relative z-20">

        {/* Image */}
        <img
          src={banner}
          alt="Neuravixor Services Banner"
          className="w-full max-w-xl sm:max-w-l rounded-lg dark:opacity-90 dark:brightness-90 transition-all"
        />

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="sm:text-4xl lg:text-5xl font-bold leading-tight">
          
            <span className="block text-black dark:text-white text-4xl md:text-6xl mb-2">
            
              BUILDING SMART DIGITAL SOLUTIONS 
            </span>
        
            <span className="block text-orange-400">
              with Web, AI & Design
            </span>
          </h1>

          <p className="py-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            We help businesses grow with modern web development, intelligent AI
            solutions, and visually stunning graphic design. From idea to
            execution — we turn concepts into powerful digital experiences.
          </p>

          <button className="btn bg-orange-400 hover:bg-orange-500 border-none text-white px-8">
            Let’s Work Together
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
