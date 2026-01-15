function App() {
  const users = [
    { id: 1, name: 'Jose', role: 'Web-Developer' },
    { id: 2, name: 'Estefanía', role: 'Web-Designer' },
    { id: 3, name: 'Rubén', role: 'Team-Leader' },
    { id: 4, name: 'Iker Rios', role: 'boss' },
  ];

  return (
    <>
      <p>Lista de usuarios activos:</p>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={user.role}> 
            <strong>{user.name}</strong> — {user.role}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;