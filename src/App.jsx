// App.jsx
import { useState } from 'react';
import './App.css';

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
      setLoading(false);
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
      <header className="header">
        <div className="logo">
          <h1>CineSearch</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="#">Favoritos</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Buscar película..."
              className="search-input"
            />
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Año"
              className="year-input"
            />
            <button onClick={handleSearch} className="search-button">Buscar</button>
            <button onClick={handleClear} className="clear-button">Limpiar</button>
          </div>
        </div>

        {loading && <div className="loading">Cargando resultados...</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <div className="movie-poster">
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                  alt={movie.Title}
                />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.Title}</h3>
                <span className="movie-year">{movie.Year}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© Luis Diaz - 2025 CineSearch</p>
        </div>
      </footer>
    </div>
  );
}

export default App;