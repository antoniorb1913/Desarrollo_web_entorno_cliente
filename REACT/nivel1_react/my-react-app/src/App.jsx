import { useState } from 'react';

function App() {
  // 1. Estados para los 3 campos (Username, Email, Password)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Estados para los mensajes de error
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // --- FUNCIONES DE VALIDACIÓN

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
    // Validación mínima 7 caracteres
    if (value.length <= 6) {
      setUsernameError('El username debe tener más de 6 caracteres');
    } else {
      setUsernameError('');
    }
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    // Validación: debe contener '@' y '.'
    if (!value.includes('@') || !value.includes('.')) {
      setEmailError('El email debe contener @ y .');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
    // Validación: mínimo 8 caracteres
    if (value.length < 8) {
      setPasswordError('La password debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameError || emailError || passwordError) {
      alert('No se puede enviar: el formulario contiene errores');
    } else {
      alert(`Enviado: ${username}`);
    }
  };

  // Deshabilitar el botón Submit
  const esInvalido = usernameError || emailError || passwordError 
  || !username || !email || !password;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Miniretillo - Formulario Completo</h2>

      {/* Campo Username */}
      <div>
        Username: 
        <input type="text" value={username} onChange={handleUsername} />
        <p style={{ color: 'red' }}>{usernameError}</p> {/* Error en rojo */}
      </div>

      {/* Campo Email */}
      <div>
        Email: 
        <input type="text" value={email} onChange={handleEmail} />
        <p style={{ color: 'red' }}>{emailError}</p> {/* Error en rojo */}
      </div>

      {/* Campo Password */}
      <div>
        Password: 
        <input type="password" value={password} onChange={handlePassword} />
        <p style={{ color: 'red' }}>{passwordError}</p> {/* Error en rojo */}
      </div>

      {/* Botón deshabilitado si existe algún error */}
      <button disabled={esInvalido}>Submit</button>
    </form>
  );
}

export default App;