import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Zap, Shield, Users } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "para el Futuro";
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
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const phoneNumber = "+541126678238";

  // Maneja la redirección a WhatsApp
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center tech-gradient overflow-hidden matrix-bg"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.15",
        }}
      ></div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle bg-blue-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            "--translate-x": `${particle.translateX}px`,
            "--translate-y": `${particle.translateY}px`,
            "--rotate": `${particle.rotate}deg`,
          }}
        />
      ))}

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 hover-3d"
        style={{
          transform: `perspective(1000px) rotateY(${
            mousePosition.x * 5
          }deg) rotateX(${-mousePosition.y * 5}deg)`,
        }}
      >
        <div className="text-center">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="w-fit flex justify-center items-center text-sm">
                  <Zap className="w-3 h-3 mr-1" />
                  <span className="text-sm">Innovación Tecnológica</span>
                </div>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-float">
                  <span
                    className="block glitch-effect"
                    data-text="Soluciones Tecnológicas"
                  >
                    Soluciones Tecnológicas
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    {text}
                  </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Transformamos tu visión en realidad digital con soluciones
                  tecnológicas de vanguardia que impulsan la innovación y el
                  crecimiento empresarial.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 min-[400px]:flex-row">
                <button
                  onClick={handleClick}
                  className="bg-slate-900 rounded-md flex justify-center items-center p-2 hover:bg-slate-800"
                >
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="p-2 md:w-64 w-full bg-gray-300 text-gray-800 rounded-md flex justify-center itec">
                  Ver Portfolio
                </button>
              </div>

              <div className="flex items-center flex-wrap text-center justify-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-slate-600" />
                  <span className="text-sm text-slate-600">
                    Desarrollo Custom
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-slate-600" />
                  <span className="text-sm text-slate-600">
                    Seguridad Avanzada
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-slate-600" />
                  <span className="text-sm text-slate-600">Soporte 24/7</span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center lg:order-last">
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/mockup.png?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Desarrollo de Software"
                  className="relative mx-auto overflow-hidden rounded-2xl object-cover object-top shadow-2xl"
                />
                <div className="absolute -bottom-4 right-0 md:-bottom-4 md:-right-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">
                      Sistema en línea
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      100% Custom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
