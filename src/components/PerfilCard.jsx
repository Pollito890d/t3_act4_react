// src/components/PerfilCard.jsx
import { useState } from 'react';

function PerfilCard({ nombre, profesion, biografia, avatar, habilidades }) {
  // c) Estado con useState para interacción en pantalla
  const [likes, setLikes] = useState(0);
  const [mostrarBio, setMostrarBio] = useState(false);

  // Manejador del evento de me gusta
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Manejador para alternar la visibilidad de la biografía
  const toggleBio = () => {
    setMostrarBio(!mostrarBio);
  };

  return (
    <div className="card">
      <img src={avatar} alt={`Avatar de ${nombre}`} className="card-avatar" />
      
      {/* b) Uso de Props */}
      <h2 className="card-name">{nombre}</h2>
      <h4 className="card-role">{profesion}</h4>

      {/* Renderizado condicional para mostrar/ocultar biografía */}
      <button onClick={toggleBio} className="btn btn-secondary">
        {mostrarBio ? 'Ocultar Biografía' : 'Ver Biografía'}
      </button>

      {mostrarBio && <p className="card-bio">{biografia}</p>}

      {/* d) Lista dinámica mapeada a partir de un arreglo */}
      <div className="card-skills">
        <h3>Habilidades Técnicas:</h3>
        <ul>
          {habilidades.map((habilidad, index) => (
            <li key={index} className="skill-item">
              {habilidad}
            </li>
          ))}
        </ul>
      </div>

      {/* Contador interactivo con estado */}
      <div className="card-footer">
        <button onClick={handleLike} className="btn btn-primary">
          ❤️ Me gusta ({likes})
        </button>
      </div>
    </div>
  );
}

export default PerfilCard;