import { useState } from "react";
import { useNavigate } from "react-router";
import Register from "./Register.jsx";

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