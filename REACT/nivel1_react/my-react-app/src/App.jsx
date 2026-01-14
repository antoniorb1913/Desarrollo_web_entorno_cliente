function App() {
  // Comenatrio antes del return punto 4.11
  return (
    <div>
      {/* Comenatrio punto 4.12 */}
      <h1>Nivel 1 de React desbloqueado</h1>
      <h1>Luego cambia el div por un Fragment vacío: <> ... </> y guarda.</h1>

      <ParentComponent/>
    </div>
  );
  
}
function ParentComponent() {
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  );
}

function UserComponent() {
  return <h2>User component</h2>;
}

function ProfileComponent() {
  return <h2>Profile component</h2>;
}

function FeedComponent() {
  return <h2>Feed component</h2>;
}

export default App;

