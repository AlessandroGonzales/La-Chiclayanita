import {  useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fideospollo from "../assets/fideitos.png";
import ajigallina from "../assets/aijgallina.webp";

const menuOfDay = [
  {
    id: 1,
    title: "Miercoles",
    subtitle: "Tallarin con pollo y sopa",
    price: 7000,
    url: fideospollo,
  },
  {
    id: 2,
    title: "Martes",
    subtitle: "Ají de gallina",
    price: 7000,
    url: ajigallina,
  },
];


const ServiceCard = ({ service }) => {
  if (!service) return null;
  const PHONE_NUMBER = "5493516210718";

  const handleWhatsAppClick = () => {
    // El mensaje que recibirá el restaurante
  const message = `Hola! Me gustaría pedir el Menú del día ${service.title}: ${service.subtitle} que vi en la carta.`;

  const encodedMessage = encodeURIComponent(message);
    
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    
  window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="relative w-full h-full overflow-hidden transition-all duration-500">
      <img
        src={service.url}
        alt={service.subtitle}
        className="w-full h-full object-cover"
      />
      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
        <span className="text-brand-pink font-bold uppercase tracking-widest text-xs mb-1">
          {service.title}
        </span>
        <h2 className="text-2xl md:text-4xl font-black mb-2 uppercase">
          {service.subtitle}
        </h2>
        <p className="text-lg font-bold text-white/90 mb-4">
          ${new Intl.NumberFormat("es-AR").format(service.price)}
        </p>
        <button onClick={handleWhatsAppClick}className="w-fit px-6 py-2 rounded-full text-[10px] font-bold uppercase bg-white text-black hover:bg-brand-pink hover:text-white transition-colors">
          Pedir Menú
        </button>
      </div>
    </div>
  );
};

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-reproducir


  const move = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + menuOfDay.length) % menuOfDay.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0, zIndex: 0 }),
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-3xl shadow-2xl border border-white/10">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute inset-0"
        >
          <ServiceCard service={menuOfDay[index]} />
        </motion.div>
      </AnimatePresence>

      {/* Flechas de Navegación - Más pequeñas en móvil */}
      <div className="absolute inset-0 flex items-center justify-between px-2 z-20 pointer-events-none">
        <button
          onClick={() => move(-1)}
          className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white pointer-events-auto active:scale-90 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => move(1)}
          className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white pointer-events-auto active:scale-90 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {menuOfDay.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-300 rounded-full ${
              i === index ? "w-6 bg-brand-pink" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}