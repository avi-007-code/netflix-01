import { useState, useEffect } from 'react';

function MovieDelete() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');

  // Fetch genres on component mount
  useEffect(() => {
    fetch('http://localhost:8060/api/admin/viewGenre')
      .then(res => res.json())
      .then(data => setGenres(data));
  }, []);

  // Fetch movies when genre changes
  useEffect(() => {
    if (selectedGenre) {
      fetch(`http://localhost:8060/api/admin/MovieByGenre/${selectedGenre}`)
        .then(res => res.json())
        .then(data => setMovies(data));
    }
  }, [selectedGenre]);

  const deleteMovie = async () => {
    try {
         e.preventDefault();
      const response = await fetch(`http://localhost:8060/api/admin/deleteMovie/${selectedMovie}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.json();

      if (response.ok) {
        alert('Movie deleted successfully');
        setMovies(movies.filter(movie => movie.id !== parseInt(selectedMovie)));
      } else {
        alert('Failed to delete movie');
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div>
      <h2>Delete a Movie</h2>
      
      <label>Choose Genre:</label>
      <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>

      {selectedGenre && (
        <>
          <label>Choose Movie:</label>
          <select onChange={(e) => setSelectedMovie(e.target.value)} value={selectedMovie}>
            <option value="">Select Movie</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>{movie.title}</option>
            ))}
          </select>
          <button onClick={deleteMovie} disabled={!selectedMovie}>Delete Movie</button>
        </>
      )}
    </div>
  );
}

export default MovieDelete;
