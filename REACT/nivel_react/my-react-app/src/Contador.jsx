import { useState } from 'react'

function Contador() {
    // Definimos el estado 'count' empezando en 0
    const [count, setCount] = useState(0)

    // Función para aumentar el contador
    const sumar = () => setCount(count + 1)

    // Función para restar con la condición de no bajar de 0
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div style={{ marginTop: '20px' }}>
            {/* Mostramos el valor del estado en la interfaz */}
            <h3>Contador: {count}</h3>
            
            {/* onClick para ejecutar las funciones de arriba */}
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
        </div>
    )
}

export default Contador