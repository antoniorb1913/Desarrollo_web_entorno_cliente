import Panel from './Panel'
import Contador from './Contador'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mi Panel de Control</h1>
      
      {/* Llamamos al componente Panel (Input + Mostrar/Ocultar) */}
      <Panel />
      
      {/* Línea divisoria para separar las secciones */}
      <hr />
      
      {/* Llamamos al componente Contador (+1 / -1) */}
      <Contador />
    </div>
  )
}

export default App