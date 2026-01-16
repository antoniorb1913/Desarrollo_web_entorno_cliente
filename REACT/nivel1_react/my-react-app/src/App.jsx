import { useState } from "react";

function ParentComponent() {
  // 1. Crea un estado name con valor inicial 'Juanaco'
  const [name, setName] = useState("Juanaco");

  return (
    <>
      {/* 2. Muestra el nombre en pantalla */}
      <h1>Hola chavales {name}</h1>

      {/* 3. Botón que cambia el nombre a 'Juanky' */}
      <button onClick={() => setName("Juanky")}>
        Cambiar Juanky
      </button>

      {/* 4. Segundo botón que cambia el nombre a otro diferente (Iker) */}
      <button onClick={() => setName("Iker")}>
        Cambiar a Iker
      </button>
    </>
  );
}

export default ParentComponent;