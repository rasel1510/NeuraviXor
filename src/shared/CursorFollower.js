import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // 🧊 Very slow & smooth follow
      const speed = 0.045;

      ring.current.x += (mouse.current.x - ring.current.x) * speed;
      ring.current.y += (mouse.current.y - ring.current.y) * speed;

      cursor.style.transform = `
        translate3d(
          ${ring.current.x - 18}px,
          ${ring.current.y - 18}px,
          0
        )
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none fixed top-0 left-0 z-[9999]
        w-9 h-9 rounded-full
        border border-orange-500
        shadow-[0_0_14px_rgba(249,115,22,0.35)]
        hidden md:block
      "
    />
  );
}
