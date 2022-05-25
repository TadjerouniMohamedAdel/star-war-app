import React from 'react';
import { useParams } from 'react-router-dom';
import useGetMovie from '../../../hooks/useGetMovie';

const Movie: React.FC = () => {
  const params = useParams();

  const { isLoading, movie, error } = useGetMovie(
    params.movieId ? parseInt(params.movieId, 10) : undefined
  );
  console.log(isLoading, movie, error);
  return <div>Movie</div>;
};

export default Movie;
