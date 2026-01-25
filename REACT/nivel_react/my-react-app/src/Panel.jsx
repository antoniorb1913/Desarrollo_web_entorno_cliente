import { useState } from 'react'

function Panel() {
    // Estado para guardar el texto del input
    const [modo, setModo] = useState('chill')
    
    // Estado booleano para mostrar u ocultar
    const [mostrar, setMostrar] = useState(true)

    return (
    <div>
        {/* Input controlado: onChange actualiza el estado 'modo' al escribir */}
        <input 
        type="text" 
        value={modo} 
        onChange={(e) => setModo(e.target.value)} 
        />
        {/* Mostramos el texto del estado en tiempo real */}
        <p>Modo: <strong>{modo}</strong></p>

        {/* Botón con toggle: cambia el estado 'mostrar' al contrario de lo que tenga */}
        <button onClick={() => setMostrar(!mostrar)}>
        {/* El texto del botón cambia según el estado (Punto opcional) */}
        {mostrar ? 'Ocultar' : 'Mostrar'} sección
        </button>

        {/* Renderizado condicional: si 'mostrar' es true, enseña el párrafo */}
        {mostrar && <p>Esta es la sección que se oculta.</p>}
    </div>
    )
}

export default Panel