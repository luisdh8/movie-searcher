// App.jsx
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
  
    setLoading(true);
    setError('');
    setMovies([]);
  
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await response.json();
  
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'No se encontraron resultados.');
      }
    } catch (err) {
      setError('Hubo un problema al conectar con la API.');
    } finally {
      setLoading(false);
    }
  };

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
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}

export default App;
