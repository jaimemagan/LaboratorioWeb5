import './App.css'

// Componente Cientifico para mostrar información de cada científico
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
        <strong>Premios:</strong> {cientifico.premios.length} 
        ({cientifico.premios.join(', ')})
      </p>
      <p style={{ margin: '5px 0' }}>
        <strong>Descubrió:</strong> {cientifico.descubrimiento}
      </p>
    </div>
  );
}

// Componente principal de la aplicación
function App() {
  // Datos de los científicos
  const cientificos = [
    {
      nombre: 'Maria Skłodowska-Curie',
      profesion: 'física y química',
      premios: [
        'Premio Nobel de Física', 
        'Premio Nobel de Química',
        'Medalla Davy', 
        'Medalla Matteucci'
      ],
      descubrimiento: 'polonio (elemento químico)'
    },
    {
      nombre: 'Katsuko Saruhashi',
      profesion: 'geoquímica',
      premios: [
        'Premio Miyake de geoquímica', 
        'Premio Tanaka'
      ],
      descubrimiento: 'un método para medir el dióxido de carbono en el agua de mar'
    }
  ];

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#2c3e50',
        color: 'white',
        borderRadius: '10px'
      }}>
        <h1 style={{ margin: 0 }}>Científicos Notables</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>
          Contribuciones extraordinarias a la ciencia
        </p>
      </header>

      <main>
        {cientificos.map((cientifico, index) => (
          <Cientifico 
            key={index}
            cientifico={cientifico}
          />
        ))}
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        borderTop: '1px solid #ddd',
        color: '#666'
      }}>
        <p>Guía de Laboratorio V - Programación Web - UCA</p>
      </footer>
    </div>
  );
}

export default App