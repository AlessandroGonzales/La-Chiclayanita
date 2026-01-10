import {useState} from 'react';
import ceviche from "../assets/ceviche.jpg"
import arrozmariscos from "../assets/arrozmariscos.jpg"
import sudado from "../assets/sudado.jpg"
import { ChevronRight, Fish, UtensilsCrossed, Coffee, Beer, ArrowLeft, Info } from 'lucide-react';
const MENU_DATA = {
  marina: [
    { id: "p1", nombre: "Ceviche Carretillero", descripcion: "Cubos de pescado fresco marinados en limón de piura, con calamar crujiente.", detalles: "Pescado del día, Pulpo, Calamar, Ají Limo", precio: 38.00, url: ceviche},
    { id: "p2", nombre: "Arroz con Mariscos", descripcion: "Arroz meloso con mixtura de mariscos al fuego vivo.", detalles: "Langostinos, Calamar, Conchas de Abanico", precio: 42.00, url: arrozmariscos  },
    { id: "p3", nombre: "Sudado", descripcion: "Filete de pescado al vapor de chicha de jora.", detalles: "Chicha de Jora, Tomate, Yuca, Pescado", precio: 35.00, url: sudado }
  ],
  carnes: [
    { id: "c1", nombre: "Lomo Saltado", descripcion: "Lomo fino salteado al wok con cebolla, tomate y pisco.", detalles: "Lomo Fino, Papas Amarillas, Arroz", precio: 45.00 },
    { id: "c2", nombre: "Seco de Res", descripcion: "Carne macerada en culantro y chicha de jora.", detalles: "Culantro, Frijol Canario, Salsa Criolla", precio: 36.00 }
  ],
  entradas: [
    { id: "e1", nombre: "Causa Limeña", descripcion: "Masa de papa amarilla con ají amarillo, rellena de pollo.", detalles: "Papa Amarilla, Palta, Huevo, Aceituna", precio: 25.00 }
  ],
  bebidas: [
    { id: "b1", nombre: "Pisco Sour", descripcion: "Nuestro cóctel bandera, equilibrado y refrescante.", detalles: "Pisco Quebranta, Limón, Clara de Huevo", precio: 28.00 }
  ]
};

const categories = [
  { id: 1, key: 'marina', title: "Comida Marina", description: "Ceviche, arroz con mariscos...", icon: <Fish size={28} className="text-brand-pink" /> },
  { id: 2, key: 'carnes', title: "Carnes y Brasas", description: "Lomo saltado, seco de res...", icon: <UtensilsCrossed size={28} className="text-brand-pink" /> },
  { id: 3, key: 'entradas', title: "Entradas y Piqueos", description: "Causa, papa a la huancaína...", icon: <UtensilsCrossed size={28} className="text-brand-pink" /> },
  { id: 4, key: 'bebidas', title: "Bebidas y Cocteles", description: "Pisco Sour, chicha morada...", icon: <Beer size={28}  className="text-brand-pink"/> }
];  

const CategoryView = ({ categoryTitle, items, onBack }) => (

  <div className="min-h-screen bg-brand-bg pb-24 animate-in fade-in duration-300">
    <div className="sticky top-0 bg-brand-bg/90 backdrop-blur-md z-20 px-6 py-5 flex items-center border-b border-brand-pink/20">
      <button onClick={onBack} className="p-2 -ml-2 active:scale-75 transition-transform">
        <ArrowLeft size={27} className="text-brand-dark" />
      </button>
      <h2 className="ml-4 text-xl font-bold tracking-tight text-brand-dark uppercase ml-17">{categoryTitle}</h2>
    </div>

    <div className="px-6 py-8 space-y-10">
      {items.map((plato) => (
        <div key={plato.id} className="relative">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h3 className="text-xl font-extrabold text-brand-dark flex-1 leading-tight uppercase tracking-tight">{plato.nombre}</h3>
            <span className="text-md font-bold text-brand-dark bg-brand-pink/40 px-3 py-1 rounded-xl whitespace-nowrap">$ {plato.precio.toFixed(2)}</span>
          </div>
          <p className="text-brand-dark/80 text-sm leading-relaxed mb-4 ">{plato.descripcion}</p>
          {/* El aspect-video mantiene una proporción agradable (16:9) sin ocupar toda la pantalla */}
          <div className="w-full mb-5 overflow-hidden rounded-2xl shadow-sm border border-brand-pink/10">
            <img 
              src={plato.url} // Reemplaza por tu variable de imagen
              alt={plato.nombre}
              className="w-full h-48 object-cover object-center transition-transform hover:scale-105 duration-700"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {plato.detalles.split(',').map((tag, i) => (
              <span key={i} className="text-[11px] uppercase tracking-widest font-bold text-brand-dark/40 bg-white border border-brand-pink/30 px-2 py-1 rounded-md">{tag.trim()}</span>
            ))}
          </div>
          <div className="w-16 h-[2px] bg-brand-pink/50 mt-6"></div>
        </div>
      ))}
    </div>

    <div className="fixed bottom-6 left-6 right-6 bg-brand-dark text-brand-pink p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
      <Info size={20} />
      <span className="text-[11px] font-bold uppercase tracking-wider">¿Alergias? Consulta con nuestro personal</span>
    </div>
  </div>
);


const Menu = () => {
    
const [selectedCategory, setSelectedCategory] = useState(null);

if (selectedCategory) {
    return (
      <CategoryView 
        categoryTitle={selectedCategory.title}
        items={MENU_DATA[selectedCategory.key]}
        onBack={() => setSelectedCategory(null)}
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
        <p className="text-brand-dark/60 text-sm uppercase tracking-widest">
          Selecciona una categoría
        </p>
        <div className="w-10 h-1 bg-brand-pink mx-auto mt-4 rounded-full"></div>
      </header>

      {/* Lista de Categorías */}
      <div className="space-y-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
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
        <p className="text-brand-dark/70 text-[12px] uppercase tracking-[0.3em]">
          La Chiclayanita • 2026
        </p>
      </footer>
    </div>
  );
};

export default Menu;