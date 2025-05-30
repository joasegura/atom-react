import React, { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Contact = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Simulamos el envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(formData);

    setFormStatus({
      submitted: true,
      submitting: false,
      error: null,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center slide-up ${
            isSectionVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Estamos aquí para ayudarte a alcanzar tus objetivos tecnológicos
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className={`bg-gray-900 rounded-lg tech-border p-8 scale-up ${
                isSectionVisible ? "visible" : ""
              }`}
            >
              {formStatus.submitted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-400 text-center">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus.submitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              )}
            </div>

            <div
              className={`bg-gray-900 rounded-lg tech-border p-8 scale-up ${
                isSectionVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="space-y-8">
                <div className="flex items-start group">
                  <Mail className="h-6 w-6 text-blue-400 mt-1 group-hover:animate-float" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="mt-1 text-gray-400">
                      contacto@atomsolucionesit.com.ar
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Phone className="h-6 w-6 text-blue-400 mt-1 group-hover:animate-float" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Teléfono</h4>
                    <p className="mt-1 text-gray-400">+54 1126678238</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 group-hover:animate-float" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">
                      Ubicación
                    </h4>
                    <p className="mt-1 text-gray-400">
                      Av. Belgrano 1060
                      <br />
                      Corrientes, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
