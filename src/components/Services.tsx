import React from 'react';
import { Code, Layout, Database, Cloud, Shield, LineChart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio.'
    },
    {
      icon: <Layout className="h-8 w-8 text-blue-400" />,
      title: 'Diseño Web',
      description: 'Diseñamos experiencias digitales atractivas y funcionales que cautivan a tus usuarios.'
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: 'Gestión de Datos',
      description: 'Optimizamos el manejo y análisis de tus datos para una toma de decisiones más efectiva.'
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-400" />,
      title: 'Servicios Cloud',
      description: 'Implementamos soluciones en la nube para maximizar la eficiencia y escalabilidad.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: 'Ciberseguridad',
      description: 'Protegemos tu información con las últimas tecnologías en seguridad digital.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-400" />,
      title: 'Consultoría IT',
      description: 'Asesoramiento experto para optimizar tus procesos tecnológicos.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center slide-up ${isSectionVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl glitch-effect" data-text="Nuestros Servicios">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 neon-text">
            Soluciones integrales para potenciar tu presencia digital
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group w-full h-auto scale-up ${isSectionVisible ? 'visible' : ''} service-card`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleX = (y - centerY) / 20;
                const angleY = -(x - centerX) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
                
                const glowX = (x / rect.width) * 100;
                const glowY = (y / rect.height) * 100;
                card.style.setProperty('--glow-position', `${glowX}% ${glowY}%`);
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-75 group-hover:opacity-100 transition-all duration-300 blur animate-glow"></div>
              <div className="relative md:h-full p-6 bg-gray-900 rounded-lg tech-border group-hover:transform group-hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-blue-900/30 group-hover:animate-float cyber-circle">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-white text-center neon-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-400 text-center">
                  {service.description}
                </p>
                <div className="absolute inset-0 pointer-events-none service-card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;