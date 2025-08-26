"use client";

import { useEffect, useState } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: Particle[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];

    const createFirework = () => {
      const firework: Firework = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.6 + window.innerHeight * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        particles: [],
      };
      const numParticles = 20;
      for (let i = 0; i < numParticles; i++) {
        const angle = (i / numParticles) * Math.PI * 2;
        const speed = Math.random() * 3 + 2.5;
        firework.particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 32,
          maxLife: 32,
        });
      }
      return firework;
    };

    let running = true;
    function animate() {
      setFireworks((prev) => {
        const newFireworks = [...prev];
        if (Math.random() < 0.35) {
          newFireworks.push(createFirework());
        }
        return newFireworks
          .map((firework) => ({
            ...firework,
            particles: firework.particles
              .map((particle) => ({
                ...particle,
                x: particle.x + particle.vx,
                y: particle.y + particle.vy,
                vx: particle.vx * 0.98,
                vy: particle.vy * 0.98 + 0.13,
                life: particle.life - 1,
              }))
              .filter((particle) => particle.life > 0),
          }))
          .filter((firework) => firework.particles.length > 0)
          .slice(-12);
      });
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {fireworks.map((firework) =>
        firework.particles.map((particle, i) => (
          <div
            key={`${firework.id}-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: firework.color,
              opacity: particle.life / particle.maxLife,
              transform: `scale(${(particle.life / particle.maxLife) * 1.5})`,
            }}
          />
        ))
      )}
    </div>
  );
}
