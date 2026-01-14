import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Fish,
  UtensilsCrossed,
  Beer,
  ArrowLeft,
  Info,
  Salad,
} from "lucide-react";
import { GiNoodles } from "react-icons/gi"; 

// Imagenes de comida marina
import ceviche from "../assets/ceviche.jpg";
import arrozmariscos from "../assets/arrozmariscos.jpg";
import sudado from "../assets/sudado.jpg";
import cevichemixto from "../assets/cevichemixto.jpg"
import cevichechicharron from "../assets/cevichechicharron.png"
import chicharronpescado from "../assets/chicharronpescado.jpg"
import chicharronrabas from "../assets/chicharronrabas.jpg"
import chaufamariscos from "../assets/chaufamariscos.jpg"

// Imagenes de carne 
import lomosaltado from "../assets/lomosaltado.png"
import broaster from "../assets/broaster.png"
import chaufapollo from "../assets/chaufapollo.jpg"
import mostrito from "../assets/mostrito.jpg"
import bistecpapas from "../assets/bistecpapas.jpg"
import secocarne from "../assets/secocarne.png"
import chaufados from "../assets/chufados.jpg"
import chaufatres from "../assets/chaufatres.webp"
import bistecpobredos from "../assets/bistecpobredos.jpeg"

// Imagenes de Pastas
import tallarinsaltado from "../assets/tallarinsaltado.png"
import combinado from "../assets/combinado.png"
import fideosdos from "../assets/fideosdos.jpg"
import fideostres from "../assets/fideostres.jpg"

// Imagenes de entradas 
import papahuancainda from "../assets/papahuancaina.jpg"

// Imagenes de bebidas
import budweiser from "../assets/budweiser.jpg"
import cocacola from "../assets/cocacola.jpg"

const MENU_DATA = {
  marina: [
    {
      id: "p1",
      nombre: "Ceviche",
      descripcion: "Cubos de pescado fresco marinados en limón, con calamar crujiente.",
      detalles: "Pescado del día, Pulpo, Calamar, Ají Limo",
      precio: 15000,
      url: ceviche,
      config: "eager"
    },
    {
      id: "p2",
      nombre: "Ceviche Mixto",
      descripcion: "Una explosión de frescura marina con pesca del día y mariscos selectos marinados en leche de tigre.",
      detalles: "Pescado, Langostinos, Calamar, Pulpo, Camote, Cancha",
      precio: 20000,
      url: cevichemixto,
      config: "eager"
    },
    {
      id: "p3",
      nombre: "Ceviche con chicharrón de pescado",
      descripcion: "Lo mejor de dos mundos: la frescura del ceviche clásico acompañado de trozos de pescado fritos y crocantes.",
      detalles: "Ceviche clásico, Chicharrón de pescado, Yuca frita, Salsa criolla",
      precio: 20000,
      url: cevichechicharron,
      config: "lazy"
    },
    {
      id: "p4",
      nombre: "Chicharron de pescado simple",
      descripcion: "Trozos de filete de pescado arrebozados al punto exacto de crocancia, servidos con guarnición.",
      detalles: "Filete de pescado, Yuca dorada, Salsa criolla, Salsa tártara",
      precio: 15000,
      url: chicharronpescado,
      config: "lazy"
    },
    {
      id: "p5",
      nombre: "Chicharrón de pescado mixto con rabas",
      descripcion: "Festín marino crujiente que combina trozos de pescado y aros de calamar dorados.",
      detalles: "Pescado, Aros de calamar (Rabas), Yuca frita, Salsas de la casa",
      precio: 20000,
      url: chicharronrabas,
      config: "lazy"
    },
    {
      id: "p6",
      nombre: "Arroz con Mariscos",
      descripcion: "Arroz meloso con mixtura de mariscos al fuego vivo.",
      detalles: "Langostinos, Calamar, Conchas de Abanico",
      precio: 15000,
      url: arrozmariscos,
      config: "lazy"
    },
    {
      id: "p7",
      nombre: "Arroz chaufa con mariscos",
      descripcion: "Fusión peruano-china al wok. Arroz frito con mariscos frescos, toque de kion y sillao.",
      detalles: "Arroz, Mix de mariscos, Huevo, Cebolla china, Sillao",
      precio: 15000,
      url: chaufamariscos,
      config: "lazy"
    },
    {
      id: "p8",
      nombre: "Sudado Jugoso",
      descripcion: "Filete de pescado al vapor de chicha de jora.",
      detalles: "Chicha de Jora, Tomate, Yuca, Pescado",
      precio: 20000,
      url: sudado,
      config: "lazy"
    },
  ],
  carnes: [
    {
      id: "c1",
      nombre: "Lomo Saltado",
      descripcion: "Lomo fino salteado al wok con cebolla, tomate y pisco.",
      detalles: "Lomo Fino, Papas Amarillas, Arroz",
      precio: 10000,
      url: lomosaltado,
      config: "eager"
    },
    {
      id: "c2",
      nombre: "Chaufa de pollo",
      descripcion: "El clásico favorito. Arroz salteado al wok con trozos de pollo, huevo y el sabor ahumado oriental.",
      detalles: "Pollo en trozos, Arroz frito, Huevo, Cebolla china, Aceite de ajonjolí",
      precio: 10000,
      url: chaufapollo,
      config: "eager"
    },
    {
      id: "c3",
      nombre: "Pollo broaster",
      descripcion: "Pieza de pollo con piel extra crujiente y carne jugosa, acompañada de papas doradas.",
      detalles: "Pollo crocante, Papas fritas, Ensalada fresca, Cremas",
      precio: 8000,
      url: broaster,
      config: "lazy"
    },
    {
      id: "c4",
      nombre: "Mostrito",
      descripcion: "La combinación contundente para grandes apetitos: Chaufa clásico servido con un cuarto de pollo broaster.",
      detalles: "Pollo broaster, Arroz chaufa, Papas fritas, Ensalada",
      precio: 12000,
      url: mostrito,
      config: "lazy"
    },
    {
      id: "c5",
      nombre: "Chaufa 2 sabores",
      descripcion: "Doble sabor en tu plato. Arroz chaufa salteado con pollo y carne de res seleccionada.",
      detalles: "Pollo, Carne de res, Arroz frito, Huevo, Cebolla china",
      precio: 12000,
      url: chaufados,
      config: "lazy"
    },
    {
      id: "c6",
      nombre: "Chaufa 3 sabores",
      descripcion: "La versión especial del chaufa con tres proteínas: pollo, carne y chancho asado (o langostino según disponibilidad).",
      detalles: "Pollo, Res, Cerdo asado, Arroz, Tortilla de huevo",
      precio: 15000,
      url: chaufatres,
      config: "lazy"
    },
    {
      id: "c7",
      nombre: "Bistec a lo pobre",
      descripcion: "Suculento bistec a la parrilla servido con plátano y huevo frito, un clásico contundente.",
      detalles: "Bistec de res, Plátano frito, Huevo frito, Papas fritas, Arroz",
      precio: 10000,
      url: bistecpobredos,
      config: "lazy"
    },
    {
      id: "c8",
      nombre: "Bistec con papas fritas",
      descripcion: "Bistec de res jugoso y sazonado, acompañado de abundantes papas fritas crocantes.",
      detalles: "Bistec de res, Papas fritas, Arroz blanco, Ensalada del día",
      precio: 8000,
      url: bistecpapas,
      config: "lazy"
    },
    {
      id: "c9",
      nombre: "Seco de cordero",
      descripcion: "Guiso tradicional norteño de cordero macerado en chicha de jora y culantro, cocido a fuego lento.",
      detalles: "Cordero tierno, Salsa de culantro, Frejoles, Arroz blanco, Yuca",
      precio: 15000,
      url: secocarne,
      config: "lazy"
    },
  ],
  entradas: [
    {
      id: "e1",
      nombre: "Papa huancaina - Estilo Chiclayo",
      descripcion: "Rodajas de papa bañadas en nuestra crema especial de ají amarillo y queso fresco, con el toque chiclayano.",
      detalles: "Papa sancochada, Salsa huancaína casera, Aceituna, Huevo duro, Lechuga",
      precio: 5000,
      url: papahuancainda,
      config: "eager"
    },
  ],
  bebidas: [
    {
      id: "b1",
      nombre: "Coca Cola",
      descripcion: "Gaseosa refrescante sabor original, ideal para acompañar cualquier plato.",
      detalles: "Bebida gasificada, Servida helada",
      precio: 3500, 
      url: cocacola,
      config: "eager"
    },
    {
      id: "b2",
      nombre: "Budweiser",
      descripcion: "Cerveza lager de estilo americano, cuerpo medio y sabor fresco.",
      detalles: "Cerveza en botella, Cebada malteada (5% Alc. Vol.)",
      precio: 3000,
      url: budweiser,
      config: "eager"
    },
  ],
  pastas: [
    {
      id: "p1",
      nombre: "Tallarin saltado de carne",
      descripcion: "Fideos criollos salteados al wok con trozos de carne, verduras crujientes y salsa de soya.",
      detalles: "Fideos gruesos, Carne de res, Cebolla, Tomate, Sillao",
      precio: 10000,
      url: tallarinsaltado,
      config: "eager"
    },
    {
      id: "p2",
      nombre: "Tallarin saltado 2 sabores",
      descripcion: "La fusión perfecta de fideos salteados con pollo y carne de res jugosa.",
      detalles: "Fideos, Pollo, Carne de res, Verduras salteadas, Salsa oriental",
      precio: 12000,
      url: fideosdos,
      config: "eager"
    },
    {
      id: "p3",
      nombre: "Tallarín saltado 3 sabores",
      descripcion: "Plato especial de fideos al wok con tres carnes y el ahumado característico.",
      detalles: "Fideos, Pollo, Res, Cerdo/Langostino, Verduras chinas",
      precio: 15000,
      url: fideostres,
      config: "lazy"
    },
    {
      id: "p4",
      nombre: "Combinado",
      descripcion: "La mezcla favorita del puerto: Tallarines, Ceviche fresco y Papa a la Huancaína en un solo plato.",
      detalles: "Tallarín rojo o saltado, Ceviche de pescado, Papa huancaína",
      precio: 8000,
      url: combinado,
      config: "lazy"
    },
  ],
};

const categories = [
  {
    id: 1,
    key: "marina",
    title: "Comida Marina",
    description: "Ceviche, arroz con mariscos...",
    icon: <Fish size={28} className="text-brand-pink" />,
  },
  {
    id: 2,
    key: "carnes",
    title: "Carnes y Brasas",
    description: "Lomo saltado, seco de res...",
    icon: <UtensilsCrossed size={28} className="text-brand-pink" />,
  },
  {
    id: 3,
    key: "pastas",
    title: "Fideos y Combinados",
    description: "Combinado con ceviche, Tallarin sal...",
    icon: <GiNoodles size={28} className="text-brand-pink" />,
  },

  {
    id: 4,
    key: "entradas",
    title: "Entradas y Piqueos",
    description: "Causa, papa a la huancaína...",
    icon: <Salad size={28} className="text-brand-pink" />,
  },
  {
    id: 5,
    key: "bebidas",
    title: "Bebidas",
    description: "Coca Cola, Budweiser...",
    icon: <Beer size={28} className="text-brand-pink" />,
  },
];

const CategoryView = ({ categoryTitle, items, onBack }) => (
  <div className="min-h-screen bg-brand-bg pb-24 animate-in fade-in duration-300">
    <div className="sticky top-0 bg-brand-bg/90 backdrop-blur-md z-20 px-6 py-5 flex items-center border-b border-brand-pink/20">
      <button
        onClick={onBack}
        className="p-2 -ml-2 active:scale-75 transition-transform"
      >
        <ArrowLeft size={27} className="text-brand-dark" />
      </button>
      <h2 className="ml-4 text-xl font-bold tracking-tight text-brand-dark uppercase ml-17">
        {categoryTitle}
      </h2>
    </div>

    <div className="px-6 py-8 space-y-10">
      {items.map((plato) => (
        <div key={plato.id} className="relative">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h3 className="text-xl font-extrabold text-brand-dark flex-1 leading-tight uppercase tracking-tight">
              {plato.nombre}
            </h3>
            <span className="text-md font-bold text-brand-dark bg-brand-pink/40 px-3 py-1 rounded-xl whitespace-nowrap">
              <div>
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2, 
                }).format(plato.precio)}
              </div>
            </span>
          </div>
          <p className="text-brand-dark/80 text-sm leading-relaxed mb-4 ">
            {plato.descripcion}
          </p>
          <div className="w-full mb-5 overflow-hidden rounded-2xl shadow-sm border border-brand-pink/10">
            <img
              src={plato.url}
              alt={plato.nombre}
              className="w-full h-48 object-cover object-center transition-transform hover:scale-105 duration-700"
              loading={plato.config}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {plato.detalles.split(",").map((tag, i) => (
              <span
                key={i}
                className="text-[11px] uppercase tracking-widest font-bold text-brand-dark/40 bg-white border border-brand-pink/30 px-2 py-1 rounded-md"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
          <div className="w-16 h-[2px] bg-brand-pink/50 mt-6"></div>
        </div>
      ))}
    </div>

    <div className="fixed bottom-6 left-6 right-6 bg-brand-dark text-brand-pink p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
      <Info size={20} />
      <span className="text-[11px] font-bold uppercase tracking-wider">
        ¿Alergias? Consulta con nuestro personal
      </span>
    </div>
  </div>
);

const Menu = () => {
  const navigate = useNavigate();
  const { categoryKey } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (categoryKey) {
      const cat = categories.find((c) => c.key === categoryKey);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedCategory(cat || null);
    } else {
      setSelectedCategory(null);
    }
  }, [categoryKey]);

  const openCategory = (cat) => {
    navigate(`/menu/${cat.key}`);
  };

  if (selectedCategory) {
    return (
      <CategoryView
        categoryTitle={selectedCategory.title}
        items={MENU_DATA[selectedCategory.key]}
        onBack={() => navigate("/menu")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg px-6 py-12">
      {/* Header del Menú */}
      <header className="mb-10 text-center">
        <h2 className="text-brand-dark text-3xl font-bold tracking-tight mb-2">
          Nuestra Carta
        </h2>
        <p className="text-brand-dark/70 text-sm uppercase tracking-widest">
          Selecciona una categoría
        </p>
        <div className="w-10 h-1 bg-brand-pink mx-auto mt-4 rounded-full"></div>
      </header>

      {/* Lista de Categorías */}
      <div className="space-y-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => openCategory(cat)}
            className="w-full flex items-center p-4 bg-white border border-brand-pink/20 rounded-3xl shadow-sm active:scale-[0.98] transition-all text-left"
          >
            {/* Icono a la izquierda */}
            <div className="bg-brand-dark p-3 rounded-2xl mr-5 shadow-lg">
              {cat.icon}
            </div>

            {/* Texto Central */}
            <div className="flex-1">
              <h3 className="text-brand-dark font-bold text-lg leading-tight">
                {cat.title}
              </h3>
              <p className="text-brand-dark/60 text-sm mt-1 ">
                {cat.description}
              </p>
            </div>

            {/* Indicador a la derecha */}
            <ChevronRight className="text-brand-pink ml-2" size={24} />
          </button>
        ))}
      </div>

      {/* Footer minimalista */}
      <footer className="mt-16 text-center">
        <p className="text-brand-dark/75 text-[12px] uppercase tracking-[0.3em]">
          La Chiclayanita • 2026
        </p>
      </footer>
    </div>
  );
};

export default Menu;
