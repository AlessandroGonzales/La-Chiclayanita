import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "../assets/lachiclayanita.png";
import chiclayo from "../assets/chiclayo.jpg"
import pimental from "../assets/pimental.webp";

// Simulación de transición de imágenes de fondo
const IMAGES = [chiclayo, pimental];

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4050);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Imagen de Fondo con Transición */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[1400ms] ease-in-out"
          style={{
            backgroundImage: `url(${IMAGES[bgIndex]})`,
            filter: "brightness(0.8) contrast(1.1)",
          }}
        />
      </div>
      <div className="hidden">
        {IMAGES.map((src, i) => (
          <img key={i} src={src} alt="preload" />
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 py-16">
        {/* Header: Logo y Títulos */}
        <div className="flex flex-col items-center text-center mt-10">
          <div className="w-48 h-48 mb-6 ">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-brand-pink tracking-[0.3em] uppercase text-sm font-medium mb-2">
            Resto - Bar
          </h2>
          <h1 className="text-white text-4xl font-bold tracking-tight">
            Comida Peruana
          </h1>
          <div className="w-12 h-[2px] bg-brand-pink mt-4 shadow-[0_0_10px_rgba(248,195,217,0.8)]"></div>
        </div>

        {/* Bottom: Botón de Acción */}
        <div className="w-full max-w-xs mb-10">
          <Link
            to="/menu"
            className="group relative flex items-center justify-center w-full bg-brand-pink text-brand-dark font-bold py-5 rounded-2xl shadow-2xl active:scale-95 transition-all overflow-hidden"
          >
            <span className="relative z-10 text-lg uppercase tracking-wider">
              Explorar Menú
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-active:translate-y-0 transition-transform"></div>
          </Link>
          <p className="text-white/70 text-center text-xs mt-6 tracking-widest uppercase">
            Chiclayo • Perú
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
