import { useState } from 'react';
import './App.css';

// EJERCICIO 5: Componente MyButton
function MyButton(props) {
  return (
    <button onClick={props.Fn} style={{
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#646cff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      margin: '10px'
    }}>
      Soy un botón custom y mi cuenta es: {props.count}
    </button>
  );
}

// EJERCICIO 5: Componente Avatar
function Avatar({ person, size }) {
  function getImageUrl(person, size = 's') {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
  }

  return (
    <img 
      className="avatar" 
      src={getImageUrl(person)} 
      alt={person.name}
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        margin: '10px'
      }}
    />
  );
}

// EJERCICIO FINAL: Componente Cientifico
function Cientifico({ cientifico }) {
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '15px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>
        {cientifico.nombre}
      </h2>
      <p style={{ margin: '5px 0' }}>
        <strong>Profesión:</strong> {cientifico.profesion}
      </p>
      <p style={{ margin: '5px 0' }}>
        <strong>Premios:</strong> {cientifico.premios.length} ({cientifico.premios.join(', ')})
      </p>
      <p style={{ margin: '5px 0' }}>
        <strong>Descubrió:</strong> {cientifico.descubrimiento}
      </p>
    </div>
  );
}

// Componente principal
function App() {
  // EJERCICIO 5: Estado para el contador
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);

  // EJERCICIO FINAL: Datos de científicos
  const cientificos = [
    {
      nombre: 'Maria Skłodowska-Curie',
      profesion: 'física y química',
      premios: ['Premio Nobel de Física', 'Premio Nobel de Química', 'Medalla Davy', 'Medalla Matteucci'],
      descubrimiento: 'polonio (elemento químico)'
    },
    {
      nombre: 'Katsuko Saruhashi',
      profesion: 'geoquímica',
      premios: ['Premio Miyake de geoquímica', 'Premio Tanaka'],
      descubrimiento: 'un método para medir el dióxido de carbono en el agua de mar'
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* EJERCICIO 5: Sección del contador */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '20px', background: '#f0f0f0', borderRadius: '10px' }}>
        <h2>Ejercicio 5 - Componentes y Props</h2>
        <MyButton count={count} Fn={increment} />
        <p>Contador: {count}</p>
      </div>

      {/* EJERCICIO 5: Sección de Avatares */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3>Perfiles con Componente Avatar</h3>
        <Avatar size={100} person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} />
        <Avatar size={80} person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} />
        <Avatar size={50} person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
      </div>

      {/* EJERCICIO FINAL: Científicos Notables */}
      <header style={{
        textAlign: 'center', marginBottom: '30px', padding: '20px',
        backgroundColor: '#2c3e50', color: 'white', borderRadius: '10px'
      }}>
        <h1 style={{ margin: 0 }}>Científicos Notables</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>
          Contribuciones extraordinarias a la ciencia
        </p>
      </header>

      <main>
        {cientificos.map((cientifico, index) => (
          <Cientifico key={index} cientifico={cientifico} />
        ))}
      </main>

      <footer style={{
        textAlign: 'center', marginTop: '30px', padding: '20px',
        borderTop: '1px solid #ddd', color: '#666'
      }}>
        <p>Guía de Laboratorio V - Programación Web - UCA</p>
      </footer>
    </div>
  );
}

export default App;