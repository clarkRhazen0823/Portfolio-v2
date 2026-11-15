// src/components/FloatingParticles.jsx
const pseudoRandom = (seed) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

export function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60 glow-particle"
          style={{
            backgroundColor: '#ffb347',
            left: `${pseudoRandom(i + 1) * 100}%`,
            top: `${pseudoRandom(i + 31) * 100}%`,
            animation: `slow-drift ${
              15 + pseudoRandom(i + 61) * 20
            }s ease-in-out infinite`,
            animationDelay: `-${pseudoRandom(i + 91) * 15}s`,
          }}
        />
      ))}
    </div>
  );
}
