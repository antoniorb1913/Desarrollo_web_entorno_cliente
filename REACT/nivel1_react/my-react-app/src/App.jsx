function App() {
  return (
    // items-start evita que la tarjeta se estire hacia abajo
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      
      {/* h-fit hace que la tarjeta solo mida lo que mide su contenido */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm h-fit mt-10">
        
        {/* Título: Responsive (text-xl en móvil, md:text-2xl en escritorio) */}
        <h2 className="font-bold text-xl md:text-2xl text-gray-800">
          2º DAW
        </h2>

        {/* Responsive --> mt-2 en móvil, md:mt-4 en escritorio) */}
        <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
          Estamos en 2 º de DAW con Klara siendo esclavos.
        </p>

        {/* Botón con Hover --> subrayado, sombra y cambio de color */}
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg transition-all
          hover:shadow-lg hover:underline hover:bg-blue-700">
          Click aquí
        </button>

      </div>
    </div>
  );
}

export default App;