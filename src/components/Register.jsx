import { useState } from 'react';
import { useNavigate } from 'react-router'; // 1. Importas useNavigate

export function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  // 2. Inicializas el hook
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", formData);
    navigate('/'); 
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input 
          type="password" 
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        
        <button type="submit">Registrarse</button>
      </form>

      {/* También puedes usarlo en un botón normal para cancelar o volver */}
      <button onClick={() => navigate(-1)}>
        Volver atrás
      </button>
    </div>
  );
}
export default Register;