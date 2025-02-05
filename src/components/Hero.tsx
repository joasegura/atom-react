import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'para el Futuro';
  const [particleCount] = useState(15);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      translateX: (Math.random() - 0.5) * 100,
      translateY: (Math.random() - 0.5) * 100,
      rotate: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center tech-gradient overflow-hidden matrix-bg"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0.15'
      }}></div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle bg-blue-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--translate-x': `${particle.translateX}px`,
            '--translate-y': `${particle.translateY}px`,
            '--rotate': `${particle.rotate}deg`,
          }}
        />
      ))}

      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 hover-3d"
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-float">
            <span className="block glitch-effect" data-text="Soluciones Tecnológicas">
              Soluciones Tecnológicas
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 typing-cursor neon-effect">
              {text}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transformamos tu visión en realidad digital con soluciones tecnológicas de vanguardia que impulsan la innovación y el crecimiento empresarial.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div>
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 cyber-border"
              >
                Contáctanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;