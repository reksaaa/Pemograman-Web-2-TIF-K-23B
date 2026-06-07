import { useEffect, useState } from "react";

export default function Effect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove);

    // Clean up listener to prevent memory leaks when component unmounts
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Mouse Tracker</h1>
      <p style={{ color: "#9ca3af", marginBottom: "20px" }}>
        Move your mouse to track coordinate changes in real-time.
      </p>

      <div
        style={{
          background: "rgba(99, 102, 241, 0.08)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          borderRadius: "10px",
          padding: "20px",
          display: "inline-block",
          minWidth: "220px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#a78bfa",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "8px",
          }}
        >
          Coordinates
        </h3>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "800",
            margin: 0,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          X: <span style={{ color: "#6366f1" }}>{position.x}</span> | Y:{" "}
          <span style={{ color: "#a78bfa" }}>{position.y}</span>
        </p>
      </div>

      {/* Cursor follower blob */}
      <div
        style={{
          position: "fixed",
          backgroundColor: "#6366f1",
          borderRadius: "50%",
          opacity: 0.4,
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          pointerEvents: "none",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          transition: "transform 0.08s ease-out",
          zIndex: 9999,
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
        }}
      />
    </div>
  );
}
