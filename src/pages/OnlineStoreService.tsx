import React from 'react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

interface PriceCardProps {
  plan: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const OnlineStoreService = () => {
  const storeImages = {
    desktop: '/mockups-hero/store-desktop.png',
    mobile: '/mockups-hero/store-mobile.png',
    dashboard: '/mockups-hero/store-dashboard.png',
    products: '/mockups-hero/store-products.png'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold text-white leading-tight"
            >
              Crea tu tienda online
            </motion.h1>
            <p className="text-2xl text-gray-300">
              Te la entregamos lista para usar
            </p>
            <div className="bg-[#E85F55] inline-block px-6 py-4 rounded-lg">
              <p className="text-2xl font-bold text-white">Desde $337.400</p>
              <p className="text-white text-sm">+impuestos</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-[#6B66FF] text-xl">✓</span>
                <p>Te la entregamos lista para usar</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-[#6B66FF] text-xl">✓</span>
                <p>Cargamos tus primeros productos</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-[#6B66FF] text-xl">✓</span>
                <p>La vinculamos con tu Mercado Pago</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-[#6B66FF] text-xl">✓</span>
                <p>Sin comisiones por venta</p>
              </div>
            </div>
          </div>

          {/* Right Column - Store Preview */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="bg-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-white rounded px-2 py-1 text-sm text-gray-600">www.tutienda.com</div>
              </div>
              <img 
                src={storeImages.desktop}
                alt="Preview de tienda online" 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            {/* Floating Features */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -left-4 bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-[#6B66FF] p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Diseño Responsivo</p>
                  <p className="text-gray-400 text-sm">Se adapta a todos los dispositivos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Beneficios de una tienda profesional</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Benefits List */}
            <div className="space-y-8">
              <BenefitCard 
                title="Diseño Personalizado"
                description="Tu marca, tu estilo. Diseñamos tu tienda para que refleje la identidad de tu negocio."
                icon="🎨"
              />
              <BenefitCard 
                title="Optimización SEO"
                description="Mejoramos tu visibilidad en Google para que tus clientes te encuentren fácilmente."
                icon="📈"
              />
              <BenefitCard 
                title="Soporte Técnico"
                description="Estamos contigo en cada paso. Soporte continuo para resolver tus dudas."
                icon="🛟"
              />
            </div>
            {/* Right Column - Interactive Preview */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-900 rounded-xl p-6 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#E85F55] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Panel de Control</h3>
                      <p className="text-gray-400">Gestiona tu tienda fácilmente</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-white mb-2">Ventas del Mes</h4>
                    <p className="text-2xl text-[#6B66FF] font-bold">$45,230</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-white mb-2">Productos</h4>
                    <p className="text-2xl text-[#6B66FF] font-bold">124</p>
                  </div>
                </div>
                <img 
                  src={storeImages.dashboard}
                  alt="Panel de control de la tienda"
                  className="w-full rounded-lg mt-4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Preview Section */}
      <section className="py-16 px-4 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.img 
                src={storeImages.mobile}
                alt="Vista móvil de la tienda"
                className="w-full max-w-sm mx-auto rounded-xl shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-white">Optimizado para Móviles</h2>
              <p className="text-gray-300">Tu tienda se verá perfecta en cualquier dispositivo, garantizando la mejor experiencia para tus clientes.</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-300">
                  <span className="text-[#6B66FF] text-xl">✓</span>
                  <p>Diseño adaptativo</p>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <span className="text-[#6B66FF] text-xl">✓</span>
                  <p>Carga rápida</p>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <span className="text-[#6B66FF] text-xl">✓</span>
                  <p>Navegación intuitiva</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Planes de Pago</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PriceCard 
              plan="2 CUOTAS"
              price="337.400"
              features={[
                "Sin interés",
                "Soporte técnico incluido",
                "Diseño personalizado",
                "Integración con Mercado Pago"
              ]}
            />
            <PriceCard 
              plan="PAGO ÚNICO"
              price="674.800"
              features={[
                "Ahorrá con el pago único",
                "Soporte técnico incluido",
                "Diseño personalizado",
                "Integración con Mercado Pago"
              ]}
              highlighted
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Dejanos tus datos</h2>
          <p className="text-center text-gray-300 mb-8">
            Pronto te contactará uno de nuestros especialistas
          </p>
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Nombre*</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email*</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-300 mb-2">WhatsApp o número telefónico*</label>
              <div className="flex gap-4">
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                  <option>Argentina (+54)</option>
                </select>
                <input 
                  type="tel" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
            </div>
            <button className="w-full mt-8 bg-[#E85F55] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#d54d43] transition-colors">
              Quiero mi tienda online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Benefit Card Component
const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-[#6B66FF] rounded-lg flex items-center justify-center">
      <span className="text-2xl">{icon}</span>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

// Price Card Component
const PriceCard: React.FC<PriceCardProps> = ({ plan, price, features, highlighted = false }) => (
  <div className={`p-6 rounded-xl border ${highlighted ? 'border-[#6B66FF] bg-gray-800' : 'border-gray-700 bg-gray-900'}`}>
    <h3 className="text-2xl font-bold mb-2 text-white">{plan}</h3>
    <div className="text-4xl font-bold mb-6 text-white">
      ${price}<span className="text-lg text-gray-400">/total</span>
    </div>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <span className="text-[#6B66FF] mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
      highlighted 
        ? 'bg-[#E85F55] text-white hover:bg-[#d54d43]' 
        : 'bg-gray-800 text-white hover:bg-gray-700'
    }`}>
      Seleccionar Plan
    </button>
  </div>
);

export default OnlineStoreService; 