import { useNavigate } from "react-router-dom";

function Home() { 
  const navigate = useNavigate();

  const handleGoToRegister = () => {
    
    console.log("Navegando hacia registro...");
    
    navigate('/register'); 
  };

  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <button onClick={handleGoToRegister}>
        Ir a Registro
      </button>
    </div>
  );
}

export default Home;