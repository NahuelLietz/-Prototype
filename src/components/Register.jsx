import { useNavigate } from 'react-router-dom';
import useFormFields from '../hooks/useFormFields.js';

export function Register() {
  const { values, handleChange } = useFormFields({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", values);
    navigate('/'); 
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email"
          placeholder="Correo electrónico"
          value={values.email}
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Contraseña"
          value={values.password}
          onChange={handleChange}
        />
        
        <button type="submit">Registrarse</button>
      </form>

      <button onClick={() => navigate(-1)}>
        Volver atrás
      </button>
    </div>
  );
}
export default Register;
