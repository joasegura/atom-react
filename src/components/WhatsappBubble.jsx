import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const WhatsAppBubble = () => {
  const [isVisible, setIsVisible] = useState(true);
  const phoneNumber = "+541126678238";

  // Maneja la redirección a WhatsApp
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Maneja el cierre del cuadro de bienvenida
  const handleClose = () => {
    setIsVisible(false);
  };

  // Oculta automáticamente el cuadro de bienvenida después de 10 segundos
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 20000);

      return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
    }
  }, [isVisible]);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col z-50">
      {isVisible && (
        <div className="bg-white p-2 rounded shadow-lg mb-2 flex items-center transition-opacity duration-300">
          <span className="absolute top-0 left-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="text-black mr-2">
            ¡Hola! 👋 Un asesor ya está listo para ayudarte.
          </span>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <AiOutlineClose size={18} />
          </button>
        </div>
      )}
      <div className="relative">
        {/* Contenedor con la animación de rotación de la sombra */}
        <div className="float-end">
          <div className="absolute top-0 right-0 w-14 h-14 rounded-full border border-white animate-ping"></div>
          <div
            className="w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:animate-pulse"
            onClick={handleClick}
          >
            <FaWhatsapp size={24} className="text-white relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBubble;
