import React, { useEffect, useState } from "react";

const CursorRing = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const updateTrailingPosition = () => {
      setTrailingPosition((prev) => {
        // "Not too fast, not too slow" - lerp factor 0.15
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailingPosition);
    };

    animationFrameId = requestAnimationFrame(updateTrailingPosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      {/* The Ring */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-orange-400 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${trailingPosition.x - 20}px, ${trailingPosition.y - 20}px)`,
          transition: "transform 0.05s linear",
        }}
      />
      {/* The Dot (Optional but looks good) */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-orange-500 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
        }}
      />
    </>
  );
};

export default CursorRing;
