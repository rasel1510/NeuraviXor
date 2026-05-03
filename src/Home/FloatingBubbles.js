const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 25 });

  return (
    <>
      {/* CSS */}
      <style>
        {`
          .bubble-layer {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
            pointer-events: none;
          }

          .bubble {
            position: absolute;
            bottom: -150px;
            border-radius: 50%;
            opacity: 0.55;
            animation: floatUp linear infinite;
          }

          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
            }
            100% {
              transform: translateY(-130vh) scale(1.2);
            }
          }
        `}
      </style>

      <div className="bubble-layer">
        {bubbles.map((_, i) => {
          const size = Math.random() * 5 + 5 ;
          const duration = Math.random() * 25 + 20;
          const left = Math.random() * 100;

          const colors = ["#EB8633", "#41ED31"];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <span
              key={i}
              className="bubble"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                backgroundColor: color,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default FloatingBubbles;
