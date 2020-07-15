import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      
      {/* Title */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* Posters */}
        {movies.map(movie => (
          <img 
            key={movie.id}
            className="row_poster" 
            src={`${baseUrl}${movie.poster_path}`} 
            alt={movie.name}
          />
        ))}
      </div>
      
      {/* Container -> posts */}

    </div>
  );
}

export default Row;