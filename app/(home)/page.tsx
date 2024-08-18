'use client';
import { useEffect, useState } from 'react';

//root segment
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );

    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? 'LOADING...' : JSON.stringify(movies)}</div>;
}

//API = nomad-movies.nomadcoders.workers.dev