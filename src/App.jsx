// src/App.jsx
import Header from './components/header.jsx';
import PerfilCard from './components/PerfilCard';
import './App.css';
import miFoto from './assets/image1.png';

function App() {
  // Arreglo de datos que pasaremos como props
  const usuario = {
    nombre: "Dante Martínez Villalobos",
    profesion: "Ing. en Sistemas Computacionales",
    biografia: "Estudiante apasionado por el desarrollo web, la integración de APIs y el diseño de componentes reactivos en React.",
    avatar: miFoto,
    habilidades: [
      "JavaScript Moderno (ES6+)",
      "React & Vite",
      "HTML5 & CSS3 Avanzado",
      "Git & GitHub",
      "Arquitectura de APIs REST",
      "Le sabe al GET, POST, PUT, y al FEST"
    ]
  };

  return (
    <div className="app-container">
      <Header />
      <PerfilCard 
        nombre={usuario.nombre}
        profesion={usuario.profesion}
        biografia={usuario.biografia}
        avatar={usuario.avatar}
        habilidades={usuario.habilidades}
      />
    </div>
  );
}

export default App;