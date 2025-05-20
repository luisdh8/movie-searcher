// App.jsx
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) return;
  
    setLoading(true);
    setError('');
    setMovies([]);
  
    try {
      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${year ? `&y=${year}` : ''}`;
      const response = await fetch(url);
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

  const handleClear = () => {
    setQuery('');
    setYear('');
    setMovies([]);
    setError('');
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
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Año de lanzamiento (opcional)"
          style={{ marginLeft: '0.5rem' }}
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClear}>
          Limpiar
        </button>

      </div>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ marginBottom: '1rem' }}>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
              alt={movie.Title}
              width="150"
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
