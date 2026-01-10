import { ArrowLeft, Info } from 'lucide-react';


const CategoryView = ({ categoryTitle, items, onBack }) => {
  return (
    <div className="min-h-screen bg-brand-bg pb-20">
      {/* Navbar Superior Fijo */}
      <div className="sticky top-0 bg-brand-bg/80 backdrop-blur-md z-20 px-6 py-5 flex items-center border-b border-brand-pink/10">
        <button onClick={onBack} className="p-2 -ml-2 active:scale-90 transition-transform">
          <ArrowLeft size={24} className="text-brand-dark" />
        </button>
        <h2 className="ml-4 text-xl font-bold tracking-tight text-brand-dark uppercase italic">
          {categoryTitle}
        </h2>
      </div>

      <div className="px-6 py-6 space-y-8">
        {items.map((plato) => (
          <div key={plato.id} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-brand-dark pr-4 flex-1 leading-tight uppercase">
                {plato.nombre}
              </h3>
              <span className="text-lg font-bold text-brand-dark bg-brand-pink/30 px-3 py-1 rounded-xl">
                S/ {plato.precio.toFixed(2)}
              </span>
            </div>

            <p className="text-brand-dark/70 text-sm leading-relaxed mb-3 italic">
              {plato.descripcion}
            </p>

            {/* Etiquetas de Ingredientes */}
            <div className="flex flex-wrap gap-2 mb-4">
              {plato.detalles.split(',').map((tag, index) => (
                <span 
                  key={index} 
                  className="text-[10px] uppercase tracking-wider font-medium text-brand-dark/50 bg-white border border-brand-pink/20 px-2 py-1 rounded-lg"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>

            {/* Separador elegante */}
            <div className="w-full h-[1px] bg-gradient-to-r from-brand-pink/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Floating Action Tip */}
      <div className="fixed bottom-6 right-6 left-6 bg-brand-dark text-brand-pink p-4 rounded-2xl flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <Info size={18} />
          <span className="text-xs font-medium uppercase tracking-tighter">¿Alguna alergia? Infórmanos</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;