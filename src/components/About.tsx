import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`lg:text-center slide-up ${isSectionVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl glitch-effect cyber-circle" data-text="Sobre Nosotros">
            Sobre Nosotros
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto neon-text">
            En ATOM Soluciones IT, nos dedicamos a transformar ideas en soluciones tecnológicas innovadoras.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-400" />,
                title: 'Quiénes Somos',
                description: 'Somos un equipo de analistas y desarrolladores apasionados por crear soluciones tecnológicas que impulsan el éxito empresarial.'
              },
              {
                icon: <Target className="h-12 w-12 text-blue-400" />,
                title: 'Misión',
                description: 'Entregar soluciones tecnológicas innovadoras y de alta calidad que impulsen el crecimiento y la eficiencia de nuestros clientes.'
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-400" />,
                title: 'Visión',
                description: 'Ser líderes en el mercado de soluciones tecnológicas, reconocidos por nuestra excelencia en servicio al cliente y contribución al desarrollo sostenible.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative group p-6 bg-gray-800 rounded-lg tech-border hover:glow transition-all duration-300 scale-up ${
                  isSectionVisible ? 'visible' : ''
                } hover-3d-card`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  '--rotate-x': '0deg',
                  '--rotate-y': '0deg',
                  '--rotate-z': '0deg'
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = -(x - centerX) / 10;
                  
                  card.style.setProperty('--rotate-x', `${rotateX}deg`);
                  card.style.setProperty('--rotate-y', `${rotateY}deg`);
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--rotate-x', '0deg');
                  card.style.setProperty('--rotate-y', '0deg');
                }}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex justify-center group-hover:animate-float">
                    <div className="p-3 rounded-full bg-blue-900/30">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white text-center neon-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;