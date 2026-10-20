// components/Avatar3D.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Avatar3D({ src, alt, size = 280 }) {
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  // Auto-rotate setiap 8 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 360) % 720);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Update CSS variable untuk rotasi
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--rot", `${rotation}deg`);
    }
  }, [rotation]);

  return (
    <div className="avatar-wrapper">
      {/* Gradient Ring */}
      <div className="avatar-ring"></div>

      {/* Avatar Container */}
      <div
        ref={containerRef}
        className="avatar-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <Image
          src={src}
          width={size}
          height={size}
          alt={alt}
          className="avatar-image"
          priority
        />

        <div className="avatar-overlay">
          <img
            src="/assets/avatar.jpeg"
            alt="Muhamad Zul"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Particles */}
      <div className="avatar-particles">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}