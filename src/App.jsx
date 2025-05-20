// App.jsx
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="app">
      <h1>🎬 Buscador de Películas</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Ingresa el nombre de una película"
        />
        <button>Buscar</button>
      </div>
    </div>
  );
}

export default App;
